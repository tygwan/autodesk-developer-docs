---
title: "project"
url_path: reference/queries/project
surface: graphql
reference_kind: query
graphql_name: "project"
---
# project

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves an object representing a project from a specified hub.

A project is a shared workspace for teams of people to store, organize, and manage all related design data.

**Template for Query:**

```
query GetProject($projectId: ID!) {
  project(projectId: $projectId) {
    # Project Fields
  }
}
```

**Template for Query Variables:**

```
{
  "projectId" : "<SOME-ID-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| projectId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | The ID of the project to retrieve. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [Project](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/project) | Represents a project. A project is a shared workspace for teams of people working together on a project, to store, organize, and manage all related entity data. |

## Examples

### Example 1

Retrieves a project by ID along with its top folders.

**Query:**

```
query GetProject($projectId: ID!) {
  project (projectId: $projectId) {
    id
    name
    folders {
      results {
        id
        name
        objectCount
      }
    }
  }
}
```

**Query Variables:**

```
{
  "projectId": "YWltcHJvan5iLmU0ZmJkMzE1LTJkYzUtNDAyNi04Y2EzLTgwZjA5ZDI0ZmY0Mn5iLjdhZGJmOWZkLWRlYmItNDI5Yy1iZmU1LTMyYTNjMjJjMDY5NQ"
}
```

**Response:**

```
{
  "data": {
    "project": {
      "id": "YWltcHJvan5iLmU0ZmJkMzE1LTJkYzUtNDAyNi04Y2EzLTgwZjA5ZDI0ZmY0Mn5iLjdhZGJmOWZkLWRlYmItNDI5Yy1iZmU1LTMyYTNjMjJjMDY5NQ",
      "name": "AEC Design AIM STG  ",
      "folders": {
        "results": [
          {
            "id": "Zm9sZH5iLmU0ZmJkMzE1LTJkYzUtNDAyNi04Y2EzLTgwZjA5ZDI0ZmY0Mn5iLjdhZGJmOWZkLWRlYmItNDI5Yy1iZmU1LTMyYTNjMjJjMDY5NX51cm46YWRzay53aXBzdGc6ZnMuZm9sZGVyOmNvLlhvSG9RY3pHUm9LczVZRm4yUDNpWlE",
            "name": "Project Files",
            "objectCount": 8
          }
        ]
      }
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/project
