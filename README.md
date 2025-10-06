# Rive Wiki

Welcome to the official documentation website for the Rive programming language! This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## 🌊 About Rive

Rive is a modern systems programming language designed with null safety, expressive control flow, and Rust-like performance. This wiki contains comprehensive documentation covering:

- **Language Guide**: Syntax, operators, control flow, and functions
- **Compiler Architecture**: Understanding the Rive compiler pipeline
- **Examples**: Practical code examples and patterns
- **Development**: Workspace setup and contribution guidelines

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rive-lang/rive-wiki.git
cd rive-wiki

# Install dependencies
pnpm install
```

### Local Development

```bash
# Start development server (English)
pnpm start

# Start development server (Chinese)
pnpm start -- --locale zh-Hans
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

The site supports both English and Chinese (Simplified) languages. Use the language switcher in the top navigation to switch between languages.

### Build

```bash
# Build for production
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 🌐 Internationalization

This documentation supports multiple languages:

- **English** (default): `/`
- **简体中文**: `/zh/`

### Adding Translations

1. Generate translation files:

```bash
pnpm write-translations -- --locale zh
```

2. Translate the generated files in `i18n/zh/`

3. Copy and translate documentation files to `i18n/zh/docusaurus-plugin-content-docs/current/`

## 🚀 Deployment

### GitHub Pages

Using SSH:

```bash
USE_SSH=true pnpm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Manual Deployment

```bash
# Build the site
pnpm build

# Deploy the build/ directory to your hosting service
# The site will be available at the configured baseUrl
```

## 🤝 Contributing

We welcome contributions to improve the Rive documentation! Please see our [Contributing Guide](https://github.com/rive-lang/rive/blob/main/CONTRIBUTING.md) for details.

### Documentation Guidelines

- Follow the [Docusaurus documentation standards](https://docusaurus.io/docs/docs-introduction)
- Use clear, concise language
- Include code examples where helpful
- Test your changes locally before submitting

### Reporting Issues

Found an issue with the documentation? Please report it on our [GitHub Issues](https://github.com/rive-lang/rive-wiki/issues) page.

## 📄 License

This documentation is licensed under the same terms as the Rive project. See [LICENSE](./LICENSE) for details.

---

Built with ❤️ using [Docusaurus](https://docusaurus.io/) for the Rive programming language community.
