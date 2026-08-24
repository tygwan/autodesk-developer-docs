---
title: "Webhooks"
url_path: developers_guide/webhooks
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "webhooks"
---
# Webhooks

When you successfully submit a [POST job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST) request to APS, the Model Derivative service initiates a translation job. Depending on the complexity and size of the model, it may take a while for the job to finish.

Rather than periodically checking the translation status with [GET manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/manifest-GET), you can use a webhook to be notified when the status of a translation job changes or when the job is complete.

A webhook is a way for APS to send your application an HTTP POST request when an event occurs. This eliminates the need for your application to periodically check whether an event you are interested in has occurred. Since webhooks can notify you of events in near real-time, webhooks are preferred over polling.

Before you start using webhooks, you must register (or create) a webhook in APS. When you register a webhook, you provide the following information:
- The service the webhook is created for, which is the `derivative` service for Model Derivative events.
- The URL to send the HTTP POST request to (the callback URL).
- The event to monitor.
- The resource to monitor (the scope).

For Model Derivative events, the webhook scope is a **workflow ID** designated by your application. The workflow ID identifies a set of translation jobs that belong to the same workflow. To receive notifications for translation jobs in that workflow, specify the same workflow ID when submitting each job with [POST job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST).

For example, if you create a webhook with a scope containing the workflow ID `my-workflow-id`, specify `my-workflow-id` as the `misc.workflow` value when submitting a translation job.

For a step-by-step example, see [Creating a Webhook (Model Derivative Events)](https://aps.autodesk.com/en/docs/webhooks/v1/tutorials/create-a-hook-model-derivative/).

For more information about creating and managing webhooks, see the [Webhooks API documentation](https://aps.autodesk.com/en/docs/webhooks/v1/overview/).

## Handling Callbacks

When a Model Derivative event matching your webhook subscription occurs, APS sends an HTTP POST request to your application’s callback URL.

The request contains a JSON payload. The payload differs depending on the event, and your application must handle the appropriate payload. The event documentation provides the schema of the payload as well as an example.

Model Derivative supports the following webhook events:

| System | Event | Description |
| --- | --- | --- |
| `derivative` | [extraction.finished](https://aps.autodesk.com/en/docs/webhooks/v1/reference/callback/model_derivative_events/extraction.finished) | When a translation job is completed. |
| `derivative` | [extraction.updated](https://aps.autodesk.com/en/docs/webhooks/v1/reference/callback/model_derivative_events/extraction.updated) | When the status of a translation job is updated. |

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/webhooks
