---
title: "Standard Filtering"
url_path: developers_guide/filtering/standard-filtering
surface: guide
---
# Standard Filtering Capabilities

The AEC Data Model API provides a set of standard filtering options to enable filtering expressions as a core capability. They provide a simpler method for applying commonly-used filters, and can be used either as an alternative to or combined with Advanced Filtering Capabilities RSQL.

These standard filtering options are available for ElementGroup and Element queries.

# When to Use Standard Filtering

**Use Standard Filtering when:**
- You need simple, straightforward filters with commonly-used fields
- You want to filter by name, creator, or modification metadata
- You’re filtering by a single property or reference
- You prefer a more intuitive, field-based syntax over query strings
- You’re building basic search functionality for users

**Use Advanced Filtering (RSQL) when:**
- You need complex query logic with multiple conditions
- You require wildcard searches (contains, startsWith, endsWith) across an ElementGroup
- You need to combine multiple property filters with AND/OR operators
- You’re working with date/time range queries
- You need fine-grained control over case sensitivity

**Best Practice:** Start with Standard Filtering for simplicity, and combine it with RSQL (using the `query` field) for more complex requirements. See [Advanced Filtering Using RSQL](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/advanced-filtering) for details.

# Supported Filtering Options

Following are the standard filtering options supported in AEC Data Model GraphQL ElementGroup queries:

| Fields | Type of params | Sample ElementGroup Query Filter | Expected Response |
| --- | --- | --- | --- |
| name | String | “name”: “Snowdon Towers Sample Architectural.rvt” | Returns elementGroups with name “Snowdon Towers Sample Architectural.rvt” |
| fileUrn | String | “fileUrn”: “[urn:adsk.wipstg:dm.lineage:u-ncDS7gX3ZhpB3rgZXKeQ](urn:adsk.wipstg:dm.lineage:u-ncDS7gX3ZhpB3rgZXKeQ)” | Returns elementGroups with file URN “[urn:adsk.wipstg:dm.lineage:u-ncDS7gX3ZhpB3rgZXKeQ](urn:adsk.wipstg:dm.lineage:u-ncDS7gX3ZhpB3rgZXKeQ)” |
| createdBy | String | “createdBy”: “[first.last@autodesk.com](mailto:first.last%40autodesk.com)” | Returns elementGroups created by the user with email “[first.last@autodesk.com](mailto:first.last%40autodesk.com)” |
| lastModifiedBy | String | “lastModifiedBy”: “[first.last@autodesk.com](mailto:first.last%40autodesk.com)” | Returns elementGroups that were last modified by the user with email “[first.last@autodesk.com](mailto:first.last%40autodesk.com)” |

Following are the standard filtering options supported in AEC Data Model GraphQL Elements queries:

| Fields | Type of params | Sample Element Query Filter | Expected Response |
| --- | --- | --- | --- |
| name | String | “name”: “2.5" x 5" rectangular (Orange)” | Returns elements with name “2.5" x 5" rectangular (Orange)” |
| nameWithComparator | { “value”: String, “comparator”: Enum } | “nameWithComparator”: { “value”: “Wall”, “comparator”: “CONTAINS” } | Returns elements whose name contains the string “Wall” |
| properties | { “name”: String, “value”: String, “valueWithComparator”: { “value”: String, “comparator”: Enum } } | “properties”: { “name”: “Element Context”, “value”: “Instance” } | Returns elements that are instances |
| “properties”: { “name”: “Family Name”, “valueWithComparator”: { “value”: “Main”, “comparator”: “STARTS_WITH” } } | Returns elements with a “Family Name” that starts with the string “Main” |   |   |
| { “id”: String, “value”: String, “valueWithComparator”: { “value”: String, “comparator”: Enum } } | “properties”: { “id”: “autodesk.revit.parameter:parameter.elementContext-1.0.0”, “value”: “Instance” } | Returns elements that are instances |   |
| “properties”: { “id”: “autodesk.revit.parameter:parameter.elementContext-1.0.0”, “valueWithComparator”: { “value”: “Instance”, “comparator”: “NOT_EQUAL” } } | Returns elements that are **NOT** instances |   |   |
| references | { “name”: String, “referenceId”: String } | “references”: { “name”: “Type”, “referenceId”: “YWVjZX5JR1TYdWROM2Qxd” } | Returns elements with a “Type” reference to the element with id “YWVjZX5JR1TYdWROM2Qxd” |
| createdBy | String | “createdBy”: “[john.doer@autodesk.com](mailto:john.doer%40autodesk.com)” | Returns elements created by the user with email “[john.doer@autodesk.com](mailto:john.doer%40autodesk.com)” |
| lastModifiedBy | String | “lastModifiedBy”: “[john.doer@autodesk.com](mailto:john.doer%40autodesk.com)” | Returns elements that were last modified by the user with email “[john.doer@autodesk.com](mailto:john.doer%40autodesk.com)” |
| elementId | String | “elementId”: “YWVjZX5JR0JWdWROM2QxdW1kTkJZRnR2ZlpBX0wyQ34xQ1dia2xtV1JTcTJ4bklhdkN4YzhRXzEw” | Returns elements with id:
“YWVjZX5JR0JWdWROM2QxdW1kTkJZRnR2ZlpBX0wyQ34xQ1dia2xtV1JTcTJ4bklhdkN4YzhRXzEw” |
| revitElementId | String | “revitElementId”: “1055109” | Returns elements with specified Revit Element Id: “1055109” |

**NOTE**: The **comparator** Enum can be one of: CASE_SENSITIVE, CONTAINS, STARTS_WITH, ENDS_WITH, GREATER_THAN, GREATER_THAN_EQUAL_TO, LESS_THAN, LESS_THAN_EQUAL_TO, or NOT_EQUAL.

## Comparator Reference

The following table shows available comparators and their use cases:

| Comparator | Applicable Types | Description | Example |
| --- | --- | --- | --- |
| CASE_SENSITIVE | String | Exact match (case-sensitive) | “comparator”: “CASE_SENSITIVE” |
| CONTAINS | String | Partial match (contains substring) | Filter names containing “Wall” |
| STARTS_WITH | String | Matches beginning of string | Filter names starting with “Main” |
| ENDS_WITH | String | Matches end of string | Filter names ending with “Door” |
| GREATER_THAN | Number | Value must be greater than specified | Filter elements where Length > 5.0 |
| GREATER_THAN_EQUAL_TO | Number | Value greater than or equal to | Filter elements where Area >= 100 |
| LESS_THAN | Number | Value must be less than specified | Filter elements where Width < 2.5 |
| LESS_THAN_EQUAL_TO | Number | Value less than or equal to | Filter elements where Height <= 10 |
| NOT_EQUAL | String, Number | Value must not match specified value | Filter elements that are NOT instances |

# Compound Filtering Options

When multiple convenience fields are provided, the AND operator will be used to compare across fields.

**NOTE**: Having multiple properties or references with different names are considered to be different fields. This can be done by defining an array of properties or references, with each property or reference having a different name/id.

