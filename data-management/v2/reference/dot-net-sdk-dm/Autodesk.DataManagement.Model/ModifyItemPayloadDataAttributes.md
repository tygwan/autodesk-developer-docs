---
title: "ModifyItemPayloadDataAttributes Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyItemPayloadDataAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ModifyItemPayloadDataAttributes

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

A container of the attributes to be updated.

```
[DataContract]
public class ModifyItemPayloadDataAttributes
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ModifyItemPayloadDataAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyItemPayloadDataAttributes)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ModifyItemPayloadDataAttributes()

Initializes a new instance of the class.

```
public ModifyItemPayloadDataAttributes()
```

## Properties

### DisplayName

A human friendly name to identify an item.

**Note:** For BIM 360 projects this attribute is reserved for future releases and should not be used. For such items use a version’s `attributes.name` as the item’s name.

```
[DataMember(Name = "displayName", EmitDefaultValue = false)]
public string DisplayName { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyItemPayloadDataAttributes
