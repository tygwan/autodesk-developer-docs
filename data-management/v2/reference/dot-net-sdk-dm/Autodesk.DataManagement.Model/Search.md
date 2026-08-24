---
title: "Search Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Search
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class Search

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Successful retrieval of the search results.

```
[DataContract]
public class Search
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Search](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Search)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Search()

Initializes a new instance of the class.

```
public Search()
```

## Properties

### Data

The object containing information on this resource.

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public List<VersionData> Data { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[VersionData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionData)>

### Included

Information on the latest versions of the items in this resource.

```
[DataMember(Name = "included", EmitDefaultValue = false)]
public List<ItemData> Included { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[ItemData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemData)>

### Jsonapi

Gets or Sets Jsonapi

```
[DataMember(Name = "jsonapi", EmitDefaultValue = false)]
public JsonApiVersion Jsonapi { get; set; }
```

#### Property Value

[JsonApiVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiVersion)

### Links

Gets or Sets Links

```
[DataMember(Name = "links", EmitDefaultValue = false)]
public PaginationInfo Links { get; set; }
```

#### Property Value

[PaginationInfo](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PaginationInfo)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Search
