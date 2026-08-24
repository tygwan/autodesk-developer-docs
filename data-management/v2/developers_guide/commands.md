---
title: "Commands"
url_path: developers_guide/commands
product: "Data Management API"
surface: "data-management-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "commands"
---
# Commands

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
원본 문서: https://aps.autodesk.com/en/docs/data/v2/developers_guide/commands
