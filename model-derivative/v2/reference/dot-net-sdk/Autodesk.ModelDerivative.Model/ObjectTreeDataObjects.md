---
title: "ObjectTreeDataObjects Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ObjectTreeDataObjects
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class ObjectTreeDataObjects

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

ObjectTreeDataObjects

```
[DataContract]
public class ObjectTreeDataObjects
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ObjectTreeDataObjects](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ObjectTreeDataObjects)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ObjectTreeDataObjects()

Initializes a new instance of the class.

```
public ObjectTreeDataObjects()
```

## Properties

### Name

Name of the object.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ObjectId

A non-persistent ID that is assigned to an object at translation time.

```
[DataMember(Name = "objectid", EmitDefaultValue = false)]
public decimal? ObjectId { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

### Objects

An optional array of objects of type `ObjectTreeDataObjects` where each object represents a child of the current node on the object tree.

```
[DataMember(Name = "objects", EmitDefaultValue = false)]
public List<ObjectTreeDataObjects> Objects { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[ObjectTreeDataObjects](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ObjectTreeDataObjects)>

## Methods

### ToString()

Returns the string presentation of the object

```
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

String presentation of the object

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ObjectTreeDataObjects
