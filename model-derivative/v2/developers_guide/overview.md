---
title: "Overview"
url_path: developers_guide/overview
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "overview"
---
# About the Model Derivative API

![../../_images/MD-overview-diagram.png](https://developer.doc.autodesk.com/bPlouYTd/A360-platform-viewing-docs-master-766554/_images/MD-overview-diagram.png)

Use the Model Derivative API to translate designs from one CAD format to another.

The most frequent use of this API is to translate designs to the SVF2 format for rendering in a browser with the Viewer SDK. Currently, you can render more than 70 file formats because the Model Derivative API can translate them to SVF2, or its older variant, SVF. Once translated to SVF2/SVF, the API lets you extract design metadata.

The Model Derivative API lets you:
- Translate designs from one format to another.
- Extract model views (referred to as Viewables by the Viewer SDK) from a design.
- Extract the hierarchy of objects within a model view.
- Extract properties of objects within a model view. For example, materials, density, volume and so on.
- Extract selected parts of a design and export them as a set of geometries to the OBJ format.
- Generate different-sized thumbnails of design files.

## Common Uses

Common uses of this API include, but are not limited to, the following:
- Server-side applications that pre-process designs for rendering on client-side applications.
- Backend support for applications that let you display properties of specified objects.
- Applications for downstream processes that depend on the properties of design data objects. For example, order processing of items in a Bill of Materials.

## Next Steps
- Use the [How-to Guide](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials) to become familiar with typical Model Derivative workflows.
- Explore code samples to discover how the Model Derivative API is used in larger workflows.

## Terms of Service

The Model Derivative API is subject to [Autodesk Platform Services Terms of Service.](https://www.autodesk.com/company/legal-notices-trademarks/terms-of-service-autodesk360-web-services/forge-platform-web-services-api-terms-of-service)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/overview
