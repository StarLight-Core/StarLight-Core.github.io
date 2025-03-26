---
title: "游戏 安装器"
---

# 游戏 安装器

用来下载原版 Minecraft 。

## 构造函数

```csharp
public MinecraftInstaller(string gameId, string root = ".minecraft", Action<string,int>? onProgressChanged = null, Action<string>? onSpeedChanged = null)
```

| 参数                | 类型                    | 描述    |
|-------------------|-----------------------|-------|
| gameId            | string                | 游戏版本号 |
| root              | string                | 游戏目录 |
| onProgressChanged | Action\<string,int\>? | 进度报告  |
| onSpeedChanged    | Action\<string\>?     | 速度报告  |

## 方法参考

### ``InstallAsync`` 异步安装

```csharp
public async Task<InstallResult> InstallAsync(string? gameCoreName = null, bool mandatory = false, CancellationToken cancellationToken = default)
```

| 参数                | 类型                | 描述   |
|-------------------|-------------------|------|
| gameCoreName      | string            | 游戏名称 |
| mandatory         | bool              | 非验证安装 |
| cancellationToken | CancellationToken | 取消令牌 |

## 控制台示例

> [!TIP]
> 控制台示例只是为了更加方便的了解如何使用, 不建议直接复制

```csharp
MinecraftInstaller installer = new MinecraftInstaller("1.19.2",".minecraft");
installer.OnProgressChanged += (status,progress)=>
{
    Console.WriteLine(status + " " + progress);
};
CancellationTokenSource cts = new CancellationTokenSource;
CancellationToken cancellationToken = cts.token;
await installer.InstallAsync("Test",true,cancellationToken)
```
