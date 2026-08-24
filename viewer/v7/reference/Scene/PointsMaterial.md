---
title: "PointsMaterial"
url_path: reference/Scene/PointsMaterial
surface: viewer-sdk
document_kind: reference
category: "Scene"
---
# PointsMaterial

Unlit material for 3D point geometry.

## new PointsMaterial(params)

### Parameters

| paramsobject |   |
| --- | --- |
| color[Autodesk.Viewing.Scene.Color](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Color/) | Point color. Default: white. |
| opacitynumber | Point opacity in `[0, 1]`. Default: `1`. |
| sizenumber | Point size in pixels. Default: `1`. |
| map[Autodesk.Viewing.Scene.Texture](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Texture/) | Texture map applied to each point sprite. Default: `null`. |
| vertexColorsboolean | Use per-vertex colors stored in the geometry. Default: `false`. |
| depthWriteboolean | Write to the depth buffer. Default: `true`. |
| depthTestboolean | Depth-test against the depth buffer. Default: `true`. |
| transparentboolean | Render in the transparent pass with alpha blending. Default: `false`. |

# Methods

## getColor()

### Returns

| type | description |
| --- | --- |
| [Autodesk.Viewing.Scene.Color](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Color/) | A copy of the point color. |

## setColor(c)

### Parameters

| c*[Autodesk.Viewing.Scene.Color](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Color/) | Point color. Copied into the existing Color. |
| --- | --- |

## getOpacity()

### Returns

| type | description |
| --- | --- |
| number | Point opacity in `[0, 1]`. |

## setOpacity(o)

### Parameters

| o*number | Point opacity in `[0, 1]`. Requires `setTransparent(true)` for `< 1`. |
| --- | --- |

## getSize()

### Returns

| type | description |
| --- | --- |
| number | Point size in pixels. |

## setSize(s)

### Parameters

| s*number | Point size in pixels. |
| --- | --- |

## getMap()

Returns the texture map applied to each point sprite.

### Returns

| type | description |
| --- | --- |
| [Autodesk.Viewing.Scene.Texture](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Texture/) | Texture map, or `null`. |

## setMap(t)

Sets the texture map applied to each point sprite.

### Parameters

| t*[Autodesk.Viewing.Scene.Texture](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Texture/) | Texture map, or `null`. |
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
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/PointsMaterial
