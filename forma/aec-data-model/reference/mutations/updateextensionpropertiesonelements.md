---
title: "updateExtensionPropertiesOnElements"
url_path: reference/mutations/updateextensionpropertiesonelements
surface: graphql
reference_kind: mutation
graphql_name: "updateExtensionPropertiesOnElements"
---
# updateExtensionPropertiesOnElements

![mutation](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_mutation.png)

Updates extension properties on elements.

**Template for Query:**

```
mutation UpdateExtensionPropertiesOnElements($input: UpdateExtensionPropertiesInput!){
  updateExtensionPropertiesOnElements(input: $input) {
    #UpdateExtensionPropertiesOnElements Fields
  }
}
```

**Template for Query Variables:**

```
{
  "input" : "<SOME-UPDATEEXTENSIONPROPERTIES-INPUT-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| input*[UpdateExtensionPropertiesInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/updateextensionpropertiesinput) `non-null` | Specifies the properties to update and the elements to update them on. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [UpdateExtensionPropertiesPayload](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/updateextensionpropertiespayload) | Payload for updating extension properties on elements. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/updateextensionpropertiesonelements
