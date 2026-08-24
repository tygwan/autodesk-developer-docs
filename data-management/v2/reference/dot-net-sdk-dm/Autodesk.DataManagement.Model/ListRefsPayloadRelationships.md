---
title: "ListRefsPayloadRelationships Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefsPayloadRelationships
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ListRefsPayloadRelationships

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains a list of resources required for execution of the command.

```
[DataContract]
public class ListRefsPayloadRelationships
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ListRefsPayloadRelationships](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefsPayloadRelationships)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ListRefsPayloadRelationships()

Initializes a new instance of the class.

```
public ListRefsPayloadRelationships()
```

## Properties

### Resources

Gets or Sets Resources

```
[DataMember(Name = "resources", EmitDefaultValue = false)]
public ListRefsPayloadRelationshipsResources Resources { get; set; }
```

#### Property Value

[ListRefsPayloadRelationshipsResources](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefsPayloadRelationshipsResources)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefsPayloadRelationships
