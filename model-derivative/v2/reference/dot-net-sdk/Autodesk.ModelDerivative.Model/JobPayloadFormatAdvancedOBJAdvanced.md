---
title: "JobPayloadFormatAdvancedOBJAdvanced Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedOBJAdvanced
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class JobPayloadFormatAdvancedOBJAdvanced

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Advanced options for OBJ output type.

```
[DataContract]
public class JobPayloadFormatAdvancedOBJAdvanced
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[JobPayloadFormatAdvancedOBJAdvanced](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedOBJAdvanced)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### JobPayloadFormatAdvancedOBJAdvanced()

Initializes a new instance of the class.

```
public JobPayloadFormatAdvancedOBJAdvanced()
```

## Properties

### ExportFileStructure

Gets or Sets ExportFileStructure

```
[DataMember(Name = "exportFileStructure", EmitDefaultValue = true)]
public ExportFileStructure ExportFileStructure { get; set; }
```

#### Property Value

[ExportFileStructure](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ExportFileStructure)

### ModelGuid

Required for geometry extractions. Specifies the ID of the Model View that contains the geometry to extract.

```
[DataMember(Name = "modelGuid", EmitDefaultValue = false)]
public string ModelGuid { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ObjectIds

Required for geometry extractions. Specifies the IDs of the objects (``objectID) to extract. -1 will extract the entire model.

```
[DataMember(Name = "objectIds", EmitDefaultValue = false)]
public List<int?> ObjectIds { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)?>

### Unit

Gets or Sets Unit

```
[DataMember(Name = "unit", EmitDefaultValue = true)]
public Unit Unit { get; set; }
```

#### Property Value

[Unit](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Unit)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayloadFormatAdvancedOBJAdvanced
