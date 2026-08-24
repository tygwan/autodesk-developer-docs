---
title: "Takeoff V1 Changelog"
url_path: change_history/takeoff_v1_changelog
surface: guide
---
# Takeoff V1 Changelog

## Release Date: 2026-07-06

_Version 1.2.0_

### Deprecated

Classification management is moving to the [Classifications API](https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/classifications/), and the identifier used to reference 2D sheets is changing. Developers can reach out to the Takeoff team to migrate projects individually to the new classification and 2D sheet reference formats.

The `classificationCodeOne` and `classificationCodeTwo` fields will be deprecated for projects as they are migrated in the following endpoints:
- [GET takeoff-types](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-GET)
- [GET takeoff-type](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-takeoff_type_id-GET)
- [GET takeoff-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-GET)
- [GET takeoff-item](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-takeoff_item_id-GET)

For migrated projects, these fields return `null`. Read classification data from the new `classifications` arrays within `primaryQuantityDefinition` and each entry in `secondaryQuantityDefinitions` on Takeoff Types instead.

The Takeoff Classification Systems endpoints under `/classification-systems` will also be deprecated for projects as they are migrated. For migrated projects, these endpoints return `409 Conflict`. Use the [Classifications API](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications/) to manage classification data instead.

The deprecated Classification Systems endpoints and the `classificationCodeOne` and `classificationCodeTwo` fields will be removed in a future release.

### Added

New [assigned-structures](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-assigned-structures-GET/) endpoints will be available for migrated projects to manage which classification structures are assigned to a Takeoff project. A Takeoff project can have up to five assigned classification structures.

A `classifications` array will be added within `primaryQuantityDefinition` and within each entry in `secondaryQuantityDefinitions` on Takeoff Types. Each array can contain classification references consisting of a `structureId` and a `nodeId` from the Classifications API.

### Changed

For migrated projects, classification data is no longer returned on Takeoff Items. Use the item’s `takeoffTypeId` to retrieve the corresponding Takeoff Type and read its `classifications` arrays.

For 2D takeoff items in migrated projects, `contentView.version` returns a Data Management file version URN, for example `urn:adsk.wipprod:fs.file:vf.AbCdEf123...?version=2`, instead of a Sheets API UUID. The property name is unchanged; only the value format changes.

Update integrations to support both formats during the phased rollout:
- For a Data Management file version URN, use the [Data Management API](https://aps.autodesk.com/en/docs/data/v2/) to retrieve the file version details.
- For a legacy Sheets API UUID, continue to use the [Sheets API](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-sheets-GET/).

3D model references are unaffected.

See the [Takeoff Classification and Sheet Reference Migration Guide (2026 Release)](https://aps.autodesk.com/en/docs/acc/v1/overview/migration-guides/takeoff-classification-migration) for migration instructions and before-and-after examples.

## Release Date: 2026-06-01

_Version 1.1.3_

### Added

Support for rectangle-shaped count items has been added.

A rectangle (`RECTANGLE`) shape type has been added to `shapeType` in [GET takeoff-types](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-GET) and [GET takeoff-type](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-takeoff_type_id-GET).

Width (`countMarkerWidth`) and height (`countMarkerHeight`) fields have been added to takeoff type responses to define rectangle dimensions.

A rotation angle (`rotationAngle`) field has been added to count item responses. See [GET takeoff-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-GET) and [GET takeoff-item](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-takeoff_item_id-GET).

## Release Date: 2025-04-22

_Version 1.1.2_

### Deprecated

The `measurementType` field has been deprecated in the following endpoints:
- [POST classification-systems](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-POST/)
- [POST classifications:import](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-classificationsimport-POST/)
- [GET classification-systems](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-classifications-GET/)

This field is currently optional in the request payloads of the first and second endpoints, and is included in the response payload of the third.

It will be removed from the API on **September 15, 2025**.

## Release Date: 2024-02-06

_Version 1.1.1_

### Fixed
- `createdAt` now returns the correct value. This is relevant for [GET takeoff-types](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-GET) and [GET takeoff-type](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-takeoff_type_id-GET).
- You can now delete both types of classification systems. For more information, see [DELETE classification-system](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-DELETE).

## Release Date: 2022-02-03

_Version 1.1.0_

### Added
- The new location attribute (`locationId`) was added, which enables you to determine the location associated with a takeoff item. See [GET takeoff-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-GET) for more details.
- New endpoints which allow you to:   [UPDATE settings](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-settings-PATCH).
- [CREATE classification-system](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-POST), [UPDATE classification-system](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-classificationsimport-POST) and [DELETE classification-system](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-DELETE).
- [CREATE package](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-POST) and [UPDATE package](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-PATCH).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/takeoff_v1_changelog
