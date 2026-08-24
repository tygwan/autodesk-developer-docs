---
title: "IFC Translations"
url_path: developers_guide/supported-translations/ifc-file-translations
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "supported-translations"
---
# IFC Translations

## Overview

IFC (Industry Foundation Classes) is an open standard for exchanging Building Information Modeling (BIM) data between design, engineering, construction, and operations applications.

The Model Derivative API supports two workflows for working with IFC files:
- **IFC → SVF/SVF2** — Translates an IFC source file into an SVF or SVF2 derivative for display in a browser with the Viewer SDK. The translation also extracts queryable metadata, and you can optionally request thumbnail output in the same job.
- **RVT → IFC** — Translates an RVT source file to IFC for interoperability with other BIM applications.

This page explains how to use the Model Derivative API for IFC translation. It covers translating IFC source files to SVF/SVF2, translating RVT source files to IFC, choosing a conversion method, configuring translation options, troubleshooting common issues, and migrating to conversion method `v4`.

## IFC → SVF/SVF2 Translation

### Supported IFC Versions

The Model Derivative API supports the following IFC schema versions. Support varies by conversion method; see the Comparison table for full detail.

| IFC Schema | Support Status | Notes |
| --- | --- | --- |
| IFC 2x3 | ✓ Supported | All conversion methods |
| IFC 4 | ✓ Supported | Full with `v4`; limited with `modern` and `v3`; not supported by `legacy` |
| IFC 4.3 | ✓ Supported | Full with `v4`; partial with `v3` |

**Note:** Use [GET List Supported Formats](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET/) for the authoritative, up-to-date list of supported translations.

### Quick Start: Translate an IFC File

Send a POST request using [POST Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) to start an IFC → SVF2 translation.

```
{
  "input": {
    "urn": "YOUR_URN"
  },
  "output": {
    "formats": [
      {
        "type": "svf2",
        "views": ["3d"]
      }
    ]
  }
}
```

Replace `YOUR_URN` with the Base64 encoded URN of your uploaded IFC file.

A successful request returns HTTP `200` with a response similar to the following:

```
{
  "result": "success",
  "urn": "YOUR_URN",
  "acceptedJobs": {
    "output": {
      "formats": [
        {
          "type": "svf2",
          "views": ["3d"]
        }
      ]
    }
  }
}
```

Poll [GET Fetch Manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET/) until the manifest `progress` value is `complete`.

For conversion method and translation options, see Conversion Methods and Translation Options.

### Conversion Methods

IFC files vary in how they encode geometry, coordinates, and metadata. The Model Derivative API provides four conversion methods to handle these variations.

#### Comparison

| Attribute | legacy | modern | v3 | v4 |
| --- | --- | --- | --- | --- |
| Processing engine | Navisworks-based | Navisworks + Revit-based | Navisworks + Revit-based | APS native IFC engine |
| IFC 2x3 | ✓ | ✓ | ✓ | ✓ |
| IFC 4 | — | Limited | Limited | ✓ |
| IFC 4.3 | — | — | Partial | ✓ |
| Large coordinates | Not supported | Not supported | Requires preprocessing | Automatic |
| Default when omitted | ✓ | — | — | — |
| Status | Maintenance | Maintenance | Maintenance | **Recommended** |

#### Recommendation

The **`legacy`** conversion method is the default when you omit `conversionMethod`.

When you call the Model Derivative API directly, Autodesk recommends **conversion method `v4`**. It provides:
- Full IFC 4.3 support
- Automatic handling of large coordinates
- Consistent metadata across SVF and SVF2 derivatives
- IFC-standard property naming
- Active development and future updates

The `legacy`, `modern`, and `v3` methods remain available for compatibility but are in maintenance mode.

#### Specifying the Conversion Method

Set the `conversionMethod` attribute in the `advanced` object of your output format.

```
{
  "input": {
    "urn": "YOUR_URN"
  },
  "output": {
    "formats": [
      {
        "type": "svf2",
        "views": ["3d"],
        "advanced": {
          "conversionMethod": "v4"
        }
      }
    ]
  }
}
```

**Note:** If you omit `conversionMethod`, the API uses the **`legacy`** conversion method. Explicitly set `conversionMethod` to `v4` for consistent behavior and the latest IFC capabilities.

### Translation Options

Use the `advanced` object to control how specific IFC elements are included in the derivative and whether they are visible by default.

| Option | Values | Description | Applies to |
| --- | --- | --- | --- |
| `conversionMethod` | `legacy`, `modern`, `v3`, `v4` | Specifies the IFC loader version | All IFC sources |
| `buildingStoreys` | `show`, `hide`, `skip` | Controls visibility of `IfcBuildingStorey` entities | `modern`, `v3`, `v4` |
| `spaces` | `show`, `hide`, `skip` | Controls visibility of `IfcSpace` entities | `modern`, `v3`, `v4` |
| `openingElements` | `show`, `hide`, `skip` | Controls visibility of `IfcOpeningElement` entities | `modern`, `v3`, `v4` |

**Value definitions:**

| Value | Description |
| --- | --- |
| `show` | Include the element and make it visible |
| `hide` | Include the element but hide it by default |
| `skip` | Exclude the element from the derivative |

**Note:** The `buildingStoreys`, `spaces`, and `openingElements` options are not available when `conversionMethod` is `legacy`.

**Example:**

```
{
  "input": {
    "urn": "YOUR_URN"
  },
  "output": {
    "formats": [
      {
        "type": "svf2",
        "views": ["3d"],
        "advanced": {
          "conversionMethod": "v4",
          "buildingStoreys": "show",
          "spaces": "hide"
        }
      }
    ]
  }
}
```

### Source File Considerations

Some translation behavior depends on the source IFC file rather than API options. Understanding these behaviors helps you diagnose unexpected results.

#### Large Coordinates

IFC files may contain geometry with large coordinate values. Large coordinates can cause objects to appear far from the origin or display incorrectly in the Viewer SDK.
- **v4:** Handles large coordinates automatically. No preprocessing required.
- **v3 and earlier:** Require preprocessing with the Large Coordinates Removal Tool before uploading. To request access to this tool, go to [Get Help](https://aps.autodesk.com/get-help).

#### Georeferencing

Georeferencing data in the source file is handled differently depending on the IFC schema version:
- **IFC 2x3:** Provides limited georeferencing support. Location is derived from the `IfcSite` attributes (`RefLatitude`, `RefLongitude`, `RefElevation`) and `IfcGeometricRepresentationContext.TrueNorth` for orientation. Longitude and latitude are assumed to be WGS84.
- **IFC 4:** Adds explicit coordinate reference system (CRS) support through a pair of entities. `IfcProjectedCRS` defines the CRS (for example, its EPSG code), and `IfcMapConversion` defines the transformation from local engineering coordinates to projected map coordinates (easting, northing, elevation, and X-axis orientation). If these entities are absent, the API may fall back to the legacy `IfcSite` attributes (`RefLatitude`, `RefLongitude`, `RefElevation`) and `IfcGeometricRepresentationContext.TrueNorth` for approximate georeferencing.

### Metadata in Translated Derivatives

After translation, retrieve metadata from the derivative using [GET Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET/). The metadata structure differs between conversion methods.

#### Properties and Property Sets

| Conversion Method | Primary Property Set Name |
| --- | --- |
| v3 | `Elements` |
| v4 | `IFC Attributes`, `IFC Type Attributes` |

The v4 method uses IFC-standard naming and removes engine-specific properties that appeared in the modern and v3 methods.

#### GUIDs and External IDs

The GUID attribute name and the external ID format both change between v3 and v4. The external ID format also depends on the output format (SVF or SVF2) and on whether the object is rooted.

| Attribute | v3 | v4 |
| --- | --- | --- |
| GUID attribute name | `IfcGUID` | `GlobalId` |
| External ID format (SVF) | Occurrence path of the tree node, for both rooted and non-rooted objects. | **Rooted objects:** Base64 encoded IFC `GlobalId`.**Non-rooted objects:** Base64 encoded value combining the parent's IFC `GlobalId` with other attributes, such as names and local strings, to keep the ID unique and persistent. |
| External ID format (SVF2) | **Rooted objects:** `IfcGUID`.**Non-rooted objects:** The parent's `IfcGUID` plus the object's own index. | Same as SVF. |

**Note:** Rooted objects are IFC objects derived from `IfcRoot` (for example, `IfcProject`, `IfcWall`). Non-rooted objects are not derived from `IfcRoot`.

The v4 method provides consistent external IDs across SVF and SVF2 outputs.

#### AecModelData.json
- **v3:** Always generated with the derivative.
- **v4:** Generated only when `IfcBuilding`, `IfcBuildingStorey`, or `IfcGrid` are present in the source file.

**Important:** If you are migrating from v3 to v4, property names and external ID formats have changed. See Migrating to Conversion Method v4.

## RVT → IFC Translation

### Quick Start: Translate an RVT File to IFC

Send a POST request using [POST Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/) to translate an RVT source file to IFC.

```
{
  "input": {
    "urn": "YOUR_RVT_URN"
  },
  "output": {
    "formats": [
      {
        "type": "ifc"
      }
    ]
  }
}
```

The default output format is IFC 2x3. Poll [GET Fetch Manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET/) until translation completes.

To specify a different format, use an export setting. See IFC Export Settings.

### IFC Export Settings

The API uses IFC export settings stored in the RVT source file to control the output format and content. You can specify a built-in export setting or use a custom setting saved in the source file.

#### Built-in Export Settings

The built-in IFC export settings available in an RVT source file depend on the Revit version used to author it.

**Revit 2021 and older**

| Export Setting Name | Output Format |
| --- | --- |
| IFC 2x3 Coordination View 2.0 | IFC 2x3 |
| IFC 2x3 Coordination View | IFC 2x3 |
| IFC 2x3 GSA Concept Design BIM 2010 | IFC 2x3 |
| IFC 2x3 Basic FM Handover View | IFC 2x3 |
| IFC 2x2 Coordination View | IFC 2x2 |
| IFC 2x2 Singapore BCA e-Plan Check | IFC 2x2 |
| IFC 2x3 Extended FM Handover View | IFC 2x3 |

**Revit 2022 and later**

| Export Setting Name | Output Format |
| --- | --- |
| IFC2x3 Coordination View 2.0 | IFC 2x3 |
| IFC2x3 Coordination View | IFC 2x3 |
| IFC2x3 GSA Concept Design BIM 2010 | IFC 2x3 |
| IFC2x3 Basic FM Handover View | IFC 2x3 |
| IFC2x2 Coordination View | IFC 2x2 |
| IFC2x2 Singapore BCA e-Plan Check | IFC 2x2 |
| IFC2x3 Extended FM Handover View | IFC 2x3 |
| IFC4 Reference View | IFC 4 |
| IFC4 Design Transfer View | IFC 4 |

#### Specifying an Export Setting

Set the `exportSettingName` attribute in the `advanced` object.

```
{
  "input": {
    "urn": "YOUR_RVT_URN"
  },
  "output": {
    "formats": [
      {
        "type": "ifc",
        "advanced": {
          "exportSettingName": "IFC4 Reference View"
        }
      }
    ]
  }
}
```

**Note:** If the RVT file contains a custom export setting with the same name, the custom setting takes precedence over the built-in setting.

### Known Limitations

The RVT → IFC translation has the following limitations:
- **Custom export settings:** Custom IFC export settings embedded in the RVT source file using IFC add-in versions newer than v22.1.1.0 are not supported. The same applies to RVT source files saved with Revit 2023 and later, because those Revit versions use IFC add-in versions newer than v22.1.1.0 by default.
- **Custom property sets:** User-defined property set files are not supported.
- **View-specific output:** The API translates the full model. View-level filters and overrides are ignored.

## Troubleshooting

### Validate Source Files Locally

Before uploading an IFC file for translation, validate it locally. This helps you confirm whether issues originate in the source file or the translation pipeline.

| Tool | Conversion method alignment | Use case |
| --- | --- | --- |
| Navisworks | `legacy`, `modern`, `v3` | Inspect geometry and review processing logs for earlier conversion methods |
| Revit (Link IFC) | `modern`, `v3` | Diagnose geometry issues that match the Revit-based processing path |
| FZKViewer | Independent | Inspect IFC structure and geometry outside the Model Derivative API pipeline |

### Common Issues

#### Model Orientation / Rotation

**Symptom:** The model appears rotated after translation.

**Cause:** The `IfcDirection` values in `IfcGeometricRepresentationContext` indicate a rotation to true north. The modern and v3 methods apply this rotation.

**Resolution:**
- Use conversion method `v4`, which follows the source file orientation.
- If you control source file preparation, export with Internal Origin as the coordinate base.

#### Incorrect Elevation

**Symptom:** The model elevation is zero or incorrect.

**Cause:** The source IFC file generated from Revit uses Shared Coordinates, which sets elevation to zero.

**Resolution:** Re-export the source file from Revit using Survey Point or Project Base Point as the coordinate base.

#### Geometry at Large Offsets

**Symptom:** Objects appear far from the origin or exploded in the Viewer SDK.

**Cause:** Large coordinate values are baked into the IFC geometry.

**Resolution:**
- Use conversion method v4, which handles large coordinates automatically.
- For v3 and earlier, preprocess the file with the Large Coordinates Removal Tool before uploading. To request access to this tool, go to [Get Help](https://aps.autodesk.com/get-help).

**Note:** If a problem persists after trying these steps, go to [Get Help](https://aps.autodesk.com/get-help) for support.

## Migrating to Conversion Method v4

If your integration uses conversion method v3 or earlier, review the following API output changes before migrating to v4.

### Key Changes

#### Metadata Changes

| Attribute | v3 | v4 |
| --- | --- | --- |
| Primary property set | `Elements` | `IFC Attributes`, `IFC Type Attributes` |
| GUID attribute name | `IfcGUID` | `GlobalId` |
| External ID format (SVF) | Occurrence path of the tree node, for both rooted and non-rooted objects. | **Rooted objects:** Base64 encoded IFC `GlobalId`.**Non-rooted objects:** Base64 encoded value combining the parent's IFC `GlobalId` with other attributes, such as names and local strings, to keep the ID unique and persistent. |
| External ID format (SVF2) | **Rooted objects:** `IfcGUID`.**Non-rooted objects:** The parent's `IfcGUID` plus the object's own index. | Same as SVF. |
| Engine-specific properties | Present | Removed |

#### Manifest Changes

| Attribute | v3 | v4 |
| --- | --- | --- |
| Conversion method identifier | `3` | `4` |
| 3D view name | Source IFC filename | `Scene` |
| `nwModelToWorldTransform` | Present | Not generated |
| `AecModelData.json` | Always generated | Conditional |

#### Model Hierarchy Changes
- Node names now include the IFC type prefix (for example, `IfcWall:Wall-001`).
- Node locations for `IfcOpeningElement`, `IfcDistributionPort`, and similar elements have changed.

## Related Resources
- [Model Derivative API Whitepaper — IFC to SVF2 Translation Method v4 (PDF)](https://autodesk-adn-transfer.s3.us-west-2.amazonaws.com/ADN+Extranet/APS/ModelDerivative_IFCv4ConversionMethod.pdf) — Detailed migration guide and technical reference
- [Revit IFC Add-in (GitHub)](https://github.com/Autodesk/revit-ifc) — Configure IFC export settings for RVT source files used in RVT → IFC translation jobs

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/supported-translations/ifc-file-translations
