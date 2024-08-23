---
title: "离线验证器"
---

# 离线验证器

离线验证器是最基本的验证器。

## 构造函数

构造非常简单，有三个构造方法：

```csharp
    public OfflineAuthentication(string username)
    {
      this.AccessToken = Guid.NewGuid().ToString("N");
      this.ClientToken = Guid.NewGuid().ToString("N");
      this.Name = username;
      this.Uuid = Guid.NewGuid().ToString();
    }

    public OfflineAuthentication(string username, string uuid)
    {
      this.AccessToken = Guid.NewGuid().ToString("N");
      this.ClientToken = Guid.NewGuid().ToString("N");
      this.Name = username;
      this.Uuid = uuid;
    }

    public OfflineAuthentication(string username, string uuid, string accessToken, string clientToken)
    {
      this.AccessToken = accessToken;
      this.ClientToken = clientToken;
      this.Name = username;
      this.Uuid = uuid;
    }
```

| 参数       | 类型     | 描述                     |
|----------|--------|------------------------|
| username | string | 必填，用户名            |
| uuid | string | 选填，唯一性ID                |
| accessToken | string | 选填，我不到啊            |
| clientToken  | string | 选填，我不到啊 |

## 控制台

```csharp
    account = new OfflineAuthentication("hyjthfht").OfflineAuth();//把hyjthfht替换成你的用户名
```