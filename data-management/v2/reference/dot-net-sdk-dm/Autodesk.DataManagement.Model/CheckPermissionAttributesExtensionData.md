---
title: "CheckPermissionAttributesExtensionData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtensionData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class CheckPermissionAttributesExtensionData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

A container of the results of the resources that were checked for permission.

```
[DataContract]
public class CheckPermissionAttributesExtensionData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CheckPermissionAttributesExtensionData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtensionData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CheckPermissionAttributesExtensionData()

Initializes a new instance of the class.

```
public CheckPermissionAttributesExtensionData()
```

## Properties

### Permissions

An array of objects, where each object
represents a folder, item, or version that
permission was checked for.

```
[DataMember(Name = "permissions", EmitDefaultValue = false)]
public List<CheckPermissionAttributesExtensionDataPermissions> Permissions { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[CheckPermissionAttributesExtensionDataPermissions](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtensionDataPermissions)>

### RequiredActions

An array of keywords where each keyword
is an action that permission was checked
for. Possible values:
- `read` - Download and view specified resource.
- `view` - View specified resource without downloading.
- `download` - Download and view specified resource.
- `collaborate` - Add comments for the specified resource.
- `write` - Write to the specified resource.
- `upload` - Upload to the specified resource.
- `updateMetaData` - Update metadata of the specified resource.
- `create` - Write and upload to the specified resource.
- `delete` - Delete the specified resource.
- `admin` - Perform administrative operations on specified resource.
- `share`- Share the specified resource.

```
[DataMember(Name = "requiredActions", EmitDefaultValue = false)]
public List<string> RequiredActions { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtensionData
