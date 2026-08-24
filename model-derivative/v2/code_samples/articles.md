---
title: "Blog Posts"
url_path: code_samples/articles
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "code-sample"
api_version: "v2"
section: "code_samples"
category: "articles"
---
# Blog Posts

The following blog posts cover topics related to the Model Derivative API.

## 2025–2026 Blog Posts

### APS Bengaluru Accelerator 2025 - Recap

[https://aps.autodesk.com/blog/aps-bengaluru-accelerator-2025-recap](https://aps.autodesk.com/blog/aps-bengaluru-accelerator-2025-recap)

Published 13 Feb 2025 (Community/Event). Recap of a four-day accelerator in Bengaluru where teams built applications using multiple APS APIs including Model Derivative, culminating in a Demo Day. Showcases community use of the API across real-world integration scenarios.

### Translate Composite Revit Model with Model Derivative API

[https://aps.autodesk.com/blog/translate-composite-revit-model-model-derivative-api](https://aps.autodesk.com/blog/translate-composite-revit-model-model-derivative-api)

Published 4 Jun 2025 (Tips & Tricks). Explains how to handle composite Revit models that include multiple linked RVT files. The solution requires packaging all related files into a single ZIP archive, then specifying the `rootFilename` parameter and setting `compressedUrn` to `true` in the translation job request.

### Rate Limiting

[https://aps.autodesk.com/blog/rate-limiting](https://aps.autodesk.com/blog/rate-limiting)

Published 14 Jun 2025 (Platform Update). Explains how rate limiting works across APS APIs, including the 429 response code and `Retry-After` header. Describes the process for requesting rate limit increases by submitting a formal change request with usage analysis.

### Revit Support Updates in Model Derivative API

[https://aps.autodesk.com/blog/revit-support-updates-model-derivative-api](https://aps.autodesk.com/blog/revit-support-updates-model-derivative-api)

Published 18 Jun 2025 (Announcement). Details the API’s alignment with Revit’s product support lifecycle, distinguishing between actively supported versions (Revit 2023–2026) and maintenance mode versions (Revit 2016–2022). Lists supported output formats for RVT files including SVF, SVF2, DWG, and IFC.
|

### Expanding Regional Offerings in UK, Germany, Japan, India, and Canada

[https://aps.autodesk.com/blog/expanding-regional-offerings-uk-germany-japan-india-and-canada](https://aps.autodesk.com/blog/expanding-regional-offerings-uk-germany-japan-india-and-canada)

Published 2 Jul 2025 (Announcement). Announces Model Derivative API availability in five new regions (UK, Germany, Japan, India, Canada) specified using ISO 3166 alpha-3 country codes. Viewer SDK 7.109.1 or later is required for automatic region routing.

### Monitor Translation Progress

[https://aps.autodesk.com/blog/monitor-translation-progress](https://aps.autodesk.com/blog/monitor-translation-progress)

Published 4 Sep 2025 (Tips & Tricks). Recommends using webhooks to monitor file translation status instead of polling. Covers three event-driven scenarios using `extraction.finished`, `extraction.updated`, and `dm.version.modified` events depending on how the file was uploaded.

### Advanced PDF Option for IDW on SVF(2) POST Job

[https://aps.autodesk.com/blog/advanced-pdf-option-idw-svf2-post-job](https://aps.autodesk.com/blog/advanced-pdf-option-idw-svf2-post-job)

Published 5 Sep 2025 (Tips & Tricks). Announces support for PDF conversion of IDW files (AutoCAD Mechanical 2D drawings) during translation. Enabled by adding `"advanced": {"2dviews": "pdf"}` to the output configuration of a translation job request.
|

### Vibe Coding - Part 1: Build an APS Viewer in Minutes

[https://aps.autodesk.com/blog/vibe-coding-part-1-build-aps-viewer-minutes](https://aps.autodesk.com/blog/vibe-coding-part-1-build-aps-viewer-minutes)

Published 11 Sep 2025 (Learning Content). Demonstrates rapid prototyping of an APS Viewer application using AI-assisted coding in Cursor IDE. Uses Model Derivative API to load and display 3D models (Revit, Fusion, Inventor, AutoCAD) in a browser with interactive visualization.

### Model Derivative API – IFC to SVF2 Translation Method v4 and Migration Tips

[https://aps.autodesk.com/blog/model-derivative-api-ifc-svf2-translation-method-v4-and-migration-tips](https://aps.autodesk.com/blog/model-derivative-api-ifc-svf2-translation-method-v4-and-migration-tips)

Published 5 Nov 2025 (Platform Update). Introduces IFC conversion method v4, a unified approach that no longer relies on Navisworks or Revit. Includes enhanced IFC4/IFC4x3 support, revised property naming conventions, improved geometry handling, and migration tips for existing integrations.

## Earlier Blog Posts

### Specify what Extractor version to use when translating Revit models

[https://aps-dev.autodesk.com/blog/model-derivative-extractor-version-now-available-revit](https://aps-dev.autodesk.com/blog/model-derivative-extractor-version-now-available-revit)

This article explains how new releases of the Revit Extractor are made, and how you can test the pre-release version before it gets released for general availability. It also explains how to force the Model Derivative service to use a previous version of an extractor. This can be useful if your application fails due to incompatibility with a new extractor that was released for general availability.

### Retrieve metadata with advanced queries

[https://aps-dev.autodesk.com/blog/advanced-query-model-derivative-api](https://aps-dev.autodesk.com/blog/advanced-query-model-derivative-api)

This article explains how to use advanced queries to retrieve model properties at a very granular level.

### Easy way to download derivatives

[https://aps-dev.autodesk.com/blog/download-derivative-files-using-new-signedcookies-api-without-setting-cookies-first-header](https://aps-dev.autodesk.com/blog/download-derivative-files-using-new-signedcookies-api-without-setting-cookies-first-header)

This article offers a code sample and useful tips on using signed cookies for secure derivative downloads.

### Download Revit 2D views as PDFs

[https://aps-dev.autodesk.com/blog/download-your-revit-2d-views-pdfs](https://aps-dev.autodesk.com/blog/download-your-revit-2d-views-pdfs)

This article explains how to use the Model Derivative API to quickly generate PDFs from Revit models.

### Advanced options for translating Revit and DWG 2D views to SVF2

[https://aps-dev.autodesk.com/blog/advanced-option-rvtdwg-2d-views-svf2-post-job](https://aps-dev.autodesk.com/blog/advanced-option-rvtdwg-2d-views-svf2-post-job)

This article explains how to override the defaults to control the results when translating 2D views to SVF2 via SmartPDF.

### Translate models to OBJ

[https://aps-dev.autodesk.com/blog/translate-files-obj](https://aps-dev.autodesk.com/blog/translate-files-obj)

This article discusses how to use the Model Derivative API to translate models to the OBJ file format, even though direct translation from that file format to OBJ is not supported.

For a more up-to-date list, please see the [Autodesk Platform Services GitHub repositories](https://github.com/orgs/autodesk-platform-services/repositories?q=autodesk-model-derivative).

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/code_samples/articles
