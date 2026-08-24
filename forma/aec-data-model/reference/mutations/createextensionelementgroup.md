---
title: "createExtensionElementGroup"
url_path: reference/mutations/createextensionelementgroup
surface: graphql
reference_kind: mutation
graphql_name: "createExtensionElementGroup"
---
# createExtensionElementGroup

![mutation](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/badge_mutation.png)

Creates an extension element group.

**Template for Query:**

```
mutation CreateExtensionElementGroup($elementGroupId: ID!, $name: String){
  createExtensionElementGroup(elementGroupId: $elementGroupId, name: $name) {
    #CreateExtensionElementGroup Fields
  }
}
```

**Template for Query Variables:**

```
{
  "elementGroupId" : "<SOME-ID-TYPE-SCALAR-VALUE>",
  "name" : "<SOME-STRING-TYPE-SCALAR-VALUE>"
}
```

## Arguments

| elementGroupId*[ID](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) `non-null` | Specifies the ID of the target elementGroup. |
| --- | --- |
| name[String](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/scalars) | Optional name for the element group. |

## Possible Returns

| Value Type | Description |
| --- | --- |
| [ElementGroup!](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementgroup) `non-null` |   |

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/createextensionelementgroup
