---
title: "elementsByElementGroupAtVersion"
url_path: reference/queries/elementsbyelementgroupatversion
surface: graphql
reference_kind: query
graphql_name: "elementsByElementGroupAtVersion"
---
# elementsByElementGroupAtVersion

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves elements from given elementGroup at given elementGroup version, using additional RSQL filters if provided.

**Template for Query:**

```
query GetElementsByElementGroupAtVersion($elementGroupId: ID!, $versionNumber: Int!, $versionFilter: VersionFilterInput, $filter: ElementFilterInput, $pagination: PaginationInput) {
  elementsByElementGroupAtVersion(elementGroupId: $elementGroupId, versionNumber: $versionNumber, versionFilter: $versionFilter, filter: $filter, pagination: $pagination) {
    # ElementsByElementGroupAtVersion Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "versionNumber" : "<SOME-INT-TYPE-SCALAR-VALUE>",
  "versionFilter" : "<SOME-VERSIONFILTER-INPUT-TYPE-VALUE>",
  "filter" : "<SOME-ELEMENTFILTER-INPUT-TYPE-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| elementGroupId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | ElementGroup to retrieve elements from. |
| --- | --- |
| versionNumber*[Int!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | ElementGroup version to retrieve elements from. |
| versionFilter[VersionFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/versionfilterinput) | Optional. Specifies version resolution behavior (e.g. whether `versionNumber` refers to a PUBLISHED or WIP version). Defaults to PUBLISHED if not provided. |
| filter[ElementFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput) | RSQL filter to use for searching elements. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Elements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) | Contains a list of Elements returned in response to a query. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroupatversion
