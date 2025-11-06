# Contributing to NairaRolls

Thank you for your interest in contributing to NairaRolls! This document provides guidelines and instructions for contributing to the project.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node version)

### Suggesting Features

Feature suggestions are welcome! Please:
- Check existing issues first
- Provide clear use case
- Explain expected behavior
- Consider implementation complexity

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
6. **Push and create a Pull Request**

## 📝 Commit Message Guidelines

We follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

**Examples:**
```
feat: add email verification to registration
fix: resolve wallet connection timeout issue
docs: update README with deployment instructions
```

## 🧪 Testing

Before submitting:

### Frontend
```bash
cd frontend
npm run build    # Ensure build succeeds
npm run lint     # Check for linting errors
```

### Smart Contracts
```bash
cd NairaRollsMultisig
forge build      # Compile contracts
forge test       # Run tests
```

## 💻 Development Setup

1. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Nairarolls.git
   cd Nairarolls
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env.local
   # Add your API keys
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🎨 Code Style

### TypeScript/React
- Use TypeScript strict mode
- Functional components with hooks
- Avoid `any` type
- Use meaningful variable names
- Add comments for complex logic

### Solidity
- Follow Solidity style guide
- Use NatSpec comments
- Write comprehensive tests
- Gas optimization where possible

## 📋 Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure all tests pass**
4. **Update CHANGELOG.md**
5. **Request review** from maintainers
6. **Address feedback** promptly

### PR Title Format
```
feat: add batch payment scheduling
fix: resolve approval workflow bug
docs: improve installation instructions
```

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
How has this been tested?

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests passing
```

## 🔍 Code Review

Reviewers will check:
- Code quality and style
- Test coverage
- Documentation
- Performance implications
- Security considerations

## 🚀 Release Process

Maintainers handle releases:
1. Update version in package.json
2. Update CHANGELOG.md
3. Create release tag
4. Deploy to production

## 📞 Getting Help

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and community support
- **Documentation**: Check README and guides

## 🙏 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## 📜 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the project
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information
- Unprofessional conduct

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to NairaRolls!** 🎉

Your contributions help make Web3 payroll accessible to everyone.
