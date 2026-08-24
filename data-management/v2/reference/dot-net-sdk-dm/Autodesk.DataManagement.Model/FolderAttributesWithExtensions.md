---
title: "FolderAttributesWithExtensions Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderAttributesWithExtensions
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class FolderAttributesWithExtensions

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The properties of a folder.

```
[DataContract]
public class FolderAttributesWithExtensions
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[FolderAttributesWithExtensions](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderAttributesWithExtensions)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### FolderAttributesWithExtensions()

Initializes a new instance of the class.

```
public FolderAttributesWithExtensions()
```

## Properties

### CreateTime

The time the folder was created, in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

```
[DataMember(Name = "createTime", EmitDefaultValue = false)]
public DateTime CreateTime { get; set; }
```

#### Property Value

[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### CreateUserId

The unique identifier of the user who created the folder.

```
[DataMember(Name = "createUserId", EmitDefaultValue = false)]
public string CreateUserId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CreateUserName

The name of the user who created the folder.

```
[DataMember(Name = "createUserName", EmitDefaultValue = false)]
public string CreateUserName { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### DisplayName

Reserved for future Use. Do not use. Use `attributes.name` for the folder name.

```
[DataMember(Name = "displayName", EmitDefaultValue = false)]
public string DisplayName { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Extension

Gets or Sets Extension

```
[DataMember(Name = "extension", EmitDefaultValue = false)]
public FolderExtensionWithSchemaLink Extension { get; set; }
```

#### Property Value

[FolderExtensionWithSchemaLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderExtensionWithSchemaLink)

### Hidden

The folder’s current visibility state.

```
[DataMember(Name = "hidden", EmitDefaultValue = false)]
public bool Hidden { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastModifiedTime

The last time the folder was modified, in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

```
[DataMember(Name = "lastModifiedTime", EmitDefaultValue = false)]
public DateTime LastModifiedTime { get; set; }
```

#### Property Value

[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### LastModifiedTimeRollup

The date and time the folder or any of its children were last updated.

```
[DataMember(Name = "lastModifiedTimeRollup", EmitDefaultValue = false)]
public string LastModifiedTimeRollup { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### LastModifiedUserId

The last time the folder was modified, in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

```
[DataMember(Name = "lastModifiedUserId", EmitDefaultValue = false)]
public string LastModifiedUserId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### LastModifiedUserName

The name of the user who last modified the folder.

```
[DataMember(Name = "lastModifiedUserName", EmitDefaultValue = false)]
public string LastModifiedUserName { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

The name of the folder.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ObjectCount

The number of objects inside the folder.

```
[DataMember(Name = "objectCount", EmitDefaultValue = false)]
public decimal ObjectCount { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderAttributesWithExtensions
