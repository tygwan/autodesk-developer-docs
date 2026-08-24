---
title: "Generate Thumbnails"
url_path: developers_guide/basics/thumbnail_generation
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "basics"
---
# Generate Thumbnails

You can use the Model Derivative API to generate thumbnails of a model.
Supported sizes are:
- 100 × 100
- 200 × 200
- 400 × 400

## Workflow

Follow these steps to generate a thumbnail:
- **Create a translation job** Call [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST) and:  Set the output format type to `thumbnail`
- Specify the width and height (in pixels)
- **Poll the manifest** Call [Fetch Manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) repeatedly until:  The job is complete
- The manifest includes the thumbnail
- **Get the thumbnail URN**  Find the derivative where `role` is `thumbnail`
- Copy its URN
- **Download the thumbnail** Call [Fetch Thumbnail](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-thumbnail-GET) using the URN to retrieve the image

## Source File Name in the Response

A successful
[Fetch Thumbnail](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-thumbnail-GET)
response includes two headers related to the thumbnail file name:
- `x-ads-name` — the file name (encoded)
- `x-ads-name-encoding` — the encoding method used

These headers are always returned together.

### Important

Before displaying or saving the file name, decode `x-ads-name`.
- Currently, `x-ads-name-encoding` is always `url-encoded`
- The encoding follows **RFC 3986 percent-encoding (UTF-8)**
- Spaces are encoded as `%20` (not `+`)
- For ASCII-only names, decoding has no effect

## Example: Decode the File Name

The following examples assume you already have an `HTTP` response from a
successful
[Fetch Thumbnail](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-thumbnail-GET)
call.

if your project does not use implicit usings.

```
const rawName = response.headers.get('x-ads-name');
const encoding = response.headers.get('x-ads-name-encoding');

const filename =
    encoding === 'url-encoded' && rawName !== null
        ? decodeURIComponent(rawName)
        : rawName;
```

```
import urllib.parse

raw_name = response.headers.get('x-ads-name')
encoding = response.headers.get('x-ads-name-encoding')

filename = (
    urllib.parse.unquote(raw_name, encoding='utf-8')
    if encoding == 'url-encoded' and raw_name is not None
    else raw_name
)
```

```
string? rawName = null;
string? encoding = null;

if (response.Headers.TryGetValues("x-ads-name", out var nameValues))
    rawName = nameValues.FirstOrDefault();

if (response.Headers.TryGetValues("x-ads-name-encoding", out var encodingValues))
    encoding = encodingValues.FirstOrDefault();

var filename =
    encoding == "url-encoded" && rawName is not null
        ? Uri.UnescapeDataString(rawName)
        : rawName;
```

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/basics/thumbnail_generation
