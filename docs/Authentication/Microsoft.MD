---
title: "微软验证器"
---

# 微软验证器

微软正版验证

## 构造函数

构造函数非常简单，提供了一种办法：

``` csharp
    public async ValueTask<MicrosoftAccount> MicrosoftAuthAsync(
      StarLight_Core.Models.Authentication.GetTokenResponse tokenInfo,
      Action<string> action,
      string? refreshToken = null)
    {

    }
```

| 参数       | 类型     | 描述                     |
|----------|--------|------------------------|
| tokenInfo | StarLight_Core.Models.Authentication.GetTokenResponse | Microsoft Token            |
| action | Action<string> | 动作                |
| refreshToken | string | 我不到啊,todo            |

## 参数详解

### 详细```TokenInfo```定义

``` csharp
    public async ValueTask<StarLight_Core.Models.Authentication.GetTokenResponse> GetTokenResponse(
      RetrieveDeviceCode deviceCodeInfo)
    {

    }
```

| 参数       | 类型     | 描述                     |
|----------|--------|------------------------|
| deviceCodeInfo | RetrieveDeviceCode | 设备代码            |

### 详细```deviceCodeInfo```定义

``` csharp
    public async ValueTask<RetrieveDeviceCode> RetrieveDeviceCodeInfo()
    {
      RetrieveDeviceCode retrieveDeviceCode = !string.IsNullOrEmpty(this.ClientId) ? JsonSerializer.Deserialize<RetrieveDeviceCode>(await HttpUtil.SendHttpPostRequest("https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", "client_id=" + this.ClientId + "&scope=" + string.Join(" ", MicrosoftAuthentication.Scopes))) : throw new ArgumentNullException("ClientId", "ClientId为空");
      return new RetrieveDeviceCode()
      {
        ClientId = this.ClientId,
        UserCode = retrieveDeviceCode.UserCode,
        DeviceCode = retrieveDeviceCode.DeviceCode,
        VerificationUri = retrieveDeviceCode.VerificationUri,
        Message = retrieveDeviceCode.Message
      };
    }
```

### 详细```MicrosoftAuthentication```定义

``` csharp
public MicrosoftAuthentication(string clientId) => this.ClientId = clientId;
```

| 参数       | 类型     | 描述                     |
|----------|--------|------------------------|
| clientId(MicrosoftAuthentication) | string | 在Azure注册并通过MoJang问卷的客户端代码            |

## 控制台

``` csharp
                var auth = new MicrosoftAuthentication("Your Client Id");//替换成你的ClientId
                var code = await auth.RetrieveDeviceCodeInfo();
                Clipboard.Clear();
                Clipboard.SetText(code.UserCode);
                MessageBox.Show(code.UserCode);
                Process.Start(new ProcessStartInfo(code.VerificationUri)
                {
                    UseShellExecute = true,
                    Verb = "open"
                });
                var token = await auth.GetTokenResponse(code);
                MsaToken = token;
                MsaAuth = auth;
                    account = await auth.MicrosoftAuthAsync(token, x =>
                    {
                        AccountText.Text = x;
                    });
                    AccountText.Text = "你今天看起来很聪明，" + account.Name + "！";
```
