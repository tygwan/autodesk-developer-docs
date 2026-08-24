---
title: "Profile"
url_path: reference/Viewing/Profile
surface: viewer-sdk
document_kind: reference
category: "Viewing"
---
# Profile

## new Profile(profileSettings)

Profiles encapsulate viewer settings, extensions to unload, and extensions to load.

The `profileSettings.settings` parameter will override the existing [preferences](https://aps.autodesk.com/en/docs/viewer/v7/reference/Private/Preferences/) upon calling the [apply](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Profile/#apply/) method. The `profileSettings.extensions.load` and `profileSettings.extensions.unload` arrays are used to load and unload extensions. Make sure to set the profile by using the [Autodesk.Viewing.Viewer3D#setProfile](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/#setProfile/) method.

### Parameters

| profileSettings*[ProfileSettings](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/ProfileSettings/) | the profile settings. |
| --- | --- |

### Examples

```
const profileSettings = {
 name: "mySettings",
 description: "My personal settings.",
 settings: {
     ambientShadows: false,
     groundShadows: true
 }
 persistent: ['ambientShadows'],
 extensions: {
     load: ["Autodesk.BimWalk"],   // Extensions to load
     unload: ["Autodesk.ViewCubeUi"]  // Extensions to unload and to not load
 }
```

};
const profile = new Autodesk.Viewing.Profile(profileSettings);

# Methods

## apply(prefs, override)

Applies the profile’s settings to the viewer preferences. To make the viewer react to the updated preferences please reference [Autodesk.Viewing.Viewer3D#setProfile](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/#setProfile/).

### Parameters

| prefs*[Autodesk.Viewing.Private.Preferences](https://aps.autodesk.com/en/docs/viewer/v7/reference/Private/Preferences/) | preferences instance. |
| --- | --- |
| overrideboolean | Override all existing preferences with the profile’s preferences. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Profile
