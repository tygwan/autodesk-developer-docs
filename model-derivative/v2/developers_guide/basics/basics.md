---
title: "About this API"
url_path: developers_guide/basics/basics
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "basics"
---
# About this API

The Model Derivative API gives you the ability to translate source design files into output files (derivatives) of [different formats](https://aps.autodesk.com/en/docs/model-derivative/v2/supported-translations). While translating, the Model Derivative service generates a JSON file known as a manifest. The manifest contains information about the derivatives that are produced. You can use the manifest to access the derivatives, check the status of translation jobs, and obtain information about the derivatives.

The most common use of the Model Derivative API is to translate designs to the SVF2 format so that they can be displayed in a browser. See the tutorial [Prepare a File for the Viewer](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/prep-file4viewer/) for details. Another common use of the Model Derivative API is to translate designs from one CAD format to another. See the tutorial on [Translate a Source File](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/translate-to-obj/) for details. You can also use the Model Derivative API to select parts/components of a design and export their geometric representations to OBJ files. See the tutorial [Extract Geometry from a Source Design](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/xtract-geometry-from-source-file/) for details.

For more information on the typical uses of this API, see the other topics under API Basics.

![../../../../_images/fieldGuide.png](https://developer.doc.autodesk.com/bPlouYTd/A360-platform-viewing-docs-master-766554/_images/fieldGuide.png)

The following table defines important terms for the Model Derivative API:

| Term | Definition |
| --- | --- |
| source design | The design that is translated to other formats; sometimes called “seed file”.

For information about supported file formats, see the

[GET formats](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint. |
| derivatives | The translated output files |
| manifest | A JSON file with information about the derivatives of a specific source design. It contains information such as the derivative type, the URN of the derivative, and the translation job status (how far translation has progressed) of each derivative. It also contains metadata about each derivative, which lets you identify individual objects within a model, their hierarchical organization, and associated properties. |

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/basics/basics
