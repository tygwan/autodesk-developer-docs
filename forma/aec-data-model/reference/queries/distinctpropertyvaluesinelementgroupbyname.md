---
title: "distinctPropertyValuesInElementGroupByName"
url_path: reference/queries/distinctpropertyvaluesinelementgroupbyname
surface: graphql
reference_kind: query
graphql_name: "distinctPropertyValuesInElementGroupByName"
---
# distinctPropertyValuesInElementGroupByName

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves distinct values in an ElementGroup given a property name.

**Template for Query:**

```
query GetDistinctPropertyValuesInElementGroupByName($elementGroupId: ID!, $name: String!, $filter: ElementFilterInput, $pagination: PaginationInput) {
  distinctPropertyValuesInElementGroupByName(elementGroupId: $elementGroupId, name: $name, filter: $filter, pagination: $pagination) {
    # DistinctPropertyValuesInElementGroupByName Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "name" : "<SOME-STRING-TYPE-SCALAR-VALUE>",
  "filter" : "<SOME-ELEMENTFILTER-INPUT-TYPE-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| elementGroupId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | ElementGroup to retrieve distinct values from. |
| --- | --- |
| name*[String!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | name of the property to retrieve the distinct values of. |
| filter[ElementFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput) | RSQL filter to use for searching elements. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [DistinctPropertyValuesCollection](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/distinctpropertyvaluescollection) | A collection of distinct properties matching the name given. |

## Examples

### Example 1

Retrieves all distinct structural materials used in walls

**Query:**

```
query ($elementGroupId: ID!, $name: String!, $filter: ElementFilterInput, $pagination: PaginationInput) {
  distinctPropertyValuesInElementGroupByName(elementGroupId: $elementGroupId, name: $name, filter: $filter, pagination: $pagination) {
    results {
      definition {
        id
      }
      values(limit: 5) {
        value
        count
      }
    }
  }
}
```

**Query Variables:**

```
{
  "elementGroupId": "YWVjZH5JR0JWdWROM2QxdW1kTkJZRnR2ZlpBX0wyQ35GZGhKOWZxZFJSR2QxTXAwNU1RWkVR",
  "name": "Structural Material",
  "filter": {
    "query": "property.name.category==Walls"
  }
}
```

**Response:**

```
{
  "data": {
    "distinctPropertyValuesInElementGroupByName": {
      "results": [
        {
          "definition": {
            "id": "autodesk.revit.parameter:structuralMaterialParam-5.0.0"
          },
          "values": [
            {
              "value": "Concrete Masonry Units",
              "count": 4
            },
            {
              "value": "Metal Stud Layer",
              "count": 21
            },
            {
              "value": "Metal Furring",
              "count": 5
            },
            {
              "value": "Concrete, Cast-in-Place gray",
              "count": 5
            }
          ]
        }
      ]
    }
  },
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/distinctpropertyvaluesinelementgroupbyname
