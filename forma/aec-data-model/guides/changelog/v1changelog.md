---
title: "Changelog"
url_path: changelog/v1changelog
surface: guide
---
# Changelog

## Release Date: 2026-04-07

This generally available release covers **Geometry**, **Extensibility**, and **Work in Progress Revit data** in the reference guide and tutorials. Schema additions and updates for each area are listed below.

### Geometry

#### Queries
- **geometryDataByElement** - Retrieves geometry data for a single element
- **geometryDataByElements** - Retrieves geometry data for multiple elements

#### Objects
- **AxisRepresentationComponent** - Axis representation for structural-style geometry
- **BCurve** - B-curve geometry primitive
- **BinaryData** - Binary geometry payload metadata
- **BodyRepresentationComponent** - Body representation (including IFC-oriented geometry) on elements
- **Circle** - Circle geometry primitive
- **CurveType** - Curve kind enumeration
- **DownloadInfo** - Download location metadata for geometry payloads
- **Ellipse** - Ellipse geometry primitive
- **GeometryComponentType** - Geometry component type enumeration
- **GeometryDataOutput** - Per-element geometry output
- **GeometryDataResponse** - Top-level response for geometry queries
- **GeometryInstance** - Instanced geometry
- **GeometryPiece** - Single geometry piece
- **GeometryPrimitive** - Primitive geometry (curves and points)
- **GeometryRepresentationData** - Container for geometry pieces
- **Line** - Line geometry primitive
- **OriginComponent** - Origin information for elements
- **ParamRange** - Parameter range on curve geometry
- **Point** - Point geometry primitive
- **Polyline** - Polyline geometry primitive
- **Transform** - Transform for instanced geometry
- **Vector** - Vector type used in geometry transforms

#### Unions
- **BodyRepresentationData** - Body representation variants
- **GeometryPieceData** - Geometry piece variants (primitives, instances, binary data)
- **PrimitiveValue** - Curve and point variants used under geometry primitives

#### Interfaces
- **Curve** - Common fields for curve geometry

#### Inputs
- **GeometryComponentsFilterInput** - Filter for geometry-related components
- **OriginComponentFilterInput** - Filter for origin components
- **OriginPoints** - Origin point inputs
- **OriginRange** - Origin range inputs

#### Documentation
- [Retrieve Geometry Data](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/geometry/get-axis-origin-elements/) (tutorials, including axis, origin, and binary or export-oriented tasks)

### Extensibility

For existing Extensibility BETA Customers: Recommended schemas for creating Extension Property definitions have changed. Please refer to the [Extensibility Tutorial](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/extend_element_data/create_property_definition/) for more details.

#### Mutations
- **addExtensionPropertiesToElements** - Adds extension properties to elements
- **createExtensionElementGroup** - Creates an extension element group for a model element group
- **createPropertyDefinitionCollectionInHub** - Creates a property definition collection in a hub
- **createPropertyDefinitionsInCollection** - Creates property definitions in a collection
- **removeExtensionPropertiesFromElements** - Removes extension properties from elements
- **updateExtensionPropertiesOnElements** - Updates extension properties on elements

#### Queries
- **propertyDefinitionCollection** - Retrieves a property definition collection
- **propertyDefinitionCollectionsByHub** - Lists property definition collections in a hub
- **propertyDefinitionsByElementGroup** - Property definitions available for an element group
- **propertyDefinitionSpecifications** - Specifications for creating property definitions

#### Objects
- **AddExtensionPropertiesPayload** - Result of add extension properties
- **AuthoringClient** - Authoring client metadata for extension workflows
- **CreatePropertyDefinitionCollectionInHubPayload** - Result of creating a collection in a hub
- **CreatePropertyDefinitionsInCollectionPayload** - Result of creating definitions in a collection
- **ExtensionComponent** - Extension component on elements
- **PropertyDefinition** - Property definition metadata
- **PropertyDefinitions** - List of property definitions
- **propertyDefinitionCollection** (object type) - Property definition collection
- **ReferenceProperties** - Reference-typed extension properties container
- **ReferenceProperty** - Single reference property
- **RemoveExtensionPropertiesPayload** - Result of remove extension properties
- **RevisionComponent** - Revision metadata for extensibility
- **UpdateExtensionPropertiesPayload** - Result of update extension properties

#### Inputs
- **AddExtensionPropertiesInput** - Input for adding extension properties
- **CategoryFilterInput** - Category-based selection for extension mutations
- **CreatePropertyDefinitionCollectionInHubInput** - Input for creating a collection in a hub
- **CreatePropertyDefinitionsInCollectionInput** - Input for creating definitions
- **ExtensibilityFilterInput** - Filter for extensibility-scoped element queries
- **ExtensionPropertyInput** - Extension property values to add or update
- **ExtensionPropertyTarget** - Targets for extension property operations
- **PropertyDefinitionInCollectionInput** - Property definition fields inside a collection
- **PropertyDefinitionFilterInput** - Filter for property-definition queries
- **RemoveExtensionPropertiesInput** - Input for removing extension properties
- **UpdateExtensionPropertiesInput** - Input for updating extension properties

#### Enhanced inputs
- **ElementFilterInput** - Adds **extensibilityFilter** (`ExtensibilityFilterInput`) for querying extension-backed elements

#### Documentation
- [Extensibility of Element Data](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/extend_element_data/create_property_definition) (tutorials)

### Work in Progress Revit data

#### Queries
- **elementGroupAtTip** - Latest element group state, including `versionHistory` for timeline and published versions
- **diffElementByVersionWithLatest** - Differences for an element from a start version to the latest version
- **diffElementGroupByVersionWithLatest** - Differences for an element group from a start version to the latest version

#### Enhanced queries
- **elementGroupByVersionNumber** - Accepts **versionFilter** (`VersionFilterInput`) so version numbers can resolve to Work in Progress or Published versions
- **elementsByElementGroupAtVersion** - Accepts **versionFilter** (`VersionFilterInput`) for the same resolution behavior

#### Objects and enums
- **VersionTypeEnum** - Whether a version number refers to Work in Progress (timeline) or Published (lineage)

#### Inputs
- **VersionFilterInput** - Selects Work in Progress versus Published interpretation for version numbers

#### Enhanced objects
- **ElementGroupVersion** - Adds **wipVersionNumber** (Work in Progress timeline version; null when Work in Progress data is not available)
- **ElementGroupVersionHistory** - **versionByNumber** accepts optional **versionFilter** for consistent version resolution

#### Documentation
- [Working with Work In Progress Data](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/revit_sync/query_sync_data) (querying version history, `versionFilter`, and diffs versus latest)

### Retrieve Differences of an Element Group

#### Queries
- **diffElementByVersionWithLatest** - Differences for an element from a start version to the latest version
- **diffElementGroupByVersionWithLatest** - Differences for an element group from a start version to the latest version

#### Objects and enums
- **ComponentDifferences** - Component-level difference information for properties
- **DifferenceType** - Kind of change in a diff
- **ElementDifference** - Differences within one element
- **ElementGroupDifference** - Differences across an element group
- **PropertyDifference** - Property-level differences

#### Documentation
- [Diff API Tutorial](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/diff_api/diff_api_tutorial) (tutorial for retrieving differences between versions of an element or element group)

## Release Date: 2025-12-01

Standard Filtering and Advanced Filtering updated with Special Considerations for PropertyName Filters.
- [Standard Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/standard-filtering)
- [Advanced Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/advanced-filtering)

New Special Considerations of Filtering section
- [Special Considerations of Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/special-considerations-filtering)

## Release Date: 2025-10-24

New region support:
- India (IND)
- United Kingdom (GBR)
- Germany (DEU)
- Canada (CAN)
- Japan (JPN)

## Release Date: 2025-03-31

New queries:
- elementGroupExtractionStatusAtTip for extraction status check of latest uploaded version by default.
- propertyDefinitionsByElementGroup added for getting property definitions by element group at top-level.

## Release Date: 2025-02-19

Support for Australia region.

## Release Date: 2025-01-10

Revit Element ID property is being deprecated and support will be removed after October 1, 2025.

Please use revitElementId from ElementAlternativeIdentifiers and ElementFilterInput instead.

## Release Date: 2024-11-29

New field revitElementId added to ElementAlternativeIdentifiers and ElementFilterInput
- [ElementAlternativeIdentifiers](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/objects/elementalternativeidentifiers)
- [ElementFilterInput](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/inputs/elementfilterinput)

Support searching for elements using revitElementId.
- [Standard Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/standard-filtering)
- [Advanced Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/advanced-filtering)

NOTE:
This release adds support for revitElementId metadata field which is equivalent to the data available in “Revit Element ID” property.

## Release Date: 2024-10-04

Standard Filtering and Advanced Filtering updated with Special Considerations for ElementGroup Filters (name and fileUrn).

Also updated for a new ElementFilterInput - elementId and metadata.elementId, which return elements having the id specified in the filter.

Renamed Designs to ElementGroups.
- [Standard Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/standard-filtering)
- [Advanced Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/advanced-filtering)

## Release Date: 2024-09-13

Query Point Value has been added to data.extensions field of the response and is generally available to all users. This information is included in the response to all valid queries.
- [Knowing the point value of a query](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/ratelimit/#knowing-the-point-value-of-a-query)

## Release Date: 2024-09-05

The following queries are added to retrieve distinct values of properties in the AEC Data Model API:
- [distinctPropertyValuesInElementGroupById](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/distinctpropertyvaluesinelementgroupbyid)
- [distinctPropertyValuesInElementGroupByName](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/distinctpropertyvaluesinelementgroupbyname)

## Release Date: 2024-06-24

AEC Data Model API made Generally Available.

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/changelog/v1changelog
