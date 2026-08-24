---
title: "GrantType Enum"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/GrantType
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum GrantType

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

Specifies the grant type you are requesting the code for. Possible values are:
- `client_credentials` - For a 2-legged access token.
- `authorization_code` - For a 3-legged access token.
- `refresh_token` - For a refresh token.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum GrantType
```

## Fields

`AuthorizationCode = 1`

Enum Authorizationcode for value: authorization_code

`ClientCredentials = 0`

Enum Clientcredentials for value: client_credentials

`RefreshToken = 2`

Enum Refreshtoken for value: refresh_token

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/GrantType
