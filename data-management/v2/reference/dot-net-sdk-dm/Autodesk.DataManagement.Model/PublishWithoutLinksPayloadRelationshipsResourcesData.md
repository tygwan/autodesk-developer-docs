---
title: "PublishWithoutLinksPayloadRelationshipsResourcesData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishWithoutLinksPayloadRelationshipsResourcesData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class PublishWithoutLinksPayloadRelationshipsResourcesData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

PublishModelPayloadRelationshipsResourcesData

```
[DataContract]
public class PublishWithoutLinksPayloadRelationshipsResourcesData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PublishWithoutLinksPayloadRelationshipsResourcesData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishWithoutLinksPayloadRelationshipsResourcesData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### PublishWithoutLinksPayloadRelationshipsResourcesData()

Initializes a new instance of the class.

```
public PublishWithoutLinksPayloadRelationshipsResourcesData()
```

## Properties

### Id

The URN of the resource. For information about
finding the URN, see the initial steps
of the
[Publish a C4R Model to BIM 360 Docs](https://aps.autodesk.com/en/docs/data/v2/tutorials/publish-model/)
tutorial.

```
[DataMember(Name = "id", EmitDefaultValue = false)]
public string Id { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public TypeItem Type { get; set; }
```

#### Property Value

[TypeItem](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeItem)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishWithoutLinksPayloadRelationshipsResourcesData
