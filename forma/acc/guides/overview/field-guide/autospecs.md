---
title: "AutoSpecs"
url_path: overview/field-guide/autospecs
surface: guide
---
# Forma AutoSpecs

Forma AutoSpecs allows you to quickly create detailed and accurate draft submittal logs that you can publish to Autodesk Forma Data Management and Autodesk Forma Build for use by your project team. For more information about AutoSpecs, see the [AutoSpecs Help](https://help.autodesk.com/view/AUTOSPECS/ENU/?guid=AutoSpecs_About) documentation.

The Forma AutoSpecs API includes the following features:
- Retrieve a complete submittal log (Smart Register) of the submittal requirements that AutoSpecs uploaded from the project specification.
- Retrieve the number of submittals for each submittal group and each submittal type.
- Retrieve the number of submittals for submittal groups by division code in each submittal section.

## Limitations

We do not currently support the following features:
- Uploading, extracting, and updating project specifications
- Modifying submittal logs in the Smart Register
- Webhooks - you need to poll the GET metadata endpoint and check the status of the extraction
- Filtering submittals
- APIs to edit specifications (Spec View tool), or APIs that track details of specific products (Product Data tool)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/autospecs
