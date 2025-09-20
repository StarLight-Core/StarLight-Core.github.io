---
title: "外置验证器"
---

# 外置验证器

用于拥有皮肤站账户的玩家或游玩开启外置验证的服务器

命名空间 `` StarLight_Core.Authentication ``

## 构造函数
我们为外置验证器提供了两种构造方法
```csharp
public YggdrasilAuthenticator(string url, string email, string password, string clientToken = "")
{
    Url = ((Url == "LittleSkin") ? "https://littleskin.cn/api/yggdrasil" : url);
    Email = email;
    Password = password;
    base.ClientToken = clientToken;
}

public YggdrasilAuthenticator(string email, string password, string clientToken = "")
{
    Url = "https://littleskin.cn/api/yggdrasil";
    Email = email;
    Password = password;
    base.ClientToken = clientToken;
}
```

| 参数       | 类型     | 描述                    |
|----------|--------|-----------------------|
| url | string | 皮肤站的 Yggdrasil API URL，不填默认 LittleSkin |
| email | string | 账户电子邮件地址 |
| password | string | 账户密码 |
| clientToken | string | 客户端令牌 |

## 方法参考

### ``YggdrasilAuthAsync`` 异步验证方法
```csharp
public async ValueTask<IEnumerable<YggdrasilAccount>> YggdrasilAuthAsync()
```

| 返回值                | 描述                                                              |
|--------------------|-----------------------------------------------------------------|
| IEnumerable&lt;YggdrasilAccount&gt; | [参数详解](/Authentication/Yggdrasil.html#详细-YggdrasilAccount-定义) |

## 参数详解

### 详细 ``YggdrasilAccount`` 定义

| 参数           | 类型      | 描述                  |
|----------------|----------|-----------------------|
| AccessToken    | string   | 资源令牌 |
| ClientToken    | string   | 客户端令牌 |
| Email          | string   | 账户电子邮件地址 |
| Name           | string   | 账户名 |
| Password       | string   | 账户密码 |
| ServerUrl      | string   | 皮肤站的 Yggdrasil API URL |
| Type           | AuthType | 账户类型 | 

## 控制台示例

> [!TIP]
> 控制台示例只是为了更加方便的了解如何使用, 不建议直接复制

```csharp
var auth = new YggdrasilAuthenticator("https://example.skin.com/api/yggdrasil", "awaeric@example.com", "************"); // 引导用户输入URL和账密登录
var characters = await auth.YggdrasilAuthAsync(); // 进行验证
var character = characters.First(); // 自动选择第一个角色作为账户
```

