---
title: "Matrix4"
url_path: reference/Math/Matrix4
surface: viewer-sdk
document_kind: reference
category: "Math"
---
# Matrix4

## new Matrix4(useDoublePrecision)

Represents a 4x4 matrix

### Parameters

| useDoublePrecisionboolean | Whether to use double precision (Float64Array) or single precision (Float32Array) |
| --- | --- |

# Properties

| elementsFloat32Array, Float64Array | A column-major list of matrix values. Precision is set on construction. |
| --- | --- |
| isDoublePrecisionboolean | Whether the matrix uses double precision (Float64Array) or single precision (Float32Array). |

# Methods

## set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44)

Set the components of this matrix.

### Parameters

| n11*number | Component 1-1. |
| --- | --- |
| n12*number | Component 1-2. |
| n13*number | Component 1-3. |
| n14*number | Component 1-4. |
| n21*number | Component 2-1. |
| n22*number | Component 2-2. |
| n23*number | Component 2-3. |
| n24*number | Component 2-4. |
| n31*number | Component 3-1. |
| n32*number | Component 3-2. |
| n33*number | Component 3-3. |
| n34*number | Component 3-4. |
| n41*number | Component 4-1. |
| n42*number | Component 4-2. |
| n43*number | Component 4-3. |
| n44*number | Component 4-4. |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## identity()

Set this matrix to the identity matrix.

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## copy(m)

Copy the components from another matrix.

### Parameters

| m*[Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | The matrix to copy. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## makeRotationFromQuaternion(q)

Set this matrix to a rotation matrix from a quaternion.

### Parameters

| q*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The quaternion. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## multiply(n)

Multiply this matrix by another matrix.

### Parameters

| n*[Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | The matrix to multiply by. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## multiplyMatrices(a, b)

Set this matrix to the product of two matrices.

### Parameters

| a*[Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | The first matrix. |
| --- | --- |
| b*[Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | The second matrix. |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## multiplyScalar(s)

Multiply this matrix by a scalar.

### Parameters

| s*number | The scalar to multiply by. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## determinant()

Calculate the determinant of this matrix.

### Returns

| type | description |
| --- | --- |
| number | The determinant. |

## transpose()

Transpose this matrix.

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## setPosition(v)

Set the position component of this matrix.

### Parameters

| v*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The position vector. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## invert()

Invert this matrix.

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## scale(v)

Scales the first column by v.x, the second column by v.y and the third column by v.z.

### Parameters

| v*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The scale vector. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## getMaxScaleOnAxis()

Get the maximum scale value on any axis.

### Returns

| type | description |
| --- | --- |
| number | The maximum scale. |

## makeTranslation(x, y, z)

Set this matrix to a translation matrix.

### Parameters

| x*number | The x translation. |
| --- | --- |
| y*number | The y translation. |
| z*number | The z translation. |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## makeRotationX(theta)

Set this matrix to a rotation matrix around the X axis.

### Parameters

| theta*number | The rotation angle in radians. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## makeRotationY(theta)

Set this matrix to a rotation matrix around the Y axis.

### Parameters

| theta*number | The rotation angle in radians. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## makeRotationZ(theta)

Set this matrix to a rotation matrix around the Z axis.

### Parameters

| theta*number | The rotation angle in radians. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## makeRotationAxis(axis, angle)

Set this matrix to a rotation matrix around an arbitrary axis.

### Parameters

| axis*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The rotation axis. |
| --- | --- |
| angle*number | The rotation angle in radians. |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## makeScale(x, y, z)

Set this matrix to a scale matrix.

### Parameters

| x*number | The x scale. |
| --- | --- |
| y*number | The y scale. |
| z*number | The z scale. |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## compose(position, quaternion, scale)

Compose this matrix from position, quaternion and scale.

### Parameters

| position*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The position. |
| --- | --- |
| quaternion*[Quaternion](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Quaternion/) | The rotation quaternion. |
| scale*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The scale. |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## transformPoint(pt)

Transform a point by this matrix.

### Parameters

| pt*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The point to transform. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The transformed point. |

## transformDirection(v)

Transform a direction vector by this matrix.

### Parameters

| v*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The direction vector to transform. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | The transformed direction vector. |

## equals(matrix)

Check if this matrix equals another matrix.

### Parameters

| matrix*[Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | The matrix to compare. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| boolean | True if the matrices are equal. |

## fromArray(array)

Set this matrix from an 16 element array.

### Parameters

| array*Array.<number> | The source array. |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A reference to this matrix. |

## toArray()

Convert this matrix to an 16 element array.

### Returns

| type | description |
| --- | --- |
| Array.<number> | The array containing the matrix elements. |

## clone()

Create a clone of this matrix.

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A new matrix with the same components. |

## getRotationMatrixAligningVectors(from, to, epsilon)

Computes a rotation matrix that aligns direction vector `from` onto `to`.

### Parameters

| from*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | Source direction vector. |
| --- | --- |
| to*[Vector3](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Vector3/) | Target direction vector. |
| epsilonnumber | Tolerance used for parallelism checks. |

### Returns

| type | description |
| --- | --- |
| [Matrix4](https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4/) | A rotation-only matrix (no translation). |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Math/Matrix4
