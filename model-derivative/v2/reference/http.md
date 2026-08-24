---
title: "REST API Reference"
url_path: reference/http
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "REST"
document_kind: "reference"
api_version: "v2"
section: "reference"
category: "http"
---
# REST API Reference

This page contains a list of operations possible with the Model Derivative API.

## Informational

| Operation | HTTP Request | Description |
| --- | --- | --- |
| **List Supported Formats** | [GET /formats](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) | Returns the supported output formats for each input format. |

## Jobs

| Operation | HTTP Request | Description |
| --- | --- | --- |
| **Create Translation Job** | [POST /job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST) | Requests for the source design to be asynchronously translated into the specified derivative formats. |
| **Specify References** | [POST /{urn}/references](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-references-POST) | Specifies the location of files referenced by the specified source design. |
| **Fetch Manifest** | [GET /{urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) | Returns the manifest for the specified source design, which contains information about the status of any ongoing translation jobs. |

## Manifest

| Operation | HTTP Request | Description |
| --- | --- | --- |
| **Fetch Manifest** | [GET /{urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) | Returns the manifest of the specified source design, which contains information about its derivatives, including output URNs and statuses of any ongoing translation jobs. |
| **Delete Manifest** | [DELETE /{urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-DELETE) | Deletes the manifest and all derivatives of the specified source design. |

## Derivatives

| Operation | HTTP Request | Description |
| --- | --- | --- |
| **Download Derivative** Deprecated | [GET /{urn}/manifest/{derivativeUrn}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-GET) | Downloads a derivative. |
| **Check Derivative Details** | [HEAD /{urn}/manifest/{derivativeUrn}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-HEAD) | Returns information about the specified derivative. |
| **Fetch Derivative Download URL** | [GET /{urn}/manifest/{derivativeUrn}/signedcookies](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeUrn-signedcookies-GET) | Returns a download URL and signed cookies to securely download a derivative. |

## Metadata

| Operation | HTTP Request | Description |
| --- | --- | --- |
| **List Model Views** | [GET /{urn}/metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) | Returns the model view IDs for a model. |
| **Fetch Object Tree** | [GET /{urn}/metadata/{modelGuid}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) | Returns the hierarchical object tree of a specified model view. |
| **Fetch All Properties** | [GET /{urn}/metadata/{modelGuid}/properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET) | Returns all properties of specified objects in a specified model view. |
| **Fetch Specific Properties** | [POST /{urn}/metadata/{modelGuid}/properties:query](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST/) | Returns specified properties of specified objects in a specified model view. |

## Thumbnails

| Operation | HTTP Request | Description |
| --- | --- | --- |
| **Fetch Thumbnail** | [GET /{urn}/thumbnail](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-thumbnail-GET) | Generates and returns a thumbnail of the specified design. |

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http
