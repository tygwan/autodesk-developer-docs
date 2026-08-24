---
title: "LineMaterial"
url_path: reference/Scene/LineMaterial
surface: viewer-sdk
document_kind: reference
category: "Scene"
---
# LineMaterial

Unlit material for 3D line geometry.

Use with geometry whose index buffer contains consecutive vertex-index pairs (each pair defines one line segment). Lines are always 1 px wide.

## new LineMaterial(params)

### Parameters

| paramsobject |   |
| --- | --- |
| color[Autodesk.Viewing.Scene.Color](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Color/) | Line color. Default: white. |
| opacitynumber | Line opacity in `[0, 1]`. Default: `1`. |
| vertexColorsboolean | Use per-vertex colors stored in the geometry. Default: `false`. |
| depthWriteboolean | Write to the depth buffer. Default: `true`. |
| depthTestboolean | Depth-test against the depth buffer. Default: `true`. |
| transparentboolean | Render in the transparent pass with alpha blending. Default: `false`. |

# Methods

## getColor()

### Returns

| type | description |
| --- | --- |
| [Autodesk.Viewing.Scene.Color](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Color/) | A copy of the line color. |

## setColor(c)

### Parameters

| c*[Autodesk.Viewing.Scene.Color](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Color/) | Line color. Copied into the existing Color. |
| --- | --- |

## getOpacity()

### Returns

| type | description |
| --- | --- |
| number | Line opacity in `[0, 1]`. |

## setOpacity(o)

### Parameters

| o*number | Line opacity in `[0, 1]`. Requires `setTransparent(true)` for `< 1`. |
| --- | --- |

## getVertexColors()

### Returns

| type | description |
| --- | --- |
| boolean | Whether to use per-vertex colors from the geometry’s `color` attribute. |

## setVertexColors(v)

### Parameters

| v*boolean | Whether to use per-vertex colors. |
| --- | --- |

## getDepthWrite()

### Returns

| type | description |
| --- | --- |
| boolean | Whether to write to the depth buffer. |

## setDepthWrite(v)

### Parameters

| v*boolean | Whether to write to the depth buffer. |
| --- | --- |

## getDepthTest()

### Returns

| type | description |
| --- | --- |
| boolean | Whether to depth-test against the depth buffer. |

## setDepthTest(v)

### Parameters

| v*boolean | Whether to depth-test against the depth buffer. |
| --- | --- |

## getTransparent()

### Returns

| type | description |
| --- | --- |
| boolean | Whether the material renders in the transparent pass. |

## setTransparent(v)

### Parameters

| v*boolean | Whether the material renders in the transparent pass with alpha blending. |
| --- | --- |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/LineMaterial
