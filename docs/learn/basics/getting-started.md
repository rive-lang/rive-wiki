---
id: getting-started
title: Getting Started
description: Quick start guide for Rive programming language
sidebar_label: Getting Started
sidebar_position: 1
---

# Getting Started

Welcome to Rive! This guide will help you get up and running quickly.

## Meet the Team

Rive is developed by a passionate team of language designers and compiler engineers:

<div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem'}}>

<div style={{textAlign: 'center', flex: '1', minWidth: '200px'}}>
  <img 
    src="https://avatars.githubusercontent.com/u/224375749?v=4" 
    alt="Yunitra"
    style={{width: '120px', height: '120px', borderRadius: '50%', border: '3px solid #667eea'}}
  />
  <h3>Yunitra</h3>
  <p><strong>Rive Language Creator & Core Developer</strong></p>
  <p>
    Creator and lead developer of the Rive programming language.
    Designed and implemented the entire compiler architecture,
    type system, null safety features, and control flow constructs.
  </p>
  <div style={{marginTop: '1rem'}}>
    <a href="https://github.com/Yunitra" style={{marginRight: '0.5rem'}}>
      <img src="https://img.shields.io/badge/GitHub-Yunitra-blue?style=flat-square&logo=github" alt="GitHub" />
    </a>
  </div>
</div>

<div style={{textAlign: 'center', flex: '1', minWidth: '200px'}}>
  <img 
    src="https://avatars.githubusercontent.com/u/222043334?v=4" 
    alt="devhappys"
    style={{width: '120px', height: '120px', borderRadius: '50%', border: '3px solid #f093fb'}}
  />
  <h3>devhappys</h3>
  <p><strong>Documentation Lead & Maintainer</strong></p>
  <p>
    Lead maintainer of all Rive Wiki documentation. Responsible for
    bilingual documentation (English & 简体中文), ongoing development,
    maintenance, and ensuring documentation quality and accessibility.
  </p>
  <div style={{marginTop: '1rem'}}>
    <a href="https://github.com/devhappys" style={{marginRight: '0.5rem'}}>
      <img src="https://img.shields.io/badge/GitHub-devhappys-blue?style=flat-square&logo=github" alt="GitHub" />
    </a>
  </div>
</div>

</div>

## Installation

### Prerequisites

- Rust (latest stable version)
- Git

### Build from Source

```bash
# Clone the repository
git clone https://github.com/rive-lang/rive
cd rive

# Build the compiler
cargo build --release

# Add to PATH (Linux/macOS)
export PATH=$PATH:$(pwd)/target/release

# Add to PATH (Windows)
# Add the target/release directory to your PATH environment variable
```

## Your First Program

Create a new Rive project:

```bash
rive new hello-world
cd hello-world
```

This creates a simple project structure:

```
hello-world/
├── src/
│   └── main.rive
└── rive.toml
```

The default `src/main.rive` contains:

```rive
fun main() {
    print("Hello, Rive!");
}
```

Run your program:

```bash
rive run
```

You should see: `Hello, Rive!`

## Project Commands

- `rive run` - Run the project
- `rive build` - Build the project
- `rive check` - Check for errors without building

## What's Next?

- [Basic Syntax](basic-syntax.md) - Learn the fundamentals
- [Variables and Types](variables-types.md) - Understanding data
- [Control Flow](control-flow.md) - Making decisions

---

**Note**: Rive is still in active development. Features and syntax may change between versions.
