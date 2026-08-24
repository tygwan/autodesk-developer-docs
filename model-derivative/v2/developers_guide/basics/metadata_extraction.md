---
title: "Extract Metadata"
url_path: developers_guide/basics/metadata_extraction
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "basics"
---
# Extract Metadata

When you translate a design to SVF2, not only does the design become available for display with the Viewer SDK, metadata about the objects in the design gets extracted and becomes available for querying. The following image shows a combination of the information you can typically obtain. In the panel on the right, you can see the viewable objects. In the panel on the top-left, you can see the object hierarchy. In the panel, on the bottom-left, you can see the properties of the selected object.

![../../../../_images/model_2.png](https://developer.doc.autodesk.com/bPlouYTd/A360-platform-viewing-docs-master-766554/_images/model_2.png)

## Listing Model Views

[List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET/) returns a list of Model Views (Viewables) contained within the design. See the walkthrough [Extract Metadata from a Source Model](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/xtract-metadata/) for a demonstration on how to extract the names of the Model Views and their IDs.

The following code block is an example of a JSON object showing details of the Model Views contained in a design file.

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

Autodesk Inventor and Fusion 360 contain only one Model View per design. However, Autodesk Revit, as shown in the previous example, can contain multiple Model Views in a single design.

## Listing Objects and Properties

[Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET/) returns a flat list of all the objects contained within a specified Model View. It also returns the properties of each object. Instead of fetching all properties, you can use the [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-query-POST/) operation to query just the properties of specific objects. See the walkthrough on [Extract Metadata from a Source File](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/xtract-metadata/task4-display_model/) for details.

The following code block provides an example of a JSON object showing objects.

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

A design typically contains a large number of objects and properties. So you will typically need to sift through large amounts of data to get what you need. To work around this problem, use the [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-query-POST/) operation. This operation gives you the ability to specify what objects to query, as well as return only the properties you are interested in. This ability significantly reduces the amount of data you need to handle. What’s more, the system paginates the response payload.

## Listing Hierarchy of Objects

[Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET/) returns a list of objects contained within a Model View. The list is organized hierarchically, indicating how objects are nested in the object model. See the walkthrough on [Extract Geometry from a Source File](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/xtract-geometry-from-source-file/) for an illustration of how to obtain the object hierarchy.

The following code block provides an example of a JSON object showing the hierarchy of objects.

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

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/basics/metadata_extraction
