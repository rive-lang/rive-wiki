---
id: variables-types
title: 变量和类型
description: 学习如何在Rive中存储和处理数据
sidebar_label: 变量和类型
sidebar_position: 3
---

# 变量和类型

变量让您可以在程序中存储和操作数据。

## 变量

### 声明

```rive
let name = "Alice"        // 不可变变量
let mut age = 25          // 可变变量
const PI = 3.14159        // 常量
```

### 规则

- `let`创建不可变变量
- `mut`使变量可变
- `const`创建编译时常量
- 变量名使用`snake_case`

## 基本类型

### 数字

```rive
let integer: Int = 42
let decimal: Float = 3.14
```

### 文本

```rive
let message: Text = "Hello, World!"
```

### 布尔值

```rive
let is_active: Bool = true
let is_done: Bool = false
```

## 类型推断

Rive通常可以自动推断类型：

```rive
let count = 10           // 类型：Int
let price = 19.99        // 类型：Float
let name = "Bob"         // 类型：Text
let active = true        // 类型：Bool
```

## 操作

### 算术运算

```rive
let a = 10
let b = 3

let sum = a + b          // 13
let difference = a - b   // 7
let product = a * b      // 30
let quotient = a / b     // 3
let remainder = a % b    // 1
```

### 字符串操作

```rive
let first = "Hello"
let second = "World"
let combined = first + " " + second  // "Hello World"
```

### 比较

```rive
let a = 5
let b = 10

let equal = a == b       // false
let not_equal = a != b   // true
let less = a < b         // true
let greater = a > b      // false
```

## 下一步？

- [控制流](control-flow.md) - 在代码中做出决策
- [函数](../intermediate/functions.md) - 将代码组织成可重用的部分
