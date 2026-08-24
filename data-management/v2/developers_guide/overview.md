---
title: "Overview"
url_path: developers_guide/overview
product: "Data Management API"
surface: "data-management-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "overview"
---
# Data Management API

The Data Management API provides a unified and consistent way to access data across BIM 360 Team, Fusion Team (formerly known as A360 Team), BIM 360 Docs, A360 Personal, and the Object Storage Service.

With this API, you can accomplish a number of workflows, including accessing a Fusion model in Fusion Team and getting an ordered structure of items, IDs, and properties for generating a bill of materials in a 3rd-party process. Or, you might want to superimpose a Fusion model and a building model to use in the [Viewer](https://aps.autodesk.com/en/docs/viewer/v7).

The Data Management API is composed of the following services:

| Project Service | Navigate to a project from a BIM 360 Team hub, a Fusion Team hub, an A360 Personal hub or a BIM 360 Docs account.
The project acts as an “anchor” point for data available through the API. |
| --- | --- |
| Data Service | Navigate and manage the BIM 360 Team, Fusion Team, Bim 360 Docs, or A360 Personal metadata in terms of folders,
items, and versions, as well as the relationships between these entities. An item could be a file
or a Fusion Team design. Each item can have multiple versions. |
| Schema Service | This allows your application to understand the structure and semantics of extended data types,
like Fusion designs. |
| Object Storage Service (OSS) | This allows your application to download and upload raw files (such as PDF, XLS, DWG, or RVT) that
are managed by the Data Service. |

You may have any number of logically separated [apps](https://aps.autodesk.com/myapps) that utilize one or more of these functionalities, and any of these apps are interoperable with other APIs on Autodesk Platform Services.

![../../../_images/dms_overview.png](https://developer.doc.autodesk.com/bPlouYTd/forge-dm-forge-dm-pubdocs-master-725577/_images/dms_overview.png)

## Getting Started

The [API Basics](https://aps.autodesk.com/en/docs/data/v2/overview/basics) section guides you through the process of getting started with the API and explains the main concepts and functionality, while the [Field Guide](https://aps.autodesk.com/en/docs/data/v2/overview/field-guide) provides information about the kind of objects you’ll encounter in the API, as well as the validation schema for their representation.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/developers_guide/overview
