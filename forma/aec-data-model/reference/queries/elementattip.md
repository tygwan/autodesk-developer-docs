---
title: "elementAtTip"
url_path: reference/queries/elementattip
surface: graphql
reference_kind: query
graphql_name: "elementAtTip"
---
# elementAtTip

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves element using given ID.

**Template for Query:**

```
query GetElementAtTip($elementId: ID!) {
  elementAtTip(elementId: $elementId) {
    # ElementAtTip Fields
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

| elementId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Element to retrieve. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Element](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/element) | Represents an element type. |

## Examples

### Example 1

Retrieves an element at tip by element ID along with its properties.

**Query:**

```
query GetElementAtTip($elementId: ID!, $propertiesPagination: PaginationInput) {
  elementAtTip(elementId: $elementId) {
    id
    name
    properties(pagination: $propertiesPagination) {
      results {
        name
        value
      }
    }
  }
}
```

**Query Variables:**

```
{
  "elementId": "YWVjZX5FMnRqOFJFOXRsSlRQNU9WVzBiaDZ4X0wyQ35QV0hqdllJalM3NmNWbURQTXJFMXZRXzEwMDAwMA",
  "propertiesPagination": {
    "limit": 5
  }
}
```

**Response:**

```
{
  "data": {
    "elementAtTip": {
      "id": "YWVjZX5FMnRqOFJFOXRsSlRQNU9WVzBiaDZ4X0wyQ35QV0hqdllJalM3NmNWbURQTXJFMXZRXzEwMDAwMA",
      "name": "2.5\" x 5\" rectangular (Orange)",
      "properties": {
        "pagination": {
          "pageSize": 5,
          "cursor": "Y3Vyc341fjU"
        },
        "results": [
          {
            "name": "Length",
            "value": 1.2192
          },
          {
            "name": "Design Option",
            "value": "Main Model"
          },
          {
            "name": "Area",
            "value": 0.24032209999999998
          },
          {
            "name": "Volume",
            "value": 0.0098322384
          },
          {
            "name": "Export to IFC",
            "value": "By Type"
          }
        ]
      }
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementattip
