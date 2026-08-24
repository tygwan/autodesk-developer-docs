---
namespace: Forma.experimental.analysis
class: ExperimentalAnalysisApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.experimental.analysis

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `putCatalogItem`

```ts
Forma.experimental.analysis.putCatalogItem(request: { /** * An id for the analysis result to be put in the catalog. Provided back to the extension when it should display the result. * Must be a string between 1 and 128 characters long containing only ascii letters (a-z, A-Z), digits (0-9), hyphen (-) and underscore (_). * Using the same id in multiple calls for the same extension will update the item. */ analysisId: string; /** * Status of the analysis, possible values: SUCCEEDED, FAILED */ status: "SUCCEEDED" | "FAILED"; /** * The proposal URN the analysis result is for. */ elementUrn: string; }): Promise<void>;
```

Put an item in the catalog for an analysis result that the extension provides. This will make the result available in the list of analyses that has been run in Forma Site Design's UI.

@returns
Empty body on success.

@example
await Forma.experimental.analysis.putCatalogItem({
  analysisId: "6db10410-9f72-4cc1-b79a-be65230b9104",
  status: "SUCCEEDED",
  elementUrn:
    "urn:adsk-forma-elements:proposal:pro_s3a28a18wi:1a79199e-7ce9-418e-8eb1-42a91ddab09a:1708350177957",
})

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
