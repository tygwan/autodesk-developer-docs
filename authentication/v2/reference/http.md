---
title: "REST API Reference"
url_path: reference/http
product: "Authentication API"
surface: "authentication-v2"
protocol: "REST"
document_kind: "reference"
api_version: "v2"
section: "reference"
category: "http"
---
# REST API Reference

## Two-Legged Context

| Endpoint | Description |
| --- | --- |
| [POST token](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/gettoken-POST) | Get a two-legged access token |

## Three-Legged Context

| Endpoint | Description |
| --- | --- |
| [GET authorize](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/authorize-GET) | The browser URL to redirect an end user to in order to
acquire the user’s consent for your app to access the
specified resources
_Note: You do not call this URL directly in your server
code._ |
| [GET JWKS](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/asymmetrickeys-GET) | Gets the JWKS public keys to validate the access tokens |
| [GET logout](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/logout-GET) | Logs out the user by removing their user browser session |
| [POST token](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/gettoken-POST) | Exchange an authorization code for a three-legged access token |
| [POST introspect](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/introspect-POST) | Examines an access token and returns the status information of the token |
| [POST revoke](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/revoke-POST) | Takes an access token or refresh token and revokes it |

## Informational

| Endpoint | Description |
| --- | --- |
| [GET users/@me](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/users-%40me-GET) (Deprecated) | Get the profile information of an authorizing end user |

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/http
