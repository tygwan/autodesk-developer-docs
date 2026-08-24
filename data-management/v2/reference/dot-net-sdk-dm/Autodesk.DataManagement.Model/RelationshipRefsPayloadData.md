---
title: "RelationshipRefsPayloadData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayloadData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class RelationshipRefsPayloadData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

A container for the data that describes the custom relationship.

```
[DataContract]
public class RelationshipRefsPayloadData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[RelationshipRefsPayloadData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayloadData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### RelationshipRefsPayloadData()

Initializes a new instance of the class.

```
public RelationshipRefsPayloadData()
```

## Properties

### Id

The ID that uniquely identifies the resource.

```
[DataMember(Name = "id", EmitDefaultValue = false)]
public string Id { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Meta

Gets or Sets Meta

```
[DataMember(Name = "meta", EmitDefaultValue = false)]
public RelationshipRefsPayloadDataMeta Meta { get; set; }
```

#### Property Value

[RelationshipRefsPayloadDataMeta](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayloadDataMeta)

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public TypeEntity Type { get; set; }
```

#### Property Value

[TypeEntity](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeEntity)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayloadData
