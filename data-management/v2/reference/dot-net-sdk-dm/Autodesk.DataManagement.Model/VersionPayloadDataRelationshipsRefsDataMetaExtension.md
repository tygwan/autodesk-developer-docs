---
title: "VersionPayloadDataRelationshipsRefsDataMetaExtension Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsRefsDataMetaExtension
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class VersionPayloadDataRelationshipsRefsDataMetaExtension

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains additional properties that extend the default properties of the relationship.

```
[DataContract]
public class VersionPayloadDataRelationshipsRefsDataMetaExtension
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[VersionPayloadDataRelationshipsRefsDataMetaExtension](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsRefsDataMetaExtension)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### VersionPayloadDataRelationshipsRefsDataMetaExtension()

Initializes a new instance of the class.

```
public VersionPayloadDataRelationshipsRefsDataMetaExtension()
```

## Properties

### Data

Gets or Sets Data

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public VersionPayloadDataRelationshipsRefsDataMetaExtensionData Data { get; set; }
```

#### Property Value

[VersionPayloadDataRelationshipsRefsDataMetaExtensionData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsRefsDataMetaExtensionData)

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public ExtensionTypeCoreXref Type { get; set; }
```

#### Property Value

[ExtensionTypeCoreXref](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ExtensionTypeCoreXref)

### VarVersion

The version of the xref type. Currently must be `1.1.0`.

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadDataRelationshipsRefsDataMetaExtension
