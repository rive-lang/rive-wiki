---
id: contributing
title: 贡献指南
description: 如何为Rive项目做出贡献
sidebar_label: 贡献指南
sidebar_position: 1
---

# 贡献指南

感谢您对Rive项目的兴趣！我们欢迎各种形式的贡献。

## 如何贡献

### 报告问题

如果您发现了bug或有功能请求，请：

1. 检查[现有问题](https://github.com/rive-lang/rive/issues)
2. 创建新问题，包含：
   - 清晰的标题
   - 详细描述
   - 重现步骤（如果是bug）
   - 环境信息

### 提交代码

1. Fork仓库
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 创建Pull Request

### 代码规范

- 使用Rust标准格式化：`cargo fmt`
- 运行clippy检查：`cargo clippy`
- 确保所有测试通过：`cargo test`
- 遵循现有的代码风格

## 贡献类型

### 编译器开发

- 实现新语言特性
- 优化编译器性能
- 修复bug
- 改进错误消息

### 文档

- 改进现有文档
- 添加示例
- 翻译文档
- 修复文档错误

### 测试

- 添加单元测试
- 编写集成测试
- 创建基准测试
- 改进测试覆盖率

### 工具

- 开发IDE插件
- 创建构建工具
- 改进CLI工具
- 开发调试工具

## 开发环境设置

### 前置要求

- Rust 1.70+
- Git
- 您喜欢的代码编辑器

### 构建步骤

```bash
# 克隆仓库
git clone https://github.com/rive-lang/rive
cd rive

# 构建项目
cargo build

# 运行测试
cargo test

# 运行示例
cargo run --example hello_world
```

### 项目结构

```
rive/
├── crates/           # 核心crate
│   ├── rive-cli/    # 命令行工具
│   ├── rive-core/   # 核心库
│   ├── rive-ir/     # 中间表示
│   ├── rive-lexer/  # 词法分析器
│   ├── rive-parser/ # 语法分析器
│   └── rive-semantic/ # 语义分析
├── examples/        # 示例程序
├── tests/          # 集成测试
└── docs/           # 文档
```

## 贡献流程

### 1. 选择任务

- 查看[Good First Issues](https://github.com/rive-lang/rive/labels/good%20first%20issue)
- 选择您感兴趣的任务
- 在issue中评论表示您要处理

### 2. 开发

- Fork并克隆仓库
- 创建功能分支
- 实现功能或修复
- 添加测试
- 更新文档

### 3. 提交

- 确保代码通过所有检查
- 编写清晰的提交消息
- 创建Pull Request
- 等待代码审查

### 4. 审查

- 响应审查意见
- 进行必要的修改
- 保持PR更新

## 社区准则

### 行为准则

我们致力于为每个人提供友好、安全的环境：

- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

### 沟通渠道

- [GitHub Issues](https://github.com/rive-lang/rive/issues) - Bug报告和功能请求
- [GitHub Discussions](https://github.com/rive-lang/rive/discussions) - 一般讨论
- [Pull Requests](https://github.com/rive-lang/rive/pulls) - 代码贡献

## 获得帮助

如果您需要帮助：

1. 查看[文档](https://rive-lang.github.io/rive-wiki/)
2. 搜索[现有问题](https://github.com/rive-lang/rive/issues)
3. 创建新问题
4. 参与[讨论](https://github.com/rive-lang/rive/discussions)

## 认可贡献者

我们感谢所有贡献者！贡献者将在：

- README.md中列出
- 发布说明中提及
- 项目网站中展示

## 许可证

通过贡献，您同意您的贡献将在与项目相同的许可证下发布。

---

再次感谢您对Rive项目的贡献！🎉
