---
title: "HTTP Reference"
url_path: reference/http-reference
surface: guide
---
# Quick Reference

## Elements API

API for reading Forma elements

| Operation | Method + Endpoint |
| --- | --- |
| [Get element](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/element-getelement-GET) | GET /v1alpha/elements/{urn} |
| [Retrieve multiple elements](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/element-getelementsbatch-POST) | POST /v1alpha/elements-batch |
| [Get blob](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/element-getblob-GET) | GET /v1alpha/blobs/{blobId} |
| [Retrieve multiple blobs](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/element-getblobsbatch-POST) | POST /v1alpha/blobs-batch |

## Geometries API

| Operation | Method + Endpoint |
| --- | --- |
| [Batch Create Basic Geometries](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/geometries-batchcreategeometries-POST) | POST /v1alpha/geometries/batch-create |

## Integrate API

An API for creating Forma elements.

### Migrating to V2

#### Major changes
- The `geometry` input is no longer supported. Instead pass valid representations such as a GLB.
- The “id” reference mechanism present in v1 is no longer supported. This also means you cannot create hierarchies unless the full URN values is decided upfront. For these cases the client must invoke multiple API calls (e.g. first create all children and get the URNs and then create a parent).
- IDs and revisions can be specified in all cases, but are still optional. Updating an element will set `predecessor` correctly.
- The API to update an element is simplified. It no longer follows JSON Merge Patch, but it does merge at second level. The implementation in v1 is slightly incorrect as the input schema isn’t deeply partial, but it still applies a deep merge.
- There is batch support for both creation and updating.
- The public HTTP API is only available for three-legged tokens.

#### Endpoints
- From `POST /v1/elements` - Use `POST /v2/elements` and/or `/v2/elements/batch-ingest` - Split up to multiple requests if needed or decide ID and revision client-side
- From `POST /v1/elements/{elementId}` - Use `POST /v2/elements/{elementUrn}/update` - This requires you to know the previous revision - otherwise use the create endpoint instead - If you remove fields make sure to set it to `null` to not skip it - Consider using the batch endpoint if updating multiple elements
- From `POST /v1/elements/{elementId}/revisions/{revision}/jsonMergePatch` - Use `POST /v2/elements/{elementUrn}/update` - Verify that your previous merging needs is compatible (e.g. you don’t rely on merging deep in the element) - Consider using the batch endpoint if updating multiple elements

| Operation | Method + Endpoint |
| --- | --- |
| [Create an element hierarchy](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-createelementhierarchy-POST) | POST /v1alpha/elements |
| [Update an existing element](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-updateelementwithoutrevision-POST) | POST /v1alpha/elements/{elementId} |
| [Create a new element](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-createelementv2-POST) | POST /v2alpha/elements |
| [Update an element](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-updateelementv2-POST) | POST /v2alpha/elements/{elementUrn}/update |
| [Create and/or update multiple elements in a batch](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-batchingestelementsv2-POST) | POST /v2alpha/elements/batch-ingest |
| [Get a signed link to upload a payload](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/integrate-getuploadlink-GET) | GET /v1alpha/upload-link |

## Library API

The Library serves as a central place for a user’s data. See the [Help center](https://help.autodeskforma.eu/autodeskforma/en/articles/6976465-library-and-importing-files) for more info.

| Operation | Method + Endpoint |
| --- | --- |
| [Add a new item to the library](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/library-createlibraryitem-POST) | POST /v1alpha/library-items |

## Project API (deprecated)

Deprecated. Please use the Site API instead.

| Operation | Method + Endpoint |
| --- | --- |
| [Get a project. Deprecated - please use the Site API.](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/project-getproject-GET) | GET /v1alpha/projects/{projectId} |

## Proposal API

API for managing Forma proposals

| Operation | Method + Endpoint |
| --- | --- |
| [Create a proposal](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/proposal-createproposal-POST) | POST /v1alpha/proposals |
| [List proposals](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/proposal-listproposals-GET) | GET /v1alpha/proposals |
| [Update a proposal](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/proposal-putproposal-PUT) | PUT /v1alpha/proposals/{proposalId}/revisions/{revision} |
| [List revisions for a proposal](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/proposal-listrevisions-GET) | GET /v1alpha/proposals/{proposalId}/revisions |

## Site API

API for managing Forma sites

| Operation | Method + Endpoint |
| --- | --- |
| [Get a site](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/site-getsite-GET) | GET /v1alpha/sites/{siteId} |

## Sun Analysis API

API for sun analysis

| Operation | Method + Endpoint |
| --- | --- |
| [Get analysis](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/sun-analysis-getanalysis-GET) | GET /v1alpha/analyses/{analysisId} |
| [Trigger an analysis](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/sun-analysis-triggersunanalysis-POST) | POST /v1alpha/analyses/trigger |

## Terrain API

The Forma Terrain API provides a set of endpoints for managing and interacting with terrain data.

| Operation | Method + Endpoint |
| --- | --- |
| [Create a new terrain](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/terrain-createterrain-POST) | POST /v1alpha/terrains |
| [Mark a terrain as uploaded](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/terrain-markterrainasuploaded-PATCH) | PATCH /v1alpha/terrains/{elementId}/revisions/{revision} |
| [Download a terrain GLB file](https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference/terrain-downloadterrainglb-GET) | GET /v1alpha/terrains/{elementId}/revisions/{revision}/download |

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/reference/http-reference
