---
title: "TypeScript SDK Reference"
url_path: reference/typescript-sdk
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# TypeScript SDK Reference

## Resource Information

| **Package Name:** | @aps_sdk/authentication |
| --- | --- |
| **Version:** | 1.0.0 |

## Installing this Library

```
npm i @aps_sdk/authentication
```

## Learning Resources

### Source Code

The source code for this library is available at [https://github.com/autodesk-platform-services/aps-sdk-node](https://github.com/autodesk-platform-services/aps-sdk-node).

### Tutorials

The [Authentication lesson in the Simple Viewer tutorial](https://get-started.aps.autodesk.com/tutorials/simple-viewer/auth) demonstrates how to use this library to obtain an Access Token.

### Code Sample

```
import { AuthenticationClient, Scopes } from '@aps_sdk/authentication';

const clientId = '...';
const clientSecret = '...';

const authenticationClient = new AuthenticationClient();

const credentials = await authenticationClient.getTwoLeggedToken(
    clientId,
    clientSecret,
    [Scopes.DataRead, Scopes.DataCreate, Scopes.BucketCreate]
);

console.log(credentials.access_token);
```

See [https://github.com/autodesk-platform-services/aps-sdk-node/blob/main/samples/](https://github.com/autodesk-platform-services/aps-sdk-node/blob/main/samples/) for more code samples that use this SDK.

## SDK to REST API Cross Reference

| Operation Category | Operation | Method | HTTP Request |
| --- | --- | --- | --- |
| Token | Get OIDC Specification | [getOidcSpec](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#getoidcspec) | [GET /.well-known/openid-configuration](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/openid-GET/) |
|   | Authorize User | [authorize](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#authorize) | [GET /authorize](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/authorize-GET/) |
|   | Get JWKS | [getKeys](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#getkeys) | [GET /keys](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/asymmetrickeys-GET/) |
|   | Logout | [logout](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#logout) | [GET /logout](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/logout-GET/) |
|   | Get Refresh Token | [refreshToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#refreshtoken) | [POST /token](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/gettoken-POST/) |
|   | Get Three Legged Token | [getThreeLeggedToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#getthreeleggedtoken) |   |
|   | Get Two Legged Token | [getTwoLeggedToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#gettwoleggedtoken) |   |
|   | Introspect Token | [introspectToken](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#introspecttoken) | [GET /introspect](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/introspect-POST/) |
|   | Revoke Token | [revoke](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#revoke) | [POST /revoke](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/revoke-POST/) |
| Users | Get User Info | [getUserInfo](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationClient/#getuserinfo) | [GET /userinfo](https://aps.autodesk.com/en/docs/profile/v1/reference/profile/oidcuserinfo/) |

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk
