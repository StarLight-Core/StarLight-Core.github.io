---
title: "快速开始"
---

# 快速开始

### 感谢您使用 StarLight_Core

## 先决条件

> [!IMPORTANT]
> 若您需要使用 Native AOT 发布, 则必须使用 C# .NET 8.0

> [!TIP]
> 使用较新的 C# .NET 版本可以获得更好的 Json 解析性能

1.你的项目必须是使用C# .NET 6.0及以上.

2.你的项目是在 Windows 平台为目标进行开发, 跨平台将在日后支持

## 下载
a. 通过任意包管理器搜索 `StarLight_Core` 进行安装

b. 通过命令行进行安装
```shell
dotnet add package StarLight_Core
```

### 手动下载
若已通过其他方式请跳过本步骤

a. 在 [Nuget](https://www.nuget.org/packages/StarLight_Core) 中下载

b. 在 [Github Packages](https://github.com/orgs/Ink-Marks-Studio/packages?repo_name=StarLight.Core) 中下载

## 添加需要的引用
```csharp
using StarLight_Core.Utilities;
using StarLight_Core.Authentication;
using StarLight_Core.Launch;
using StarLight_Core.Models.Launch;
```

> [!TIP]
> 部分的 IDE 支持引用的自动添加

## 获取已安装的游戏
```csharp
var gameCore = GameCoreUtil.GetGameCores();
```

## 添加账户
```csharp
var account = new OfflineAuthentication("Steve").OfflineAuth();
```
> [!NOTE]
> 更多验证器请查看 文档-验证器 部分

## 启动游戏
```csharp
LaunchConfig args = new() // 配置启动参数
{
    Account = new()
    {
        BaseAccount = account // 账户
    },
    GameCoreConfig = new()
    {
        Root = ".minecraft", // 游戏根目录
        Version = "1.18.2" // 启动的版本
    },
    JavaConfig = new()
    {
        JavaPath = "C:\\Program Files\\Java\\jdk-18.0.2.1\\bin\\javaw.exe", // Java 路径
        MaxMemory = 4096 // 最大内存
    }
};
var launch = new MinecraftLauncher(args); // 实例化启动器
var la = await launch.LaunchAsync(ReportProgress); // 启动
```
> [!NOTE]
> 更多启动配置以及错误处理请查看 [启动器](/Launcher) 页面
