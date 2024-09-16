---
title: "版本 查找器"
---

# 版本 查找器

版本搜寻器只需指定目录，即可返回版本信息

命名空间 `StarLight_Core.Utilities`

## 方法参考

> [!TIP]
> 搜寻器均提供了静态方法, 可以直接调用, 无需实例化

### `GameCoreUtil.GetGameCores` 获取目录下的所有版本

```csharp
public static IEnumerable<GameCoreInfo> GetGameCores(string root = ".minecraft")
```

| 参数                  | 类型     | 描述             |
|---------------------|--------|----------------|
| root = ".minecraft" | string | 游戏根目录, 可以为相对路径 |

该方法需要传入游戏根目录的路径，可以直接返回指定目录下的游戏核心的信息集合

| 返回值                         | 描述                                               |
|-----------------------------|--------------------------------------------------|
| IEnumerable\<GameCoreInfo\> | [参数详解](/Fetcher/Version.html#详细-gamecoreinfo-定义) |

### `GameCoreUtil.GetGameCore` 获取指定版本的信息

```csharp
public static GameCoreInfo GetGameCore(string versionId, string root = ".minecraft")
```

|    参数     |   类型   |       描述       |
|:---------:|:------:|:--------------:|
| versionId | string |      版本名称      |
|   root    | string | 游戏根目录, 可以为相对路径 | 

| 返回值          | 描述                                               |
|--------------|--------------------------------------------------|
| GameCoreInfo | [参数详解](/Fetcher/Version.html#详细-gamecoreinfo-定义) |

## 参数详解

### 详细 `GameCoreInfo` 定义

|      参数      |    类型     |      描述      |
|:------------:|:---------:|:------------:|
|    Assets    |  string   |     资源版本     |
|  Exception   | Exception |     错误信息     |
|      Id      |  string   |     版本名称     |
| InheritsFrom |  string   |     继承版本     |
| JavaVersion  |    int    | 建议的 Java 版本  |
|  LoaderType  |  string   |   模组加载器类型    |
|  MainClass   |  string   |     主类名      |
| ReleaseTime  |  string   |    版本发布时间    |
|     Time     |  string   |    版本更新时间    |
|     root     |  string   | 游戏核心根目录的绝对路径 |
|     Type     |  string   |    游戏核心类型    |
|   Version    |  string   |     游戏版本     |

> [!IMPORTANT]
> 当错误信息不为空时, 即表示当前的版本存在问题, 可用于判断是否为错误的版本

> [!TIP]
> 模组加载器类型: 原版为 Vanilla , 其他为对应的类型, 例如 Fabric

> [!TIP]
> 版本的发布及更新时间为 ISO 8601 格式化的数据

## 控制台示例

> [!TIP]
> 控制台示例只是为了更加方便地了解如何使用, 不建议直接复制

```csharp
// 获取所有版本信息集合
var gamecoreList = GameCoreUtil.GetGameCores();

// 获取指定版本信息
var gameCore = GameCoreUtil.GetGameCore("1.19.2");
```