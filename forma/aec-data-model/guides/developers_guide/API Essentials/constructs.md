---
title: "API Constructs"
url_path: developers_guide/API Essentials/constructs
surface: guide
---
# API Constructs

![../../../_images/api_constructs.png](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/api_constructs.png)

This section defines important data constructs that you will come across in AEC Data Model API:
- **Model Element Group**: A ElementGroup is a part of an AEC project that contains model elements. Note that “Model” or “Design” is sometimes used interchangeably with “ElementGroup”.
- **Model Elements**: An Element is a building block of elementGroup data. It represents an individual piece of an elementGroup such as a wall, window, or door without enforcing a rigid definition. The absence of a rigid definition allows the Element to be flexible to adapt to the different requirements of an elementGroup, now and in the future. The data contained in an Element gives it context by using Classification, Property, and Property Definition.
- **Extension Element Group**: The Extension Element Group holds all of the extension properties associated to a specific Model Element Group
- **Extension Element**: Extension Element contains the custom property that have been created. The extension element references and represents custom property association to one or more Model Elements
- **Reference Property**: A reference property describes the relationship between elements.
- **Property**: A Property is a well-defined granular piece of data that describes the Element. For example: Revit parameters and their values such as area, volume, and length.
- **Property Definition**: A Property Definition provides detailed information about a Property. It contains metadata that gives context to the property such as unit and type.
- **Piece or Geometry Piece**: The building blocks of identifiable geometry in AEC Data Model. A geometry piece could be a primitive, geometry instance reference or binary geometry data type.
- **Origin Component**: Contains the x, y, z coordinates defining the location of the element.
- **Axis Component**: Contains the curve defining the axis of the element.
- **Geometry Instance Reference**: A pointer to another collection of pieces defining more geometry data.
- **Geometry Binary Data**: Defines the binary data reference containing the byte ranges where data is located in the actual binary file.
- **Primitive**: Serialized geometry data defined using schemas, e.g. curve (lines, circle, bcurve), Point.

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/API Essentials/constructs
