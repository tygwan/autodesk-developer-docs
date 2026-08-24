---
title: "Scopes Enum"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/Scopes
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Enum Scopes

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

Specifies the scope for the token you are requesting. See the [Developer’s Guide documentation on scopes](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/scopes/) for a complete list of possible values.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum Scopes
```

## Fields

`AccountRead = 14`

Enum Accountread for value: account:read

`AccountWrite = 15`

Enum Accountwrite for value: account:write

`BucketCreate = 9`

Enum Bucketcreate for value: bucket:create

`BucketDelete = 12`

Enum Bucketdelete for value: bucket:delete

`BucketRead = 10`

Enum Bucketread for value: bucket:read

`BucketUpdate = 11`

Enum Bucketupdate for value: bucket:update

`CodeAll = 13`

Enum Codeall for value: code:all

`DataCreate = 7`

Enum Datacreate for value: data:create

`DataRead = 4`

Enum Dataread for value: data:read

`DataReadURNOFRESOURCE = 5`

Enum DatareadURNOFRESOURCE for value: data:read:<URN_OF_RESOURCE>

`DataSearch = 8`

Enum Datasearch for value: data:search

`DataWrite = 6`

Enum Datawrite for value: data:write

`OpenId = 16`

Enum Openid for value: openid

`UserProfileRead = 2`

Enum UserProfileread for value: user-profile:read

`UserRead = 0`

Enum Userread for value: user:read

`UserWrite = 1`

Enum Userwrite for value: user:write

`ViewablesRead = 3`

Enum Viewablesread for value: viewables:read

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/Scopes
