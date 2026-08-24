---
title: "VersionAttributes Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class VersionAttributes

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The properties of a version.

```
[DataContract]
public class VersionAttributes
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[VersionAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionAttributes)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### VersionAttributes()

Initializes a new instance of the class.

```
public VersionAttributes()
```

## Properties

### CreateTime

The time that the resource was created at.

```
[DataMember(Name = "createTime", EmitDefaultValue = false)]
public DateTime CreateTime { get; set; }
```

#### Property Value

[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### CreateUserId

The ID of the user that created the version.

```
[DataMember(Name = "createUserId", EmitDefaultValue = false)]
public string CreateUserId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CreateUserName

The user name of the user that created the version.

```
[DataMember(Name = "createUserName", EmitDefaultValue = false)]
public string CreateUserName { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### DisplayName

A human friendly name to identify the version. Note that for BIM 360 projects, this field is reserved for future releases and should not be used. Use a version’s `attributes.name` for the file name.

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
public VersionExtensionWithSchemaLink Extension { get; set; }
```

#### Property Value

[VersionExtensionWithSchemaLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionExtensionWithSchemaLink)

### FileType

File type, only present if this version represents a file.

```
[DataMember(Name = "fileType", EmitDefaultValue = false)]
public string FileType { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### LastModifiedTime

The time that the version was last modified.

```
[DataMember(Name = "lastModifiedTime", EmitDefaultValue = false)]
public DateTime LastModifiedTime { get; set; }
```

#### Property Value

[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### LastModifiedUserId

The ID of the user that last modified the version.

```
[DataMember(Name = "lastModifiedUserId", EmitDefaultValue = false)]
public string LastModifiedUserId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### LastModifiedUserName

The user name of the user that last modified the version.

```
[DataMember(Name = "lastModifiedUserName", EmitDefaultValue = false)]
public string LastModifiedUserName { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### MimeType

The MIME type of the content of the version.

```
[DataMember(Name = "mimeType", EmitDefaultValue = false)]
public string MimeType { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

The file name to be used when synced to local disk.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### StorageSize

File size in bytes, only present if this version represents a file.

```
[DataMember(Name = "storageSize", EmitDefaultValue = false)]
public long StorageSize { get; set; }
```

#### Property Value

[long](https://learn.microsoft.com/dotnet/api/system.int64)

### VersionNumber

Version number of this versioned file.

```
[DataMember(Name = "versionNumber", EmitDefaultValue = false)]
public int VersionNumber { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionAttributes
