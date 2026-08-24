---
title: "Assets"
url_path: overview/field-guide/assets
surface: guide
---
# Forma Assets API Field Guide

This field guide describes the components of the Forma Assets service and shows how they work together. It also provides key concepts to help you successfully use the Assets API. You should already be familiar with the Assets service. If you’re not, you can read more about it in the [Forma Assets Overview](https://help.autodesk.com/view/BUILD/ENU/?guid=About_Assets).

## The Assets Settings

The primary component of the Assets service is the asset, which typically describes a piece of real-world equipment. To describe assets, however, requires defining Assets settings within a project. The settings specify a hierarchy of categories, one or more status sets, and an optional set of custom attributes. Defining Assets settings is typically the first thing you do in a project when preparing to use the Assets service.

To best understand how the settings work, we’ll first examine assets, then look at the components of the settings that define those assets.

## Assets

An asset typically records a piece of equipment such as a fan, an electrical outlet, an air duct, a window, and so on. Each asset record in the Assets service has:
- A project-specific ID (also called the B3F ID)
- A set of standard attributes that are present in every asset
- An optional set of Asset custom attributes that you can define to specify custom asset characteristics important to your assets. (We specify them as Asset custom attributes because they are confined to the Assets service and aren’t shared with other services.)

This table shows the standard attributes that define each asset:

| Name | Required Value? | Description |
| --- | --- | --- |
| Category | Yes | A single category from the project’s category tree (described later). |
| Status | Yes | A single status from the status set provided by the asset’s category. Examples might include “Ordered” and “Installed.” |
| Client Asset ID | Yes | A display name for the asset such as “220V outlet.” This is not a unique ID, and shouldn’t be confused with the asset ID, which is unique. In the English version of the Assets user interface and assets export, this attribute is labeled “Name”. |
| Description | No | A full text description of the asset such as “Conference desk Ethernet port.” |
| Barcode | No | A string that lists a bar code value that may be assigned to the asset. It’s a string that uses whatever format your bar code system supports. |
| Location ID | No | A single location from a locations tree defined for the project. This tree is created and maintained by the Locations service, and the Locations API returns location values to be used for this attribute. An example of a location that reveals its full location hierarchy is San Leandro campus > 357 Bernoulli Drive > 4th floor > Meeting Room Gamma. |

The Assets custom attributes that might be available to further define an asset can vary among different categories. The Assets custom attributes section below describes in more detail how they’re defined.

## Categories

A category defines a group of assets that share a set of common characteristics. Each category specifies how all assets belonging to that category are described: what Asset custom attributes they can have, and what statuses they may have. Every asset must be assigned to a single category.

The Assets settings for a project define a single category tree for that project. The category tree is an inheritance tree that starts with a root category, and may go up to ten levels deep from there. A category tree may have, for example, a child category of root named “Electrical” and have its own child categories “Wiring,” “Outlets,” “Breakers,” and more, each with their own possible child categories.

When a project is first created, it contains a category tree root. Every created category after that has a parent category from which it inherits both a status set and a set of custom attributes. Inheritance works differently for status sets and custom attributes:
- A category’s status set is always inherited from the last status set explicitly specified by its ancestors - set by its parent, or its parent’s parent, and so on. A category can override its inheritance by specifying a new status set, which is then inherited by its children and their children unless a child somewhere along the line overrides with a new status set.
- A category always inherits all custom attributes specified by its ancestors, and may add to those accumulated custom attributes by defining one or more new custom attributes.

The sections below provide more details about status sets and custom attributes.

Each Assets category has:
- A **unique category ID** that is created automatically when a category is created. The category ID is unique within a project, but not across projects. The category ID is an integer string.
- [_2022-10-08_] A **category unique ID** that is created automatically when a category is created. This category ID is _universally_ unique, and will be used with upcoming category APIs.
- A **name** that is required to be specified when the category is created. The name is displayed in the Asset UI where a user can choose categories. The name must be unique within the category’s siblings in the category tree, but can duplicate across other branches and levels.
- An optional **description**, a string that describes the category.
- A **linked status set** that contains the possible statuses the assets in the category may have. The status set may be inherited from the parent category (or higher in the category tree) or assigned specifically to the category.
- An optional **set of linked Asset custom attributes** that can further define the category’s assets. If the category’s parent has a set of one or more linked Asset custom attributes, the child category will inherit those custom attributes. You can link additional Asset custom attributes to a category; those added custom attributes will then be inherited by the category’s children (if they exist) along with the other parent-inherited custom attributes.
- **Inheritance links** that point to the category’s parent category and (if it has them) to the category’s child categories.

## Statuses

A status is just that: an asset’s current status, such as “Ordered” or “Installed.” Each status must be a member of a status set.

Each status has:
- A **unique status ID** that is created automatically when a status is created. The status ID is unique within its status set.
- A **label** such as “Ordered” that is required to be specified when the status is created. The label need not be unique within a project, but must be case-insensitively unique within a status set. For example, you can’t use “Ordered” and “ordered” within the same status set.
- A **linked status set** in which the status resides. A status, when it’s first created, is linked to a status set and does not change to or appear in other status sets.
- An optional **description**, a string that describes the status.
- An optional **color** string specifying a color used for the status in the Assets UI.

## Status Sets

A status set (sometimes called a status step set within the API) is a collection of statuses that is available within a category. A status set can create and link its statuses when the status set is first created, and it can add statuses after it’s created. A status set can also update and delete statuses (but only delete if there are no assets assigned to the status).

Each status set has:
- A **unique status set ID** that is created automatically when a status set is created. The status set ID is unique across projects.
- A **display name string** such as “Electrical Statuses” that is required to be specified when the status set is created. The display name string appears in the Assets UI when working with status sets. The display name string must be unique across status sets within a project.
- An optional **description**, a string that describes the status set.
- A **collection of one or more statuses** that is each linked to the status set.

Each category has a single associated status set. The root category has a default status set that is inherited by all of its child and descendant categories if no new status sets are defined and linked to any of those categories. This means that if no status sets are defined and linked in a project, all assets in the project use the root’s default status set. The root default status set may not be removed or replaced, but it can be modified to add, remove, or modify statuses.

The root default status set is created originally with the following values:
- Specified
- Ordered
- Delivered
- Installed
- Pre-Start-Up
- Start-Up
- Pre-Functional Performance Tests
- Functional Performance Tests
- Acceptance
- Post-Acceptance

If a status set is linked to any category, that status set overrides the inherited status set, and is inherited by the category’s children and sub-children as long as they, in turn, don’t override the inheritance.

## Asset Custom Attributes

Asset custom attributes (which do not extend outside of the Assets service) provide additional attributes for assets that can define unique characteristics important to an organization recording those assets. Examples might include “Responsible contractor” or “Voltage.”

Asset custom attributes are completely optional, and aren’t available within a project unless they’re explicitly defined. Each Asset custom attribute has:
- A **unique Asset custom attribute ID** that is created automatically when a custom attribute is created. The Asset custom attribute ID is unique across projects.
- A **display name string** such as “Voltage” that is required to be specified when the custom attribute is created. The display name string appears in the Assets UI when working with custom attributes. The display name string must be unique across custom attributes within a project.
- An optional **description**, a string that describes the custom attribute.
- A **data type**, a required value that specifies the data type required for the custom attribute.
- A **“required”** setting, which is a required value that specifies whether or not the custom attribute value is required for assets in categories where the custom attribute is present. The value requirement applies to manually input or modified asset entries (in the field, for example), but doesn’t necessarily mean that the asset must have this value present. If assets are imported from an XLSX file, for example, they may not have values in place where the values are specified as required.
- **Definitions of acceptable and default attribute values** that screen and fill in (where set) values supplied for the custom attribute.

Before an Asset custom attribute can be used for assets, the attribute must be linked to a category. A linked custom attribute is available within its linked category along with inherited custom attributes and other custom attributes linked to the category. All custom attributes linked to a category are inherited by that category’s descendant categories. Asset custom attribute inheritance in the category tree is cumulative: a category inherits all custom attributes linked to the category’s parent, and adds any custom attributes linked directly to the category.

The root category of the category tree contains no Asset custom attributes by default—except in cases of legacy projects, as described in the next section.

## Standard Attributes and Backward Compatibility

Standard attributes are present in all assets regardless of category, and can’t be modified. The assets description above describes the standard attributes present in each asset.

Earlier versions of the Assets service included numerous standard attributes that have now been deprecated. To maintain backward compatibility with projects that used those standard attributes, the standard attributes in those projects have been converted to custom attributes that are linked to the root category. These converted attributes are inherited by all categories where they take on the values previously assigned to their standard attribute counterparts.

Newly created projects do not have these custom attributes that were added for backward compatibility.

## Locations

Location values may be optionally provided for an asset’s “Location” standard attribute. These values are created and maintained outside of the Assets service by the Locations service. Locations are created in an inheritance tree that further defines location as you traverse the tree moving away from the root. For example, a full location might be San Leandro campus > 357 Bernoulli Drive > 4th floor > Meeting Room Gamma.

## A Settings Components Diagram

The diagram below shows the relationship between different components of the Assets settings.

## Active and Inactive Settings Components

The Assets API lets you deactivate and reactivate Assets settings components so that you can make them unavailable and then return them to service without having to recreate them. You can deactivate and reactivate all the settings components: categories, Asset custom attributes, statuses, and status sets.

All of these components return an error if you try to deactivate one when it’s still in use with one exception: categories. You can deactivate a category that has assets assigned to it. The assets remain assigned to the category, but no new assets may be assigned to the category.

## Asset Error Codes

The Assets API often returns a specific error code and possible error metadata along with an error response. These error codes and metadata are intended to allow the client to better handle error responses programmatically.

The set of available error codes, and their associated metadata, can be found by calling [GET error-codes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/assets-error-codes-GET/).

## Asset Relationships

The Relationships service defines a link between entities in different Autodesk services (called domains in the Relationships API).
One example is an asset that is linked to an issue.
You can read more about relationships in the [Relationships Field Guide](https://aps.autodesk.com/en/docs/bim360/v1/overview/field-guide/relationships/).

When using the Relationships API, the API sees the Assets service as one relationship domain that contains two entities: assets and categories. The Relationships API can link assets and categories to entities in other domains.

## Deprecation of Assets APIs for Creating and Deleting Relationships

Moving forward, the recommended way to create and delete relationships is to directly use the Relationships API.
The reason for this change is that it will improve how permissions are verified when creating a relationship.
A relationship inherently involves two different entities that may be defined in different cloud services.
Using the Relationships APIs directly enables a more symmetric permissions model where the permissions of both
services are fully checked.

See the [Create Relationships Tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/relationships/relationships-create/) for a step-by-step tutorial of how to create relationships.
The recommended endpoint to create relationships is [PUT relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-add-relationships-PUT/).
The recommended endpoint to delete relationships is [DELETE relationships](https://aps.autodesk.com/en/docs/acc/v1/reference/http/relationship-service-v2-delete-relationships-POST/).

## API Versions

The Assets API is updated incrementally with some endpoints updated to a new version before other endpoints. The version number (V2, for example) may be included in the endpoint name. The quickest way to tell the version of an endpoint is the endpoint’s URL, where it’s part of the URL path (/v1 or /v2, for example).

We try to make later versions backward compatible with earlier versions.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/assets
