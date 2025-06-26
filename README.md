# Test-Dream 🧪✨

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![npm version](https://badge.fury.io/js/testdream.svg)](https://www.npmjs.com/package/testdream)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

> Transform your React components into fully-tested powerhouses with AI-driven test generation. TestDream leverages Claude AI to create comprehensive, intelligent unit tests that actually understand your code, using React Testing Library best practices.

## 🚀 Why TestDream?

Traditional test generation tools just create boilerplate. TestDream understands your component's logic, dependencies, and edge cases to generate meaningful tests that:

- ✅ Test component rendering and interactions
- 🔄 Handle hooks and state management
- 🛡️ Cover error boundaries and edge cases
- 🎯 Focus on user interactions and accessibility
- 🧩 Mock custom hooks and context providers
- 📊 Generate coverage reports automatically

## 🎥 See it in Action

![TestDream Demo](demo.gif)

## 🛠️ Quick Start

### Installation

```bash
npm install testdream @testing-library/react @testing-library/jest-dom --save-dev
```

### Configuration

Create a `testdream.config.ts` in your project root:

```typescript
export default {
  apiKey: 'your-anthropic-api-key',
  targetPath: 'src/components/**/*.{tsx,jsx}',
  outputDir: 'src/__tests__',
  coverage: {
    threshold: 80,
    reporter: ['html', 'text']
  }
}
```

### Usage

```bash
# Generate tests for all components
npx testdream generate

# Generate test for a specific component
npx testdream generate src/components/UserProfile.tsx

# Watch mode - regenerate tests on component changes
npx testdream watch
```

## 🎯 Features

### 🤖 AI-Powered Test Generation
TestDream uses Claude AI to analyze your components and generate tests that:
- Understand component logic and rendering patterns
- Create meaningful user interaction scenarios
- Generate realistic prop combinations
- Handle accessibility testing
- Test error boundaries and loading states

### 🧪 Comprehensive Testing
- Component rendering tests
- User interaction testing
- Hook testing
- Context testing
- Async operation testing
- Error boundary testing
- Accessibility testing

### 🔧 Developer Experience
- TypeScript support
- Watch mode
- Custom templates
- VSCode extension
- GitHub Actions integration
- Detailed reporting
- Coverage analysis

## 📊 Example Output

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserProfile } from './UserProfile';
import { UserContext } from '../context/UserContext';

describe('UserProfile', () => {
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  it('renders user information correctly', () => {
    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <UserProfile />
      </UserContext.Provider>
    );

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
  });

  // More intelligent tests...
});
```

## 🌟 Success Stories

"TestDream transformed our React testing workflow. We went from dreading test writing to having comprehensive test coverage that actually catches bugs!" - Alex Chen, Senior Frontend Engineer

## 🤝 Contributing

We love contributions! Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

### Development Setup

```bash
# Clone the repo
git clone https://github.com/holasoymalva/test-dream.git

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev
```

## 📝 Road Map

- [ ] Support for Redux/MobX testing
- [ ] AI-powered test maintenance
- [ ] Performance testing generation
- [ ] React Native support
- [ ] Custom test strategy definitions
- [ ] Integration with popular CI/CD platforms

## 📚 Documentation

Visit our [comprehensive documentation](https://testdream.dev) for:
- Detailed API reference
- Advanced configuration
- Best practices
- Troubleshooting guide
- Migration guides
- Examples & tutorials

## 🌈 Community

- [GitHub Discussions](https://github.com/holasoymalva/testdream/discussions)
- [Twitter](https://twitter.com/holasoymalva)
- [Blog](https://testdream.dev/blog)

## 🔒 Security

Found a security issue? Please check our [Security Policy](SECURITY.md).

## 📄 License

TestDream is [MIT licensed](LICENSE).

---

<p align="center">Made with ❤️ by the TestDream team</p>
<p align="center">
  <a href="https://github.com/sponsors/holasoymalva">Support our work</a> •
  <a href="https://testdream.dev">Website</a> •
  <a href="https://twitter.com/holasoymalva">Twitter</a>
</p>
