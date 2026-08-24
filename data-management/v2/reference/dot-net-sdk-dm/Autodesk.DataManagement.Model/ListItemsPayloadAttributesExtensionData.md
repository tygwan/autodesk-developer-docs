---
title: "ListItemsPayloadAttributesExtensionData Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListItemsPayloadAttributesExtensionData
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class ListItemsPayloadAttributesExtensionData

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

Contains the custom properties specific to the ListItems command.

```
[DataContract]
public class ListItemsPayloadAttributesExtensionData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[ListItemsPayloadAttributesExtensionData](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListItemsPayloadAttributesExtensionData)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ListItemsPayloadAttributesExtensionData()

Initializes a new instance of the class.

```
public ListItemsPayloadAttributesExtensionData()
```

## Properties

### IncludePathInProject

Specify whether to return the
`pathInProject` attribute in response
for BIM 360 Docs projects.
`pathInProject` is the path to
the item relative to the project’s root folder.
- `true`: Response will contain the `pathInProject` attribute for BIM 360 Docs projects.
- `false`: (Default) response will not contain the `pathInProject` attribute for BIM 360 Docs projects.

Setting this parameter to `true` on a
non-BIM 360 Docs project results in an error.

```
[DataMember(Name = "includePathInProject", EmitDefaultValue = false)]
public bool IncludePathInProject { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListItemsPayloadAttributesExtensionData
