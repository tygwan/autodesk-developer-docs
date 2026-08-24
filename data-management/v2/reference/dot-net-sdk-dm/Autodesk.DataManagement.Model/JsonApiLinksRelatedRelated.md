---
title: "JsonApiLinksRelatedRelated Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLinksRelatedRelated
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class JsonApiLinksRelatedRelated

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

An object containing the endpoint to retrieve a list of related resources.

```
[DataContract]
public class JsonApiLinksRelatedRelated
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JsonApiLinksRelatedRelated](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLinksRelatedRelated)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JsonApiLinksRelatedRelated()

Initializes a new instance of the class.

```
public JsonApiLinksRelatedRelated()
```

## Properties

### Href

The URI of the endpoint that returns the related resources.

```
[DataMember(Name = "href", EmitDefaultValue = false)]
public string Href { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLinksRelatedRelated
