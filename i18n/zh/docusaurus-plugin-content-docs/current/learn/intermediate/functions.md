---
id: functions
title: 函数
description: 学习如何将代码组织成可重用的函数
sidebar_label: 函数
sidebar_position: 1
---

# 函数

函数让您可以将代码组织成可重用的命名块。

## 定义函数

### 基本函数

```rive
fun greet() {
    print("Hello!")
}
```

### 带参数的函数

```rive
fun greet_person(name: Text) {
    print("Hello, " + name)
}
```

### 带返回值的函数

```rive
fun add(a: Int, b: Int): Int {
    return a + b
}
```

### 表达式体

对于简单函数，您可以使用表达式体：

```rive
fun multiply(a: Int, b: Int): Int = a * b
```

## 调用函数

```rive
fun main() {
    greet()                    // 调用greet()
    greet_person("Alice")      // 带参数调用
    let result = add(5, 3)     // 调用并存储结果
    print(result)              // 打印：8
}
```

## 多个参数

```rive
fun calculate_area(length: Float, width: Float): Float {
    return length * width
}

fun main() {
    let area = calculate_area(10.0, 5.0)
    print("面积：" + area)  // 面积：50.0
}
```

## 默认参数

```rive
fun greet_with_title(name: Text, title: Text = "Mr.") {
    print("Hello, " + title + " " + name)
}

fun main() {
    greet_with_title("Smith")           // Hello, Mr. Smith
    greet_with_title("Jones", "Dr.")   // Hello, Dr. Jones
}
```

## 局部变量

函数可以有自己的局部变量：

```rive
fun calculate_tax(price: Float): Float {
    let tax_rate = 0.08  // 局部变量
    return price * tax_rate
}
```

## 下一步？

- [集合](collections.md) - 处理列表和数组
- [贡献指南](../../develop/community/contributing.md) - 帮助改进Rive
