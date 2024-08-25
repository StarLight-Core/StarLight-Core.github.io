---
title: "微软验证器"
---

# 微软验证器

用于拥有已购买游戏的玩家或游玩开启正版验证的服务器

命名空间 `` StarLight_Core.Authentication ``

## 构造函数

```csharp
public MicrosoftAuthentication(string clientId)
{
    ClientId = clientId;
}
```

| 参数       | 类型     | 描述                    |
|----------|--------|-----------------------|
| clientId | string | 在 Azure 中注册的 ClientId |

> [!IMPORTANT]
> 自2023年6月15日起, 新申请的 ClientId 必须向 Mojang 提交申请才能访问 Minecraft 账户 [详细信息](https://help.minecraft.net/hc/en-us/articles/16254801392141p)

## 方法参考

### ``RetrieveDeviceCodeInfo`` 获取设备代码
```csharp
public async ValueTask<RetrieveDeviceCode> RetrieveDeviceCodeInfo()
```

| 返回值                | 描述                                                              |
|--------------------|-----------------------------------------------------------------|
| RetrieveDeviceCode | [参数详解](/Authentication/Microsoft.html#详细-retrievedevicecode-定义) |

### ``GetTokenResponse`` 轮询获取 Token
```csharp
public async ValueTask<GetTokenResponse> GetTokenResponse(RetrieveDeviceCode deviceCodeInfo)
```

| 参数             | 类型                 | 描述                                                              |
|----------------|--------------------|-----------------------------------------------------------------|
| deviceCodeInfo | RetrieveDeviceCode | [参数详解](/Authentication/Microsoft.html#详细-retrievedevicecode-定义) |

| 返回值              | 描述                                                            |
|------------------|---------------------------------------------------------------|
| GetTokenResponse | [参数详解](/Authentication/Microsoft.html#详细-gettokenresponse-定义) |

### ``MicrosoftAuthAsync`` 异步验证方法
```csharp
public async ValueTask<MicrosoftAccount> MicrosoftAuthAsync(GetTokenResponse tokenInfo, Action<string> action, string? refreshToken = null)
```

| 参数                  | 类型               | 描述                                                              |
|---------------------|------------------|-----------------------------------------------------------------|
| tokenInfo           | GetTokenResponse | [参数详解](/Authentication/Microsoft.html#详细-retrievedevicecode-定义) |
| action              | Action\<string\> | 进度报告                                                            |
| refreshToken = null | string?          | 刷新令牌                                                            |

| 返回值              | 描述    |
|------------------|-------|
| MicrosoftAccount | 微软账户类 |

## 参数详解

### 详细 ``RetrieveDeviceCode`` 定义

| 参数              | 类型     | 描述                    |
|-----------------|--------|-----------------------|
| DeviceCode      | string | 设备代码                  |
| UserCode        | string | 用户代码                  |
| ClientId        | string | 在 Azure 中获取的 ClientId |
| VerificationUri | string | 登录地址                  |
| Message         | string | 提示消息                  |

### 详细 ``GetTokenResponse`` 定义

| 参数           | 类型     | 描述                    |
|--------------|--------|-----------------------|
| AccessToken  | string | 资源令牌                  |
| RefreshToken | string | 刷新令牌                  |
| ClientId     | string | 在 Azure 中获取的 ClientId |
| ExpiresIn    | int    | 过期时间                  |

## 控制台示例

> [!TIP]
> 控制台示例只是为了更加方便的了解如何使用, 不建议直接复制

```csharp
var auth = new MicrosoftAuthentication(clientId);
var deviceCodeInfo = await auth.RetrieveDeviceCodeInfo();
Console.WriteLine(deviceCodeInfo.UserCode + " " + deviceCodeInfo.VerificationUri);
// 打开 deviceCodeInfo.VerificationUri 引导用户在其间输入 deviceCodeInfo.UserCode 以便完成登录
var tokenInfo = await auth.GetTokenResponse(deviceCodeInfo);
var userInfo = await auth.MicrosoftAuthAsync(tokenInfo, x =>
{
    Console.WriteLine(x); // 当前进度输出
});
```
