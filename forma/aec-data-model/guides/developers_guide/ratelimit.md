---
title: "AEC Data Model Rate Limits"
url_path: developers_guide/ratelimit
surface: guide
---
# AEC Data Model Rate Limits

In order to maintain stability and ensure accessibility of our API to all users, we’ve implemented certain protection measures on incoming requests to our GraphQL API via rate limits.

## Rate limits

Calls to the GraphQL API are subjected to rate limiting based on the computed point value of the data that’s requested within a minute. Each request is given a dynamic point value, which is determined by the complexity of the provided query. For instance, requests that involve complex tasks like aggregations or retrieving a large amount of data will carry a higher point value. Therefore, it’s essential to request only the data that you’ll actually use. There’s also a cap on the total number of points an application or an individual request can consume within a minute.

**Important:**
- An application request will have a default rate limit of 6000 points per minute. To request a higher rate limit, please contact support.
- An individual request has a limit of 1000 points per query. Any queries exceeding this limit will be rejected.

## How to calculate the point value of a query?

The point associated with a query is calculated by adding up the points of each field within the query. This calculation is dependent on the type of the field returned. The following points are the default values allocated to each type. However, it’s important to note that the point values for specific individual fields may vary, being either higher or lower.

**Default values**

The below are the default point values. Specific individual fields can be more or less expensive.

| Field Returns | Point Value |
| --- | --- |
| Query | 10 |
| Object | 1 |
| Scalar | 0 |
| Enum | 0 |
| Interface | Maximum point value of all implementations |
| Union | Maximum point value of all implementations |
| Results | Sized according to the returned pagesize |
| Mutation | 10 |

## Exceeding the rate limit

When you exceed your rate limit the API will not be return data and instead will return a rate limit Exceeded error. This error will be returned in a 429 HTTPS Response with the following content:

Exceeding the rate limit example:

```
{
  "errors": [{
    "message": "Query point value per minute quota exceeded with point value 231 and remaining quota 69. Please try again later.",
    "extensions": {
      "code":"GRAPHQL_VALIDATION_FAILED"
    }
  }]
}
```

## Exceeding the maximum allowed query point

When you exceed the maximum allowed query point value the API will not return data and instead will return a error. This error will be returned in a 400 HTTPS Response with the following content:

```
{
  "errors": [{
    "message": "Query point value 1231 exceeds maximum allowed query point value 1000. To reduce point value, consider setting a lower pagination limit or reducing the number of fields requested.",
    "extensions": {
      "code":"GRAPHQL_VALIDATION_FAILED"
    }
  }]
}
```

## Knowing the point value of a query

The point value of a query is populated in the extensions field of a response as noted in the example below:

```
{
  {
      "data": {
          ...
      },
      "extensions": {
          "pointValue": {
              "requestedQueryPointValue": 16
          }
      }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/ratelimit
