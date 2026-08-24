---
title: "createPropertyDefinitionCollectionInHub"
url_path: reference/mutations/createpropertydefinitioncollectioninhub
surface: graphql
reference_kind: mutation
graphql_name: "createPropertyDefinitionCollectionInHub"
---
# createPropertyDefinitionCollectionInHub

![mutation](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_mutation.png)

Creates a property definition collection

**Template for Query:**

```
mutation CreatePropertyDefinitionCollectionInHub($input: createPropertyDefinitionCollectionInHubInput!){
  createPropertyDefinitionCollectionInHub(input: $input) {
    #CreatePropertyDefinitionCollectionInHub Fields
  }
}
```

**Template for Query Variables:**

```
{
  "input" : "<SOME-CREATEPROPERTYDEFINITIONCOLLECTIONINHUB-INPUT-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| input*[createPropertyDefinitionCollectionInHubInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/createpropertydefinitioncollectioninhubinput) `non-null` | Specifies the location and details of the collection. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [CreatePropertyDefinitionCollectionInHubPayload](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/createpropertydefinitioncollectioninhubpayload) | Return payload on property definition collection in hub creation. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/createpropertydefinitioncollectioninhub
