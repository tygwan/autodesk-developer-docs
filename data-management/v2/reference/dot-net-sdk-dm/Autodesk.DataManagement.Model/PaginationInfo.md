---
title: "PaginationInfo Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PaginationInfo
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class PaginationInfo

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

An object that is returned with responses that can be split across multiple pages. “Next,” “Previous,” and “First” are available only if the response is split across multiple pages.

```
[DataContract]
public class PaginationInfo
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[PaginationInfo](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PaginationInfo)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### PaginationInfo()

Initializes a new instance of the class.

```
public PaginationInfo()
```

## Properties

### First

Gets or Sets First

```
[DataMember(Name = "first", EmitDefaultValue = false)]
public PaginationInfoFirst First { get; set; }
```

#### Property Value

[PaginationInfoFirst](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PaginationInfoFirst)

### Next

Gets or Sets Next

```
[DataMember(Name = "next", EmitDefaultValue = false)]
public PaginationInfoNext Next { get; set; }
```

#### Property Value

[PaginationInfoNext](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PaginationInfoNext)

### Prev

Gets or Sets Prev

```
[DataMember(Name = "prev", EmitDefaultValue = false)]
public PaginationInfoPrev Prev { get; set; }
```

#### Property Value

[PaginationInfoPrev](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PaginationInfoPrev)

### Self

Gets or Sets Self

```
[DataMember(Name = "self", EmitDefaultValue = false)]
public PaginationInfoSelf Self { get; set; }
```

#### Property Value

[PaginationInfoSelf](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PaginationInfoSelf)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PaginationInfo
