---
title: "RelationshipLinksDataMeta Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipLinksDataMeta
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class RelationshipLinksDataMeta

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The meta-information of the links of this resource.

```
[DataContract]
public class RelationshipLinksDataMeta
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[RelationshipLinksDataMeta](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipLinksDataMeta)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### RelationshipLinksDataMeta()

Initializes a new instance of the class.

```
public RelationshipLinksDataMeta()
```

## Properties

### Data

Gets or Sets Data

```
[DataMember(Name = "data", EmitDefaultValue = false)]
public RelationshipLinksDataMetaData Data { get; set; }
```

#### Property Value

[RelationshipLinksDataMetaData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipLinksDataMetaData)

### Extension

Gets or Sets Extension

```
[DataMember(Name = "extension", EmitDefaultValue = false)]
public BaseAttributesExtensionObjectWithSchemaLink Extension { get; set; }
```

#### Property Value

[BaseAttributesExtensionObjectWithSchemaLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/BaseAttributesExtensionObjectWithSchemaLink)

### Link

Gets or Sets Link

```
[DataMember(Name = "link", EmitDefaultValue = false)]
public JsonApiLink Link { get; set; }
```

#### Property Value

[JsonApiLink](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiLink)

### MimeType

The MIME type of the content of the resource.

```
[DataMember(Name = "mimeType", EmitDefaultValue = false)]
public string MimeType { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipLinksDataMeta
