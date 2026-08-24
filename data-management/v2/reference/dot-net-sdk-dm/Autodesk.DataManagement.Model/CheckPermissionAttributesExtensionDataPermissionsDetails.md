---
title: "CheckPermissionAttributesExtensionDataPermissionsDetails Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtensionDataPermissionsDetails
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class CheckPermissionAttributesExtensionDataPermissionsDetails

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

An object containing key value pairs, where the key represents the type of permission that was checked and the value is `true` if the user has permission.

```
[DataContract]
public class CheckPermissionAttributesExtensionDataPermissionsDetails
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CheckPermissionAttributesExtensionDataPermissionsDetails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtensionDataPermissionsDetails)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CheckPermissionAttributesExtensionDataPermissionsDetails()

Initializes a new instance of the class.

```
public CheckPermissionAttributesExtensionDataPermissionsDetails()
```

## Properties

### Create

Gets or Sets Create

```
[DataMember(Name = "create", EmitDefaultValue = false)]
public bool Create { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Download

Gets or Sets Download

```
[DataMember(Name = "download", EmitDefaultValue = false)]
public bool Download { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### View

Gets or Sets View

```
[DataMember(Name = "view", EmitDefaultValue = false)]
public bool View { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtensionDataPermissionsDetails
