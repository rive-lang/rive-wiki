---
id: basic-syntax
title: Basic Syntax
description: Fundamental syntax and structure of Rive programs
sidebar_label: Basic Syntax
sidebar_position: 2
---

# Basic Syntax

This chapter covers the fundamental syntax elements of Rive.

## Comments

```rive
// This is a single-line comment

/*
 * This is a
 * multi-line comment
 */
```

## Functions

Every Rive program starts with a `main` function:

```rive
fun main() {
    print("Hello, Rive!")
}
```

### Function Structure

```rive
fun function_name(parameter: Type) -> ReturnType {
    // function body
    return value
}
```

Example:

```rive
fun greet(name: Text) {
    print("Hello, " + name)
}

fun add(a: Int, b: Int): Int {
    return a + b
}
```

## Statements and Expressions

Statements are instructions that perform actions:

```rive
print("Hello")        // Statement
let x = 5             // Statement
```

Expressions produce values:

```rive
5 + 3                  // Expression: evaluates to 8
"Hello" + " World"     // Expression: evaluates to "Hello World"
```

## Code Blocks

Code blocks are enclosed in curly braces `{}`:

```rive
fun main() {
    print("Start")
    print("Middle")
    print("End")
}
```

## What's Next?

- [Variables and Types](variables-types.md) - Learn about data storage
- [Control Flow](control-flow.md) - Add logic to your programs
