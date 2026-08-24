---
title: "REST API Changelog"
url_path: change_history/changelog
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "changelog"
api_version: "v2"
section: "change_history"
category: "changelog"
---
# REST API Changelog

## Release Date: 2026-05-01

### Changed
- Fetch Thumbnail operation (`GET /modelderivative/v2/designdata/{urn}/thumbnail`):  The `x-ads-name` response header now returns the filename in an **encoded form**.
- A new companion header `x-ads-name-encoding` indicates the encoding used and is always included with `x-ads-name`.
- You must decode the `x-ads-name` value before use. For ASCII-only filenames, decoding has no effect.

## Release Date: 2026-03-31

### Added
- Response sanitization using Autodesk’s OWASP-based sanitizer to ensure JSON payloads are syntactically correct and XSS-safe. As a result, script injections, broken arrays, malformed JSON, and other harmful payloads are blocked.

## Release Date: 2025-12-15

### Added
- Support for Alias 2026 to SVF/SVF2, STEP, IGES, STL, and OBJ translation.
- Support for SMT 232 to F3D, SVF, SVF2, and OBJ translation.

## Release Date: 2025-10-22

### Added
- Support for Parasolid v38.0 to SVF/SVF2 translation.
- Support for NX2506 series files for SVF/SVF2 and OBJ translation.

## Release Date: 2025-08-27

### Added
- Support for 3DEXPERIENCE CATIA (formerly known as CATIA V6) .3dxml files to SVF/SVF2 and thumbnail translation.
- Support for USD (.usd, .usda, .usdc, .usdz) files to SVF/SVF2 and thumbnail translation.
- Support for Creo 12 (*.prt and *.asm) files to SVF/SVF2 and OBJ translation.
- Support for generating 2D views as PDF when translating IDW files to the SVF/SVF2 formats, using advanced option `formats.advanced.2dviews`.

## Release Date: 2025-06-30

### Added
- Introduced new enum values to store and access derivative data in the data centers dedicated to serve the following regions.  `CAN` : Data centre for the Canada region.
- `DEU` : Data centre for the Germany region.
- `IND` : Data centre for the India region.
- `JPN` : Data centre for the Japan region.
- `GBR` : Data centre for the United Kingdom region.

## Release Date: 2025-06-02

### Added
- Support for .SKP files from SketchUp 2025 for SVF/SVF2 and OBJ translation.
- Support for CATPart and CATProduct files from CATIA V5-6R2025 for SVF/SVF2 translation.
- Support for NX2412 series files for SVF/SVF2 and OBJ translation.

## Release Date: 2025-04-13

### Added
- Support for Navisworks 2026 to SVF/SVF2 and Thumbnail translation.

## Release Date: 2025-02-09

### Added
- Support for SolidWorks 2025 (SLDPRT, SLDASM) to SVF/SVF2 and OBJ translation.
- Support for Solid Edge 2025 (ASM, PAR, PSM) to SVF/SVF2 translation.

## Release Date: 2024-12-17

### Added
- Support for JT 10.10 to SVF/SVF2 translation.
- Support for Parasolid v37 to SVF/SVF2 translation.
- Support for .SKP files created from SketchUp 2024.

## Release Date: 2024-12-04

### Released
- Released a new version of the DWG extractor.

### Fixed
- Issue where turned off layers from XREFs become visible in SVF/SVF2 derivatives generated from DWG models.
- Issue of 3D views not having the correct color in SVF/SVF2 derivatives generated from DWG models.
- Issue where the Shade option is set to Legacy Hidden when performing 2D plot.

## Release Date: 2024-11-25

### Released
- Released a new version of the Revit extractor. The beta version of the Revit extractor that was initially released for beta testing on 2024-09-12 is now generally available.

### Fixed
- The issue where Revit to SVF/SVF2 translation jobs would fail when encountering long view names is now fixed. **Important:** The fix for long view names implements a new naming convention in the output path. The folder containing the SVF/SVF2 derivative will now be a GUID instead of the view name. For example: Before this change, the manifest contained the view name (_From Yard 736512_) in the output path: 

```
"urn": "urn:adsk.viewing:fs.file:<URN>/output/Resource/3D View/From Yard 736512/From Yard.svf"
```

  Now, it will use the GUID of the view (_80c6b7e4-2dd7-4a4e-ae16-489c86c3eac2-000b3d00_) in the output path: 

```
"urn": "urn:adsk.viewing:fs.file:<URN>/output/Resource/3D View/80c6b7e4-2dd7-4a4e-ae16-489c86c3eac2-000b3d00/From Yard.svf"
```

  If your application uses the view name based naming convention, you need to update your code to use the GUID-based naming convention to prevent runtime errors. Until you update the code, you can still use the previous stable version of the Revit extractor for your translation jobs. **To use the previous stable version in a translation job:**   Set `output.formats.advanced.extractorVersion` in the request body to `previous`, when submitting a translation job with the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation.

The translation job that gets kicked off will use the previous stable version of the extractor.

**Note:** If you find any issues with this change, please contact us at [https://aps.autodesk.com/get-help](https://aps.autodesk.com/get-help).

## Release Date: 2024-11-04

### Deprecated
- Deprecated the `APAC` enum value for the `region` header in all operations.

### Added
- Added the new `AUS` enum value for the `region` header to represent data centers that serve the Australia region.

## Release Date: 2024-10-17

### Added
- Support for NX2406 series to SVF/SVF2 and OBJ translation.

## Release Date: 2024-09-12

### Released
- Released a new beta version of the Revit extractor. To use this new version instead of the stable release:  Set `output.formats.advanced.extractorVersion` in the request body to `next`, when submitting a translation job with the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation. The translation job that gets kicked off will use the beta version of the extractor.

### Fixed

This version fixes the issue where Revit to SVF/SVF2 translation jobs would fail when encountering long view names.

**Important Change: New Naming Convention**

The fix for long view names implements a new naming convention in the output path. The folder containing the SVF/SVF2 derivative will now be a GUID instead of the view name.

For example:

Before this change, the manifest contained the view name (_From Yard 736512_) in the output path:

```
"urn": "urn:adsk.viewing:fs.file:<URN>/output/Resource/3D View/From Yard 736512/From Yard.svf"
```

Now, it will use the GUID of the view (_80c6b7e4-2dd7-4a4e-ae16-489c86c3eac2-000b3d00_) in the output path:

```
"urn": "urn:adsk.viewing:fs.file:<URN>/output/Resource/3D View/80c6b7e4-2dd7-4a4e-ae16-489c86c3eac2-000b3d00/From Yard.svf"
```

If your application uses the view name based naming convention, you need to update your code to use the GUID-based naming convention to prevent runtime errors.

**Note:** If you find any issues with this change, please contact us at [https://aps.autodesk.com/get-help](https://aps.autodesk.com/get-help). We do not consider this a breaking change and it will soon become the stable release version.

## Release Date: 2024-09-03

### Updated
- **Civil 3D Object Enabler:** Resolved a compatibility issue that sometimes prevented Civil 3D 2025 DWG files from being translated to SVF/SVF2.
- **Auto Recovery:** Fixed an issue that sometimes prevented automatic recovery of corrupt DWG files.

## Release Date: 2024-08-14

### Improved
- Enhanced support for F3D to OBJ translations. This upgrade handles texture data referenced by the materials library for OBJ models. Texture data is now packaged as a zip file and is included with the manifest. This enables calling applications to get information about the texture map and color of a model. The following manifest illustrates how derivative information is packaged: 

```
 {
    "type": "manifest",
    "hasThumbnail": "false",
    "status": "success",
    "progress": "complete",
    "region": "US",
    "urn": "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl8yMDIwXzA5XzE1L29zc1NvdXJjZUZpbGVPYmplY3RLZXkuZjNk",
    "version": "1.0",
    "derivatives": [
        {
            "name": "ossSourceFileObjectKey.f3d",
            "hasThumbnail": "false",
            "status": "success",
            "progress": "complete",
            "outputType": "obj",
            "children": [
                {
                    "guid": "0189b236-e89c-4115-8f16-7d0cbb3d7e42",
                    "type": "resource",
                    "role": "obj",
                    "status": "success",
                    "progress": "complete",
                    "mime": "application/octet-stream",
                    "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl8yMDIwXzA5XzE1L29zc1NvdXJjZUZpbGVPYmplY3RLZXkuZjNk/output/files/539a9ce6-fcc0-4d04-97a9-67765963affe/ossSourceFileObjectKey.mtl"
                },
                {
                    "guid": "62d019c6-6ba1-4889-9d38-483485865269",
                    "type": "resource",
                    "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl8yMDIwXzA5XzE1L29zc1NvdXJjZUZpbGVPYmplY3RLZXkuZjNk/output/files/539a9ce6-fcc0-4d04-97a9-67765963affe/ossSourceFileObjectKey.obj",
                    "mime": "application/octet-stream",
                    "role": "obj",
                    "status": "success"
                },
                {
                    "guid": "555fca76-07fb-4939-8aca-e36dba451b1b",
                    "type": "resource",
                    "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl8yMDIwXzA5XzE1L29zc1NvdXJjZUZpbGVPYmplY3RLZXkuZjNk/output/files/539a9ce6-fcc0-4d04-97a9-67765963affe/ossSourceFileObjectKey.zip",
                    "mime": "application/octet-stream",
                    "role": "obj",
                    "status": "success"
                }
            ]
        }
    ]
}
```

## Release Date: 2024-08-13

### Added
- Support for DWG files produced by AutoCAD 2025 and AutoCAD 2025 based products and toolsets. This upgrade enables you to translate DWG files containing custom objects produced by products such as Civil 3D 2025 and the AutoCAD Mechanical 2025 toolset to the SVF and SVF2 formats.

### Improved
- 3D support for DWG files with high polyline counts, when `formats.advanced.2dViews` is set to `pdf`.

## Release Date: 2024-07-19

### Added
- Support for Creo 11 (*.prt and *.asm) to SVF/SVF2 and OBJ translation.

### Fixed
- Issue where some IFC models did not translate successfully.

## Release Date: 2024-06-15

### Added
- Header named `x-ads-derivative-format` to the following operation. This header specifies how to interpret Object IDs when the design has legacy SVF derivatives generated by the BIM Docs service.  [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST/)

## Release Date: 2024-06-01

### Released
- Released a new IFC loader for translating the IFC input format to SVF and SVF2. Enable the new loader by setting _output > formats > advanced > conversionMethod_ to `v4` in the request body. Features of the new version include:  **IFC 4.3 support**: The `v4` conversion method now supports the latest official release of the IFC standard, IFC 4.3 (IFC 4.3.2).
- **Enhanced performance**: In some cases, the new loader is up to 65% faster than `v3`.
- **Improved model fidelity**:  Relationships with element GUIDs are now supported for better data integrity.
- Healing algorithms for complex surfaces like spiral ramps have been improved.
- Material Splitting functionality has been implemented to handle complex material breakdowns within elements.
- **Fixes**:  An issue causing missing stiffeners in some sheet metal elements has been resolved.
- Model placement behavior is now consistent with the Open IFC Viewer, fixing an issue where some models were rotated incorrectly.

### Added
- Support for Alias 2025 to SVF/SVF2, STEP, IGES, STL, and OBJ translation.
- Support for CATPart and CATProduct files created from CATIA V5-6R2024.
- Support for IFC 4.3 with the IFC `v3` conversion method. The Revit IFC Loader was enhanced to support IFC 4.3.2, which is now available with the `v3` conversion method.

## Release Date: 2024-04-09

### Added
- A new attribute named `phaseIds` to the manifest, which uniquely identifies the phase a model view was generated from. This attribute is present only if the source design is a Revit file.

## Release Date: 2024-03-19

### Added
- **[Beta]** Introduced the new value `APAC` to the `region` header, for beta testing. This new value allows you to store and access derivative data in the data center dedicated to serve the Australia region. The region header is available on all operations except List Supported Formats. **Note:** Beta features are subject to change. Please avoid using them in production environments.
- Support for Alias 2024 to SVF/SVF2, STEP, IGES, STL, and OBJ translation.
- Support for Autodesk Inventor 2025 to IGES, OBJ, STEP, and STL translation.
- Support for NX2312 series to SVF/SVF2 and OBJ translation.
- Support for JT 10.9 to SVF/SVF2 translation.
- Support for Rhino 8 to SVF/SVF2 translation.
- Support for SolidWorks 2024 (SLDPRT, SLDASM) to SVF/SVF2 and OBJ translation.
- Support for Solid Edge 2024 (ASM, PAR, PSM) to SVF/SVF2 translation.

## Release Date: 2024-01-30

### Improved
- The streaming service for SVF2 has been further improved, resulting in faster load times for all models. This improvement is particularly apparent with large models.

## Release Date: 2024-01-24

### Added
- Geolocation metadata support for DWG to SVF translations of 2D drawings. **Note:** Support is enabled only when the `formats.advanced.2dviews` attribute in the request body of the [POST /job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/job-POST/) request is set to `pdf`.

### Fixed
- A regression where PDF underlays were not supported for DWG to SVF translations.

## Release Date: 2024-01-18

### Added
- Support for Revit 2025 Beta, Revit 2024.2, and Revit 2023.1 to SVF/SVF2, IFC, and DWG translation. **Note:** Only Revit 2D Sheets to DWG is supported.

## Release Date: 2023-12-05

### Added
- Support for AutoCAD Plant 3D linetypes.

### Fixed
- Fixed a regression where AutoCAD DWT files were not considered regular drawings.

## Release Date: 2023-12-01

### Added
- Added a new header named `region` for all operations that support an EMEA specific URI. As a result:  You can now specify where derivative data is stored in two ways:  Using a global URI in conjunction with the `region` header **(Recommended)**.
- Using an EMEA specific URI (restricted to act within the EMEA region only).
- If you use the EMEA specific URI for any operation, the Model Derivative service ignores the `region` header. For operations that have a `region` attribute in the request payload, if the value you set conflicts with the URI, the Model Derivative service returns an error.
- The `region` header takes precedence over the `output.destination.region` attribute in the request body of the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation.
- The `region` header takes precedence over the `region` attribute in the request body of the [POST references](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/urn-references-POST/) operation.

### Deprecated
- The `output.destination.region` attribute in the request body of the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation is deprecated. We plan to retire this attribute in 6 months.
- The `region` attribute in the request body of the [POST references](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/urn-references-POST/) operation is deprecated. We plan to retire this attribute in 6 months.

## Release Date: 2023-11-27

### Added
- Support for Parasolid v36 to SVF/SVF2 translation.

## Release Date: 2023-10-17

### Added
- Support for Creo 10 (*.prt and *.asm) to SVF/SVF2 and OBJ translation.

## Release Date: 2023-10-16

### Added
- Support for DWG files produced by AutoCAD 2024 and AutoCAD 2024 based products and toolsets. This upgrade enables you to translate DWG files containing custom objects produced by products such as Civil 3D 2024 and the AutoCAD Mechanical 2024 toolset to the SVF and SVF2 formats.

## Release Date: 2023-09-18

### Added
- Support for NX 2306 to SVF/SVF2 and OBJ translation.

## Release Date: 2023-08-26

### Enhanced
- Added support for more 3D classes such as AcDb3dPolyline to be translated to SVF/SVF2.

### Fixed
- Issue that prevented some properties of entities in DWG models from being extracted.
- Regression where the system was unable to translate some DWG models that it had no issues with previously.

## Release Date: 2023-08-21

### Fixed
- Issue with RVT to SVF/SVF2 translation that resulted in duplicate Element IDs within object names.

## Release Date: 2023-08-09

### Fixed
- Issue with DWG to SVF translation impacting the linking of topography modeled in Civil 3D to Revit. **Note:** This issue occurred only when `formats.advanced.2dViews` was set to `pdf`.

## Release Date: 2023-08-03

### Added
- Support for Catia V4 files from CATIA V5-6R2023.

### Fixed
- Several issues related to reading Catia V4 and Catia V5 files.

## Release Date: 2023-07-13

### Improved
- The DWG extractor has been updated, leading to better support for Civil 3D and subentity handling for SVF/SVF2.
- The streaming service for SVF2 has been revamped, leading to faster load times for most models.

## Release Date: 2023-09-18

### Added
- Support for NX 2306 to SVF/SVF2 and OBJ translation.

## Release Date: 2023-08-26

### Enhanced
- Added support for more 3D classes such as AcDb3dPolyline to be translated to SVF/SVF2.

### Fixed
- Issue that prevented some properties of entities in DWG models from being extracted.
- Regression where the system was unable to translate some DWG models that it had no issues with previously.

## Release Date: 2023-08-21

### Fixed
- Issue with RVT to SVF/SVF2 translation that resulted in duplicate Element IDs within object names.

## Release Date: 2023-08-09

### Fixed
- Issue with DWG to SVF translation impacting the linking of topography modeled in Civil 3D to Revit. **Note:** This issue occurred only when `formats.advanced.2dViews` was set to `pdf`.

## Release Date: 2023-08-03

### Added
- Support for Catia V4 files from CATIA V5-6R2023.

### Fixed
- Several issues related to reading Catia V4 and Catia V5 files.

## Release Date: 2023-07-13

### Improved
- The DWG extractor has been updated, leading to better support for Civil 3D and subentity handling for SVF/SVF2.
- The streaming service for SVF2 has been revamped, leading to faster load times for most models.

## Release Date: 2023-07-10

### Improved
- DWG to SVF/SVF2 translation, which results in smoother 3D models for DWG files with 3DDWFPREC larger than 2.

### Fixed
- Issue that caused some DGN to SVF/SVF2 translation jobs to fail.
- Issue that caused DWG to SVF/SVF2 translations involving CADMep to fail when generating 2D views as PDF.
- Issues with translating DWG files of unusual paper sizes.

## Release Date: 2023-06-13

### Added
- Group selection support for anonymous cell elements when translating DGN files to SVF/SVF2. The impact of this enhancement is visible only when you display the derivative in the Viewer. In order to see the effect, you must set the Selection Mode (Settings > Configuration > Selection Mode) to “Last Object”. After that, when you click a geometry, the top anonymous cell is highlighted both in the Model Browser and the Viewer canvas. Furthermore, related properties are also highlighted in the Properties modal.

### Fixed
- Issue with translating STEP files exported from Creo to SVF/SVF2, where numbered instance names would contain only numbers.
- Issue with DGN to SVF/SVF2 translation, which generated extra hierarchy structures for DGN leaf elements (Parametric solid/Parametric cell/Extended element/Shared cell).

## Release Date: 2023-05-16

### Added
- Support for CATPart and CATProduct files created from CATIA V5-6R2023.
- Support for .SKP files created from SketchUp 2023.

### Fixed
- Issue with DGN to SVF/SVF2 translation, which resulted in incorrect transfer of MicroStation elements of transparency and color to the Viewer.

## Release Date: 2023-04-26

### Added
- Support for Revit 2024 to SVF/SVF2, IFC, and DWG translation. **Note:** Only Revit 2D Sheets to DWG is supported.

## Release Date: 2023-03-27

### Added
- Support for Autodesk Inventor 2024 to IGES, OBJ, STEP, and STL translation.
- Support for Solid Edge 2023 (ASM, PAR, PSM) to SVF/SVF2 translation.
- Support for Parasolid v35 to SVF/SVF2 and OBJ translation.

### Fixed
- Issue with DGN to SVF/SVF2 translation, which resulted in incorrect transfer of MicroStation file coordinates to the Viewer.
- Issue with DGN to SVF/SVF2 translation, which caused objects behind a virtual plane to be invisible in the Viewer. Prior to this fix, zooming beyond these objects would make them disappear.

## Release Date: 2023-03-16

### Added
- Support for Autodesk Inventor 2024 to SVF/SVF2 translation.

## Release Date: 2023-03-07

### Released
- POST Fetch Specific Properties ([POST {urn}/metadata/{modelGuid}/properties:query](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST/)) for general availability. This operation was originally released for public beta testing on 2022-06-14. It is now available for use in production environments.

## Release Date: 2023-03-06

### Added
- Rate limits for [GET /{urn}/metadata/{modelGuid}/properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET/) , [GET /{urn}/metadata/{modelGuid}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET), and [POST /{urn}/metadata/{modelGuid}/properties:query](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-query-POST/). For details, see [Model Derivative Rate Limits and Quotas](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/rate-limiting/md-rate-limits).

## Release Date: 2023-02-21

### Added
- Support for SolidWorks 2023 (SLDPRT, SLDASM) to SVF/SVF2 and OBJ translation.
- Support for NX 2212 Series to SVF/SVF2 and OBJ translation.

## Release Date: 2023-01-31

### Added
- Support for DWG files produced by AutoCAD 2023 and AutoCAD 2023 based products and toolsets. This upgrade enables you to translate DWG files containing custom objects produced by products such as Civil 3D 2023 and the AutoCAD Mechanical 2023 toolset to the SVF and SVF2 formats.
- Support for generating 2D views as PDF when translating DWG files to the SVF/SVF2 formats.

## Release Date: 2023-01-19

### Added
- Advanced options to the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation, to:  Control the format 2D views are rendered to when translating RVT files to the SVF/SVF2 formats.
- Extract linkage data when translating DGN files.

## Release Date: 2022-11-28

### Added
- Support for Alias 2023 to SVF/SVF2, STEP, IGES, STL, and OBJ translation.
- Support for NX2206 to SVF/SVF2 and OBJ translation.
- Support for Parasolid v34 to SVF/SVF2 and OBJ translation.
- Support for JT 10.8 to SVF/SVF2 translation.

## Release Date: 2022-08-08

### Added
- New advanced option (`formats.advanced.extractorVersion`) to the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation, which controls what version of the extractor/translator to use when translating RVT files to SVF or SVF2.

## Release Date: 2022-07-12

### Added
- Support for CATIA V4 files created from CATIA V5-6R2022.

## Release Date: 2022-06-14

### Added
- Beta version of a new endpoint to query properties of specified objects in a model view ([POST {urn}/metadata/{modelGuid}/properties:query](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST/)).
- The ability to specify how many levels of children to return when requesting for the object tree of a model view ([GET {urn}/metadata/{modelGuid}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET))

## Release Date: 2022-06-05

### Added
- New advanced option (`formats.advanced.hierarchy`) to the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation, which controls the hierarchy of items when a VUE file is translated to SVF or SVF2.

## Release Date: 2022-06-01

### Added
- Deprecated [GET /{urn}/manifest/{derivativeurn}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-GET) due to the deprecation of binary file transfer capabilities of underlying infrastructure.
- Introduced new endpoint [GET /{urn}/manifest/{derivativeurn}/signedcookies](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeUrn-signedcookies-GET/) to replace deprecated endpoint. The new endpoint returns a CloudFront download URL, and signed cookies to let you download derivatives.

### Updated
- All tutorials to use signed URLs for file upload and signed cookies for derivative download.

## Release Date: 2022-05-27

### Added
- Support for Creo 9 (*.prt and *.asm) to SVF/SVF2 and OBJ translation.

## Release Date: 2022-04-07

### Added
- Support for SketchUp 2022 (SKP) to SVF/SVF2 translation.
- Support for SketchUp 2022 (SKP) to OBJ translation.

## Release Date: 2022-03-24

### Added
- Support for 3ds Max 2023 to SVF/SVF2 translation.

## Release Date: 2022-03-17

### Added
- Support for Autodesk Inventor 2023 to SVF/SVF2, IGES, OBJ, STEP, and STL translation.
- Support for Revit 2023 to SVF/SVF2, IFC, and DWG translation. **Note:** Only Revit 2D Sheets to DWG is supported.

## Release Date: 2022-01-24

### Added
- Support for SolidWorks 2022 (SLDPRT, SLDASM) to SVF/SVF2 and OBJ translation.

## Release Date: 2022-01-06

### Added
- Support for Solid Edge 2022 (ASM, PAR, PSM) to SVF/SVF2 translation.

### Fixed
- Issue where DGN files sometimes failed to upload or translate.

## Release Date: 2021-10-13

### Added
- An attribute named `isMasterView` is added to the response body of the following endpoints. This attribute gives you the ability to determine if a model view contains a master view or not.  [GET /{urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET/)
- [GET /{urn}/metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET/)

## Release Date: 2021-09-07

### Added
- Support for NX 1980 Series to SVF/SVF2 translation

## Release Date: 2021-08-26

### Added
- Header named `x-ads-derivative-format` to the following endpoints. This header specifies how to interpret Object IDs when the design has legacy SVF derivatives generated by the BIM Docs service.  [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/)
- [Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-GET/)
- [Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/)

## Release Date: 2021-08-09

### Improved
- Enhanced and optimized model processing logic for translating Revit models to SVF and SVF2. As a result:  The color, material, and transparency are consistent with Revit when a model is displayed in the viewer.
- The SVF file size and memory footprint is reduced.
- Room export performance is better.
- The Revit ElementID is now exported as a separate field in the PropertyDB.

### Fixed
- Issue where some properties are not exported or are incorrect.
- Issue where some parameter groups are not exported.
- Exceptions with some special characters, which results in a higher translation success rate.

## Release Date: 2021-07-23

### Added
- Support for DWG files produced by AutoCAD 2022 and AutoCAD 2022 based products and toolsets. This upgrade enables you to translate DWG files containing custom objects produced by products such as Civil 3D 2022 and the AutoCAD Mechanical 2022 toolset to the SVF and SVF2 formats.

## Release Date: 2021-06-30

### Released
- Production version of the SVF2 translator, to prepare models/designs for rendering with the Viewer SDK. See [Supported Translation Formats](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/supported-translations/) for the full list of supported formats. See [Prepare Models for Online Viewing](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/basics/preperation/) for information about the SVF2 format.

## Release Date: 2021-06-14

### Added
- Support for Creo 8.

### Changed
- When translating an Inventor model, the Model Derivative service now translates the last active [design view representation](https://help.autodesk.com/view/INVNTOR/2022/ENU/?guid=GUID-F18A8686-E8E9-4BEE-ACD1-65A7EE35E132). Previously, it always translated the “Master” design view representation.

## Release Date: 2021-05-12

### Added
- Support for Navisworks 2022 to SVF translation.

### Improved
- Translating IFC files to SVF with the conversionMethod advanced option set to `modern has changed as follows:  IfcElementAssembly items are now handled. Items in the assembly, including items such as IfcCurtainWall, are now placed in the tree as children of the IfcElementAssembly item.
- Many items that previously ended up in <No Level> should now appear in the correct part of the tree.
- Resolving the type name of items is now improved. So, items with a specified type name that overrides the name of their type object should now show correctly.
- The IFC Entity name of an item is now extracted and placed into the property Element/IfcClass (although the value is not strictly correct sometimes). As a result, item grouping should no longer show entities like IfcSpace and IfcSpaceType as separate groups.

### Changed
- When translating an Inventor model containing [model states](https://help.autodesk.com/view/INVNTOR/2022/ENU/?guid=GUID-AF380945-50B6-48B3-9D3A-578B85FFA260), the Model Derivative service now translates the last active model state. Previously, it always translated the “Master” model state.

## Release Date: 2021-04-19

### Added
- Support for CATIA V4 files created from CATIA V5-6R2021.

### Improved
- The extraction process for the DGN and SKP formats was improved. As a result, you can expect better performance with DGN and SKP to SVF translation.

## Release Date: 2021-04-06

### Added
- Support for Autodesk Inventor 2022 to IGES, OBJ, STEP, and STL translation.

## Release Date: 2021-03-24

### Added
- Support for 3ds Max 2022 to SVF translation.

## Release Date: 2021-03-20

### Changed
- The maximum download size for derivatives with URNs ending with `.db` or `.sdb` was reduced from 256MB to 64MB. If the requested derivative is larger than 64MB, use the `Range` header request parameter to download the derivative in chunks.

## Release Date: 2021-03-19

### Added
- Support for SketchUp 2021 to SVF translation.
- Support for SketchUp 2021 to OBJ translation.

## Release Date: 2021-02-25

### Added
- Support for JT 10.6, Rhino 7, and NX 1953 Series to SVF translation.
- Support for NX 1953 Series to OBJ translation.

## Release Date: 2021-02-01

### Improved
- The [GET metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) and [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET) operations have been significantly optimized. So:  Metadata extraction requests for very large models can now be processed reliably.
- The 300 MB quota limit for [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET), when called with the `objectid` query string parameter, is removed.
- The response time for [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET), when called with the `objectid` query string parameter, is reduced, especially for large models.

## Release Date: 2021-01-21

### Retired
- Support for RCP to SVF translation was removed.

## Release Date: 2021-01-13

### Added
- Support for Solid Edge 2021 (ASM, PAR, PSM) to SVF translation.
- Support for SolidWorks 2021 (SLDPRT, SLDASM) to SVF and OBJ translation.

## Release Date: 2020-10-28

### Added
- The Arial Narrow and Artifact fonts to the DWG extractor, which resolves the issue of incorrect font substitution of text.
- Support for DWG files produced by Civil 3D 2021 Update 1.

### Implemented
- Improved handling of drawings needing recovery.

## Release Date: 2020-10-21

### Released
- A beta version of the SVF2 translator, to prepare models/designs for rendering with the Viewer. See [Supported Translation Formats](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/supported-translations/) for the full list of supported formats. See [Prepare Models for Online Viewing](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/basics/preperation/) for information about the SVF2 format.

### Added
- Options to the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation to specify SVF2 as an output type.

## Release Date: 2020-10-13

### Added
- Support for files produced by Autodesk Inventor 2021. See [Supported Translation Formats](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/supported-translations/) for the list of formats Inventor files (IAM and IPT) can be translated to.

## Release Date: 2020-09-07

### Added
- Advanced options to the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation, which control how Navisworks files are translated to SVF.
- Advanced options to the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation, which control how IFC files are translated to SVF.

### Deprecated
- The request body parameter _output > formats > advanced > switchLoader_ for the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation is deprecated.

## Release Date: 2020-08-27

### Added
- Support for 3ds Max 2021 Update 2 to SVF translation. This release continues to improve the physical material support by resolving some minor issues. In conjunction with viewer updates, the issue of bump maps being flipped is resolved. This includes in some cases the wrong normal values for vertexes that were exported by 3ds Max. We also added support for Specular/Gloss PBR materials.

## Release Date: 2020-08-25

### Added
- Support for Creo 7.
- Support for CATIA V4 files created from CATIA V5-6R2020.

### Enhanced
- DGN file translation performance.
- CATIA V5 file translation performance.

## Release Date: 2020-08-17

### Fixed
- Issue with 2D sheet sizing when translating DWG files to SVF, where parts of a drawing would sometimes go missing or extra whitespace would sometimes get introduced.

## Release Date: 2020-07-10

### Added
- Support for DWG files produced by AutoCAD 2021 based products and toolsets. This upgrade enables you to translate DWG files containing custom objects produced by products such as Civil 3D 2021 and the AutoCAD Mechanical 2021 toolset to the SVF format.

## Release Date: 2020-06-02

### Added
- Support for 3ds Max 2021 Update 1 to SVF translation. This release extends material handling to support physical materials. This feature provides better appearance qualities in the SVF output, and subsequently in the Viewer SDK. _Notes:_  You must use the Viewer SDK version 7.13.1 or higher to make use of the new physical material functionality.
- Currently, the new physical material functionality does not display bump maps correctly (they are flipped, so positive result bump effects are viewed as negative, and vise-versa).

## Release Date: 2020-05-18

### Added
- Support for SketchUp 2020 and NX 1899 to OBJ translation.
- Support for Alias 2021 to STEP, IGES and STL translation.

## Release Date: 2020-05-08

### Added
- Support for Alias 2021, SketchUp 2020, CATIA V5-6R2020, NX 1899 to SVF translation.

## Release Date: 2020-04-26

### Added
- Added size limit for [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET), when called with the `objectid` query string parameter.
- Added size limit for [GET derivative](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-GET).

## Release Date: 2020-03-23

### Added
- Support for Solid Edge 2020 (ASM, PAR, PSM) to SVF translation.

## Release Date: 2020-03-16

### Added∏
- Added rate limit for [GET metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) and [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET), when called with the `forceget` query string parameter.

## Release Date: 2020-01-10

### Added
- Added new endpoint [HEAD derivative](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-HEAD) to get metadata about the specified derivative.

## Release Date: 2019-09-09

### Added
- Added optional request body parameter `*formats*.*advanced*.generateMasterViews` for the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation to allow users to generate master views when translating from the Revit input format to SVF.

## Release Date: 2019-07-11

### Added
- Added `x-ads-force` header in [GET metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) and [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET) to force retrieve the object tree even though it failed to be retrieved or timed out (generated `404` with error message) previously.
- Added an optional request body parameter (misc > workflowAttribute) for the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation to allow passing a custom attribute that can be used for Webhook event handling.

## Release Date: 2018-12-13

### Deprecated
- The Navisworks IFC loader for IFC to SVF translation is deprecated.

### Added
- A new optional request body parameter (output > formats > advanced > switchLoader) for the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation is introduced to switch from the Navisworks IFC loader to the new Revit IFC loader.

## Release Date: 2018-10-15

### Added
- Support for 2D DGN (*.dgn, *.i.dgn) to SVF translation.
- Support for 3D DGN custom properties.
- Support for the Viewer SDK layer manager.

## Release Date: 2018-08-14

### Changed
- The [GET metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) and [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET) for large models are now optimized.
- The [GET metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) and [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET) reponse 413 if the response payload exceeded the expected maximum length (20 MB).
- Added `forceget` query string parameter for [GET metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) and [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET).

### Fixed
- The input parameter `output:formats:type` for [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) is no longer case sensitive.

## Release Date: 2018-07-18

### Added
- Support for Delcam (MPF, MSR, A) to SVF translation.

## Release Date: 2018-07-06

### Added
- Support for Eagle (SCH, BRD) to SVF translation.

## Release Date: 2018-04-26

### Fixed
- Issue with [GET metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) and [GET properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET) hanging with 202.
- Issue with `POST references`_ producing a 400 response, if some of input files are not exist.

## Release Date: 2018-02-07

### Changed
- Added support metadata and properties for 2D files.

## Release Date: 2018-01-11

### Added
- Added support for 3ds Max (VUE) to SVF translation.

## Release Date: 2017-12-21

### Changed
- Data extraction named each corresponding group with object id.

## Release Date: 2017-10-13

### Added
- Added optional request body parameters (misc > workflow) for the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation to support listen to Model Derivative events from Webhooks

## Release Date: 2017-08-30

### Added
- New API `POST references`_ for creating references for assembly design.

### Changed
- The [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation payload now supports a parameter named `checkReferences` to check references as input.
- Raised the rate limit of the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation from 100 to 500 requests per user per minute.

## Release Date: 2017-08-01

### Changed
- Added a `properties` attribute in the response body of the [GET manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET).

## Release Date: 2017-05-16

### Changed
- Added support for `viewables:read` [token scope](https://aps.autodesk.com/en/docs/model-derivative/v2/change_history/changelog/%3C/en/docs/oauth/v1/overview/scopes).

## Release Date: 2016-12-13

### Changed
- Added support material outputs for data extraction.

### Fixed
- Data extraction based on the SVF translated from NWC file no longer fails.
- A single request to translate a Revit (RVT) file into multiple formats no longer fails.

## Release Date: 2016-10-27

### Changed

The following translations are now supported:
- Revit (RVT) to Industry Foundation Class (IFC)
- Revit 2D Sheets (RVT) to DWG
- Fusion 360 (F3D) to Filmbox (FBX)

### Fixed
- Translated output fields based on the Data Management resource item URN no longer fails to download.

### Known Issues
- A single request to translate a Revit (RVT) file into multiple formats fails, sometimes.

## Release Date: 2016-09-07

### Changed
- Added a `ModelGUID` attribute in the response body of [GET manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) to identify the model view.

## Release Date: 2016-08-24

### Fixed
- Files that are translated using their Data Management resource item URN no longer fails to download.
- Translations using Data Management resource item URNs no longer fail.
- The [GET manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) no longer returns unexpected attributes.

## Release Date: 2016-08-09

### Changed
- Added support for logical Data Management resource item URN translations.
- The [GET manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) response now includes a `version` attribute with value `1.0`.
- The [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) operation response now includes a `result` attribute with value `success`.

### Fixed
- The error message for failed data extraction is no longer duplicated.

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/change_history/changelog
