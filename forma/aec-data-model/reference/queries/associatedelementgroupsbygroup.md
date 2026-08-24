---
title: "associatedElementGroupsByGroup"
url_path: reference/queries/associatedelementgroupsbygroup
surface: graphql
reference_kind: query
graphql_name: "associatedElementGroupsByGroup"
---
# associatedElementGroupsByGroup

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Returns the associated element group

**Template for Query:**

```
query GetAssociatedElementGroupsByGroup($elementGroupIds: [ID!]!, $pagination: PaginationInput) {
  associatedElementGroupsByGroup(elementGroupIds: $elementGroupIds, pagination: $pagination) {
    # AssociatedElementGroupsByGroup Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupIds" : "<SOME-[ID!]-TYPE-SCALAR-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| elementGroupIds*[[ID!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/associatedelementgroupsbygroup/undefined/id!) `non-null` | target ElementGroup that we want the associated elementGroups of. |
| --- | --- |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementGroups](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroups) | Contains a list of ElementGroups returned in response to a query. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/associatedelementgroupsbygroup
