---
title: "elementsByElementGroupParallelCursors"
url_path: reference/queries/elementsbyelementgroupparallelcursors
surface: graphql
reference_kind: query
graphql_name: "elementsByElementGroupParallelCursors"
---
# elementsByElementGroupParallelCursors

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Returns a list of cursors which can be used to get all elements of an ElementGroup rapidely in parallel.

**Template for Query:**

```
query GetElementsByElementGroupParallelCursors($elementGroupId: ID!, $amount: Int) {
  elementsByElementGroupParallelCursors(elementGroupId: $elementGroupId, amount: $amount) {
    # ElementsByElementGroupParallelCursors Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "amount" : "<SOME-INT-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| elementGroupId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | ElementGroup to generate cursors for. |
| --- | --- |
| amount[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) |   |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementCursors](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementcursors) | Contains a list of Cusors returned in response to a query. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementsbyelementgroupparallelcursors
