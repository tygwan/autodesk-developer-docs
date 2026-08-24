---
title: "Forma Data Management Compatibility"
url_path: overview/bim-360-compatibility/docs-compatibility
surface: guide
---
# Forma Data Management Compatibility With BIM 360 APIs

This section explains the limitations of the compatibility of Forma documents with BIM 360 APIs.

You access BIM 360 Document Management via the [Data Management API](https://aps.autodesk.com/en/docs/data/v2/) and the [BIM 360 Document Management API](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/document-management-projects-project_id-versions-version_id-exports-POST/), where you can manage your BIM 360 folders and files. Almost all these endpoints are compatible with Forma (see the [compatibility table](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/) for more information). However, since we have added some enhancements to Forma documents, the BIM 360 APIs do not support all the Forma document features. We will explain the limitations below.

## Folders

The Forma folders are structured slightly differently from the BIM 360 folders. BIM 360 Document Management includes 2 root folders: the Project Files folder and the Plans folder. The Plans folder is used to manage construction-related documents such as contract drawings, and can split them into separate sheets. The Project Files folder is used for any project-related documents, such as design data, photos, and schedules. However, Forma has split these 2 types of folders into separate dedicated tools: the Files tool and the Sheets tool. The Files tool parallels the BIM 360 Project Files folder and the BIM 360 APIs support these folders and files. However, the Data Management API and the BIM 360 Document Management API do not support the Sheets tool, which parallels the BIM 360 Plans folder.

For details about when the Forma Sheets API will be released, [contact support](mailto:acc.api.inquiry%40autodesk.com).

## Permissions

The permission types for Forma Data Management are somewhat different than the permission types for BIM 360 Document Management.

The following table shows the differences between the permissions for the BIM 360 platform and the Forma platform.

| BIM 360 Platform Pemission Type | Unified Forma Platform Permission Type | BIM 360 Platform API Permission Actions | Unified Forma Platform API Permission Actions |
| --- | --- | --- | --- |
| View Only | View (View files) | VIEW,COLLABORATE | VIEW,COLLABORATE |
| View/Download | View (View and Download files) | VIEW,DOWNLOAD,COLLABORATE | VIEW,DOWNLOAD,COLLABORATE |
| Upload Only |   | PUBLISH |   |
|   | Create (View+Download+Publish markups) |   | VIEW,DOWNLOAD,COLLABORATE,PUBLISH_MARKUP |
| View/Download+Upload | Create (View+Download+Publish markups+Upload) | PUBLISH,VIEW,DOWNLOAD,COLLABORATE | PUBLISH,VIEW,DOWNLOAD,COLLABORATE,PUBLISH_MARKUP |
| View/Download+Upload + Edit | Edit (View+Download+Publish markups+Upload+Edit) | PUBLISH,VIEW,DOWNLOAD,COLLABORATE,EDIT | PUBLISH,VIEW,DOWNLOAD,COLLABORATE,PUBLISH_MARKUP,EDIT |
| Full Control | Manage (Full Administrative Control) | PUBLISH,VIEW,DOWNLOAD,COLLABORATE,EDIT,CONTROL | PUBLISH,VIEW,DOWNLOAD,COLLABORATE,PUBLISH_MARKUP,EDIT,CONTROL |

See the [Help documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Folder_Permissions) for more details.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/bim-360-compatibility/docs-compatibility
