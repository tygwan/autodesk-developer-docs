---
title: "TypeScript SDK Reference (Data Management)"
url_path: reference/typescript-sdk-dm
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# TypeScript SDK Reference for Data Management

## Resource Information

| **Package Name:** | @aps_sdk/data-management |
| --- | --- |
| **Version:** | 1.0.0 |

## Installing this Library

```
npm i @aps_sdk/data-management
```

## Learning Resources

### Source Code

The source code for this library is available at [https://www.npmjs.com/package/@aps_sdk/data-management](https://www.npmjs.com/package/@aps_sdk/data-management).

### Tutorials

The ACC Administrator tutorial on the [https://tutorials.autodesk.io/](https://get-started.aps.autodesk.com/tutorials/acc-admin/) site illustrates how to use this library to browse through hubs and projects.

### Code Sample

```
import { Hubs } from "@aps_sdk/data-management";

// Access token for authentication
const ACCESS_TOKEN = "...";

// Initialize the Data Management Client
const dataManagementClient = new DataManagementClient();

// Returns a collection of accessible hubs.
const hubs = await dataManagementClient.getHubs({accessToken: ACCESS_TOKEN});

// Log the details of the retrieved hubs to the console
console.log(hubs);
```

See [https://github.com/autodesk-platform-services/aps-sdk-node/blob/main/samples/datamanagement.ts](https://github.com/autodesk-platform-services/aps-sdk-node/blob/main/samples/datamanagement.ts) for a complete code sample.

## SDK to REST API Cross Reference

| Operation Category | Operation | Method | HTTP Request |
| --- | --- | --- | --- |
| Commands | Check Permission | [executeCheckPermissionCommand](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#executecheckpermissioncommand) | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/CheckPermission/) |
| Publish Model | [executeGetPublishModelJobCommand](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#executegetpublishmodeljobcommand) | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/PublishModel) |   |
| Publish Without Links | [executePublishWithoutLinksCommand](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#executepublishwithoutlinkscommand) | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/CheckPermission/) |   |
| Get Publish Model Job | [executePublishModelCommand](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#executepublishmodelcommand) | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/GetPublishModelJob/) |   |
| List Refs | [executeListRefsCommand](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#executelistrefscommand) | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListRefs/) |   |
| List Items | [executeListItemsCommand](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#executelistitemscommand) | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListItems/) |   |
| Hubs | List Hubs | [getHubs](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#gethubs) | [GET /hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/) |
| Get a Hub | [getHub](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#gethub) | [GET /hubs/{hub_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-GET/) |   |
| Projects | Get Projects | [getHubProjects](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#gethubprojects) | [GET /hubs/{hub_id}/projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET/) |
| Get a Project | [getProject](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getproject) | [GET /hubs/{hub_id}/projects/{project_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-GET/) |   |
| Get Hub for Project | [getProjectHub](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getprojecthub) | [GET /hubs/{hub_id}/projects/{project_id}/hub](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-hub-GET/) |   |
| List Top-level Project Folders | [getProjectTopFolders](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getprojecttopfolders) | [GET /hubs/{hub_id}/projects/{project_id}/topFolders](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-topFolders-GET/) |   |
| Create a Storage Location in OSS | [createStorage](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#createstorage) | [POST /projects/{project_id}/storage](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-storage-POST/) |   |
| Get Download Details | [getDownload](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getdownload) | [GET /projects/{project_id}/downloads/{download_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-download_id-GET/) |   |
| Create Download | [createDownload](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#createdownload) | [POST /projects/{project_id}/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-POST/) |   |
| Check Download Creation Progress | [getDownloadJob](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getdownloadjob) | [GET /projects/{project_id}/jobs/{job_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-jobs-job_id-GET/) |   |
| Folders | Get a Folder | [getFolder](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfolder) | [GET /projects/{project_id}/folders/{folder_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-GET/) |
| Modify a Folder | [patchFolder](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#patchfolder) | [PATCH /projects/{project_id}/folders/{folder_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/) |   |
| Get Parent of a Folder | [getFolderParent](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfolderparent) | [GET /projects/{project_id}/folders/{folder_id}/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-parent-GET/) |   |
| List Folder Contents | [getFolderContents](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfoldercontents) | [GET /projects/{project_id}/folders/{folder_id}/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) |   |
| List Related Resources for a Folder | [getFolderRefs](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfolderrefs) | [GET /projects/{project_id}/folders/{folder_id}/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-refs-GET/) |   |
| List Folder and Subfolder Contents | [getFolderSearch](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfoldersearch) | [GET /projects/{project_id}/folders/{folder_id}/search](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET/) |   |
| List Custom Relationships for a Folder | [getFolderRelationshipsRefs](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfolderrelationshipsrefs) | [GET /projects/{project_id}/folders/{folder_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-refs-GET/) |   |
| Create a Custom Relationship for a Folder | [createFolderRelationshipsRef](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#createfolderrelationshipsref) | [POST /projects/{project_id}/folders/{folder_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-refs-POST/) |   |
| List Relationship Links for a Folder | [getFolderRelationshipsLinks](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfolderrelationshipslinks) | [GET /projects/{project_id}/folders/{folder_id}/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-links-GET/) |   |
| Create a Folder | [createFolder](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#createfolder) | [POST /projects/{project_id}/folders](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-POST/) |   |
| Items | Get an Item | [getItem](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getitem) | [GET /projects/{project_id}/items/{item_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) |
| Update an Item | [patchItem](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#patchitem) | [PATCH /projects/{project_id}/items/{item_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-PATCH/) |   |
| Get Parent of an Item | [getItemParentFolder](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getitemparentfolder) | [GET /projects/{project_id}/items/{item_id}/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-parent-GET/) |   |
| List Custom Relationships for an Item | [getItemRelationshipsRefs](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getitemrelationshipsrefs) | [GET /projects/{project_id}/items/{item_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-refs-GET/) |   |
| Create a Custom Relationship for an Item | [createItemRelationshipsRef](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#createitemrelationshipsref) | [POST /projects/{project_id}/items/{item_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-refs-POST/) |   |
| List Related Resources for an Item | [getItemRefs](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getitemrefs) | [GET /projects/{project_id}/items/{item_id}/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-refs-GET/) |   |
| List Relationship Links for an Item | [getItemRelationshipsLinks](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getitemrelationshipslinks) | [GET /projects/{project_id}/items/{item_id}/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-links-GET/) |   |
| Get Tip Version of an Item | [getItemTip](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getitemtip) | [GET /projects/{project_id}/items/{item_id}/tip](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-tip-GET/) |   |
| List all Versions of an Item | [getItemVersions](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getitemversions) | [GET /projects/{project_id}/items/{item_id}/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-versions-GET/) |   |
| Create an Item | [createItem](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#createitem) | [POST /projects/{project_id}/items](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-POST/) |   |
| Versions | Get a Version | [getVersion](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getversion) | [GET /projects/{project_id}/versions/{version_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET/) |
| Update a Version | [patchVersion](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#patchversion) | [PATCH /projects/{project_id}/versions/{version_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-PATCH/) |   |
| Get Item by Version | [getVersionItem](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getversionitem) | [GET /projects/{project_id}/versions/{version_id}/item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-item-GET/) |   |
| List Related Resources for a Version | [getVersionRefs](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getversionrefs) | [GET /projects/{project_id}/versions/{version_id}/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-refs-GET/) |   |
| List Custom Relationships for a Version | [getVersionRelationshipsRefs](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getversionrelationshipsrefs) | [LIST /projects/{project_id}/versions/{version_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-GET/) |   |
| Create Custom Relationship for a Version | [createVersionRelationshipsRef](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#createversionrelationshipsref) | [POST /projects/{project_id}/versions/{version_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-POST/) |   |
| List Links for a Version | [getVersionRelationshipsLinks](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getversionrelationshipslinks) | [GET /projects/{project_id}/versions/{version_id}/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-links-GET/) |   |
| Create a Version | [createVersion](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#createversion) | [POST /projects/{project_id}/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) |   |
| List Supported Download Formats | [getVersionDownloadFormats](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getversiondownloadformats) | [GET /projects/{project_id}/versions/{version_id}/downloadFormats](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloadFormats-GET/) |   |
| List Available Download Formats | [getVersionDownloads](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getversiondownloads) | [GET /projects/{project_id}/versions/{version_id}/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloads-GET/) |   |

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm
