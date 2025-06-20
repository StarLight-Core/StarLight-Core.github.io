---
title: "Fabric 安装器"
---

> [!WARNING]
> 此页面未完成

> [!TIP]
> SL提供了``FetchFabricVersionsAsync``静态方法获取指定MineCraft的所有Fabric版本，无需实例化即可使用

# Fabric 安装器

用来下载原版Minecraft。

## 构造函数

```csharp
public FabricInstaller(string gameVersion, string fabricVersion, string root = ".minecraft", Action<string>? onSpeedChanged = null, Action<string,int>? onProgressChanged = null, CancellationToken cancellationToken = default)
```

| 参数                | 类型                    | 描述    |
|-------------------|-----------------------|-------|
| gameVersion            | string                | TODO |
| root              | string                | 下载文件夹 |
| onProgressChanged | Action\<string,int\>? | 进度报告  |
| onSpeedChanged    | Action\<string\>?     | 速度报告  |

## 方法参考

### ``InstallAsync`` 异步安装

```csharp
public async Task<FabricInstallResult> InstallAsync(string? customId = null)
```

| 参数                | 类型                | 描述   |
|-------------------|-------------------|------|
| customId      | string?            | 下载后的游戏名称 |

## 控制台示例

> [!TIP]
> 控制台示例只是为了更加方便的了解如何使用, 不建议直接复制

```csharp
var cts = new CancellationTokenSource;
var cancellationToken = cts.Token;
var installer = new FabricInstaller("1.18.2","0.16.0",".minecraft",cancellationToken);
Installer.onProgressChanged += (status,progress)=>
{
    Console.WriteLine(status + " " + progress);
};
await installer.InstallAsync()
```
