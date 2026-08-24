# Model Derivative API developer documentation

[한국어](./README.ko.md) · [Complete product index](./INDEX.md) · [Repository catalog](../README.md)

This directory contains a versioned snapshot of Autodesk Model Derivative API documentation for translation, online-viewing derivatives, manifests, metadata, geometry, thumbnails, external references, and official TypeScript and .NET SDKs.

> [!NOTE]
> This is an unofficial archive. Captured formats, paths, options, schemas, SDK symbols, descriptions, examples, and change-log statements are preserved as Autodesk published them.

## What you can implement

| Capability | Documentation route |
| --- | --- |
| Translate supported design and modeling formats | [Translation guide](./v2/developers_guide/basics/translation.md), [supported translations](./v2/developers_guide/supported-translations/INDEX.md) |
| Prepare SVF or SVF2 derivatives for online viewing | [Prepare Models for Online Viewing](./v2/developers_guide/basics/preperation.md) |
| Submit translation jobs and inspect manifests | [REST reference](./v2/reference/http/INDEX.md) |
| Extract object trees, metadata, and properties | [Metadata extraction](./v2/developers_guide/basics/metadata_extraction.md) |
| Extract geometry or download derivative resources | [Geometry extraction](./v2/developers_guide/basics/geometry_extraction.md) |
| Generate model thumbnails | [Thumbnail generation](./v2/developers_guide/basics/thumbnail_generation.md) |
| Translate source packages with external references | [Xref tutorial](./v2/tutorials/translate-source-file-containing-xref/INDEX.md) |
| Use an official client library | [TypeScript SDK](./v2/reference/typescript-sdk/INDEX.md), [.NET SDK](./v2/reference/dot-net-sdk/INDEX.md) |

## Choose an interface

| Interface | Use it for | Start here |
| --- | --- | --- |
| REST | Translation jobs, manifests, derivatives, metadata, properties, and thumbnails | [HTTP reference](./v2/reference/http/INDEX.md) |
| TypeScript SDK | Typed Model Derivative client usage in JavaScript or TypeScript | [TypeScript reference](./v2/reference/typescript-sdk/INDEX.md) |
| .NET SDK | Typed Model Derivative client usage in .NET | [.NET reference](./v2/reference/dot-net-sdk/INDEX.md) |

## Related documentation

The [v2 surface index](./v2/INDEX.md#related-captured-documentation) exposes source-backed routes to Authentication, Data Management, and Viewer. These are relationship hints taken from captured pages, not a newly authored end-to-end integration guide.

## Source fidelity

- Every official source page maps to one Markdown leaf with stable IDs and SHA-256 hashes in `_meta`.
- REST and SDK references, guides, tutorials, code samples, and change history remain separately classified.
- Exact snapshot differences are tracked through Git history.
