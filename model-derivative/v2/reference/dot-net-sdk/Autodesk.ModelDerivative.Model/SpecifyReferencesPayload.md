---
title: "SpecifyReferencesPayload Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecifyReferencesPayload
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class SpecifyReferencesPayload

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Represents the successful response of a Specify References operation.

```
[DataContract]
public class SpecifyReferencesPayload
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[SpecifyReferencesPayload](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecifyReferencesPayload)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SpecifyReferencesPayload()

Initializes a new instance of the class.

```
public SpecifyReferencesPayload()
```

## Properties

### Filename

The file name of the top level component. By default, it is set to `""` and the file will be download with its `urn`.

```
[DataMember(Name = "filename", EmitDefaultValue = false)]
public string Filename { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### References

An array of objects, where each object represents a referenced file.

```
[DataMember(Name = "references", EmitDefaultValue = false)]
public List<SpecifyReferencesPayloadReferences> References { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[SpecifyReferencesPayloadReferences](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecifyReferencesPayloadReferences)>

### Region

Gets or Sets Region

```
[DataMember(Name = "region", EmitDefaultValue = true)]
public Region Region { get; set; }
```

#### Property Value

[Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

### Urn

The URL safe Base64 encoded URN of the source design. Mandatory if the Base64 encoded urn in the request URL is a logical URN.

```
[DataMember(Name = "urn", EmitDefaultValue = false)]
public string Urn { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecifyReferencesPayload
