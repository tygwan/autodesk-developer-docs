---
title: "HubData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/HubData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class HubData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The object containing information about the hub.

```
[DataContract]
public class HubData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[HubData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/HubData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### HubData()

Initializes a new instance of the class.

```
public HubData()
```

## Properties

### Attributes

Gets or Sets Attributes

```
[DataMember(Name = "attributes", EmitDefaultValue = false)]
public HubDataAttributes Attributes { get; set; }
```

#### Property Value

[HubDataAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/HubDataAttributes)

### Id

The hub ID, which uniquely identifies the hub.

```
[DataMember(Name = "id", EmitDefaultValue = false)]
public string Id { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Links

Gets or Sets Links

```
[DataMember(Name = "links", EmitDefaultValue = false)]
public JsonApiLinksSelf Links { get; set; }
```

#### Property Value

[JsonApiLinksSelf](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLinksSelf)

### Relationships

Gets or Sets Relationships

```
[DataMember(Name = "relationships", EmitDefaultValue = false)]
public HubDataRelationships Relationships { get; set; }
```

#### Property Value

[HubDataRelationships](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/HubDataRelationships)

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public TypeHub Type { get; set; }
```

#### Property Value

[TypeHub](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeHub)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/HubData
