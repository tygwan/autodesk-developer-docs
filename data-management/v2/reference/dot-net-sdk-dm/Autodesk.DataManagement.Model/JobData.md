---
title: "JobData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JobData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class JobData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains information about the download creation job.

```
[DataContract]
public class JobData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JobData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobData()

Initializes a new instance of the class.

```
public JobData()
```

## Properties

### Attributes

Gets or Sets Attributes

```
[DataMember(Name = "attributes", EmitDefaultValue = false)]
public JobDataAttributes Attributes { get; set; }
```

#### Property Value

[JobDataAttributes](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JobDataAttributes)

### Id

The Job ID of the job creating the download.

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

### Type

Gets or Sets Type

```
[DataMember(Name = "type", EmitDefaultValue = true)]
public TypeJob Type { get; set; }
```

#### Property Value

[TypeJob](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeJob)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JobData
