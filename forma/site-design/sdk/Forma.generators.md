---
namespace: Forma.generators
class: GeneratorsApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.generators

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `put`

```ts
Forma.generators.put(request: { /** * Authcontext to use with the request. * * As of now, the currently open project id is both default * and only allowed value. */ authcontext?: string | undefined; /** Generator resource model to create or replace. */ data: Generator; }): Promise<Generator>;
```

Create or replace a generator.

@returns The created or replaced generator resource model.

## `list`

```ts
Forma.generators.list(request?: { /** * Authcontext to use with the request. * * As of now, the currently open project id is both default * and only allowed value. */ authcontext?: string | undefined; } | undefined): Promise<Generator[]>;
```

List out generators within the specified authcontext.

@returns List of registered generators.

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
