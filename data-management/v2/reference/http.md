---
title: "REST API Reference"
url_path: reference/http
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST"
document_kind: "reference"
api_version: "v2"
section: "reference"
category: "http"
---
# REST API Reference

For more information about schema extensions, refer to the Extension Types section in the [API Basics](https://aps.autodesk.com/en/docs/data/v2/overview/basics)

## Hubs

For dealing with end-user data, hubs are the main entry point to the Data Management API and represent a space where projects are hosted. The following are the supported endpoints and methods related to Hubs.

| Endpoint | Description |
| --- | --- |
| [GET hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET) | Returns a collection of accessible hubs for this member. Hubs represent BIM 360 Team hubs, Fusion Team hubs (formerly known as A360 Team hubs), A360 Personal hubs, or BIM 360 Docs accounts. |
| [GET hubs/:hub_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-GET) | Returns data on a specific `hub_id`. |

## Projects

Projects contain the entry points of each of the individual projects a hub is hosting. The following are the supported endpoints and methods related to projects.

| Endpoint | Description |
| --- | --- |
| [GET hubs/:hub_id/projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET) | Returns a collection of projects for a given `hub_id`. |
| [GET hubs/:hub_id/projects/:project_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-GET) | Returns a project for a given `project_id`. |
| [GET hubs/:hub_id/projects/:project_id/hub](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-hub-GET) | Returns the hub for a given `project_id`. |
| [GET hubs/:hub_id/projects/:project_id/topFolders](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-topFolders-GET) | Returns the details of the highest level folders the user has access to for a given project. |
| [GET projects/:project_id/downloads/:download_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-download_id-GET) | Returns the details for a specific `download`. |
| [GET projects/:project_id/jobs/:job_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-jobs-job_id-GET) | Returns the `job_id` object. |
| [POST projects/:project_id/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-POST) | Request the creation of a new `download` for a specific and supported `file type`. |
| [POST projects/:project_id/storage](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-storage-POST) | Creates a storage location in the OSS where data can be uploaded to. |

## Folders

Folders are collections of resources related to a project. Every project has a root folder within which all project data is contained. Folders can contain other items like files or sub-folders. The following are the supported endpoints and methods related to folders.

| Endpoint | Description |
| --- | --- |
| [GET projects/:project_id/folders/:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-GET) | Returns the folder by ID for any folder within a given project. |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET) | Returns a collection of items and folders within a folder. |
| [GET projects/:project_id/folders/:folder_id/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-parent-GET) | Returns the parent folder (if it exists). |
| [GET projects/:project_id/folders/:folder_id/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-refs-GET) | Returns the resources (`items`, `folders`, and `versions`) that have a custom relationship with the given `folder_id`. |
| [GET projects/:project_id/folders/:folder_id/search](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET) | Filters the data of a folder and recursively in the subfolders of any project accessible to you, using the filter query string parameter. |
| [GET projects/:project_id/folders/:folder_id/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-links-GET) | Returns a collection of `links` for the given `folder_id`. |
| [GET projects/:project_id/folders/:folder_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-refs-GET) | Returns the custom relationships that are associated with the given `folder_id`. |
| [PATCH projects/:project_id/folders/:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH) | Modifies folder names. You can also use this endpoint to delete and restore BIM 360 Docs folders. |
| [POST projects/:project_id/folders](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-POST) | Creates a new folder. |
| [POST projects/:project_id/folders/:folder_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-relationships-refs-POST) | Creates a custom relationship between a folder and another resource within the `data` domain service (folder, item, or version). |

## Items

Items represent the data contained by a project and can have many forms. Changes to items are tracked and all the versions are stored. The following are the supported endpoints and methods related to items.

| Endpoint | Description |
| --- | --- |
| [GET projects/:project_id/items/:item_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET) | Returns a resource item by ID for any item within a given project. |
| [GET projects/:project_id/items/:item_id/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-parent-GET) | Returns the “parent” folder for the given item. |
| [GET projects/:project_id/items/:item_id/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-refs-GET) | Returns the resources (`items`, `folders`, and `versions`) that have a custom relationship with the given `item_id`. |
| [GET projects/:project_id/items/:item_id/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-links-GET) | Returns a collection of `links` for the given `item_id`. |
| [GET projects/:project_id/items/:item_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-refs-GET) | Returns the custom relationships that are associated with the given `item_id`. |
| [GET projects/:project_id/items/:item_id/tip](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-tip-GET) | Returns the “tip” version for the given item. |
| [GET projects/:project_id/items/:item_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-versions-GET) | Returns versions for the given item. |
| [PATCH projects/:project_id/items/:item_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-PATCH) | Updates the properties of the given `item_id` object. |
| [POST projects/:project_id/items](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-POST) | Creates the first version of a file (item). |
| [POST projects/:project_id/items/:item_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-relationships-refs-POST) | Creates a custom relationship between an item and another resource within the `data` domain service (folder, item, or version). |

## Versions

Versions represent a specific state for an item. As the item changes, a new version is created. Versions can be queried to show the history of items.

| Endpoint | Description |
| --- | --- |
| [GET projects/:project_id/versions/:version_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-GET) | Returns the version with the given `version_id`. |
| [GET projects/:project_id/versions/:version_id/downloadFormats](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloadFormats-GET) | Returns a collection of supported file formats this `version` could be converted to and downloaded as. |
| [GET projects/:project_id/versions/:version_id/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloads-GET) | Returns a set of already available downloads for this `version`. |
| [GET projects/:project_id/versions/:version_id/item](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-item-GET) | Returns the item the given version is associated with. |
| [GET projects/:project_id/versions/:version_id/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-refs-GET) | Returns the resources (`items`, `folders`, and `versions`) that have a custom relationship with the given `version_id`. |
| [GET projects/:project_id/versions/:version_id/relationships/links](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-links-GET) | Returns a collection of `links` for the given `item_id`-`version_id` object. |
| [GET projects/:project_id/versions/:version_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-GET) | Returns the custom relationships that are associated with the given `version_id`. |
| [PATCH projects/:project_id/versions/:version_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-PATCH) | Updates the properties of the given `version_id` object. |
| [POST projects/:project_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST) | Creates new versions of a file (item), except for the first version of the item. |
| [POST projects/:project_id/versions/:version_id/relationships/refs](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-relationships-refs-POST) | Creates a custom relationship between a version and another resource within the `data` domain service (folder, item, or version). |

## Buckets

| Endpoint | Description |
| --- | --- |
| [POST buckets](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-POST) | Creates a bucket |
| [GET buckets](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-GET) | Lists buckets |
| [GET buckets/:bucketKey/details](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-details-GET) | Gets bucket details |
| [POST buckets/:bucketKey/protect](https://aps.autodesk.com/en/docs/data/v2/reference/http/post-oss-v2-buckets-bucketkey-pr-POST) | Protects a bucket from accidental deletion |
| [DELETE buckets/:bucketKey](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-DELETE) | Deletes a bucket |

## Objects

| Endpoint | Description |
| --- | --- |
| [PUT buckets/:bucketKey/objects/:objectKey](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-PUT) (deprecated) | Uploads an object in a single request |
| [PUT buckets/:bucketKey/objects/:objectKey/resumable](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-resumable-PUT) (deprecated) | Uploads an object using multiple requests |
| [GET buckets/:bucketKey/objects/:objectKey/status/:sessionId](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-status-:sessionId-GET) | Checks on the status of a multi-part upload |
| [GET buckets/:bucketKey/objects](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-GET) | Gets a list of objects |
| [GET buckets/:bucketKey/objects/:objectKey/details](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-details-GET) | Gets object details |
| [GET buckets/:bucketKey/objects/:objectKey](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-GET) (deprecated) | Downloads an object |
| [POST buckets/:bucketKey/objects/:objectKey/signed](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signed-POST) | Creates a signed URL to an object |
| [PUT signedresources/:id](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-PUT) | Uploads an object using a signed URL |
| [PUT signedresources/:id/resumable](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-resumable-PUT) | Performs a resumable upload to a signed URL |
| [GET signedresources/:id](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-GET) | Downloads an object, using a signed URL |
| [DELETE signedresources/:id](https://aps.autodesk.com/en/docs/data/v2/reference/http/signedresources-:id-DELETE) | Deletes a signed resource |
| [PUT buckets/:bucketKey/objects/:objectKey/copyto/:newObjectKey](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-copyto-:newObjectKey-PUT) | Copies an object |
| [DELETE buckets/:bucketKey/objects/:objectKey](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-DELETE) | Deletes an object |
| [GET buckets/:bucketKey/objects/:objectKey/signeds3download](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3download-GET) | Gets a signed URL to an object for download directly from S3 |
| [POST buckets/:bucketKey/objects/batchsigneds3download](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-batchsigneds3download-POST) | Gets multiple signed URLs to multiple objects for download directly from S3 |

## Commands

Commands are used for performing complex operations on multiple resources rather than standard CRUD operations.
For example, you can check whether a user has permission to delete specific versions, items, and folders.
Commands are executed by sending requests in the body payload. Note that they share the same endpoint.

| Command | Description |
| --- | --- |
| [CheckPermission](https://aps.autodesk.com/en/docs/data/v2/reference/http/CheckPermission) | Checks which types of permissions a user has been granted to access specified versions, items, and folders for a given project. |
| [ListRefs](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListRefs) | Retrieves the custom relationships between specified versions of items and other folders, items, and versions in the `data` domain service. |
| [ListItems](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListItems) | Retrieves metadata for specified items. For example, an item name, or the date it was created. |
| [PublishModel](https://aps.autodesk.com/en/docs/data/v2/reference/http/PublishModel) | Publishes the latest version of a Collaboration for Revit (C4R) model to BIM 360 Docs. |
| [PublishWithoutLinks](https://aps.autodesk.com/en/docs/data/v2/reference/http/PublishWithoutLinks) | Publishes the latest version of a Collaboration for Revit (C4R) model without the links it contains to BIM 360 Docs. |
| [GetPublishModelJob](https://aps.autodesk.com/en/docs/data/v2/reference/http/GetPublishModelJob) | Verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs. |

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/http
