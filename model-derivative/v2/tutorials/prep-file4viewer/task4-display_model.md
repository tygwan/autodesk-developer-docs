---
title: "Task 4 - Display Model in the Viewer"
url_path: tutorials/prep-file4viewer/task4-display_model
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "tutorial"
api_version: "v2"
section: "tutorials"
category: "prep-file4viewer"
---
# Task 4 – Display the Model in the Viewer

To display the SVF2 file you generated, you can create an HTML page and embed the source file URN in it (Option 1 below). Alternatively, you enter the source file URN in an HTML page we have already created for you (Option 2).

## Option 1: Embed the Source File URN in an HTML Page
- Insert an instance of the Viewer in an HTML page, and initialize it as per the instructions provided in the [Viewer Basics topic in the Viewer SDK documentation:](https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/viewer_basics/starting-html/)  

| Parameter | SVF2 |
| --- | --- |
| `api` | streamingV2 |
| `env` | AutodeskProduction2 |

2. Take the URL safe Base64-encoded URN of the source file, which you obtained in the previous task, and embed it as described in the section [Load a Model](https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/viewer_basics/starting-html#id3)
in the topic [Getting Started](https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/viewer_basics/starting-html).

**Note:** Add `urn:` to the URL safe Base64-encoded URN, when you embed it in the JavaScript code, as show in the following image.

![../../../../_images/tutorial_4_urn_in_viewer.png](https://developer.doc.autodesk.com/bPlouYTd/A360-platform-viewing-docs-master-766554/_images/tutorial_4_urn_in_viewer.png)

## Option 2: Enter the Source File URN on an existing HTML page

We have created a web page based on the instructions provided in Option 1. You can use it to verify the SVF2 file you just generated.
- Display the webpage for SVF2 by clicking the link in the following table:

| SVF2 |
| --- |
| [Show Web page](https://autodesk-platform-services.github.io/aps-tutorial-postman/display_svf2.html) |
| ![../../../../_images/tutorial_4_urn_in_html_page_svf2.png](https://developer.doc.autodesk.com/bPlouYTd/A360-platform-viewing-docs-master-766554/_images/tutorial_4_urn_in_html_page_svf2.png) |
| [Source](https://github.com/autodesk-platform-services/aps-tutorial-postman/blob/master/docs/display_svf2.html) |

- In the **Access Token** box, specify the access token you obtained in Task 1 of this tutorial.
- In the **Source File URN (encoded)** box, specify the URL safe Base64-encoded URN of the source file, which you noted down in the previous task.
- Click **Submit**. You should see a screen similar to the following. ![../../../../_images/task4_default_viewable.png](https://developer.doc.autodesk.com/bPlouYTd/A360-platform-viewing-docs-master-766554/_images/task4_default_viewable.png)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/prep-file4viewer/task4-display_model
