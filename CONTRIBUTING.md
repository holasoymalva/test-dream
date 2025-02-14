# Contributing to TestDream

First off, thank you for considering contributing to TestDream! It's people like you that make TestDream such a great tool for the React community. This document provides guidelines and steps for contributing.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to [maintainers@testdream.dev](mailto:maintainers@testdream.dev).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots or animated GIFs if possible
* Include your environment details (OS, Node.js version, npm version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* A clear and descriptive title
* A detailed description of the proposed functionality
* Examples of how the feature would be used
* Any relevant information about why this enhancement would be useful

### Pull Requests

Please follow these steps to have your contribution considered by the maintainers:

1. Follow the [styleguides](#styleguides)
2. After you submit your pull request, verify that all status checks are passing

### Development Setup

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/your-username/testdream.git
```

3. Install dependencies:
```bash
cd testdream
npm install
```

4. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

5. Make your changes and test them:
```bash
npm run test
npm run lint
```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐛 `:bug:` when fixing a bug
    * ✨ `:sparkles:` when adding a new feature
    * 📝 `:memo:` when writing docs
    * 🔧 `:wrench:` when updating configuration files
    * ⚡️ `:zap:` when improving performance

### TypeScript Styleguide

* Use TypeScript for all new code
* Follow the existing code style
* Use descriptive variable names
* Add types for all variables and function parameters
* Use interfaces over types when possible
* Document complex functions with JSDoc comments

Example:

```typescript
/**
 * Generates tests for a React component using AI analysis
 * @param component - The React component to analyze
 * @param options - Configuration options for test generation
 * @returns Promise containing the generated test code
 */
async function generateTests(
  component: React.ComponentType<any>,
  options?: TestGenerationOptions
): Promise<TestResult> {
  // Implementation
}
```

### Testing Styleguide

* Write tests using React Testing Library
* Follow Testing Library's guiding principles
* Test component behavior, not implementation
* Use accessible queries whenever possible
* Write descriptive test names
* Group related tests using describe blocks

Example:

```typescript
describe('Button', () => {
  it('should display the correct label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should handle clicks correctly', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Documentation Styleguide

* Use Markdown for documentation
* Include code examples when relevant
* Keep line length to a maximum of 80 characters
* Use descriptive link texts
* Include images and diagrams when they add value
* Update the README.md if necessary

## Project Structure

```
testdream/
├── src/
│   ├── core/           # Core functionality
│   ├── generators/     # Test generation logic
│   ├── analyzers/      # Component analysis
│   ├── templates/      # Test templates
│   └── utils/          # Utility functions
├── tests/              # Test files
├── docs/               # Documentation
└── examples/           # Example components
```

## Review Process

The core team looks at Pull Requests on a regular basis. After feedback has been given we expect responses within two weeks. After two weeks we may close the PR if it isn't showing any activity.

## Community

Join our [Discord server](https://discord.gg/testdream) to chat with other contributors and get help with your contributions.

## Questions?

If you have any questions, please feel free to contact the maintainers or open an issue on GitHub.

---

Again, thank you for your contribution! We appreciate your help in making TestDream better for everyone.
