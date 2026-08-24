---
title: "VersionPayload Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayload
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class VersionPayload

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Describe the version to be created.

```
[DataContract]
public class VersionPayload
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[VersionPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayload)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### VersionPayload()

Initializes a new instance of the class.

```
public VersionPayload()
```

## Properties

### Data

Gets or Sets Data

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public VersionPayloadData Data { get; set; }
```

#### Property Value

[VersionPayloadData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayloadData)

### Jsonapi

Gets or Sets Jsonapi

```
[DataMember(Name = "jsonapi", EmitDefaultValue = false)]
public JsonApiVersion Jsonapi { get; set; }
```

#### Property Value

[JsonApiVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiVersion)

### Meta

Gets or Sets Meta

```
[DataMember(Name = "meta", EmitDefaultValue = false)]
public MetaForWebhooks Meta { get; set; }
```

#### Property Value

[MetaForWebhooks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetaForWebhooks)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayload
