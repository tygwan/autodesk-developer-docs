---
title: "FolderContentsLinks Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderContentsLinks
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class FolderContentsLinks

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Information on links for this resource. `first`, `prev`, and `next` are available only when the response is paginated.

```
[DataContract]
public class FolderContentsLinks
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[FolderContentsLinks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderContentsLinks)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### FolderContentsLinks()

Initializes a new instance of the class.

```
public FolderContentsLinks()
```

## Properties

### First

Gets or Sets First

```
[DataMember(Name = "first", EmitDefaultValue = false)]
public JsonApiLink First { get; set; }
```

#### Property Value

[JsonApiLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLink)

### Next

Gets or Sets Next

```
[DataMember(Name = "next", EmitDefaultValue = false)]
public JsonApiLink Next { get; set; }
```

#### Property Value

[JsonApiLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLink)

### Prev

Gets or Sets Prev

```
[DataMember(Name = "prev", EmitDefaultValue = false)]
public JsonApiLink Prev { get; set; }
```

#### Property Value

[JsonApiLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLink)

### Self

Gets or Sets Self

```
[DataMember(Name = "self", EmitDefaultValue = false)]
public JsonApiLink Self { get; set; }
```

#### Property Value

[JsonApiLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLink)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderContentsLinks
