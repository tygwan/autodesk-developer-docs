---
title: "ProfileSettings"
url_path: reference/ProfileSettings
surface: viewer-sdk
document_kind: reference
category: "ProfileSettings"
---
# ProfileSettings

ProfileSettings are used to set the viewer’s profile.

To generate a profile from the supplied profile settings, please reference [Autodesk.Viewing.Profile](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Profile/). To set the viewer’s profile, use [viewer.setProfile(profile)](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/#setProfile/).

# Properties

| clonefunction | This function is used to clone an existing ProfileSetting. |
| --- | --- |

# Constants

## Default

Default profile settings. It uses the preferences described in [Autodesk.Viewing.DefaultSettings](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing#DefaultSettings/). The following preferences will be persisted: alwaysUsePivot, zoomTowardsPivot, reverseHorizontalLookDirection, reverseVerticalLookDirection, orbitPastWorldPoles, clickToSetCOI, ghosting, optimizeNavigation, ambientShadows, antialiasing, groundShadows, groundReflections, bimWalkToolPopup, swapBlackAndWhite, openPropertiesOnSelect, reverseMouseZoomDir, leftHandedMouseSetup, wheelSetsPivot

| type |
| --- |
| [ProfileSettings](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/ProfileSettings/) |

## AEC

AEC profile settings. It inherits the settings from [Autodesk.Viewing.ProfileSettings.Default](https://aps.autodesk.com/en/docs/viewer/v7/reference/ProfileSettings#Default/). The following preferences differ from the Default settings: { edgeRendering: true, // on desktop, false on mobile. lightPreset: ‘Boardwalk’, envMapBackground: true }

| type |
| --- |
| [ProfileSettings](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/ProfileSettings/) |

## Fluent

Design Collaboration profile settings. Inherits the settings from [Autodesk.Viewing.ProfileSettings.AEC](https://aps.autodesk.com/en/docs/viewer/v7/reference/ProfileSettings#AEC/). The following preferences differ from the AEC settings: { reverseMouseZoomDir: true, wheelSetsPivot: true, alwaysUsePivot: true, enableCustomOrbitToolCursor: false }

| type |
| --- |
| [ProfileSettings](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/ProfileSettings/) |

## Navis

Navisworks profile settings. Inherits the settings from [Autodesk.Viewing.ProfileSettings.AEC](https://aps.autodesk.com/en/docs/viewer/v7/reference/ProfileSettings#AEC/). The following preferences differ from the AEC settings: { bimWalkToolPopup: false, bimWalkNavigatorType: ‘aec’, defaultNavigationTool3D: ‘extractor_defined’ }

| type |
| --- |
| [ProfileSettings](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/ProfileSettings/) |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/ProfileSettings
