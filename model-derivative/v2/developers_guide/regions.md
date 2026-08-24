---
title: "GDPR Compliance"
url_path: developers_guide/regions
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "regions"
---
# GDPR Compliance

The General Data Protection Regulation (GDPR) is a set of rules that protect the digital privacy of the citizens of the European Union (EU). Businesses and organizations serving users in Europe are legally required to comply with GDPR. Accordingly, Autodesk serves users in the Europe, Middle East, and Africa (EMEA) region from a dedicated data center that is physically separated from the US data center.

If you are a user in the EMEA region, the physical storage of your files is bound by GDPR regulations. You must always save the derivative data you generate in a data center that exclusively serves the EMEA region. They can be specified using the following values for the `region` header:
- `EMEA`: Saves derivative data in data centers that exclusively serve the EMEA region
- `DEU`: Saves derivative data in data centers that exclusively serve Germany (EMEA sub-region, GDPR governed)
- `GBR`: Saves derivative data in data centers that exclusively serve the United Kingdom (EMEA sub-region, GDPR governed)

## Generating EMEA specific derivatives

There are three ways to generate EMEA specific derivative data:
- Generate derivative data using the global URI for the [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST) operation, together with the `region` header set to `EMEA`.
- Generate derivative data using the EMEA specific URI for the same operation. If you use the EMEA URI with the `region` header set to `US`, the system ignores the `region` header. We recommend that you the use the global URI together with the `region` header because it can be enhanced to support more regions. The EMEA URI is supported only for backward compatibility.
- Generate derivative data by following a [BIM 360](https://aps.autodesk.com/en/docs/bim360/v1/overview/basics/) workflow. The settings in your BIM360 project ensures that your derivative data is stored in the appropriate region.

## Accessing EMEA specific derivatives

There are two ways to access derivatives stored in an EMEA data center.
- Using the global URI of an operation together with the `region` header set to `EMEA`. We recommend this option because it can support more regions than what is supported today.
- Using the EMEA specific URI of an operation.

If you are using the Viewer SDK to render a model, and the SVF2/SVF format data was generated using the first two options, you must initialize the Viewer SDK using EMEA specific parameters. Refer to the [Viewer Initializer documentation](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/#initializer-options-callback) for more details.

## Potential problems with regions

If you submit two [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST) requests for the same source design with different values for the `region` header, the system creates two distinct sets of manifests and derivatives. For example, calling [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST) twice, once with `US` and the other with `EMEA` as the region header, one set of derivatives will be stored in the US region and the other in EMEA.

When you access derivative data, if you do not specify the `region` header correctly, the system will attempt to fetch data from the wrong region. So, if you receive a `404` error when accessing derivative data, first check if the source `URN` is correct. If yes, check the `region` header.

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/regions
