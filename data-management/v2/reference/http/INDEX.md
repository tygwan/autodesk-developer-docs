---
document_type: "archive-directory-index"
product: "Data Management API"
surface: "data-management-v2"
protocol: "REST with TypeScript and .NET SDKs"
language: "en"
generated: "true"
---

# REST API Reference

[Data Management API v2 index](../../INDEX.md) · [Parent index](../INDEX.md)

## Overview

- [REST API Reference](../http.md)

## Documents

| Kind | Name | API detail | Documentation |
| --- | --- | --- | --- |
| endpoint | CheckPermission | `POST /data/v1/projects/{project_id}/commands` | [Open document](./CheckPermission.md) |
| endpoint | DELETE Delete Bucket | `DELETE /oss/v2/buckets/{bucketKey}` | [Open document](./buckets-bucketKey-DELETE.md) |
| endpoint | DELETE Delete Object | `DELETE /oss/v2/buckets/{bucketKey}/objects/{objectKey}` | [Open document](./buckets-bucketKey-objects-objectKey-DELETE.md) |
| endpoint | DELETE Delete Object Using Signed URL | `DELETE /oss/v2/signedresources/{hash}` | [Open document](./signedresources-id-DELETE.md) |
| endpoint | GET Download Object Using Signed URL | `GET /oss/v2/signedresources/{hash}` | [Open document](./signedresources-id-GET.md) |
| endpoint | GET Generate Signed S3 Download URL | `GET /oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3download` | [Open document](./buckets-bucketKey-objects-objectKey-signeds3download-GET.md) |
| endpoint | GET Generate Signed S3 Upload URL | `GET /oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3upload` | [Open document](./buckets-bucketKey-objects-objectKey-signeds3upload-GET.md) |
| endpoint | GET Get Bucket Details | `GET /oss/v2/buckets/{bucketKey}/details` | [Open document](./buckets-bucketKey-details-GET.md) |
| endpoint | GET Get Object Details | `GET /oss/v2/buckets/{bucketKey}/objects/{objectKey}/details` | [Open document](./buckets-bucketKey-objects-objectKey-details-GET.md) |
| endpoint | GET hubs | `GET /project/v1/hubs` | [Open document](./hubs-GET.md) |
| endpoint | GET hubs/:hub_id | `GET /project/v1/hubs/{hub_id}` | [Open document](./hubs-hub_id-GET.md) |
| endpoint | GET hubs/:hub_id/projects | `GET /project/v1/hubs/{hub_id}/projects` | [Open document](./hubs-hub_id-projects-GET.md) |
| endpoint | GET hubs/:hub_id/projects/:project_id | `GET /project/v1/hubs/{hub_id}/projects/{project_id}` | [Open document](./hubs-hub_id-projects-project_id-GET.md) |
| endpoint | GET hubs/:hub_id/projects/:project_id/hub | `GET /project/v1/hubs/{hub_id}/projects/{project_id}/hub` | [Open document](./hubs-hub_id-projects-project_id-hub-GET.md) |
| endpoint | GET hubs/:hub_id/projects/:project_id/topFolders | `GET /project/v1/hubs/{hub_id}/projects/{project_id}/topFolders` | [Open document](./hubs-hub_id-projects-project_id-topFolders-GET.md) |
| endpoint | GET List Buckets | `GET /oss/v2/buckets` | [Open document](./buckets-GET.md) |
| endpoint | GET List Objects | `GET /oss/v2/buckets/{bucketKey}/objects` | [Open document](./buckets-bucketKey-objects-GET.md) |
| endpoint | GET projects/:project_id/downloads/:download_id | `GET /data/v1/projects/{project_id}/downloads/{download_id}` | [Open document](./projects-project_id-downloads-download_id-GET.md) |
| endpoint | GET projects/:project_id/folders/:folder_id | `GET /data/v1/projects/{project_id}/folders/{folder_id}` | [Open document](./projects-project_id-folders-folder_id-GET.md) |
| endpoint | GET projects/:project_id/folders/:folder_id/contents | `GET /data/v1/projects/{project_id}/folders/{folder_id}/contents` | [Open document](./projects-project_id-folders-folder_id-contents-GET.md) |
| endpoint | GET projects/:project_id/folders/:folder_id/parent | `GET /data/v1/projects/{project_id}/folders/{folder_id}/parent` | [Open document](./projects-project_id-folders-folder_id-parent-GET.md) |
| endpoint | GET projects/:project_id/folders/:folder_id/refs | `GET /data/v1/projects/{project_id}/folders/{folder_id}/refs` | [Open document](./projects-project_id-folders-folder_id-refs-GET.md) |
| endpoint | GET projects/:project_id/folders/:folder_id/relationships/links | `GET /data/v1/projects/{project_id}/folders/{folder_id}/relationships/links` | [Open document](./projects-project_id-folders-folder_id-relationships-links-GET.md) |
| endpoint | GET projects/:project_id/folders/:folder_id/relationships/refs | `GET /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs` | [Open document](./projects-project_id-folders-folder_id-relationships-refs-GET.md) |
| endpoint | GET projects/:project_id/folders/:folder_id/search | `GET /data/v1/projects/{project_id}/folders/{folder_id}/search` | [Open document](./projects-project_id-folders-folder_id-search-GET.md) |
| endpoint | GET projects/:project_id/items/:item_id | `GET /data/v1/projects/{project_id}/items/{item_id}` | [Open document](./projects-project_id-items-item_id-GET.md) |
| endpoint | GET projects/:project_id/items/:item_id/parent | `GET /data/v1/projects/{project_id}/items/{item_id}/parent` | [Open document](./projects-project_id-items-item_id-parent-GET.md) |
| endpoint | GET projects/:project_id/items/:item_id/refs | `GET /data/v1/projects/{project_id}/items/{item_id}/refs` | [Open document](./projects-project_id-items-item_id-refs-GET.md) |
| endpoint | GET projects/:project_id/items/:item_id/relationships/links | `GET /data/v1/projects/{project_id}/items/{item_id}/relationships/links` | [Open document](./projects-project_id-items-item_id-relationships-links-GET.md) |
| endpoint | GET projects/:project_id/items/:item_id/relationships/refs | `GET /data/v1/projects/{project_id}/items/{item_id}/relationships/refs` | [Open document](./projects-project_id-items-item_id-relationships-refs-GET.md) |
| endpoint | GET projects/:project_id/items/:item_id/tip | `GET /data/v1/projects/{project_id}/items/{item_id}/tip` | [Open document](./projects-project_id-items-item_id-tip-GET.md) |
| endpoint | GET projects/:project_id/items/:item_id/versions | `GET /data/v1/projects/{project_id}/items/{item_id}/versions` | [Open document](./projects-project_id-items-item_id-versions-GET.md) |
| endpoint | GET projects/:project_id/jobs/:job_id | `GET /data/v1/projects/{project_id}/jobs/{job_id}` | [Open document](./projects-project_id-jobs-job_id-GET.md) |
| endpoint | GET projects/:project_id/versions/:version_id | `GET /data/v1/projects/{project_id}/versions/{version_id}` | [Open document](./projects-project_id-versions-version_id-GET.md) |
| endpoint | GET projects/:project_id/versions/:version_id/downloadFormats | `GET /data/v1/projects/{project_id}/versions/{version_id}/downloadFormats` | [Open document](./projects-project_id-versions-version_id-downloadFormats-GET.md) |
| endpoint | GET projects/:project_id/versions/:version_id/downloads | `GET /data/v1/projects/{project_id}/versions/{version_id}/downloads` | [Open document](./projects-project_id-versions-version_id-downloads-GET.md) |
| endpoint | GET projects/:project_id/versions/:version_id/item | `GET /data/v1/projects/{project_id}/versions/{version_id}/item` | [Open document](./projects-project_id-versions-version_id-item-GET.md) |
| endpoint | GET projects/:project_id/versions/:version_id/refs | `GET /data/v1/projects/{project_id}/versions/{version_id}/refs` | [Open document](./projects-project_id-versions-version_id-refs-GET.md) |
| endpoint | GET projects/:project_id/versions/:version_id/relationships/links | `GET /data/v1/projects/{project_id}/versions/{version_id}/relationships/links` | [Open document](./projects-project_id-versions-version_id-relationships-links-GET.md) |
| endpoint | GET projects/:project_id/versions/:version_id/relationships/refs | `GET /data/v1/projects/{project_id}/versions/{version_id}/relationships/refs` | [Open document](./projects-project_id-versions-version_id-relationships-refs-GET.md) |
| endpoint | GetPublishModelJob | `POST /data/v1/projects/{project_id}/commands` | [Open document](./GetPublishModelJob.md) |
| endpoint | ListItems | `POST /data/v1/projects/{project_id}/commands` | [Open document](./ListItems.md) |
| endpoint | ListRefs | `POST /data/v1/projects/{project_id}/commands` | [Open document](./ListRefs.md) |
| endpoint | PATCH projects/:project_id/folders/:folder_id | `PATCH /data/v1/projects/{project_id}/folders/{folder_id}` | [Open document](./projects-project_id-folders-folder_id-PATCH.md) |
| endpoint | PATCH projects/:project_id/items/:item_id | `PATCH /data/v1/projects/{project_id}/items/{item_id}` | [Open document](./projects-project_id-items-item_id-PATCH.md) |
| endpoint | PATCH projects/:project_id/versions/:version_id | `PATCH /data/v1/projects/{project_id}/versions/{version_id}` | [Open document](./projects-project_id-versions-version_id-PATCH.md) |
| endpoint | POST Batch Generate Signed S3 Upload URLs | `POST /oss/v2/buckets/{bucketKey}/objects/batchsigneds3upload` | [Open document](./buckets-bucketKey-objects-batchsigneds3upload-POST.md) |
| endpoint | POST Complete Batch Upload to S3 Signed URLs | `POST /oss/v2/buckets/{bucketKey}/objects/batchcompleteupload` | [Open document](./buckets-bucketKey-objects-batchcompleteupload-POST.md) |
| endpoint | POST Complete Upload to S3 Signed URL | `POST /oss/v2/buckets/{bucketKey}/objects/{objectKey}/signeds3upload` | [Open document](./buckets-bucketKey-objects-objectKey-signeds3upload-POST.md) |
| endpoint | POST Create Bucket | `POST /oss/v2/buckets` | [Open document](./buckets-POST.md) |
| endpoint | POST Generate Signed OSS URL | `POST /oss/v2/buckets/{bucketKey}/objects/{objectKey}/signed` | [Open document](./buckets-bucketKey-objects-objectKey-signed-POST.md) |
| endpoint | POST Generate Signed S3 Download URLs (Batch) | `POST /oss/v2/buckets/{bucketKey}/objects/batchsigneds3download` | [Open document](./buckets-bucketKey-objects-batchsigneds3download-POST.md) |
| endpoint | POST projects/:project_id/downloads | `POST /data/v1/projects/{project_id}/downloads` | [Open document](./projects-project_id-downloads-POST.md) |
| endpoint | POST projects/:project_id/folders | `POST /data/v1/projects/{project_id}/folders` | [Open document](./projects-project_id-folders-POST.md) |
| endpoint | POST projects/:project_id/folders/:folder_id/relationships/refs | `POST /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs` | [Open document](./projects-project_id-folders-folder_id-relationships-refs-POST.md) |
| endpoint | POST projects/:project_id/items | `POST /data/v1/projects/{project_id}/items` | [Open document](./projects-project_id-items-POST.md) |
| endpoint | POST projects/:project_id/items/:item_id/relationships/refs | `POST /data/v1/projects/{project_id}/items/{item_id}/relationships/refs` | [Open document](./projects-project_id-items-item_id-relationships-refs-POST.md) |
| endpoint | POST projects/:project_id/storage | `POST /data/v1/projects/{project_id}/storage` | [Open document](./projects-project_id-storage-POST.md) |
| endpoint | POST projects/:project_id/versions | `POST /data/v1/projects/{project_id}/versions` | [Open document](./projects-project_id-versions-POST.md) |
| endpoint | POST projects/:project_id/versions/:version_id/relationships/refs | `POST /data/v1/projects/{project_id}/versions/{version_id}/relationships/refs` | [Open document](./projects-project_id-versions-version_id-relationships-refs-POST.md) |
| endpoint | POST Protect Bucket | `POST /oss/v2/buckets/{bucketKey}/protect` | [Open document](./post-oss-v2-buckets-bucketkey-pr-POST.md) |
| endpoint | POST Transfer Bucket Ownership | `POST /oss/v2/buckets/{bucketKey}/transfer` | [Open document](./transferbucketownership-POST.md) |
| endpoint | PublishModel | `POST /data/v1/projects/{project_id}/commands` | [Open document](./PublishModel.md) |
| endpoint | PublishWithoutLinks | `POST /data/v1/projects/{project_id}/commands` | [Open document](./PublishWithoutLinks.md) |
| endpoint | PUT Copy Object | `PUT /oss/v2/buckets/{bucketKey}/objects/{objectKey}/copyto/{newObjName}` | [Open document](./buckets-bucketKey-objects-objectKey-copyto-newObjectKey-PUT.md) |
| endpoint | PUT Replace Object Using Signed URL | `PUT /oss/v2/signedresources/{hash}` | [Open document](./signedresources-id-PUT.md) |
| endpoint | PUT Upload Object Using Signed URL | `PUT /oss/v2/signedresources/{hash}/resumable` | [Open document](./signedresources-id-resumable-PUT.md) |

Captured documentation values are preserved as published.
