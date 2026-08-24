---
title: ".NET SDK Reference (Data Management)"
url_path: reference/dot-net-sdk-dm
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# .NET SDK Reference for the Data Management API

## Resource Information

| **Namespace:** | Autodesk.DataManagement |
| --- | --- |
| **Assembly:** | Autodesk.DataManagement.dll |
| **Version:** | 1.0.0 |

## Installing this Library

The recommended way of installing this library to your .NET project is to use the NuGet Package Manager.
- Within the NuGet Package Manager locate the [Autodesk.DataManagement library](https://www.nuget.org/packages/Autodesk.DataManagement).
- Follow the instructions on the [NuGet documentation site](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#find-and-install-a-package) to install the library.

Alternatively, from Visual Studio IDE or CLI tools:

```
dotnet add package Autodesk.DataManagement
```

## Learning Resources

### Source Code

The source code for this library is available at [https://github.com/autodesk-platform-services/aps-sdk-net](https://github.com/autodesk-platform-services/aps-sdk-net).

### Tutorials

The Hubs Browser tutorial on the [Autodesk Platform Services (APS) website](https://get-started.aps.autodesk.com/tutorials/hubs-browser/) demonstrates how to use this library to browse content that authenticated users can access in APS-based applications like BIM 360 Docs, Autodesk Docs, or Fusion Team.

### Code Sample

```
string? token = Environment.GetEnvironmentVariable("token");
string? folder_id = Environment.GetEnvironmentVariable("folder_id");
string? project_top_folder_one_id = Environment.GetEnvironmentVariable("project_top_folder_one_id");
string? project_top_folder_two_id = Environment.GetEnvironmentVariable("project_top_folder_two_id");
string? hub_id = Environment.GetEnvironmentVariable("hub_id");
string? project_id = Environment.GetEnvironmentVariable("project_id");
string? download_id = Environment.GetEnvironmentVariable("download_id");
string? job_id = Environment.GetEnvironmentVariable("job_id");
string? item_id = Environment.GetEnvironmentVariable("item_id");
string? version_id = Environment.GetEnvironmentVariable("version_id");
string? storage_urn = Environment.GetEnvironmentVariable("storage_urn");

DataManagementClient dataManagementClient = null!;

public void Initialise()
{

      // Optionally initialise SDKManager to pass custom configurations, logger, etc.
      // SDKManager sdkManager = SdkManagerBuilder.Create().Build();

      StaticAuthenticationProvider staticAuthenticationProvider = new StaticAuthenticationProvider(token);
      dataManagementClient = new DataManagementClient(authenticationProvider: staticAuthenticationProvider);
}

#region hubs
public async Task GetHubsAsync()
{
    List<string> filter_id = new List<string> { "<filterID >" };
    List<string> filter_name = new List<string> { "<filterName>" };
    List<string> filter_extension_type = new List<string> { "<filterExtensionType>" };

    Hubs hubs = await dataManagementClient.GetHubsAsync(filterId: filter_id, filterName: filter_name, filterExtensionType: filter_extension_type);

    List<HubData> hubsData = hubs.Data;
    foreach (var hub in hubsData)
    {
        TypeHub hubsType = hub.Type;
        string HubsId = hub.Id;

        Console.WriteLine(hubsType);
        Console.WriteLine(HubsId);
        Console.WriteLine(hub.Attributes.Name);
        Console.WriteLine(hub.Attributes.Extension.Type);
    }
}
```

## REST API to SDK Cross Reference

| Operation Category | Operation | HTTP Request | Method |
| --- | --- | --- | --- |
| Commands | Check Permission | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/CheckPermission/) | [ExecuteCheckPermissionAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_ExecuteCheckPermissionAsync_System_String_Autodesk_DataManagement_Model_CheckPermissionPayload_System_String_System_String_System_Boolean_) |
| Publish Model | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/PublishModel) | [ExecutePublishModelAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_ExecutePublishModelAsync_System_String_Autodesk_DataManagement_Model_PublishModelPayload_System_String_System_String_System_Boolean_) |   |
| Publish Without Links | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/CheckPermission/) | [ExecutePublishWithoutLinksAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_ExecutePublishWithoutLinksAsync_System_String_Autodesk_DataManagement_Model_PublishWithoutLinksPayload_System_String_System_String_System_Boolean_) |   |
| Get Publish Model Job | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/GetPublishModelJob/) | [ExecuteGetPublishModelJobAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_ExecuteGetPublishModelJobAsync_System_String_Autodesk_DataManagement_Model_PublishModelJobPayload_System_String_System_String_System_Boolean_) |   |
| List Refs | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListRefs/) | [ExecuteListRefsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_ExecuteListRefsAsync_System_String_Autodesk_DataManagement_Model_ListRefsPayload_System_String_System_String_System_Boolean_) |   |
| List Items | [POST /projects/{project_id}/commands](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListItems/) | [ExecuteListItemsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_ExecuteListItemsAsync_System_String_Autodesk_DataManagement_Model_ListItemsPayload_System_String_System_String_System_Boolean_) |   |
| Hubs | List Hubs | [GET /hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/) | [GetHubsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetHubsAsync_System_String_System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_String_System_Boolean_) |
| Get a Hub | [GET /hubs/{hub_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-GET/) | [GetHubAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetHubAsync_System_String_System_String_System_String_System_Boolean_) |   |
| Projects | Get Projects | [GET /hubs/{hub_id}/projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET/) | [GetHubProjectsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetHubProjectsAsync_System_String_System_String_System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_Int32_System_Int32_System_String_System_Boolean_) |
| Get a Project | [GET /hubs/{hub_id}/projects/{project_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-GET/) | [GetProjectAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetProjectAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| Get Hub for Project | [GET /hubs/{hub_id}/projects/{project_id}/hub](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-hub-GET/) | [GetProjectHubAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetProjectHubAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| List Top-level Project Folders | [GET /hubs/{hub_id}/projects/{project_id}/topFolders](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-topFolders-GET/) | [GetProjectTopFoldersAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetProjectTopFoldersAsync_System_String_System_String_System_String_System_Boolean_System_Boolean_System_String_System_Boolean_) |   |
| Create a Storage Location in OSS | [POST /projects/{project_id}/storage](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-storage-POST/) | [CreateStorageAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateStorageAsync_System_String_Autodesk_DataManagement_Model_StoragePayload_System_String_System_String_System_Boolean_) |   |
| Get Download Details | [GET /projects/{project_id}/downloads/{download_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-download_id-GET/) | [GetDownloadAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetDownloadAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| Create Download | [POST /projects/{project_id}/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-POST/) | [CreateDownloadAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateDownloadAsync_System_String_Autodesk_DataManagement_Model_DownloadPayload_System_String_System_String_System_Boolean_) |   |
| Check Download Creation Progress | [GET /projects/{project_id}/jobs/{job_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-jobs-job_id-GET/) | [GetDownloadJobAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetDownloadJobAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| Folders | Get a Folder | [GET /projects/{project_id}/folders/{folder_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-GET/) | [GetFolderAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderAsync_System_String_System_String_System_DateTime_System_String_System_String_System_Boolean_) |
| Modify a Folder | [PATCH /projects/{project_id}/folders/{folder_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/) | [PatchFolderAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_PatchFolderAsync_System_String_System_String_Autodesk_DataManagement_Model_ModifyFolderPayload_System_String_System_String_System_Boolean_) |   |
| Get Parent of a Folder | [GET /projects/{project_id}/folders/{folder_id}/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-parent-GET/) | [GetFolderParentAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderParentAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| List Folder Contents | [GET /projects/{project_id}/folders/{folder_id}/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) | [GetFolderContentsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderContentsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterType__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_Int32_System_Int32_System_Boolean_System_String_System_Boolean_) |   |
| List Related Resources for a Folder | [GET /projects/{project_id}/folders/{folder_id}/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-refs-GET/) | [GetFolderRefsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_String_System_Boolean_) |   |
| List Folder and Subfolder Contents | [GET /projects/{project_id}/folders/{folder_id}/search](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET/) | [GetFolderSearchAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderSearchAsync_System_String_System_String_System_String_System_Collections_Generic_List_System_String__System_Int32_System_String_System_Boolean_) |   |
| List Custom Relationships for a Folder | [GET /projects/{project_id}/folders/{folder_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-refs-GET/) | [GetFolderRelationshipsRefsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderRelationshipsRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__Autodesk_DataManagement_Model_FilterRefType_Autodesk_DataManagement_Model_FilterDirection_System_Collections_Generic_List_System_String__System_String_System_Boolean_) |   |
| Create a Custom Relationship for a Folder | [POST /projects/{project_id}/folders/{folder_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-refs-POST/) | [CreateFolderRelationshipsRefAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateFolderRelationshipsRefAsync_System_String_System_String_Autodesk_DataManagement_Model_RelationshipRefsPayload_System_String_System_String_System_Boolean_) |   |
| List Relationship Links for a Folder | [GET /projects/{project_id}/folders/{folder_id}/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-links-GET/) | [GetFolderRelationshipsLinksAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderRelationshipsLinksAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| Create a Folder | [POST /projects/{project_id}/folders](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-POST/) | [CreateFolderAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateFolderAsync_System_String_Autodesk_DataManagement_Model_FolderPayload_System_String_System_String_System_Boolean_) |   |
| Items | Get an Item | [GET /projects/{project_id}/items/{item_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) | [GetItemAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemAsync_System_String_System_String_System_String_System_Boolean_System_String_System_Boolean_) |
| Update an Item | [PATCH /projects/{project_id}/items/{item_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-PATCH/) | [PatchItemAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_PatchItemAsync_System_String_System_String_Autodesk_DataManagement_Model_ModifyItemPayload_System_String_System_String_System_Boolean_) |   |
| Get Parent of an Item | [GET /projects/{project_id}/items/{item_id}/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-parent-GET/) | [GetItemParentFolderAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemParentFolderAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| List Custom Relationships for an Item | [GET /projects/{project_id}/items/{item_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-refs-GET/) | [GetItemRelationshipsRefsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemRelationshipsRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__Autodesk_DataManagement_Model_FilterRefType_Autodesk_DataManagement_Model_FilterDirection_System_Collections_Generic_List_System_String__System_String_System_Boolean_) |   |
| Create a Custom Relationship for an Item | [POST /projects/{project_id}/items/{item_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-refs-POST/) | [CreateItemRelationshipsRefAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateItemRelationshipsRefAsync_System_String_System_String_Autodesk_DataManagement_Model_RelationshipRefsPayload_System_String_System_String_System_Boolean_) |   |
| List Related Resources for an Item | [GET /projects/{project_id}/items/{item_id}/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-refs-GET/) | [GetItemRefsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_String_System_Boolean_) |   |
| List Relationship Links for an Item | [GET /projects/{project_id}/items/{item_id}/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-links-GET/) | [GetItemRelationshipsLinksAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemRelationshipsLinksAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| Get Tip Version of an Item | [GET /projects/{project_id}/items/{item_id}/tip](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-tip-GET/) | [GetItemTipAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemTipAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| List all Versions of an Item | [GET /projects/{project_id}/items/{item_id}/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-versions-GET/) | [GetItemVersionsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemVersionsAsync_System_String_System_String_System_String_System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_Int32__System_Int32_System_Int32_System_String_System_Boolean_) |   |
| Create an Item | [POST /projects/{project_id}/items](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-POST/) | [CreateItemAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateItemAsync_System_String_Autodesk_DataManagement_Model_ItemPayload_System_String_System_String_System_String_System_Boolean_) |   |
| Versions | Get a Version | [GET /projects/{project_id}/versions/{version_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET/) | [GetVersionAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionAsync_System_String_System_String_System_String_System_String_System_Boolean_) |
| Update a Version | [PATCH /projects/{project_id}/versions/{version_id}](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-PATCH/) | [PatchVersionAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_PatchVersionAsync_System_String_System_String_Autodesk_DataManagement_Model_ModifyVersionPayload_System_String_System_Boolean_) |   |
| Get Item by Version | [GET /projects/{project_id}/versions/{version_id}/item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-item-GET/) | [GetVersionItemAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionItemAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| List Related Resources for a Version | [GET /projects/{project_id}/versions/{version_id}/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-refs-GET/) | [GetVersionRefsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_String_System_Boolean_) |   |
| List Custom Relationships for a Version | [LIST /projects/{project_id}/versions/{version_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-GET/) | [GetVersionRelationshipsRefsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionRelationshipsRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__Autodesk_DataManagement_Model_FilterRefType_Autodesk_DataManagement_Model_FilterDirection_System_Collections_Generic_List_System_String__System_String_System_Boolean_) |   |
| Create Custom Relationship for a Version | [POST /projects/{project_id}/versions/{version_id}/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-POST/) | [CreateVersionRelationshipsRefAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateVersionRelationshipsRefAsync_System_String_System_String_Autodesk_DataManagement_Model_RelationshipRefsPayload_System_String_System_String_System_Boolean_) |   |
| List Links for a Version | [GET /projects/{project_id}/versions/{version_id}/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-links-GET/) | [GetVersionRelationshipsLinksAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionRelationshipsLinksAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| Create a Version | [POST /projects/{project_id}/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) | [CreateVersionAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateVersionAsync_System_String_Autodesk_DataManagement_Model_VersionPayload_System_String_System_String_System_String_System_Boolean_) |   |
| List Supported Download Formats | [GET /projects/{project_id}/versions/{version_id}/downloadFormats](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloadFormats-GET/) | [GetVersionDownloadFormatsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionDownloadFormatsAsync_System_String_System_String_System_String_System_String_System_Boolean_) |   |
| List Available Download Formats | [GET /projects/{project_id}/versions/{version_id}/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloads-GET/) | [GetVersionDownloadsAsync](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionDownloadsAsync_System_String_System_String_System_String_System_Collections_Generic_List_System_String__System_String_System_Boolean_) |   |

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm
