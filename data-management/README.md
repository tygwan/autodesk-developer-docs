# Data Management API developer documentation

[한국어](./README.ko.md) · [Complete product index](./INDEX.md) · [Repository catalog](../README.md)

This directory contains a versioned snapshot of Autodesk Data Management API documentation for project data, Object Storage Service resources, file transfer, publishing, and official TypeScript and .NET SDKs.

> [!NOTE]
> This is an unofficial archive. Captured resource names, paths, request and response values, SDK symbols, descriptions, and examples are preserved as Autodesk published them.

## What you can implement

| Capability | Documentation route |
| --- | --- |
| Navigate hubs, projects, folders, items, versions, relationships, and references | [REST reference](./v2/reference/http/INDEX.md) |
| Create and manage OSS buckets and objects | [REST reference](./v2/reference/http/INDEX.md) |
| Upload, download, copy, delete, and restore files | [How-to guide](./v2/tutorials/INDEX.md) |
| Use signed S3 and resumable transfer operations | [REST reference](./v2/reference/http/INDEX.md) |
| Create storage, items, versions, download jobs, and publish-model jobs | [Publish-model tutorial](./v2/tutorials/publish-model.md) |
| Use official Data Management and OSS clients | [Complete SDK reference](./v2/reference/INDEX.md) |

## Choose an interface

| Interface | Use it for | Start here |
| --- | --- | --- |
| REST | Direct project-data and OSS operations | [HTTP reference](./v2/reference/http/INDEX.md) |
| TypeScript SDKs | Typed Data Management and OSS clients for JavaScript or TypeScript | [Data Management](./v2/reference/typescript-sdk-dm/INDEX.md), [OSS](./v2/reference/typescript-sdk-oss/INDEX.md) |
| .NET SDKs | Typed Data Management and OSS clients for .NET | [Data Management](./v2/reference/dot-net-sdk-dm/INDEX.md), [OSS](./v2/reference/dot-net-sdk-oss/INDEX.md) |

## Related documentation

The [v2 surface index](./v2/INDEX.md#related-captured-documentation) derives related routes from links and explicit API/SDK names in captured pages. This exposes Authentication, Model Derivative, Viewer, and Forma hints where the upstream documentation provides them without adding a synthetic workflow.

## Source fidelity

- Every official source page maps to one Markdown leaf with stable IDs and content hashes in `_meta`.
- REST, TypeScript SDK, .NET SDK, guide, tutorial, and changelog documents remain separately classified.
- Exact snapshot differences are tracked through Git history.
