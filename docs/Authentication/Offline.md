---
title: "离线验证器"
---

# 离线验证器

离线验证器是最基本的验证器

命名空间 `` StarLight_Core.Authentication ``

## 构造函数

我们为离线验证器提供了三种构造方法, 一般情况下传入游戏名称即可

```csharp
public OfflineAuthentication(string username)
{
    AccessToken = Guid.NewGuid().ToString("N");
    ClientToken = Guid.NewGuid().ToString("N");
    Name = username;
    Uuid = Guid.NewGuid().ToString();
}
        
public OfflineAuthentication(string username, string uuid)
{
    AccessToken = Guid.NewGuid().ToString("N");
    ClientToken = Guid.NewGuid().ToString("N");
    Name = username;
    Uuid = uuid;
}
        
public OfflineAuthentication(string username, string uuid, string accessToken, string clientToken)
{
    AccessToken = accessToken;
    ClientToken = clientToken;
    Name = username;
    Uuid = uuid;
}
```

| 参数          | 类型     | 描述      |
|-------------|--------|---------|
| username    | string | 玩家名称    |
| uuid        | string | 玩家 Uuid |
| accessToken | string | 资源令牌    |
| clientToken | string | 客户端令牌   |

## 方法参考

### ``OfflineAuth`` 验证方法

```csharp
public OfflineAccount OfflineAuth()
```

| 返回值             | 描述    |
|-----------------|-------|
| OfflineAccount  | 离线账户类 |

## 控制台示例

>[!TIP]
> 控制台示例只是为了更加方便的了解如何去使用, 不建议直接复制

```csharp
account = new OfflineAuthentication("Steve").OfflineAuth();
```