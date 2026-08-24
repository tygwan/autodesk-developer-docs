---
title: "UnlitMaterial"
url_path: reference/Scene/UnlitMaterial
surface: viewer-sdk
document_kind: reference
category: "Scene"
---
# UnlitMaterial

A simple, unlit material for 3D surfaces.

## new UnlitMaterial(params)

### Parameters

| paramsobject |   |
| --- | --- |
| color[Autodesk.Viewing.Scene.Color](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Color/) | Diffuse surface color. Default: white. |
| opacitynumber | Surface opacity in `[0, 1]`. Default: `1`. |
| map[Autodesk.Viewing.Scene.Texture](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Texture/) | Color (albedo) texture. |
| alphaMap[Autodesk.Viewing.Scene.Texture](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Texture/) | Alpha mask texture. |
| vertexColorsboolean | Multiply surface color by per-vertex colors. Default: `false`. |
| sideAutodesk.Viewing.Scene.Side | Faces to render. Default: `Side.Front`. |
| depthWriteboolean | Write to the depth buffer. Default: `true`. |
| depthTestboolean | Depth-test against the depth buffer. Default: `true`. |
| transparentboolean | Render in the transparent pass with alpha blending. Default: `false`. |

# Methods

## getColor()

### Returns

| type | description |
| --- | --- |
| [Autodesk.Viewing.Scene.Color](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Color/) | A defensive clone of the diffuse color. |

## setColor(c)

### Parameters

| c*[Autodesk.Viewing.Scene.Color](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Color/) | Diffuse color. Copied into the existing Color. |
| --- | --- |

## getOpacity()

### Returns

| type | description |
| --- | --- |
| number | Surface opacity in `[0, 1]`. |

## setOpacity(o)

### Parameters

| o*number | Surface opacity in `[0, 1]`. Requires `setTransparent(true)` for `< 1`. |
| --- | --- |

## getMap()

Returns the color (albedo) texture.

### Returns

| type | description |
| --- | --- |
| [Autodesk.Viewing.Scene.Texture](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Texture/) | Color (albedo) texture, or `null`. |

## setMap(t)

Sets the color (albedo) texture.

### Parameters

| t*[Autodesk.Viewing.Scene.Texture](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Texture/) | Color (albedo) texture, or `null`. |
| --- | --- |

## getAlphaMap()

Gets the alpha mask texture.

### Returns

| type | description |
| --- | --- |
| [Autodesk.Viewing.Scene.Texture](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Texture/) | Alpha mask texture, or `null`. |

## setAlphaMap(t)

Sets the alpha mask texture.

### Parameters

| t*[Autodesk.Viewing.Scene.Texture](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Texture/) | Alpha mask texture, or `null`. |
| --- | --- |

## getVertexColors()

### Returns

| type | description |
| --- | --- |
| boolean | Whether to multiply the surface color by per-vertex colors. |

## setVertexColors(v)

### Parameters

| v*boolean | Whether to multiply the surface color by per-vertex colors. |
| --- | --- |

## getSide()

Gets which face(s) of a polygon are rendered.

### Returns

| type | description |
| --- | --- |
| Autodesk.Viewing.Scene.Side | Faces to render. |

## setSide(s)

Sets which face(s) of a polygon are rendered.

### Parameters

| s*Autodesk.Viewing.Scene.Side | Faces to render. |
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
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/UnlitMaterial
