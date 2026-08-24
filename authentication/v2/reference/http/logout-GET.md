---
title: "GET logout"
url_path: reference/http//logout-GET
product: "Authentication API"
surface: "authentication-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "logout-GET"
method: "GET"
path: "/authentication/v2/logout"
auth_context: "not specified by source"
scopes: []
verification: "docs-only"
---
# logout

This API endpoint logs a user out by removing their user browser session and redirects the user to the Autodesk login page.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/authentication/v2/logout |
| --- | --- |
| Rate Limit | 500 calls per minute |

### Request

## Query String Parameters

| post_logout_redirect_uristring | Location to redirect once the logout is performed.
Note that the provided domain host should be in the allowed list. |
| --- | --- |

## Example

This example is shown with the redirect uri. As this is an optional parameter, it can be omitted and the method provided in the Resource Information section can be used to initiate a logout. By default, this redirects to the Autodesk login page.

### Request

```
<a href="https://developer.api.autodesk.com/authentication/v2/logout?post_logout_redirect_uri=https://www.autodesk.com">
```

That `href` attribute is a bit difficult to read. Let’s break it down:
- `https://developer.api.autodesk.com/authentication/v2/logout` This is the endpoint URI and should be used verbatim.
- `post_logout_redirect_uri=https://www.autodesk.com` This is the location to redirect the user after they have successfully logged out from the browser session. In this example, that URL is `https://www.autodesk.com`. Replace the value here with the appropriate URL for your web app.

### Response

## HTTP Status Code Summary

| 302OK | Successful request; user will be redirected to `post_logout_redirect_uri` if provided,
else by default to Autodesk login page. |
| --- | --- |
| 500Internal Server Error | Generic internal server error. |

Note:

When the `post_logout_redirect_uri` is not included in the allow listed domain items, the following error message screen is displayed.

![../../../../_images/post_logout_redirect_uri.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/post_logout_redirect_uri.png)

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/http/logout-GET
