---
title: "ListRefsPayloadRelationshipsResources Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefsPayloadRelationshipsResources
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ListRefsPayloadRelationshipsResources

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains the list of versions to check. The list can contain up to 50 versions.

```
[DataContract]
public class ListRefsPayloadRelationshipsResources
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ListRefsPayloadRelationshipsResources](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefsPayloadRelationshipsResources)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ListRefsPayloadRelationshipsResources()

Initializes a new instance of the class.

```
public ListRefsPayloadRelationshipsResources()
```

## Properties

### Data

An array of objects, where each object
represents a version to check.

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public List<ListRefsPayloadRelationshipsResourcesData> Data { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[ListRefsPayloadRelationshipsResourcesData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefsPayloadRelationshipsResourcesData)>

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefsPayloadRelationshipsResources
