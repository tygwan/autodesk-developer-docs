---
title: "CommandExecutionStatus Enum"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CommandExecutionStatus
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Enum CommandExecutionStatus

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

The current stage of the command execution
process. Possible values:
- `accepted` - The command is ready to be executed.
- `committed` - The command is currently being executed.
- `complete` - The command was successfully executed.
- `failed` - There was an error and command execution was stopped prematurely.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum CommandExecutionStatus
```

## Fields

`Accepted = 0`

Enum Accepted for value: accepted

`Committed = 1`

Enum Committed for value: committed

`Complete = 2`

Enum Complete for value: complete

`Failed = 3`

Enum Failed for value: failed

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CommandExecutionStatus
