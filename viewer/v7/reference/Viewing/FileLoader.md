---
title: "FileLoader"
url_path: reference/Viewing/FileLoader
surface: viewer-sdk
document_kind: reference
category: "Viewing"
---
# FileLoader

## new FileLoader(viewer)

Base class for file loaders.

It is highly recommended that file loaders use worker threads to perform the actual loading in order to keep the UI thread free. Once loading is complete, the loader should call viewer.impl.onLoadComplete(). During loading, the loader can use viewer.impl.signalProgress(int) to indicate how far along the process is.

To add geometry to the viewer, `viewer.impl.addMeshInstance(geometry, meshId, materialId, matrix)` should be used. Geometry must be THREE.BufferGeometry, meshId is a number, materialId is a string, and matrix is the THREE.Matrix4 transformation matrix to be applied to the geometry.

Remember to add draw calls to the BufferGeometry if the geometry has more than 65535 faces.

### Parameters

| viewer*[Autodesk.Viewing.Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | The viewer instance. |
| --- | --- |

# Methods

## loadFile(url, options, onSuccess, onError)

Initiates the loading of a file from the given URL.

This method must be overridden.

### Parameters

| url*string | The url for the file. |
| --- | --- |
| optionsobject | An optional dictionary of options. |
| idsstring | A list of object id to load. |
| sharedPropertyDbPathstring | Optional path to shared property database. |
| onSuccessfunction | Callback function when the file begins loading successfully. Takes no arguments. |
| onErrorfunction | Callback function when an error occurs. Passed an integer error code and a string description of the error. |

## is3d()

Returns true only for a 3D models FileLoader implementation.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/FileLoader
