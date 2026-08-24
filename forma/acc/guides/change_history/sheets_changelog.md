---
title: "Sheets V1 Changelog"
url_path: change_history/sheets_changelog
surface: guide
---
# Sheets Changelog

## Release Date: 2026-04-23

_Version 1.3.0_

### Updated
- Support for exporting asset markups (`assetMarkups`) with [POST exports](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-exports-POST/).

## Release Date: 2024-11-21

### Added
- New endpoints:   Retrieve information about all the collections in a project - [GET collections](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-collections-GET/).
- Retrieve information about a single collection - [GET collections/:id](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-collections-collectionId-GET/).
- A new filter (`collectionId`) to retrieve sheets associated with specific collections, available for:   GET sheets
- GET version sets
- Collection data in response payloads for:   POST version-sets
- PATCH version-sets/:versionSetId
- POST sheets:batch-get
- POST version-sets:batch-get
- POST sheets:batch-get

## Release Date: 2024-07-23

_Version 1.1.0_

### Added
- New endpoints which allow you to:   [Export sheets](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-exports-POST/).
- [Get export sheets result](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-exports-exportId-GET/).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/sheets_changelog
