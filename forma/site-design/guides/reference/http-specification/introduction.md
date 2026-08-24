---
title: "Introduction"
url_path: reference/http-specification/introduction
surface: guide
---
# Authentication

To perform a call to a Forma Site Design API your service needs to use a valid token for an Autodesk Platform Services application.
The application must be registered as a service account for the extension you are creating.

Service accounts allow you to interact with project specific data by using the HTTP API. A service account is a Client
ID for an Autodesk Platform Services Application that you have configured. You can register multiple accounts for a
single extension depending on your needs, and it doesn’t need to be the same APS app that owns the extension.

To register a service account navigate to “Service accounts” and paste in the client ID of your APS app in the input
field.

To retrieve a token you
must [request a two legged access token](https://aps.autodesk.com/en/docs/oauth/v2/reference/http/gettoken-POST/) using
the `client_credentials` grant. This token is sent as a header:

```
authorization: Bearer <token>
```

The data you can access within a project depends on the authorization
configured in the extension. This area will be developed further and
initially only a handfull of APIs are available for extensions.

## Example code to retrieve token

Note that this should _only_ be used from a secure backend where you can safely store secrets.

When embedding into the Forma application there is never a need to get a valid token, you can interact with the APIs
through the SDK.

```
const basicAuth = Buffer.from("client-id:client-secret").toString("base64");

const response = await fetch(
  "https://developer.api.autodesk.com/authentication/v2/token",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicAuth}`,
    },
    body: "grant_type=client_credentials&scope=data:write",
  }
);

if (!response.ok) {
  throw new Error("Unexpected response");
}
const json = await response.json();
const token = json.access_token;
```

## Retrieving authenticated calls from Forma

As your service will likely have access to multiple Forma
projects it is important that you validate all incoming calls
to your service.

You can register endpoints in your service as endpoints in
the extension in Forma, and then call the endpoint via
the Invoke Extension Endpoint operation within the Extensions API,
e.g. from within an Embedded View.

Such an invocation will include special headers:
- `x-forma-extension-secret`: The secret that is configured in the extension to validate that the request is coming from Forma. **This must be verified.**
- `x-forma-project-id`: The Forma project ID used. If you have verified the extension secret you can trust this value, and should scope all operations to this project.
- `x-forma-base-url`: The base URL that can be used to call APIs within Forma and to understand which Forma instance was used to invoke your service.

## Local development

For local development and testing, it is also possible to use your
own user credentials. This type of credentials must also
be used for some APIs that are not enabled for extension
based authentication and authorization,
(such as installing an extension into a specific project).

The access token can be retrieved from the
`_sm_auth` cookie when you are logged into the Forma web client.
You can retrieve this value via Chrome DevTools by either looking
at the request header in the network tab or Cookies section in
Application tab.

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-specification/introduction
