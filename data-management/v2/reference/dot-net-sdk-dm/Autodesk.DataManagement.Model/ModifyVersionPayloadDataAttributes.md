---
title: "ModifyVersionPayloadDataAttributes Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyVersionPayloadDataAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ModifyVersionPayloadDataAttributes

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains the properties to update

```
[DataContract]
public class ModifyVersionPayloadDataAttributes
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ModifyVersionPayloadDataAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyVersionPayloadDataAttributes)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ModifyVersionPayloadDataAttributes()

Initializes a new instance of the class.

```
public ModifyVersionPayloadDataAttributes()
```

## Properties

### Name

The file name to be used when synced to local disk (1-255 characters).

Avoid using the following reserved characters in the name: `<, `>`, `:`, `“`, `/`, ``, `|`, `?`, `*`, `'`, `\n`, `\r`, `\t`, `\0`, `\f`, `¢`, `™`, `$`, `®`.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyVersionPayloadDataAttributes
