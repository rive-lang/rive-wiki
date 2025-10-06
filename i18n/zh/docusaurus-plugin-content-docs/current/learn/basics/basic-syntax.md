---
id: basic-syntax
title: 基本语法
description: Rive程序的基本语法和结构
sidebar_label: 基本语法
sidebar_position: 2
---

# 基本语法

本章介绍Rive的基本语法元素。

## 注释

```rive
// 这是单行注释

/*
 * 这是
 * 多行注释
 */
```

## 函数

每个Rive程序都从一个`main`函数开始：

```rive
fun main() {
    print("Hello, Rive!")
}
```

### 函数结构

```rive
fun function_name(parameter: Type): ReturnType {
    // 函数体
    return value
}
```

示例：

```rive
fun greet(name: Text) {
    print("Hello, " + name)
}

fun add(a: Int, b: Int): Int {
    return a + b
}
```

## 语句和表达式

语句是执行操作的指令：

```rive
print("Hello")        // 语句
let x = 5             // 语句
```

表达式产生值：

```rive
5 + 3                  // 表达式：计算为8
"Hello" + " World"     // 表达式：计算为"Hello World"
```

## 代码块

代码块用大括号`{}`包围：

```rive
fun main() {
    print("Start")
    print("Middle")
    print("End")
}
```

## 下一步？

- [变量和类型](variables-types.md) - 学习数据存储
- [控制流](control-flow.md) - 为程序添加逻辑
