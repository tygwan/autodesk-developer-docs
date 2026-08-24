---
title: "VersionDataRelationships Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionDataRelationships
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class VersionDataRelationships

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains information on other resources related to this resource.

```
[DataContract]
public class VersionDataRelationships
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[VersionDataRelationships](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionDataRelationships)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### VersionDataRelationships()

Initializes a new instance of the class.

```
public VersionDataRelationships()
```

## Properties

### Derivatives

Gets or Sets Derivatives

```
[DataMember(Name = "derivatives", EmitDefaultValue = false)]
public VersionDataRelationshipsDerivatives Derivatives { get; set; }
```

#### Property Value

[VersionDataRelationshipsDerivatives](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionDataRelationshipsDerivatives)

### DownloadFormats

Gets or Sets DownloadFormats

```
[DataMember(Name = "downloadFormats", EmitDefaultValue = false)]
public VersionDataRelationshipsDownloadFormats DownloadFormats { get; set; }
```

#### Property Value

[VersionDataRelationshipsDownloadFormats](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionDataRelationshipsDownloadFormats)

### Item

Gets or Sets Item

```
[DataMember(Name = "item", EmitDefaultValue = false)]
public VersionDataRelationshipsItem Item { get; set; }
```

#### Property Value

[VersionDataRelationshipsItem](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionDataRelationshipsItem)

### Links

Gets or Sets Links

```
[DataMember(Name = "links", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksLinks Links { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksLinks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksLinks)

### Refs

Gets or Sets Refs

```
[DataMember(Name = "refs", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksRefs Refs { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksRefs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksRefs)

### Storage

Gets or Sets Storage

```
[DataMember(Name = "storage", EmitDefaultValue = false)]
public VersionDataRelationshipsStorage Storage { get; set; }
```

#### Property Value

[VersionDataRelationshipsStorage](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionDataRelationshipsStorage)

### Thumbnails

Gets or Sets Thumbnails

```
[DataMember(Name = "thumbnails", EmitDefaultValue = false)]
public VersionDataRelationshipsThumbnails Thumbnails { get; set; }
```

#### Property Value

[VersionDataRelationshipsThumbnails](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionDataRelationshipsThumbnails)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionDataRelationships
