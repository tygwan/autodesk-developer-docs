---
title: "v5 Changelog"
url_path: change_history/changelog_v5
surface: viewer-sdk
document_kind: changelog
category: "changelog_v5"
---
# V5 Changelog

## Version 5.0.0

_Release Date: 2018-06-19_

### Changed
- Refactored to incorporate forked changes. Some breaking changes were introduced and identified (see below). If there are additional breaking changes we didn’t spot, please let us know!
- `three.min.js` and `three.js` are no longer required. These libraries are now bundled into `viewer3D.min.js` and `viewer3D.js` respectively.
- Improved display and sizing of Settings Panel
- Reflectivity is reduced at grazing angles in phong shader for some Protein materials.
- Can now zoom more than 100% in PNG/JPG image files
- default value is now false for `applyRefPoint` option
- Replaced `Autodesk.Viewing.theHotkeyManager` with `viewer.getHotkeyManager()`
- Replaced `HotkeyManager.KEYCODES` with `Autodesk.Viewing.KeyCode`
- IFC tranlsations are treated as AEC models

### Added
- Added monochrome mode for 2D models: `viewer.setGrayscale(true)`
- Added AEC Extension This submission is an initial file dump, and adaptation will be needed to SectionTool and BlendShader to make the extensions fully functional.
- It also shows how to build an LMV extension using modern JavaScript and package it with webpack.
- Adding various cross-fade logic used by view transitions
- Added option to disable node box caching
- Added preference value `wheelSetsPivot` along with `Navigation` methods
- Added edge color/opacity for ghosted shapes
- Add spatial filter support to RenderContext and blend_frag.glsl
- Localization strings for recently added IBLs and for Scalaris extension
- Expose `config3d.modelBrowserExcludeRoot` to configure whether the Model Browser will display the model’s root node or not (default is to not display it)
- Expose `config3d.modelBrowserStartCollapsed` to configure whether the Model Browser will have the topmost node collapsed or not (default is no, aka: expanded)
- Added version to Settings Panel, bottom right

### Fixed
- A360 Preview tab images are now loaded
- Pressing the ESC key in the LMV window no longer confuses which state the icons are in
- Choosing specific environments now forces “Environment Image Visible” to enabled or disabled
- After enabling the zoom tool holding the ALT key now enables the orbit tool as expected
- Property Panel now shows the root-node properties when nothing is selected.
- Search is no longer shown for PDF bubble
- Selected object is now highlighted properly
- 2D and 3D selection color settings are decoupled
- Fixed loading problem with models that use memory optimized mode
- Fixed loading problem with Animation extension
- Prevent renaming `window.name` to “user_info”
- Screen is no longer temporarily black at startup
- Fixed missing highlight

### Removed
- Removed Comments and Billboard extensions
- Removed code that was only used for debugging
- Removed in-viewer search extension
- Removed old First Person tool toggle.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/change_history/changelog_v5
