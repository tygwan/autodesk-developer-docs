---
title: "GET List Model Views"
url_path: reference/http//urn-metadata-GET
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "urn-metadata-GET"
method: "GET"
path: "/modelderivative/v2/designdata/{urn}/metadata"
auth_context: "user context optional"
scopes: ["data:read"]
verification: "docs-only"
---
# modelderivative/v2/designdata/{urn}/metadata

Retrieves a list of Model Views (Viewables) in the source design specified by the `urn` URI parameter. The response also returns an ID that uniquely identifies each Model View. You can use these IDs with other metadata operations to obtain information about the objects within those Model Views.

Designs created with applications like Fusion 360 and Inventor contain only one Model View per design. Applications like Revit allow multiple Model Views per design.

**Note:** You can retrieve metadata only from a design that has already been translated to SVF or SVF2.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/modelderivative/v2/designdata/{urn}/metadata |
| --- | --- |
| Authentication Context | User context optional |
| Required OAuth Scopes | `data:read` |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/), or a three-legged access token obtained via an [Authorization Code flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) or a [Secure Service Account (SSA) flow](https://aps.autodesk.com/en/docs/ssa/v1/tutorials/getting-started-with-ssa/task3-generate-3-legged-access-token/).
The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| --- | --- |
| Accept-Encodingstring | A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.
If you specify `gzip` or `*`, content is compressed and returned in gzip format. |
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

### Response

## HTTP Status Code Summary

| 200OK | A list of Model Views was successfully retrieved. |
| --- | --- |
| 400Bad Request | The server was unable to process the request. The syntax of the request is malformed or the request is missing a required header. Do not repeat the request without fixing the issue. The response body may indicate what is wrong with the request. |
| 401Unauthorized | The supplied authorization header was not valid or the supplied token scope was not acceptable. Verify authentication and try again. |
| 403Forbidden | The request was successfully validated but lacking the required permissions. Verify your credentials and permissions before you send this request again. |
| 404Not Found | The requested resource was not found. Review the request and try again. |
| 500Internal Server Error | An unexpected error occurred on the server, preventing it from completing your request. Please try again later. If the issue persists, contact the support team for assistance. |

### Response

## Header (200)

| x-ads-app-identifierstring | The service identifier. Comprises of the service name, version, and environment. |
| --- | --- |
| x-ads-startup-timestring | The service startup time, in the following date format: `EEE MMM dd HH:mm:ss Z yyyy`. |
| x-ads-durationstring | The amount of time spent servicing the request, in milliseconds. |
| x-ads-troubleshootingstring | Provides information about server failures, if any. |

### Response

## Body Structure (200)

| dataobject | Container for the data returned by the List Model Views operation. |
| --- | --- |
| typestring | The type of data that is returned. |
| metadataarray: object | An array of objects, where each object represents a Model View. |
| namestring | Name of the Model View. |
| guidstring | Unique ID of the Model View. |
| roleenum:string | Specifies the type of a Model View. Possible values:

`2d` - 2D Model View.
`3d` - 3D Model View. |
| isMasterViewboolean | `true` - Model View is a Master View derived from a Revit source design.
`false` - (Default) Model View is not a Master View. |

The following examples return raw HTTP headers and JSON objects. For a more developer-friendly experience, consider using our [TypeScript SDK](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/) or [.NET SDK](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk). Both provide strongly typed data with IntelliSense support, offering code completion, error checking, and tooltips that reduce the need to reference JSON schemas.

## Example

This example demonstrates the successful retrieval of a list of model views and their IDs (200).

### Request

```
curl --location 'https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/metadata' \
--header 'Authorization: Bearer eyJh...' \
--header 'Content-Type: application/json'
```

```
// Create a new Headers object and set the required headers
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJh..."); // Replace with your access token
myHeaders.append("Content-Type", "application/json");

// Set up the request options for the fetch call
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

// Make the GET request to the Model Derivative API for metadata
fetch("https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/metadata", requestOptions)
  .then((response) => response.text()) // Parse the response as text
  .then((result) => console.log(result)) // Log the result to the console
  .catch((error) => console.error(error)); // Log any errors
```

```
// Create a new HttpClient instance
var client = new HttpClient();

// Create a new HttpRequestMessage for the GET request
var request = new HttpRequestMessage(HttpMethod.Get, "https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/metadata");

// Add the Authorization header with your access token
request.Headers.Add("Authorization", "Bearer eyJh...");

// Send the request asynchronously and get the response
var response = await client.SendAsync(request);

// Throw an exception if the response indicates an error
response.EnsureSuccessStatusCode();

// Read and print the response content as a string
Console.WriteLine(await response.Content.ReadAsStringAsync());
```

```
import requests

# Set the API endpoint URL for the metadata request
url = "https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWxkZXJpdmF0aXZlL0E1LnppcA/metadata"

# Set the required headers, including your access token
headers = {
    'Authorization': 'Bearer eyJh...',  # Replace with your access token
    'Content-Type': 'application/json'
}

# Make the GET request to the Model Derivative API
response = requests.request("GET", url, headers=headers)

# Print the response text (the metadata)
print(response.text)
```

### Response

```
{
    "data": {
        "type": "metadata",
        "metadata": [
            {
                "name": "NAVISWORKS/IFC EXPORT",
                "role": "3d",
                "guid": "04b9a71d-9015-0a7b-338b-8522a705a8d7"
            },
            {
                "name": "New Construction",
                "role": "3d",
                "guid": "1d6e48c5-e4a4-8ca5-5b02-3f2acc354470",
                "isMasterView": true
            },
            {
                "name": "001 - 4128-AA-DC-681100**_IS01",
                "role": "2d",
                "guid": "eea006f7-042b-c298-d497-9ef4047e8378"
            }
        ]
    }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET
