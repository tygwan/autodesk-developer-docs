# Forma API and SDK routing

Use this reference to select among the distinct Forma developer surfaces. Do not transfer authentication, identifiers, region rules, or runtime assumptions between them without leaf evidence.

## Choose one surface per operation

| Need | Surface | Runtime or protocol |
| --- | --- | --- |
| Construction and project workflows such as assets, issues, RFIs, sheets, submittals, cost, administration, or coordination | Forma APIs under `forma/acc` | REST, normally from a trusted client appropriate to the operation |
| Structured AEC hubs, projects, element groups, elements, versions, properties, geometry, or differences | AEC Data Model under `forma/aec-data-model` | GraphQL |
| Forma site, proposal, library, terrain, analysis, or integration operations | Site Design API under `forma/site-design` | REST |
| Camera, selection, rendering, design tools, UI panels, or extension interaction inside Forma | Embedded View SDK under `forma/site-design/sdk` | TypeScript in a Forma embedded-view iframe |

The Embedded View SDK is not a server SDK and must not be proposed for a CLI, batch service, or ordinary standalone page. Conversely, REST or GraphQL documentation does not prove that the iframe SDK exposes the same operation.

## Accuracy checks

- For REST, verify the exact group, path, method, region or base URL, authentication context, scopes, request schema, and pagination in its leaf.
- For GraphQL, verify the current captured query or mutation, schema types, variables, pagination, and error shape in operation and schema leaves. Do not construct fields from conceptual guide prose alone.
- For Embedded View, verify availability and lifecycle in the relevant guide and SDK symbol leaf. Respect host handshake and runtime restrictions.
- Keep ACC project and resource IDs, AEC Data Model hubs or element groups, and Forma site or proposal identifiers distinct.
- When extension data crosses GraphQL and Embedded View, verify both halves and the identifier mapping instead of assuming a shared object model.

Check current official documentation when regional rollout, entitlement, preview status, or commercial availability affects the result.
