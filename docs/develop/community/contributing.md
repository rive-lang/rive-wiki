---
id: contributing
title: Contributing
description: Guide for contributing to the Rive project
sidebar_label: Contributing
sidebar_position: 1
---

# Contributing to Rive

Thank you for your interest in contributing to Rive! This guide will help you get started.

## Getting Started

### Prerequisites

- Rust (latest stable version)
- Git
- Basic knowledge of compiler design (recommended)

### Setting Up Development Environment

1. Fork the repository on GitHub
2. Clone your fork:

```bash
git clone https://github.com/your-username/rive.git
cd rive
```

3. Build the project:

```bash
cargo build
```

4. Run tests:

```bash
cargo test
```

## Areas for Contribution

### Compiler Development

- **Lexer**: Tokenization improvements
- **Parser**: Syntax tree construction
- **Semantic Analysis**: Type checking, name resolution
- **Code Generation**: LLVM IR generation
- **Error Messages**: Better error reporting

### Language Features

- **Syntax**: New language constructs
- **Standard Library**: Core functionality
- **Type System**: Advanced type features
- **Memory Management**: Ownership and borrowing

### Documentation

- **Language Guide**: Tutorial content
- **API Documentation**: Function and type docs
- **Examples**: Code samples and tutorials
- **Architecture**: Compiler internals

### Tooling

- **IDE Support**: Language server protocol
- **Debugger**: Debugging tools
- **Profiler**: Performance analysis
- **Package Manager**: Dependency management

## Development Workflow

### Making Changes

1. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes
3. Write tests for new functionality
4. Ensure all tests pass:

```bash
cargo test
```

5. Format your code:

```bash
cargo fmt
```

6. Run the linter:

```bash
cargo clippy
```

### Submitting Changes

1. Commit your changes:

```bash
git add .
git commit -m "Add feature: brief description"
```

2. Push to your fork:

```bash
git push origin feature/your-feature-name
```

3. Create a Pull Request on GitHub

## Code Style

### Rust Code

Follow Rust's standard formatting and conventions:

```rust
// Use snake_case for variables and functions
let user_name = "Alice";

// Use PascalCase for types
struct UserProfile {
    name: String,
    email: String,
}

// Use SCREAMING_SNAKE_CASE for constants
const MAX_RETRY_COUNT: u32 = 3;
```

### Rive Code

Follow Rive's coding conventions:

```rive
// Use snake_case for variables and functions
let user_name = "Alice";

fun calculate_total_price() -> Float {
    // ...
}

// Use PascalCase for types
struct UserProfile {
    name: String,
    email: String,
}
```

## Testing

### Writing Tests

Add tests for new functionality:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_new_feature() {
        // Test implementation
        assert_eq!(expected, actual);
    }
}
```

### Test Categories

- **Unit Tests**: Individual function testing
- **Integration Tests**: Component interaction testing
- **Compiler Tests**: End-to-end compilation testing
- **Performance Tests**: Benchmarking

## Documentation

### Code Documentation

Document public APIs:

```rust
/// Calculates the area of a rectangle.
/// 
/// # Arguments
/// * `width` - The width of the rectangle
/// * `height` - The height of the rectangle
/// 
/// # Returns
/// The area as a floating-point number.
pub fn calculate_area(width: f64, height: f64) -> f64 {
    width * height
}
```

### Language Documentation

When adding new language features:

1. Update the language reference
2. Add examples to the tutorial
3. Update the grammar specification
4. Add error message documentation

## Issue Reporting

### Bug Reports

When reporting bugs, include:

- Rive version
- Operating system
- Steps to reproduce
- Expected behavior
- Actual behavior
- Error messages (if any)

### Feature Requests

When requesting features:

- Clear description of the feature
- Use cases and motivation
- Proposed syntax (if applicable)
- Implementation considerations

## Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Help others learn and grow

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General discussion and questions
- **Pull Requests**: Code reviews and feedback

## Recognition

Contributors are recognized in:

- **CONTRIBUTORS.md**: List of all contributors
- **Release Notes**: Major contributions highlighted
- **Documentation**: Credit for significant contributions

## Getting Help

If you need help:

1. Check existing issues and discussions
2. Ask questions in GitHub Discussions
3. Join the community chat (if available)
4. Reach out to maintainers

Thank you for contributing to Rive! 🚀
