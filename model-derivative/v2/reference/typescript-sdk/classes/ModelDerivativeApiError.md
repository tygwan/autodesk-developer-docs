---
title: "ModelDerivativeApiError"
url_path: reference/typescript-sdk/classes/ModelDerivativeApiError
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Class: ModelDerivativeApiError

## Extends
- `Error`

## Implements
- `ISdkError`

## Constructors

### new ModelDerivativeApiError()

**new ModelDerivativeApiError**(`message`, `axiosError`?): [`ModelDerivativeApiError`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

#### Parameters

##### message

`string`

##### axiosError?

`any`

#### Returns

[`ModelDerivativeApiError`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

#### Overrides

`Error.constructor`

#### Defined in

[aps-sdk-node/modelderivative/source/base.ts:60](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/base.ts#L60)

## Properties

### axiosError?

`optional` **axiosError**: `any`

#### Defined in

[aps-sdk-node/modelderivative/source/base.ts:59](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/base.ts#L59)

### message

**message**: `string`

#### Inherited from

`Error.message`

#### Defined in

aps-sdk-node/modelderivative/source/node_modules/typescript/lib/lib.es5.d.ts:1077

### name

**name**: `string`

#### Inherited from

`Error.name`

#### Defined in

aps-sdk-node/modelderivative/source/node_modules/typescript/lib/lib.es5.d.ts:1076

### stack?

`optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

aps-sdk-node/modelderivative/source/node_modules/typescript/lib/lib.es5.d.ts:1078

### prepareStackTrace()?

`static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

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

#### Defined in

aps-sdk-node/modelderivative/source/node_modules/@types/node/globals.d.ts:98

### stackTraceLimit

`static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

aps-sdk-node/modelderivative/source/node_modules/@types/node/globals.d.ts:100

## Methods

### httpStatusCode()

**httpStatusCode**(): `number`

#### Returns

`number`

#### Implementation of

`ISdkError.httpStatusCode`

#### Defined in

[aps-sdk-node/modelderivative/source/base.ts:67](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/base.ts#L67)

### captureStackTrace()

`static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

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

#### Defined in

aps-sdk-node/modelderivative/source/node_modules/@types/node/globals.d.ts:91

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError
