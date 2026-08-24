---
title: "addExtensionPropertiesToElements"
url_path: reference/mutations/addextensionpropertiestoelements
surface: graphql
reference_kind: mutation
graphql_name: "addExtensionPropertiesToElements"
---
# addExtensionPropertiesToElements

![mutation](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_mutation.png)

Adds extension properties to elements.

**Template for Query:**

```
mutation AddExtensionPropertiesToElements($input: AddExtensionPropertiesInput!){
  addExtensionPropertiesToElements(input: $input) {
    #AddExtensionPropertiesToElements Fields
  }
}
```

**Template for Query Variables:**

```
{
  "input" : "<SOME-ADDEXTENSIONPROPERTIES-INPUT-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| input*[AddExtensionPropertiesInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/addextensionpropertiesinput) `non-null` | Specifies the properties to add and the elements to add them to. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [AddExtensionPropertiesPayload](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/addextensionpropertiespayload) | Payload for adding extension properties to elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/addextensionpropertiestoelements
