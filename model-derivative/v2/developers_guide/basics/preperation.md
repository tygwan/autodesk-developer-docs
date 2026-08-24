---
title: "Prepare Models for Online Viewing"
url_path: developers_guide/basics/preperation
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "basics"
---
# Prepare Models for Online Viewing

The recommended way of displaying a model online is use the Viewer SDK. The Viewer SDK is a WebGL-based JavaScript library that can render 2D and 3D models in a browser. However, before you can display a model with the Viewer, you must translate the model to SVF2 (Streaming Viewing Format) or its previous iteration, SVF. You can use the Model Derivative API to translate more than 70 model formats to SVF2. Statistics show that translating to SVF2/SVF is the most common use of the Model Derivative API.

## Why SVF2?

SVF2 is a vector format designed for the web. It is a native file format of the Viewer. It contains the model information the Viewer needs to display geometry, list the hierarchy of objects, override the visibility of objects, and display the properties of each object.

![../../../../_images/model_2.png](https://developer.doc.autodesk.com/bPlouYTd/A360-platform-viewing-docs-master-766554/_images/model_2.png)

SVF2 is optimized for models containing repetitive geometry shapes by using instances rather than unique geometry. So, SVF2 Model Views (Viewables) of large models such as those produced by the AEC (Architecture, Engineering & Construction) industry tend to be smaller. This optimization enables incremental loading and improved interactivity like zooming and exploding.

SVF2 and SVF derivatives cannot coexist in the same manifest. So when translating for online viewing, you have to choose between SVF2 and SVF. Because SVF2 handles larger models better, Autodesk recommends SVF2 over SVF. However, SVF2 currently does not handle physical materials coming from 3ds Max. If you are displaying 3ds Max models, stick with SVF. Additionally, in the manifest, SVF2 derivatives do not have a URN. This means that SVF2 derivatives cannot be downloaded for offline viewing.

## Object IDs (db IDs) and External IDs

When a model is translated to SVF2, the server assigns an ID to each object that is translated. Model Derivative refers to this ID as `objectid` (Object ID), while the Viewer SDK documentation refers to it as `dbid` (db ID). In general Object IDs should never be used for anything except “per-job” operations. Even for a different version of the same model, the Object IDs could be different.

Some source design formats use an ID to uniquely identify objects. For example, the Unique ID in Revit models, and the Handle in AutoCAD models. The Model Derivative service preserves this ID as the External ID of an object when translating the source file format to SVF2. So, if you require persistent IDs, use `externalId` (External IDs) instead of Object IDs.

Some source file formats may not assign IDs to all objects. For example, Revit does not assign a Unique ID to non-geometry objects such as categories and family types. The Model Derivative service assigns an External ID to such objects.

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

## Displaying SVF2/SVF files in the Viewer

### Loading the Viewer

SVF2 is supported by Viewer version 7.48 and newer.

**Example: Demonstrates how to specify the Viewer SDK**

```
<!-- Load latest V7 version of the Viewer Library-->
<script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js"></script>
```

### Initializing the Viewer for SVF2 and SVF Support

You enable SVF2/SVF support by passing two parameters when initializing the Viewer: `env` and `api`. The value you specify for `env` and `api` depend on whether you want an SVF2 derivative or SVF derivative. The following table lists the values to use:

| Parameter | SVF2 | SVF |
| --- | --- | --- |
| env | AutodeskProduction2 | AutodeskProduction |
| api | streamingV2 (for US) | derivativeV2 (for US) |
| streamingV2_EU (for EMEA) | derivativeV2_EU (for EMEA) |   |

For more information, see the [Viewer documentation for the Viewing.Initializer method](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/#initializer-options-callback).

**Example 1: Initializes the Viewer when you already have an access token**

```
  var viewer;
  var options = {
      env: 'AutodeskProduction2',
      api: 'streamingV2',
      accessToken: 'YOUR_ACCESS_TOKEN'
  };

  Autodesk.Viewing.Initializer(options, function() {
      var htmlDiv = document.getElementById('forgeViewer');
      viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
      var startedCode = viewer.start();
      if (startedCode > 0) {
          console.error('Failed to create a Viewer: WebGL not supported.');
          return;
      }
      console.log('Initialization complete, loading a model next...');
  });
```

```
  var viewer;
  var options = {
      env: 'AutodeskProduction',
      api: 'derivativeV2',
      accessToken: 'YOUR_ACCESS_TOKEN'
  };

  Autodesk.Viewing.Initializer(options, function() {
      var htmlDiv = document.getElementById('forgeViewer');
      viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
      var startedCode = viewer.start();
      if (startedCode > 0) {
          console.error('Failed to create a Viewer: WebGL not supported.');
          return;
      }
      console.log('Initialization complete, loading a model next...');
  });
```

**Example 2: Obtains an access token and initializes the Viewer**

```
  var viewer;
  var options = {
      env: 'AutodeskProduction2',
      api: 'streamingV2',
      getAccessToken: function(onTokenReady) {
          fetch(
                  '/api/forge/oauth/token', //!<<< You own server backend endpoint for obtaining an access token
                  {
                      method: 'get',
                      headers: new Headers({
                          'Content-Type': 'application/json'
                      })
                  })
              .then(function(response) {
                  if (response.status === 200) {
                      return response.json();
                  } else {
                      return Promise.reject(
                          new Error('Failed to fetch token from server (status: ' + response.status + ', message: ' + response.statusText + ')')
                      );
                  }
              })
              .then(function(data) {
                  if (!data)
                      return Promise.reject(new Error('Empty token response'));
                  onTokenReady(data.access_token, data.expires_in);
              })
              .catch(function(error) {
                  console.error(error);
              });
      }
  };

  Autodesk.Viewing.Initializer(options, function() {
      var htmlDiv = document.getElementById('forgeViewer');
      viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
      var startedCode = viewer.start();
      if (startedCode > 0) {
          console.error('Failed to create a Viewer: WebGL not supported.');
          return;
      }
      console.log('Initialization complete, loading a model next...');
  });
```

```
  var viewer;
  var options = {
      env: 'AutodeskProduction',
      api: 'derivativeV2',
      getAccessToken: function(onTokenReady) {
          fetch(
                  '/api/forge/oauth/token', //!<<< You own server backend endpoint for obtaining an access token
                  {
                      method: 'get',
                      headers: new Headers({
                          'Content-Type': 'application/json'
                      })
                  })
              .then(function(response) {
                  if (response.status === 200) {
                      return response.json();
                  } else {
                      return Promise.reject(
                          new Error('Failed to fetch token from server (status: ' + response.status + ', message: ' + response.statusText + ')')
                      );
                  }
              })
              .then(function(data) {
                  if (!data)
                      return Promise.reject(new Error('Empty token response'));
                  onTokenReady(data.access_token, data.expires_in);
              })
              .catch(function(error) {
                  console.error(error);
              });
      }
  };

  Autodesk.Viewing.Initializer(options, function() {
      var htmlDiv = document.getElementById('forgeViewer');
      viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
      var startedCode = viewer.start();
      if (startedCode > 0) {
          console.error('Failed to create a Viewer: WebGL not supported.');
          return;
      }
      console.log('Initialization complete, loading a model next...');
  });
```

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/basics/preperation
