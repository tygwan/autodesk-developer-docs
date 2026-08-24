---
title: "associatedElementsByElements"
url_path: reference/queries/associatedelementsbyelements
surface: graphql
reference_kind: query
graphql_name: "associatedElementsByElements"
---
# associatedElementsByElements

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Returns a list of associated elements from target element Ids.

**Template for Query:**

```
query GetAssociatedElementsByElements($elementIds: [ID!]!, $pagination: PaginationInput) {
  associatedElementsByElements(elementIds: $elementIds, pagination: $pagination) {
    # AssociatedElementsByElements Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementIds" : "<SOME-[ID!]-TYPE-SCALAR-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| elementIds*[[ID!]!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/associatedelementsbyelements/undefined/id!) `non-null` | target element ids for which to get the extension elements from. |
| --- | --- |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Elements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elements) | Contains a list of Elements returned in response to a query. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/associatedelementsbyelements
