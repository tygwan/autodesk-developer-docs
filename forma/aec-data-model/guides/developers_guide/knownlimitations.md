---
title: "Known Limitations"
url_path: developers_guide/knownlimitations
surface: guide
---
# Known Limitations

There are some known limitations with the AEC Data Model API in the current release.
- Linked Revit Models are currently not supported.
- Geometry coverage depends on model content and extraction; see the [geometry how-to guides](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/geometry/geometry_query) and [geometryDataByElement](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/geometrydatabyelement) reference for supported workflows.
- Version-based queries are currently not supported for Extension Element Groups.
- The [elementGroupExtractionStatus](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupextractionstatus) query is not supported for Work in Progress models. Use the `versionHistory` subquery to see the latest Work in Progress version. For step-by-step queries, see [Working with Work In Progress Data Tutorial](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/revit_sync/query_sync_data).

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/knownlimitations
