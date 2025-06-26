import { glob } from 'glob';
import ora from 'ora';
import chalk from 'chalk';
import path from 'path';
import { ConfigLoader } from '../../core/config/ConfigLoader';
import { ComponentAnalyzer } from '../../core/analyzer/ComponentAnalyzer';
import { TestGenerator } from '../../core/generator/TestGenerator';
import { TestGenerationResult } from '../../types';

interface GenerateOptions {
  config?: string;
  output?: string;
  overwrite?: boolean;
}

export async function generateCommand(
  targetPath?: string,
  options?: GenerateOptions
): Promise<void> {
  const spinner = ora('Loading configuration...').start();

  try {
    // Load configuration
    const configLoader = new ConfigLoader();
    const config = await configLoader.load(options?.config);

    if (options?.output) {
      config.outputDir = options.output;
    }

    // Validate API key
    if (!config.apiKey) {
      throw new Error('API key is required. Set it in config or environment variable ANTHROPIC_API_KEY');
    }

    spinner.text = 'Finding components...';

    // Find component files
    const pattern = targetPath || config.targetPath;
    const files = await glob(pattern, { ignore: ['**/node_modules/**'] });

    if (files.length === 0) {
      spinner.fail('No component files found');
      return;
    }

    spinner.succeed(`Found ${files.length} component(s)`);

    // Initialize services
    const analyzer = new ComponentAnalyzer();
    const generator = new TestGenerator(config);

    const results: TestGenerationResult[] = [];

    // Process each component
    for (const file of files) {
      const fileSpinner = ora(`Processing ${path.basename(file)}...`).start();

      try {
        // Analyze component
        const componentInfo = await analyzer.analyze(file);

        // Generate test
        const result = await generator.generate(componentInfo, {
          overwrite: options?.overwrite || false
        });

        results.push(result);

        if (result.success) {
          fileSpinner.succeed(`Generated test for ${path.basename(file)}`);
        } else {
          fileSpinner.fail(`Failed to generate test for ${path.basename(file)}: ${result.error}`);
        }
      } catch (error) {
        fileSpinner.fail(`Error processing ${path.basename(file)}: ${error.message}`);
        results.push({
          componentPath: file,
          testPath: '',
          success: false,
          error: error.message
        });
      }
    }

    // Summary
    console.log('\n' + chalk.bold('Summary:'));
    const successful = results.filter(r => r.success).length;
    console.log(chalk.green(`✓ ${successful} tests generated successfully`));
    
    if (successful < results.length) {
      console.log(chalk.red(`✗ ${results.length - successful} tests failed`));
    }

  } catch (error) {
    spinner.fail(`Error: ${error.message}`);
    process.exit(1);
  }
}
