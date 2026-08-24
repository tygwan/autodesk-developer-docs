---
title: "ModifyItemPayloadData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyItemPayloadData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ModifyItemPayloadData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The data that describes what must be modified.

```
[DataContract]
public class ModifyItemPayloadData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ModifyItemPayloadData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyItemPayloadData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ModifyItemPayloadData()

Initializes a new instance of the class.

```
public ModifyItemPayloadData()
```

## Properties

### Attributes

Gets or Sets Attributes

```
[DataMember(Name = "attributes", EmitDefaultValue = false)]
public ModifyItemPayloadDataAttributes Attributes { get; set; }
```

#### Property Value

[ModifyItemPayloadDataAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyItemPayloadDataAttributes)

### Id

The ID of the item to be patched.

```
[DataMember(Name = "id", EmitDefaultValue = false)]
public string Id { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyItemPayloadData
