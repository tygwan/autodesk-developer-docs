---
title: "CreatedVersionIncludedRelationships Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CreatedVersionIncludedRelationships
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class CreatedVersionIncludedRelationships

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains links to resources that are directly related to this item.

```
[DataContract]
public class CreatedVersionIncludedRelationships
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CreatedVersionIncludedRelationships](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CreatedVersionIncludedRelationships)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CreatedVersionIncludedRelationships()

Initializes a new instance of the class.

```
public CreatedVersionIncludedRelationships()
```

## Properties

### Links

Gets or Sets Links

```
[DataMember(Name = "links", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksLinks Links { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksLinks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksLinks)

### Parent

Gets or Sets Parent

```
[DataMember(Name = "parent", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksFolderParent Parent { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksFolderParent](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksFolderParent)

### Refs

Gets or Sets Refs

```
[DataMember(Name = "refs", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksRefs Refs { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksRefs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksRefs)

### Tip

Gets or Sets Tip

```
[DataMember(Name = "tip", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksToTipVersion Tip { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksToTipVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksToTipVersion)

### Versions

Gets or Sets Versions

```
[DataMember(Name = "versions", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksVersions Versions { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksVersions](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksVersions)

## Methods

### ToString()

Returns the string presentation of the object.

```
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

String presentation of the object.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CreatedVersionIncludedRelationships
