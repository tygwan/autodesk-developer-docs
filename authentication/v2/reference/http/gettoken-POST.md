---
title: "POST token"
url_path: reference/http//gettoken-POST
product: "Authentication API"
surface: "authentication-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "gettoken-POST"
method: "POST"
path: "/authentication/v2/token"
auth_context: "not specified by source"
scopes: []
verification: "docs-only"
---
# token

Retrieves a two-legged or three-legged access token depending on the grant type.

Grant type is a request body parameter that refers to the method an application gains an access token. Based on the needs of your application, some grant types are more appropriate than others.
- If `grant_type` is `client_credentials`, it returns a two legged access token.
- If `grant_type` is `authorization_code`, it returns 3-legged access token for authorization code grant.
- If `grant_type` is `refresh_token`, it returns new access token by using the refresh token provided in the request. _Note: The refresh token should be considered as an opaque string of characters, and its length may be modified in the future if necessary._

## Resource Information

| Method and URI | POST https://developer.api.autodesk.com/authentication/v2/token |
| --- | --- |
| Data Format | Form encoding (request); JSON (response) |
| Rate Limit | 500 calls per minute |

_Note: Client Authentication (client_id and client_secret) is supported in either header or body for the above mentioned grant types._

_Passing client authentication in both header and body results in a “400 Bad Request” error in the response body._

The following sections describe Grant types for both private and public clients with examples. Choose the appropriate section based on your requirements:
- Section 1 - Authorization Code Grant Type.
- Section 2 - Refresh Token Grant Type.
- Section 3 - Client Credentials Grant Type.

## Section 1 - Authorization Code Grant Type

### For Private clients

### Request

## Headers

| Authorizationstring | Must be in the form `Basic ${Base64(<client_id>:<client_secret>)}`
_Note: Include this parameter in the header if it is not passed in the request body._ |
| --- | --- |
| Content-Type*string | Must be `application/x-www-form-urlencoded` |

### Request

## Body Structure

The request body is a URL-encoded string of ampersand-concatenated, name-value pairs of the following parameters:

## Example

Successful exchange of authorization code for access token (200)

### Request in Header

```
curl -v 'https://developer.api.autodesk.com/authentication/v2/token' \
   -X 'POST' \
   -H 'Content-Type: application/x-www-form-urlencoded' \
   -H 'Accept: application/json' \
   -H 'Authorization: Basic RjZEbjh5cGVtMWo4UDZzVXo4SVgzcG1Tc09BOTlHVVQ6QVNOa3c4S3F6MXQwV1hISw==' \
   -d 'grant_type=authorization_code' \
   -d 'code=DgK8pixFrHk8N_7tym_EVhDcHnaTV9SR6yoWmOyb' \
   -d 'redirect_uri=http://localhost:8080/oauth/callback/'
```

### Request in Body

```
curl -v 'https://developer.api.autodesk.com/authentication/v2/token' \
     -X 'POST' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Accept: application/json' \
     -d 'grant_type=authorization_code' \
     -d 'code=DgK8pixFrHk8N_7tym_EVhDcHnaTV9SR6yoWmOyb' \
     -d 'client_id=F6Dn8ypem1j8P6sUz8IX3pmSoNA99GUT' \
     -d 'client_secret=ASNkw8Kqz1t0WXHK' \
     -d 'redirect_uri=http://localhost:8080/oauth/callback/'
```

### For Public clients

### Request

## Headers

| Content-Type*string | Must be `application/x-www-form-urlencoded` |
| --- | --- |

### Request

## Body Structure

The request body is a URL-encoded string of ampersand-concatenated, name-value pairs of the following parameters:

| client_id*string | Client ID of the app |
| --- | --- |
| grant_type*string | The grant type is `authorization_code`, it returns 3-legged access token for authorization code grant. |
| code*string | The authorization code captured from the `code` query parameter when the [GET authorize](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/authorize-GET)
redirected back to the callback URL. |
| redirect_uri*string | Must match the `redirect_uri` parameter used in [GET authorize](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/authorize-GET) |
| code_verifier*string | Random URL string using the unreserved characters with a minimum length of 43 characters and
a maximum length of 128 characters. This is required if `grant_type` is `authorization_code`
and code_challenge was specified in /authorize request. |

## Example

### Request

```
curl -v 'https://developer.api.autodesk.com/authentication/v2/token' \
     -X 'POST' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Accept: application/json' \
     -d 'grant_type=authorization_code' \
     -d 'client_id=GCi5oTYLE36CTUlcL7wWbhq9mC5DzG9w' \
     -d 'code_verifier=ZGI6X4QR3FFXh3Bs9zNMgazTYDHEb_GqTt_fue4tFKYjRNR9N32bCqr~Hsxl673Ssf0RqyxC0avKNo_AKlE_7tj6cm4i5XbmjuGrCsu7X9rE~MqmoBLrLjvmvQscCfi2' \
     -d 'code=wroM1vFA4E-Aj241-quh_LVjm7UldawnNgYEHQ8I' \
     -d 'redirect_uri=http://localhost:8080/oauth/callback/'
```

### Response

## HTTP Status Code Summary

All the error codes for the above sections are listed below:

| 200OK | Successful request; access token returned. |
| --- | --- |
| 400Invalid Request | The token request must specify a valid ‘grant_type’. |
| 400Invalid Request | The request is missing a required parameter ‘code’. |
| 400Invalid Request | The request is missing a required parameter ‘redirect_uri’. |
| 400Invalid Request | The request is missing a required parameter ‘code_verifier’. |
| 400Invalid grant | The authorization code is invalid or has expired. |
| 400Invalid grant | PKCE verification failed. |
| 400Invalid grant | The grant was issued to another client. |
| 400Invalid grant | The ‘redirect_uri’ is invalid. |
| 400Invalid grant | The scope is invalid. |
| 400Invalid Request | The ‘client_id’ is not supported in the request body when Authorization headers are present. |
| 401Invalid credentials | No client credentials found. |
| 401Invalid credentials | The client credentials are invalid. |
| 429Too Many Requests | Rate limit exceeded; wait some time before retrying. |
| 500Internal Server Error | Generic internal server error. |

### Response

## Body Structure (200)

Responses are common for both private and public client.

The response body for a successful call is a flat JSON object with the following attributes:

| token_typestring | Will always be `Bearer` |
| --- | --- |
| expires_inint | Access token expiration time (in seconds) |
| refresh_tokenstring | The refresh token |
| access_tokenstring | The access token |
| id_tokenstring | The ID token, if openid scope was specified in /authorize request. |

## Example

Returns an access token and refresh token.

### Response

```
{
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoiR0NpNW9UWUxFMzZDVFVsY0w3d1diaHE5bUM1RHpHOXciLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJXWUhWa3Mwc0hBdmYzZWphWHFCdUl4UWNKa29RMnpEMW9aSHkydG1sVHVMdTliN0R1M3pvU1padnpXRGxZM0lsIiwidXNlcmlkIjoiM1hWU0w3MkpMMlU1IiwiZXhwIjoxNjY5ODgzMjcyfQ.Z7M2ZeuCc9oCuPn1CBr7axkOfONWtrZIROq0rROmpZ_Or5S34YL1BvcrVqfQj8VnmXgw5WbJcUEmDrRnH3Qo9nxK5OxKaunOL00qTQZZQ8KrmOkCx9ZVeKZhrss21f4asQWI7kgG09xLRvlt1jNcFvSrbXSCDm8suALhBv5PF_8S2cTbH-lNz0vZVn2uHzsokAGFDGnxZkaEZagqJUHIOdQiSJF_dP3s4j5OFCq60LP_hwBV5LXkZ4eq2rSpqwtvpldJxzXE3T9KdXeHEz__GSnuItS7_EkCu0Gmk5tf6JWyZImV68-uu4c8rB1rXV2XaiLS69zRWfyD9bpX6OZw1w",
  "token_type": "Bearer",
  "expires_in": 3599,
  "refresh_token": "Zxn4ucyciQSfCN7dC7e4MWCaIZRLtYsB6vhcmg5LMH"
}
```

## Section 2 - Refresh Token Grant Type

### For Private clients

### Request

## Headers

| Authorizationstring | Must be in the form `Basic ${Base64(<client_id>:<client_secret>)}`
_Note: Include this parameter in the header if it is not passed in the request body._ |
| --- | --- |
| Content-Type*string | Must be `application/x-www-form-urlencoded` |

### Request

## Body Structure

The request body is a URL-encoded string of ampersand-concatenated, name-value pairs of the following parameters:

| grant_type*string | The grant type is `refresh_token`, it returns a new 3-legged access token by using the refresh token provided in the request. |
| --- | --- |
| refresh_token*string | The refresh token used to acquire a new access token and a refresh token. |
| scopestring | If specified, scopes have to be primarily same with or a subset of the scopes used to generate the refresh_token. |
| client_idstring | Client ID of the app.
_Note: Include this parameter in the request body if it is not passed in the header._ |
| client_secretstring | Client secret of the app.
_Note: Include this parameter in the request body if it is not passed in the header._ |

## Example

Successful exchange of refresh token for a new access token (200)

### Request in Header

```
curl -v 'https://developer.api.autodesk.com/authentication/v2/token' \
     -X 'POST' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Accept: application/json' \
     -H 'Authorization: Basic RjZEbjh5cGVtMWo4UDZzVXo4SVgzcG1Tc09BOTlHVVQ6QVNOa3c4S3F6MXQwV1hISw==' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=GwA1Yc4MOVulVsArZTAz4WxzysDrlEKgfrC06RAyZN' \
     -d 'scope=data:read'
```

### Request in Body

```
curl -v 'https://developer.api.autodesk.com/authentication/v2/token' \
     -X 'POST' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Accept: application/json' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=GwA1Yc4MOVulVsArZTAz4WxzysDrlEKgfrC06RAyZN' \
     -d 'client_id=F6Dn8ypem1j8P6sUz8IX3pmSoNA99GUT' \
     -d 'client_secret=ASNkw8Kqz1t0WXHK' \
     -d 'scope=data:read'
```

### For Public clients

### Request

## Headers

| Content-Type*string | Must be `application/x-www-form-urlencoded` |
| --- | --- |

### Request

## Body Structure

The request body is a URL-encoded string of ampersand-concatenated, name-value pairs of the following parameters:

| client_id*string | Client ID of the app. |
| --- | --- |
| grant_type*string | The grant type is `refresh_token`, it returns a new 3-legged access token by using the refresh token provided in the request. |
| refresh_token*string | The refresh token used to acquire a new access token and a refresh token. |
| scopestring | If specified, scopes have to be primarily same with or a subset of the scopes used to generate the refresh_token. |

## Example

Successful exchange of refresh token for a new access token (200)

### Request

```
curl -v 'https://developer.api.autodesk.com/authentication/v2/token' \
     -X 'POST' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Accept: application/json' \
     -d 'grant_type=refresh_token' \
     -d 'refresh_token=CqbQLYFFFYouleR6l7jvNxagZjaFOMTe5tgaKya4uQ' \
     -d 'client_id=GCi5oTYLE36CTUlcL7wWbhq9mC5DzG9w' \
     -d 'scope=data:read'
```

### Response

## HTTP Status Code Summary

All the error codes for the above sections are listed below:

| 200OK | Successful request; access token returned. |
| --- | --- |
| 400Invalid Request | The token request must specify a valid ‘grant_type’. |
| 400Invalid Request | The request is missing a required parameter ‘refresh_token’. |
| 400Invalid grant | The refresh token is invalid or expired. |
| 400Invalid scope | The requested scope is invalid, unknown, malformed or exceeds the scope granted by the resource owner. |
| 400Invalid grant | The scope is invalid. |
| 400Invalid Request | The ‘client_id’ is not supported in the request body when Authorization headers are present. |
| 401Invalid credentials | No client credentials found. |
| 401Invalid credentials | The client credentials are invalid. |
| 429Too Many Requests | Rate limit exceeded; wait some time before retrying. |
| 500Internal Server Error | Generic internal server error. |

### Response

## Body Structure (200)

The Response is common for both private and public client. It will not return ID Token.

The response body for a successful call is a flat JSON object with the following attributes:

| token_typestring | Will always be `Bearer` |
| --- | --- |
| expires_inint | Access token expiration time (in seconds) |
| refresh_tokenstring | The refresh token |
| access_tokenstring | The access token |

## Example

Returns an access token and refresh token.

### Response

```
{
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoiR0NpNW9UWUxFMzZDVFVsY0w3d1diaHE5bUM1RHpHOXciLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJ3cjNmVTlLa1JINDBVdkNTRDVXS1BzTExEaEU0aFFLZHpHdXV3MzFYajlnWjlyRk9DQlFCa2RnNjEwdEZhVUtQIiwidXNlcmlkIjoiWERTWlJOODNFUVFBIiwiZXhwIjoxNjcwMzE0MTAwfQ.aUMk1YilDM1Tya0_gKohKmOaAAu_4NzPQyN-wnPRsiFp7FrvpBn51B4ehHMDBcceN1r9Me9SEHkItChMlj2mJt3_1WtxuoGn6xbyI4Yr9TZ9rQNtsGKJTM70lRs2ng0FWIZUb6RH3NNHgvFJexEE1XrAmvmY7XRbKtLoC3Md2_PsKQH7w-bQUif-oFfXQ17Nj9AwYgsyW5telD9GgbY29ozvlYcQBTz8eyhv7VlQJ34ihqZ2kE3e_2n4z3AvZ5MoaYg5tCzbx7hFxiJ-TeUKNkuBVefzp9aZz0psp6ao16bSgjnmfUbtiUJVqPRIYDitYq3iN29MH8wYySg7CKEbTQ",
  "token_type": "Bearer",
  "expires_in": 3599,
  "refresh_token": "BOqRZwG7EEIurStNOlk31U3lxrF2QFbyn0vQ0HbaHi"
}
```

## Section 3 - Client Credentials Grant Type

### Request

## Headers

| Authorizationstring | Must be in the form `Basic ${Base64(<client_id>:<client_secret>)}`
_Note: Include this parameter in the header if it is not passed in the request body._ |
| --- | --- |
| Content-Type*string | Must be `application/x-www-form-urlencoded` |

### Request

## Body Structure

The request body is a URL-encoded string of ampersand-concatenated, name-value pairs of the following parameters:

| grant_type*string | Returns a two legged access token if `grant_type` is `client_credentials`. |
| --- | --- |
| scope*string | List of scopes that the client requires to include in the access_token.

Maximum characters - 3000
Maximum number of scopes - 50 |
| client_idstring | Client ID of the app.
_Note: Include this parameter in the request body if it is not passed in the header._ |
| client_secretstring | Client secret of the app.
_Note: Include this parameter in the request body if it is not passed in the header._ |

## Example

Successful exchange of client credentials for a new access token (200)

### Request in Header

```
curl -v 'https://developer.api.autodesk.com/authentication/v2/token' \
     -X 'POST' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Accept: application/json' \
     -H 'Authorization: Basic RjZEbjh5cGVtMWo4UDZzVXo4SVgzcG1Tc09BOTlHVVQ6QVNOa3c4S3F6MXQwV1hISw==' \
     -d 'grant_type=client_credentials' \
     -d 'scope=data:read'
```

### Request in Body

```
curl -v 'https://developer.api.autodesk.com/authentication/v2/token' \
     -X 'POST' \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'Accept: application/json' \
     -d 'grant_type=client_credentials' \
     -d 'client_id=F6Dn8ypem1j8P6sUz8IX3pmSoNA99GUT' \
     -d 'client_secret=ASNkw8Kqz1t0WXHK' \
     -d 'scope=data:read'
```

### Response

## HTTP Status Code Summary

| 200OK | Successful request; access token returned. |
| --- | --- |
| 400Invalid Request | The token request must specify a valid ‘grant_type’. |
| 400Invalid grant | The scope is invalid. |
| 400Invalid scope | The requested scope is invalid, unknown, malformed or exceeds the scope granted by the resource owner. |
| 400Invalid Request | The ‘client_id’ is not supported in the request body when Authorization headers are present. |
| 401Invalid credentials | No client credentials found. |
| 401Invalid credentials | The client credentials are invalid. |
| 429Too Many Requests | Rate limit exceeded; wait some time before retrying. |
| 500Internal Server Error | Generic internal server error. |

### Response

## Body Structure (200)

The response body for a successful call is a flat JSON object with the following attributes:

| token_typestring | Will always be `Bearer` |
| --- | --- |
| expires_inint | Access token expiration time (in seconds) |
| access_tokenstring | The access token |

## Example

Successful exchange of client credentials for access token (200)

### Response

```
{
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoiRjZEbjh5cGVtMWo4UDZzVXo4SVgzcG1Tc09BOTlHVVQiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJCT0VKUW8wNDVwaGxoZjBFTGc4SDhwTGpGblJuYjJWV3BwZ0ZObU50dEx3Vkc1VVZjZ3RnMGNoMjlEeGRMcTRxIiwiZXhwIjoxNjcwMzEzODcwfQ.gQxqNjykOufnFEGTxFBDYjCh5OEgm_HonFMxOfy5JcqZv6Sx9goznniR74WG8-qXRre6zcR_EXfQaucvoyR3KETB0YcXCtHAtiYQha_yjDtHDF3dgS3O3fgh880d54jQf4YEdibdTTEfbeuN6DG-m0wLvvqgTq1LuxrAiAUeXGnYtPuJ3GZVkwphwJi7WgMzFwfRuZvc0uy08nmIHHtrq0_AJUlfPpKhTnqUN7FlNQPiyJSYREcwz87bgy4THF-QDAMCs8hwUr8709z_BwBOv9kKoeFGGwQQsoDvXBrZmwpAh6ftijZLvHEyQlzvap3cEHvBQ9Ziam7VmrFtDgNJYw",
  "token_type": "Bearer",
  "expires_in": 3599
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/http/gettoken-POST
