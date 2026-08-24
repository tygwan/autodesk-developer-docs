---
title: "Classifications (beta)"
url_path: overview/field-guide/classifications
surface: guide
---
# Forma Classifications

The Forma Classifications API lets you create and manage hierarchical classification structures and retrieve nodes from their latest published version.

Classification structures provide a consistent way to organize and classify information for use across Forma workflows. For example, a structure can define categories, types, or other hierarchical taxonomies that can be referenced by Forma applications and services.

## Key Features
- Create and manage hierarchical classification structures within a project.
- Import a new structure and automatically publish its initial version.
- Reimport an existing structure and publish a new version.
- Retrieve structure metadata and list structures within a project.
- Retrieve nodes from the latest published version of a structure.
- Support structures that can be derived from account- and library-based source structures.

## Core Concepts

### Classification Structure

A classification structure is a hierarchical collection of classification nodes.

Structures are project-scoped and are managed as versioned entities. A structure can be created through an import operation and updated through reimport operations, which publish new versions of the structure.

Some structures can be derived from source structures, such as account- or library-based structures.

### Nodes

Nodes represent the individual classifications within a structure.

Nodes are organized in a parent-child hierarchy, with a single root node at the top of the structure and leaf nodes at the lowest level.

The API returns nodes from the latest published version of a structure. Nodes are returned as a list and can be reconstructed into a hierarchy using their parent-child relationships.

## Versioning Model

Classification structures are versioned. Changes to a structure are made by importing or reimporting the entire structure rather than modifying individual nodes.

Importing a new structure creates:
- The structure
- Version 1 of the structure
- A published tip version (the latest published version) set to Version 1

Reimporting an existing structure publishes a new version and updates the tip version to the newly published version.

Nodes that existed in a previous version but are omitted from a reimported structure are marked as deleted in the new version.

The public API exposes nodes only from the tip version of a structure. Previous versions can be created through import and reimport operations, but their nodes cannot be retrieved through the public API.

## Limitations & Notable Behaviors
- Only nodes from the latest published version of a structure can be retrieved through the public API. There is no public endpoint to retrieve nodes from an older version.
- Individual nodes cannot be created, updated, moved, or deleted directly. Nodes are managed through import and reimport operations.
- Structure import and reimport operations are limited to 50,000 nodes and a maximum hierarchy depth of 10 levels.
- The API is currently project-scoped. Structure operations are not available outside a project context.
- There are no account-scoped endpoints to import, list, reimport, update, or archive classification structures.
- There is currently no public API to import or copy structures from an account- or library-based source into a project.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/classifications
