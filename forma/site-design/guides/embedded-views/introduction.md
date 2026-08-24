---
title: "Introduction"
url_path: embedded-views/introduction
surface: guide
---
# Embedded views

Extensions can provide embedded views to render into predefined locations within
the Forma web application, and provide custom user interaction within this view.
Embedded views can communicate with the host app via an SDK, and is how you
perform meaningful actions such as:
- interacting with the 3D scene
- fetching geometry and other project data
- accessing analysis results and area metrics
- storing new data to Forma’s element system
- editing proposals and adding assets to library
- invoking your own endpoints / services

See the [SDK documentation](https://app.autodeskforma.com/forma-embedded-view-sdk/docs/)
for extensive details on what you can do.

You create an embedded view by hosting a HTML site and configuring the extension
to point to it for a given embedded view. The Forma web application will include
the HTML site in an iframe, allowing you to render your product and interact
with the rest of the Forma web application and Forma models.

It is worth noting that the extension:
- must be provided as a url to a statically hosted website.
- should support responsive design - we default to 260px width, but this may vary.

## Placements

Currently, there are three possible placements for embedded views to display your extension on Forma:

### Limitation

Right now you can configure either **LEFT MENU PANEL** or **FLOATING PANEL**, not both. If you configure both, the *
_FLOATING PANEL_* will take precedent, as the access pattern for both of them are same.

### Floating panel

The floating panel is the most flexible embedded view and can be used for various purposes, e.g. interacting with scene,
showing geometry or any other custom need.

Floating panels can be configured to open when clicking on the extension in the left icon row as explained [here](https://aps.autodesk.com/en/docs/forma/v1/embedded-views/configuration/). Also,
you can open a floating panel from within your extension by using the SDK
method [openFloatingPanel](https://app.autodeskforma.com/forma-embedded-view-sdk/docs/classes/index.EmbeddedViewSdk.html#openFloatingPanel).

### Left menu panel

The left panel is usually reserved for interacting with or managing a proposal
or a project. The native left panel embedded views include a model library and a
collaboration menu:
- Library: hosts geometric models in either 2D or 3D. These models are draggable into the 3D scene.
- Collaboration: for sharing the project and managing privileges of users.

To access such a panel, you click on the extension icon in the left icon row,
and then click on the extension you want to open.

### Right menu analysis panel

The right panel is usually for accessing available analyses. It contains a fixed
analysis menu tab on the top. The panel content contains capability you expose
the user to, such as inputting parameters or triggering an analysis.

You can access the right panel by clicking on your extension icon in the
analysis menu. This will open your extension in the panel below.

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/embedded-views/introduction
