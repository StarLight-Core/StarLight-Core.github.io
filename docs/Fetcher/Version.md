---
title: "版本 搜寻器"
---

# 版本 搜寻器

StarLight.Core的核心版本搜寻器可以指定根目录，并且获取所有版本或指定版本的信息。

::: tip

使用版本搜寻器需要引用工具类，

请提前引用 `StarLight_Core.Utilities`。

:::

## 获取目录下的所有版本

`GameCoreUtil.GetGameCores` 方法可以指定一个游戏目录，并且获取所有游戏的版本信息。

稍后你也可以使用版本Id来获取版本的详细信息。

你可以通过以下函数来获取版本列表：

```csharp
GameCoreUtil.GetGameCores([string root = ".minecraft"])
```

| 参数 | 类型 | 描述 |
| :----: | :----: | :---------------: |
| root | string <选填> | 游戏核心的.minecraft根目录，可以是绝对/相对路径；默认为.minecraft。 |

## 获取单一版本的信息

相对的， `GameCoreUtil.GetGameCore` 方法可以指定版本的根目录和版本Id（文件夹名称），获取某个版本信息的集合。

以下是函数的使用方法：

```csharp
GameCoreUtil.GetGameCore(string versionId, [string root = ".minecraft"])
```

| 参数 | 类型 | 描述 |
| :----: | :----: | :---------------: |
| versionId | string | 版本Id，可以直接使用 `GetGameCores` 获取到的版本Id。 |
| root | string <选填> | 游戏核心的.minecraft根目录，可以是绝对/相对路径；默认为.minecraft。 |

获取到的信息集合，可以通过 `varibleName.Name` 直接引用。

例如，如下的常用参数：

| 常用参数名 | 描述 |
| :----: | :---------------: |
| Version | 游戏的核心版本，与Id不同，核心的版本指的是游戏本体的版本，而不是文件夹名。 |
| Type | 游戏核心类型，如正式版为release。 |
| root | 游戏核心的目录。 |
| LoaderType | 加载器类型，原版为Vanilla，带有模组加载器的则为加载器名称 |
| JavaVersion | 建议的Java虚拟机版本，低版本为8，高版本为17，而1.21与1.20.x的较高版本则为21。 |
| ReleaseTime | 游戏版本的发布时间。 |
| MinecraftArguments | Minecraft附加参数。 |

都可以应用在你启动器的核心信息界面。
