---
id: collections
title: Collections
description: Work with lists, arrays, and other data structures
sidebar_label: Collections
sidebar_position: 2
---

# Collections

Collections let you store and work with multiple values.

## Fixed Arrays

Fixed arrays store a fixed number of values of the same type:

```rive
let numbers = [1, 2, 3, 4, 5]
let names = ["Alice", "Bob", "Charlie"]
```

### Accessing Elements

```rive
let numbers = [10, 20, 30, 40, 50]

let first = numbers.get(0)   // 10
let third = numbers.get(2)   // 30
let last = numbers.get(4)    // 50
```

### Array Length

```rive
let numbers = [1, 2, 3, 4, 5]
let count = numbers.length  // 5
```

## Dynamic Lists

Dynamic lists can grow and shrink as needed:

```rive
let mut numbers = List()
numbers.add(1)
numbers.add(2)
numbers.add(3)
```

### List Operations

```rive
let mut fruits = List()
fruits.add("apple")
fruits.add("banana")
fruits.add("orange")

let first_fruit = fruits.get(0)  // "apple"
let count = fruits.length        // 3
```

## Iterating Over Collections

### For Loop with Arrays

```rive
let fruits = ["apple", "banana", "orange"]

for fruit in fruits {
    print(fruit)
}
// Output: apple banana orange
```

### For Loop with Lists

```rive
let mut numbers = List()
numbers.add(10)
numbers.add(20)
numbers.add(30)

for number in numbers {
    print(number)
}
// Output: 10 20 30
```

## Strings as Collections

Strings can be treated as collections of characters:

```rive
let text = "Hello"

for char in text.chars() {
    print(char)
}
// Output: H e l l o

let length = text.length  // 5
let first_char = text.get(0)  // 'H'
```

## What's Next?

- [Contributing](../../develop/community/contributing.md) - Help improve Rive
