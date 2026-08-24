---
document_type: "api-group-index"
product: "Autodesk Forma"
surface: "forma-apis"
group: "Forms"
protocol: "REST"
language: "en"
generated: "true"
---

# Forms

[Forma APIs index](../../INDEX.md)

## Overview

- **Product:** Autodesk Forma
- **Surface:** Forma APIs
- **Protocol:** REST
- **Capabilities:** Create, retrieve, update, and organize project forms and form layouts.
- **Common path:** `/construction/forms`

## Endpoints

| Method | Path | Authentication | Scopes | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/construction/forms/v1/projects/{projectId}/form-templates` | user context required | data:read | [Returns all project’s form templates the user has access to](./endpoints/forms-form-templates-GET.md) |
| `POST` | `/construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms` | user context required | data:write | [Adds a new form to a project](./endpoints/forms-forms-POST.md) |
| `PATCH` | `/construction/forms/v1/projects/{projectId}/form-templates/{templateId}/forms/{formId}` | user context required | data:write | [Updates a form’s form details](./endpoints/forms-forms-formId-PATCH.md) |
| `GET` | `/construction/forms/v1/projects/{projectId}/forms` | user context required | data:read | [Returns a paginated list of forms in a project](./endpoints/forms-forms-(Deprecated)-GET.md) |
| `GET` | `/construction/forms/v1/projects/{projectId}/forms/{formId}/table/{fieldId}/values` | user context required | data:read | [Returns all row values from a specific table in a form](./endpoints/forms-get-table-values-GET.md) |
| `PUT` | `/construction/forms/v1/projects/{projectId}/forms/{formId}/values:batch-update` | user context required | data:write | [Updates a form’s main form fields, both tabular and non-tabular](./endpoints/forms-valuesbatch-update-(Deprecated)-PUT.md) |
| `GET` | `/construction/forms/v1/projects/{projectId}/layouts/{layoutId}` | user context required | data:read | [Returns layout information for a form template](./endpoints/forms-layouts-layoutId-(Beta)-GET.md) |
| `GET` | `/construction/forms/v2/projects/{projectId}/forms` | user context required | data:read | [Returns a paginated list of forms in a project](./endpoints/forms-forms-(New-Beta)-GET.md) |
| `GET` | `/construction/forms/v2/projects/{projectId}/forms/{formId}/values` | user context required | data:read | [Returns all form field values (custom values / question values) on the form](./endpoints/forms-custom-values-(Beta)-GET.md) |
| `POST` | `/construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-delete` | user context required | data:write | [This API currently only deletes form values from tabular fields](./endpoints/forms-valuesbatch-delete-(Beta)-POST.md) |
| `PUT` | `/construction/forms/v2/projects/{projectId}/forms/{formId}/values:batch-update` | user context required | data:write | [Updates a form’s main form fields, both tabular and non-tabular](./endpoints/forms-valuesbatch-update-(New-Beta)-PUT.md) |
| `GET` | `/construction/forms/v2/projects/{projectId}/layouts/{layoutId}/sections/{sectionId}` | user context required | data:read | [Returns detailed information about a specific section within a form layout](./endpoints/forms-sections-sectionId-(Beta)-GET.md) |
| `GET` | `/construction/forms/v3/projects/{projectId}/weather/{weatherId}` | user context required | data:read | [Returns weather data for a specific weather record associated with a project](./endpoints/forms-get-weather-data-for-a-project-GET.md) |

## Machine-readable specification

- [OpenAPI 3.1](./openapi.yaml)
