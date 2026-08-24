---
namespace: Forma.experimental.housing
class: ExperimentalHousingApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.experimental.housing

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `createFromLine`

```ts
Forma.experimental.housing.createFromLine(request: { line: number[][]; buffer?: number; placementSide?: "left" | "right"; templateId?: string; }): Promise<{ urn: string; }>;
```

## `listTemplates`

```ts
Forma.experimental.housing.listTemplates(): Promise<Template[]>;
```

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
