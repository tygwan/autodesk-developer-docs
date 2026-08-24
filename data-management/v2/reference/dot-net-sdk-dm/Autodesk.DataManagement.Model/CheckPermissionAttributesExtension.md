---
title: "CheckPermissionAttributesExtension Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtension
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class CheckPermissionAttributesExtension

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

An object that contains properties specific to the CheckPermissions command, extending the default properties of a command.

```
[DataContract]
public class CheckPermissionAttributesExtension
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CheckPermissionAttributesExtension](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtension)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CheckPermissionAttributesExtension()

Initializes a new instance of the class.

```
public CheckPermissionAttributesExtension()
```

## Properties

### Data

Gets or Sets Data

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public CheckPermissionAttributesExtensionData Data { get; set; }
```

#### Property Value

[CheckPermissionAttributesExtensionData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtensionData)

### Schema

Gets or Sets Schema

```
[DataMember(Name = "schema", EmitDefaultValue = false)]
public CheckPermissionAttributesExtensionSchema Schema { get; set; }
```

#### Property Value

[CheckPermissionAttributesExtensionSchema](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtensionSchema)

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public TypeCommandtypeCheckPermission Type { get; set; }
```

#### Property Value

[TypeCommandtypeCheckPermission](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeCommandtypeCheckPermission)

### VarVersion

The version of the schema. Must be `1.0.0`
for the CheckPermission command.

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionAttributesExtension
