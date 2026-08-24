---
namespace: Forma.auth
class: AuthApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.auth

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `configure`

```ts
Forma.auth.configure(input: { /** * The client ID of your APS application. * * The APS application must be configured to use * Authorization Code grant type with PKCE. * * You can find your client ID in the developer portal at https://aps.autodesk.com/myapps/ */ clientId: string; /** * The OAuth callback URL of your APS application. * This must be a URL on the same domain (origin) as your embedded view. * * The URL can point to a blank page, as the mechanism will retrieve * the necessary information from the URL parameters itself and close * the page automatically. * * The URL must be added to your APS application's list of callback URLs * in the developer portal at https://aps.autodesk.com/myapps/ */ callbackUrl: string; /** * The scopes you need permission to * * For Forma Site Design APIs the following scopes are recommended and will be enforced: * - "data:read" * - "data:write" * * @see https://forge.autodesk.com/en/docs/oauth/v2/developers_guide/scopes/ */ scopes: string[]; }): void;
```

Configure your extension with the client id, login URL, and scope.

This should be done before calling any other methods on the auth provider as they will fail without
any configuration.

@example
```typescript
Forma.auth.configure({
  clientId: "your-client-id",
  callbackUrl: "http://localhost:8080/auth", // this should be a blank html page
  scopes: ["data:read", "data:write"],
})

// Now you can call acquireTokenSilent, acquireTokenPopup, or acquireTokenOverlay
Forma.auth.acquireTokenPopup().then((result) => {
  console.log("Access token:", result.accessToken)
}
```

## `acquireTokenSilent`

```ts
Forma.auth.acquireTokenSilent(): Promise<{ accessToken: string; } | undefined>;
```

Get the current access token if it is valid and the token's userid, clientId and scope
claims are correct.

If the current token is expired, but have valid claims, the token will be refreshed.

@returns object with access token if it is valid, otherwise undefined

## `acquireTokenPopup`

```ts
Forma.auth.acquireTokenPopup(): Promise<{ accessToken: string; }>;
```

Acquire an access token by sending the user to the authorization server
in a popup. When the user has authorized the application, the popup will
redirect to the callback URL with a code in the URL. The code will be
exchanged for an access token and stored in localStorage.

@returns object with access token

@example
```typescript
const button = document.getElementById("login-button")
button.addEventListener("click", () => {
  Forma.auth.acquireTokenPopup().then((result) => {
    console.log("Access token:", result.accessToken)
  })
})
document.body.appendChild(button)
```

@remarks
This method should only be invoked as part of a user interaction, such as
a button click, to avoid the browser blocking the popup request.

## `acquireTokenOverlay`

```ts
Forma.auth.acquireTokenOverlay(): Promise<{ accessToken: string; }>;
```

Get an access token by first rendering an overlay covering the full embedded
view with a button to open a popup as with acquireTokenPopup.

This is a convenience method.

@returns object with access token

@example
```ts
const { accessToken } = await Forma.auth.acquireTokenOverlay()
```

## `refreshCurrentToken`

```ts
Forma.auth.refreshCurrentToken(): Promise<{ accessToken: string; }>;
```

Get a newly refreshed access token if one already exists.
This can be useful if your api takes a long time and the
current token might expire in-flight.

This function should only be used if the user has already authorized,
and will throw an error if there's no token available.

@return a newly refreshed token

@example
```ts
const newToken = await Forma.auth.refreshToken()
```

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
