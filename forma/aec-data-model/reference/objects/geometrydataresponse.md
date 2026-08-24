---
title: "GeometryDataResponse"
url_path: reference/objects/geometrydataresponse
surface: graphql
reference_kind: object
graphql_name: "GeometryDataResponse"
---
# GeometryDataResponse

![object](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_object.png)

Represents the response for geometry data requests, including geometry data for elements and download information.

## Fields

| geometryData[[GeometryDataOutput]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/geometrydataoutput) | The geometry data for the requested elements. |
| --- | --- |
| downloadInfo[[DownloadInfo]](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/downloadinfo) | Information required to download geometry data for the elements from a URL. |

## Where Used

| Usage | Used By | Description |
| --- | --- | --- |
| Query By | [geometryDataByElement](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/geometrydatabyelement) | Retrieves geometry data for given element. |
| Query By | [geometryDataByElements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/geometrydatabyelements) | Retrieves geometry data for given elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/geometrydataresponse
