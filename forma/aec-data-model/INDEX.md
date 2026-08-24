---
document_type: "api-index"
product: "Autodesk Forma"
surface: "aec-data-model"
protocol: "GraphQL"
api_version: "v1"
language: "en"
generated: "true"
---

# AEC Data Model API

[Autodesk Forma index](../INDEX.md) · [Product overview](../README.md)

## Overview

GraphQL API for querying and extending AEC element data.

- **Protocol:** GraphQL
- **API version:** `v1`
- **Official source:** [Autodesk documentation](https://aps.autodesk.com/en/docs/aecdatamodel/v1)

## Start here

- [GraphQL HTTP endpoint](./reference/graphqlendpoint.md)
- [Complete GraphQL reference](./reference/INDEX.md)

## Capability map

| Capability | What it provides | Key queries or mutations | Documentation |
| --- | --- | --- | --- |
| Hubs, projects, and folders | Navigate hubs, projects, folders, and subfolders. | `hubs`, `projects`, `foldersByProject` | [Open reference](./reference/queries/INDEX.md) |
| Element groups and versions | Find element groups, tip versions, version history, and extraction status. | `elementGroupsByProject`, `elementGroupAtTip`, `elementGroupByVersionNumber` | [Open reference](./reference/queries/INDEX.md) |
| Elements and properties | Query elements, filter by metadata, and retrieve distinct property values. | `elementsByProject`, `elementsByElementGroup`, `distinctPropertyValuesInElementGroupByName` | [Open reference](./reference/queries/INDEX.md) |
| Geometry data | Retrieve geometry data, axes, origins, bodies, curves, and primitive representations. | `geometryDataByElement`, `geometryDataByElements` | [Open reference](./reference/queries/INDEX.md) |
| Version comparison | Compare element and element-group versions with the latest version. | `diffElementByVersionWithLatest`, `diffElementGroupByVersionWithLatest` | [Open reference](./reference/queries/INDEX.md) |
| Property definitions | Read and create property-definition collections and specifications. | `propertyDefinitionCollection`, `propertyDefinitionSpecifications` | [Open reference](./reference/queries/INDEX.md) |
| Extension properties | Add, update, and remove extension properties on elements. | `addExtensionPropertiesToElements`, `updateExtensionPropertiesOnElements` | [Open reference](./reference/mutations/INDEX.md) |

## API reference

| Category | Documentation |
| --- | --- |
| Queries | [Open reference](./reference/queries/INDEX.md) |
| Mutations | [Open reference](./reference/mutations/INDEX.md) |
| Objects | [Open reference](./reference/objects/INDEX.md) |
| Inputs | [Open reference](./reference/inputs/INDEX.md) |
| Interfaces | [Open reference](./reference/interfaces/INDEX.md) |
| Unions | [Open reference](./reference/unions/INDEX.md) |
| Scalars | [Open reference](./reference/scalars.md) |

## Guides and tutorials

### Changelog

- [Changelog](./guides/changelog/v1changelog.md)

### Code Samples

- [Compare Designs](./guides/code-samples/compareversions.md)
- [Elementgroup Validation](./guides/code-samples/elementGroupvalidation.md)
- [Furniture Procurement Dashboard](./guides/code-samples/procurementdashboard.md)
- [Quantity TakeOff](./guides/code-samples/quantity.md)
- [Window Schedule](./guides/code-samples/schedule.md)

### Developers Guide

- [About AEC Data Model Explorer](./guides/developers_guide/aecima_data_explorer.md)
- [About GraphQL](./guides/developers_guide/about-graphql.md)
- [Advanced Filtering Using RSQL](./guides/developers_guide/filtering/advanced-filtering.md)
- [AEC Data Model Rate Limits](./guides/developers_guide/ratelimit.md)
- [API Capabilities](./guides/developers_guide/API Essentials/capabilities.md)
- [API Constructs](./guides/developers_guide/API Essentials/constructs.md)
- [FAQ](./guides/developers_guide/faq.md)
- [Known Limitations](./guides/developers_guide/knownlimitations.md)
- [Onboarding to AEC Data Model](./guides/developers_guide/onboarding.md)
- [Overview](./guides/developers_guide/overview.md)
- [Pagination](./guides/developers_guide/pagination.md)
- [Regions Supported](./guides/developers_guide/regions.md)
- [Special Considerations of Filtering](./guides/developers_guide/filtering/special-considerations-filtering.md)
- [Standard Filtering](./guides/developers_guide/filtering/standard-filtering.md)
- [Using the API](./guides/developers_guide/API Essentials/usage.md)

### Tutorials

- [Additional Information](./guides/tutorials/extend_element_data/additional_information.md)
- [Before You Begin](./guides/tutorials/before_you_begin.md)
- [Filter elements by their origin](./guides/tutorials/geometry/filter-elements-by-origin.md)
- [Get axis and origin information for elements](./guides/tutorials/geometry/get-axis-origin-elements.md)
- [Get Distinct Values of Properties](./guides/tutorials/tutorial02/distinctvaluesquery.md)
- [Get Element Instances in a Category by Version](./guides/tutorials/tutorial02/task4a.md)
- [Get Element Instances of a Particular Type](./guides/tutorials/tutorial02/task3a.md)
- [Get ElementGroups Based on Metadata](./guides/tutorials/tutorial02/task1a.md)
- [Get Elements by Using Instances or Reference](./guides/tutorials/tutorial02/task6a.md)
- [Get Elements from a Category](./guides/tutorials/tutorial01/elementsbycategory.md)
- [Get Hubs](./guides/tutorials/tutorial01/gethubs.md)
- [Get Project Elements with specific Properties](./guides/tutorials/tutorial02/task5a.md)
- [Get Projects](./guides/tutorials/tutorial01/getprojects.md)
- [Get Versions of a ElementGroup](./guides/tutorials/tutorial02/task2a.md)
- [Navigate to ElementGroups within a Project](./guides/tutorials/tutorial01/nav-elements.md)
- [Query Work In Progress Data](./guides/tutorials/revit_sync/query_sync_data.md)
- [Task 1 -  Property Definition Creation](./guides/tutorials/extend_element_data/create_property_definition.md)
- [Task 1 - Retrieve Differences of an Element Group](./guides/tutorials/diff_api/diff_api_tutorial.md)
- [Task 2 - Add Custom Cost Property to Elements](./guides/tutorials/extend_element_data/custom_property_elements.md)
- [Task 3 - Update Cost Property](./guides/tutorials/extend_element_data/update_cost_property.md)
- [Task 4 - Retrieve Door Elements](./guides/tutorials/extend_element_data/retrieve_all_elements.md)
- [Task 5 - Remove Cost Property](./guides/tutorials/extend_element_data/remove_cost_property.md)
- [Task 6- Add, Update and Remove Properties Using Category Filter](./guides/tutorials/extend_element_data/category_binding_filter_workflow.md)

## Provenance

- [Build metadata](./_meta/build.json)
- [Coverage report](./_meta/coverage.json)
- [Page manifest](./_meta/manifest.json)
- [Stable page IDs](./_meta/pages.json)
- **Source build:** `forge-aim-graphql-docs-main-695451`
- **Coverage status:** `complete`

Captured documentation values are preserved as published. Use Git history to inspect snapshot changes.
