---
title: "elementGroupsByProject"
url_path: reference/queries/elementgroupsbyproject
surface: graphql
reference_kind: query
graphql_name: "elementGroupsByProject"
---
# elementGroupsByProject

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves elementGroups in the given project, using additional RSQL filters if provided.

**Template for Query:**

```
query GetElementGroupsByProject($projectId: ID!, $filter: ElementGroupFilterInput, $pagination: PaginationInput) {
  elementGroupsByProject(projectId: $projectId, filter: $filter, pagination: $pagination) {
    # ElementGroupsByProject Fields
  }
}
```

**Template for Query Variables:**

```
{
  "projectId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "filter" : "<SOME-ELEMENTGROUPFILTER-INPUT-TYPE-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| projectId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Project to retrieve elementGroups from. |
| --- | --- |
| filter[ElementGroupFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementgroupfilterinput) | RSQL filter to use for searching elementGroups. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementGroups!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroups) `non-null` | Contains a list of ElementGroups returned in response to a query. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupsbyproject
