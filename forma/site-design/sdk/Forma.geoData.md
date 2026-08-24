---
namespace: Forma.geoData
class: GeoDataApi
sdk_version: 0.93.0
surface: sdk
runtime: forma-iframe-only
---

# Forma.geoData

```ts
import { Forma } from "forma-embedded-view-sdk/auto";
```

## `upload`

```ts
Forma.geoData.upload(request: { /** * Data in GeoJSON format. */ data: FeatureCollection; geoLocation?: { /** * The spatial reference identifier (SRID) for the data. */ srid: number; /** * The reference point of the data in the given SRID. */ refPoint: [number, number]; }; /** * Specifies the type of data. */ dataType: "buildings" | "roads" | "property-boundaries"; /** * Information related to the licensing governing the use and transfer of this element. */ licensing?: Licensing; }): Promise<LibraryItem>;
```

Uploads buldings, roads or property boundaries as geojson to forma, does some internal processing and adds the data to the library.
Currently supports 2.5D buildings, roads and property boundaries.
2.5D buildings will need an elevation and height property, which defaults to 0 and 3 meters.

@returns The library item for uploaded data.

@example
      const response = await Forma.geoData.upload({
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                height: 10,
                elevation: 0
              },
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [-74.0060, 40.7128],
                    [-74.0060, 40.7129],
                    [-74.0059, 40.7129],
                    [-74.0059, 40.7128],
                    [-74.0060, 40.7128]
                  ]
                ]
              }
            }
          ]
        },
        dataType: "buildings",
        geoLocation: {
          srid: 4326,
          refPoint: [0, 0]
        }
      });

---
SDK 문서: https://app.autodeskforma.com/forma-embedded-view-sdk/docs/
