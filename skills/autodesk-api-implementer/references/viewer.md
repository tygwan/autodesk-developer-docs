# Viewer SDK browser routing

Use this reference for Viewer SDK browser work. Route exact APIs through the captured Viewer surface and its public leaf references.

## Runtime and loading

- Treat Viewer as a browser runtime. Keep server credentials, OAuth exchanges, and protected storage operations on a trusted backend.
- Match script, stylesheet, namespace, and API usage to the same captured Viewer version. Do not invent an npm package or CDN version from memory.
- Verify the documented initialization options, access-token delivery contract, document or model identifier format, and load sequence before coding.
- Confirm that the required derivative or directly supported asset already exists; Viewer does not replace an upstream translation step merely because it can display the result.

## API selection

Prefer public Viewer classes, functions, events, and extensions. Use documents under a `Private` namespace only when the user explicitly accepts the compatibility risk or no public route meets an explicit requirement; disclose that risk.

Verify event names, payloads, lifecycle methods, extension IDs, and method signatures in leaf references. Wait for the documented lifecycle event before accessing dependent model data or UI. Remove listeners, unload extensions, and dispose Viewer resources when the host application's lifecycle requires it.

Keep Viewer identifiers scoped correctly. Selection database IDs and fragment IDs are model-specific; aggregated or multi-model views also require the correct model context. Do not substitute Data Management IDs, derivative URNs, Viewer model IDs, database IDs, or external IDs for one another without a documented mapping.

## Verification

Run the project's normal build or type checks, then exercise the relevant browser path. Inspect console errors and the failing network request without exposing tokens or signed URLs. Separate token delivery, derivative readiness, document loading, Viewer lifecycle, extension lifecycle, and application-state errors before modifying the implementation.
