---
title: "propertyDefinitionCollection"
url_path: reference/queries/propertydefinitioncollection
surface: graphql
reference_kind: query
graphql_name: "propertyDefinitionCollection"
---
# propertyDefinitionCollection

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves property definition collection using given ID.

**Template for Query:**

```
query GetPropertyDefinitionCollection($propertyDefinitionCollectionId: ID!) {
  propertyDefinitionCollection(propertyDefinitionCollectionId: $propertyDefinitionCollectionId) {
    # PropertyDefinitionCollection Fields
  }
}
```

**Template for Query Variables:**

```
{
  "propertyDefinitionCollectionId" : "<SOME-ID-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| propertyDefinitionCollectionId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Property definition collection to retrieve. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [PropertyDefinitionCollection](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitioncollection) | Data object that represents property definition collection. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/propertydefinitioncollection
