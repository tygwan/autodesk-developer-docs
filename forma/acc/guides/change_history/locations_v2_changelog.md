---
title: "Locations V2 Changelog"
url_path: change_history/locations_v2_changelog
surface: guide
---
# Locations V2 Changelog

## Release Date: 2022-08-09

_Version 2.0.0_

### Added

The Locations API has three new endpoints:
- [POST nodes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodes-POST/) creates a new node in a specified locations tree.
- [DELETE nodes/:nodeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodesnodeid-DELETE/) deletes a specified node from a specified locations tree.
- [PATCH nodes/:nodeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodesnodeid-PATCH/) updates a specified node in a specified locations tree.

### Updated

With the [GET nodes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodes-GET/) endpoint, the `areaDefined` field is no longer returned in the response.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/locations_v2_changelog
