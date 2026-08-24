---
title: "JsonApiRelationshipsRefsDataMetaExtensionData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsRefsDataMetaExtensionData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class JsonApiRelationshipsRefsDataMetaExtensionData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The container of the additional properties. The additional properties must follow the schema specified by `extensions.type` and `extensions.version`. Properties that don’t follow the schema will be ignored.

```
[DataContract]
public class JsonApiRelationshipsRefsDataMetaExtensionData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JsonApiRelationshipsRefsDataMetaExtensionData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsRefsDataMetaExtensionData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JsonApiRelationshipsRefsDataMetaExtensionData()

Initializes a new instance of the class.

```
public JsonApiRelationshipsRefsDataMetaExtensionData()
```

## Properties

### NestedType

Gets or Sets NestedType

```
[DataMember(Name = "nestedType", EmitDefaultValue = true)]
public NestedXref NestedType { get; set; }
```

#### Property Value

[NestedXref](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/NestedXref)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsRefsDataMetaExtensionData
