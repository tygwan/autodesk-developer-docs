---
title: "elementGroupByVersionNumber"
url_path: reference/queries/elementgroupbyversionnumber
surface: graphql
reference_kind: query
graphql_name: "elementGroupByVersionNumber"
---
# elementGroupByVersionNumber

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves elementGroup by version number and ID.

**Template for Query:**

```
query GetElementGroupByVersionNumber($elementGroupId: ID!, $versionNumber: Int!, $versionFilter: VersionFilterInput) {
  elementGroupByVersionNumber(elementGroupId: $elementGroupId, versionNumber: $versionNumber, versionFilter: $versionFilter) {
    # ElementGroupByVersionNumber Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "versionNumber" : "<SOME-INT-TYPE-SCALAR-VALUE>",
  "versionFilter" : "<SOME-VERSIONFILTER-INPUT-TYPE-VALUE>"
}
```

## Arguments

| elementGroupId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID of the elementGroup. |
| --- | --- |
| versionNumber*[Int!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Version number to be retrieved. |
| versionFilter[VersionFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/versionfilterinput) | Optional. Specifies version resolution behavior (e.g. whether the versionNumber refers to a PUBLISHED or WIP version). Defaults to PUBLISHED if not provided. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | Represents a Revit model. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupbyversionnumber
