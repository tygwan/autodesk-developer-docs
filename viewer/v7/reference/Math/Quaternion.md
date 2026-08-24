---
title: "Quaternion"
url_path: reference/Math/Quaternion
surface: viewer-sdk
document_kind: reference
category: "Math"
---
# Quaternion

## new Quaternion(x, y, z, w)

Quaternion representation of a rotation.

### Parameters

| xnumber | The x component. |
| --- | --- |
| ynumber | The y component. |
| znumber | The z component. |
| wnumber | The w component. |

# Properties

| xnumber | The x component. |
| --- | --- |
| ynumber | The y component. |
| znumber | The z component. |
| wnumber | The w component. |

# Methods

## set(x, y, z, w)

Set the components of this quaternion.

### Parameters

| x*number | The x component. |
| --- | --- |
| y*number | The y component. |
| z*number | The z component. |
| w*number | The w component. |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## copy(quaternion)

Copy the components from another quaternion.

### Parameters

| quaternion*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The quaternion to copy. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## setFromAxisAngle(axis, angle)

Set this quaternion from an axis and angle.

### Parameters

| axis*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The axis (assumed to be normalized). |
| --- | --- |
| angle*number | The angle in radians. |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## setFromRotationMatrix(m)

Set this quaternion from a rotation matrix.

### Parameters

| m*[Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A 4x4 matrix with a pure rotation in the upper 3x3. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## setFromUnitVectors(vFrom, vTo)

Set this quaternion from two unit vectors.

### Parameters

| vFrom*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The from vector (assumed to be normalized). |
| --- | --- |
| vTo*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The to vector (assumed to be normalized). |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## invert()

Invert this quaternion.

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## conjugate()

Calculate the conjugate of this quaternion. For a normalized quaternion this is also its inverse.

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## dot(v)

Calculate the dot product of this quaternion and another.

### Parameters

| v*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The other quaternion. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| number | The dot product. |

## lengthSq()

Calculate the squared length of this quaternion.

### Returns

| type | description |
| --- | --- |
| number | The squared length. |

## length()

Calculate the length of this quaternion.

### Returns

| type | description |
| --- | --- |
| number | The length. |

## normalize()

Normalize this quaternion.

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## multiply(q)

Multiply this quaternion by another quaternion.

### Parameters

| q*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The quaternion to multiply by. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## multiplyQuaternions(a, b)

Set this quaternion to the product of two quaternions.

### Parameters

| a*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The first quaternion. |
| --- | --- |
| b*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The second quaternion. |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## slerp(qb, t)

Spherical linear interpolation between this quaternion and another.

### Parameters

| qb*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The other quaternion. |
| --- | --- |
| t*number | The interpolation factor between 0 and 1. |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## slerpQuaternions(qa, qb, t)

Linear spherical interpolation between the given quaternions. The result is stored in this quaternion.

### Parameters

| qa*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The initial quaternion. |
| --- | --- |
| qb*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The final quaternion. |
| t*number | The interpolation factor in the interval [0, 1]. |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | This quaternion. |

## equals(quaternion)

Check if this quaternion equals another quaternion.

### Parameters

| quaternion*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The quaternion to compare. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | True if the quaternions are equal. |

## fromArray(array, offset)

Set this quaternion from an array.

### Parameters

| array*Array.<number> | The source array. |
| --- | --- |
| offsetnumber | The offset into the array. |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## toArray(array, offset)

Convert this quaternion to an array.

### Parameters

| arrayArray.<number> | The target array. |
| --- | --- |
| offsetnumber | The offset into the array. |

### Returns

| type | description |
| --- | --- |
| Array.<number> | The array [x, y, z, w]. |

## onChange(callback)

Set the callback function to be called when this quaternion changes.

### Parameters

| callback*function | The callback function. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A reference to this quaternion. |

## clone()

Create a clone of this quaternion.

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | A new quaternion with the same components. |

## slerp(qa, qb, qm, t)

Static method for linear spherical interpolation between the given quaternions. The result is stored in qm.

### Parameters

| qa*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The initial quaternion. |
| --- | --- |
| qb*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The final quaternion. |
| qm*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The interpolated quaternion. |
| t*number | The interpolation factor in the interval [0, 1]. |

### Returns

| type | description |
| --- | --- |
| [Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | qm |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion
