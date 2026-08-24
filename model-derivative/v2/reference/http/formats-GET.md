---
title: "GET List Supported Formats"
url_path: reference/http//formats-GET
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "REST"
document_kind: "endpoint"
api_version: "v2"
section: "reference"
category: "http"
operation_id: "formats-GET"
method: "GET"
path: "/modelderivative/v2/designdata/formats"
auth_context: "user context optional"
scopes: []
verification: "docs-only"
---
# modelderivative/v2/designdata/formats

Retrieves an up-to-date list of supported translations, including information on the types of derivatives that can be generated for each source design file type. You can also obtain a list of translations that have changed since a specified date.

See the [Supported Translation Formats table](https://aps.autodesk.com/en/docs/model-derivative/v2/overview/supported-translations/) for more details.

**Note:** New file formats are continuously added to the supported translations list.

## Resource Information

| Method and URI | GET https://developer.api.autodesk.com/modelderivative/v2/designdata/formats |
| --- | --- |
| Authentication Context | User context optional |
| Required OAuth Scopes | No scopes required |
| Data Format | JSON |

### Request

## Headers

| Authorization*string | Must be `Bearer <token>`, where `<token>` is a two-legged access token obtained via a [Client Credentials Grant flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/), or a three-legged access token obtained via an [Authorization Code flow](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) or a [Secure Service Account (SSA) flow](https://aps.autodesk.com/en/docs/ssa/v1/tutorials/getting-started-with-ssa/task3-generate-3-legged-access-token/).
The SSA flow is designed for headless server-to-server operations. While it functions like a two-legged flow (no user interaction), it is classified as three-legged because it preserves user context. |
| --- | --- |
| If-Modified-Sincestring | Specifies a date in the `Day of the week, DD Month YYYY HH:MM:SS GMT` format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status `304`, NOT MODIFIED. |
| Accept-Encodingstring | A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.
If you specify `gzip` or `*`, content is compressed and returned in gzip format. |

### Response

## HTTP Status Code Summary

| 200OK | A list of supported formats was successfully retrieved. |
| --- | --- |
| 304Not Modified | Supported formats have not changed since the date specified by the `If-Modified-Since` header. |
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
| Last-Modifiedstring | Indicates the date and time (in `Day of the week, DD Month YYYY HH:MM:SS GMT` format) the supported formats were last modified. |

### Response

## Body Structure (200)

| formatsobject | A dictionary object that contains a collection of key-value pairs, where each pair represents the target file format and the corresponding source file formats. |
| --- | --- |
| *array: string | Key-value pairs. The key is the target file format. The value is an array of source design file formats that can be translated to the specified target file format. |

The following examples return raw HTTP headers and JSON objects. For a more developer-friendly experience, consider using our [TypeScript SDK](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/) or [.NET SDK](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk). Both provide strongly typed data with IntelliSense support, offering code completion, error checking, and tooltips that reduce the need to reference JSON schemas.

## Example 1

This example demonstrates the successful retrieval of all supported formats.

### Request

```
curl \
  --location 'https://developer.api.autodesk.com/modelderivative/v2/designdata/formats' \
  --header 'Authorization: Bearer eyJh...'
```

```
// Define the URL for the GET request to fetch supported formats
const url = 'https://developer.api.autodesk.com/modelderivative/v2/designdata/formats';

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
var request = new HttpRequestMessage(HttpMethod.Get, "https://developer.api.autodesk.com/modelderivative/v2/designdata/formats");

// Add the Authorization header with a Bearer token for authentication
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

# Define the URL for the GET request to fetch supported formats
url = "https://developer.api.autodesk.com/modelderivative/v2/designdata/formats"

# Define the headers, including the Authorization header with a Bearer token for authentication
headers = {
    'Authorization': 'Bearer eyJh...',  # Replace 'eyJh...' with a valid access token
}

# Make the GET request using the requests library
response = requests.get(url, headers=headers)

# Print the response content (supported formats) to the console
print(response.text)
```

### Response

```
HTTP/1.1 200 OK
Date: Fri, 16 Jun 2023 08:54:37 GMT
Last-Modified: Tue, Mon, 29 May 2023 07:26:57 GMT
x-ads-startup-time: Tue Jul 07 07:13:03 UTC 2020
x-ads-duration: 1 ms
x-ads-app-identifier: platform-viewing-2023.05.01.321.f6784ca64-production

  {
      "formats": {
          "dwg": [
              "f2d",
              "f3d",
              "rvt",
              "slddrw"
          ],
          "fbx": [
              "f3d"
          ],
          "ifc": [
              "rvt"
          ],
          "iges": [
              "f3d",
              "fbx",
              "iam",
              "ipt",
              "wire"
          ],
          "obj": [
              "asm",
              "f3d",
              "fbx",
              "iam",
              "ipt",
              "neu",
              "prt",
              "sldasm",
              "sldprt",
              "smb",
              "smt",
              "step",
              "stp",
              "stpz",
              "wire",
              "x_b",
              "x_t",
              "asm\\.\\d+$",
              "neu\\.\\d+$",
              "prt\\.\\d+$"
          ],
          "step": [
              "f3d",
              "fbx",
              "iam",
              "ipt",
              "smb",
              "smt",
              "wire"
          ],
          "stl": [
              "f3d",
              "fbx",
              "iam",
              "ipt",
              "wire"
          ],
          "svf": [
              "3dm",
              "3ds",
              "a",
              "asm",
              "axm",
              "brd",
              "catpart",
              "catproduct",
              "cgr",
              "collaboration",
              "dae",
              "ddx",
              "ddz",
              "dgk",
              "dgn",
              "dlv3",
              "dmt",
              "dwf",
              "dwfx",
              "dwg",
              "dwt",
              "dxf",
              "emodel",
              "exp",
              "f3d",
              "fbrd",
              "fbx",
              "fsch",
              "g",
              "gbxml",
              "glb",
              "gltf",
              "iam",
              "idw",
              "ifc",
              "ige",
              "iges",
              "igs",
              "ipt",
              "iwm",
              "jt",
              "max",
              "model",
              "mpf",
              "msr",
              "neu",
              "nwc",
              "nwd",
              "obj",
              "osb",
              "par",
              "pdf",
              "pmlprj",
              "pmlprjz",
              "prt",
              "psm",
              "psmodel",
              "rcc",
              "rcs",
              "rvm",
              "rvt",
              "sab",
              "sat",
              "sch",
              "session",
              "skp",
              "sldasm",
              "sldprt",
              "smb",
              "smt",
              "ste",
              "step",
              "stl",
              "stla",
              "stlb",
              "stp",
              "stpz",
              "vpb",
              "vue",
              "wire",
              "x_b",
              "x_t",
              "xas",
              "xpr",
              "zip",
              "asm\\.\\d+$",
              "neu\\.\\d+$",
              "prt\\.\\d+$"
          ],
          "svf2": [
              "3dm",
              "3ds",
              "a",
              "asm",
              "axm",
              "brd",
              "catpart",
              "catproduct",
              "cgr",
              "collaboration",
              "dae",
              "ddx",
              "ddz",
              "dgk",
              "dgn",
              "dlv3",
              "dmt",
              "dwf",
              "dwfx",
              "dwg",
              "dwt",
              "dxf",
              "emodel",
              "exp",
              "f3d",
              "fbrd",
              "fbx",
              "fsch",
              "g",
              "gbxml",
              "glb",
              "gltf",
              "iam",
              "idw",
              "ifc",
              "ige",
              "iges",
              "igs",
              "ipt",
              "iwm",
              "jt",
              "max",
              "model",
              "mpf",
              "msr",
              "neu",
              "nwc",
              "nwd",
              "obj",
              "osb",
              "par",
              "pdf",
              "pmlprj",
              "pmlprjz",
              "prt",
              "psm",
              "psmodel",
              "rcc",
              "rcs",
              "rvm",
              "rvt",
              "sab",
              "sat",
              "sch",
              "session",
              "skp",
              "sldasm",
              "sldprt",
              "smb",
              "smt",
              "ste",
              "step",
              "stl",
              "stla",
              "stlb",
              "stp",
              "stpz",
              "vpb",
              "vue",
              "wire",
              "x_b",
              "x_t",
              "xas",
              "xpr",
              "zip",
              "asm\\.\\d+$",
              "neu\\.\\d+$",
              "prt\\.\\d+$"
          ],
          "thumbnail": [
              "3dm",
              "3ds",
              "a",
              "asm",
              "axm",
              "axmf",
              "brd",
              "catpart",
              "catproduct",
              "cgr",
              "collaboration",
              "dae",
              "ddx",
              "ddz",
              "dgk",
              "dgn",
              "dlv3",
              "dmt",
              "dwf",
              "dwfx",
              "dwg",
              "dwgx",
              "dwt",
              "dxf",
              "emodel",
              "exp",
              "f2d",
              "f3d",
              "fbrd",
              "fbx",
              "flbr",
              "fprj",
              "fsch",
              "g",
              "gbxml",
              "glb",
              "gltf",
              "iam",
              "idw",
              "ifc",
              "ige",
              "iges",
              "igs",
              "ipt",
              "iwm",
              "jt",
              "max",
              "model",
              "mpf",
              "msr",
              "neu",
              "nwc",
              "nwd",
              "obj",
              "osb",
              "par",
              "pdf",
              "pmlprj",
              "pmlprjz",
              "prt",
              "psm",
              "psmodel",
              "rcc",
              "rcs",
              "rva",
              "rvm",
              "rvt",
              "sab",
              "sat",
              "sch",
              "session",
              "skp",
              "sldasm",
              "sldprt",
              "smb",
              "smt",
              "ste",
              "step",
              "stl",
              "stla",
              "stlb",
              "stp",
              "stpz",
              "vpb",
              "vue",
              "wire",
              "x_b",
              "x_t",
              "xas",
              "xpr",
              "zip",
              "asm\\.\\d+$",
              "neu\\.\\d+$",
              "prt\\.\\d+$"
          ]
      }
  }
```

## Example 2

This example demonstrates a request for changes since 12 Oct 2024.

### Request

```
curl --location 'https://developer.api.autodesk.com/modelderivative/v2/designdata/formats' \
  --header 'Authorization: Bearer eyJh...' \
  --header 'If-Modified-Since: Sat, 12 Oct 2024 11:15:42 GMT'
```

```
// Define the URL for the GET request to fetch supported formats
const url = 'https://developer.api.autodesk.com/modelderivative/v2/designdata/formats';

// Define the request options, including the HTTP method and headers
const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer eyJh...',  // Replace with a valid access token
        'If-Modified-Since': 'Sat, 12 Oct 2024 11:15:42 GMT'  // Specify the date for conditional retrieval
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
var request = new HttpRequestMessage(HttpMethod.Get, "https://developer.api.autodesk.com/modelderivative/v2/designdata/formats");

// Add the Authorization header with a Bearer token for authentication
request.Headers.Add("Authorization", "Bearer eyJh...");
request.Headers.Add("If-Modified-Since", "Sat, 12 Oct 2024 11:15:42 GMT"); // Specify the date for conditional retrieval

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

# Define the URL for the GET request to fetch supported formats
url = "https://developer.api.autodesk.com/modelderivative/v2/designdata/formats"

# Define the payload (empty in this case, as no body is required for this GET request)
payload = {}

# Define the headers, including the Authorization header with a Bearer token for authentication
headers = {
    'Authorization': 'Bearer eyJh...',  # Replace 'eyJh...' with a valid access token
    'If-Modified-Since': 'Sat, 12 Oct 2024 11:15:42 GMT'  # Specify the date for conditional retrieval
}

# Make the GET request using the requests library
response = requests.request("GET", url, headers=headers, data=payload)

# Print the response content (supported formats) to the console
print(response.text)
```

### Response

```
Status Code: 304 Not Modified
Date: Fri, 16 Jun 2023 09:39:54 GMT
Last-Modified: Mon, 29 May 2023 07:26:57 GMT
x-ads-startup-time: Mon Jun 05 04:03:40 UTC 2023
x-ads-duration: 13 ms
x-ads-app-identifier: platform-viewing-2023.05.01.321.f6784ca64-production
```

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET
