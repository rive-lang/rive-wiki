---
id: getting-started
title: 快速开始
description: Rive编程语言快速入门指南
sidebar_label: 快速开始
sidebar_position: 1
---

# 快速开始

欢迎使用Rive！本指南将帮助您快速上手。

## 认识团队

Rive由一群充满激情的语言设计师和编译器工程师开发：

<div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem'}}>

<div style={{textAlign: 'center', flex: '1', minWidth: '200px'}}>
  <img 
    src="https://avatars.githubusercontent.com/u/224375749?v=4" 
    alt="Yunitra"
    style={{width: '120px', height: '120px', borderRadius: '50%', border: '3px solid #667eea'}}
  />
  <h3>Yunitra</h3>
  <p><strong>Rive语言创建者 & 核心开发者</strong></p>
  <p>
    Rive编程语言的创建者和主要开发者。
    设计并实现了整个编译器架构、
    类型系统、空安全特性和控制流结构。
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
  <p><strong>文档负责人 & 维护者</strong></p>
  <p>
    所有Rive Wiki文档的主要维护者。负责
    双语文档（英文 & 简体中文）的持续开发、
    维护，确保文档质量和可访问性。
  </p>
  <div style={{marginTop: '1rem'}}>
    <a href="https://github.com/devhappys" style={{marginRight: '0.5rem'}}>
      <img src="https://img.shields.io/badge/GitHub-devhappys-blue?style=flat-square&logo=github" alt="GitHub" />
    </a>
  </div>
</div>

</div>

## 安装

### 前置要求

- Rust（最新稳定版本）
- Git

### 从源码构建

```bash
# 克隆仓库
git clone https://github.com/rive-lang/rive
cd rive

# 构建编译器
cargo build --release

# 添加到PATH（Linux/macOS）
export PATH=$PATH:$(pwd)/target/release

# 添加到PATH（Windows）
# 将target/release目录添加到PATH环境变量
```

## 您的第一个程序

创建一个新的Rive项目：

```bash
rive new hello-world
cd hello-world
```

这将创建一个简单的项目结构：

```
hello-world/
├── src/
│   └── main.rive
└── rive.toml
```

默认的`src/main.rive`包含：

```rive
fun main() {
    print("Hello, Rive!")
}
```

运行您的程序：

```bash
rive run
```

您应该看到：`Hello, Rive!`

## 项目命令

- `rive run` - 运行项目
- `rive build` - 构建项目
- `rive check` - 检查错误而不构建

## 下一步？

- [基本语法](basic-syntax.md) - 学习基础知识
- [变量和类型](variables-types.md) - 理解数据
- [控制流](control-flow.md) - 做出决策

---

**注意**：Rive仍在积极开发中。功能和语法可能在版本之间发生变化。
