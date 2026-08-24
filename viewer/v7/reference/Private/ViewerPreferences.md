---
title: "ViewerPreferences"
url_path: reference/Private/ViewerPreferences
surface: viewer-sdk
document_kind: reference
category: "Private"
---
# ViewerPreferences

Viewer preferences.

extends Autodesk.Viewing.Private.Preferences

## new ViewerPreferences(viewer, options)

### Parameters

| viewer*[Autodesk.Viewing.Viewer3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/) | Viewer instance. |
| --- | --- |
| options*object | Contains configuration parameters used to do initializations. |
| localStorageboolean | Whether values get stored and loaded back from localStorage. Defaults to `true`. |
| prefixstring | A string to prefix preference names in web storage. Defaults to `'Autodesk.Viewing.ViewerPreferences.'`. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Private/ViewerPreferences
