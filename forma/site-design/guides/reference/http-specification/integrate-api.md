---
title: "Integrate API"
url_path: reference/http-specification/integrate-api
surface: guide
---
# Integrate API

The Integrate API provides a mechanism to store representations (e.g. geometry)
from outside Forma itself. It can then be retrieved by other systems through the
[Element API](https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/) and used in the product.

These APIs are accessible to your backend service with the two-legged token explained
in [the auth section](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/introduction).

## Creating an element using the Integrate API

The API exposes endpoints to create and update individual elements
as separate requests, or create and update multiple elements in a batch as
a single request:
- [Create a new element](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-createelementv2-POST/)
- [Update an element](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-updateelementv2-POST/)
- [Create and/or update multiple elements in a batch](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-batchingestelementsv2-POST/)

To store a large or binary representation, you need to upload it separately first:
- [Get a signed link to upload a payload](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-getuploadlink-GET/)

This will give you a `blobId`, which you can refer to when creating/updating an element.

Example of body payload to create an element with a volume mesh
representation (which must reference a valid uploaded GLB file):

```
{
  "representations": {
    "volumeMesh": {
      "type": "linked",
      "blobId": "<blobId-from-upload>"
    }
  }
}
```

Refer to the [Forma Element Specification](https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/forma-element-specification/) for further details about representations and data
in elements.

The element reference (URN) retrieved after creating an element can then
be used to add this element to the proposal, reference it from other elements,
store in library, etc.

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-specification/integrate-api
