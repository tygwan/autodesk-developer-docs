---
title: "GET Fetch Thumbnail"
url_path: reference/http//urn-thumbnail-GET
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "urn-thumbnail-GET"
method: "GET"
path: "/modelderivative/v2/designdata/{urn}/thumbnail"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# modelderivative/v2/designdata/{urn}/thumbnail

Retrieves a thumbnail of the specified source design.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/modelderivative/v2/designdata/{urn}/thumbnail |
| --- | --- |
| Authentication Context | User context optional |
| Required OAuth Scopes | `data:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/), or a three-legged access token obtained via an [Authorization Code flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) or a [Secure Service Account (SSA) flow](https://aps.autodesk.com/en/docs/ssa/v1/tutorials/getting-started-with-ssa/task3-generate-3-legged-access-token/).
The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| --- | --- |
| regionstring | Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:

`US` - (Default) Data center for the US region.
`EMEA` - Data center for the European Union, Middle East, and Africa.
`AUS` - Data center for the Australia region.
`CAN` - Data center for the Canada region.
`DEU` - Data center for the Germany region.
`IND` - Data center for the India region.
`JPN` - Data center for the Japan region.
`GBR` - Data center for the United Kingdom region. |

### Request

## URI Parameters

| urnstring | The URL-safe Base64 encoded URN of the source design. This value is used as the `urn` URI parameter in operations to access data for this source design. |
| --- | --- |

### Request

## Query String Parameters

| widthint | Width of thumbnail in pixels. Possible values:

`100` - 100 pixels wide.
`200` - 200 pixels wide.
`400` - 400 pixels wide.

If `width` is omitted, but `height` is specified, `width` defaults to `height`. If both `width` and `height` are omitted, the server will return a thumbnail closest to `200`, if such a thumbnail is available. |
| --- | --- |
| heightint | Height of thumbnails in pixels. Possible values:

`100` - 100 pixels high.
`200` - 200 pixels high.
`400` - 400 pixels high.

If `height` is omitted, but `width` is specified, `height` defaults to `width`. If both `width` and `height` are omitted, the server will return a thumbnail closest to `200`, if such a thumbnail is available. |

### Response

## HTTP Status Code Summary

| 200OK | The requested thumbnail was successfully retrieved. |
| --- | --- |
| 400Bad Request | The server was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request. |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource was not found. Review the request and try again. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Header (200)

| x-ads-namestring | The thumbnail file name, expressed as an encoded string. The encoding method is indicated by the `x-ads-name-encoding` response header.
If the value contains no %-encoded sequences, it is already the literal filename and decoding will leave it unchanged. |
| --- | --- |
| x-ads-name-encodingstring | The encoding scheme used for the `x-ads-name` value. Use this header to determine how to decode the filename. Possible values:

`url-encoded` - RFC 3986 percent-encoding (UTF-8).

This header is included only when `x-ads-name` is present in the response. |
| x-ads-sizestring | Thumbnail size. Possible values are: `[100,100]`, `[200,200]`, `[400,400]` |
| x-ads-rolestring | The source of the thumbnail. Possible values:

`rendered` - Generated pursuant to this operation call.
`extracted` - Obtained from the original design file. |
| x-ads-job-statusstring | The execution status of the translation job. Possible values:

`inprogress` - Translation job is in progress.
`success` - Translation job completed successfully.
`failed` - Translation job failed.
`timedout` - Translation job timed out. |
| x-ads-app-identifierstring | The service identifier. Comprises of the service name, version, and environment. |
| x-ads-startup-timestring | The service startup time, in the following date format: `EEE MMM dd HH:mm:ss Z yyyy`. |
| x-ads-durationstring | The amount of time spent servicing the request, in milliseconds. |
| x-ads-troubleshootingstring | Provides information about server failures, if any. |

The response is a binary stream of the thumbnail.

The following examples return raw HTTP headers and JSON objects. For a more developer-friendly experience, consider using our [TypeScript SDK](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/) or [.NET SDK](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk). Both provide strongly typed data with IntelliSense support, offering code completion, error checking, and tooltips that reduce the need to reference JSON schemas.

## Example 1

This example demonstrates the successful retrieval of a thumbnail (200).

### Request

```
curl \
  --location 'https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/thumbnail' \
  --header 'Authorization: Bearer eyJh...'
```

```
// Define the URL for the GET request
const url = 'https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/thumbnail';

// Define the request options, including the HTTP method and headers
const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer eyJh...'
    }
};

// Make the GET request using the Fetch API
fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

```
// Create a new instance of HttpClient to send HTTP requests
var client = new HttpClient();

// Create a new HTTP GET request to the specified URL
var request = new HttpRequestMessage(HttpMethod.Get, "https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/thumbnail");

request.Headers.Add("Authorization", "Bearer eyJh...");

// Send the HTTP request asynchronously and get the response
var response = await client.SendAsync(request);

// Ensure the response indicates success (status code 200-299)
response.EnsureSuccessStatusCode();

// Read the response content as a string and print it to the console
Console.WriteLine(await response.Content.ReadAsStringAsync());
```

```
# Import the requests library to handle HTTP requests
import requests

# Define the URL for the GET request
url = "https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/thumbnail"

# Define the headers
headers = {
    'Authorization': 'Bearer eyJh...',
}

# Make the GET request using the requests library
response = requests.get(url, headers=headers)

# Print the response content to the console
print(response.text)
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=86400
Content-Type: image/png
x-ads-app-identifier: platform-viewing-2016.05.03.1102.2f6bfbf-production
x-ads-duration: 142 ms
x-ads-name: 0.svf.png01_thumb_100x100.png
x-ads-job-status: success
x-ads-role: rendered
x-ads-size: [100, 100]
x-ads-startup-time: Thu May 19 10:38:55 UTC 2016
transfer-encoding: chunked
Connection: keep-alive
```

## Example 2

This example demonstrates the successful retrieval of a thumbnail with specified dimensions (200).

### Request

```
curl \
  --location 'https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/thumbnail?width=400&height=400' \
  --header 'Authorization: Bearer eyJh...'
```

```
// Define the URL for the GET request
const url = 'https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/thumbnail?width=400&height=400';

// Define the request options, including the HTTP method and headers
const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer eyJh...'
    }
};

// Make the GET request using the Fetch API
fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

```
// Create a new instance of HttpClient to send HTTP requests
var client = new HttpClient();

// Create a new HTTP GET request to the specified URL
var request = new HttpRequestMessage(HttpMethod.Get, "https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/thumbnail?width=400&height=400");

request.Headers.Add("Authorization", "Bearer eyJh...");

// Send the HTTP request asynchronously and get the response
var response = await client.SendAsync(request);

// Ensure the response indicates success (status code 200-299)
response.EnsureSuccessStatusCode();

// Read the response content as a string and print it to the console
Console.WriteLine(await response.Content.ReadAsStringAsync());
```

```
# Import the requests library to handle HTTP requests
import requests

# Define the URL for the GET request
url = "https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/thumbnail?width=400&height=400"

# Define the headers
headers = {
    'Authorization': 'Bearer eyJh...',
}

# Make the GET request using the requests library
response = requests.get(url, headers=headers)

# Print the response content to the console
print(response.text)
```

### Response

```
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=86400
Content-Type: image/png
x-ads-app-identifier: platform-viewing-2016.05.03.1102.2f6bfbf-production
x-ads-duration: 142 ms
x-ads-name: 0.svf.png01_thumb_400x400.png
x-ads-job-status: success
x-ads-role: rendered
x-ads-size: [400, 400]
x-ads-startup-time: Thu May 19 10:40:25 UTC 2016
transfer-encoding: chunked
Connection: keep-alive
```

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-thumbnail-GET
