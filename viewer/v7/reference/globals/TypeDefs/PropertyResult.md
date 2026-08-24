---
title: "PropertyResult"
url_path: reference/globals/TypeDefs/PropertyResult
surface: viewer-sdk
document_kind: reference
category: "globals"
---
# PropertyResult

Element type for [GetPropertiesResult.properties](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/GetPropertiesResult/).

# Properties

| attributeNamestring | The property identifying name. |
| --- | --- |
| displayCategorystring, null | Category the attribute belongs into. |
| displayNamestring | A user facing label for the property. It could contain the same value as attributeName. |
| displayValuestring, number, boolean | The value for the property. |
| hiddenboolean | Whether the property is meant to be user facing or not. |
| precisionnumber | Applies only to numerical displayValues. |
| typeobject | An enumeration value of type AttributeType indicating how to interpret displayValue. |
| unitsstring, null | The units associated with displayValue. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/PropertyResult
