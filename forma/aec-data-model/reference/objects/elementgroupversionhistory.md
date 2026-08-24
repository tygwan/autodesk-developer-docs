---
title: "ElementGroupVersionHistory"
url_path: reference/objects/elementgroupversionhistory
surface: graphql
reference_kind: object
graphql_name: "ElementGroupVersionHistory"
---
# ElementGroupVersionHistory

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Information related to versions of an elementGroup.

## Fields

| id*[ID!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Globally unique identifier. |
| --- | --- |
| tipVersion[ElementGroupVersion](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversion) | Latest version. |
| versions*[ElementGroupVersions!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversions) `non-null` | Query for a specific set of versions. |
| filter[ElementGroupVersionFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementgroupversionfilterinput) | Specifies how to filter using version specific criteria. |
| pagination[PaginationInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/paginationinput) | Specifies how to split the response into multiple pages. |
| versionByNumber[ElementGroupVersion](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversion) | Query for a specific version by its version number. |
| versionNumber[Int](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Version number to use for fetching version. |
| versionFilter[VersionFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/versionfilterinput) | Optional. Specifies version resolution behavior (e.g. whether the versionNumber refers to a PUBLISHED or WIP version). Defaults to PUBLISHED if not provided. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Field Of | [Elementgroup](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) | Represents a Revit model. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroupversionhistory
