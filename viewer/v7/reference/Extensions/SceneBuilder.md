---
title: "SceneBuilder"
url_path: reference/Extensions/SceneBuilder
surface: viewer-sdk
document_kind: reference
category: "Extensions"
---
# SceneBuilder

**Deprecated: This extension is deprecated and will be removed in a future release. Use Scene API instead.**

Scene Builder extension provides an API for building scenes without loading them from a URL.

The extension id is: `Autodesk.Viewing.SceneBuilder`

## new SceneBuilder(viewer, options)

### Parameters

| viewer*[Autodesk.Viewing.Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | The viewer instance loading the extension |
| --- | --- |
| optionsobject | Default options used when calling addNewModel |
| conserveMemoryboolean | Set to true to turn on memory conservation mode. In this mode [addMesh()]`Autodesk.Viewing.Extensions.SceneBuilder#addMesh <#fixMe/>`_ is not available because a single mesh is shared among all of the fragments in the model. |

### Examples

```
viewer.loadExtension('Autodesk.Viewing.SceneBuilder');
```

# Methods

## load()

Extension interface method - loads the extension

### Returns

| type | description |
| --- | --- |
| boolean |   |

## unload()

Extension interface method - unloads the extension Method [Autodesk.Viewing.Extensions.SceneBuilder#addNewModel](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/SceneBuilder/#addNewModel/) will fail if the extension is unloaded.

## addNewModel(options)

Add a new empty model into the scene. The model can be manipulated only by its associated ModelBuilder instance.

### Parameters

| optionsobject | Options combined with the options used when the extension is loaded with loadExtension(). The combined options are put in the loadOptions property in the object returned by model.getData(). |
| --- | --- |
| conserveMemoryboolean | Set to true to turn on memory conservation mode. In this mode [addMesh()]`Autodesk.Viewing.Extensions.SceneBuilder#addMesh <#fixMe/>`_ is not available because a single mesh is shared among all of the fragments in the model. |
| createWireframeboolean | Set to true to turn on edge generation for geometry. |

### Returns

| type | description |
| --- | --- |
| [Promise (ModelBuilder)](https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/ModelBuilder/) | A Promise that resolves with a ModelBuilder instance for the new model. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Extensions/SceneBuilder
