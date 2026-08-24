---
title: "elementGroupAtTip"
url_path: reference/queries/elementgroupattip
surface: graphql
reference_kind: query
graphql_name: "elementGroupAtTip"
---
# elementGroupAtTip

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves latest elementGroup data based on given ID.

**Template for Query:**

```
query GetElementGroupAtTip($elementGroupId: ID!) {
  elementGroupAtTip(elementGroupId: $elementGroupId) {
    # ElementGroupAtTip Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupId" : "<SOME-ID-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| elementGroupId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID of the elementGroup. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementGroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | Represents a Revit model. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupattip
