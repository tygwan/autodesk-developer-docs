---
document_type: "graphql-reference-index"
product: "Autodesk Forma"
surface: "aec-data-model"
category: "Queries"
protocol: "GraphQL"
language: "en"
generated: "true"
---

# Queries

[GraphQL reference index](../INDEX.md) · [AEC Data Model API index](../../INDEX.md)

## Queries

| Name | Purpose | Documentation |
| --- | --- | --- |
| associatedElementGroupsByGroup | Returns the associated element group | [Open reference](./associatedelementgroupsbygroup.md) |
| associatedElementsByElements | Returns a list of associated elements from target element Ids. | [Open reference](./associatedelementsbyelements.md) |
| diffElementByVersionWithLatest | Returns the element difference from target element. No support with extension element groups currently. | [Open reference](./diffelementbyversionwithlatest.md) |
| diffElementGroupByVersionWithLatest | Returns a list of element differences and their difference type from target elementGroup. No support with extension element groups currently. | [Open reference](./diffelementgroupbyversionwithlatest.md) |
| distinctPropertyValuesInElementGroupById | Retrieves distinct values in an ElementGroup given a property definition ID. | [Open reference](./distinctpropertyvaluesinelementgroupbyid.md) |
| distinctPropertyValuesInElementGroupByName | Retrieves distinct values in an ElementGroup given a property name. | [Open reference](./distinctpropertyvaluesinelementgroupbyname.md) |
| elementAtTip | Retrieves element using given ID. | [Open reference](./elementattip.md) |
| elementGroupAtTip | Retrieves latest elementGroup data based on given ID. | [Open reference](./elementgroupattip.md) |
| elementGroupByVersionNumber | Retrieves elementGroup by version number and ID. | [Open reference](./elementgroupbyversionnumber.md) |
| elementGroupExtractionStatus | Retrieves the extraction status of the given elementGroup. | [Open reference](./elementgroupextractionstatus.md) |
| elementGroupExtractionStatusAtTip | Retrieves the extraction status of the given elementGroup for the latest version. | [Open reference](./elementgroupextractionstatusattip.md) |
| elementGroupsByFolder | Retrieves elementGroups in the given folder, using additional RSQL filters if provided. | [Open reference](./elementgroupsbyfolder.md) |
| elementGroupsByFolderAndSubFolders | Retrieves elementGroups in the given folder and it's sub-folders recursively, using additional RSQL filters if provided. | [Open reference](./elementgroupsbyfolderandsubfolders.md) |
| elementGroupsByHub | Retrieves elementGroups in the given hub, using additional RSQL filters if provided. | [Open reference](./elementgroupsbyhub.md) |
| elementGroupsByProject | Retrieves elementGroups in the given project, using additional RSQL filters if provided. | [Open reference](./elementgroupsbyproject.md) |
| elementsByElementGroup | Retrieves elements from given elementGroup, using additional RSQL filters if provided. | [Open reference](./elementsbyelementgroup.md) |
| elementsByElementGroupAtVersion | Retrieves elements from given elementGroup at given elementGroup version, using additional RSQL filters if provided. | [Open reference](./elementsbyelementgroupatversion.md) |
| elementsByElementGroupParallel | Retrieves elements from given elementGroup, use elementsByElementGroupParallelCursors to generate the innitial cursors. | [Open reference](./elementsbyelementgroupparallel.md) |
| elementsByElementGroupParallelCursors | Returns a list of cursors which can be used to get all elements of an ElementGroup rapidely in parallel. | [Open reference](./elementsbyelementgroupparallelcursors.md) |
| elementsByFolder | Retrieves elements from given folder, using additional RSQL filters if provided. | [Open reference](./elementsbyfolder.md) |
| elementsByHub | Retrieves elements from given hub, using additional RSQL filters if provided. | [Open reference](./elementsbyhub.md) |
| elementsByProject | Retrieves elements from given project, using additional RSQL filters if provided. | [Open reference](./elementsbyproject.md) |
| folder | Retrieve folder specified by the provided Id | [Open reference](./folder.md) |
| foldersByFolder | Retrieves all subfolders within a specified folder that meet the filter criteria specified by the `filter` argument. | [Open reference](./foldersbyfolder.md) |
| foldersByProject | Retrieves all top level folders under a specified project that meet the filter criteria specified by the `filter` argument. | [Open reference](./foldersbyproject.md) |
| geometryDataByElement | Retrieves geometry data for given element. | [Open reference](./geometrydatabyelement.md) |
| geometryDataByElements | Retrieves geometry data for given elements. | [Open reference](./geometrydatabyelements.md) |
| hub | Retrieves an object representing a hub. | [Open reference](./hub.md) |
| hubs | Retrieves all hubs that match the specified criteria. | [Open reference](./hubs.md) |
| project | Retrieves an object representing a project from a specified hub. | [Open reference](./project.md) |
| projects | Retrieves all projects that match the specified filter criteria from a specified hub. | [Open reference](./projects.md) |
| propertyDefinitionCollection | Retrieves property definition collection using given ID. | [Open reference](./propertydefinitioncollection.md) |
| propertyDefinitionCollectionsByHub | Retrieves property definition collections from given hub. | [Open reference](./propertydefinitioncollectionsbyhub.md) |
| propertyDefinitionsByElementGroup | Get all Property Definitions used in specified elementGroup | [Open reference](./propertydefinitionsbyelementgroup.md) |
| propertyDefinitionSpecifications | Retrieves property definition specifications that can be used for creating property definitions. | [Open reference](./propertydefinitionspecifications.md) |
