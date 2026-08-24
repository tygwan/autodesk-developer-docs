---
title: "TokenTypeHint Enum"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/TokenTypeHint
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum TokenTypeHint

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

The type of token to revoke. Possible values are: `access_token` and `refresh_token`.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum TokenTypeHint
```

## Fields

`AccessToken = 0`

Enum Accesstoken for value: access_token

`RefreshToken = 1`

Enum Refreshtoken for value: refresh_token

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/TokenTypeHint
