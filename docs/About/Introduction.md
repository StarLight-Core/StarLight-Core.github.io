---
title: "介绍"
editLink: false
---

# StarLight.Core

### 一个高效,模块化,全能的我的世界启动器核心

## ✨特点
- 🚀全功能:
  除了启动外, 还支持多种登录方式, 原版与其他加载器的安装, 整合包解析还有很多封装好的小工具

- 📦模块化:
  主要有启动, 安装, 验证与工具集, 模块化的核心使您的使用更加简单

- 📖全开源:
  您可以在 Github 上查看完全开放的源代码, 使用 MIT 协议, 您可以参考学习等

## 📜支持列表

> [!TIP]
> StarLight.Core 仍在积极开发中, 但由于开发者学业繁重, 我们非常欢迎您参与到项目的开发

✅: 已支持的功能

☑️: 开发中的功能, 或已完成但未进行测试

❌: 还未开始开发, 将在未来进行支持的功能

🧱: 未在表中的内容, 未计划支持功能或不会支持的功能

| 功能            | 状态 |
|---------------|----|
| 启动游戏          | ✅  |
| 游戏搜寻器         | ✅  |
| Java 搜寻器      | ✅  |
| 离线验证器         | ✅  |
| 微软验证器         | ✅  |
| 外置验证器         | ✅  |
| 统一通行证         | ✅  |
| 原版游戏安装        | ✅  |
| Fabric 安装器    | ✅  |
| Forge 安装器     | ☑️ |
| NeoForge 安装器  | ❌  |
| Optifine 安装器  | ❌  |
| 多线程下载器        | ✅  |
| 皮肤处理器         | ✅  |
| 模组处理器         | ☑️ |
| 整合包处理器        | ❌  |
| CurseForge 下载 | ❌  |
| Modrinth 下载   | ❌  |
| 错误分析器         | ❌  |

## 📘文档使用指南

> [!TIP]
> 这也是一份给文档贡献者的编写参考指南

- 命名空间

我们在每个部分的文档标题处都添加了命名空间, 当无法找到对应方法时, 不妨手动添加一下命名空间

- 构造函数

对于需要实例化的方法, 我们都会提供完整的构造函数参考, 当有多个构造函数, 您可以根据您的需要来选择合适的构造函数

- 方法参考

方法参考提供了方法的用途, 以及方法的参数与返回值的参考, 方法参考提供的代码并不是使用该方法的代码, 请勿直接复制

- 参数详解

对于内置的较为复杂自定义结构, 可以通过参数或返回值说明的表格中 `参数详解` 跳转到对应的参数详解

- 控制台参考

控制台参考提供了较为完整的使用流程与使用方法, 有助于对方法使用的理解, 我们同样不建议直接复制

## 🗒️快速开始
跳转到 [快速开始](/About/QuickStart)

## 🧱问题解决方案

首先，我们不建议您直接复制控制台示例。

其次，请先自查以下内容：

- 未更新 StarLight.Core
请先使用 Nuget 管理器或其他工具，手动更新等方式，更新 StarLight.Core 。Nuget管理器请打开“预览版”选项，不优先地使用正式版。

- 没有添加异步。
例：
```csharp
void GetMicrosoftAccount()
{
    var auth = new MicrosoftAuthentication(clientId);
    var deviceCodeInfo = await auth.RetrieveDeviceCodeInfo();
    Console.WriteLine(deviceCodeInfo.UserCode + " " + deviceCodeInfo.VerificationUri);
    var tokenInfo = await auth.GetTokenResponse(deviceCodeInfo);
    var userInfo = await auth.MicrosoftAuthAsync(tokenInfo, x =>
    {
        Console.WriteLine(x);
    });
}
```

以上代码不能运行，因为并没有在 void 前后添加 async 。

- 我们的文档出错了

这种情况十分罕见，但是这不代表不存在。请请仔细检查拼写，或使用 IDE 快速修复进行修复。

如果以上方法不奏效，请反馈问题。

## 🐛反馈问题

反馈一个问题，请您必须完成以上自查清单。在反馈时，请同时附上报错详情、方法详细内容。

> 没有错误报告无异于闭眼开车

请勿询问过于基础您只需要通过搜索或其他方法便可以解决的问题，无论是开发者亦或是志愿者都没有义务回答您的问题，请查看 [提问的智慧](https://lug.ustc.edu.cn/wiki/doc/smart-questions/)

## 🌐讨论
欢迎加入Q群: [971192670](https://qm.qq.com/q/FcmJDYRoDQ)

[StarLight-启动器开发交流群](https://qm.qq.com/q/FcmJDYRoDQ)

如有问题或新功能建议, 请提交 [Issue](https://github.com/Ink-Marks-Studio/StarLight.Core/issues)

有其他需要可以加入Q群或发送邮箱至
[StarLight@InkMarks.Studio](mailto:starlight@inkmarks.studio)
