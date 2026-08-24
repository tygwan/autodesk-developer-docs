---
title: "Model Coordination Rate Limits"
url_path: overview/rate-limits/model-coordination-rate-limits
surface: guide
---
# BIM 360: Model Coordination Rate Limit and Quotas

The Model Coordination service of BIM 360 observes a rate limit and a set of quotas to ensure that all clients get sufficient service and that runaway applications do not consume excessive resources. For information about rate limits and quotas in general, see [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits).

## Rate Limit

This rate limit determines the number of requests the Model Coordination service can accept per APS user account (specified in a 3-legged token). Note that this rate is not a service guarantee. In the uncommon case where total service use is too high across all clients, the accepted request rate might drop until traffic subsides.

| Endpoints | Limit (requests per minute) | Scope |
| --- | --- | --- |
| All endpoints combined | 600 | Per APS user account |

### Scope

The rate limit is measured across the entire set of API endpoints combined. It is also measured per APS user account, specified by the authentication token, across as many applications and processes as are making requests for the user account. If, for example, one application makes 400 requests in one minute for user X and another application, during that same minute, makes 300 requests for the same user X, their combined requests violate the rate limit and the requests return an error.

### Violation Notification

If an application makes a Model Coordination API request that exceeds the rate limit, the Model Coordination service returns an HTTP 429 error (described in detail in [APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits)).

## Quotas

Model Coordination quotas limit resource consumption when using the Model Coordination service.

### Maximum Request Size

An application cannot send too large a request to the Model Coordination API.

| Resource | Limit |
| --- | --- |
| All endpoints combined | 600 |

#### Notification

If a request is too large, the Model Coordination service returns an HTTP 413 error code, “Request entity too large.”

### Model Set Version Document Limit

A version of a model set cannot contain more than a specified number of documents.

| Resource | Limit |
| --- | --- |
| Documents within a model set version | 1,000 documents |

Version creation is triggered automatically upon activity within a model set. If the document count exceeds the limit, new versions are not created.

### Job Pools

Many Model Coordination API endpoints execute asynchronously: they generate a job that executes independently, returning results on completion. Jobs execute within a project, where they create, retrieve, update, and delete resources. There are different types of jobs, depending on their function. Job type examples include model-set-creation jobs and update-view jobs.

To ensure that jobs are not too numerous to execute efficiently within a project, the Model Coordination service maintains a set of job pools within the project, one pool for each job type. Each pool issues a limited set of tokens, then monitors job execution to ensure that not too many jobs of each type are running.

#### Job Starts

Job starts are requested from two different sources:
- Many **Model Coordination API endpoints** initiate jobs. `POST containers/:containerId/modelsets`, for example, requests a model-set-creation job to start. Note that asynchronous endpoint requests like these can come from many different sources that include web applications, desktop applications, and workflows.
- **Automatic events** can initiate jobs. For example, when the Model Coordination service creates a new model set version, the service automatically requests a clash-test job to start.

All of these job starts are measured together per job type, regardless of the request source.

#### Job Tokens

When an endpoint or automatic event requests a job, it must ask for and receive a token from the appropriate job pool to start the job. A job cannot execute without a token.

Each job pool creates one set – or occasionally two sets (described below) – of tokens at specified time intervals (typically an interval of 1 hour or of 12 hours). The pool grants those tokens to requesters in the order in which the requests come in. At the start of each new interval, any unused tokens expire and a new set of tokens becomes available to requesters.

A job starts each time a token is granted. If jobs started during previous intervals are still running, they continue to run. Tokens are not subtracted from the new interval’s token set to compensate. It is possible for more jobs to run in an event pool than there are tokens created in a single time interval.

#### Dual Token Sets

A few job pools maintain two different token sets. One set limits jobs over a short interval, the second sets a maximum number of jobs that can start over a longer interval. If, for example, a job pool has a 1-hour token set of 25 tokens and a 12-hour token set of 50 tokens, it means that 25 jobs can start each hour but no more than 50 jobs can start over the 12-hour time interval, even if the combined hourly limits might allow it.

Here is how it works:

One token set is issued at a short interval (typically 1 hour) and a second token set is issued at a longer interval (typically 12 hours). The two token sets operate independently of each other. When a job request arrives, it must receive two tokens, one from each token set in order to start the job. If either token set is out of tokens, the job cannot start. The overall effect is that job requests are limited by whichever token set runs out first.

For example, if a job pool has a 1-hour token set of 25 and a 12-hour token set of 50, every starting job must receive a token from each set. 20 jobs start in the first hour (allowed by the hourly token), and 20 more start in the second hour (allowed by the new hourly token set). When 20 more job requests come in during the fourth hour, the total of 60 job requests during the 12-hour interval exhausts the 12-hour token set. The last 10 job requests cannot get both tokens and therefore do not succeed.

Once a new 12-hour period starts, both token sets are renewed and the count begins anew.

#### Token Exhaustion

When a pool’s tokens run out during a time interval, no more tokens are granted and no further jobs start. Job requests that come during that time are handled differently, depending on the request source:
- Endpoint requests return with an HTTP 429 error message suggesting a retry at the beginning of the next token-grant interval.
- Automatic event requests enter the pool’s job queue where they wait for a token at the start of the next time period.

#### Job Time Limits

When a job gets a token (or possibly two) from a job pool, the token specifies a timeout limit for the job that defines the job’s total execution time. If the job runs over the pool’s timeout interval, the Model Coordination service kills the job.

#### Token Quotas and Time Limits

Every type of job pool has token quotas. Each pool has at least one possible source of requests, and might have two: through an endpoint request or through an automatic event request. Some job pools have two different token sets, created as described above.

| Job Type | Possible Job Requester(s) | Tokens | Per Time Interval | Timeout Interval |
| --- | --- | --- | --- | --- |
| Create model set | [POST containers/:containerId/modelsets](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-create-model-set-POST/) | 25 | 1 hour | 1 hour |
| Create model set version | [POST containers/:containerId/modelsets/:modelSetId/versions](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-create-model-set-version-POST/) and BIM 360 document file operations (automatic request) | 25 in 1-hour token set, 50 in 12-hour token set | 1 hour for 1st token set, 12 hours for 2nd token set | 1 hour |
| Update model set | [PATCH containers/:containerId/modelsets/:modelSetId/versions:enable](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-enable-model-set-versions-PATCH/) [PATCH containers/:containerId/modelsets/:modelSetId/versions:disable](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-disable-model-set-versions-PATCH/) | 100 | 1 hour | 1 hour |
| Create model set view | [POST containers/:containerId/modelsets/:modelSetId/views](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-create-model-set-view-POST/) | 100 | 1 hour | 1 hour |
| Delete model set view | [DELETE containers/:containerId/modelsets/:modelSetId/views/:viewId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-delete-model-set-view-DELETE/) | 100 | 1 hour | 1 hour |
| Update model set view | [PATCH containers/:containerId/modelsets/:modelSetId/views/:viewId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-update-model-set-view-PATCH/) | 100 | 1 hour | 1 hour |
| Create model set issue | [POST containers/:containerId/modelsets/:modelSetId/issues](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-add-model-set-issue-POST/) | 250 | 1 hour | 1 hour |
| Create clash test | Model set version creation (automatic request) | 25 in 1-hour token set, 50 in 12-hour token set | 1 hour for 1st token set, 12 hours for 2nd token set | 1 hour for 1st token set, 12 hours for 2nd token set |
| Add closed clash group | [POST containers/:containerId/tests/:testId/clashes:close](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-clash-service-v3-add-closed-clash-group-batch-POST/) | 250 | 1 hour | 1 hour |
| Reopen closed clash group | [POST containers/:containerId/modelsets/:modelSetId/clashes:reopen](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-clash-service-v3-reopen-closed-clash-group-batch-POST/) | 250 | 1 hour | 1 hour |
| Add clash group issue | [POST containers/:containerId/tests/:testId/clashes:assign](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-clash-service-v3-add-assigned-clash-group-batch-POST/) | 250 | 1 hour | 1 hour |

#### Scope

Job quotas are measured within each BIM 360 project, and are not measured across projects. Each job type quota is measured across all job requesters within a project. If numerous applications, workflows, and automatic events request jobs of the same type within the same project, they might exceed job type quotas, even if they are not individually exceeding the quotas.

#### Notification

If an endpoint request attempts to start a job that cannot get a token, the response returns an HTTP 429 error. The response also reports job status. There are four possible statuses:
- **Failed**, where the job failed to execute, most likely because it could not get a token from the job pool.
- **Running**, where the job received a token and is executing.
- **Succeeded**, where the job received a token, executed, and is finished.
- **Archived**, where the job has finished and is no longer present in the job pool, but is saved as a job record.

The response might contain further information useful for determining the reason behind a job’s status.

These two endpoints can return status and other information for a job (specified by job ID), whether or not the job has completed:
- [GET containers/:containerId/jobs/:jobId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-get-container-job-by-container-GET/)
- [GET modelsets/:modelSetId/jobs/:jobId](https://aps.autodesk.com/en/docs/bim360/v1/reference/http/mc-modelset-service-v3-get-model-set-job-GET/)

## Changing Limits and Quotas

[APS Rate Limits and Quotas](https://aps.autodesk.com/en/docs/bim360/v1/overview/rate-limits/forge-rate-limits) describes how to request rate limit changes for APS APIs.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/rate-limits/model-coordination-rate-limits
