---
title: "MetaForWebhooks"
url_path: reference/typescript-sdk-dm/interfaces/ts-MetaForWebhooks
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Interface: MetaForWebhooks

Defined in: [model/metaForWebhooks.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/metaForWebhooks.ts#L8)

Meta information required for webhooks.

## Export

MetaForWebhooks

## Properties

### workflow

**workflow**: `string`

Defined in: [model/metaForWebhooks.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/metaForWebhooks.ts#L19)

The Workflow ID of a webhook that listens to Model Derivative events. Must be less than 36 characters.
Only ASCII characters (a-z, A-Z, 0-9), periods (.), and hyphens (-) are accepted.
See the [Creating a Webhook and Listening to Events](https://aps.autodesk.com/en/docs/webhooks/v1/tutorials/create-a-hook-model-derivative) tutorial for more information.

**Note**: This attribute applies to BIM 360 Docs only.

#### Memberof

MetaForWebhooks

### workflowAttribute?

`optional` **workflowAttribute**: `string`

Defined in: [model/metaForWebhooks.ts:28](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/metaForWebhooks.ts#L28)

A user defined JSON object containing custom workflow information for the specified webhook event. Must be less than 1KB.

**Note**: Applicable only if a valid value has been specified for `meta.workflow`.

#### Memberof

MetaForWebhooks

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-MetaForWebhooks
