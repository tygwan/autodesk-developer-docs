---
title: "diffElementByVersionWithLatest"
url_path: reference/queries/diffelementbyversionwithlatest
surface: graphql
reference_kind: query
graphql_name: "diffElementByVersionWithLatest"
---
# diffElementByVersionWithLatest

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Returns the element difference from target element. No support with extension element groups currently.

**Template for Query:**

```
query GetDiffElementByVersionWithLatest($elementId: ID!, $versionFilter: VersionFilterInput, $startElementGroupVersion: Int) {
  diffElementByVersionWithLatest(elementId: $elementId, versionFilter: $versionFilter, startElementGroupVersion: $startElementGroupVersion) {
    # DiffElementByVersionWithLatest Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "versionFilter" : "<SOME-VERSIONFILTER-INPUT-TYPE-VALUE>",
  "startElementGroupVersion" : "<SOME-INT-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| elementId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | ElementId to retrieve element difference of. |
| --- | --- |
| versionFilter[VersionFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/versionfilterinput) | Optional. Specifies version resolution behavior (e.g. whether `startElementGroupVersion` refers to a PUBLISHED or WIP version). Defaults to PUBLISHED if not provided. |
| startElementGroupVersion[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | The version to get the element differences from against the latest. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementDifference](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementdifference) | Represents an Element Difference type |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/diffelementbyversionwithlatest
