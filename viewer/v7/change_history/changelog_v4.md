---
title: "v4 Changelog"
url_path: change_history/changelog_v4
surface: viewer-sdk
document_kind: changelog
category: "changelog_v4"
---
# V4 Changelog

## Version 4.2.7

_Release Date: 2018-06-22_

### Fixed
- Avoid crashing when attempting to use an undefined material id.

## Version 4.2.6

_Release Date: 2018-05-29_

### Fixed
- Translation update from localization build.

## Version 4.2.5

_Release Date: 2018-05-09_

### Fixed
- Fixed Scalaris Extension localization strings.

## Version 4.2.4

_Release Date: 2018-05-07_

### Fixed
- Fixed problem with Animation activate() and deactivate().

## Version 4.2.2

_Release Date: 2018-04-19_

### Fixed
- Fixed problem with Fit-to-View in 2D models on iOS devices.

## Version 4.2.1

_Release Date: 2018-04-17_

### Added

#### MoldFlow Extension

This release adds an extension to LMV that enables a legend for MoldFlow files.

![MoldFlow Extension](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/moldflow-legend.png)

## Version 4.1.0

_Release Date: 2018-04-02_

### Added

#### Glazing Materials

Glazing materials are now supported.

### Fixed
- Fixed problem with initialization of viewer with multi-model.
- Fixed size of first person panel in Spanish language.
- Hidden properties are now skipped when evaluating instance_of relationships.
- Viewer no longer fails with jQuery slim.
- Default text is now provided for null selection in model properties.
- cloneMaterial() now copies disableEnvMap property.
- Model browser no longer switches node positions

### Changed

#### Settings UX Redesign

The viewer Settings dialog has been redesigned for improved ease of use.

Settings are now presented in a modal dialog featuring better functional grouping of settings and detailed new descriptions of each viewer option. The dialog for 3D models comprises four tabs–Performance, Navigation, Appearance, and Environment. For 2D sheets there are three tabs–Performance, Navigation, and Appearance.

_(Table 1) 3D Settings Panel_

| Existing 3D Settings (4.0.1 and earlier) | New 3D Settings (4.1) |
| --- | --- |
| ![Existing 3d Settings](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/settings_3d_existing.gif) | ![New 3d Tabs](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/settings_3d_tabs.gif) |

_(Table 2) 2D Settings Panel_

| Existing 2D Settings (4.0.1 and earlier) | New 2D Settings (4.1) |
| --- | --- |
| ![Existing 3d Settings](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/settings_2d_existing.gif) | ![New 2d Tabs](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/settings_2d_tabs.gif) |

### Known Issues
- On IOS, Fit to view fails for 2D models (Issue LMV-3154)
- WebVR extension fails in 4.0.x and 4.1.0 (issue LMV-3203)

## Version 4.0.1

_Release Date: 2018-02-21_

### Fixed
- Fixed “ReferenceError WGS is not defined.” The WGS global variable that was used by LMV was not defined. The fix was to change the output format of the Rollup build of WGS from UMD to IIFE.

## Version 4.0.0

_Release Date: 2018-01-25_

### Changed

#### UI Themes

**ALERT!** Changes to UI themes in version 4.0 may break applications developed using 3.3.5 and earlier.
Light and Dark UI themes are now available.

| Existing UI theme (3.3.5 and earlier) | string = “dark-theme” | string = “light-theme” |
| --- | --- | --- |
| ![Existing UI](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/themes_existing_none.JPG) | ![4.0 Dark Theme](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/themes_4.0_default_dark.JPG) | ![4.0 Light Theme](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/themes_4.0_light-theme.JPG) |

#### API Reference

**Viewer configuration option**

**Set theme method**

#### Enhanced Search Results

Search now yields results in a more intuitive results summary.

| Existing search (3.3.5 and earlier) | Improved version 4.0 behavior |
| --- | --- |
| ![Existing Search](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/search_existing.gif) | ![Improved 4.0 Search](https://developer.doc.autodesk.com/bPlouYTd/A360-firefly.js-docs-master-764104/_images/search_4.0.gif) |

#### Toolbar API

ADDED new toolbar API.

Each tool in the toolbar should be considered an extension. Likewise, each extension may be queried and activated in the toolbar as described below.

#### API Reference

```
activateExtension(extensionID, mode);  // Activates the extension based on the extensionID and mode given.
                                       // By default uses the first available mode in getExtensionModes()

deactivateExtension(extensionID);      // Deactivates the extension based on the extensionID specified.

IsExtensionActive(extensionID);        // Check if the extension is active or not by passing the extensionID.

IsExtensionLoaded(extensionID);        // Check if the extension is loaded or not by passing the extensionID.

getLoadedExtensions();                 // Get a list of all the extensions that are currently loaded.

getExtensionModes(extensionID);        // Get a list of all the modes that are available for the given extensionID.
                                       // For example, "Autodesk.Measure" has modes: "distance", "area", "angle", "calibrate"
```

#### Optimized Prism materials performance

We no longer copy data structures such as matrices, vectors, and colors every frame for every PRISM material.

### Added

#### Autodesk Forge Viewer Usage Limitations Disclaimer

The Autodesk Forge viewer can only be used to view files generated by Autodesk Forge services. The Autodesk Forge Viewer JavaScript must be delivered from an Autodesk hosted URL.

#### Multi-model support

UI behavior has been updated to allow multiple models. In addition, model names may now be overridden in the Model Browser.

#### FragmentList visibility flags

Initial visibility flags for fragments are now supported.

#### Measure, Markup and Hyperlinks

Measure, Markup and Hyperlinks are now external extensions

#### Material Tiling Patterns

Protein Materials tiling patterns (Revit 2019) are now supported.

#### Swedish language localization

Localized Swedish language “sv” is now supported.

### Fixed
- Fixed minor problem with selection of dimension markup.
- Fixed problem with Fit to View not working for all models.
- Fixed selection highlight issue when using non-photoreal rendering styles.
- Viewer no longer refreshes needlessly in specific cases.
- Textures now work in Prism materials coming from Revit.
- Loading of large raster images has been optimized.
- Isolation is no longer cleared when measuring.
- Pivot point can now be predictably changed in orthographic projection.
- Zoom Window no longer leaves artifacts over selected objects.

### Known Issues
- Localization is incomplete in the Settings panel, where titles “Navigation” and “Performance” remain printed in English.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/change_history/changelog_v4
