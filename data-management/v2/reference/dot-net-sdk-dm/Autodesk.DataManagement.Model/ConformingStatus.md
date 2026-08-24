---
title: "ConformingStatus Enum"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ConformingStatus
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Enum ConformingStatus

Namespace: [Autodesk.DataManagement.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model)Assembly: Autodesk.DataManagement.dll

A status indicating whether this version conforms to its parent folder’s file naming standard.

Possible values:
- `NONE`: The conforming status is not applicable for the version.
- `CONFORMING`: The version conforms to its parent folder’s file naming standard.
- `NON_CONFORMING`: The version does not conform to its parent folder’s file naming standard.

In the event of a `NON_CONFORMING` status, use the [Get a Folder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderAsync_System_String_System_String_System_DateTime_System_String_System_String_System_Boolean_) operation to get the file naming standards IDs that have been applied to the version’s parent folder. Then use the ID to call [GET naming-standards](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/document-management-naming-standards-id-GET/) to get the details of the file naming standard.

Note that this feature is only available for BIM 360 projects.

To learn more about the file naming standard feature, see the [BIM 360 File Naming Standard](https://help.autodesk.com/view/BIM360D/ENU/?guid=Common_Data_Environment) help documentation.

```
[JsonConverter(typeof(StringEnumConverter))]
public enum ConformingStatus
```

## Fields

`CONFORMING = 1`

Enum CONFORMING for value: CONFORMING

`NONCONFORMING = 2`

Enum NONCONFORMING for value: NON_CONFORMING

`NONE = 0`

Enum NONE for value: NONE

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ConformingStatus
