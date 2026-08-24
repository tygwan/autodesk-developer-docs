---
title: "Takeoff API Migration Guide (2026 Release)"
url_path: overview/migration-guides/takeoff-classification-migration
surface: guide
---
# Takeoff API Migration Guide (2026 Release)

This migration guide is for developers whose integrations call the Autodesk [Takeoff API](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff/). It describes two independent changes: how Takeoff exposes classification data and how it references 2D sheets. It also explains how developers need to update their integrations.

As the Preconstruction product evolves, Takeoff is moving classification management to the [Classifications API](https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/classifications/) and changing how 2D sheets are referenced. The Takeoff-specific Classification Systems endpoints and the `classificationCodeOne` and `classificationCodeTwo` fields are being deprecated. When you migrate a project, its existing Takeoff classification systems are migrated to the Classifications API.

Important

The legacy Takeoff Classification Systems endpoints and the `classificationCodeOne` and `classificationCodeTwo` fields are deprecated and will be removed later. After their removal, integrations that still call the deprecated endpoints or read these fields will fail.

## General Changes
- Classification management is moving from the Takeoff API to the [Classifications API](https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/classifications/).
- The `classificationCodeOne` and `classificationCodeTwo` fields on Takeoff Types and Takeoff Items are deprecated. New `classifications` arrays are available within `primaryQuantityDefinition` and each entry in `secondaryQuantityDefinitions` on Takeoff Types.
- Classification is no longer returned on Takeoff Items. Use the item’s `takeoffTypeId` to retrieve the classifications from its Takeoff Type.
- The Takeoff Classification Systems endpoints under `/classification-systems` are deprecated and return `409 Conflict` for projects that have migrated to the Classifications API.
- New [assigned-structures](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-assigned-structures-GET/) endpoints control which classification structures are assigned to a Takeoff project.
- For 2D takeoff items, the value of `contentView.version` is changing from a Sheets API UUID to a Data Management file version URN. This affects [GET takeoff-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-GET/) and [GET takeoff-item](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-takeoff_item_id-GET/). The field name is unchanged. 3D model references are unaffected.

## Per-Project, Phased Rollout

Projects must be migrated individually; you cannot migrate all projects at once. As a result, there might be a period during which some projects used by your integration have been migrated and others have not.

During this period, your integration might receive either the legacy or new response format, depending on the project. Support both formats until all projects used by your integration have been migrated.

## Change 1 — Classification Fields and Endpoints

### What Changes

When a project is migrated:
- `classificationCodeOne` and `classificationCodeTwo` on Takeoff Types and Takeoff Items return `null`.
- A new `classifications` array is added to `primaryQuantityDefinition` and each entry in `secondaryQuantityDefinitions` on Takeoff Types. Each array contains up to five classification references, each consisting of a `structureId` and `nodeId` from the Classifications API.
- Classification is no longer returned on Takeoff Items. Use the item’s `takeoffTypeId` to retrieve the corresponding Takeoff Type and read the `classifications` arrays in its primary and secondary quantity definitions.
- The deprecated Takeoff Classification Systems endpoints (`/classification-systems/`) return `409 Conflict` for migrated projects. Use the [Classifications API](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications/) to manage classifications for these projects.
- New assigned-structures endpoints manage which classification structures are assigned to a Takeoff project.

After the compatibility period ends, `classificationCodeOne` and `classificationCodeTwo` will be removed, and all projects must use the new classification format.

### Classification Data Before Migration

Before migration, classification codes are returned directly in each quantity definition on a Takeoff Type:

```
{
  "primaryQuantityDefinition": {
    "outputName": "Exterior Wall",
    "classificationCodeOne": "037000",
    "classificationCodeTwo": "044000",
    "expression": "Distance*Width*Height*1.1",
    "unitOfMeasure": "CY"
  }
}
```

### Classification Data After Migration

After a project is migrated, the classification-code fields return `null`. Classification references are returned in the `classifications` array within `primaryQuantityDefinition` and within each entry in `secondaryQuantityDefinitions` on the Takeoff Type:

```
{
  "primaryQuantityDefinition": {
    "outputName": "Exterior Wall",
    "classificationCodeOne": null,
    "classificationCodeTwo": null,
    "expression": "Distance*Width*Height*1.1",
    "unitOfMeasure": "CY",
    "classifications": [
      {
        "structureId": "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
        "nodeId": "2f7e534d-d084-594b-8aa6-147cb8fbc060"
      }
     ]
  }
}
```

