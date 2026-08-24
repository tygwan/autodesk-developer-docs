---
title: "Payload"
url_path: reference/typescript-sdk/enumerations/Payload
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Enumeration: Payload

Specifies the format for numeric values in the response body. Possible values:
- `text` - (Default) Returns all properties requested in `fields` without applying any special formatting.
- `unit` - Applies a filter and returns only the properties that contain numerical values. Additionally, it formats property values as `##<VALUE_OF_PROPERTY><UNIT_OF_VALUE><PRECISION><SYSTEM_UNIT>`. For example `##94.172{mm}[3]{m}`, where `94.172` is the value of the property, `{mm}` is the unit of the value, `[3]` is the precision, and `{m}` is the metric base unit for the measurement.

## Enumeration Members

### Text

**Text**: `"text"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/payload.ts:14](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/payload.ts#L14)

### Unit

**Unit**: `"unit"`

#### Defined in

[aps-sdk-node/modelderivative/source/model/payload.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/05570b8143138d5191b8069a72c0f08c25727474/modelderivative/source/model/payload.ts#L15)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Payload
