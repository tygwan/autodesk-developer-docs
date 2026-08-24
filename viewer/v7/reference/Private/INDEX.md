---
document_type: "sdk-reference-index"
product: "Viewer SDK"
surface: "viewer-v7"
category: "Private"
protocol: "JavaScript SDK"
language: "en"
generated: "true"
---

# Private

[SDK reference index](../INDEX.md) · [Viewer SDK v7 index](../../INDEX.md)

## Overview

Published private implementation references such as preferences and property databases.

## SDK reference

| Symbol | Purpose | Documentation |
| --- | --- | --- |
| InstanceTree | **Deprecated: Use `Autodesk.Viewing.ObjectTree </en/docs/viewer/v7/reference/Viewing/ObjectTree/>`_ instead. This class is deprecated and will be removed in a future release.** | [Open reference](./InstanceTree.md) |
| Preferences | Application preferences. | [Open reference](./Preferences.md) |
| Private | Private classes are intended to be used only for debugging. Private classes can change and may be removed. We recommend that you do not rely on these classes. Do not use them in production code. | [Open reference](../Private.md) |
| PropDbLoader | Per model property database interface, talks to the worker thread behind the scenes. | [Open reference](./PropDbLoader.md) |
| PropertyDatabase | The Property Database contains property information for each part of a model. The data is read-only, since it has been packed to optimize memory footprint. It’s implemented as an Entity-Atribute-Value (EAV) set of tables. LMV keeps the PropertyDatabase in a browser worker thread to prevent compute-intensive methods to block the main browser UI thread. Words “Attribute” and “Property” are use interchangeably. | [Open reference](./PropertyDatabase.md) |
| ViewerPreferences | Viewer preferences. | [Open reference](./ViewerPreferences.md) |
