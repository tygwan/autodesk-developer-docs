---
title: "DataManagementClient Class"
url_path: reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-dm"
---
# Class DataManagementClient

Namespace: [Autodesk.DataManagement](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement)Assembly: Autodesk.DataManagement.dll

Represents a collection of functions to interact with the DataManagement API endpoints.

```
public class DataManagementClient : BaseClient
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
BaseClient ←
[DataManagementClient](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient)

## Inherited Members

BaseClient.AuthenticationProvider,
[object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

# Constructors

## DataManagementClient(SDKManager, IAuthenticationProvider)

**Operation:** Initializes a new instance of the class.

```
public DataManagementClient(SDKManager sdkManager = null, IAuthenticationProvider authenticationProvider = null)
```

### Parameters

`sdkManager` SDKManager

The SDK manager.

`authenticationProvider` IAuthenticationProvider

# Methods

## CreateDownloadAsync(string, DownloadPayload, string, string, bool)

**Operation:** Create Download

```
public Task<CreatedDownload> CreateDownloadAsync(string projectId, DownloadPayload downloadPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Kicks off a job to generate the specified download format of the version. Once the job completes, the specified format becomes available for download.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`downloadPayload` [DownloadPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadPayload)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CreatedDownload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CreatedDownload)>

An object that represents the response to a Create Download request.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## CreateFolderAsync(string, FolderPayload, string, string, bool)

**Operation:** Create a Folder

```
public Task<Folder> CreateFolderAsync(string projectId, FolderPayload folderPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Creates a new folder in the specified project. Use the `parent` attribute in the request body to specify where in the hierarchy the new folder should be located. Folders can be nested up to 25 levels deep.

Use the [Modify a Folder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_PatchFolderAsync_System_String_System_String_Autodesk_DataManagement_Model_ModifyFolderPayload_System_String_System_String_System_Boolean_) operation to delete and restore folders.

Before using the Data Management API to access BIM 360 Docs folders, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).

Access to Forma Data Management folders requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`folderPayload` [FolderPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderPayload)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Folder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Folder)>

An object that represents a folder.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## CreateFolderRelationshipsRefAsync(string, string, RelationshipRefsPayload, string, string, bool)

**Operation:** Create a Custom Relationship for a Folder

```
public Task<HttpResponseMessage> CreateFolderRelationshipsRefAsync(string folderId, string projectId, RelationshipRefsPayload relationshipRefsPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).

### Parameters

`folderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a folder.

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`relationshipRefsPayload` [RelationshipRefsPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayload)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## CreateItemAsync(string, ItemPayload, string, string, string, bool)

**Operation:** Create an Item

```
public Task<CreatedItem> CreateItemAsync(string projectId, ItemPayload itemPayload, string copyFrom = null, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Creates the first version of a file (item). To create additional versions of an item, use POST versions.

Before you create the first version of an item, you must create a placeholder for the file, and upload the file to the placeholder. For more details about the workflow, see the tutorial on uploading a file.

This operation also allows you to create a new item by copying a specific version of an existing item to another folder. The copied version becomes the first version of the new item in the target folder.

**Note:** You cannot copy versions of items across different projects and accounts.

Use the [Create Version](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateVersionAsync_System_String_Autodesk_DataManagement_Model_VersionPayload_System_String_System_String_System_String_System_Boolean_) operation with the `copyFrom` parameter if you want to create a new version of an item by copying a specific version of another item.

Before using the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).

Access to Forma Data Management files requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemPayload` [ItemPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemPayload)

`copyFrom` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Version ID (URN) of the version to copy from.

**Note**: This parameter is relevant only for copying files to BIM 360 Docs.

For information on how to find the URN, see the initial steps of the [Download a File](https://aps.autodesk.com/en/docs/data/v2/tutorials/download-file/) tutorial.

You can only copy files to the Plans folder or to subfolders of the Plans folder with an `item:autodesk.bim360:Document` item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an `item:autodesk.bim360:File` item extension type.

To verify an item’s extension type, use the [Get an Item](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemAsync_System_String_System_String_System_String_System_Boolean_System_String_System_Boolean_) operation, and check the `attributes.extension.type` attribute.

Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.

Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the `attributes.extension.data.processState` attribute. (optional)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act on behalf of only the user specified.

Note that for a three-legged OAuth flow or for a two-legged OAuth flow with user impersonation (`x-user-id`), the users of your app must have permission to upload files to the specified parent folder (`data.attributes.relationships.parent.data.id`).

For copying files, users of your app must have permission to view the source folder.

For information about managing and verifying folder permissions, see the folder permissions documentation for [BIM 360 Docs](http://help.autodesk.com/view/BIM360D/ENU/?guid=GUID-2643FEEF-B48A-45A1-B354-797DAD628C37) and [Forma Data Management](https://help.autodesk.com/view/DOCS/ENG/?guid=Folder_Permissions). (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CreatedItem](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CreatedItem)>

An object that represents an item.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## CreateItemRelationshipsRefAsync(string, string, RelationshipRefsPayload, string, string, bool)

**Operation:** Create a Custom Relationship for an Item

```
public Task<HttpResponseMessage> CreateItemRelationshipsRefAsync(string projectId, string itemId, RelationshipRefsPayload relationshipRefsPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version).

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of an item.

`relationshipRefsPayload` [RelationshipRefsPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayload)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## CreateStorageAsync(string, StoragePayload, string, string, bool)

**Operation:** Create a Storage Location in OSS

```
public Task<Storage> CreateStorageAsync(string projectId, StoragePayload storagePayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Creates a placeholder for an item or a version of an item in the OSS. Later, you can upload the binary content for the item or version to this storage location.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`storagePayload` [StoragePayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/StoragePayload)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Storage](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Storage)>

Task of Storage>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## CreateVersionAsync(string, VersionPayload, string, string, string, bool)

**Operation:** Create a Version

```
public Task<CreatedVersion> CreateVersionAsync(string projectId, VersionPayload versionPayload, string xUserId = null, string copyFrom = null, string accessToken = null, bool throwOnError = true)
```

Creates a new versions of an existing item.

Before creating a new version you must create a storage location for the version in OSS, and upload the file to that location. For more details about the workflow, see the tutorial on uploading a file.

This operation also allows you to create a new version of an item by copying a specific version of an existing item from another folder within the project. The new version becomes the tip version of the item.

Use the [Create an Item](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_CreateItemAsync_System_String_Autodesk_DataManagement_Model_ItemPayload_System_String_System_String_System_String_System_Boolean_) operation to copy a specific version of an existing item as a new item in another folder.

This operation can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file tutorial.

Before using the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).

Access to Forma Data Management files requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionPayload` [VersionPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/VersionPayload)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`copyFrom` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Version ID (URN) of the version to copy from.

**Note**: This parameter is relevant only for copying files to BIM 360 Docs.

For information on how to find the URN, see the initial steps of the [Download a File](https://aps.autodesk.com/en/docs/data/v2/tutorials/download-file/) tutorial.

You can only copy files to the Plans folder or to subfolders of the Plans folder with an `item:autodesk.bim360:Document` item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an `item:autodesk.bim360:File` item extension type.

To verify an item’s extension type, use the [Get an Item](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemAsync_System_String_System_String_System_String_System_Boolean_System_String_System_Boolean_) operation, and check the `attributes.extension.type` attribute.

Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.

Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the `attributes.extension.data.processState` attribute. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CreatedVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CreatedVersion)>

An object that represents a payload returned upon successful creation of a new version.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## CreateVersionRelationshipsRefAsync(string, string, RelationshipRefsPayload, string, string, bool)

**Operation:** Create a Custom Relationship for a Version

```
public Task<HttpResponseMessage> CreateVersionRelationshipsRefAsync(string projectId, string versionId, RelationshipRefsPayload relationshipRefsPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Creates a custom relationship between a version of an item and another resource within the data domain service (folder, item, or version).

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL encoded unique identifier of a version.

`relationshipRefsPayload` [RelationshipRefsPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefsPayload)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## ExecuteCheckPermissionAsync(string, CheckPermissionPayload, string, string, bool)

**Operation:** Execute a Command

```
public Task<CheckPermission> ExecuteCheckPermissionAsync(string projectId, CheckPermissionPayload checkPermissionPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.

For example, you can check whether a user has permission to delete a collection of versions, items, and folders.

The command as well as the input data for the command are specified using the `data` object of the request body.

For more information about commands see the [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) section in the Developer’s Guide.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`checkPermissionPayload` [CheckPermissionPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermissionPayload)

(optional)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[CheckPermission](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/CheckPermission)>

The `data` object returned by the CheckPermission command.

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## ExecuteGetPublishModelJobAsync(string, PublishModelJobPayload, string, string, bool)

**Operation:** Execute a Command

```
public Task<PublishModelJob> ExecuteGetPublishModelJobAsync(string projectId, PublishModelJobPayload publishModelJobPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.

For example, you can check whether a user has permission to delete a collection of versions, items, and folders.

The command as well as the input data for the command are specified using the `data` object of the request body.

For more information about commands see the [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) section in the Developer’s Guide.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`publishModelJobPayload` [PublishModelJobPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelJobPayload)

(optional)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[PublishModelJob](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelJob)>

The `data` object returned by the GetPublishModelJob command, if the model needs publishing. If the model is already published, the `data` object will be `null`.

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## ExecuteListItemsAsync(string, ListItemsPayload, string, string, bool)

**Operation:** Execute a Command

```
public Task<ListItems> ExecuteListItemsAsync(string projectId, ListItemsPayload listItemsPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.

For example, you can check whether a user has permission to delete a collection of versions, items, and folders.

The command as well as the input data for the command are specified using the `data` object of the request body.

For more information about commands see the [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) section in the Developer’s Guide.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`listItemsPayload` [ListItemsPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListItemsPayload)

(optional)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListItems](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListItems)>

The `data` object returned by the ListItems command.

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## ExecuteListRefsAsync(string, ListRefsPayload, string, string, bool)

**Operation:** Execute a Command

```
public Task<ListRefs> ExecuteListRefsAsync(string projectId, ListRefsPayload listRefsPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.

For example, you can check whether a user has permission to delete a collection of versions, items, and folders.

The command as well as the input data for the command are specified using the `data` object of the request body.

For more information about commands see the [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) section in the Developer’s Guide.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`listRefsPayload` [ListRefsPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefsPayload)

(optional)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ListRefs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ListRefs)>

The `data` object returned by the ListRefs command.

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## ExecutePublishModelAsync(string, PublishModelPayload, string, string, bool)

**Operation:** Execute a Command

```
public Task<PublishModel> ExecutePublishModelAsync(string projectId, PublishModelPayload publishModelPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.

For example, you can check whether a user has permission to delete a collection of versions, items, and folders.

The command as well as the input data for the command are specified using the `data` object of the request body.

For more information about commands see the [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) section in the Developer’s Guide.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`publishModelPayload` [PublishModelPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModelPayload)

(optional)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[PublishModel](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishModel)>

The `data` object returned by the PublishModel command.

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## ExecutePublishWithoutLinksAsync(string, PublishWithoutLinksPayload, string, string, bool)

**Operation:** Execute a Command

```
public Task<PublishWithoutLinks> ExecutePublishWithoutLinksAsync(string projectId, PublishWithoutLinksPayload publishWithoutLinksPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Executes the command that you specify in the request body. Commands enable you to perform general operations on multiple resources.

For example, you can check whether a user has permission to delete a collection of versions, items, and folders.

The command as well as the input data for the command are specified using the `data` object of the request body.

For more information about commands see the [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) section in the Developer’s Guide.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`publishWithoutLinksPayload` [PublishWithoutLinksPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishWithoutLinksPayload)

(optional)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[PublishWithoutLinks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/PublishWithoutLinks)>

The `data` object returned by the PublishWithoutLinks command.

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetDownloadAsync(string, string, string, string, bool)

**Operation:** Get Download Details

```
public Task<Download> GetDownloadAsync(string projectId, string downloadId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the details of a downloadable format of a version of an item.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`downloadId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Job ID of the job used to generate the download.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Download](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Download)>

An object that represents a download.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetDownloadJobAsync(string, string, string, string, bool)

**Operation:** Check Download Creation Progress

```
public Task<Job> GetDownloadJobAsync(string projectId, string jobId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Checks the status of a job that generates a downloadable format of a version of an item.

**Note**: If the job has finished, this operation returns a HTTP status 303, with the `location` return parameter set to the URI that returns the details of the download.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`jobId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a job.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Job](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Job)>

An object that is returned by a successfully completed job.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetFolderAsync(string, string, DateTime, string, string, bool)

**Operation:** Get a Folder

```
public Task<Folder> GetFolderAsync(string projectId, string folderId, DateTime ifModifiedSince = default, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the folder specified by the `folder_id` parameter from within the project identified by the `project_id` parameter. All folders and subfolders within a project (including the root folder) have a unique ID.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`folderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a folder.

`ifModifiedSince` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

Specify a date in the `YYYY-MM-DDThh:mm:ss.sz` format. If the resource has not been modified since the specified date/time, the response will return a HTTP status of 304 without any response body; the `Last-Modified` response parameter will contain the date of last modification. (optional)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Folder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Folder)>

An object that represents a folder.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetFolderContentsAsync(string, string, string, List<FilterType>, List<string>, List<string>, List<string>, int, int, bool, string, bool)

**Operation:** List Folder Contents

```
public Task<FolderContents> GetFolderContentsAsync(string projectId, string folderId, string xUserId = null, List<FilterType> filterType = null, List<string> filterId = null, List<string> filterExtensionType = null, List<string> filterLastModifiedTimeRollup = null, int pageNumber = 0, int pageLimit = 0, bool includeHidden = false, string accessToken = null, bool throwOnError = true)
```

Returns a list of items and folders within the specified folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.

The resources contained in the `included` array of the response are their tip versions.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`folderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a folder.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[FilterType](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterType)>

Filter by the type of the objects in the folder. Supported values are `folders` and `items`. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`filterLastModifiedTimeRollup` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `lastModifiedTimeRollup` attribute. Supported values are date-time string in the form `YYYY-MM-DDTHH:MM:SS.000000Z` or `YYYY-MM-DDTHH:MM:SS` based on RFC3339. (optional)

`pageNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies what page to return. Page numbers are 0-based (the first page is page 0). (optional)

`pageLimit` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200. (optional)

`includeHidden` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`true`: Response will contain items and folders that were deleted from BIM 360 Docs projects.

`false`: (Default): Response will not contain items and folders that were deleted from BIM 360 Docs projects.

To return only items and folders that were deleted from BIM 360 Docs projects, see the documentation on [Filtering](https://aps.autodesk.com/en/docs/data/v2/overview/filtering/). (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[FolderContents](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderContents)>

An object that represents the contents of a folder.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetFolderParentAsync(string, string, string, string, bool)

**Operation:** Get Parent of a Folder

```
public Task<Folder> GetFolderParentAsync(string projectId, string folderId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the parent folder of the specified folder. In a project, folders are organized hierarchically, and all folders except the root have a parent.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`folderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a folder.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Folder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Folder)>

An object that represents a folder.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetFolderRefsAsync(string, string, string, List<FilterTypeVersion>, List<string>, List<string>, string, bool)

**Operation:** List Related Resources for a Folder

```
public Task<FolderRefs> GetFolderRefsAsync(string projectId, string folderId, string xUserId = null, List<FilterTypeVersion> filterType = null, List<string> filterId = null, List<string> filterExtensionType = null, string accessToken = null, bool throwOnError = true)
```

Returns the resources (items, folders, and versions) that have a custom relationship with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).

Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links.
Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`folderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a folder.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[FilterTypeVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterTypeVersion)>

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[FolderRefs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FolderRefs)>

An object that represents custom relationships a folder has with other folders, items and versions.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetFolderRelationshipsLinksAsync(string, string, string, string, bool)

**Operation:** List Relationship Links for a Folder

```
public Task<RelationshipLinks> GetFolderRelationshipsLinksAsync(string projectId, string folderId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns a list of links for the specified folder.

Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s `href` attribute defines the target URI to access a resource.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`folderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a folder.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RelationshipLinks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipLinks)>

Task of RelationshipLinks>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetFolderRelationshipsRefsAsync(string, string, string, List<FilterTypeVersion>, List<string>, FilterRefType?, FilterDirection?, List<string>, string, bool)

**Operation:** List Custom Relationships for a Folder

```
public Task<RelationshipRefs> GetFolderRelationshipsRefsAsync(string folderId, string projectId, string xUserId = null, List<FilterTypeVersion> filterType = null, List<string> filterId = null, FilterRefType? filterRefType = null, FilterDirection? filterDirection = null, List<string> filterExtensionType = null, string accessToken = null, bool throwOnError = true)
```

Returns the custom relationships associated with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).

Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data.
Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.
The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for a Folder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_String_System_Boolean_) operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`folderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a folder.

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[FilterTypeVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterTypeVersion)>

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterRefType` [FilterRefType](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterRefType)?

Filter by `refType`. Possible values: `derived`, `dependencies`, `auxiliary`, `xrefs`, and `includes`. (optional)

`filterDirection` [FilterDirection](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterDirection)?

Filter by the direction of the reference. Possible values: `from` and `to`. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RelationshipRefs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefs)>

An object that represents a relationship with folders, items, or resources.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetFolderSearchAsync(string, string, string, List<string>, int, string, bool)

**Operation:** List Folder and Subfolder Contents

```
public Task<Search> GetFolderSearchAsync(string projectId, string folderId, string filterFieldName = null, List<string> filterValue = null, int pageNumber = 0, string accessToken = null, bool throwOnError = true)
```

Searches the specified folder and its subfolders and returns a list of the latest versions of the items you can access.

Use the `filter` query string parameter to narrow down the list as appropriate. You can filter by the following properties of the version payload:
- `type` property,
- `id` property,
- any of the attributes object properties.

For example, you can filter by `createTime` and `mimeType`. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, use the [Get a Version](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionAsync_System_String_System_String_System_String_System_String_System_Boolean_) operation.

To list the immediate contents of the folder without parsing subfolders, use the [List Folder Contents](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderContentsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterType__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_Int32_System_Int32_System_Boolean_System_String_System_Boolean_) operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`folderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a folder.

`filterFieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`filterValue` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

`pageNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies what page to return. Page numbers are 0-based (the first page is page 0). (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Search](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Search)>

Task of Search>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetHubAsync(string, string, string, bool)

**Operation:** Get a Hub

```
public Task<Hub> GetHubAsync(string hubId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the hub specified by the `hub_id` parameter.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`hubId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a hub.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Hub](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Hub)>

Task of Hub>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetHubProjectsAsync(string, string, List<string>, List<string>, int, int, string, bool)

**Operation:** Get Projects

```
public Task<Projects> GetHubProjectsAsync(string hubId, string xUserId = null, List<string> filterId = null, List<string> filterExtensionType = null, int pageNumber = 0, int pageLimit = 0, string accessToken = null, bool throwOnError = true)
```

Returns a collection of active projects within the specified hub. The returned projects can be Forma, BIM 360, BIM 360 Team, Fusion Team, and A360 Personal projects.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`hubId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a hub.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`pageNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies what page to return. Page numbers are 0-based (the first page is page 0). (optional)

`pageLimit` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Projects](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Projects)>

Task of Projects>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetHubsAsync(string, List<string>, List<string>, List<string>, string, bool)

**Operation:** List Hubs

```
public Task<Hubs> GetHubsAsync(string xUserId = null, List<string> filterId = null, List<string> filterName = null, List<string> filterExtensionType = null, string accessToken = null, bool throwOnError = true)
```

Returns a collection of hubs that the user of your app can access.

The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, Forma Hubs, or BIM 360 Docs accounts. Only active hubs are returned.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterName` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `name` of the `ref` target. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Hubs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Hubs)>

Task of Hubs>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetItemAsync(string, string, string, bool, string, bool)

**Operation:** Get an Item

```
public Task<Item> GetItemAsync(string projectId, string itemId, string xUserId = null, bool includePathInProject = false, string accessToken = null, bool throwOnError = true)
```

Retrieves an item. Items represent Word documents, Fusion 360 design files, drawings, spreadsheets, etc.

The tip version for the item is included in the included array of the payload.
To retrieve multiple items, see the ListItems command.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of an item.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`includePathInProject` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specify whether to return `pathInProject` attribute in response for BIM 360 Docs projects. `pathInProject` is the relative path of the item starting from project’s root folder.
- `true`: Response will include the `pathInProject` attribute for BIM 360 Docs projects.
- `false`: (Default) Response will not include `pathInProject` attribute for BIM 360 Docs projects. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Item](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Item)>

Task of Item>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetItemParentFolderAsync(string, string, string, string, bool)

**Operation:** Get Parent of an Item

```
public Task<Folder> GetItemParentFolderAsync(string projectId, string itemId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the parent folder of the specified item.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of an item.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Folder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Folder)>

An object that represents a folder.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetItemRefsAsync(string, string, string, List<FilterTypeVersion>, List<string>, List<string>, string, bool)

**Operation:** List Related Resources for an Item

```
public Task<Refs> GetItemRefsAsync(string projectId, string itemId, string xUserId = null, List<FilterTypeVersion> filterType = null, List<string> filterId = null, List<string> filterExtensionType = null, string accessToken = null, bool throwOnError = true)
```

Returns the resources (items, folders, and versions) that have a custom relationship with the specified item. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).

Each relationship is defined by the ID of the object at the other end of the relationship, together with type, attributes, and relationships links.
Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of an item.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[FilterTypeVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterTypeVersion)>

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Refs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Refs)>

Task of Refs>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetItemRelationshipsLinksAsync(string, string, string, string, bool)

**Operation:** List Relationship Links for an Item

```
public Task<RelationshipLinks> GetItemRelationshipsLinksAsync(string projectId, string itemId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns a list of links for the specified item.

Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s `href` attribute defines the target URI to access a resource.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of an item.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RelationshipLinks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipLinks)>

Task of RelationshipLinks>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetItemRelationshipsRefsAsync(string, string, string, List<FilterTypeVersion>, List<string>, FilterRefType?, FilterDirection?, List<string>, string, bool)

**Operation:** List Custom Relationships for an Item

```
public Task<RelationshipRefs> GetItemRelationshipsRefsAsync(string projectId, string itemId, string xUserId = null, List<FilterTypeVersion> filterType = null, List<string> filterId = null, FilterRefType? filterRefType = null, FilterDirection? filterDirection = null, List<string> filterExtensionType = null, string accessToken = null, bool throwOnError = true)
```

Returns the custom relationships that are associated with the specified item. Custom relationships can be established between an item and other resources within the `data` domain service (folders, items, and versions).

Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data.
Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.
The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for an Item](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetItemRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_String_System_Boolean_) operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of an item.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[FilterTypeVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterTypeVersion)>

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterRefType` [FilterRefType](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterRefType)?

Filter by `refType`. Possible values: `derived`, `dependencies`, `auxiliary`, `xrefs`, and `includes`. (optional)

`filterDirection` [FilterDirection](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterDirection)?

Filter by the direction of the reference. Possible values: `from` and `to`. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RelationshipRefs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefs)>

An object that represents a relationship with folders, items, or resources.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetItemTipAsync(string, string, string, string, bool)

**Operation:** Get Tip Version of an Item

```
public Task<ItemTip> GetItemTipAsync(string projectId, string itemId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the latest version of the specified item. A project can contain multiple versions of a resource item. The latest version is referred to as the tip version, which is returned by this operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of an item.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ItemTip](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ItemTip)>

Task of ItemTip>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetItemVersionsAsync(string, string, string, List<string>, List<string>, List<int>, int, int, string, bool)

**Operation:** List all Versions of an Item

```
public Task<Versions> GetItemVersionsAsync(string projectId, string itemId, string xUserId = null, List<string> filterId = null, List<string> filterExtensionType = null, List<int> filterVersionNumber = null, int pageNumber = 0, int pageLimit = 0, string accessToken = null, bool throwOnError = true)
```

Lists all versions of the specified item. A project can contain multiple versions of a resource item.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of an item.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`filterVersionNumber` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

Filter by versionNumber. (optional)

`pageNumber` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies what page to return. Page numbers are 0-based (the first page is page 0). (optional)

`pageLimit` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Versions](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Versions)>

Task of Versions>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetProjectAsync(string, string, string, string, bool)

**Operation:** Get a Project

```
public Task<Project> GetProjectAsync(string hubId, string projectId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the specified project from within the specified hub.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`hubId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a hub.

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Project](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Project)>

Task of Project>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetProjectHubAsync(string, string, string, string, bool)

**Operation:** Get Hub for Project

```
public Task<Hub> GetProjectHubAsync(string hubId, string projectId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the hub that contains the project specified by the `project_id` parameter.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`hubId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a hub.

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Hub](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Hub)>

Task of Hub>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetProjectTopFoldersAsync(string, string, string, bool, bool, string, bool)

**Operation:** List Top-level Project Folders

```
public Task<TopFolders> GetProjectTopFoldersAsync(string hubId, string projectId, string xUserId = null, bool excludeDeleted = false, bool projectFilesOnly = false, string accessToken = null, bool throwOnError = true)
```

Returns the details of the highest level folders within a project that the user calling this operation has access to. The user must have at least read access to the folders.

If the user is a Project Admin, it returns all top-level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.

Users with access permission to a folder has access permission to all its subfolders.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`hubId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a hub.

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`excludeDeleted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided.
- `true`: Response excludes deleted folders.
- `false`: (Default) Response will not exclude deleted folders. (optional)

`projectFilesOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided.
- `true`: Response will be restricted to folder and subfolders containing project files.
- `false`: (Default) Response will include all available folders. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[TopFolders](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/TopFolders)>

Task of TopFolders>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetVersionAsync(string, string, string, string, bool)

**Operation:** Get a Version

```
public Task<ModelVersion> GetVersionAsync(string projectId, string versionId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the specified version of an item.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL encoded unique identifier of a version.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ModelVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModelVersion)>

Task of ModelVersion>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetVersionDownloadFormatsAsync(string, string, string, string, bool)

**Operation:** List Supported Download Formats

```
public Task<DownloadFormats> GetVersionDownloadFormatsAsync(string projectId, string versionId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns a list of file formats the specified version of an item can be downloaded as.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL encoded unique identifier of a version.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[DownloadFormats](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/DownloadFormats)>

An object that represents a download.Formats>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetVersionDownloadsAsync(string, string, string, List<string>, string, bool)

**Operation:** List Available Download Formats

```
public Task<Downloads> GetVersionDownloadsAsync(string projectId, string versionId, string xUserId = null, List<string> filterFormatFileType = null, string accessToken = null, bool throwOnError = true)
```

Returns the list of file formats of the specified version of an item currently available for download.

**Note:** This operation is not fully implemented as yet. It currently returns an empty data object.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL encoded unique identifier of a version.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterFormatFileType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the file type of the download object. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Downloads](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Downloads)>

An object that represents a download.s>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetVersionItemAsync(string, string, string, string, bool)

**Operation:** Get Item by Version

```
public Task<Item> GetVersionItemAsync(string projectId, string versionId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns the item corresponding to the specified version.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL encoded unique identifier of a version.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Item](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Item)>

Task of Item>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetVersionRefsAsync(string, string, string, List<FilterTypeVersion>, List<string>, List<string>, string, bool)

**Operation:** List Related Resources for a Version

```
public Task<Refs> GetVersionRefsAsync(string projectId, string versionId, string xUserId = null, List<FilterTypeVersion> filterType = null, List<string> filterId = null, List<string> filterExtensionType = null, string accessToken = null, bool throwOnError = true)
```

Returns the resources (items, folders, and versions) that have a custom relationship with the specified version.

Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
- Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links.
- Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.
- The response body will have an included array that contains the ref resources that are involved in the relationship, which is essentially the response to the [List Custom Relationships for a Version](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionRelationshipsRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__Autodesk_DataManagement_Model_FilterRefType_Autodesk_DataManagement_Model_FilterDirection_System_Collections_Generic_List_System_String__System_String_System_Boolean_) operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL encoded unique identifier of a version.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[FilterTypeVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterTypeVersion)>

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Refs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Refs)>

Task of Refs>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetVersionRelationshipsLinksAsync(string, string, string, string, bool)

**Operation:** List Links for a Version

```
public Task<RelationshipLinks> GetVersionRelationshipsLinksAsync(string projectId, string versionId, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Returns a collection of links for the specified version of an item. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access the resource.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL encoded unique identifier of a version.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RelationshipLinks](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipLinks)>

Task of RelationshipLinks>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## GetVersionRelationshipsRefsAsync(string, string, string, List<FilterTypeVersion>, List<string>, FilterRefType?, FilterDirection?, List<string>, string, bool)

**Operation:** List Custom Relationships for a Version

```
public Task<RelationshipRefs> GetVersionRelationshipsRefsAsync(string projectId, string versionId, string xUserId = null, List<FilterTypeVersion> filterType = null, List<string> filterId = null, FilterRefType? filterRefType = null, FilterDirection? filterDirection = null, List<string> filterExtensionType = null, string accessToken = null, bool throwOnError = true)
```

Returns the custom relationships for the specified version.

Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
- Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data.
- Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.
- The response body will have an included array that contains the resources in the relationship, which is essentially the response to the [List Related Resources operation](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetVersionRefsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterTypeVersion__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_String_System_Boolean_).
- To get custom relationships for multiple versions, see the ListRefs command.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL encoded unique identifier of a version.

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`filterType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[FilterTypeVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterTypeVersion)>

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`. (optional)

`filterId` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the `id` of the `ref` target. (optional)

`filterRefType` [FilterRefType](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterRefType)?

Filter by `refType`. Possible values: `derived`, `dependencies`, `auxiliary`, `xrefs`, and `includes`. (optional)

`filterDirection` [FilterDirection](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/FilterDirection)?

Filter by the direction of the reference. Possible values: `from` and `to`. (optional)

`filterExtensionType` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

Filter by the extension type. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[RelationshipRefs](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/RelationshipRefs)>

An object that represents a relationship with folders, items, or resources.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## PatchFolderAsync(string, string, ModifyFolderPayload, string, string, bool)

**Operation:** Modify a Folder

```
public Task<Folder> PatchFolderAsync(string projectId, string folderId, ModifyFolderPayload modifyFolderPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Renames, moves, hides, or unhides a folder.

For BIM 360 Docs and Forma Data Management folders, marking a folder as hidden effectively deletes it. You can restore it by changing its hidden attribute. You can also move these folders by changing their parent folder.

You cannot permanently delete BIM 360 Docs or Forma Data Management folders. Deleted folders are tagged as hidden and are removed from the product UI and from regular Data Management API responses. You can use the hidden filter (`filter[hidden]=true`) o retrieve hidden folders with the [List Folder Contents](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient#Autodesk_DataManagement_DataManagementClient_GetFolderContentsAsync_System_String_System_String_System_String_System_Collections_Generic_List_Autodesk_DataManagement_Model_FilterType__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_Collections_Generic_List_System_String__System_Int32_System_Int32_System_Boolean_System_String_System_Boolean_) operation.

Before using the Data Management API to access BIM 360 Docs folders, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).

Access to Forma Data Management folders requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`folderId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a folder.

`modifyFolderPayload` [ModifyFolderPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyFolderPayload)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Folder](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Folder)>

An object that represents a folder.>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## PatchItemAsync(string, string, ModifyItemPayload, string, string, bool)

**Operation:** Update an Item

```
public Task<Item> PatchItemAsync(string projectId, string itemId, ModifyItemPayload modifyItemPayload, string xUserId = null, string accessToken = null, bool throwOnError = true)
```

Updates the `displayName` of the specified item. Note that updating the `displayName` of an item is not supported for BIM 360 Docs or Forma items.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`itemId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of an item.

`modifyItemPayload` [ModifyItemPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyItemPayload)

`xUserId` [string](https://learn.microsoft.com/dotnet/api/system.string)

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Item](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/Item)>

Task of Item>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

## PatchVersionAsync(string, string, ModifyVersionPayload, string, bool)

**Operation:** Update a Version

```
public Task<ModelVersion> PatchVersionAsync(string projectId, string versionId, ModifyVersionPayload modifyVersionPayload, string accessToken = null, bool throwOnError = true)
```

Updates the properties of the specified version of an item. Currently, you can only change the name of the version.

**Note:** This operation is not supported for BIM 360 and Forma. If you want to rename a version, create a new version with a new name.

### Parameters

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

`versionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL encoded unique identifier of a version.

`modifyVersionPayload` [ModifyVersionPayload](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModifyVersionPayload)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ModelVersion](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement.Model/ModelVersion)>

Task of ModelVersion>

### Exceptions

[DataManagementApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementApiException)

Thrown when the SDK fails to make an API call.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-dm/Autodesk.DataManagement/DataManagementClient
