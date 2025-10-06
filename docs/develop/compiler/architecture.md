---
id: architecture
title: Compiler Architecture
description: Deep dive into Rive compiler internals and architecture
sidebar_label: Architecture
sidebar_position: 1
---

# Compiler Architecture

This document describes the internal architecture of the Rive compiler.

## Overview

The Rive compiler is built in Rust and follows a multi-stage compilation process:

```
Source Code → Lexer → Parser → AST → Semantic Analysis → Code Generation → Target Code
```

## Components

### Lexer

The lexer (tokenizer) converts source code into tokens:

### Parser

The parser builds an Abstract Syntax Tree (AST) from tokens:

### Semantic Analysis

Semantic analysis performs type checking and name resolution:

- Liveness Analysis
- Escape Analysis
- Alias Analysis
- Inliner

### Code Generation

Code generation produces target code (currently Rust-Oriented IR):

## Memory Management

Rive uses Auto Value Semantic (aka. AVS) system for memory safety:

- No garbage collector
- Compile-time memory safety
- Zero-cost abstractions

## Error Handling

The compiler provides detailed error messages:

```bash
rive::semantic

  × Variable 'x' type mismatch: expected 'Int', found 'Text'
   ╭─[main.rive:2:18]
 1 │ fun main() {
 2 │     let x: Int = "hello"
   ·                  ───┬───
   ·                     ╰── here
 3 │ }
   ╰────

Error: Semantic analysis failed
```

## Target Platforms

Currently supported targets:

- x86_64 Linux
- x86_64 Windows
- x86_64 macOS

## Development

### Building the Compiler

```bash
git clone https://github.com/rive-lang/rive
cd rive
cargo build --release
```

### Running Tests

```bash
cargo test
```

### Code Organization

```
├── crates/
│   ├── rive-cli/
│   ├── rive-codegen/
│   ├── rive-core/
│   ├── rive-ir/
│   ├── rive-lexer/
│   ├── rive-parser/
│   ├── rive-semantic/
│   └── rive-utils/
└── Cargo.toml
```

## Contributing

See [Contributing Guide](../community/contributing.md) for details on how to contribute to the compiler.
