---
title: "Java 查找器"
---

# Java 查找器

Java搜寻器用于获取所有的Java版本和其信息

命名空间 `StarLight_Core.Utilities`

## 方法参考

> [!TIP]
> 搜寻器均提供了静态方法, 可以直接调用, 无需实例化

### `JavaUtil.GetJavas` 获取已安装的所有 Java

```csharp
public static IEnumerable<JavaInfo> GetJavas()
```

该方法不需要参数，可以直接返回所有Java的信息集合

| 返回值                     | 描述                                        |
|-------------------------|-------------------------------------------|
| IEnumerable\<JavaInfo\> | [参数详解](/Fetcher/Java.html#详细-javainfo-定义) |

### `JavaUtil.GetJavaInfo` 获取指定 Java 信息

```csharp
public static JavaInfo GetJavaInfo(string javaPath)
```

|    参数    |   类型   |       描述        |
|:--------:|:------:|:---------------:|
| javaPath | string | Java 可执行文件的所在位置 |

## 参数详解

### 详细 `JavaInfo` 定义

|       参数        |   类型   |      描述      |
|:---------------:|:------:|:------------:|
|     Is64Bit     |  bool  |  是否为 64 位版本  |
|   JavaVersion   | string |   Java 版本    |
| JavaSlugVersion |  int   |  Java 版本号缩写  |
|    JavaPath     | string | Java 可执行文件路径 |
| JavaLibraryPath | string |  Java 可执行文件所在目录   |

## 控制台示例

>[!TIP]
>控制台示例只是为了更加方便的了解如何使用, 不建议直接复制

```csharp
// 获取已安装的所有 Java 版本信息集合
var javaList = JavaUtil.GetJavas();

// 获取指定的 Java 版本信息
var javaVers = JavaUtil.GetJavaInfo().JavaVersion;
```
