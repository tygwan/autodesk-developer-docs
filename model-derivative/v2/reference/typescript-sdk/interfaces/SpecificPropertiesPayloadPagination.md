---
title: "SpecificPropertiesPayloadPagination"
url_path: reference/typescript-sdk/interfaces/SpecificPropertiesPayloadPagination
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Interface: SpecificPropertiesPayloadPagination

Specifies how to split the response into multiple pages, and return the response one page at a time.

## Export

SpecificPropertiesPayloadPagination

## Properties

### limit

**limit**: `number`

The maximum number of properties to return in a single page. Use this attribute with the `offset` attribute to split the properties into multiple pages. To fetch the first page, specify `offset` =0 (do not skip any properties). To fetch the second page, specify `offset` = value of `limit` you specified for the first page. So, the server skips the search results returned on the first page. In general, `offset` = `previous_offset` + `previous_limit`. This attribute is 20 by default. The minimum value is 1 and the maximum is 1000.

#### Memberof

SpecificPropertiesPayloadPagination

#### Defined in

[aps-sdk-node/modelderivative/source/model/specificPropertiesPayloadPagination.ts:20](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specificPropertiesPayloadPagination.ts#L20)

### offset

**offset**: `number`

The number of properties to skip. Use this attribute with the `limit` attribute to split the properties into multiple pages. To fetch the first page, specify `offset` =0 (do not skip any properties). To fetch the second page, specify `offset` = value of `limit` you specified for the first page. So, the server skips the properties returned on the first page. In general, `offset` = `previous_offset` + `previous_limit`. This attribute is 0 by default. The minimum value is 0.

#### Memberof

SpecificPropertiesPayloadPagination

#### Defined in

[aps-sdk-node/modelderivative/source/model/specificPropertiesPayloadPagination.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/specificPropertiesPayloadPagination.ts#L14)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecificPropertiesPayloadPagination
