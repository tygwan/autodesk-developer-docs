---
title: "FAQ"
url_path: developers_guide/faq
surface: guide
---
# Frequently Asked Questions

## Why can’t I retrieve data from my models using the AEC Data Model APIs?

It is possible that your models were not successfully extracted to the AEC Data Model due to the following reasons:
- You have not yet enabled your Forma Hub to extract to AEC Data Model.
- Your models are not Revit 2024 or later versions; as only Revit 2024 and later models are supported.
- Your model is still being extracted to the AEC Data Model and may take some time. To get the status of your extraction, please follow the below steps:  After your model is successfully published to Forma Data Management, note down the fileUrn you see for that model. You can find this fileUrn by clicking on the model to launch the viewer and selecting the value you see for entityid in the URL. Refer to file below.
- Use the elementGroupExtractionStatus query and provide the fileUrn you previously noted along with the version number of your model. Your request and response will be something like the following: **Query:**   query elementGroupExtractionStatus($fileUrn: ID!) { elementGroupExtractionStatus(fileUrn: $fileUrn) {status details   }   }

**Query Variables:**

“fileUrn”: “[urn:adsk.wipstg:dm.lineage:rDygXWbaQHyO5viTsEdPYQ](urn:adsk.wipstg:dm.lineage:rDygXWbaQHyO5viTsEdPYQ)”

}

**Response:**

“status”: “SUCCESS”,
“details”: “Extraction completed successfully.”

}

}

}

The `elementGroupExtractionStatus` query can be found here: [https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupextractionstatus/](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/elementgroupextractionstatus/)
- The query will promptly respond with one of three prebuilt status values: “In_Progress,” “Failed,” or “Success.”   Success: Indicates you should be able to query the elementgroups’ data using the AEC Data Model API.
- In_Progress: Indicates your extraction to AEC Data Model is still in progress and you should check back again later. Larger models could take up to minutes/hour.
- Failed: Indicates your extraction to AEC Data Model didn’t succeed. This could be due to various reasons such as your model was not Revit 2024 model or the backend may have run into an error due to either an unavailable service or unhandled exceptions.

In cases of failure, we recommend submitting a Problem Report with the errors in your API response along with your Hub ID and Project ID.
- If you have uploaded your models of Revit 2024 or later versions to Forma Data Management via Desktop Connecter, Docs API, and 3rd Party Plugins, then your models are not currently being extracted to AEC Data Model. This means that the data from these models is not accessible via the AEC Data Model API. This is a known limitation and we are actively working on resolving it.
- The backend may have run into an error due to either an unavailable service or unhandled exceptions. In such instances, we recommend sharing the errors in your API response along with your Hub ID and Project ID to the support team through [https://aps.autodesk.com/get-help](https://aps.autodesk.com/get-help).

## Why is filtering elements on some properties not working?

Most of the properties should be able to be resolved using referenceProperties and displayValue objects in our API. However, some properties that are enum properties are currently not supported for searching. Only “Element Context” enum property is supported for searching. For example, ‘property.name. Element Context’== Type (or Instance). This is a known limitation, and we are actively working on a solution. Please let us know where you are encountering this issue.

## Why is filtering elements by property name not working?

Filtering elements by property name can result in errors due to too many comparisons once translated to property IDs. Please refer to the “Special Considerations for PropertyName Filters” section in the [Special Considerations of Filtering](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/filtering/special-considerations-filtering) section for more information.

## How to maintain refresh tokens ?

External Databases can be used to maintain refresh tokens by implementing scheduled tasks that automatically update and refresh the tokens at regular intervals. Refresh tokens serve the purpose of obtaining new three-legged tokens without requiring users to repeat the sign in process. These refresh tokens remain valid for 14 days. In this [blog](https://aps.autodesk.com/blog/maintaining-refresh-tokens-mongodb-triggers). You can find an approach that uses MongoDB to store the user tokens in a collection and automate the token refresh process. For more understanding of the refresh token process, please refer to the [Authentication API documentation](https://aps.autodesk.com/apis-and-services/authentication).

## How to query data from ElementGroups hosted in regions other than the US?

For queries against data hosted in Forma hubs from regions other than the US, such as EMEA, you need to add the appropriate region header. If you don’t specify a value in the header for other regions, the US region will be used as it is the default. For more information about how to specify the custom header value, refer to the [GraphQL Endpoint](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/graphqlendpoint) topic.

![../../../_images/region_header.png](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/region_header.png)

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/faq
