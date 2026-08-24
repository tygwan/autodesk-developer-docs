---
title: "ProfileSettings"
url_path: reference/globals/TypeDefs/ProfileSettings
surface: viewer-sdk
document_kind: reference
category: "globals"
---
# ProfileSettings

Object used for setting a viewer profile.

# Properties

| namestring | Name of the profile settings. |
| --- | --- |
| labelstring | Optional. An end-user string to use instead of the name. |
| descriptionstring | Optional. A description about the profile. |
| settings[Settings](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/Settings/) | Used by the Profile to apply to the viewer preferences. |
| persistentArray.<String> | An array of setting ids to keep in localStorage. |
| sharedStorageArray.<String> | An array of setting ids that share the persisted values across profiles. |
| extensions[Extensions](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/Extensions/) | Extensions that should or should not be loaded. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/ProfileSettings
