---
title: "elementGroupExtractionStatus"
url_path: reference/queries/elementgroupextractionstatus
surface: graphql
reference_kind: query
graphql_name: "elementGroupExtractionStatus"
---
# elementGroupExtractionStatus

![query](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_query.png)

Retrieves the extraction status of the given elementGroup.

**Template for Query:**

```
query GetElementGroupExtractionStatus($fileUrn: ID!, $versionNumber: Int) {
  elementGroupExtractionStatus(fileUrn: $fileUrn, versionNumber: $versionNumber) {
    # ElementGroupExtractionStatus Fields
  }
}
```

**Template for Query Variables:**

```
{
  "fileUrn" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "versionNumber" : "<SOME-INT-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| fileUrn*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | File to retrieve elementGroup extraction status from. |
| --- | --- |
| versionNumber[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | File version to retrieve elementGroup extraction status from. Default value is 1. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementGroupExtractionStatus](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupextractionstatus) | Information about elementGroup extraction status. |

## Examples

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupextractionstatus
