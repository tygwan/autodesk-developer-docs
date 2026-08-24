---
title: "elementGroupExtractionStatusAtTip"
url_path: reference/queries/elementgroupextractionstatusattip
surface: graphql
reference_kind: query
graphql_name: "elementGroupExtractionStatusAtTip"
---
# elementGroupExtractionStatusAtTip

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves the extraction status of the given elementGroup for the latest version.

**Template for Query:**

```
query GetElementGroupExtractionStatusAtTip($fileUrn: ID!, $accProjectId: ID!) {
  elementGroupExtractionStatusAtTip(fileUrn: $fileUrn, accProjectId: $accProjectId) {
    # ElementGroupExtractionStatusAtTip Fields
  }
}
```

**Template for Query Variables:**

```
{
  "fileUrn" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "accProjectId" : "<SOME-ID-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| fileUrn*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | File to retrieve elementGroup extraction status from. |
| --- | --- |
| accProjectId*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Forma Project Id of the elementGroup. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementGroupExtractionStatus](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupextractionstatus) | Information about elementGroup extraction status. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupextractionstatusattip
