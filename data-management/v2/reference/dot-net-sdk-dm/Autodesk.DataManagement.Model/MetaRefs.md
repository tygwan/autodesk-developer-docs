---
title: "MetaRefs Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetaRefs
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class MetaRefs

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Metadata on the resources referenced by this resource.

```
[DataContract]
public class MetaRefs
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[MetaRefs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetaRefs)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### MetaRefs()

Initializes a new instance of the class.

```
public MetaRefs()
```

## Properties

### Direction

Gets or Sets Direction

```
[DataMember(Name = "direction", EmitDefaultValue = true)]
public MetarefsDirection Direction { get; set; }
```

#### Property Value

[MetarefsDirection](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetarefsDirection)

### Extension

Gets or Sets Extension

```
[DataMember(Name = "extension", EmitDefaultValue = false)]
public BaseAttributesExtensionObjectWithSchemaLink Extension { get; set; }
```

#### Property Value

[BaseAttributesExtensionObjectWithSchemaLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/BaseAttributesExtensionObjectWithSchemaLink)

### FromId

The ID of the resource from where data flows.

```
[DataMember(Name = "fromId", EmitDefaultValue = false)]
public string FromId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### FromType

Gets or Sets FromType

```
[DataMember(Name = "fromType", EmitDefaultValue = true)]
public TypeEntity FromType { get; set; }
```

#### Property Value

[TypeEntity](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeEntity)

### RefType

Gets or Sets RefType

```
[DataMember(Name = "refType", EmitDefaultValue = true)]
public TypeRef RefType { get; set; }
```

#### Property Value

[TypeRef](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeRef)

### ToId

The ID of the resource to where the data flows.

```
[DataMember(Name = "toId", EmitDefaultValue = false)]
public string ToId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ToType

Gets or Sets ToType

```
[DataMember(Name = "toType", EmitDefaultValue = true)]
public TypeEntity ToType { get; set; }
```

#### Property Value

[TypeEntity](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TypeEntity)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/MetaRefs
