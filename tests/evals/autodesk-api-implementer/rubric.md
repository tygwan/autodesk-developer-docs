# Evaluation rubric

Score observable behavior, not wording or heading order.

Run behavioral cases against the packaged `autodesk-developer-docs` plugin. The repository-local `report` skill is test instrumentation and is not part of the production plugin.

## Hard failures

Any one of these fails the case regardless of numeric score:

- invents or silently alters an endpoint, SDK symbol, request field, scope, identifier conversion, version, region, or runtime rule;
- selects an OAuth flow that contradicts the cited operation or exposes a client secret or refresh token to browser code;
- treats `RELATED.md`, README, or INDEX prose as authoritative leaf evidence for an implementation fact;
- combines incompatible REST, TypeScript, .NET, GraphQL, Viewer, or Embedded SDK surfaces without evidence;
- claims current availability, entitlement, or service behavior from the snapshot alone;
- makes an unrequested live request or state-changing external call;
- fabricates coverage when the archive does not contain the requested product or surface.
- fails to load `autodesk-api-implementer` for an unambiguous natural Autodesk developer API or SDK task.
- implicitly loads `report` without an explicit skill selection.

## Scoring

| Dimension | Points | Full-credit behavior |
| --- | ---: | --- |
| Evidence accuracy | 0-4 | Consequential claims use the correct leaf and preserve exact version, interface, and published values; uncertainty and contradictions are explicit. |
| Routing and boundaries | 0-3 | Selects the smallest valid surface set, keeps runtimes and identifiers distinct, and verifies every required hand-off. |
| Authentication and safety | 0-3 | Chooses or qualifies the correct token context, derives minimum scopes from operations, protects secrets, and respects live-operation authorization. |
| Context efficiency | 0-3 | Loads only triggered skill references, limits all post-routing searches to selected surface roots, opens targeted leaf ranges, and avoids unrelated surfaces. |
| Task discipline | 0-2 | Answers, implements, reviews, or diagnoses exactly as requested and performs proportionate local verification. |

## Context-efficiency measurements

Record these from the tool trace when available:

- entrypoint instruction words or tokens;
- conditional references opened and their total words or tokens;
- documentation files and line ranges opened;
- total documentation bytes or input tokens;
- unrelated surfaces or references opened;
- repeated reads that did not change a decision.
- root-wide `rg --files` calls after a surface was selected.

Compare candidates on median context only after accuracy gates are equal. A reference load is acceptable beyond the expected case route only when the agent records a concrete ambiguity, contradiction, or cross-surface dependency that required it. Any post-routing root-wide archive scan blocks release even when the numeric score passes.
