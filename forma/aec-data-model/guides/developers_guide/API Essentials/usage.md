---
title: "Using the API"
url_path: developers_guide/API Essentials/usage
surface: guide
---
# Using the AEC Data Model API

To access the AEC Data Model API, follow these steps:
- If you are using this API for the first time, follow these steps:  Activate AEC Data Model API capabilities through the Forma Hub Administrator. For more details, see [API Onboarding](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/onboarding).
- [Create an App](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/create-app/).
- Select the **AEC Data Model API** and **Data Management API** services to use the AEC Data Model API.
- Note down the Client ID and Client secret so that you have the Client ID and Client secret readily available for future reference.
- To add AEC Data Model service to an existing APS account, select the AEC Data Model API, Data Management API, and Model Derivative API services to use the AEC Data Model API. For more information refer to [Add Forge Services to Existing App](https://tutorials.autodesk.io/).

## Endpoint

All the GraphQL queries must be sent to `https://developer.api.autodesk.com/aec/graphql`.

## Obtain a 3-Legged access token to authenticate queries

All AEC Data Model API queries require a 3-legged access token. See [Get a 3-Legged Token with Authorization Code Grant](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/) for instructions on how to obtain a 3-legged access token. Make sure that you specify the following scopes:

```
data:read data:create data:write
```

## Executing GraphQL queries

You can execute GraphQL queries by sending a POST request to `https://developer.api.autodesk.com/aec/graphql`. Each request must have an `Authorization` header, which must be `Bearer <YOUR_ACCESS_TOKEN>`. For example;

### Request

```
curl -v 'https://developer.api.autodesk.com/aec/graphql' \
-X 'POST' \
-H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a' \
-H 'Content-Type: application/graphql' \
-d '{
      hubs {
        results {
          name
        }
      }
    }'
```

### Response

```
{
  "data": {
    "hubs" : {
      "results" : [
        {
          "name" : "Autodesk-Forge"
        },
        {
          "name" : "ME-FLC"
        },
        {
          "name" : "Forma-Cloud-Team"
        },
        {
          "name" : "PIM-ME-Release"
        }
      ]
    }
  }
}
```

## Specifying the Content Type Header

The `Content-Type` header plays a vital role in indicating the request format. When working with the GraphQL API endpoint, the value for the `Content-Type` header depends on the data format used (as in the cURl code sample as described previously). If the data is sent in GraphQL format, the Content-Type should be set as application/graphql. However, some clients like Axios format the GraphQL query as a JSON object instead as shown in the following code block.

```
axios({
  method: 'POST',
  url: '<GraphQL endpoint>',
  data: {
    query: `{
      hubs {
        results {
          name
        }
      }
    }`
  }
})
```

Axios automatically sets the `Content-Type` header value to `application/json`.

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/API Essentials/usage
