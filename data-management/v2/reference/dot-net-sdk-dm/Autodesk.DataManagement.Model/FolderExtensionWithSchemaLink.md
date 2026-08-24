---
title: "FolderExtensionWithSchemaLink Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderExtensionWithSchemaLink
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class FolderExtensionWithSchemaLink

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

A container of additional properties that extends the default properties of this resource.

```
[DataContract]
public class FolderExtensionWithSchemaLink
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[FolderExtensionWithSchemaLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderExtensionWithSchemaLink)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### FolderExtensionWithSchemaLink()

Initializes a new instance of the class.

```
public FolderExtensionWithSchemaLink()
```

## Properties

### Data

The object that contains the additional properties, which makes this resource extensible.

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public Dictionary<string, object> Data { get; set; }
```

#### Property Value

[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)>

### Schema

Gets or Sets Schema

```
[DataMember(Name = "schema", EmitDefaultValue = false)]
public JsonApiLink Schema { get; set; }
```

#### Property Value

[JsonApiLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLink)

### Type

The type of folder the resource represents.

```
[DataMember(Name = "type", EmitDefaultValue = false)]
public string Type { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### VarVersion

The version of the folder type.

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderExtensionWithSchemaLink
