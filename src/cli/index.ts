import { Command } from 'commander';
import chalk from 'chalk';
import { version } from '../../package.json';
import { generateCommand } from './commands/generate';
import { watchCommand } from './commands/watch';

const program = new Command();

program
  .name('testdream')
  .description('AI-powered React component test generation')
  .version(version);

program
  .command('generate [path]')
  .description('Generate tests for React components')
  .option('-c, --config <path>', 'Path to config file')
  .option('-o, --output <dir>', 'Output directory for tests')
  .option('-w, --overwrite', 'Overwrite existing tests')
  .action(generateCommand);

program
  .command('watch [path]')
  .description('Watch for component changes and regenerate tests')
  .option('-c, --config <path>', 'Path to config file')
  .action(watchCommand);

program.parse();
