---
title: "ItemAttributes Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ItemAttributes

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Properties of an item.

```
[DataContract]
public class ItemAttributes
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ItemAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemAttributes)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ItemAttributes()

Initializes a new instance of the class.

```
public ItemAttributes()
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

A human friendly name to identify the item.
Note that for BIM 360 projects, this attribute is reserved for future releases and should not be used. Use a version’s `attributes.name` for the file name.

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
public ItemExtensionWithSchemaLink Extension { get; set; }
```

#### Property Value

[ItemExtensionWithSchemaLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemExtensionWithSchemaLink)

### Hidden

`true`: The file has been deleted.

`false`: The file has not been deleted.

```
[DataMember(Name = "hidden", EmitDefaultValue = false)]
public bool Hidden { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

### Reserved

`true`: The file is locked.

`false` The file is not locked.

**Note:** You can lock BIM 360 Project Files folder files and A360 files, but you cannot lock BIM 360 Plans Folder files.

```
[DataMember(Name = "reserved", EmitDefaultValue = false)]
public bool Reserved { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReservedTime

The time the item was reserved in the following format: `YYYY-MM-DDThh:mm:ss.sz`.

```
[DataMember(Name = "reservedTime", EmitDefaultValue = false)]
public DateTime ReservedTime { get; set; }
```

#### Property Value

[DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### ReservedUserId

The unique identifier of the user who reserved the item.

```
[DataMember(Name = "reservedUserId", EmitDefaultValue = false)]
public string ReservedUserId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ReservedUserName

The name of the user who reserved the item.

```
[DataMember(Name = "reservedUserName", EmitDefaultValue = false)]
public string ReservedUserName { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemAttributes
