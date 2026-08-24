---
title: "Field Guide"
url_path: developers_guide/field-guide
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "field-guide"
---
# Field Guide

This field guide presents the different types of objects that are part of the Model Derivative API and gives descriptions of each field as well as typical examples.

The Model Derivative API translates source files into output files (derivatives) of different formats. Information about these files, such as output file URNs and translated job statuses, is conveniently stored in manifests, which reference data about the derivatives. You can download derivatives and retrieve a list of model views, which allows you to extract additional data, such as hierarchical object trees and object properties. In addition, you can translate part of a model into an OBJ file.

## Manifest

A manifest is a JSON container that holds both translated job statuses and information about derivatives (output files), such as derivative type and derivative file URNs.

This object is returned by the [GET {urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) endpoint.

### Schema

#### Root Fields

| typestring | Type of this JSON object |
| --- | --- |
| hasThumbnailbool | Indicates if a thumbnail has been generated for the source file URN |
| statusstring | Overall status for translation jobs in the manifest
Possible values: `pending`, `success`, `inprogress`,
`failed`, `timeout` |
| progressstring | Overall progress for all translation jobs in the manifest
Possible values: `complete` or a percentage value |
| regionstring | _Coming soon_. Currently set to `US`. |
| urnstring | The Base64 (URL safe) encoded source file URN |
| derivativesarray: object | Requested output files for the source file URN |

#### Derivative Fields

Derivatives provide information about requested translations. Possible output types are DWG, FBX, IFC, IGES, OBJ, STEP, STL, SVF2, SVF, and thumbnail.

| namestring | Name of the derivative |
| --- | --- |
| hasThumbnailbool | Indicates if this derivative includes a thumbnail
Available only for `svf2`, `svf` and `thumbnail` output types. |
| statusstring | Status for requested translation for this output type
Possible values: `pending`, `inprogress`, `success`,
`failed`, `timeout` |
| progressstring | Progress for requested translations for this output type
Possible values: `complete` or a percentage value |
| outputTypestring | Translation output type.
Possible values: `dwg`, `fbx`, `ifc`, `iges`, `obj`,
`step`, `stl`, `svf2`, `svf`, `thumbnail` |
| childrenarray: object | Contains information about generated resource files that are
associated with a derivative.
These resources are grouped for `svf2` and `svf` output types, while they
are collected in a flat list for other output types. |

##### Children Attributes for SVF2/SVF Output

| guidstring | Unique identifier of the group of resources |
| --- | --- |
| typestring | The type of object this JSON object represents.
Set to `geometry` for `svf2` and `svf` |
| rolestring | Output file type
Possible values: `2d`, `3d` |
| namestring | _Optional._ Name of the group of resources |
| hasThumbnailbool | Indicates if this group of resources includes a thumbnail |
| statusstring | Status for the group of resources
Possible values: `pending`, `inprogress`, `success`,
`failed`, `timeout` |
| progressstring | Progress for the group of resources
Possible values: `complete` or a percentage value |
| outputTypestring | `svf2` or `svf`, depending on the derivative. |
| childrenarray: object | Contains information about generated files of the group of
resources that are associated with an SVF2/SVF derivative. |

#### Resource Attributes

Resources provide information about generated files that are associated with a derivative, such as the derivative URN. Note that any advanced options used to trigger the translation with output types DWG, FBX, IFC, IGES, OBJ, STEP, or STL when calling the [POST job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST) endpoint are also available in the resource object.

| guidstring | Unique identifier of the generated file |
| --- | --- |
| typestring | Type of this JSON object
Set to `resource` |
| rolestring | Output file type |
| mimestring | MIME type of the generated file |
| urnstring | Output file URN; used as a file identifier |
| statusstring | Status of the requested entity
Possible values: `pending`, `inprogress`, `success`,
`failed`, `timeout`
If omitted, the implicit meaning is `success` |
| progressstring | Translation progress for requested entity.
Possible values: `complete` or a percentage value
If omitted, the implicit meaning is `complete`. |
| resolutionarray: int | The resolution of the thumbnail image
Available only for `thumbnail` output type. |

### Example Manifest

```
{
    "urn": "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA",
    "derivatives": [
        {
            "hasThumbnail": "true",
            "children": [
                {
                    "role": "3d",
                    "hasThumbnail": "true",
                    "children": [
                        {
                            "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA/output/1/Metal_Container.zipbox.svf.png01_thumb_400x400.png",
                            "role": "thumbnail",
                            "mime": "image/png",
                            "guid": "b436f3d9-5f62-4f78-b403-5c5c055ce964",
                            "type": "resource",
                            "resolution": [
                                400,
                                400
                            ]
                        },
                        {
                            "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA/output/1/Metal_Container.zipbox.svf.png01_thumb_200x200.png",
                            "role": "thumbnail",
                            "mime": "image/png",
                            "guid": "af4ea613-9950-4b4e-a260-226fe72dda52",
                            "type": "resource",
                            "resolution": [
                                200,
                                200
                            ]
                        },
                        {
                            "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA/output/1/Metal_Container.zipbox.svf.png01_thumb_100x100.png",
                            "role": "thumbnail",
                            "mime": "image/png",
                            "guid": "1030bcaf-9b52-4f57-955b-d1adb0bf5655",
                            "type": "resource",
                            "resolution": [
                                100,
                                100
                            ]
                        },
                        {
                            "role": "graphics",
                            "mime": "application/autodesk-svf2",
                            "guid": "997adf5c-c221-4945-af4f-267e6700a4bd",
                            "type": "resource"
                        }
                    ],
                    "name": "Scene",
                    "guid": "7f04134d-c31e-4ec5-8ef4-e03b237d63e8",
                    "progress": "complete",
                    "type": "geometry",
                    "status": "success"
                },
                {
                    "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA/output/1/properties.db",
                    "role": "Autodesk.CloudPlatform.PropertyDatabase",
                    "mime": "application/autodesk-db",
                    "guid": "8362ddfe-8e62-4c27-8da5-26082e4b9955",
                    "type": "resource",
                    "status": "success"
                }
            ],
            "name": "Metal_Container.zipbox.ipt",
            "progress": "complete",
            "outputType": "svf2",
            "status": "success"
        }
    ],
    "hasThumbnail": "true",
    "progress": "complete",
    "type": "manifest",
    "region": "US",
    "version": "1.0",
    "status": "success"
}
```

```
{
    "urn": "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA",
    "derivatives": [
        {
            "hasThumbnail": "true",
            "children": [
                {
                    "role": "3d",
                    "hasThumbnail": "true",
                    "children": [
                        {
                            "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA/output/1/Metal_Container.zipbox.svf",
                            "role": "graphics",
                            "mime": "application/autodesk-svf",
                            "guid": "e1531ef8-d097-4a91-8f29-afb75ee6680b",
                            "type": "resource"
                        },
                        {
                            "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA/output/1/Metal_Container.zipbox.svf.png01_thumb_400x400.png",
                            "role": "thumbnail",
                            "mime": "image/png",
                            "guid": "f15625c8-b03f-4099-87fa-0e846f4e4749",
                            "type": "resource",
                            "resolution": [
                                400,
                                400
                            ]
                        },
                        {
                            "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA/output/1/Metal_Container.zipbox.svf.png01_thumb_200x200.png",
                            "role": "thumbnail",
                            "mime": "image/png",
                            "guid": "54fa7420-ca60-4334-9173-daec018123ff",
                            "type": "resource",
                            "resolution": [
                                200,
                                200
                            ]
                        },
                        {
                            "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA/output/1/Metal_Container.zipbox.svf.png01_thumb_100x100.png",
                            "role": "thumbnail",
                            "mime": "image/png",
                            "guid": "aaaca5e2-99f3-4f02-a5a7-b29985efb411",
                            "type": "resource",
                            "resolution": [
                                100,
                                100
                            ]
                        }
                    ],
                    "success": "99%",
                    "name": "Scene",
                    "guid": "904da86c-86ff-438f-9078-9193595db9f2",
                    "progress": "99%",
                    "type": "geometry",
                    "status": "inprogress"
                },
                {
                    "urn": "urn:adsk.viewing:fs.file:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6c3ZmMl9nYV90ZXN0cy9NZXRhbF9Db250YWluZXIuemlwYm94LmlwdA/output/1/properties.db",
                    "role": "Autodesk.CloudPlatform.PropertyDatabase",
                    "mime": "application/autodesk-db",
                    "guid": "e8b00378-40b9-4db1-9745-9fb7ad682e9f",
                    "type": "resource",
                    "status": "success"
                }
            ],
            "name": "Metal_Container.zipbox.ipt",
            "progress": "complete",
            "outputType": "svf",
            "status": "success"
        }
    ],
    "hasThumbnail": "true",
    "progress": "complete",
    "type": "manifest",
    "region": "US",
    "version": "1.0",
    "status": "success"
}
```

## Metadata

“Metadata” provides information about model views. Although most design apps (e.g., Fusion and Inventor) only allow a single model view (with a unique object tree and set of properties), some apps (e.g., Revit) allow models with multiple model views (e.g., HVAC, architecture, perspective).

This object is returned by the [GET {urn}/metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/) endpoint.

### Schema

| namestring | Name of the model view |
| --- | --- |
| guidstring | Unique identifier for the model view |
| rolestring | Type of model view
Possible values: `2d`, `3d` |

### Example Object

```
{
  "data": {
    "type": "metadata",
    "metadata": [
      {
        "name": "Scene",
        "role": "3d",
        "guid": "4f981e94-8241-4eaf-b08b-cd337c6b8b1f",
      },
      {
        "name": "Sheet: A101",
        "role": "2d",
        "guid": "8e7c6bca-cfd1-290e-4b16-f3670169bb71"
      }
    ]
   }
}
```

## Objects

An “object” is an identifiable element, or elements of a model that has geometric representation and typically, associated properties. For example, a door, window, wall, nut, bolt, or cog. It can also be a collection, such as a wheel which may include a hub, tire and valve.

This object is returned by the [GET {urn}/metadata/{guid}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) endpoint.

### Schema

| typestring | Objects type
Set to `objects` |
| --- | --- |
| objectsarray: object | Collection of objects |
| objectidint | Unique ID for the object |
| namestring | Name of the object |
| objectsarray: object | Optional collection of children objects within the hierarchy |

### Example Object

```
{
  "data": {
    "type": "objects",
    "objects": [
      {
        "objectid": 1,
        "name": "A5",
        "objects": [
          {
            "objectid": 2,
            "name": "Model",
            "objects": [
              {
                "objectid": 3,
                "name": "Bottom",
                "objects": [
                  {
                    "objectid": 4,
                    "name": "Box"
                  }
                ]
              },
              {
                "objectid": 5,
                "name": "Pillar",
                "objects": [
                  {
                    "objectid": 6,
                    "name": "Cylinder"
                  }
                ]
              },
              {
                "objectid": 7,
                "name": "Top",
                "objects": [
                  {
                    "objectid": 8,
                    "name": "Box"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Properties Collection

The [GET {urn}/metadata/{guid}/properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/) endpoint returns a flat collection of objects with their properties defined within the metadata of a source file. Properties are application specific and can potentially represent structural, material, physical or other aspects of objects.

This object is returned by the [GET {urn}/metadata/{guid}/properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/) endpoint.

### Schema

| typestring | Object type
Set to `properties` |
| --- | --- |
| collectionarray: object | Array of objects with their properties as a
non-hierarchical list |
| objectidint | Unique identifier of the object |
| namestring | Name of the object |
| externalIdstring | External unique identifier of the object
defined in the product. For example `UniqueID` in Revit files. |
| propertiesobject | Represents the object’s properties |

### Example Object

```
{
  "data": {
    "type": "properties",
    "collection": [
      {
        "objectid": 1,
        "name": "A5",
        "externalId": "mou0zG8ViUOsqUzhb4TUiA",
        "properties": {
          "Name": "A5"
        }
      },
      {
        "objectid": 2,
        "name": "Model",
        "externalId": "z4u0zG8ViUOsqUzhb4TUiA",
        "properties": {
          "Component Name": "Model",
          "Name": "Model",
          "Design Tracking Properties": {
            "Design State": "WorkInProgress",
            "Designer": "ADSK",
            "File Subtype": "Assembly"
          },
          "File Properties": {
            "Author": "ADSK",
            "Creation Date": "2012-Jul-09 20:18:20",
            "Original System": "Autodesk Inventor 2017",
            "Part Number": "Model"
          },
          "Mass Properties": {
            "Area": "19772.676 millimeter^2",
            "Volume": "83673.946 millimeter^3"
          }
        }
      },
      {
        "objectid": 3,
        "name": "Bottom",
        "externalId": "0Yu0zG8ViUOsqUzhb4TUiA",
        "properties": {
          "Component Name": "A5-P1",
          "Name": "Bottom",
          "Design Tracking Properties": {
            "Design State": "WorkInProgress",
            "Designer": "ADSK",
            "File Subtype": "Modeling"
          },
          "File Properties": {
            "Author": "ADSK",
            "Creation Date": "2012-Jul-09 20:18:35",
            "Original System": "Autodesk Inventor 2017",
            "Part Number": "Bottom"
          },
          "Mass Properties": {
            "Area": "7000 millimeter^2",
            "Volume": "25000 millimeter^3"
          }
        }
      },
      {
        "objectid": 4,
        "name": "Box",
        "externalId": "1Iu0zG8ViUOsqUzhb4TUiA",
        "properties": {
          "Center of Gravity:": "-13.452 mm, -9.879 mm, -40.735 mm",
          "Name": "Box"
        }
      },
      {
        "objectid": 5,
        "name": "Pillar",
        "externalId": "1ou0zG8ViUOsqUzhb4TUiA",
        "properties": {
          "Component Name": "Pillar",
          "Name": "Pillar",
          "Design Tracking Properties": {
            "Design State": "WorkInProgress",
            "Designer": "ADSK",
            "File Subtype": "Modeling"
          },
          "File Properties": {
            "Author": "ADSK",
            "Creation Date": "2012-Jul-09 20:18:35",
            "Original System": "Autodesk Inventor 2017",
            "Part Number": "Pillar"
          },
          "Mass Properties": {
            "Area": "7000 millimeter^2",
            "Volume": "25000 millimeter^3"
          }
        }
      },
      {
        "objectid": 6,
        "name": "Cylinder",
        "externalId": "2Iu0zG8ViUOsqUzhb4TUiA",
        "properties": {
          "Mass:": "0.012 gram",
          "Name": "Cylinder"
        }
      },
      {
        "objectid": 7,
        "name": "Top",
        "externalId": "2ou0zG8ViUOsqUzhb4TUiA",
        "properties": {
          "Component Name": "Top",
          "Name": "Top",
          "Design Tracking Properties": {
            "Design State": "WorkInProgress",
            "Designer": "ADSK",
            "File Subtype": "Modeling"
          },
          "File Properties": {
            "Author": "ADSK",
            "Creation Date": "2012-Jul-09 20:19:38",
            "Original System": "Autodesk Inventor 2017",
            "Part Number": "Top"
          },
          "Mass Properties": {
            "Area": "5772.676 millimeter^2",
            "Volume": "33673.946 millimeter^3"
          }
        }
      },
      {
        "objectid": 8,
        "name": "Box",
        "externalId": "3Iu0zG8ViUOsqUzhb4TUiA",
        "properties": {
          "Material": "ABS Plastic",
          "Name": "Box"
        }
      }
    ]
  }
}
```

**Note:** If a DGN source design was translated with `requestedLinkageIDs` specified (see [POST job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST)), each extracted linkage appears in `properties` as a field named `Linkage_<ID>` (for example, `Linkage_1002`) on the object it was attached to. The value’s encoding is defined by the third-party application that wrote the linkage to the DGN file; the Model Derivative API returns it unmodified.

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/field-guide
