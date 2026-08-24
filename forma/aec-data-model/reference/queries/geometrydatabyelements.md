---
title: "geometryDataByElements"
url_path: reference/queries/geometrydatabyelements
surface: graphql
reference_kind: query
graphql_name: "geometryDataByElements"
---
# geometryDataByElements

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves geometry data for given elements.

**Template for Query:**

```
query GetGeometryDataByElements($elementIds: [ID!]) {
  geometryDataByElements(elementIds: $elementIds) {
    # GeometryDataByElements Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementIds" : "<SOME-[ID!]-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| elementIds[[ID!]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Elements to retrieve Geometry Data from. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [GeometryDataResponse](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/geometrydataresponse) | Represents the response for geometry data requests, including geometry data for elements and download information. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/geometrydatabyelements
