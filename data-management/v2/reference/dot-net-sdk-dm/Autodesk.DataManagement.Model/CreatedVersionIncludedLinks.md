---
title: "CreatedVersionIncludedLinks Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CreatedVersionIncludedLinks
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class CreatedVersionIncludedLinks

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains the links to use to access references of this resource.

```
[DataContract]
public class CreatedVersionIncludedLinks
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[CreatedVersionIncludedLinks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CreatedVersionIncludedLinks)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CreatedVersionIncludedLinks()

Initializes a new instance of the class.

```
public CreatedVersionIncludedLinks()
```

## Properties

### Related

Gets or Sets Related

```
[DataMember(Name = "related", EmitDefaultValue = false)]
public JsonApiLinksRelated Related { get; set; }
```

#### Property Value

[JsonApiLinksRelated](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLinksRelated)

### Self

Gets or Sets Self

```
[DataMember(Name = "self", EmitDefaultValue = false)]
public JsonApiLinksSelf Self { get; set; }
```

#### Property Value

[JsonApiLinksSelf](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLinksSelf)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CreatedVersionIncludedLinks
