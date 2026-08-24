---
title: "createPropertyDefinitionsInCollection"
url_path: reference/mutations/createpropertydefinitionsincollection
surface: graphql
reference_kind: mutation
graphql_name: "createPropertyDefinitionsInCollection"
---
# createPropertyDefinitionsInCollection

![mutation](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_mutation.png)

Creates multiple property definitions in a property definition collection.

**Template for Query:**

```
mutation CreatePropertyDefinitionsInCollection($input: createPropertyDefinitionsInCollectionInput!){
  createPropertyDefinitionsInCollection(input: $input) {
    #CreatePropertyDefinitionsInCollection Fields
  }
}
```

**Template for Query Variables:**

```
{
  "input" : "<SOME-CREATEPROPERTYDEFINITIONSINCOLLECTION-INPUT-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| input*[createPropertyDefinitionsInCollectionInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/createpropertydefinitionsincollectioninput) `non-null` | The inputs needed to create property definitions. |
| --- | --- |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [CreatePropertyDefinitionsInCollectionPayload](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/createpropertydefinitionsincollectionpayload) | Response of `create` property definitions operation. |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/createpropertydefinitionsincollection
