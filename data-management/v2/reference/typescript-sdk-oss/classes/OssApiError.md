---
title: "OssApiError"
url_path: reference/typescript-sdk-oss/classes/OssApiError
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-oss"
---
# Class: OssApiError

Defined in: [base.ts:57](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/base.ts#L57)

## Extends
- `Error`

## Implements
- `ISdkError`

## Constructors

### new OssApiError()

**new OssApiError**(`message`, `axiosError`?): [`OssApiError`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)
Defined in: [base.ts:60](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/base.ts#L60)

#### Parameters

##### message

`string`

##### axiosError?

`any`

#### Returns

[`OssApiError`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError)

#### Overrides

`Error.constructor`

## Properties

### axiosError?

`optional` **axiosError**: `any`
Defined in: [base.ts:59](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/base.ts#L59)

### message

**message**: `string`
Defined in: node_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

### name

**name**: `string`
Defined in: node_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

### stack?

`optional` **stack**: `string`
Defined in: node_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

### prepareStackTrace()?

`static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`
Defined in: node_modules/@types/node/globals.d.ts:98

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

### stackTraceLimit

`static` **stackTraceLimit**: `number`
Defined in: node_modules/@types/node/globals.d.ts:100

#### Inherited from

`Error.stackTraceLimit`

## Methods

### httpStatusCode()

**httpStatusCode**(): `number`
Defined in: [base.ts:67](https://github.com/autodesk-platform-services/aps-sdk-node/blob/e37e37c49eb213844e79f1c7dee5616930755060/oss/source/base.ts#L67)

#### Returns

`number`

#### Implementation of

`ISdkError.httpStatusCode`

### captureStackTrace()

`static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`
Defined in: node_modules/@types/node/globals.d.ts:91

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-oss/classes/OssApiError
