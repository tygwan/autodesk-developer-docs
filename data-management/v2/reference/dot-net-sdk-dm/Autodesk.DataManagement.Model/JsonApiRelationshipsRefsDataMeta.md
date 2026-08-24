---
title: "JsonApiRelationshipsRefsDataMeta Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsRefsDataMeta
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class JsonApiRelationshipsRefsDataMeta

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The meta-information describing the custom relationship.

```
[DataContract]
public class JsonApiRelationshipsRefsDataMeta
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JsonApiRelationshipsRefsDataMeta](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsRefsDataMeta)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JsonApiRelationshipsRefsDataMeta()

Initializes a new instance of the class.

```
public JsonApiRelationshipsRefsDataMeta()
```

## Properties

### Direction

Gets or Sets Direction

```
[DataMember(Name = "direction", EmitDefaultValue = true)]
public MetarefsDirection Direction { get; set; }
```

#### Property Value

[MetarefsDirection](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetarefsDirection)

### Extension

Gets or Sets Extension

```
[DataMember(Name = "extension", EmitDefaultValue = false)]
public JsonApiRelationshipsRefsDataMetaExtension Extension { get; set; }
```

#### Property Value

[JsonApiRelationshipsRefsDataMetaExtension](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsRefsDataMetaExtension)

### RefType

Gets or Sets RefType

```
[DataMember(Name = "refType", EmitDefaultValue = true)]
public ReftypesXref RefType { get; set; }
```

#### Property Value

[ReftypesXref](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ReftypesXref)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsRefsDataMeta
