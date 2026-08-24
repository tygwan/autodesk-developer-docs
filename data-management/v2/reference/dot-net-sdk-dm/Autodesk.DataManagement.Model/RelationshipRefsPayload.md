---
title: "RelationshipRefsPayload Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayload
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class RelationshipRefsPayload

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

An object that describes the custom relationship to be created.

```
[DataContract]
public class RelationshipRefsPayload
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[RelationshipRefsPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayload)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### RelationshipRefsPayload()

Initializes a new instance of the class.

```
public RelationshipRefsPayload()
```

## Properties

### Data

Gets or Sets Data

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public RelationshipRefsPayloadData Data { get; set; }
```

#### Property Value

[RelationshipRefsPayloadData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayloadData)

### Jsonapi

Gets or Sets Jsonapi

```
[DataMember(Name = "jsonapi", EmitDefaultValue = false)]
public JsonApiVersion Jsonapi { get; set; }
```

#### Property Value

[JsonApiVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiVersion)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayload
