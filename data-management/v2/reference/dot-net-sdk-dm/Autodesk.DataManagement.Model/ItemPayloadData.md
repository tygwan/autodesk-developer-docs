---
title: "ItemPayloadData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ItemPayloadData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The data that describes the item to be created.

```
[DataContract]
public class ItemPayloadData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ItemPayloadData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ItemPayloadData()

Initializes a new instance of the class.

```
public ItemPayloadData()
```

## Properties

### Attributes

Gets or Sets Attributes

```
[DataMember(Name = "attributes", EmitDefaultValue = false)]
public ItemPayloadDataAttributes Attributes { get; set; }
```

#### Property Value

[ItemPayloadDataAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadDataAttributes)

### Relationships

Gets or Sets Relationships

```
[DataMember(Name = "relationships", EmitDefaultValue = false)]
public ItemPayloadDataRelationships Relationships { get; set; }
```

#### Property Value

[ItemPayloadDataRelationships](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadDataRelationships)

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public TypeItem Type { get; set; }
```

#### Property Value

[TypeItem](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeItem)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadData
