---
title: "foldersByProject"
url_path: reference/queries/foldersbyproject
surface: graphql
reference_kind: query
graphql_name: "foldersByProject"
---
# foldersByProject

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves all top level folders under a specified project that meet the filter criteria specified by the `filter` argument.

**Template for Query:**

```
query GetFoldersByProject($projectId: ID!, $filter: FolderFilterInput, $pagination: PaginationInput) {
  foldersByProject(projectId: $projectId, filter: $filter, pagination: $pagination) {
    # FoldersByProject Fields
  }
}
```

**Template for Query Variables:**

```
{
  "projectId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "filter" : "<SOME-FOLDERFILTER-INPUT-TYPE-VALUE>",
  "pagination" : "<SOME-PAGINATION-INPUT-TYPE-VALUE>"
}
```

## Arguments

| projectId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID of the project that contains the items. |
| --- | --- |
| filter[FolderFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/folderfilterinput) | Specifies how to filter on folders. You can filter by name. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Folders](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/folders) | A list of Folders returned in response to a query. A folder contains items, such as designs and sub-folders. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/foldersbyproject