| Query Type | Sample Element Query Filter | Expected Response |
| --- | --- | --- |
| ElementGroup | “name”: “Tower Blueprints.rvt”, “createdBy”: “[first.last@autodesk.com](mailto:first.last%40autodesk.com)” | Returns elementGroups with name “Tower Blueprints.rvt” and
created by the user with email “[first.last@autodesk.com](mailto:first.last%40autodesk.com)” |
| Element | “name”: “HVAC Feed”, “properties”: [{ “name”: “Family Name”, “value”: “Linear - 3/32" Trebuchet MS” },
{ “id”: “autodesk.revit.parameter:parameter.elementContext-1.0.0”, “value”: “Type”}] | Returns elements with name “HVAC Feed”,
part of the “Linear - 3/32" Trebuchet MS” family, and are types |

The convenience fields can be used alongside RSQL to perform more powerful queries. (To see how to use the query field, refer to [Advanced Filtering Using RSQL](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/advanced-filtering)).

| Query Type | Sample Element Query Filter | Expected Response |
| --- | --- | --- |
| Element | “name”: “Middle Flooring”, “query”: “property.name.Length >= 2.0” | Returns elements with name “Middle Flooring” and property “Length” having
values greater than or equal to 2.0 |

# Matching Multiple Values

When multiple values for a single field are provided, the OR operator will be used to compare within the same field. This is useful when there are multiple acceptable values for a field. In these cases, provide a [String] as params instead of a single String.

| Query Type | Sample Element Query Filter | Expected Response |
| --- | --- | --- |
| ElementGroup | “createdBy”: [”[first.last@autodesk.com](mailto:first.last%40autodesk.com)”, “[test@autodesk.com](mailto:test%40autodesk.com)”] | Returns elementGroups created by the user with email “[first.last@autodesk.com](mailto:first.last%40autodesk.com)” or
with email “[test@autodesk.com](mailto:test%40autodesk.com)” |
| Element | “createdBy”: [”[john.doer@autodesk.com](mailto:john.doer%40autodesk.com)”, “[test@autodesk.com](mailto:test%40autodesk.com)”],
“lastModifiedBy”: “[john.doer@autodesk.com](mailto:john.doer%40autodesk.com)” | Returns elements created by the user with email “[john.doer@autodesk.com](mailto:john.doer%40autodesk.com)” or with email
“[test@autodesk.com](mailto:test%40autodesk.com)”, and last modified by the user with email “[john.doer@autodesk.com](mailto:john.doer%40autodesk.com)” |

**NOTE**: All String fields can accept a [String] instead, with the exception of property name, property id, reference name, and valueWithComparator value (see Compound Filters section). The nameWithComparator field can accept an array of name-comparator pairs as well, with each pair considered to be within the same field.

# Standard Filtering Equivalent of RSQL

For reference, the following are the convenience field equivalents of some common RSQL filters:

| RSQL Filter | Standard Field Filter |
| --- | --- |
| “metadata.name==x” | “name”: “x” |
| “metadata.fileUrn==x” | “fileUrn”: “x” |
| “metadata.createdBy.email==x” | “createdBy”: “x” |
| “metadata.lastModifiedBy.email==x” | “lastModifiedBy”: “x” |
| “metadata.elementId==x” | “elementId”: “x” |
| “property.name.<y>==x” | “properties”: [{ “name”: “y”, “value”: “x” }] |
| “property.id.<y>==x” | “properties”: [{ “id”: “y”, “value”: “x” }] |
| “reference.<y>==x” | “references”: [{ “name”: “y”, “referenceId”: “x” }] |

# Sample Queries

## Example 1: Simple Name Filter with Comparator

Querying for all elements that contain the word “Pipes” in their name:

```
{
    ...,
    "filter": {
        "nameWithComparator": {"value": "Pipes", "comparator": "CONTAINS"}
    },
    ...
}
```

## Example 2: Complex Multi-Field Filter

Querying all elements that have the following criteria:
- Named 2.5" x 5" rectangular (Orange)
- Are instances. This example uses the property id (autodesk.revit.parameter:parameter.elementContext-1.0.0), but the property name can be supplied instead
- Are part of the Rectangular Mullion family. The example uses the property name (Family Name), but the property id can be supplied instead
- Have a “Type” reference with the element with id YWVjZX5JR0JWdWROM2QxdW1kTkJZRnR2ZlpBX0wyQ351LW5jRFM3Z1E2R2hwQjNyZ1pYS2VRX2UzPLIz
- Were created by user [first.last@autodesk.com](mailto:first.last%40autodesk.com)

```
{
    ...,
    "filter": {
        "name": "2.5\" x 5\" rectangular (Orange)",
        "properties": [
            { "name": "Family Name", "value": "Rectangular Mullion" },
            { "id": "autodesk.revit.parameter:parameter.elementContext-1.0.0", "value": "Instance" }
        ],
        "references": { "name": "Type", "referencedId": "YWVjZX5JR0JWdWROM2QxdW1kTkJZRnR2ZlpBX0wyQ351LW5jRFM3Z1E2R2hwQjNyZ1pYS2VRX2UzPLIz" },
        "createdBy": "first.last@autodesk.com"
    },
    ...
}
```

# Special Considerations for ElementGroup Filters

## fileUrn

This filter can only be used by itself and not be used in combination with any other filter.

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

**Rejected Sample Query:**

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

This filter can only be used with one value and cannot support multiple values.

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

**Rejected Sample Query:**

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

**Possible Source of Error:**

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

**Resolution Steps:**

If this error occurs, follow these steps to resolve it:

**Step 1:** Use the propertyDefinitionsByElementGroup query to find the property IDs.

Here is an example query:

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

**Step 2:** Provide the variables to retrieve property IDs.

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

**Step 3:** Replace property name filter with property ID filter using OR operators.

**Important Note:** If the query where the property name filter is being used is across multiple element groups (e.g. elementsByHub, elementsByProject, elementsByFolder), then property IDs are needed for each relevant element group. Once all property IDs for a given property name are found, simply conjoin them with OR operators in the property.id filter.

**Example Transformation:**

**Original query that could result in an error:**

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

**Transformed query using property IDs:**

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
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/standard-filtering
