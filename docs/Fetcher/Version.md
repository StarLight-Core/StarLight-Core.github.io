---
title: "版本 搜寻器"
---

# 版本 搜寻器

版本搜寻器只需指定目录，即可返回版本信息

命名空间 `StarLight_Core.Utilities`

## 方法参考

### `GameCoreUtil.GetGameCores` 获取目录下的所有版本

```csharp
public static IEnumerable<GameCoreInfo> GetGameCores(string root = ".minecraft")
```

| 参数 | 类型 | 描述 |
| :----: | :----: | :---------------: |
| root | string | 游戏根目录，可以是绝对/相对，默认.minecraft |

该方法需要传入.minecraft版本目录的路径，可以直接返回目录下的游戏核心的信息集合，

有关详细信息，请参见下方文档。

>[!TIP]
>搜寻器获取到的信息可以直接使用，每个版本的信息结构与下方相同。

### `GameCoreUtil.GetGameCore` 获取单一版本的信息

```csharp
public static GameCoreInfo GetGameCore(string versionId, string root = ".minecraft")
```

| 参数 | 类型 | 描述 |
| :----: | :----: | :---------------: |
| versionId | string | 游戏版本Id（文件夹名） |
| root | string | 游戏根目录，可以是绝对/相对，默认.minecraft | 

## 参数详解

### 详细 `GameCoreInfo` 定义

| 参数 | 类型 | 描述 |
| :----: | :----: | :---------------: |
| Arguments | ArgumentsJson（集合） | 游戏和Java虚拟机参数 |
| Assets | string | TODO |
| Exception | Exception | TODO |
| Id | string | 游戏版本Id（文件夹名） |
| InheritsFrom | string | TODO |

## 控制台示例

>[!TIP]
>控制台示例只是为了更加方便的了解如何去使用, 不建议直接复制

```csharp
var javaList = JavaUtil.GetJavas();
var javaVers = JavaUtil.GetJavaInfo().JavaVersion;
```
