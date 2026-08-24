---
title: "HubDataAttributes Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/HubDataAttributes
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class HubDataAttributes

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The properties of the hub.

```
[DataContract]
public class HubDataAttributes
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[HubDataAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/HubDataAttributes)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### HubDataAttributes()

Initializes a new instance of the class.

```
public HubDataAttributes()
```

## Properties

### Extension

Gets or Sets Extension

```
[DataMember(Name = "extension", EmitDefaultValue = false)]
public BaseAttributesExtensionObjectWithSchemaLink Extension { get; set; }
```

#### Property Value

[BaseAttributesExtensionObjectWithSchemaLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/BaseAttributesExtensionObjectWithSchemaLink)

### Name

A human friendly name to identify the hub.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Region

Gets or Sets Region

```
[DataMember(Name = "region", EmitDefaultValue = true)]
public Region Region { get; set; }
```

#### Property Value

[Region](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Region)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/HubDataAttributes
