# Authentication API developer documentation

[한국어](./README.ko.md) · [Complete product index](./INDEX.md) · [Repository catalog](../README.md)

This directory contains a versioned snapshot of Autodesk Authentication (OAuth) documentation, including REST endpoints, guides, tutorials, and official TypeScript and .NET SDK references.

> [!NOTE]
> This is an unofficial archive. Captured endpoint values, scopes, token fields, SDK symbols, descriptions, and examples are preserved as Autodesk published them. Check the official source when current service behavior or commercial availability matters.

## What you can implement

| Capability | Documentation route |
| --- | --- |
| Register an APS application and select an application type | [Application types](./v2/developers_guide/App-types/INDEX.md), [create-app tutorial](./v2/tutorials/create-app.md) |
| Obtain server-to-server access tokens | [Two-legged token tutorial](./v2/tutorials/get-2-legged-token.md) |
| Authorize access on behalf of a user | [Three-legged token tutorial](./v2/tutorials/get-3-legged-token.md) |
| Support native and single-page applications | [Authorization Code with PKCE](./v2/tutorials/get-3-legged-token-pkce/INDEX.md) |
| Work with ID tokens and OAuth scopes | [ID-token tutorial](./v2/tutorials/get-ID-token.md), [scope guide](./v2/developers_guide/scopes.md) |
| Authorize, issue, inspect, revoke, and terminate tokens or sessions | [REST endpoint index](./v2/reference/http/INDEX.md) |
| Use an official client library | [TypeScript SDK](./v2/reference/typescript-sdk/INDEX.md), [.NET SDK](./v2/reference/dot-net-sdk/INDEX.md) |

## Choose an interface

| Interface | Use it for | Start here |
| --- | --- | --- |
| REST | OAuth authorization and token lifecycle operations | [REST reference](./v2/reference/http/INDEX.md) |
| TypeScript SDK | Typed authentication client usage in JavaScript or TypeScript applications | [TypeScript reference](./v2/reference/typescript-sdk/INDEX.md) |
| .NET SDK | Typed authentication client usage in .NET applications | [.NET reference](./v2/reference/dot-net-sdk/INDEX.md) |

## Related documentation

Authentication is a dependency of many APS APIs, but scopes and token context remain operation-specific. The [v2 surface index](./v2/INDEX.md#related-captured-documentation) exposes cross-surface hints only when the captured source mentions or links another archived API or SDK; it does not invent an integration workflow.

## Source fidelity

- Every official source page maps to one Markdown leaf with its stable page ID and SHA-256 recorded in `_meta`.
- Product, surface, protocol, and document kind are separate metadata fields for AI-assisted retrieval.
- Exact changes between snapshots are tracked through Git history.
