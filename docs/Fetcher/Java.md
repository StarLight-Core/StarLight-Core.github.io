---
title: "Java 搜寻器"
---

# Java 搜寻器

Java搜寻器用于获取所有的Java版本和其信息

命名空间 `StarLight_Core.Utilities`

## 方法参考

### `JavaUtil.GetJavas` 获取所有Java虚拟机

```csharp
public static IEnumerable<JavaInfo> GetJavas()
```

该方法不需要参数，可以直接返回所有Java的信息集合，

有关详细信息，请参见下方文档。

>[!TIP]
>搜寻器获取到的信息可以直接使用，每个版本的信息结构与下方相同。

### `JavaUtil.GetJavaInfo` 获取单一Java虚拟机的信息

```csharp
public static JavaInfo GetJavaInfo(string javaPath)
```

| 参数 | 类型 | 描述 |
| :----: | :----: | :---------------: |
| javaPath | string | Java虚拟机的所在路径（javaw可执行文件的绝对路径） |

## 参数详解

### 详细 `JavaInfo` 定义

| 参数 | 类型 | 描述 |
| :----: | :----: | :---------------: |
| Is64Bit | bool | 是否为64位Java版本 |
| JavaVersion | string | Java的版本号（如17.0.0.3） |
| JavaSlugVersion | int | Java版本号的缩写（如17.0.0.3对应的SlugVersion为17） |
| JavaPath | string | Java虚拟机的路径（javaw可执行文件的绝对路径） |
| JavaLibraryPath | string | Java虚拟机所在目录的绝对路径 |

## 控制台示例

>[!TIP]
>控制台示例只是为了更加方便的了解如何去使用, 不建议直接复制

```csharp
var javaList = JavaUtil.GetJavas();
var javaVers = JavaUtil.GetJavaInfo().JavaVersion;
```
