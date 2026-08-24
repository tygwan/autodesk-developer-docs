---
title: "SpecificPropertiesPayloadPagination Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPayloadPagination
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class SpecificPropertiesPayloadPagination

Namespace: [Autodesk.ModelDerivative.Model](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model)Assembly: Autodesk.ModelDerivative.dll

Specifies how to split the response into multiple pages, and return the response one page at a time.

```
[DataContract]
public class SpecificPropertiesPayloadPagination
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[SpecificPropertiesPayloadPagination](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPayloadPagination)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SpecificPropertiesPayloadPagination()

Initializes a new instance of the class.

```
public SpecificPropertiesPayloadPagination()
```

## Properties

### Limit

The maximum number of properties to return in a single page. Use this attribute with the `offset` attribute to split the properties into multiple pages. To fetch the first page, specify `offset` =0 (do not skip any properties). To fetch the second page, specify `offset` = value of `limit` you specified for the first page. So, the server skips the search results returned on the first page. In general, `offset` = `previous_offset` + `previous_limit`. This attribute is 20 by default. The minimum value is 1 and the maximum is 1000.

```
[DataMember(Name = "limit", EmitDefaultValue = false)]
public decimal? Limit { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

### Offset

The number of properties to skip. Use this attribute with the `limit` attribute to split the properties into multiple pages. To fetch the first page, specify `offset` =0 (do not skip any properties). To fetch the second page, specify `offset` = value of `limit` you specified for the first page. So, the server skips the properties returned on the first page. In general, `offset` = `previous_offset` + `previous_limit`. This attribute is 0 by default. The minimum value is 0.

```
[DataMember(Name = "offset", EmitDefaultValue = false)]
public decimal? Offset { get; set; }
```

#### Property Value

[decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

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
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPayloadPagination
