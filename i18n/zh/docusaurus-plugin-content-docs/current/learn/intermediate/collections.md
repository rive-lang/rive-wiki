---
id: collections
title: 集合
description: 处理列表、数组和其他数据结构
sidebar_label: 集合
sidebar_position: 2
---

# 集合

集合让您可以存储和处理多个值。

## 固定数组

固定数组存储固定数量的相同类型值：

```rive
let numbers = [1, 2, 3, 4, 5]
let names = ["Alice", "Bob", "Charlie"]
```

### 访问元素

```rive
let numbers = [10, 20, 30, 40, 50]

let first = numbers.get(0)   // 10
let third = numbers.get(2)   // 30
let last = numbers.get(4)    // 50
```

### 数组长度

```rive
let numbers = [1, 2, 3, 4, 5]
let count = numbers.length  // 5
```

## 动态列表

动态列表可以根据需要增长和缩小：

```rive
let mut numbers = List()
numbers.add(1)
numbers.add(2)
numbers.add(3)
```

### 列表操作

```rive
let mut fruits = List()
fruits.add("apple")
fruits.add("banana")
fruits.add("orange")

let first_fruit = fruits.get(0)  // "apple"
let count = fruits.length        // 3
```

## 遍历集合

### 数组的For循环

```rive
let fruits = ["apple", "banana", "orange"]

for fruit in fruits {
    print(fruit)
}
// 输出：apple banana orange
```

### 列表的For循环

```rive
let mut numbers = List()
numbers.add(10)
numbers.add(20)
numbers.add(30)

for number in numbers {
    print(number)
}
// 输出：10 20 30
```

## 字符串作为集合

字符串可以视为字符的集合：

```rive
let text = "Hello"

for char in text.chars() {
    print(char)
}
// 输出：H e l l o

let length = text.length  // 5
let first_char = text.get(0)  // 'H'
```

## 下一步？

- [贡献指南](../../develop/community/contributing.md) - 帮助改进Rive
