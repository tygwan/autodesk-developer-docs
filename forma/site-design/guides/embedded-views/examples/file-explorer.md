---
title: "File explorer"
url_path: embedded-views/examples/file-explorer
surface: guide
---
# Example: File Explorer

This code for this example is found [here](https://github.com/autodesk-platform-services/aps-forma-extension-file-explorer).

**What it does:** Enable a file browser for your own geometry files and adding these to the Forma project as 3D elements when a file is selected.

## How was this built

The embedded view consists of `index.html`, `main.js` and a few helper scripts, just like most web applications. The file browsing demo currently only works when hosting the embedded view locally, but the similar functionality can be provided by using your own API to retrieve the directory hierarchy and available files.

This document will go through step by step how you would build the main functionality of this extension.

### Step one - the starting point

The starting point of this extension is the following file:

`index.html`

```
<!DOCTYPE html>
<html>
  <head>
    <script type="module">
      import { Forma } from "https://esm.sh/forma-embedded-view-sdk/auto";
      // Additional code here
    </script>
  </head>
  <body></body>
</html>
```

### Step two - selecting your geometry file

The example code contains a full demo of how to build an interactive file browser. For the purpose of this tutorial we will only focus on the Forma specific parts. This assumes that we have already selected a `.glb` geometry file and read the contents of that into the variable `glbData`.

### Step three - creating a Forma 3D element

In Forma 3D data is structured within something we call elements. We can use different APIs to create and persist such elements. This example uses [Integrate API](https://aps.autodesk.com/en/docs/forma/v1/reference/http-specification/integrate-api) via the SDK to create a new element. The following code snippet shows how to create a new element with the geometry data we have loaded.

```
const glbData = /* ... */;

// Upload the GLB file.
const { fileId } = await Forma.integrateElements.uploadFile({
  authcontext: Forma.getProjectId(),
  data: glbData,
});

// Create an element for it.
const { urn } = await Forma.integrateElements.createElementHierarchy({
  authcontext: Forma.getProjectId(),
  data: {
    rootElement: "root",
    elements: {
      root: {
        id: "root",
        properties: {
          name: "My element",
          geometry: {
            type: "File",
            format: "glb",
            s3Id: fileId,
          },
        },
      },
    },
  },
});
```

### Step four - register the element in library

Adding the element to the library, the user can then drag the element into the scene. The following code snippet shows how to add the element to the library.

```
await Forma.library.createItem({
  authcontext: Forma.getProjectId(),
  data: {
    "My element",
    urn,
    status: "success",
  },
});
```

Here you can see that we use the `library` API, which has the method `createItem` that allows us to add elements into the library.

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/embedded-views/examples/file-explorer
