---
id: variables-types
title: Variables and Types
description: Learn how to store and work with data in Rive
sidebar_label: Variables & Types
sidebar_position: 3
---

# Variables and Types

Variables let you store and manipulate data in your programs.

## Variables

### Declaration

```rive
let name = "Alice"        // Immutable variable
let mut age = 25          // Mutable variable
const PI = 3.14159        // Constant
```

### Rules

- `let` creates immutable variables
- `mut` makes variables mutable
- `const` creates compile-time constants
- Variable names use `snake_case`

## Basic Types

### Numbers

```rive
let integer: Int = 42
let decimal: Float = 3.14
```

### Text

```rive
let message: Text = "Hello, World!"
```

### Boolean

```rive
let is_active: Bool = true
let is_done: Bool = false
```

## Type Inference

Rive can often figure out types automatically:

```rive
let count = 10           // Type: Int
let price = 19.99        // Type: Float
let name = "Bob"         // Type: Text
let active = true        // Type: Bool
```

## Operations

### Arithmetic

```rive
let a = 10
let b = 3

let sum = a + b          // 13
let difference = a - b   // 7
let product = a * b      // 30
let quotient = a / b     // 3
let remainder = a % b    // 1
```

### String Operations

```rive
let first = "Hello"
let second = "World"
let combined = first + " " + second  // "Hello World"
```

### Comparison

```rive
let a = 5
let b = 10

let equal = a == b       // false
let not_equal = a != b   // true
let less = a < b         // true
let greater = a > b      // false
```

## What's Next?

- [Control Flow](control-flow.md) - Make decisions in your code
- [Functions](../intermediate/functions.md) - Organize your code into reusable pieces
