---
id: control-flow
title: 控制流
description: 学习如何在Rive中做出决策和重复操作
sidebar_label: 控制流
sidebar_position: 4
---

# 控制流

控制流让您可以在程序中做出决策和重复操作。

## If语句

基于条件做出决策：

```rive
let age = 18

if age >= 18 {
    print("您是成年人")
} else {
    print("您是未成年人")
}
```

### 多个条件

```rive
let score = 85

if score >= 90 {
    print("等级：A")
} else if score >= 80 {
    print("等级：B")
} else if score >= 70 {
    print("等级：C")
} else {
    print("等级：F")
}
```

## 循环

### For循环

遍历范围：

```rive
for i in 1..5 {
    print(i)
}
// 输出：1 2 3 4 5
```

### While循环

当条件为真时重复：

```rive
let count = 0
while count < 3 {
    print("计数：" + count)
    count = count + 1
}
// 输出：计数：0 计数：1 计数：2
```

### 循环控制

```rive
for i in 1..10 {
    if i == 3 {
        continue  // 跳过此次迭代
    }
    if i == 7 {
        break     // 退出循环
    }
    print(i)
}
// 输出：1 2 4 5 6
```

## When语句

When表达式提供强大的模式匹配：

```rive
let day = "Monday"

when day {
    "Monday" => print("工作周开始"),
    "Friday" => print("感谢上帝，今天是星期五！"),
    "Saturday" | "Sunday" => print("周末！"),
    _ => print("普通的一天"),
}
```

### 匹配数字

```rive
let number = 5

when number {
    0 => print("零"),
    1..10 => print("个位数"),
    10..100 => print("两位数"),
    _ => print("大数字"),
}
```

## 下一步？

- [函数](../intermediate/functions.md) - 组织您的代码
- [集合](../intermediate/collections.md) - 处理列表和数据结构
