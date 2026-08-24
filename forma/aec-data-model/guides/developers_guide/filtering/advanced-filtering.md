---
title: "Advanced Filtering Using RSQL"
url_path: developers_guide/filtering/advanced-filtering
surface: guide
---
# Advanced Filtering Using RSQL

AEC Data Model API’s filtering expressions are influenced by the RESTful Service Query Language (RSQL), which is used to define filter expressions to limit the results for REST endpoints. The filter query string parameters used with the AEC Data Model API endpoints require filter expressions similar to RSQL.

For more information, see [RSQL grammar and syntax](https://github.com/jirutka/rsql-parser).

**Benefits of using RSQL:**
- Provides a simple and easily understandable method of defining query filters
- Makes complex query definitions more effective than other query languages such as GraphQL
- Can be extended using custom operators

# When to Use RSQL Filtering

**Use RSQL Filtering when:**
- You need complex query logic with multiple AND/OR conditions
- You require wildcard searches (contains, startsWith, endsWith) within an elementGroup
- You’re working with date/time range queries
- You need case-sensitive string comparisons
- You’re combining metadata filters with property filters
- You need fine-grained control over filter expressions

**Use Standard Filtering when:**
- You need simple, straightforward filters
- You prefer field-based syntax over query strings
- You’re filtering by common fields (name, creator, etc.)

**Best Practice:** You can combine both approaches - use Standard Filtering fields alongside the RSQL `query` field for maximum flexibility. See [Standard Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/standard-filtering) for details.

# Supported Operators

Following are the operators supported in AEC Data Model GraphQL queries, with some examples:

| Actors | Type of params | Operation | Operator | Note |
| --- | --- | --- | --- | --- |
| property name-value | String | Equality (case-insensitive) | == | When comparing values or keys that contain spaces, it is necessary to enclose both
the left-hand side (LHS) and the right-hand side (RHS) in single quotes
Examples:

“‘property.name.Element Name’==NameOfElement”
“property.name.category==’Area’” |
| Equality (case-sensitive) | =caseSensitive= |   |   |   |
| Inequality | != |   |   |   |
| Contains, Starts With, Ends With | =contains=, =startsWith=, =endsWith= |   |   |   |
| Number, DateTime | Comparison operators | ==, !=, <, >, <=, >= | Float comparison values need to be specified using decimal digits |   |
| Boolean | Equality | == |   |   |
| Inequality | != |   |   |   |
| property name | String | Exact match | == |   |
| property id-value | String | Equality (case-insensitive) | == | Properties with enum values can be searched by property id-value, where the value must be provided
as the exact name of the enum
Examples:

“property.id.autodesk.revit.parameter:parameter.elementContext-1.0.0==Instance”
where “Instance” is the name
“property.id.autodesk.revit.parameter:parameter.elementContext-1.0.0!=Instance” |
| Equality (case-sensitive) | =caseSensitive= |   |   |   |
| Inequality | != |   |   |   |
| Contains, Starts With, Ends With | =contains=, =startsWith=, =endsWith= |   |   |   |
| Number, DateTime | Comparison operators | ==, !=, <, >, <=, >= | Float comparison values need to be specified using decimal digits |   |
| Boolean | Equality | == |   |   |
| Inequality | != |   |   |   |
| property id | String | Exact match | == |   |
| metadata
(On elementGroups) | DateTime | Comparison operators | ==, !=, <, >, <=, >= | Supported ISO 8601 formats (precision supported up to seconds):

Offset format: 2020-01-20T15:00:00.000-07:00
UTC format: 2020-01-20T22:00:00.000Z |

# Compound Operations

Following is the list of supported compound operators, such as AND and OR operations:
- ‘property.name.category’=contains=’Pipes’ and ‘property.name.Element Name’=contains=’HVAC FM Boiler Feed’
- Order of operations is supported
- (property.name.category==Walls or property.name.category==Windows) and property.name.Length>5.0

# Examples

## Filters for All Elements Queries

Following filters are supported for all elements queries:

| Filter type | Query | Expectation |
| --- | --- | --- |
| Property exists by name | “property.name==Perimeter” | Returns elements with Perimeter property (case-sensitive). |
| Property does not exist by name | “property.name!=Perimeter” | Returns elements without the property Perimeter (case-sensitive). |
| By range | “property.name.area >= 100 and property.name.area < 200” | Returns elements with property area in the provided range. |
| By name and value | “property.name.category==Area” | Returns elements with the property category equal to Area (case-insensitive). |
|   | “‘property.name.Element Name’==’HVAC Feed’” | Returns elements with name “HVAC Feed” (case insensitive). |
|   | “property.name.Length >= 2.0 | Returns elements with property Length having values greater or equal to 2.0. |
| By multiple values | “‘property.name.Family Name’==’Rectangular Mullion’ or
‘property.name.Family Name’==’Window-Fixed’” | Returns elements with property “Family Name” having values “Rectangular Mullion” or “Window-Fixed”.
(all value comparisons are not case-sensitive). |
| Property exists by id | “property.id==autodesk.revit.parameter:curveElemLength-1.0.0” | Returns elements with property of id “autodesk.revit.parameter:curveElemLength-1.0.0”. |
| By id and value | “property.id.autodesk.revit.parameter:curveElemLength-1.0.0>3.0” | Returns elements with property of id “autodesk.revit.parameter:curveElemLength-1.0.0” having values greater than 3.0 |
|   | “property.id.autodesk.revit.parameter:parameter.elementContext-1.0.0==Instance” | Returns elements with property of id “autodesk.revit.parameter:parameter.elementContext-1.0.0” with value “Instance” |
| By metadata (elements) | “metadata.createdBy.email== [First.Last@autodesk.com](mailto:First.Last%40autodesk.com)” | Returns elements with the createdBy user metadata with the email address. |
|   | “metadata.lastModifiedBy.email== [First.Last@autodesk.com](mailto:First.Last%40autodesk.com)” | Returns elements with the lastModifiedBy user metadata with the email address. |
|   | “metadata.elementId==’YWVjZX5JR0JWdWROM2QxdW1kTkJZRnR2ZlpBX0wyQ34xQ1dia2xtV1JTcTJ4bklhdkN4YzhRXzEw’” | Returns elements with id “YWVjZX5JR0JWdWROM2QxdW1kTkJZRnR2ZlpBX0wyQ34xQ1dia2xtV1JTcTJ4bklhdkN4YzhRXzEw” |
|   | “metadata.revitElementId==’1055109’” | Returns elements with specified Revit Element Id: “1055109” |
| Inequality | “property.name.room!=1” | Returns elements of property “room” that does not have value 1. |
| Wild card (starts with) | “property.name.room=startsWith=boiler” | Returns elements that have property name “room” beginning with value “boiler” (case-sensitive) |
| by metadata,
where Date/Time is
greater than,less than or range | “metadata.createdOn>=2020-01-20T14:00:00Z and metadata.createdOn<2020-12-20T14:00:00Z” | Returns elements with createdOn metadata in the provided range |
| “metadata.lastModifiedOn>2020-01-01T01:00:00Z and
metadata.lastModifiedOn<2020-12-01T01:00:00Z” | Returns elements with lastModifiedOn metadata in the provided range |   |

## Filters for Elements in an ElementGroup

Following filters are only supported for getting elements in an elementGroup:

| Filter type | Query | Expectation |
| --- | --- | --- |
| Wild card (ends with and contains) | “property.name.room=endsWith=boiler”
“property.name.room=contains=Fire | Returns elements which have property name “room” ending with value “boiler” (case insensitive).
Returns elements which have property “room” containing value “Fire” (case insensitive) |
| case-sensitivity | “property.name.comment=caseSensitive=Vertical” | Returns elements which have property “comment” with value “Vertical” (case-sensitive check on “Vertical”) |

## Filters for ElementGroups Queries

Following filters are supported for all elementGroups queries:

| Filter type | Query | Expectation |
| --- | --- | --- |
| By metadata (elementGroups) | “metadata.createdOn>=2020-01-20T14:00:00Z and metadata.createdOn<2020-12-20T14:00:00Z” | Returns elementGroups with createdOn metadata in the provided range. |
|   | “metadata.lastModifiedOn>2020-01-01T01:00:00Z and metadata.lastModifiedOn<2020-12-01T01:00:00Z” | Returns elementGroups with lastModifiedOn metadata in the provided range. |
| “metadata.createdBy.email== [First.Last@autodesk.com](mailto:First.Last%40autodesk.com)” | Returns elementGroups with the createdBy user metadata with the email address. |   |
| “metadata.lastModifiedBy.email== [First.Last@autodesk.com](mailto:First.Last%40autodesk.com)” | Returns elementGroups with the lastModifiedBy user metadata with the email address. |   |
| “metadata.name==’Snowdon Towers Sample Architectural.rvt’” | Returns elementGroups with name “Snowdon Towers Sample Architectural.rvt” |   |
| “metadata.fileUrn==’[urn:adsk.wipprod:dm.lineage:mgQk-s7vRy2I6BL7Ed1IYw](urn:adsk.wipprod:dm.lineage:mgQk-s7vRy2I6BL7Ed1IYw)’” | Returns elementGroups with specified file urn. |   |

# Special Considerations for ElementGroup Filters

Certain ElementGroup filters have restrictions on how they can be used in RSQL queries. Pay close attention to these limitations to avoid query errors.

## metadata.fileUrn

**Restriction:** This filter can only be used by itself and cannot be used in combination with any other filter.

**Accepted Sample Query (using OR for multiple file URNs):**

```
{
    ...,
    "filter": {
        "query": "metadata.fileUrn=='urn:adsk.wipstg:dm.lineage:u-ncDS7gX3ZhpB3rgZXKeQ' or metadata.fileUrn=='urn:adsk.wipstg:dm.lineage:R8YVGN61QDaLElL0YSfkKg'"
    },
    ...
}
```

**Rejected Sample Query (combining with createdBy in RSQL):**

```
{
    ...,
    "filter": {
        "query": "metadata.fileUrn=='urn:adsk.wipstg:dm.lineage:u-ncDS7gX3ZhpB3rgZXKeQ' and metadata.createdBy.email=='first.last@autodesk.com'"
    },
    ...
}
```

**Rejected Sample Query (combining with convenience filter):**

```
{
    ...,
    "filter": {
        "query": "metadata.fileUrn=='urn:adsk.wipstg:dm.lineage:u-ncDS7gX3ZhpB3rgZXKeQ'",
        "createdBy": "first.last@autodesk.com"
    },
    ...
}
```

## metadata.name

**Restrictions:**
- This filter can only be used with one value and cannot support multiple values (including coupling with convenience filter for name)
- This filter cannot be used with ORs, only ANDs are supported

**Accepted Sample Query (single value with AND):**

```
{
    ...,
    "filter": {
        "query": "metadata.name=='Snowdon Towers East.rvt' and metadata.createdBy.email=='first.last@autodesk.com'"
    },
    ...
}
```

**Accepted Sample Query (combining with convenience filter):**

```
{
    ...,
    "filter": {
        "query": "metadata.name=='Snowdon Towers East.rvt'",
        "createdBy": "first.last@autodesk.com"
    },
    ...
}
```

**Rejected Sample Query (combined with convenience name filter):**

```
{
    ...,
    "filter": {
        "query": "metadata.name=='Snowdon Towers East.rvt'",
        "name": "Snowdon Towers West.rvt"
    },
    ...
}
```

**Rejected Sample Query (using OR operator):**

```
{
    ...,
    "filter": {
        "query": "metadata.name=='Snowdon Towers East.rvt' or metadata.createdBy.email=='first.last@autodesk.com'"
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

**Original query that could result in an error:**

```
{
    ...,
    "filter": {
        "query": "property.name.Width>1.5 and property.name.Length>2.0"
    },
    ...
}
```

**Assuming property IDs for ‘Width’ are:**
- parameters.22edf5b5ecf7475382a1ddba7795a65d:lp59e893d70e8511d69d9e00010235866b00000350-1.0.0
- parameters.22edf5b5ecf7475382a1ddba7795a65d:lp94e228176ecf4410bee07c737e5d85fb00000ac6-1.0.0

**And the property IDs for ‘Length’ are:**
- parameters.22edf5b5ecf7475382a1ddba7795a65d:lp9604b42321874a65baf0caf0a905b5ed00000274-1.0.0
- parameters.22edf5b5ecf7475382a1ddba7795a65d:lp5b4cbecedd874ffabdbb5914469d6f6a00000e91-1.0.0

**Corrected query using property IDs:**

```
{
    ...,
    "filter": {
        "query": "((('property.id.parameters.22edf5b5ecf7475382a1ddba7795a65d:lp59e893d70e8511d69d9e00010235866b00000350-1.0.0' > 1.5) or ('property.id.parameters.22edf5b5ecf7475382a1ddba7795a65d:lp94e228176ecf4410bee07c737e5d85fb00000ac6-1.0.0' > 1.5)) and (('property.id.parameters.22edf5b5ecf7475382a1ddba7795a65d:lp9604b42321874a65baf0caf0a905b5ed00000274-1.0.0' > 2.0) or ('property.id.parameters.22edf5b5ecf7475382a1ddba7795a65d:lp5b4cbecedd874ffabdbb5914469d6f6a00000e91-1.0.0' > 2.0)))"
    },
    ...
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/advanced-filtering
