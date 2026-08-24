---
title: "Locations"
url_path: overview/field-guide/locations
surface: guide
---
# Forma Locations API Field Guide

This field guide describes the components of the Forma Locations service and shows how they work together. It also provides key concepts to help you successfully use the Locations API. For more information about Locations, see the [Locations help documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Project_Administration_Locations).

**Note that the Forma Locations API is not compatible with BIM 360 projects.**

## Understanding the project LBS

The Locations API enables you to define a hierarchy (tree) of building areas (locations) for a project. A locations tree is commonly known as a _location breakdown structure_ (LBS); these terms are interchangeable. With an LBS, users can identify the location associated with each of a project’s Assets, Issues, Photos, Forms, RFIs, and Submittals. In this way, each of these objects can be associated with a particular building area.

### Nodes

The elements of an LBS are called _nodes_, each of which represents a location. Every node you add to the LBS has a _parent_ node, making it a _child_ (or a _sub-location_) of that parent node. A node can also have its own children, making it a parent node as well.

When a user creates a project, it includes an LBS that contains only the _root node_. The root node is automatically and permanently linked to the project. Each child node represents a sub-location of the larger building area that’s represented by its parent node.

For example, a building (the parent node) might contain four child nodes representinbg its foundation, floor 1, floor 2, and the roof.

### Node paths and tiers

A node’s position in an LBS is identified by the node’s _path_, which is a list starting with the project root and ending with the current node’s parent. Each entry on this list is on a different level (_tier_) of the LBS. A Forma locations tree can be up to 20 tiers deep.

As you traverse the locations tree tier by tier, moving away from the root, each tier further refines the location’s path until you reach a node with no children, which is the smallest sub-location. For example, a full location might be _Project > San Leandro campus > 357 Bernoulli Drive > 4th floor > Meeting Room Gamma_.

All LBS nodes with the same parent are in a specific sequence order. By default, new nodes are added to the end of the sequence. You can modify the order according to your preferences when you create a new node.

Note that the maximum number of nodes (including the root node) allowed in an Autodesk LBS is 10,000.

### Using the LBS

Once the LBS is configured, users of the Forma Build application who are working with an Asset, Issue, Photo, Form, RFI, or Submittal object in the UI can identify the node in the LBS that represents the object’s location.

## Supported operations

The Locations API provides endpoints that create, read, update, and delete nodes to define the structure of an LBS:

### GET nodes

To create a new node, you must have the ID of its proposed parent node. To read, update, or delete an existing node, you must have that node’s ID. Both of these requirements are satisfied using the [GET nodes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodes-GET/) endpoint.

Call the `GET nodes` endpoint without the `filter[id]` parameter to retrieve all nodes in the LBS.
- The root node is the node with a `results.parentId` value of `null`.
- The `results.parentId` value of a non-root node is the `results.id` value of its parent node.
- You can discover the entire tree structure by identifying the parent of each node.

Call the `GET nodes` endpoint with the `filter[id]` parameter to retrieve only the specified LBS nodes.

### POST nodes

Call the [POST nodes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodes-POST/) endpoint to create a new node in the LBS.
- You can’t create or delete the root node; it exists for the life of the project.
- Define the new node by specifying its parent using `parentId` in the request.
- To specify the new node’s order in the sequence of its siblings, include the `targetNodeId` and `insertOption` query parameters in the request.

### PATCH nodes/:nodeId

Call the [PATCH nodes/:nodeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodesnodeid-PATCH/) endpoint to modify a node’s `name` or `barcode`.

### DELETE nodes/:nodeId

Call the [DELETE nodes/:nodeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/locations-nodesnodeid-DELETE/) endpoint to delete a node.
- Caution: when you delete a parent node, all of its child nodes and their descendants are deleted as well. Any objects that were linked to any of those locations will no longer be linked to a location.

## API versions

The Locations API is updated incrementally with some endpoints updated to a new version before other endpoints. The version number (v2, for example) may be included in the endpoint name. The quickest way to tell the version of an endpoint is the endpoint’s URL, where it’s part of the URL path (/v1 or /v2, for example).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/locations
