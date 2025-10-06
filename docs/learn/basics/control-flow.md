---
id: control-flow
title: Control Flow
description: Learn how to make decisions and repeat actions in Rive
sidebar_label: Control Flow
sidebar_position: 4
---

# Control Flow

Control flow lets you make decisions and repeat actions in your programs.

## If Statements

Make decisions based on conditions:

```rive
let age = 18

if age >= 18 {
    print("You are an adult")
} else {
    print("You are a minor")
}
```

### Multiple Conditions

```rive
let score = 85

if score >= 90 {
    print("Grade: A")
} else if score >= 80 {
    print("Grade: B")
} else if score >= 70 {
    print("Grade: C")
} else {
    print("Grade: F")
}
```

## Loops

### For Loop

Count through a range:

```rive
for i in 1..5 {
    print(i)
}
// Output: 1 2 3 4 5
```

### While Loop

Repeat while a condition is true:

```rive
let count = 0
while count < 3 {
    print("Count: " + count)
    count = count + 1
}
// Output: Count: 0 Count: 1 Count: 2
```

### Loop Control

```rive
for i in 1..10 {
    if i == 3 {
        continue  // Skip this iteration
    }
    if i == 7 {
        break     // Exit the loop
    }
    print(i)
}
// Output: 1 2 4 5 6
```

## When Statements

When expressions provide powerful pattern matching:

```rive
let day = "Monday"

when day {
    "Monday" => print("Start of work week"),
    "Friday" => print("TGIF!"),
    "Saturday" | "Sunday" => print("Weekend!"),
    _ => print("Regular day"),
}
```

### Matching Numbers

```rive
let number = 5

when number {
    0 => print("Zero"),
    1..10 => print("Single digit"),
    10..100 => print("Double digit"),
    _ => print("Large number"),
}
```

## What's Next?

- [Functions](../intermediate/functions.md) - Organize your code
- [Collections](../intermediate/collections.md) - Work with lists and data structures
