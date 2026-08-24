---
title: "Node3D"
url_path: reference/Scene/Node3D
surface: viewer-sdk
document_kind: reference
category: "Scene"
---
# Node3D

Basic node type for the scene graph. Use [Autodesk.Viewing.Scene.Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/) as a transform-only parent (e.g. a joint or pivot) and [Autodesk.Viewing.Scene.InstanceNode3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceNode3D/) for nodes that represent rendered geometry instances.

## new Node3D()

Creates a transform-only scene graph node.

# Properties

| parent[Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/), null | Parent node in the scene graph, or `null` for the root. |
| --- | --- |
| childrenArray.<Node3D> | Direct child nodes. |
| position[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | Local position relative to the parent. |
| quaternion[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | Local rotation relative to the parent. |
| scale[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | Local scale relative to the parent. |

# Methods

## getTransformLocal(target)

Computes the local transform matrix for this node.

### Parameters

| target[Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | Matrix to write into. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | The target filled with the local matrix, or a new matrix if no target is provided. |

## getTransformWorld(target)

Reads the world transform matrix into target. If no target is provided, returns a new matrix. Subclasses (e.g. [Autodesk.Viewing.Scene.InstanceNode3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceNode3D/)) override this to read from external storage.

### Parameters

| target[Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | Matrix to write into. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | The target filled with the world matrix, or a new matrix if no target is provided. |

## setVisibilityState(value)

Sets the visibility state for this node and its descendants.

### Parameters

| value*[VisibilityState](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene#VisibilityState/) |   |
| --- | --- |

## getVisibilityState()

### Returns

| type | description |
| --- | --- |
| [VisibilityState](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene#VisibilityState/) | The visibility state. |

## markDirty()

Marks this node as needing a world matrix update. Call this after modifying `position`, `quaternion`, or `scale` when using dirty tracking.

## updateTransformWorld(force)

Updates the world transform matrix for this node and its descendants. Computations are performed immediately. Subtrees with no dirty nodes are skipped.

### Parameters

| forceboolean | If true, forces update regardless of the dirty flag. |
| --- | --- |

## isAttached()

### Returns

| type | description |
| --- | --- |
| boolean | True if the node is attached to a model’s instance collection, false otherwise. |

## remove(children)

Removes the given child nodes from this node and from the instance collection.

### Parameters

| children*[Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/), Array.<Node3D> |   |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/) | A reference to this node. |

## removeFromParent()

Removes this node from its parent and the instance collection.

### Returns

| type | description |
| --- | --- |
| [Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/) | A reference to this node. |

## traverse(callback)

Traverses this node and its descendants and calls the callback for each node.

### Parameters

| callback*[NodeTraverseCallback](https://aps.autodesk.com/en/docs/viewer/v7/reference/globals/TypeDefs/NodeTraverseCallback/) | Called once for this node and each descendant. |
| --- | --- |

## add(children)

Adds child nodes. If a child already has a parent, it is removed from that parent first. Uninitialized children are attached to this node’s instance collection.

### Parameters

| children*[Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/), Array.<Node3D> |   |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/) | A reference to this node. |

## clear()

Removes all children from this node.

### Returns

| type | description |
| --- | --- |
| [Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/) | A reference to this node. |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D
