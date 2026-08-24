---
title: "ItemPayloadIncludedAttributesExtension Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncludedAttributesExtension
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ItemPayloadIncludedAttributesExtension

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

A container of additional properties that extends the default properties of this resource.

```
[DataContract]
public class ItemPayloadIncludedAttributesExtension
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ItemPayloadIncludedAttributesExtension](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncludedAttributesExtension)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ItemPayloadIncludedAttributesExtension()

Initializes a new instance of the class.

```
public ItemPayloadIncludedAttributesExtension()
```

## Properties

### Data

The container of the additional properties.

The additional properties must follow the schema specified by `extensions.type` and `extensions.version`. Properties that don’t follow the schema will be ignored.

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public Dictionary<string, object> Data { get; set; }
```

#### Property Value

[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)>

### Type

The type of the extension.

For BIM 360 Docs files, use `versions:autodesk.bim360:File`.

For A360 composite design files, use `versions:autodesk.a360:CompositeDesign`.

For A360 Personal, Fusion Team, or BIM 360 Team files, use `versions:autodesk.core:File`.

```
[DataMember(Name = "type", EmitDefaultValue = false)]
public string Type { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### VarVersion

The version of the extension type (`included[i].attributes.extension.type`). The current version is `1.0`.

```
[DataMember(Name = "version", EmitDefaultValue = false)]
public string VarVersion { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayloadIncludedAttributesExtension
