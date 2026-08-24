---
title: "DataManagementClient"
url_path: reference/typescript-sdk-dm/classes/ts-DataManagementClient
product: "Data Management API"
surface: "data-management-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk-dm"
---
# Class: DataManagementClient

Defined in: [custom-code/dataManagementClient.ts:10](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L10)

## Remarks

Represents a collection of functions to interact with the DataManagement API endpoints.

## Extends
- `BaseClient`

## Constructors

### Constructor

**new DataManagementClient**(`optionalArgs?`): `DataManagementClient`

Defined in: [custom-code/dataManagementClient.ts:18](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L18)

### optionalArgs?

#### authenticationProvider?

`IAuthenticationProvider`

#### sdkManager?

`SdkManager`

#### Returns

`DataManagementClient`

#### Overrides

`BaseClient.constructor`

## Accessors

### authenticationProvider

#### Get Signature

**get** **authenticationProvider**(): `IAuthenticationProvider`

Defined in: node_modules/@aps_sdk/autodesk-sdkmanager/dist/src/baseClient.d.ts:4

#### Returns

`IAuthenticationProvider`

#### Set Signature

**set** **authenticationProvider**(`value`): `void`

Defined in: node_modules/@aps_sdk/autodesk-sdkmanager/dist/src/baseClient.d.ts:5

#### Parameters

#### value

`IAuthenticationProvider`

#### Returns

`void`

#### Inherited from

`BaseClient.authenticationProvider`

# Methods

## createDownload()

**Operation**: Create Download

**createDownload**(`projectId`, `downloadPayload`, `optionalArgs?`): `Promise`<[`CreatedDownload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CreatedDownload)>

Defined in: [custom-code/dataManagementClient.ts:1023](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1023)

Kicks off a job to generate the specified download format of the version. Once the job completes, the specified format becomes available for download.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### downloadPayload

[`DownloadPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-DownloadPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`CreatedDownload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CreatedDownload)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## createFolder()

**Operation**: Create a Folder

**createFolder**(`projectId`, `folderPayload`, `optionalArgs?`): `Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

Defined in: [custom-code/dataManagementClient.ts:234](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L234)

Creates a new folder in the specified project. Use the `parent` attribute in the request body to specify where in the hierarchy the new folder should be located. Folders can be nested up to 25 levels deep.

Use the `Modify a Folder </en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#patchfolder>`_ operation to delete and restore folders.

Before using the Data Management API to access BIM 360 Docs folders, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).

Access to Forma Data Management folders requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### folderPayload

[`FolderPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## createFolderRelationshipsRef()

**Operation**: Create a Custom Relationship for a Folder

**createFolderRelationshipsRef**(`folderId`, `projectId`, `relationshipRefsPayload`, `optionalArgs?`): `Promise`<`Response`>

Defined in: [custom-code/dataManagementClient.ts:263](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L263)

Creates a custom relationship between a folder and another resource within the data domain service (folder, item, or version).

### Parameters

#### folderId

`string`

The unique identifier of a folder.

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### relationshipRefsPayload

[`RelationshipRefsPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipRefsPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<`Response`>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## createItem()

**Operation**: Create an Item

**createItem**(`projectId`, `itemPayload`, `optionalArgs?`): `Promise`<[`CreatedItem`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CreatedItem)>

Defined in: [custom-code/dataManagementClient.ts:686](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L686)

Creates the first version of a file (item). To create additional versions of an item, use POST versions.

Before you create the first version of an item, you must create a placeholder for the file, and upload the file to the placeholder. For more details about the workflow, see the tutorial on uploading a file.

This operation also allows you to create a new item by copying a specific version of an existing item to another folder. The copied version becomes the first version of the new item in the target folder.

**Note:** You cannot copy versions of items across different projects and accounts.

Use the [Create Version](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient/#createversion) operation with the `copyFrom` parameter if you want to create a new version of an item by copying a specific version of another item.

Before using the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).

Access to Forma Data Management files requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemPayload

[`ItemPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### copyFrom?

`string`

The Version ID (URN) of the version to copy from.

**Note**: This parameter is relevant only for copying files to BIM 360 Docs.

For information on how to find the URN, see the initial steps of the [Download a File](https://aps.autodesk.com/en/docs/data/v2/tutorials/download-file/) tutorial.

You can only copy files to the Plans folder or to subfolders of the Plans folder with an `item:autodesk.bim360:Document` item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an `item:autodesk.bim360:File` item extension type.

To verify an item’s extension type, use the [Get an Item](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient/#getitem) operation, and check the `attributes.extension.type` attribute.

Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.

Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the `attributes.extension.data.processState` attribute.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, the app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act on behalf of only the user specified.

Note that for a three-legged OAuth flow or for a two-legged OAuth flow with user impersonation (`x-user-id`), the users of your app must have permission to upload files to the specified parent folder (`data.attributes.relationships.parent.data.id`).

For copying files, users of your app must have permission to view the source folder.

For information about managing and verifying folder permissions, see the folder permissions documentation for [BIM 360 Docs](http://help.autodesk.com/view/BIM360D/ENU/?guid=GUID-2643FEEF-B48A-45A1-B354-797DAD628C37) and [Forma Data Management](https://help.autodesk.com/view/DOCS/ENG/?guid=Folder_Permissions).

#### Returns

`Promise`<[`CreatedItem`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CreatedItem)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## createItemRelationshipsRef()

**Operation**: Create a Custom Relationship for an Item

**createItemRelationshipsRef**(`projectId`, `itemId`, `relationshipRefsPayload`, `optionalArgs?`): `Promise`<`ApiResponse`>

Defined in: [custom-code/dataManagementClient.ts:715](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L715)

Creates a custom relationship between an item and another resource within the data domain service (folder, item, or version).

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemId

`string`

The unique identifier of an item.

#### relationshipRefsPayload

[`RelationshipRefsPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipRefsPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<`ApiResponse`>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## createStorage()

**Operation**: Create a Storage Location in OSS

**createStorage**(`projectId`, `storagePayload`, `optionalArgs?`): `Promise`<`Storage`>

Defined in: [custom-code/dataManagementClient.ts:1053](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1053)

Creates a placeholder for an item or a version of an item in the OSS. Later, you can upload the binary content for the item or version to this storage location.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### storagePayload

[`StoragePayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-StoragePayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<`Storage`>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## createVersion()

**Operation**: Create a Version

**createVersion**(`projectId`, `versionPayload`, `optionalArgs?`): `Promise`<[`CreatedVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CreatedVersion)>

Defined in: [custom-code/dataManagementClient.ts:1313](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1313)

Creates a new versions of an existing item.

Before creating a new version you must create a storage location for the version in OSS, and upload the file to that location. For more details about the workflow, see the tutorial on uploading a file.

This operation also allows you to create a new version of an item by copying a specific version of an existing item from another folder within the project. The new version becomes the tip version of the item.

Use the [Create an Item](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient/#createitem) operation to copy a specific version of an existing item as a new item in another folder.

This operation can also be used to delete files on BIM360 Document Management. For more information, please refer to the delete and restore a file tutorial.

Before using the Data Management API to access BIM 360 Docs files, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).

Access to Forma Data Management files requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionPayload

[`VersionPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-VersionPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### copyFrom?

`string`

The Version ID (URN) of the version to copy from.

**Note**: This parameter is relevant only for copying files to BIM 360 Docs.

For information on how to find the URN, see the initial steps of the [Download a File](https://aps.autodesk.com/en/docs/data/v2/tutorials/download-file/) tutorial.

You can only copy files to the Plans folder or to subfolders of the Plans folder with an `item:autodesk.bim360:Document` item extension type. You can only copy files to the Project Files folder or to subfolders of the Project Files folder with an `item:autodesk.bim360:File` item extension type.

To verify an item’s extension type, use the [Get an Item](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient/#getitem) operation, and check the `attributes.extension.type` attribute.

Note that if you copy a file to the Plans folder or to a subfolder of the Plans folder, the copied file inherits the permissions of the source file. For example, if users of your app did not have permission to download files in the source folder, but does have permission to download files in the target folder, they will not be able to download the copied file.

Note that you cannot copy a file while it is being uploaded, updated, or copied. To verify the current process state of a file, call the [Get an Item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) operation , and check the `attributes.extension.data.processState` attribute.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`CreatedVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CreatedVersion)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## createVersionRelationshipsRef()

**Operation**: Create a Custom Relationship for a Version

**createVersionRelationshipsRef**(`projectId`, `versionId`, `relationshipRefsPayload`, `optionalArgs?`): `Promise`<[`Version`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Version)>

Defined in: [custom-code/dataManagementClient.ts:1342](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1342)

Creates a custom relationship between a version of an item and another resource within the data domain service (folder, item, or version).

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionId

`string`

The URL encoded unique identifier of a version.

#### relationshipRefsPayload

[`RelationshipRefsPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipRefsPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Version`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Version)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## executeCheckPermissionCommand()

**Operation**: > **executeCheckPermissionCommand**(`projectId`, `checkPermissionPayload`, `optionalArgs?`): `Promise`<[`CheckPermission`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CheckPermission)>

Defined in: [custom-code/dataManagementClient.ts:52](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L52)

Checks if a user has permission to perform specified actions on specified resources.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### checkPermissionPayload

[`CheckPermissionPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CheckPermissionPayload)

The payload for the check permission command.

### optionalArgs?

#### accessToken?

`string`

bearer access token

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`CheckPermission`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-CheckPermission)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## executeGetPublishModelJobCommand()

**Operation**: > **executeGetPublishModelJobCommand**(`projectId`, `PublishModelJobPayload`, `optionalArgs?`): `Promise`<[`PublishModel`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModel)>

Defined in: [custom-code/dataManagementClient.ts:138](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L138)

Verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### PublishModelJobPayload

[`PublishModelJobPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModelJobPayload)

The payload for the get publish model job command.

### optionalArgs?

#### accessToken?

`string`

bearer access token

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`PublishModel`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModel)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## executeListItemsCommand()

**Operation**: > **executeListItemsCommand**(`projectId`, `listItemsPayload`, `optionalArgs?`): `Promise`<[`ListItems`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListItems)>

Defined in: [custom-code/dataManagementClient.ts:81](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L81)

Retrieves metadata for up to 50 specified items.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### listItemsPayload

[`ListItemsPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListItemsPayload)

The payload for the list items command.

### optionalArgs?

#### accessToken?

`string`

bearer access token

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`ListItems`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListItems)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## executeListRefsCommand()

**Operation**: > **executeListRefsCommand**(`projectId`, `listRefsPayload`, `optionalArgs?`): `Promise`<[`ListRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListRefs)>

Defined in: [custom-code/dataManagementClient.ts:110](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L110)

Retrieves the custom relationships between specified versions of items and other resources

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### listRefsPayload

[`ListRefsPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListRefsPayload)

### optionalArgs?

#### accessToken?

`string`

bearer access token

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`ListRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ListRefs)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## executePublishModelCommand()

**Operation**: > **executePublishModelCommand**(`projectId`, `publishModelPayload`, `optionalArgs?`): `Promise`<[`PublishModel`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModel)>

Defined in: [custom-code/dataManagementClient.ts:167](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L167)

Publishes the latest version of a Collaboration for Revit (C4R) model to BIM 360 Docs.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### publishModelPayload

[`PublishModelPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModelPayload)

The payload for the publish model command.

### optionalArgs?

#### accessToken?

`string`

bearer access token

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`PublishModel`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishModel)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## executePublishWithoutLinksCommand()

**Operation**: > **executePublishWithoutLinksCommand**(`projectId`, `publishWithoutLinksPayload`, `optionalArgs?`): `Promise`<[`PublishWithoutLinks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishWithoutLinks)>

Defined in: [custom-code/dataManagementClient.ts:194](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L194)

Publishes the latest version of a Collaboration for Revit (C4R) model without the links it contains to BIM 360 Docs.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### publishWithoutLinksPayload

[`PublishWithoutLinksPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishWithoutLinksPayload)

### optionalArgs?

#### accessToken?

`string`

bearer access token

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`PublishWithoutLinks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-PublishWithoutLinks)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getDownload()

**Operation**: Get Download Details

**getDownload**(`projectId`, `downloadId`, `optionalArgs?`): `Promise`<[`Download`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Download)>

Defined in: [custom-code/dataManagementClient.ts:1082](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1082)

Returns the details of a downloadable format of a version of an item.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### downloadId

`string`

The Job ID of the job used to generate the download.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Download`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Download)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getDownloadJob()

**Operation**: Check Download Creation Progress

**getDownloadJob**(`projectId`, `jobId`, `optionalArgs?`): `Promise`<[`Job`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Job)>

Defined in: [custom-code/dataManagementClient.ts:1113](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1113)

Checks the status of a job that generates a downloadable format of a version of an item.

**Note**: If the job has finished, this operation returns a HTTP status 303, with the `location` return parameter set to the URI that returns the details of the download.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### jobId

`string`

The unique identifier of a job.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Job`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Job)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getFolder()

**Operation**: Get a Folder

**getFolder**(`projectId`, `folderId`, `optionalArgs?`): `Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

Defined in: [custom-code/dataManagementClient.ts:294](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L294)

Returns the folder specified by the `folder_id` parameter from within the project identified by the `project_id` parameter. All folders and subfolders within a project (including the root folder) have a unique ID.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### folderId

`string`

The unique identifier of a folder.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### ifModifiedSince?

`string`

Specify a date in the `YYYY-MM-DDThh:mm:ss.sz` format. If the resource has not been modified since the specified date/time, the response will return a HTTP status of 304 without any response body; the `Last-Modified` response parameter will contain the date of last modification.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getFolderContents()

**Operation**: List Folder Contents

**getFolderContents**(`projectId`, `folderId`, `optionalArgs?`): `Promise`<[`FolderContents`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderContents)>

Defined in: [custom-code/dataManagementClient.ts:339](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L339)

Returns a list of items and folders within the specified folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc.

The resources contained in the `included` array of the response are their tip versions.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### folderId

`string`

The unique identifier of a folder.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### filterLastModifiedTimeRollup?

`string`[]

Filter by the `lastModifiedTimeRollup` attribute. Supported values are date-time string in the form `YYYY-MM-DDTHH:MM:SS.000000Z` or `YYYY-MM-DDTHH:MM:SS` based on RFC3339.

#### filterType?

[`FilterType`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterType)[]

Filter by the type of the objects in the folder. Supported values are `folders` and `items`.

#### includeHidden?

`boolean`

`true`: Response will contain items and folders that were deleted from BIM 360 Docs projects.

`false`: (Default): Response will not contain items and folders that were deleted from BIM 360 Docs projects.

To return only items and folders that were deleted from BIM 360 Docs projects, see the documentation on [Filtering](https://aps.autodesk.com/en/docs/data/v2/overview/filtering/).

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### pageLimit?

`number`

Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.

#### pageNumber?

`number`

Specifies what page to return. Page numbers are 0-based (the first page is page 0).

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`FolderContents`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderContents)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getFolderParent()

**Operation**: Get Parent of a Folder

**getFolderParent**(`projectId`, `folderId`, `optionalArgs?`): `Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

Defined in: [custom-code/dataManagementClient.ts:369](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L369)

Returns the parent folder of the specified folder. In a project, folders are organized hierarchically, and all folders except the root have a parent.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### folderId

`string`

The unique identifier of a folder.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getFolderRefs()

**Operation**: List Related Resources for a Folder

**getFolderRefs**(`projectId`, `folderId`, `optionalArgs?`): `Promise`<[`FolderRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderRefs)>

Defined in: [custom-code/dataManagementClient.ts:406](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L406)

Returns the resources (items, folders, and versions) that have a custom relationship with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).

Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links.
Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### folderId

`string`

The unique identifier of a folder.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### filterType?

[`FilterTypeVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterTypeVersion)[]

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`FolderRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-FolderRefs)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getFolderRelationshipsLinks()

**Operation**: List Relationship Links for a Folder

**getFolderRelationshipsLinks**(`projectId`, `folderId`, `optionalArgs?`): `Promise`<[`RelationshipLinks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipLinks)>

Defined in: [custom-code/dataManagementClient.ts:438](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L438)

Returns a list of links for the specified folder.

Custom relationships can be established between a folder and other external resources residing outside the data domain service. A link’s `href` attribute defines the target URI to access a resource.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### folderId

`string`

The unique identifier of a folder.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`RelationshipLinks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipLinks)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getFolderRelationshipsRefs()

**Operation**: List Custom Relationships for a Folder

**getFolderRelationshipsRefs**(`folderId`, `projectId`, `optionalArgs?`): `Promise`<[`RelationshipRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipRefs)>

Defined in: [custom-code/dataManagementClient.ts:478](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L478)

Returns the custom relationships associated with the specified folder. Custom relationships can be established between a folder and other resources within the data domain service (folders, items, and versions).

Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data.
Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.
The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for a Folder](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfolderrefs) operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### folderId

`string`

The unique identifier of a folder.

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterDirection?

[`FilterDirection`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterDirection)

Filter by the direction of the reference. Possible values: `from` and `to`.

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### filterRefType?

[`FilterRefType`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterRefType)

Filter by `refType`. Possible values: `derived`, `dependencies`, `auxiliary`, `xrefs`, and `includes`.

#### filterType?

[`FilterTypeVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterTypeVersion)[]

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`RelationshipRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipRefs)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getFolderSearch()

**Operation**: List Folder and Subfolder Contents

**getFolderSearch**(`projectId`, `folderId`, `optionalArgs?`): `Promise`<[`Search`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Search)>

Defined in: [custom-code/dataManagementClient.ts:520](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L520)

Searches the specified folder and its subfolders and returns a list of the latest versions of the items you can access.

Use the `filter` query string parameter to narrow down the list as appropriate. You can filter by the following properties of the version payload:
- `type` property,
- `id` property,
- any of the attributes object properties.

For example, you can filter by `createTime` and `mimeType`. It returns tip versions (latest versions) of properties where the filter conditions are satisfied. To verify the properties of the attributes object for a specific version, use the [Get a Version](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getversion) operation.

To list the immediate contents of the folder without parsing subfolders, use the [List Folder Contents](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfoldercontents) operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### folderId

`string`

The unique identifier of a folder.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterFieldName?

`string`

#### filterValue?

`string`[]

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### pageNumber?

`number`

Specifies what page to return. Page numbers are 0-based (the first page is page 0).

#### Returns

`Promise`<[`Search`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Search)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getHub()

**Operation**: Get a Hub

**getHub**(`hubId`, `optionalArgs?`): `Promise`<[`Hub`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Hub)>

Defined in: [custom-code/dataManagementClient.ts:589](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L589)

Returns the hub specified by the `hub_id` parameter.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### hubId

`string`

The unique identifier of a hub.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Hub`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Hub)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getHubProjects()

**Operation**: Get Projects

**getHubProjects**(`hubId`, `optionalArgs?`): `Promise`<[`Projects`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Projects)>

Defined in: [custom-code/dataManagementClient.ts:1146](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1146)

Returns a collection of active projects within the specified hub. The returned projects can be Forma, BIM 360, BIM 360 Team, Fusion Team, and A360 Personal projects.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### hubId

`string`

The unique identifier of a hub.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### pageLimit?

`number`

Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.

#### pageNumber?

`number`

Specifies what page to return. Page numbers are 0-based (the first page is page 0).

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Projects`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Projects)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getHubs()

**Operation**: List Hubs

**getHubs**(`optionalArgs?`): `Promise`<[`Hubs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Hubs)>

Defined in: [custom-code/dataManagementClient.ts:620](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L620)

Returns a collection of hubs that the user of your app can access.

The returned hubs can be BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, Forma Hubs, or BIM 360 Docs accounts. Only active hubs are returned.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### filterName?

`string`[]

Filter by the `name` of the `ref` target.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Hubs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Hubs)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getItem()

**Operation**: Get an Item

**getItem**(`projectId`, `itemId`, `optionalArgs?`): `Promise`<[`Item`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Item)>

Defined in: [custom-code/dataManagementClient.ts:753](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L753)

Retrieves an item. Items represent Word documents, Fusion 360 design files, drawings, spreadsheets, etc.

The tip version for the item is included in the included array of the payload.
To retrieve multiple items, see the ListItems command.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemId

`string`

The unique identifier of an item.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### includePathInProject?

`boolean`

Specify whether to return `pathInProject` attribute in response for BIM 360 Docs projects. `pathInProject` is the relative path of the item starting from project’s root folder.
- `true`: Response will include the `pathInProject` attribute for BIM 360 Docs projects.
- `false`: (Default) Response will not include `pathInProject` attribute for BIM 360 Docs projects.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Item`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Item)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getItemParentFolder()

**Operation**: Get Parent of an Item

**getItemParentFolder**(`projectId`, `itemId`, `optionalArgs?`): `Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

Defined in: [custom-code/dataManagementClient.ts:783](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L783)

Returns the parent folder of the specified item.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemId

`string`

The unique identifier of an item.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getItemRefs()

**Operation**: List Related Resources for an Item

**getItemRefs**(`projectId`, `itemId`, `optionalArgs?`): `Promise`<[`Refs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Refs)>

Defined in: [custom-code/dataManagementClient.ts:822](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L822)

Returns the resources (items, folders, and versions) that have a custom relationship with the specified item. Custom relationships can be established between an item and other resources within the data domain service (folders, items, and versions).

Each relationship is defined by the ID of the object at the other end of the relationship, together with type, attributes, and relationships links.
Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemId

`string`

The unique identifier of an item.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### filterType?

[`FilterTypeVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterTypeVersion)[]

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Refs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Refs)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getItemRelationshipsLinks()

**Operation**: List Relationship Links for an Item

**getItemRelationshipsLinks**(`projectId`, `itemId`, `optionalArgs?`): `Promise`<[`RelationshipLinks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipLinks)>

Defined in: [custom-code/dataManagementClient.ts:854](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L854)

Returns a list of links for the specified item.

Custom relationships can be established between an item and other external resources residing outside the data domain service. A link’s `href` attribute defines the target URI to access a resource.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemId

`string`

The unique identifier of an item.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`RelationshipLinks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipLinks)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getItemRelationshipsRefs()

**Operation**: List Custom Relationships for an Item

**getItemRelationshipsRefs**(`projectId`, `itemId`, `optionalArgs?`): `Promise`<[`RelationshipRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipRefs)>

Defined in: [custom-code/dataManagementClient.ts:894](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L894)

Returns the custom relationships that are associated with the specified item. Custom relationships can be established between an item and other resources within the `data` domain service (folders, items, and versions).

Each relationship is defined by the ID of the object at the other end of the relationship, together with type, specific reference meta including extension data.
Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.
The response body will have an included array that contains the resources in the relationship, which is essentially what is returned by the [List Related Resources for an Item](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getitemrefs) operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemId

`string`

The unique identifier of an item.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterDirection?

[`FilterDirection`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterDirection)

Filter by the direction of the reference. Possible values: `from` and `to`.

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### filterRefType?

[`FilterRefType`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterRefType)

Filter by `refType`. Possible values: `derived`, `dependencies`, `auxiliary`, `xrefs`, and `includes`.

#### filterType?

[`FilterTypeVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterTypeVersion)[]

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`RelationshipRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipRefs)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getItemTip()

**Operation**: Get Tip Version of an Item

**getItemTip**(`projectId`, `itemId`, `optionalArgs?`): `Promise`<[`ItemTip`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemTip)>

Defined in: [custom-code/dataManagementClient.ts:924](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L924)

Returns the latest version of the specified item. A project can contain multiple versions of a resource item. The latest version is referred to as the tip version, which is returned by this operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemId

`string`

The unique identifier of an item.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`ItemTip`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ItemTip)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getItemVersions()

**Operation**: List all Versions of an Item

**getItemVersions**(`projectId`, `itemId`, `optionalArgs?`): `Promise`<[`Versions`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Versions)>

Defined in: [custom-code/dataManagementClient.ts:960](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L960)

Lists all versions of the specified item. A project can contain multiple versions of a resource item.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemId

`string`

The unique identifier of an item.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### filterVersionNumber?

`number`[]

Filter by versionNumber.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### pageLimit?

`number`

Specifies the maximum number of elements to return in the page. The default value is 200. The min value is 1. The max value is 200.

#### pageNumber?

`number`

Specifies what page to return. Page numbers are 0-based (the first page is page 0).

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Versions`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Versions)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getProject()

**Operation**: Get a Project

**getProject**(`hubId`, `projectId`, `optionalArgs?`): `Promise`<[`Project`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Project)>

Defined in: [custom-code/dataManagementClient.ts:1180](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1180)

Returns the specified project from within the specified hub.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### hubId

`string`

The unique identifier of a hub.

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Project`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Project)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getProjectHub()

**Operation**: Get Hub for Project

**getProjectHub**(`hubId`, `projectId`, `optionalArgs?`): `Promise`<[`Hub`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Hub)>

Defined in: [custom-code/dataManagementClient.ts:1210](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1210)

Returns the hub that contains the project specified by the `project_id` parameter.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### hubId

`string`

The unique identifier of a hub.

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Hub`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Hub)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getProjectTopFolders()

**Operation**: List Top-level Project Folders

**getProjectTopFolders**(`hubId`, `projectId`, `optionalArgs?`): `Promise`<[`TopFolders`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-TopFolders)>

Defined in: [custom-code/dataManagementClient.ts:1254](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1254)

Returns the details of the highest level folders within a project that the user calling this operation has access to. The user must have at least read access to the folders.

If the user is a Project Admin, it returns all top-level folders in the project. Otherwise, it returns all the highest level folders in the folder hierarchy the user has access to.

Users with access permission to a folder has access permission to all its subfolders.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### hubId

`string`

The unique identifier of a hub.

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### excludeDeleted?

`boolean`

Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided.
- `true`: Response excludes deleted folders.
- `false`: (Default) Response will not exclude deleted folders.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### projectFilesOnly?

`boolean`

Specifies whether deleted folders are excluded from the response for BIM 360 Docs and Forma Data Management projects, when user context is provided.
- `true`: Response will be restricted to folder and subfolders containing project files.
- `false`: (Default) Response will include all available folders.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`TopFolders`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-TopFolders)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getVersion()

**Operation**: Get a Version

**getVersion**(`projectId`, `versionId`, `optionalArgs?`): `Promise`<[`Version`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Version)>

Defined in: [custom-code/dataManagementClient.ts:1372](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1372)

Returns the specified version of an item.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionId

`string`

The URL encoded unique identifier of a version.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Version`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Version)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getVersionDownloadFormats()

**Operation**: List Supported Download Formats

**getVersionDownloadFormats**(`projectId`, `versionId`, `optionalArgs?`): `Promise`<[`DownloadFormats`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-DownloadFormats)>

Defined in: [custom-code/dataManagementClient.ts:1402](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1402)

Returns a list of file formats the specified version of an item can be downloaded as.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionId

`string`

The URL encoded unique identifier of a version.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`DownloadFormats`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-DownloadFormats)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getVersionDownloads()

**Operation**: List Available Download Formats

**getVersionDownloads**(`projectId`, `versionId`, `optionalArgs?`): `Promise`<[`Downloads`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Downloads)>

Defined in: [custom-code/dataManagementClient.ts:1433](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1433)

Returns the list of file formats of the specified version of an item currently available for download.

**Note:** This operation is not fully implemented as yet. It currently returns an empty data object.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionId

`string`

The URL encoded unique identifier of a version.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterFormatFileType?

`string`[]

Filter by the file type of the download object.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Downloads`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Downloads)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getVersionItem()

**Operation**: Get Item by Version

**getVersionItem**(`projectId`, `versionId`, `optionalArgs?`): `Promise`<[`Item`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Item)>

Defined in: [custom-code/dataManagementClient.ts:1463](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1463)

Returns the item corresponding to the specified version.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionId

`string`

The URL encoded unique identifier of a version.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Item`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Item)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getVersionRefs()

**Operation**: List Related Resources for a Version

**getVersionRefs**(`projectId`, `versionId`, `optionalArgs?`): `Promise`<[`Refs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Refs)>

Defined in: [custom-code/dataManagementClient.ts:1503](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1503)

Returns the resources (items, folders, and versions) that have a custom relationship with the specified version.

Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
- Each relationship is defined by the id of the object at the other end of the relationship, together with type, attributes, and relationships links.
- Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.
- The response body will have an included array that contains the ref resources that are involved in the relationship, which is essentially the response to the [List Custom Relationships for a Version](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getversionrelationshipsrefs) operation.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionId

`string`

The URL encoded unique identifier of a version.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### filterType?

[`FilterTypeVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterTypeVersion)[]

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Refs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Refs)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getVersionRelationshipsLinks()

**Operation**: List Links for a Version

**getVersionRelationshipsLinks**(`projectId`, `versionId`, `optionalArgs?`): `Promise`<[`RelationshipLinks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipLinks)>

Defined in: [custom-code/dataManagementClient.ts:1533](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1533)

Returns a collection of links for the specified version of an item. Custom relationships can be established between a version of an item and other external resources residing outside the data domain service. A link’s href defines the target URI to access the resource.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionId

`string`

The URL encoded unique identifier of a version.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`RelationshipLinks`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipLinks)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## getVersionRelationshipsRefs()

**Operation**: List Custom Relationships for a Version

**getVersionRelationshipsRefs**(`projectId`, `versionId`, `optionalArgs?`): `Promise`<[`RelationshipRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipRefs)>

Defined in: [custom-code/dataManagementClient.ts:1576](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1576)

Returns the custom relationships for the specified version.

Custom relationships can be established between a version of an item and other resources within the data domain service (folders, items, and versions).
- Each relationship is defined by the id of the object at the other end of the relationship, together with type, specific reference meta including extension data.
- Callers will typically use a filter parameter to restrict the response to the custom relationship types (`filter[meta.refType]`) they are interested in.
- The response body will have an included array that contains the resources in the relationship, which is essentially the response to the [List Related Resources operation](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#createversionrelationshipsref).
- To get custom relationships for multiple versions, see the ListRefs command.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionId

`string`

The URL encoded unique identifier of a version.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### filterDirection?

[`FilterDirection`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterDirection)

Filter by the direction of the reference. Possible values: `from` and `to`.

#### filterExtensionType?

`string`[]

Filter by the extension type.

#### filterId?

`string`[]

Filter by the `id` of the `ref` target.

#### filterRefType?

[`FilterRefType`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterRefType)

Filter by `refType`. Possible values: `derived`, `dependencies`, `auxiliary`, `xrefs`, and `includes`.

#### filterType?

[`FilterTypeVersion`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/enumerations/ts-FilterTypeVersion)[]

Filter by the `type` of the `ref` target. Supported values include `folders`, `items`, and `versions`.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`RelationshipRefs`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-RelationshipRefs)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## patchFolder()

**Operation**: Modify a Folder

**patchFolder**(`projectId`, `folderId`, `modifyFolderPayload`, `optionalArgs?`): `Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

Defined in: [custom-code/dataManagementClient.ts:560](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L560)

Renames, moves, hides, or unhides a folder.

For BIM 360 Docs and Forma Data Management folders, marking a folder as hidden effectively deletes it. You can restore it by changing its hidden attribute. You can also move these folders by changing their parent folder.

You cannot permanently delete BIM 360 Docs or Forma Data Management folders. Deleted folders are tagged as hidden and are removed from the product UI and from regular Data Management API responses. You can use the hidden filter (`filter[hidden]=true`) o retrieve hidden folders with the [List Folder Contents](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient#getfoldercontents) operation.

Before using the Data Management API to access BIM 360 Docs folders, you must provision your app through the BIM 360 Account Administrator portal. For details, see the [Manage Access to Docs tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/getting-started/manage-access-to-docs/).

Access to Forma Data Management folders requires a different provisioning process. Apps must be registered and approved as custom integrations before they can access Forma data. For instructions, see the [Custom Integrations documentation](https://help.autodesk.com/view/DOCS/ENU/?guid=Custom_Integrations).

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### folderId

`string`

The unique identifier of a folder.

#### modifyFolderPayload

[`ModifyFolderPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ModifyFolderPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Folder`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Folder)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## patchItem()

**Operation**: Update an Item

**patchItem**(`projectId`, `itemId`, `modifyItemPayload`, `optionalArgs?`): `Promise`<[`Item`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Item)>

Defined in: [custom-code/dataManagementClient.ts:991](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L991)

Updates the `displayName` of the specified item. Note that updating the `displayName` of an item is not supported for BIM 360 Docs or Forma items.

**Note:** This operation works with both BIM 360 Projects and Forma Projects.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### itemId

`string`

The unique identifier of an item.

#### modifyItemPayload

[`ModifyItemPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ModifyItemPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### xUserId?

`string`

In a two-legged authentication context, an app has access to all users specified by the administrator in the SaaS integrations UI. By providing this parameter, the API call will be limited to act only on behalf of the specified user.

#### Returns

`Promise`<[`Item`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Item)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

## patchVersion()

**Operation**: Update a Version

**patchVersion**(`projectId`, `versionId`, `modifyVersionPayload`, `optionalArgs?`): `Promise`<[`Version`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Version)>

Defined in: [custom-code/dataManagementClient.ts:1607](https://github.com/autodesk-platform-services/aps-sdk-node/blob/0787783a1f482339e18d74fbbf39631558ea9ec7/datamanagement/source/custom-code/dataManagementClient.ts#L1607)

Updates the properties of the specified version of an item. Currently, you can only change the name of the version.

**Note:** This operation is not supported for BIM 360 and Forma. If you want to rename a version, create a new version with a new name.

### Parameters

#### projectId

`string`

The unique identifier of a project.

For BIM 360 Docs, a Data Management Hub ID corresponds to an Account ID. For Forma, a Data Management Hub ID corresponds to a Forma Hub ID. To convert either to a Data Management Hub ID, prefix the ID with `b.` For example, a BIM 360 Account ID or Forma Hub ID of `c8b0c73d-3ae9` translates to a Data Management Hub ID of `b.c8b0c73d-3ae9`.

Similarly, to convert BIM 360 or Forma Project IDs to Data Management Project IDs, prefix them with `b.` For example, a Project ID of `c8b0c73d-3ae9` becomes `b.c8b0c73d-3ae9`.

#### versionId

`string`

The URL encoded unique identifier of a version.

#### modifyVersionPayload

[`ModifyVersionPayload`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-ModifyVersionPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`Version`](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/interfaces/ts-Version)>

#### Throws

[DataManagementApiError](https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementApiError)

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/typescript-sdk-dm/classes/ts-DataManagementClient
