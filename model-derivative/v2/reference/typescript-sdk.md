---
title: "TypeScript SDK Reference"
url_path: reference/typescript-sdk
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# TypeScript SDK Reference

## Resource Information

| **Package Name:** | @aps_sdk/model-derivative |
| --- | --- |
| **Version:** | 1.0.0 |

## Installing this Library

```
npm i @aps_sdk/model-derivative
```

## Learning Resources

### Source Code

The source code for this library is available at [https://github.com/autodesk-platform-services/aps-sdk-node](https://github.com/autodesk-platform-services/aps-sdk-node).

### Tutorials

The Simple Viewer tutorial on the [https://tutorials.autodesk.io/](https://tutorials.autodesk.io/tutorials/simple-viewer/) site illustrates how to use this library to prepare a model for display in a browser.

### Code Sample

```
import { ModelDerivativeClient, JobPayload, OutputType, View } from "@aps_sdk/model-derivative";

// Access token for authentication
const ACCESS_TOKEN = "...";
// Unique Resource Name (URN) for the model to be translated
const MODEL_URN = "...";

// Initialize the Model Derivative Client
const modelDerivativeClient = new ModelDerivativeClient();

// Define the job payload with input URN and output formats
const payload: JobPayload = {
    input: {
        urn: MODEL_URN, // URN of the model to be translated
        compressedUrn: false // Indicates that the model is not compressed
    },
    output: {
        formats: [{
            type: OutputType.Svf2, // Output format set to SVF2
            views: [View._2d, View._3d] // Include both 2D and 3D views in the output
        }, {
            type: OutputType.Thumbnail // Output format set to Thumbnail
        }],
    }
};

// Start the translation job with the specified payload and access token
const job = await modelDerivativeClient.startJob(payload, { accessToken: ACCESS_TOKEN });

// Log the job result to the console
console.log(job);
```

See [https://github.com/autodesk-platform-services/aps-sdk-node/blob/main/samples/modelderivative.ts](https://github.com/autodesk-platform-services/aps-sdk-node/blob/main/samples/modelderivative.ts) for a complete code sample.

## SDK to REST API Cross Reference

| Operation Category | Operation | Method | HTTP Request |
| --- | --- | --- | --- |
| Derivatives | Fetch Derivative Download URL | [getDerivativeUrl](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#getderivativeurl) | [GET /{urn}/manifest/{derivativeUrn}/signedcookies](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeUrn-signedcookies-GET/) |
| Check Derivative Details | [headCheckDerivative](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#headcheckderivative) | [HEAD /{urn}/manifest/{derivativeUrn}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-HEAD/) |   |
| Informational | List Supported Formats | [getFormats](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#getformats) | [GET /formats](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET/) |
| Jobs | Create Translation Job | [startJob](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#startjob) | [POST /job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/job-POST/) |
| Specify References | [specifyReferences](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#specifyreferences) | [POST /{urn}/references](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/urn-references-POST/) |   |
| Manifest | Fetch Manifest | [getManifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#getmanifest) | [GET /{urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/) |
| Delete Manifest | [deleteManifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#deletemanifest) | [DELETE /{urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-DELETE/) |   |
| Metadata | List Model Views | [getModelViews](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#getmodelviews) | [GET /{urn}/metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/) |
| Fetch Object Tree | [getObjectTree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#getobjecttree) | [GET /{urn}/metadata/{modelGuid}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-GET/) |   |
| Fetch All Properties | [getAllProperties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#getallproperties) | [GET /{urn}/metadata/{modelGuid}/properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/) |   |
| Fetch Specific Properties | [fetchSpecificProperties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#fetchspecificproperties) | [POST /{urn}/metadata/{modelGuid}/properties:query](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST/) |   |
| Thumbnails | Fetch Thumbnail | [getThumbnail](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient#getthumbnail) | [GET /{urn}/thumbnail](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/thumbnails/urn-thumbnail-GET/) |

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk
