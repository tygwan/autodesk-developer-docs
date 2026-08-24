---
title: "Visibility States"
url_path: developers_guide/scene_api//visibility-states
surface: viewer-sdk
document_kind: guide
category: "scene_api"
---
# Visibility States

Hiding or de-emphasizing content is one of the most common viewer interactions: isolate a selected
part, ghost everything else to preserve spatial context, or suppress irrelevant geometry entirely.
The [VisibilityState](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/#VisibilityState/) enum — `Visible`, `Ghosted`, `Hidden` — maps the same three-state
model that the Viewer uses for its built-in isolate and ghost operations onto programmatically
created instances, so your custom geometry behaves consistently with loaded content.

The three states have distinct visual meanings.
- **Visible** is the default — the instance is fully rendered with its assigned material
- **Ghosted** renders the instance as a semi-transparent shape
- **Hidden** removes the instance from the frame entirely, as if it did not exist

This example creates a single blue box and cycles it through all three states, updating a visible label so the current state is always clear.

To change the visibility state we pass a [VisibilityState](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/#VisibilityState/) constant
to [InstanceCollection3D.setVisibilityState](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceCollection3D/#setVisibilityState/) on the [InstanceCollection3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceCollection3D/).

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/scene_api/visibility-states
