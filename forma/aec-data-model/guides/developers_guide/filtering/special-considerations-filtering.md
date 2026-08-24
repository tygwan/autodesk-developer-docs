---
title: "Special Considerations of Filtering"
url_path: developers_guide/filtering/special-considerations-filtering
surface: guide
---
# Special Considerations of Filtering

This document outlines important limitations and special behaviors when using filtering in the AEC Data Model API. Understanding these considerations will help you avoid common errors and design more effective queries.

**Key Topics Covered:**
- ElementGroup filter restrictions (fileUrn and name fields)
- PropertyName filter limitations and error resolution
- Best practices for handling filter constraints

For general filtering capabilities, see [Standard Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/standard-filtering) and [Advanced Filtering Using RSQL](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/advanced-filtering).

# Special Considerations for ElementGroup Filters

Certain ElementGroup filters have restrictions on how they can be used. Pay close attention to these limitations to avoid query errors.

## fileUrn

**Restriction:** This filter can only be used by itself and **cannot** be used in combination with any other filter. The fileUrn filter is designed for direct file lookup and doesn’t support compound filtering operations.

**Accepted Sample Query:**

```
{
    ...,
    "filter": {
        "fileUrn": ["urn:adsk.wipstg:dm.lineage:u-ncDS7gX3ZhpB3rgZXKeQ", "urn:adsk.wipstg:dm.lineage:R8YVGN61QDaLElL0YSfkKg"]
    },
    ...
}
```

**Rejected Sample Query (combining fileUrn with createdBy):**

```
{
    ...,
    "filter": {
        "fileUrn": "urn:adsk.wipstg:dm.lineage:u-ncDS7gX3ZhpB3rgZXKeQ",
        "createdBy": "first.last@autodesk.com"
    },
    ...
}
```

## name

**Restriction:** This filter can only be used with one value and cannot support multiple values. Unlike other string fields, the name filter doesn’t support array-based OR operations.

**Accepted Sample Query:**

```
{
    ...,
    "filter": {
        "name": "Snowdon Towers East.rvt",
        "createdBy": "first.last@autodesk.com"
    },
    ...
}
```

**Rejected Sample Query (multiple name values):**

```
{
    ...,
    "filter": {
        "name": ["Snowdon Towers East.rvt", "Snowdon Towers West.rvt"]
    },
    ...
}
```

# Special Considerations for PropertyName Filters

## property.name

**The Challenge:**

When a filter is expressed using a property name, the system internally translates that name into a set of property type IDs. During this translation, it is possible for the number of resolved property type IDs to exceed the configured limits:
- The per element group limit of 100
- The global limit of 250

**Error Scenarios:**

If the number of translated property type IDs exceeds the per element group limit, the system produces the following error:

```
"errors": [
    {
        "message": "The property name in the filter resulted in too many comparisons. Please consider using the propertyDefinitionsByElementGroup query to get the property IDs directly, and use a property ID filter."
    }
]
```

If the number of translated property type IDs exceeds the global limit, the system produces the following error:

```
"errors": [
    {
        "message": "The property name in the filter resulted in too many comparisons, as per the global limit of: 250. Please consider using the propertyDefinitionsByElementGroup query to get the property IDs directly, and use a property ID filter."
    }
]
```

**How to Resolve:**

If this error occurs, follow these steps to resolve it:

**Step 1:** Query for property IDs using the propertyDefinitionsByElementGroup query.

Use the [propertyDefinitionsByElementGroup query](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/propertydefinitionsbyelementgroup) to find the exact property IDs:

```
query propertyDefinitionsByElementGroup($elementGroupId: ID!, $filter: PropertyDefinitionFilterInput, $pagination: PaginationInput) {
    propertyDefinitionsByElementGroup(elementGroupId: $elementGroupId, filter: $filter, pagination: $pagination) {
        pagination {
            cursor
            pageSize
        }
        results {
            id
            name
        }
    }
}
```

**Step 2:** Provide the variables to search for your property.

With the following variables:

```
{
    "elementGroupId": "YWVjZH5JR0JWdWROM2QxdW1kTkJZRnR2ZlpBX0wyQ35nMGNaTkdWUVNhMk1nWnp1TVJBcUx3",
    "filter": {
        "names": ["Length", "Width"]
    },
    "pagination": {
        "limit": 100
    }
}
```

**Step 3:** Replace the property name filter with property ID filter using OR operators.

**Important Note:** If your query spans multiple element groups (e.g. elementsByHub, elementsByProject, elementsByFolder), you need property IDs for each relevant element group. Once all property IDs for a given property name are found, conjoin them with OR operators in the property.id filter.

**Example Transformation:**

**Query that could result in an error:**

```
{
    ...,
    "filter": {
        "properties": {
            "name": "Width",
            "valueWithComparator": {
                "value": "1.5",
                "comparator": "GREATER_THAN"
            }
        }
    },
    ...
}
```

**Assuming property IDs for ‘Width’ are:**
- parameters.22edf5b5ecf7475382a1ddba7795a65d:lp59e893d70e8511d69d9e00010235866b00000350-1.0.0
- parameters.22edf5b5ecf7475382a1ddba7795a65d:lp94e228176ecf4410bee07c737e5d85fb00000ac6-1.0.0

**Corrected query using property IDs:**

```
{
    ...,
    "filter": {
        "query": "(('property.id.parameters.22edf5b5ecf7475382a1ddba7795a65d:lp59e893d70e8511d69d9e00010235866b00000350-1.0.0' > 1.5) or ('property.id.parameters.22edf5b5ecf7475382a1ddba7795a65d:lp94e228176ecf4410bee07c737e5d85fb00000ac6-1.0.0' > 1.5))"
    },
    ...
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/special-considerations-filtering
