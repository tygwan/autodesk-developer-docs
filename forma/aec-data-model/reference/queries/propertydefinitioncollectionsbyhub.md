---
title: "propertyDefinitionCollectionsByHub"
url_path: reference/queries/propertydefinitioncollectionsbyhub
surface: graphql
reference_kind: query
graphql_name: "propertyDefinitionCollectionsByHub"
---
# propertyDefinitionCollectionsByHub

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves property definition collections from given hub.

**Template for Query:**

```
query GetPropertyDefinitionCollectionsByHub($hubId: ID!, $pagination: PaginationInput) {
  propertyDefinitionCollectionsByHub(hubId: $hubId, pagination: $pagination) {
    # PropertyDefinitionCollectionsByHub Fields
  }
}
```

**Template for Query Variables:**

```
{
  "hubId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| hubId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Hub to retrieve property definition collections from. |
| --- | --- |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [PropertyDefinitionCollections](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitioncollections) | Contains a list of Property Definition Collections returned in response to a query. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/propertydefinitioncollectionsbyhub
