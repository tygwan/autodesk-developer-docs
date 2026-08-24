---
title: "Extract an Inventory"
url_path: tutorials/takeoff/takeoff-extract-inventory
surface: guide
---
# Extract the Inventory for a Takeoff Project

This tutorial demonstrates how to extract the inventory items for a takeoff project. This will include:
- Retrieving all the packages
- Retrieving all the takeoff types
- Retrieving all the takeoff items

To learn more about the inventory tool, see the [Forma Takeoff Inventory](https://help.autodesk.com/view/TAKEOFF/ENU/?guid=Inventory) help documentation.

## Before You Begin
- [Register an app](https://aps.autodesk.com/myapps), and select the Forma API.
- Provision your app to acquire access to your Forma hub.
- Acquire a [3-legged OAuth token](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) with the `data:read` scope.
- Verify that you have access to the relevant Forma project.

## Step 1: Retrieve the Packages

Use the project ID (`7388a640-3bff-4328-9dc2-aafe62359958`) to retrieve the packages, by calling [GET packages](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-GET).

To find the project ID, see the [Retrieve Forma Hub and Project ID](https://aps.autodesk.com/en/docs/acc/v1/tutorials/getting-started/retrieve-account-and-project-id/) tutorial.

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/construction/takeoff/v1/projects/7388a640-3bff-4328-9dc2-aafe62359958/packages" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
  -H "Content-Type: application/json"
```

### Response

```
{
  "pagination": {
    "offset": 0,
    "limit": 200
  },
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Concrete",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2020-11-11T12:32:45Z",
      "updatedByName": "Jane Johnson"
    }
  ]
}
```

The response payload includes the package IDs (`results[i].id`).

## Step 2: Retrieve all Takeoff Types and Items

### Part A: Get all the Takeoff Types

Use the project ID (`7388a640-3bff-4328-9dc2-aafe62359958`) and package ID (`6e330582-ad88-4299-85e6-b749e8dec40d`) from the previous step to retrieve the takeoff types, by calling [GET takeoff-types](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-types-GET).

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/construction/takeoff/v1/projects/7388a640-3bff-4328-9dc2-aafe62359958/packages/6e330582-ad88-4299-85e6-b749e8dec40d/takeoff-types" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
  -H "Content-Type: application/json"
```

### Response

```
{
  "pagination": {
    "offset": 0,
    "limit": 1000
  },
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Foundation Slab",
      "description": "Slab in the garage",
      "color": "#11ff11",
      "borderColor": "#11ff11",
      "shapeType": "SQUARE",
      "countMarkerSize": 1.5,
      "countMarkerWidth": null,
      "countMarkerHeight": null,
      "tool": "DISTANCE",
      "propertyDefinitions": [
        {
          "name": "Height",
          "unitOfMeasure": "LF",
          "value": 2.5,
          "valueLocation": "INSTANCE_WITH_TAKEOFF_TYPE_DEFAULT"
        },
        {
          "name": "Width",
          "unitOfMeasure": "LF",
          "value": 1,
          "valueLocation": "INSTANCE_WITH_TAKEOFF_TYPE_DEFAULT"
        }
      ],
      "modelMappings": [
        {
          "name": "Area",
          "mappingExpression": "Sill_Height*Width"
        }
      ],
      "primaryQuantityDefinition": {
        "classificationCodeOne": null,
        "classificationCodeTwo": null,
        "outputName": "Exterior Wall",
        "expression": "Distance*Width*Height*1.1",
        "unitOfMeasure": "CY",
        "classifications": [
          {
            "structureId": "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
            "nodeId": "2f7e534d-d084-594b-8aa6-147cb8fbc060"
          }
        ]
      },
      "secondaryQuantityDefinitions": [
        {
          "classificationCodeOne": null,
          "classificationCodeTwo": null,
          "outputName": "Custom Flooring",
          "expression": "Distance*Width",
          "unitOfMeasure": "SF",
          "classifications": [
            {
              "structureId": "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
              "nodeId": "ec7b2dea-9383-49d4-b22d-52e04659e28b"
            }
          ]
        }
      ],
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2020-11-11T12:32:45Z",
      "updatedByName": "Jane Johnson"
    }
  ]
}
```

### Part B: Get all the Takeoff Items

Use the project ID (`7388a640-3bff-4328-9dc2-aafe62359958`) and package ID (`6e330582-ad88-4299-85e6-b749e8dec40d`) from the previous step to retrieve the takeoff items, by calling [GET takeoff-items](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-packages-package_id-takeoff-items-GET).

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/construction/takeoff/v1/projects/7388a640-3bff-4328-9dc2-aafe62359958/packages/6e330582-ad88-4299-85e6-b749e8dec40d/takeoff-items" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
  -H "Content-Type: application/json"
```

### Response

```
{
  "pagination": {
    "offset": 0,
    "limit": 1000
  },
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "takeoffTypeId": "b9380176-9ac2-454d-acdd-fdfd988b9702",
      "type": "COUNT",
      "objectName": "36\" x 48\"",
      "geometry": "<path fill=\"none\" stroke=\"red\" d=\"M 10,10 h 10 m 0,10 h 10 m 0,10 h 10\">",
      "rotationAngle": 45,
      "objectId": 1,
      "propertyValues": [
        {
          "name": "Perimeter",
          "unitOfMeasure": "LF",
          "source": "MEASUREMENT",
          "value": 3
        }
      ],
      "primaryQuantity": {
        "outputName": "Bedroom Wall",
        "quantity": 15,
        "unitOfMeasure": "EA"
      },
      "secondaryQuantities": [
        {
          "outputName": "Wall Paint",
          "quantity": 45,
          "unitOfMeasure": "LF"
        }
      ],
      "contentView": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version": "urn:adsk.wipstg:fs.file:vf.oeSywgLpSkONo9O6CUZvkQ?version=3"
      },
      "locationId": "ff7f6eb4-6276-4993-bfeb-34cbbbba3a17",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2020-11-11T12:32:45Z",
      "updatedByName": "Jane Johnson"
    }
  ]
}
```

## Retrieve Additional Information (optional)

Below are some examples of how to obtain additional information, relating to a takeoff project, that would allow you to construct an inventory tool, similar to what appears in the UI. For more details, see the [Takeoff Inventory](https://help.autodesk.com/view/TAKEOFF/ENU/?guid=Inventory) help documentation.

## Get the Assigned Structures

Use the project ID (`7388a640-3bff-4328-9dc2-aafe62359958`) to retrieve the classification structures (trees) assigned to the project, by calling [GET assigned-structures](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-assigned-structures-GET).

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/construction/takeoff/v1/projects/7388a640-3bff-4328-9dc2-aafe62359958/assigned-structures?limit=2" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
  -H "Content-Type: application/json"
```

### Response

```
{
  "pagination": {
    "limit": 2,
    "nextUrl": "https://developer.api.autodesk.com/construction/takeoff/v1/resources?limit=2&offset=0",
    "offset": 0
  },
  "results": [
    {
      "structureId": "1a07c80a-3892-40b1-8a2f-3d0b05786d70",
      "createdAt": "2019-11-20T10:42:54.304Z",
      "createdBy": "Z56MMDCCC6YA"
    }
  ]
}
```

The response payload includes the assigned structure (tree) IDs. This can be used with the [GET trees/{treeId}](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications-trees-treeId-GET/) API to find structure or tree information.

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/construction/classifications/v1/projects/7388a640-3bff-4328-9dc2-aafe62359958/trees/1a07c80a-3892-40b1-8a2f-3d0b05786d70" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
```

### Response

```
{
  "id": "1a07c80a-3892-40b1-8a2f-3d0b05786d70",
  "name": "Locations",
  "description": "Structure of places on the building site",
  "isBasedOnAccountTree": false,
  "treeConnectionType": "standalone",
  "originalTreeId": "0195f158-6f95-7fb0-b008-4cde506166dd",
  "createdAt": "2018-07-22T15:05:58.033Z",
  "updatedAt": "2018-07-22T15:05:58.033Z",
  "createdBy": "A3RGM375QTZ7",
  "updatedBy": "A3RGM375QTZ7"
}
```

## Get the Classifications Nodes for the Structures or Trees

Use the project ID (`7388a640-3bff-4328-9dc2-aafe62359958`) and Assigned Structure structure ID (`1a07c80a-3892-40b1-8a2f-3d0b05786d70`) from the previous step to retrieve the tree nodes, by calling [GET trees/{treeId}/versions/tip/nodes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications-trees-treeId-versions-tip-nodes-GET/).

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/construction/classifications/v1/projects/7388a640-3bff-4328-9dc2-aafe62359958/trees/1a07c80a-3892-40b1-8a2f-3d0b05786d70/versions/tip/nodes?limit=10" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
```

