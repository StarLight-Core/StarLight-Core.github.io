# 统一通行证验证器

用于启用统一通行证验证的服务器，通过账户以及密码进行登录验证，支持刷新验证

命名空间 `` StarLight_Core.Authentication ``

## 构造函数

```csharp
public UnifiedPassAuthenticator(string username, string password, string serverId, string baseUrl = UnifiedPassBaseUrl)
{
    Username = username;
    Password = password;
    ServerId = serverId;
    BaseUrl = baseUrl;
}
```

| 参数       | 类型     | 描述                     |
|----------|--------|------------------------|
| username | string | 统一通行证账户名或邮箱            |
| password | string | 统一通行证密码                |
| serverId | string | 统一通行证服务器 ID            |
| baseUrl  | string | 基础验证服务器 URL (一般情况可以忽略) |