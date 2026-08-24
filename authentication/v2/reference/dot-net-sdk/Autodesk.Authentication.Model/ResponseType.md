---
title: "ResponseType Enum"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/ResponseType
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum ResponseType

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

The type of response you want to receive. Possible values are:
- `code` - Authorization code grant.
- `id_token` - OpenID Connect ID token.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum ResponseType
```

## Fields

`Code = 0`

Enum Code for value: code

`IdToken = 1`

Enum Idtoken for value: id_token

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/ResponseType
