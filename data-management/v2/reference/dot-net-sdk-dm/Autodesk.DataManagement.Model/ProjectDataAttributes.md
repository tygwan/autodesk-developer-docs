---
title: "ProjectDataAttributes Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ProjectDataAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ProjectDataAttributes

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The properties of the project.

```
[DataContract]
public class ProjectDataAttributes
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ProjectDataAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ProjectDataAttributes)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ProjectDataAttributes()

Initializes a new instance of the class.

```
public ProjectDataAttributes()
```

## Properties

### Extension

Gets or Sets Extension

```
[DataMember(Name = "extension", EmitDefaultValue = false)]
public ProjectExtensionWithSchemaLink Extension { get; set; }
```

#### Property Value

[ProjectExtensionWithSchemaLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ProjectExtensionWithSchemaLink)

### Name

A human friendly name to identify the project.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Scopes

The array of scopes that apply to this project.

```
[DataMember(Name = "scopes", EmitDefaultValue = false)]
public List<string> Scopes { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ProjectDataAttributes
