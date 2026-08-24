---
title: "CommandExecutionStatus"
url_path: reference/typescript-sdk-dm/enumerations/ts-CommandExecutionStatus
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Enumeration: CommandExecutionStatus

Defined in: [model/commandExecutionStatus.ts:15](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/commandExecutionStatus.ts#L15)

The current stage of the command execution
* process. Possible values:
*
* - `accepted` - The command is ready to be executed.
* - `committed` - The command is currently being executed.
* - `complete` - The command was successfully executed.
* - `failed` - There was an error and command execution was stopped prematurely.

## Enumeration Members

### Accepted

**Accepted**: `"accepted"`

Defined in: [model/commandExecutionStatus.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/commandExecutionStatus.ts#L16)

### Committed

**Committed**: `"committed"`

Defined in: [model/commandExecutionStatus.ts:17](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/commandExecutionStatus.ts#L17)

### Complete

**Complete**: `"complete"`

Defined in: [model/commandExecutionStatus.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/commandExecutionStatus.ts#L18)

### Failed

**Failed**: `"failed"`

Defined in: [model/commandExecutionStatus.ts:19](https://github.com/autodesk-platform-services/aps-sdk-node/blob/eeaeb10a079bc82754d05778f6c83dafc47cac8a/datamanagement/source/model/commandExecutionStatus.ts#L19)

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-CommandExecutionStatus
