---
title: "Model Derivative Rate Limits"
url_path: developers_guide/rate-limiting/md-rate-limits
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "rate-limiting"
---
# Model Derivative Rate Limits and Quotas

The Model Derivative service observes a rate limit and a set of quotas to ensure that all clients get sufficient service and that runaway applications don’t consume excessive resources. [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/rate-limiting/forge-rate-limits) describes rate limits and quotas in general.

## Rate Limits

Rate limits specify a maximum number of requests per minute.

### Scope

The Model Derivative service sets a separate rate limit for each application making requests (specified by client ID) per API endpoint.

### Violation Notification

If an application exceeds an endpoint’s rate limit, the server returns an `HTTP 429` error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/rate-limiting/forge-rate-limits)).

### Endpoint Rate Limits

These rate limits apply to some of the Model Derivative API’s endpoints. Note that these rates are not service guarantees. In the uncommon case where total service use is too high across all clients, accepted request rates may drop until traffic subsides.

| Method | Endpoint | Limit (requests/minute) | Comments |
| --- | --- | --- | --- |
| POST | [/job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/job-POST/) | 500 |   |
| GET | [/{urn}/metadata/{modelGuid}/properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/) | 300 | This rate limit applies only when a request triggers a metadata extraction process. It does not apply to requests querying models whose metadata extraction is complete or in progress. |
| GET | [/{urn}/metadata/{modelGuid}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) | 300 | This rate limit applies only when a request triggers a metadata extraction process. It does not apply to requests querying models whose metadata extraction is complete or in progress. |
| POST | [/{urn}/metadata/{modelGuid}/properties:query](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-query-POST/) | 300 | This rate limit applies only when a request triggers a metadata extraction process. It does not apply to requests querying models whose metadata extraction is complete or in progress. |
| GET | [/{urn}/metadata/{guid}/properties?forceget=true](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/) | 60 |   |
| GET | [/{urn}/metadata/{modelGuid}?forceget=true](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET) | 60 |   |
|   | Other endpoint limits coming soon |   |   |

## Quotas

Model Derivative quotas limit resource consumption when using the Model Derivative service.

### Scope

Quotas are enforced individually for each app making requests (specified by client ID) that uses the Model Derivative service, and are set per endpoint.

### Endpoint Quotas

These quotas limit an endpoint’s resource consumption.

| Method | Endpoint | Limit Description | Limit | Units | Notification |
| --- | --- | --- | --- | --- | --- |
| GET | :/urn/metadata/{guid}/properties | The maximum download size for a request | 20 | MB | HTTP 413 response |
| GET | {urn}/manifest/{derivativeurn} | The maximum download size for derivatives with a URN ending with `.db` or `.sdb`.

**Tip**: If the derivative to download is larger than the specified limit, use the `Range` header to download the derivative in chunks. | 64 | MB | HTTP 413 response |
|   | Other quotas coming soon |   |   |   |   |

### Quota Violation Notification

The Model Derivative service reports quota violations using different HTTP error responses.

#### HTTP 413 “Request Entity Too Large”

This response reports a quota violation that occurs when requesting a resource that’s too large. These are examples of a 413 response header and body:

##### Example Response Header (413)

```
HTTP/1.1 413 Request Entity Too Large
Content-Type: application/json
date: Fri, 03 Aug 2018 08:17:33 GMT
x-ads-app-identifier=platform-viewing-2018.06.02.63.f1ad853-production
x-ads-startup-time: Fri Aug 03 05:34:31 UTC 2018
x-ads-duration: 126 ms
x-ads-size: 529625314
```

##### Example Response Body (413)

```
{
  "diagnostic": "Please use the 'forceget' parameter to force querying the data."
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/rate-limiting/md-rate-limits
