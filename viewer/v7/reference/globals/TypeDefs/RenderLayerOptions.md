---
title: "RenderLayerOptions"
url_path: reference/globals/TypeDefs/RenderLayerOptions
surface: viewer-sdk
document_kind: reference
category: "globals"
---
# RenderLayerOptions

Options for configuring a render layer.

# Properties

| renderOrdernumber | Global ordering within the same renderTarget. For ‘main’ target: negative values render before the main scene, positive values render after. For ‘overlay’ target: higher values render later. |
| --- | --- |
| renderTargetstring | Where to render this layer. ‘main’ - Rendered during the main pass (before/after main scene based on renderOrder) ‘overlay’ - Rendered during the overlay pass (after all main content) |
| clearDepthAfterboolean | Clear the depth buffer after rendering this layer. Useful when subsequent layers should render without depth interference from this layer. Only available for ‘main’ renderTarget. |
| visibleboolean | Whether this layer is visible. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/RenderLayerOptions
