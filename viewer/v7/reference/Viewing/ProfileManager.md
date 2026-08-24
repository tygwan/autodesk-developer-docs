---
title: "ProfileManager"
url_path: reference/Viewing/ProfileManager
surface: viewer-sdk
document_kind: reference
category: "Viewing"
---
# ProfileManager

The ProfileManager provides a mechanism for registering [profile settings](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/ProfileSettings/) with a specific file type. Any of the registered profiles can be set by using [viewer.setProfile()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/#setProfile/).

## new ProfileManager()

### Examples

```
const profileManager = new Autodesk.Viewing.ProfileManager();
// or
// const profileManger = viewer.profileManager;
const profileSettings = {
   name: "DWF",
   settings: {
       swapBlackAndWhite: true
   },
   // ...
}
// Registers the specified profile settings for dwf models.
profileManager.registerProfile('dwf', profileSettings);
const profile = profileManager.getProfile('dwf'); // others: 'default', 'nwc', 'nwd', 'rvt', 'ifc'
viewer.setProfile(profile);
```

# Methods

## registerProfile(fileExt, profileSettings)

Registers a profile. The profile will be overridden if a profile was already registered with the ProfileManager.

### Parameters

| fileExt*String | file extension to register the profile settings with. |
| --- | --- |
| profileSettings*[ProfileSettings](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/ProfileSettings/), [Autodesk.Viewing.Profile](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Profile/) | profile settings object or profile instance to register |

## unregisterProfile(fileExt)

Unregister the profile associated with a file type

### Parameters

| fileExt*String | file type |
| --- | --- |

## getProfileOrDefault(fileExt)

Returns a profile that is registered with the specific file type. If the file type is not registered, then the default profile is returned.

### Parameters

| fileExt*String | file extension |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Autodesk.Viewing.Profile](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Profile/) | Profile associated with the file extension. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/ProfileManager
