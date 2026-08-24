---
title: "Translate Models"
url_path: developers_guide/basics/translation
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "basics"
---
# Translate Models

The Model Derivative API lets you translate a model into several types of output file formats simultaneously. Regardless of how many derivatives are requested, or how many times the Create Translation Job operation is invoked, the Model Derivative service stores data about all the derivatives for that source model in the same manifest. Since data about each model’s derivatives are stored in one manifest, you can locate information about any translation by parsing the manifest.

See the tutorial on [Translate a Source File](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/translate-to-obj/) to get to know the workflow to translate models from one file format to another.

See [Supported Translations](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/supported-translations/) to explore the formats you can translate from and translate to.

## Translation job status

To translate a model you must use [POST job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST). A response of `success` means that the request is submitted correctly. After that the Model Derivative service initiates a translation job that runs in the background. This means that there is no need to halt the execution of your program while translation happens in the background. However, you either need to periodically check if the translation job is completed, or set up a webhook, which issues a callback once translation is done.

You can check the status of a translation job by inspecting the manifest. You must use [GET {urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) to retrieve a manifest.

### Example of a manifest where the translation job is still in-progress:

```
  {
      "urn": "URL_SAFE_URN_OF_SOURCE_FILE",
      "derivatives": [
          {
              "hasThumbnail": "false",
              "children": [
                  {
                      "guid": "838255a4-5400-4083-a6c2-717eab0d3a85",
                      "mime": "application/octet-stream",
                      "role": "OBJ",
                      "status": "success",
                      "type": "resource",
                      "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bWRfdHV0ZV8wMS9ib3guaXB0/output/07b439b6-6fcc-4c79-afed-1faf802a0c61/box.obj"
                  }
              ],
              "name": "box.ipt",
              "progress": "50% complete",
              "outputType": "obj",
              "status": "inprogress"
          }
      ],
      "hasThumbnail": "false",
      "progress": "50% complete",
      "type": "manifest",
      "region": "US",
      "version": "1.0",
      "status": "inprogress"
  }
```

### Example of a manifest where the translation job is complete:

```
{
    "urn": "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bWRfdHV0ZV8wMS9ib3guaXB0",
    "derivatives": [
        {
            "hasThumbnail": "false",
            "children": [
                {
                    "guid": "838255a4-5400-4083-a6c2-717eab0d3a85",
                    "mime": "application/octet-stream",
                    "role": "OBJ",
                    "status": "success",
                    "type": "resource",
                    "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bWRfdHV0ZV8wMS9ib3guaXB0/output/07b439b6-6fcc-4c79-afed-1faf802a0c61/box.obj"
                },
                {
                    "guid": "3761150b-7b92-4dd0-a435-429ca696c893",
                    "mime": "application/octet-stream",
                    "role": "OBJ",
                    "status": "success",
                    "type": "resource",
                    "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bWRfdHV0ZV8wMS9ib3guaXB0/output/07b439b6-6fcc-4c79-afed-1faf802a0c61/box.mtl"
                }
            ],
            "name": "box.ipt",
            "progress": "complete",
            "outputType": "obj",
            "status": "success"
        }
    ],
    "hasThumbnail": "false",
    "progress": "complete",
    "type": "manifest",
    "region": "US",
    "urn": "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bWRfdHV0ZV8wMS9ib3guaXB0",
    "version": "1.0",
    "status": "success"
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/basics/translation
