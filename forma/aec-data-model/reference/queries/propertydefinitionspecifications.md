---
title: "propertyDefinitionSpecifications"
url_path: reference/queries/propertydefinitionspecifications
surface: graphql
reference_kind: query
graphql_name: "propertyDefinitionSpecifications"
---
# propertyDefinitionSpecifications

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves property definition specifications that can be used for creating property definitions.

**Template for Query:**

```
query GetPropertyDefinitionSpecifications($pagination: PaginationInput) {
  propertyDefinitionSpecifications(pagination: $pagination) {
    # PropertyDefinitionSpecifications Fields
  }
}
```

**Template for Query Variables:**

```
{
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) |   |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [PropertyDefinitionSpecifications](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/propertydefinitionspecifications) | Contains a list of Property definition specifications |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/propertydefinitionspecifications
