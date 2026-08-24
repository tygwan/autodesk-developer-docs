---
title: "removeExtensionPropertiesFromElements"
url_path: reference/mutations/removeextensionpropertiesfromelements
surface: graphql
reference_kind: mutation
graphql_name: "removeExtensionPropertiesFromElements"
---
# removeExtensionPropertiesFromElements

![mutation](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_mutation.png)

Removes extension properties from elements.

**Template for Query:**

```
mutation RemoveExtensionPropertiesFromElements($input: RemoveExtensionPropertiesInput!){
  removeExtensionPropertiesFromElements(input: $input) {
    #RemoveExtensionPropertiesFromElements Fields
  }
}
```

**Template for Query Variables:**

```
{
  "input" : "<SOME-REMOVEEXTENSIONPROPERTIES-INPUT-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| input*[RemoveExtensionPropertiesInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/removeextensionpropertiesinput) `non-null` | Specifies the properties to remove and the elements to remove them from. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [RemoveExtensionPropertiesPayload](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/removeextensionpropertiespayload) | Payload for removing extension properties from elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/removeextensionpropertiesfromelements
