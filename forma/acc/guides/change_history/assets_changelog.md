---
title: "Assets Changelog"
url_path: change_history/assets_changelog
surface: guide
---
# Assets Changelog

## Release Date: 2025-02-03

The following Assets endpoints have been **removed** from Forma. They will continue to be available in BIM 360,
but they are not the recommended way to create relationships.
- Add Asset Relationships
- Add Category Relationships
- Delete Asset Relationships

Moving forward, the recommended way to create and delete relationships is to directly use the Relationships endpoints.
The reason for this change is that it will improve how permissions are verified when creating a relationship.

See the [Create Relationships](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/relationships/relationships-create/) tutorial for a step-by-step tutorial about how to create relationships.

The recommended endpoint to create relationships is [Create Relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-add-relationships-PUT/).
The recommended endpoint to delete relationships is [Delete Relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-delete-relationships-POST/).

## Release Date: 2024-12-19

The Assets API has been officially released and is no longer labeled as “beta”.

## Deprecated Relationships Endpoints: 2022-03-01

The following Assets endpoints have been **deprecated**. We plan to remove these APIs after 2022-06-01.
- Add Asset Relationships
- Add Category Relationships
- Delete Asset Relationships

Moving forward, the recommended way to create and delete relationships is to directly use the Relationships endpoints.
The reason for this change is that it will improve how permissions are verified when creating a relationship.

See the [Create Relationships](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/relationships/relationships-create/) tutorial for a step-by-step tutorial about how to create relationships.

The recommended endpoint to create relationships is [Create Relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-add-relationships-PUT/).
The recommended endpoint to delete relationships is [Delete Relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-delete-relationships-POST/).

## Release Date: 2022-04-01

### Updated
- Added a query string parameter to the category `v1` endpoints: `includeUid`. This allows clients to obtain the globally unique IDs (UUID format) for categories.

If specified as `true`, the `uid` field will be returned in `v1` category endpoints. This is in preparation for future category `v3`
endpoints that will be released publicly in the future, where `v3` categories will be identified by the UUID identifier by default.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/assets_changelog
