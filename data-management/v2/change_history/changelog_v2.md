---
title: "REST API Changelog"
url_path: change_history/changelog_v2
product: "Data Management API"
surface: "data-management-v2"
protocol: "Documentation"
document_kind: "changelog"
api_version: "v2"
section: "change_history"
category: "changelog_v2"
---
# REST API Changelog

## Release Date: 2026-07-09

### Added
- Added the `data.attributes.extension.data.description` property, which represents the description of a folder (0-255 characters). This property is available only for folders in Forma projects. It is supported in the following endpoints:  [POST projects/:project_id/folders](https://aps.autodesk.com/en/docs/data/v2/reference/http/data-management/projects-project_id-folders-POST)
- [PATCH projects/:project_id/folders/:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/data-management/projects-project_id-folders-folder_id-PATCH)
- [GET projects/:project_id/folders/:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/data-management/projects-project_id-folders-folder_id-GET)
- [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/data-management/projects-project_id-folders-folder_id-contents-GET)
- [GET projects/:project_id/folders/:folder_id/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/data-management/projects-project_id-folders-folder_id-parent-GET)
- [GET projects/:project_id/items/:item_id/parent](https://aps.autodesk.com/en/docs/data/v2/reference/http/data-management/projects-project_id-items-item_id-parent-GET)

## Release Date: 2025-08-04
- Changed the region value for Australia from `APAC` to `AUS` in the response body for GET hubs and GET hubs/:id endpoints. This change is part of the deprecation process announced on 2025-04-08, where the value `APAC` was deprecated and replaced by `AUS` to represent data centers that exclusively serve the Australia region. See the blog post [Australia Region code change from APAC to AUS](https://aps.autodesk.com/blog/australia-region-code-change-apac-aus-deadline-extension-july-31-2025) for more information.

## Release Date: 2025-06-30
- Introduced new enum values to store and access data in data centers dedicated to serve the following regions.  `CAN` : Data centre for the Canada region.
- `DEU` : Data centre for the Germany region.
- `IND` : Data centre for the India region.
- `JPN` : Data centre for the Japan region.
- `GBR` : Data centre for the United Kingdom region.

## Release Date: 2025-04-08

### Deprecated

This value represents data centers that exclusively serve the Australia region.

See the blog post [Australia Region code change from APAC to AUS](https://aps.autodesk.com/blog/australia-region-code-change-apac-aus-deadline-extension-july-31-2025) for more information.

## Release Date: 2025-04-09

### Added

Added the `meta.approximateNumberOfPages` in the response body of [GET data/v1/projects/:project_id/folders/:folder_id/search](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET) endpoint.

## Release Date: 2024-11-19

### Added
- Added 2LO support for the [GET projects/:project_id/folders/:folder_id/search](https://aps.autodesk.com/en/docs/data/v2/reference/http/data-management/projects-project_id-folders-folder_id-search-GET) endpoint.

## Release Date: 2024-03-19

### Added
- **[Beta]** Introduced the new value `APAC` to the `region` and the `x-ads-region` (enum) parameters, for beta testing. This new value allows you to store and access derivative data in the data center dedicated to serve the Australia region. **Note:** Beta features are subject to change. Please avoid using them in production environments.

## Release Date: 2022-11-14

### Added

Added the following properties in response of [GET hubs/:hub_id/projects/:project_id/topFolders](https://aps.autodesk.com/en/docs/data/v2/reference/http/data-management/hubs-hub_id-projects-project_id-topFolders-GET) endpoint.
- _data.attributes.extension.data.isRoot_
- _data.attributes.extension.data.folderType_
- _data.attributes.extension.data.folderParents_

## Release Date: 2022-11-01

### Retired
- The `CreateFolder` command is removed from documentation and API. There is no gaurantee for this command to function properly from this date onwards. This deprecation was announced below on 2021-06-28.

## Release Date: 2022-08-01

### Added
- The [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) endpoint has been enhanced with the [PublishWithoutLinks](https://aps.autodesk.com/en/docs/data/v2/reference/http/PublishWithoutLinks) command which publishes the latest version of a Collaboration for Revit (C4R) model without the links it contains to BIM 360 Docs.

## Release Date: 2022-07-08

### Changed
- Updated the [app-managed-bucket tutorial](https://aps.autodesk.com/en/docs/data/v2/tutorials/app-managed-bucket).

### Deprecated
- [PUT buckets/:bucketKey/objects/:objectKey](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-PUT/)
- [PUT buckets/:bucketKey/objects/:objectKey/resumable](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-resumable-PUT/)
- [GET buckets/:bucketKey/objects/:objectKey](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-GET/)

Customers need to migrate from deprecated endpoints to Direct to S3 by September 30th, 2022.

### Added
- Added useCdn parameter to [GET buckets/:bucketKey/objects/:objectKey/signeds3download](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3download-GET)

## Release Date: 2022-04-05

### Added
- The [POST projects/:project_id/items](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-POST) and [POST projects/:project_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST) endpoints now accept `meta.workflow` and `meta.workflowAttribute` in the request body. See the endpoints’ documentation to learn more.

## Release Date: 2022-02-16

### Changed
- The number of subfolder levels that can be created for BIM 360 and Forma using [POST /projects/{project_id}/folders](https://aps.autodesk.com/docs/data/v2/reference/http/projects-project_id-folders-POST) is now limited to 25.

## Release Date: 2021-11-22

### Added
- Enabled response compression for `Content-Type:application/vnd.api+json` when `Accept-Encoding` header is present with the value of `gzip` or `*`.

## Release Date: 2021-09-15

### Added
- Added _attributes.extension.data.namingStandardIds_ to all endpoints that return Folder entity.
- Added _attributes.extension.data.conformingStatus_ to all endpoints that return Version entity.

## Release Date: 2021-08-23

### Added
- Added _data.relationships.pimCollection_ in response of [GET project/v1/hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/), [GET project/v1/hubs/:hub_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-GET/) and [GET project/v1/hubs/:hub_id/projects/:project_id/hub](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-hub-GET/) endpoints.

## Release Date: 2021-06-28

### Deprecated
- The [CreateFolder](https://aps.autodesk.com/en/docs/data/v2/reference/http/CreateFolder/) command was deprecated. We plan to remove this command in Jan 2022.

## Release Date: 2021-03-10

### Changed
- When a restricted operation is performed on a locked resource, the server now returns an HTTP status code of 423 instead of 500.

## Release Date: 2021-02-03

### Added
- Webview link, which opens the resource in a browser to all endpoints that returns Project, Folder, Item or Version entity.

## Release Date: 2020-01-30

### Changed
- Added _data.attributes.extension.data.permissions_.details in [CheckPermission](https://aps.autodesk.com/en/docs/data/v2/reference/http/CheckPermission) response

## Release Date: 2019-11-11

### Added
- Updated scope query parameters for responses which includes OSS and DS links.

## Release Date: 2019-10-24

### Added
- Move folder support for BIM 360 Docs folder in [PATCH projects/:project_id/folders/:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/) endpoint.

## Release Date: 2019-09-20

### Added
- Provide support for pagination by use of query parameters page[number] and page[limit] for [GET project/v1/hubs/:hub_id/projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET/) endpoint.

## Release Date: 2019-09-12

### Added
- Provide the region information as attribute region to all endpoints that returns a Hub entity.

## Release Date: 2019-08-13

### Added
- Ability to get item’s relative path through includePathInProject query parameter for BIM 360 Docs project in [GET projects/:project_id/items/:item_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-item_id-GET/) endpoint.

## Release Date: 2019-06-20

### Changed
- The [CheckPermission](https://aps.autodesk.com/en/docs/data/v2/reference/http/CheckPermission) command was updated to support the new View Only (view without download) BIM 360 permission type. For more information about BIM 360 permission types, see the [Help documentation](http://help.autodesk.com/view/BIM360D/ENU/?guid=GUID-2643FEEF-B48A-45A1-B354-797DAD628C37).

## Release Date: 2018-08-23

### Changed
- [GET projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET/) endpoint to return only active projects.
- [GET hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/) endpoint to return only active hubs.

## Release Date: 2018-07-18

### Added
- Support for deleting a title block type of BIM 360 Docs file in [POST projects/:project_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) endpoint

## Release Date: 2018-03-26

### Added
- Restore support for BIM 360 Docs folder in [PATCH projects/:project_id/folders/:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/) endpoint.
- Create item support for BIM 360 Docs in [POST projects/:project_id/items](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-POST/) endpoint.
- Create version support for BIM 360 Docs in [POST projects/:project_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) endpoint.

## Release Date: 2018-03-08

### Fixed
- Internal bugs.

## Release Date: 2018-03-01

### Added
- Ability to create folders for BIM 360 Docs in [POST projects/:project_id/folders](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-POST/) endpoint.
- Copy version support for BIM 360 Docs in [POST projects/:project_id/versions](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-POST/) endpoint.

## Release Date: 2018-02-09

### Added
- reserved, reservedTime, reservedUserId, reservedUserName attributes to all endpoints that returns an [Item entity](https://aps.autodesk.com/en/docs/data/v2/overview/field-guide/#item)

## Release Date: 2018-01-29

### Added
- Copy to folder support for BIM 360 Docs in [POST projects/:project_id/items](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-items-POST/) endpoint.

### Fixed
- Issue with lastModifiedTimeRollup attribute in [Folder entity](https://aps.autodesk.com/en/docs/data/v2/overview/field-guide/#folder) not comp;lying with the ISO8601 format.

## Release Date: 2018-01-10

### Changed
- Add rename and delete support for BIM 360 Docs folder in [PATCH projects/:project_id/folders/:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-PATCH/) endpoint.

## Release Date: 2017-12-04*

### Added
- Add lastModifiedTimeRollup field to [Folder entity](https://aps.autodesk.com/en/docs/data/v2/overview/field-guide/#folder)
- Add checks for If-Modified-Since header in [GET projects/​:project_id/​folders/​:folder_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-GET/) and returns 304 if the folder is not modified

## Release Date: 2017-06-07

### Added
- The [POST buckets/:bucketKey/objects/:objectKey/signed](https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signed-POST/) endpoint has been enhanced to support single-use URLs.

## Release Date: 2017-06-05

### Added
- The [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) endpoint has been enhanced with the [ListRefs](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListRefs) command to retrieve the custom relationships between specified versions of items and other folders, items, and versions in the `data` domain service.

## Release Date: 2017-04-18

### Added
- The [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) endpoint has been enhanced with [ListItems](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListItems/) command to retrieve metadata for specified items.

## Release Date: 2017-03-28

### Added
- The [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) endpoint has been enhanced with the [ListRefs](https://aps.autodesk.com/en/docs/data/v2/reference/http/ListRefs) command to retrieve the custom relationships between specified versions of items and other folders, items, and versions in the `data` domain service.

## Release Date: 2017-03-09

### Added
- The [Commands](https://aps.autodesk.com/en/docs/data/v2/overview/commands/) endpoint has been added to check which types of permissions a user has been granted for specified resources by using the [CheckPermission](https://aps.autodesk.com/en/docs/data/v2/reference/http/CheckPermission/) command.

## Release Date: 2017-01-30

### Added
- BIM 360 Docs accounts can now be accessed with the Project and Data services. See the [API Basics](https://aps.autodesk.com/en/docs/data/v2/overview/basics/) page for information on how to integrate your application with your BIM 360 Docs accounts.

## Release Date: 2017-01-17

### Added
- The [GET projects/:project_id/folders/:folder_id/search](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET/) endpoint has been added to filter data the user has access to for a given folder and project.

## Release Date: 2016-11-22

### Added
- The [GET hubs/:hub_id/projects/:project_id/topFolders](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-topFolders-GET/) endpoint has been added to return the details of the highest level folders the user has access to for a given project.
- A new relationship has been added between all project types and the highest level folders (topFolders), which links to the new [GET hubs/:hub_id/projects/:project_id/topFolders](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-project_id-topFolders-GET/) endpoint.

### Changed
- The hubs object response now distinguishes between team hubs and personal hubs. Team hubs are represented by `hubs:autodesk.core:Hub` (which previously represented all hubs) and personal hubs are represented by `hubs:autodesk.a360:PersonalHub` (a new type).  **Note** that since the previous representation for all hubs (`hubs:autodesk.core:Hub`) now only represents team hubs, any code that previously, explicitly checked for hubs will now only return team hubs, unless you update the code. See [GET hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/) for more information.

## Release Date: 2016-08-26

### Added
- Fixed instances where self links were missing the ID.
- Self links are now exposed in all payloads.

### Changed
- The `storage` relationship for Fusion 360 Designs has been deprecated and will be removed in a future release. Use [POST projects/:project_id/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-POST/) to create a new download for an existing Fusion 360 Design in the F3D or F3Z file format.
- The `name` property for `items` has been deprecated; `items` only provide a `displayName` property, which is the only property supported going forward for any `GET`, `POST`, or `PATCH` requests related to `items`.

## Release Date: 2016-08-26

### Added
- Folders can now be created using [POST projects/:project_id/folders](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-POST/)
- Metadata and core attributes of folders, items, and versions can now be modified via PATCH.
- Downloads of Fusion 360 Designs as .f3z/.f3d files can now be created using [POST projects/:project_id/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-POST/)
- Existing downloads for a given version can be queried using [GET projects/:project_id/versions/version_id/downloads](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-versions-version_id-downloads-GET/)
- The location of a downloadable file can now be retrieved using [GET projects/:project_id/downloads/:download_id](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-downloads-download_id-GET/)
- A `/downloadFormats` relationship is now available for all versions of an item.

### Changed
- Creating folders, items, versions, and relationships now require an extension section that specifies the type and version of the respective type to be created.
- The payload passed with a POST request to create folders, items, version, and relationships is now fully validated against the referenced schema.
- Folders, items, and versions now expose an additional `/links` relationship.
- Relationship links to thumbnails and manifests now point to the respective Model Derivative API endpoints.
- Uploading Fusion 360 Designs is not supported anymore.

### Fixed
- A storage location is no longer required when creating items and versions.
- A `Content-Type` header is no longer required to upload items.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/change_history/changelog_v2
