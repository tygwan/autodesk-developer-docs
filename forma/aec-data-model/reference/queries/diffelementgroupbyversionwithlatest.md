---
title: "diffElementGroupByVersionWithLatest"
url_path: reference/queries/diffelementgroupbyversionwithlatest
surface: graphql
reference_kind: query
graphql_name: "diffElementGroupByVersionWithLatest"
---
# diffElementGroupByVersionWithLatest

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Returns a list of element differences and their difference type from target elementGroup. No support with extension element groups currently.

**Template for Query:**

```
query GetDiffElementGroupByVersionWithLatest($elementGroupId: ID!, $startVersion: Int, $versionFilter: VersionFilterInput, $changeFilter: [DifferenceType], $pagination: PaginationInput) {
  diffElementGroupByVersionWithLatest(elementGroupId: $elementGroupId, startVersion: $startVersion, versionFilter: $versionFilter, changeFilter: $changeFilter, pagination: $pagination) {
    # DiffElementGroupByVersionWithLatest Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "startVersion" : "<SOME-INT-TYPE-SCALAR-VALUE>",
  "versionFilter" : "<SOME-VERSIONFILTER-INPUT-TYPE-VALUE>",
  "changeFilter" : "<SOME-[DIFFERENCETYPE]-TYPE-SCALAR-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| elementGroupId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | ElementGroup to retrieve element differences of. |
| --- | --- |
| startVersion[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The version to get the element differences from against the latest. |
| versionFilter[VersionFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/versionfilterinput) | Optional. Specifies version resolution behavior (e.g. whether startVersion refers to a PUBLISHED or WIP version). Defaults to PUBLISHED if not provided. |
| changeFilter[[DifferenceType]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/differencetype) | The type of change to filter the element differences by. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementGroupDifference](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupdifference) | Contains a list of ElementDifferences returned in response to a query. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/diffelementgroupbyversionwithlatest
