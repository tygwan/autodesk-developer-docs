# Cross-product workflow routing

Load this reference only when the task spans multiple non-authentication product surfaces or passes identifiers between surfaces. A token-only Authentication dependency does not trigger it.

## Build the smallest pipeline

Treat these as optional stages, not a mandatory recipe:

1. **Authorize** with Authentication when a target operation requires a token.
2. **Locate or manage source data** with Data Management when the source resides in supported project data or object storage.
3. **Create or inspect derivatives** with Model Derivative when the task requires translation, manifests, metadata, properties, geometry, thumbnails, or a viewable.
4. **Present or interact** with Viewer when a browser must load a supported viewable.

Skip stages whose output already exists. A local file, app-managed object, ACC/BIM project item, existing derivative, and existing Viewer document identifier can require different starting points and token contexts.

Forma is not an interchangeable stage in this pipeline. Route Forma work through [forma.md](forma.md) and add other products only when a captured boundary requires them.

## Verify every boundary

For each hand-off, record only what is needed to avoid an implicit conversion:

| Producer | Exact output identifier or state | Consumer | Required documented transformation | Leaf evidence |
| --- | --- | --- | --- | --- |

Verify identifier type, version, encoding, region, token context, scopes, content type, and completion state on both sides. Keep bucket/object identifiers, project item or version identifiers, derivative URNs, viewable identifiers, model IDs, and Viewer database IDs distinct. Do not encode, decode, trim, or rebuild an identifier unless a leaf document requires it.

Translation and publishing operations can be asynchronous. Use the documented job response and terminal manifest or status conditions; do not assume that request acceptance means the output is ready. Preserve documented polling limits, retry guidance, and error details.

## Validate incrementally

Test authorization, source discovery or upload, derivative completion, and browser loading separately before treating the whole pipeline as one failure. At each stage, log only non-secret correlation data and classify whether the failure belongs to the producer, the boundary transformation, or the consumer.

Do not infer a complete workflow from `RELATED.md` or a shared API name. When no captured leaf supports a boundary, label it as inference and request the missing source or verify the official current documentation.