### Response

```
{
  "pagination": {
    "limit": 10,
    "nextUrl": "https://developer.api.autodesk.com/construction/classifications/v1/projects/{projectId}/trees/{treeId}/versions/tip/nodes?limit=10&offset=10",
    "offset": 0
  },
  "results": [
    {
        "id": "0195f158-6f95-7fb0-b008-4cde506166de",
        "externalId": "0195f158-6f95-7fb0-b008-4cde506166de",
        "name": "Floor 1",
        "nodeCode": "FLOOR-1",
        "parentNodeId": "0195f158-6f95-7fb0-b008-4cde506166df",
        "parentNodeExternalId": "0195f158-6f95-7fb0-b008-4cde506166df",
        "order": 1,
        "isDeleted": false
    }
  ]
}
```

## Deprecated - Get the Classification Systems

This workflow has been deprecated, use the new Assigned Structures and Classifications API to get this data.

Use the project ID (`7388a640-3bff-4328-9dc2-aafe62359958`) to retrieve the classification systems, by calling [GET classification-systems](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-GET).

For more details about classification systems, see the [Configure Takeoff Settings](https://help.autodesk.com/view/TAKEOFF/ENU/?guid=Configure_Takeoff_Settings) help documentation.

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/construction/takeoff/v1/projects/7388a640-3bff-4328-9dc2-aafe62359958/classification-systems" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
  -H "Content-Type: application/json"
```

### Response

```
{
  "pagination": {
    "offset": 0,
    "limit": 200
  },
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "Smith Construction Classification",
      "type": "CLASSIFICATION_SYSTEM_1"
    }
  ]
}
```

The response payload includes the classification system IDs (`results[i].id`).

## Deprecated - Get the Classifications for a Classification System

This workflow has been deprecated, use the new Assigned Structures and Classifications API to get this data.

Use the project ID (`7388a640-3bff-4328-9dc2-aafe62359958`) and classification system ID (`1a07c80a-3892-40b1-8a2f-3d0b05786d70`) from the previous step to retrieve the classifications, by calling [GET classifications](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-classification-systems-system_id-classifications-GET/).

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/construction/takeoff/v1/projects/7388a640-3bff-4328-9dc2-aafe62359958/classification-systems/1a07c80a-3892-40b1-8a2f-3d0b05786d70/classifications" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
  -H "Content-Type: application/json"
```

### Response

```
{
  "pagination": {
    "offset": 0,
    "limit": 10000
  },
  "results": [
    {
      "code": "A1010",
      "parentCode": null,
      "description": "Concrete",
      "measurementType": "AREA"
    },
    {
      "code": "A1010.10",
      "parentCode": "A1010",
      "description": "Sprayed concrete",
      "measurementType": "AREA"
    },
    {
      "code": "A1010.20",
      "parentCode": "A1010",
      "description": "Foamed concrete",
      "measurementType": "AREA"
    }
  ]
}
```

## Get Sheet or Model Information

Use the project ID (`7388a640-3bff-4328-9dc2-aafe62359958`) to retrieve the content views, by calling [GET content-views](https://aps.autodesk.com/en/docs/acc/v1/reference/http/takeoff-projects-project_id-content-views-GET).

A content view is either a 3D BIM model view, or a 2D PDF sheet that a user could use to create takeoffs.

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/construction/takeoff/v1/projects/7388a640-3bff-4328-9dc2-aafe62359958/content-views" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
  -H "Content-Type: application/json"
```

### Response

```
{
  "pagination": {
    "offset": 0,
    "limit": 200
  },
  "results": [
    [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "FILE_MODEL",
        "view": {
          "lineageUrn": "urn:adsk.wipqa:dm.lineage:TCBw0V-GQX2aAWWSSrhQmQ",
          "viewName": "3D"
        }
      },
      {
        "id": "95451383-ee38-44da-b06c-2d5266e726d2",
        "type": "SHEET",
        "view": {
          "sheetName": "A09.05",
          "calibration": {
            "scaleFactor": 0.987,
            "units": "FT_AND_FRACTIONAL_IN"
          }
        }
      }
    ]
  ]
}
```

For sheet names, the name is under `results[i].view.sheetName` where `results[i].type` is `SHEET`.

For model names, use `results[i].view.lineageUrn` where `results[i].type` is `FILE-MODEL`, and continue to the next step.

## Get the Model Name

Use the project ID (`7388a640-3bff-4328-9dc2-aafe62359958`) and `lineageUrn` (`urn:adsk.wipprod:dm.lineage:TwJx1922Sq2MsljlLsTYFQ`) to retrieve the model name, by calling [GET project items](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-tip-GET).

### Request

```
curl -X GET \
  "https://developer.api.autodesk.com/data/v1/projects/b.7388a640-3bff-4328-9dc2-aafe62359958/items/urn:adsk.wipprod:dm.lineage:TwJx1922Sq2MsljlLsTYFQ/tip" \
  -H "Authorization: Bearer nFRJxzCD8OOUr7hzBwbr06D76zAT" \
  -H "Content-Type: application/json"
```

### Response

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "links": {
    "self": {
      "href": "https://developer.api.autodesk.com/data/v1/projects/b.7388a640-3bff-4328-9dc2-aafe62359958/items/urn:adsk.wipprod:dm.lineage:TwJx1922Sq2MsljlLsTYFQ/tip"
    }
  },
  "data": {
    "type": "versions",
    "id": "urn:adsk.wipprod:fs.file:vf.TwJx1922Sq2MsljlLsTYFQ?version=1",
    "attributes": {
      "name": "Revit2018_rac_advanced_sample_project.rvt",
      "displayName": "",
      "createTime": "2021-03-26T13:28:02.0000000Z",
      "createUserId": "",
      "createUserName": "",
      "lastModifiedTime": "2021-03-26T13:29:32.0000000Z",
      "lastModifiedUserId": "",
      "lastModifiedUserName": "",
      "versionNumber": 1,
      "storageSize": 15532032,
      "fileType": "rvt",
      "extension": {
        "type": "versions:autodesk.bim360:File",
        "version": "1.0",
        "schema": {
          "href": "https://developer.api.autodesk.com/schema/v1/versions/versions:autodesk.bim360:File-1.0"
        },
        "data": {
          "processState": "PROCESSING_COMPLETE",
          "extractionState": "SUCCESS",
          "splittingState": "NOT_SPLIT",
          "reviewState": "NOT_IN_REVIEW",
          "revisionDisplayLabel": "1",
          "sourceFileName": "Revit2018_rac_advanced_sample_project.rvt"
        }
      }
    },
    "links": {
      "self": {
        "href": "https://developer.api.autodesk.com/data/v1/projects/b.7388a640-3bff-4328-9dc2-aafe62359958/versions/urn:adsk.wipprod:fs.file:vf.TwJx1922Sq2MsljlLsTYFQ%3Fversion=1"
      },
      "webView": {
        "href": "https://acc.autodesk.com/docs/files/projects/7388a640-3bff-4328-9dc2-aafe62359958?folderUrn=urn%3Aadsk.wipprod%3Afs.folder%3Aco.wmO35siCRE-xcXnxHiIXMA&entityId=urn%3Aadsk.wipprod%3Afs.file%3Avf.TwJx1922Sq2MsljlLsTYFQ%3Fversion%3D1"
      }
    },
    "relationships": {
      "item": {
        "data": {
          "type": "items",
          "id": "urn:adsk.wipprod:dm.lineage:TwJx1922Sq2MsljlLsTYFQ"
        },
        "links": {
          "related": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/b.7388a640-3bff-4328-9dc2-aafe62359958/versions/urn:adsk.wipprod:fs.file:vf.TwJx1922Sq2MsljlLsTYFQ%3Fversion=1/item"
          }
        }
      },
      "links": {
        "links": {
          "self": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/b.7388a640-3bff-4328-9dc2-aafe62359958/versions/urn:adsk.wipprod:fs.file:vf.TwJx1922Sq2MsljlLsTYFQ%3Fversion=1/relationships/links"
          }
        }
      },
      "refs": {
        "links": {
          "self": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/b.7388a640-3bff-4328-9dc2-aafe62359958/versions/urn:adsk.wipprod:fs.file:vf.TwJx1922Sq2MsljlLsTYFQ%3Fversion=1/relationships/refs"
          },
          "related": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/b.7388a640-3bff-4328-9dc2-aafe62359958/versions/urn:adsk.wipprod:fs.file:vf.TwJx1922Sq2MsljlLsTYFQ%3Fversion=1/refs"
          }
        }
      },
      "downloadFormats": {
        "links": {
          "related": {
            "href": "https://developer.api.autodesk.com/data/v1/projects/b.7388a640-3bff-4328-9dc2-aafe62359958/versions/urn:adsk.wipprod:fs.file:vf.TwJx1922Sq2MsljlLsTYFQ%3Fversion=1/downloadFormats"
          }
        }
      },
      "derivatives": {
        "data": {
          "type": "derivatives",
          "id": "dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLlR3SngxOTIyU3EyTXNsamxMc1RZRlE_dmVyc2lvbj0x"
        },
        "meta": {
          "link": {
            "href": "https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLlR3SngxOTIyU3EyTXNsamxMc1RZRlE_dmVyc2lvbj0x/manifest?scopes=b360project.7388a640-3bff-4328-9dc2-aafe62359958,O2tenant.10270419"
          }
        }
      },
      "thumbnails": {
        "data": {
          "type": "thumbnails",
          "id": "dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLlR3SngxOTIyU3EyTXNsamxMc1RZRlE_dmVyc2lvbj0x"
        },
        "meta": {
          "link": {
            "href": "https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLlR3SngxOTIyU3EyTXNsamxMc1RZRlE_dmVyc2lvbj0x/thumbnail?scopes=b360project.7388a640-3bff-4328-9dc2-aafe62359958,O2tenant.10270419"
          }
        }
      },
      "storage": {
        "data": {
          "type": "objects",
          "id": "urn:adsk.objects:os.object:wip.dm.prod/7e7dd77f-a436-41d7-8c8d-05bdf1470f08.rvt"
        },
        "meta": {
          "link": {
            "href": "https://developer.api.autodesk.com/oss/v2/buckets/wip.dm.prod/objects/7e7dd77f-a436-41d7-8c8d-05bdf1470f08.rvt?scopes=b360project.7388a640-3bff-4328-9dc2-aafe62359958,O2tenant.10270419"
          }
        }
      }
    }
  }
}
```

The model name is under `data.attributes.name`.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/tutorials/takeoff/takeoff-extract-inventory
