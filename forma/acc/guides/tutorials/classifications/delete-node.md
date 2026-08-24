---
title: "Delete a Node from a Tree"
url_path: tutorials/classifications/delete-node
surface: guide
---
# Delete a Node from a Tree

This tutorial demonstrates how to delete a node from a classifications tree. The steps include retrieving the current tip-version nodes, reimporting the tree structure without the node you want to remove, and verifying that the node is marked as deleted in the new tip version.

## Before You Begin
- [Register an app](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/create-app/).
- Acquire a [3-legged OAuth token](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) with the `data:read`, `data:write`, and `data:create` scopes.
- Verify that you have access to the relevant account and Forma project and that you have Project Administrator permissions.
- Find the relevant project ID by following the [Retrieve a Project ID](https://aps.autodesk.com/en/docs/acc/v1/tutorials/getting-started/retrieve-account-and-project-id/) tutorial. In this example, assume the project ID is `f6a1e3b5-abaa-4b01-b33a-5d55f36ba047`.
- Find the tree ID you want to update. In this example, assume the tree ID is `0295f158-6f95-7fb0-b008-4cde506166ee`.

## Step 1: Get Current Tip-Version Nodes

Call [GET tip version nodes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications-trees-treeId-versions-tip-nodes-GET/) to retrieve the current nodes in the tree. Use the response to identify the node you want to remove.

### Request

```
curl -v 'https://developer.api.autodesk.com/construction/classifications/v1/projects/f6a1e3b5-abaa-4b01-b33a-5d55f36ba047/trees/0295f158-6f95-7fb0-b008-4cde506166ee/versions/tip/nodes?limit=1000&offset=0' \
  -H 'Authorization: Bearer <3LO_TOKEN>'
```

### Response

```
{
  "pagination": {
    "limit": 1000,
    "offset": 0,
    "totalResults": 3,
    "nextUrl": null
  },
  "results": [
    {
      "id": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "externalId": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "name": "Floor 1",
      "nodeCode": "FLOOR-1",
      "parentNodeId": null,
      "parentNodeExternalId": null,
      "order": 1,
      "isDeleted": false
    },
    {
      "id": "019ed520-d6ae-71c6-9b57-7cc74a5501be",
      "externalId": "019ed520-d6ae-71c6-9b57-7cc74a5501be",
      "name": "Room 101",
      "nodeCode": "ROOM-101",
      "parentNodeId": "019ed520-d6ae-71c6-9b57-78607a424d31,
      "parentNodeExternalId": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "order": 1,
      "isDeleted": false
    },
    {
      "id": "019ed520-d6ae-71c6-9b57-8c2db7e8f79a",
      "externalId": "019ed520-d6ae-71c6-9b57-8c2db7e8f79a",
      "name": "Room 102",
      "nodeCode": "ROOM-102",
      "parentNodeId": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "parentNodeExternalId": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "order": 2,
      "isDeleted": false
    }
  ]
}
```

In this example, assume you want to delete the node with code `ROOM-102`. Note its node ID, `019ed520-d6ae-71c6-9b57-8c2db7e8f79a`.

The response returns a flat list of nodes. In the next step, you will convert the flat list into a nested tree structure and remove the node from the hierarchy.

## Step 2: Reimport the Tree Without the Deleted Node

To delete the node, use the tree ID (`0295f158-6f95-7fb0-b008-4cde506166ee`) to call [POST trees:reimport](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications-trees-treeId-reimport-POST/).

Provide the complete tree structure in `importData`, excluding the node you want to remove from the hierarchy. In this example, `Room 102` is omitted from `importData`.

Do not send the flat list of nodes returned in Step 1. Reimport expects a complete nested tree structure.

### Request

```
curl -v 'https://developer.api.autodesk.com/construction/classifications/v1/projects/f6a1e3b5-abaa-4b01-b33a-5d55f36ba047/trees/0295f158-6f95-7fb0-b008-4cde506166ee:reimport' \
  -X POST \
  -H 'Authorization: Bearer <3LO_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Locations",
    "description": "Tree after removing Room 102",
    "importData": [
    {
      "id": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "name": "Floor 1",
      "nodeCode": "FLOOR-1",
      "children": [
        {
          "id": "019ed520-d6ae-71c6-9b57-7cc74a5501be",
          "name": "Room 101",
          "nodeCode": "ROOM-101"
        }
      ]
    }
    ]
  }'
```

### Response (201)

```
{
  "id": "0295f158-6f95-7fb0-b008-4cde506166ee",
  "name": "Locations",
  "description": "Tree after removing Room 102",
  "isBasedOnAccountTree": false,
  "treeConnectionType": "standalone",
  "originalTreeId": null,
  "createdAt": "2026-02-20T12:15:30.000Z",
  "updatedAt": "2026-02-21T08:42:11.000Z",
  "createdBy": "A3RGM375QTZ7",
  "updatedBy": "A3RGM375QTZ7"
}
```

The tree has been reimported without the `ROOM-102` node. In the next step, verify that the node is marked as deleted in the new tip version.

## Step 3: Verify the Node is Deleted

Call [GET tip version nodes](https://aps.autodesk.com/en/docs/acc/v1/reference/http/classifications-trees-treeId-versions-tip-nodes-GET/) with `includeDeleted=true` to retrieve the nodes in the new tip version, including deleted nodes.

Verify that the node you omitted from `importData` is returned with `isDeleted` set to `true`.

### Request

```
curl -v 'https://developer.api.autodesk.com/construction/classifications/v1/projects/f6a1e3b5-abaa-4b01-b33a-5d55f36ba047/trees/0295f158-6f95-7fb0-b008-4cde506166ee/versions/tip/nodes?includeDeleted=true&limit=1000&offset=0' \
  -H 'Authorization: Bearer <3LO_TOKEN>'
```

### Response

```
{
  "results": [
    {
      "id": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "externalId": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "name": "Floor 1",
      "nodeCode": "FLOOR-1",
      "parentNodeId": null,
      "parentNodeExternalId": null,
      "order": 1,
      "isDeleted": false
    },
    {
      "id": "019ed520-d6ae-71c6-9b57-7cc74a5501be",
      "externalId": "019ed520-d6ae-71c6-9b57-7cc74a5501be",
      "name": "Room 101",
      "nodeCode": "ROOM-101",
      "parentNodeId": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "parentNodeExternalId": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "order": 1,
      "isDeleted": false
    },
    {
      "id": "019ed520-d6ae-71c6-9b57-8c2db7e8f79a",
      "externalId": "019ed520-d6ae-71c6-9b57-8c2db7e8f79a",
      "name": "Room 102",
      "nodeCode": "ROOM-102",
      "parentNodeId": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "parentNodeExternalId": "019ed520-d6ae-71c6-9b57-78607a424d31",
      "order": 2,
      "isDeleted": true
    }
  ],
  "pagination": {
    "limit": 1000,
    "offset": 0,
    "totalResults": 3,
    "nextUrl": null
  }
}
```

The node is now marked as deleted in the latest tip version.

Congratulations! You have successfully deleted a node from a classifications tree.

To restore a node that has been marked as deleted, see the [Restore a Deleted Node in a Tree](https://aps.autodesk.com/en/docs/acc/v1/tutorials/classifications/restore-node/) tutorial.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/tutorials/classifications/delete-node
