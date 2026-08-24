---
title: "ItemPayloadIncluded Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncluded
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ItemPayloadIncluded

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

ItemPayloadIncluded

```
[DataContract]
public class ItemPayloadIncluded
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ItemPayloadIncluded](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncluded)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ItemPayloadIncluded()

Initializes a new instance of the class.

```
public ItemPayloadIncluded()
```

## Properties

### Attributes

Gets or Sets Attributes

```
[DataMember(Name = "attributes", EmitDefaultValue = false)]
public ItemPayloadIncludedAttributes Attributes { get; set; }
```

#### Property Value

[ItemPayloadIncludedAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncludedAttributes)

### Id

The version number. Will always be `1`.

```
[DataMember(Name = "id", EmitDefaultValue = false)]
public string Id { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Relationships

Gets or Sets Relationships

```
[DataMember(Name = "relationships", EmitDefaultValue = false)]
public ItemPayloadIncludedRelationships Relationships { get; set; }
```

#### Property Value

[ItemPayloadIncludedRelationships](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncludedRelationships)

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public TypeVersion Type { get; set; }
```

#### Property Value

[TypeVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeVersion)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncluded
