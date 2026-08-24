---
title: "RFIs Changelog"
url_path: change_history/rfis_changelog
surface: guide
---
# RFIs Changelog

## Release Date: 2025-07-01

### Initial API Release

Released the new Forma RFIs API v3.

This version is the successor to the Forma RFIs API v2, which was deprecated in 2022.

The following 16 endpoints are included in this release:
- [GET users/me](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-users-me-GET/) — Retrieves information about the current authenticated user.
- [GET workflow](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-workflow-GET/) — Retrieves detailed RFI workflow information.
- [GET rfi-types](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-types-GET/) — Retrieves a list of RFI types.
- [GET attributes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-attributes-GET/) — Retrieves RFI custom attributes.
- [POST attributes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-attrubutes-POST/) — Creates a new custom attribute.
- [PATCH attributes/:rfiTypeId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-attrubuteid-PATCH/) — Updates an existing custom attribute.
- [POST rfis](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-rfi-POST/) — Creates a new RFI.
- [POST search:rfis](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-searchrfi-POST/) — Searches for RFIs in a project.
- [GET custom-identifier](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-customidentifier-GET/) — Retrieves the next available custom identifier for RFIs.
- [GET rfis/:rfiId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-rfisrfiid-GET/) — Retrieves detailed information about a specific RFI.
- [PATCH rfis/:rfiId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-rfisrfiid-PATCH/) — Updates a specific RFI.
- [GET attachments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-attachments-GET/) — Retrieves attachments associated with an RFI.
- [POST response](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-response-POST/) — Adds a response to an RFI.
- [PATCH response/:responseId](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-response-PATCH/) — Updates a response to an RFI.
- [GET comments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-comments-GET/) — Retrieves all comments associated with an RFI.
- [POST comments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-V3-comments-POST/) — Adds a comment to an RFI.

## Deprecated RFIs Forma Endpoints: 2022-09-01

The following RFIs Forma endpoints are **deprecated**. We will continue supporting them until 2022-09-01.
- [Create an RFI](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-v2-rfis-POST)
- [Retrieve RFIs](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-v2-rfis-GET/)
- [Retrieve a Single RFI](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-v2-rfis-id-GET/)
- [Update an RFI](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-v2-rfis-id-PATCH/)
- [Retrieve Comments](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-v2-comments-GET/)
- [Create a Comment](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-v2-comments-POST/)
- [Retrieve User Details](https://aps.autodesk.com/en/docs/acc/v1/reference/http/rfis-v2-users-me-GET/)

We plan to release a new version of the RFIs Forma API in the coming months.

Meanwhile, we recommend migrating to the BIM 360 endpoints, which support Forma projects:
- [Create an RFI](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/rfis-v2-rfis-POST)
- [Retrieve RFIs](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/rfis-v2-rfis-GET)
- [Retrieve a Single RFI](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/rfis-v2-rfis-id-GET)
- [Update an RFI](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/rfis-v2-rfis-id-PATCH)
- [Retrieve Comments](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/rfis-v2-comments-GET)
- [Create a Comment](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/rfis-v2-comments-POST)
- [Retrieve User Details](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/rfis-v2-users-me-GET)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/change_history/rfis_changelog
