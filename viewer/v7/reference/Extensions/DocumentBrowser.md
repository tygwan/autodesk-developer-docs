---
title: "DocumentBrowser"
url_path: reference/Extensions/DocumentBrowser
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# DocumentBrowser

Adds a toolbar button that opens a Panel displaying all models and views available from the loaded Document. The panel allows navigating to any model referenced by the Document.

The extension id is: `Autodesk.DocumentBrowser`

## new DocumentBrowser()

### Examples

```
viewer.loadExtension('Autodesk.DocumentBrowser')
```

# Methods

## loadNextModel(viewerConfig, loadOptions)

Unloads the current model and then loads the next model in the Document. It may reload the same model if the Document contains only 1 model.

### Parameters

| viewerConfigobject |   |
| --- | --- |
| loadOptionsobject |   |

## loadPrevModel(viewerConfig, loadOptions)

Unloads the current model and then loads the previous model in the Document. It may reload the same model if the Document contains only 1 model.

### Parameters

| viewerConfigobject |   |
| --- | --- |
| loadOptionsobject |   |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/DocumentBrowser
