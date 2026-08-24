---
title: "About this Walkthrough"
url_path: tutorials/translate-source-file-containing-xref/about-this-tutorial
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "tutorial"
api_version: "v2"
section: "tutorials"
category: "translate-source-file-containing-xref"
---
# Translate a Source File that Contains References

## About this walkthrough

This walkthrough guides you through the process of translating an Inventor model into the STL format. The Inventor model consists of an assembly file (_.iam), which contains references to several part (_.ipt) files. This walkthrough deals with the case where each of these files are uploaded to cloud storage individually, and the referencing pattern is defined within the translation job. This workflow is particularly useful when a file is referenced by multiple designs.

Besides this workflow, Model Derivative supports a workflow where you can package the design with the referenced files as a zip file. Such a workflow is demonstrated in the walkthrough [Translate a Source File Packaged as a Zip File](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/translate-zip-to-stl/).

## Postman Collection for this walkthrough

We also provide a [Postman](https://www.getpostman.com/) Collection containing the HTTP requests used in this walkthrough. On the Postman Collection, requests are grouped by task. The group has the same name as the corresponding task in this walkthrough.

![../../../../_images/tutorial_03_postman_forge_menu_01.png](https://developer.doc.autodesk.com/bPlouYTd/A360-platform-viewing-docs-master-766554/_images/tutorial_03_postman_forge_menu_01.png)

Similarly, requests are named such that you can easily match a Step in this walkthrough with the corresponding HTTP request in the Postman Collection.

![../../../../_images/tutorial_03_postman_forge_menu_02.png](https://developer.doc.autodesk.com/bPlouYTd/A360-platform-viewing-docs-master-766554/_images/tutorial_03_postman_forge_menu_02.png)

The Postman Collection is hosted in a [GitHub repository](https://github.com/autodesk-platform-services/aps-tutorial-postman/tree/master/ModelDerivative_03), and is accompanied by a set of instructions.

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/translate-source-file-containing-xref/about-this-tutorial
