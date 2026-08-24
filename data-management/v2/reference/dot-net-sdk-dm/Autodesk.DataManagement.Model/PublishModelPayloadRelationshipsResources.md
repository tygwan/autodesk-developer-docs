---
title: "PublishModelPayloadRelationshipsResources Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelPayloadRelationshipsResources
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class PublishModelPayloadRelationshipsResources

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains the list of resources to be published.

```
[DataContract]
public class PublishModelPayloadRelationshipsResources
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PublishModelPayloadRelationshipsResources](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelPayloadRelationshipsResources)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### PublishModelPayloadRelationshipsResources()

Initializes a new instance of the class.

```
public PublishModelPayloadRelationshipsResources()
```

## Properties

### Data

An array of objects where each object
represents a resource that must be
published.

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public List<PublishModelPayloadRelationshipsResourcesData> Data { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[PublishModelPayloadRelationshipsResourcesData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelPayloadRelationshipsResourcesData)>

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelPayloadRelationshipsResources
