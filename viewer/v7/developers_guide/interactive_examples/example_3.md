---
title: "Querying Model Properties"
url_path: developers_guide/interactive_examples/example_3
surface: viewer-sdk
document_kind: guide
category: "interactive_examples"
---
# Querying Model Properties

This example illustrates how to query a model using a property name and then isolate the corresponding element while automatically zooming in to that element. To test it out:
- From the drop-down on the top-left, select **01_rac_basic_sample_project.rvt**.
- In the text box next to the drop-down, enter _Single-Flush [422466]_.
- Click **Search**. The specified door will display clearly, with all other elements suppressed.

The script first captures the name of the property from the text box. After that, it queries the model’s properties to obtain the node ID of the element. It then uses this ID to isolate the element and zoom in on it.

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/interactive_examples/example_3
