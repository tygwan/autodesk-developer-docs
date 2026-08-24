---
title: "ProjectDataRelationships Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ProjectDataRelationships
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ProjectDataRelationships

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains links to resources related to this project.

```
[DataContract]
public class ProjectDataRelationships
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ProjectDataRelationships](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ProjectDataRelationships)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ProjectDataRelationships()

Initializes a new instance of the class.

```
public ProjectDataRelationships()
```

## Properties

### Checklists

Gets or Sets Checklists

```
[DataMember(Name = "checklists", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksOnlyBim Checklists { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksOnlyBim](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksOnlyBim)

### Cost

Gets or Sets Cost

```
[DataMember(Name = "cost", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksOnlyBim Cost { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksOnlyBim](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksOnlyBim)

### Hub

Gets or Sets Hub

```
[DataMember(Name = "hub", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksInternalResource Hub { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksInternalResource](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksInternalResource)

### Issues

Gets or Sets Issues

```
[DataMember(Name = "issues", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksOnlyBim Issues { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksOnlyBim](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksOnlyBim)

### Locations

Gets or Sets Locations

```
[DataMember(Name = "locations", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksOnlyBim Locations { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksOnlyBim](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksOnlyBim)

### Markups

Gets or Sets Markups

```
[DataMember(Name = "markups", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksOnlyBim Markups { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksOnlyBim](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksOnlyBim)

### Rfis

Gets or Sets Rfis

```
[DataMember(Name = "rfis", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksOnlyBim Rfis { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksOnlyBim](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksOnlyBim)

### RootFolder

Gets or Sets RootFolder

```
[DataMember(Name = "rootFolder", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksRootFolder RootFolder { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksRootFolder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksRootFolder)

### Submittals

Gets or Sets Submittals

```
[DataMember(Name = "submittals", EmitDefaultValue = false)]
public JsonApiRelationshipsLinksOnlyBim Submittals { get; set; }
```

#### Property Value

[JsonApiRelationshipsLinksOnlyBim](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/JsonApiRelationshipsLinksOnlyBim)

### TopFolders

Gets or Sets TopFolders

```
[DataMember(Name = "topFolders", EmitDefaultValue = false)]
public ProjectDataRelationshipsTopFolders TopFolders { get; set; }
```

#### Property Value

[ProjectDataRelationshipsTopFolders](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ProjectDataRelationshipsTopFolders)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ProjectDataRelationships
