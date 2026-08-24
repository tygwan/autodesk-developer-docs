---
title: ".NET SDK Reference"
url_path: reference/dot-net-sdk
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# .NET SDK Reference

## Resource Information

| **Namespace:** | Autodesk.Authentication |
| --- | --- |
| **Assembly:** | Autodesk.Authentication.dll |
| **Version:** | 1.0.0 |

## Installing this Library

The recommended way of installing this library to your .NET project is to use the NuGet Package Manager.
- Within the NuGet Package Manager locate the [Autodesk.Authentication library](https://www.nuget.org/packages/Autodesk.Authentication).
- Follow the instructions on the [NuGet documentation site](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#find-and-install-a-package) to install the library.

Alternatively, from Visual Studio IDE or CLI tools:

```
dotnet add package Autodesk.Authentication
```

## Learning Resources

### Source Code

The source code for this library is available at [https://github.com/autodesk-platform-services/aps-sdk-net](https://github.com/autodesk-platform-services/aps-sdk-net).

### Tutorials

See the Authentication lesson in the following tutorials:
- [Simple Viewer](https://tutorials.autodesk.io/tutorials/simple-viewer/auth/).
- [Hubs Browser](https://tutorials.autodesk.io/tutorials/hubs-browser/auth)

### Code Sample

```
AuthenticationClient authenticationClient = null!;

string client_id = "<client_id>";

string client_secret = "<client_secret>";

public void Initialise()

{

  // Instantiate SDK manager as below.

  SDKManager sdkManager = SdkManagerBuilder

    .Create() // Creates SDK Manager Builder itself.

    .Build();

  // Instantiate AuthenticationClient using the created SDK manager

  authenticationClient = new AuthenticationClient(sdkManager);

}

public async Task Get2LeggedTokenAsync()

{

  // Get 2Legged token.

  // Pass the client Id and secret as in your app. The method

  // will convert it in '${Base64(<client_id>:<client_secret>)}' format

  TwoLeggedToken twoLeggedToken = await authenticationClient.GetTwoLeggedTokenAsync(client_id, client_secret, new List < Scopes > () {
    Scopes.DataRead, Scopes.BucketRead
  });

}
```

## SDK to REST API Cross Reference

| Operation Category | Operation | Method | HTTP Request |
| --- | --- | --- | --- |
| Token | Get OIDC Specification | [GetOidcSpecAsync](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_GetOidcSpecAsync_System_Boolean_) | [GET /.well-known/openid-configuration](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/openid-GET/) |
|   | Authorize User | [Authorize](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_Authorize_System_String_Autodesk_Authentication_Model_ResponseType_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_Authentication_Model_Scopes__System_String_System_String_System_String_System_String_System_String_) | [GET /authorize](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/authorize-GET/) |
|   | Get JWKS | [GetKeysAsync](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_GetKeysAsync_System_Boolean_) | [GET /keys](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/asymmetrickeys-GET/) |
|   | Logout | [Logout](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_Logout_System_String_) | [GET /logout](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/logout-GET/) |
|   | Get Refresh Token | [RefreshTokenAsync](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_RefreshTokenAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_Authentication_Model_Scopes__System_Boolean_) | [POST /token](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/gettoken-POST/) |
|   | Get Three Legged Token | [GetThreeLeggedTokenAsync](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_GetThreeLeggedTokenAsync_System_String_System_String_System_String_System_String_System_String_System_Boolean_) |   |
|   | Get Two Legged Token | [GetTwoLeggedTokenAsync](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_GetTwoLeggedTokenAsync_System_String_System_String_System_Collections_Generic_List_Autodesk_Authentication_Model_Scopes__System_Boolean_) |   |
|   | Introspect Token | [IntrospectTokenAsync](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_IntrospectTokenAsync_System_String_System_String_System_String_System_Boolean_) | [GET /introspect](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/introspect-POST/) |
|   | Revoke Token | [RevokeAsync](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_RevokeAsync_System_String_System_String_System_String_Autodesk_Authentication_Model_TokenTypeHint_System_Boolean_) | [POST /revoke](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/revoke-POST/) |
| Users | Get User Info | [GetUserInfoAsync](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication/AuthenticationClient#Autodesk_Authentication_AuthenticationClient_GetUserInfoAsync_System_String_System_Boolean_) | [GET /userinfo](https://aps.autodesk.com/en/docs/profile/v1/reference/profile/oidcuserinfo/) |

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk
