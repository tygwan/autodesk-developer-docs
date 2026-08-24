---
title: "geometryDataByElement"
url_path: reference/queries/geometrydatabyelement
surface: graphql
reference_kind: query
graphql_name: "geometryDataByElement"
---
# geometryDataByElement

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves geometry data for given element.

**Template for Query:**

```
query GetGeometryDataByElement($elementId: ID!) {
  geometryDataByElement(elementId: $elementId) {
    # GeometryDataByElement Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementId" : "<SOME-ID-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| elementId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Element to retrieve Geometry Data from. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [GeometryDataResponse](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/geometrydataresponse) | Represents the response for geometry data requests, including geometry data for elements and download information. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/geometrydatabyelement