Each entry identifies a classification tree through `structureId` and a node within that tree through `nodeId`. The Takeoff API `structureId` is the same identifier that the Classifications API uses as `treeId` in endpoint paths and returns as `id` in response payloads.

To retrieve the code and title for each classification reference, call the following endpoints in the Classifications API:
- [GET trees](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications-trees-GET/) — retrieves the classification trees available in the project. Use the tree whose `id` matches `structureId`.
- [GET trees/{treeId}/versions/tip/nodes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications-trees-treeId-versions-tip-nodes-GET/) — retrieves the nodes in the latest (tip) version of the tree. Use the node whose `id` matches `nodeId` to retrieve its code and title.

### Retrieving Classifications for a Takeoff Item

Because classification is no longer returned on Takeoff Items, use the item’s `takeoffTypeId` to retrieve the corresponding Takeoff Type and read the `classifications` arrays within `primaryQuantityDefinition` and `secondaryQuantityDefinitions`:
- Call [GET takeoff-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-GET/) and read the item’s `takeoffTypeId`.
- Call [GET takeoff-types/{takeoffTypeId}](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-takeoff_type_id-GET/). Alternatively, call [GET takeoff-types](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-GET/) and find the Takeoff Type whose `id` matches `takeoffTypeId`.
- Read the `classifications` array within `primaryQuantityDefinition` and within each entry in `secondaryQuantityDefinitions`.
- Retrieve the code and title for each `structureId` and `nodeId` pair through the Classifications API, as described above.

### Classification Systems Endpoints

The legacy Takeoff Classification Systems endpoints under `/construction/takeoff/v1/projects/{projectId}/classification-systems` are deprecated:
- For projects that have not yet been migrated, the endpoints continue to work until migration.
- For migrated projects, the endpoints return `409 Conflict`. Read classification from the `classifications` arrays within `primaryQuantityDefinition` and `secondaryQuantityDefinitions` on Takeoff Types. Use the [Classifications API](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications/) to manage classifications and the assigned-structures endpoints to manage which structures are assigned to the project.

A `409 Conflict` response indicates that the project has been migrated. Update your integration to use the new classification format.

## Change 2 — Sheet Identifier Deprecation (2D Takeoffs)

### What Changes

The Sheet Identifier (Sheets UUID) in `contentView.version` on 2D takeoff items is being deprecated. After a project is migrated, `contentView.version` contains a Data Management file version URN instead of a Sheets API UUID.
- The `contentView.version` property name does not change; only the value format changes.
- Only 2D sheet references are affected. 3D model references are unaffected.
- The new value format applies when the project is migrated.

### Before Migration (Sheets UUID)

```
{
  "contentView": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version": "95451383-ee38-44da-b06c-2d5266e726d2"
  }
}
```

### After Migration (Data Management URN)

```
{
  "contentView": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version": "urn:adsk.wipprod:fs.file:vf.AbCdEf123...?version=2"
  }
}
```

If your integration uses `contentView.version` to retrieve details for a 2D sheet, update it to support both identifier formats:
- If the value begins with `urn:adsk`, it is a Data Management file version URN. Use the [Data Management API](https://aps.autodesk.com/en/docs/data/v2/) to retrieve the file version details.
- If the value is a UUID, it is a legacy Sheets identifier. Use the [Sheets API](https://aps.autodesk.com/en/docs/acc/v1/reference/http/sheets-sheets-GET/) to retrieve the sheet details.

## Summary of Required Changes

| If you use… | Action required |
| --- | --- |
| `classificationCodeOne` or `classificationCodeTwo` | Update your integration to read the `classifications` arrays within `primaryQuantityDefinition` and `secondaryQuantityDefinitions` on Takeoff Types. |
| Takeoff Classification Systems endpoints | Update your integration to use the Classifications API to manage classifications and the assigned-structures endpoints to manage which structures are assigned to the project. A `409 Conflict` response indicates that the project has been migrated. |
| `contentView.version` on 2D takeoff items | Update your integration to detect whether the value is a Sheets UUID or a Data Management file version URN, and use the appropriate API to retrieve the details. |
| Other Takeoff API functionality | No integration changes are required. |

## Actions to Take
- Review this guide and the [Classifications API](https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/classifications/) reference.
- Request a test project to validate your integration against the new response formats before production migration. Reach out to your customer success manager or takeoff.migration.support@autodesk.com.
- Update your integration to handle both the legacy and new formats during the phased rollout. Continue to support the legacy classification fields and Sheets UUIDs until all projects have been migrated.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/migration-guides/takeoff-classification-migration
