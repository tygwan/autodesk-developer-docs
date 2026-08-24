---
namespace: Forma.project
class: ProjectApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.project

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `get`

```ts
Forma.project.get(): Promise<Project>;
```

Fetch all project metadata.

@returns The project metadata.

@example
const projectMetadata = await Forma.project.get()

## `getCountryCode` ⚠️ DEPRECATED

```ts
Forma.project.getCountryCode(): Promise<string | undefined>;
```

Fetch project country code.

@hidden
@deprecated Use countryCode from get instead.

@returns Country code for the project.

@example
const countryCode = await Forma.project.getCountryCode()

## `getGeoLocation`

```ts
Forma.project.getGeoLocation(): Promise<[number, number] | undefined>;
```

Fetch project location (latitude and longitude).

@returns Geolocation for the project as [latitude, longitude].

@example
const [latitude, longitude] = await Forma.project.getGeoLocation()

## `getTimezone` ⚠️ DEPRECATED

```ts
Forma.project.getTimezone(): Promise<string | undefined>;
```

Fetch project timezone.

@hidden
@deprecated Use timezone from get instead.

@returns Timezone for the project.

@example
const timezone = await Forma.project.getTimezone()

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
