---
title: "BIM 360 Compatibility"
url_path: overview/bim-360-compatibility/bim-360-compatibility
surface: guide
---
# BIM 360 Compatibility

In order to enable your current BIM 360 apps and integrations to be compatible with Forma projects, we have ensured that many BIM 360 endpoints are compatible with Forma. This makes it possible for you to access Forma projects and use your BIM 360 apps and integrations with compatible Forma APIs before new Forma APIs are available. Note that your existing apps and integrations to BIM 360 and PlanGrid will continue to function as-is for the foreseeable future.

See this [compatibility table](https://aps.autodesk.com/en/docs/acc/v1/overview/compatibility-table/) for information about which BIM 360 endpoints are forward-compatible with Forma projects.

## Forma Apps

Your BIM 360 apps will be automatically integrated with Forma. Currently, when you create a new app for a Forma hub, you need to integrate it in the BIM 360 Account Admin UI.

## PlanGrid Apps and Integrations

PlanGrid integrations and endpoints will not support the Forma platform. You will need to either migrate the integrations to the Forma APIs or to the BIM 360 forward-compatible APIs.

## Ensuring App Compatibility

A single Forma hub can contain both BIM 360 and Forma projects. You can tell the type of project by checking the icon next to the project in the UI.

Current BIM 360 apps may not be compatible with Forma projects. We recommend programmatically verifying the type of project at run time to prevent compatibility issues. See the [Verify the Project Type](https://aps.autodesk.com/en/docs/acc/v1/overview/table/retrieve-project-id/) tutorial for more information.

## Document Management

Almost all of the BIM 360 document-related APIs (BIM 360 Document Management API and Data Management API) are compatible with Forma. However, because there are some product feature differences between BIM 360 documents and Forma documents, the BIM 360 and Data Management endpoints do not support all of the new features. For more details about which features and functionality the BIM 360 and Data Management APIs support in Forma, see [BIM 360 and Forma Data Management](https://aps.autodesk.com/en/docs/acc/v1/overview/docs-compatibility/).

## Releasing New Forma APIs

We will keep you informed as we are able to share additional details on our Forma API development roadmap and timing, and our customer success and support team will work with you to take advantage of new capabilities when you are ready.

If you need answers to specific questions on the use of the Forma APIs or how to ensure your apps are compatible with both BIM 360 and Forma projects, we encourage you to reach out so you can learn details and get expert advice. Check out the [APS blog](https://aps.autodesk.com/blog) or drop us an [email](https://aps.autodesk.com/contact-support).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/bim-360-compatibility/bim-360-compatibility
