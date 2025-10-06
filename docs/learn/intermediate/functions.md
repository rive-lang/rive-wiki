---
id: functions
title: Functions
description: Learn how to organize code into reusable functions
sidebar_label: Functions
sidebar_position: 1
---

# Functions

Functions let you organize code into reusable, named blocks.

## Defining Functions

### Basic Function

```rive
fun greet() {
    print("Hello!")
}
```

### Function with Parameters

```rive
fun greet_person(name: Text) {
    print("Hello, " + name)
}
```

### Function with Return Value

```rive
fun add(a: Int, b: Int): Int {
    return a + b
}
```

### Expression Body

For simple functions, you can use an expression body:

```rive
fun multiply(a: Int, b: Int): Int = a * b
```

## Calling Functions

```rive
fun main() {
    greet()                    // Call greet()
    greet_person("Alice")      // Call with argument
    let result = add(5, 3)     // Call and store result
    print(result)              // Print: 8
}
```

## Multiple Parameters

```rive
fun calculate_area(length: Float, width: Float): Float {
    return length * width
}

fun main() {
    let area = calculate_area(10.0, 5.0)
    print("Area: " + area)  // Area: 50.0
}
```

## Default Parameters

```rive
fun greet_with_title(name: Text, title: Text = "Mr.") {
    print("Hello, " + title + " " + name)
}

fun main() {
    greet_with_title("Smith")           // Hello, Mr. Smith
    greet_with_title("Jones", "Dr.")   // Hello, Dr. Jones
}
```

## Local Variables

Functions can have their own local variables:

```rive
fun calculate_tax(price: Float): Float {
    let tax_rate = 0.08  // Local variable
    return price * tax_rate
}
```

## What's Next?

- [Collections](collections.md) - Work with lists and arrays
- [Contributing](../../develop/community/contributing.md) - Help improve Rive
