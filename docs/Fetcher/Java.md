---
title: "Java 搜寻器"
---

# Java 搜寻器

StarLight.Core的Java搜寻器和游戏核心版本搜寻器类似，可以返回一个Java虚拟机版本的集合。

::: tip

使用版本搜寻器需要引用工具类，

请提前引用 StarLight_Core.Utilities。

:::

## 获取所有Java虚拟机版本

`JavaUtil.GetJavas` 可以获取所有Java虚拟机，并返回集合。

使用这个函数非常方便，并不需要参数。

使用方法如下：

```csharp
JavaUtil.GetJavas()
```

当然，获取到的信息可以直接使用，也可以在如下函数传入Java路径，并获取特定版本的信息。

## 获取单一版本的信息

`JavaUtil.GetJavaInfo` 只需传入Java虚拟机所在的路径，即可获取该虚拟机的信息。

该函数的使用方法如下：

```csharp
JavaUtil.GetJavaInfo(string javaPath)
```

| 参数 | 类型 | 描述 |
| :----: | :----: | :---------------: |
| javaPath | string | Java虚拟机的所在路径 |
