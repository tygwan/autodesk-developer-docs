---
title: "AuthenticationApiError"
url_path: reference/typescript-sdk/classes/AuthenticationApiError
product: "Authentication API"
surface: "authentication-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Class: AuthenticationApiError

## Extends
- `Error`

## Implements
- `ISdkError`

## Constructors

### new AuthenticationApiError()

**new AuthenticationApiError**(`message`, `axiosError`?): [`AuthenticationApiError`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Parameters

##### message

`string`

##### axiosError?

`any`

#### Returns

[`AuthenticationApiError`](https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError)

#### Overrides

`Error.constructor`

#### Defined in

[base.ts:60](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/base.ts#L60)

## Properties

### axiosError?

`optional` **axiosError**: `any`

#### Defined in

[base.ts:59](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/base.ts#L59)

### message

**message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

### name

**name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

### stack?

`optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1078

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

node_modules/@types/node/globals.d.ts:98

### stackTraceLimit

`static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node_modules/@types/node/globals.d.ts:100

## Methods

### httpStatusCode()

**httpStatusCode**(): `number`

#### Returns

`number`

#### Implementation of

`ISdkError.httpStatusCode`

#### Defined in

[base.ts:67](https://github.com/autodesk-platform-services/aps-sdk-node/blob/d074cae5f8b3a7bd83e612e0654922b885545121/authentication/source/base.ts#L67)

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

node_modules/@types/node/globals.d.ts:91

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/typescript-sdk/classes/AuthenticationApiError
