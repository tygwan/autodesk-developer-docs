---
title: "Overview"
url_path: developers_guide/overview
surface: guide
---
# AEC Data Model API

![../../../_images/devloper_guide01.png](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/devloper_guide01.png)

The AEC Data Model API, is a GraphQL-based API that provides the ability to directly interact with granular AEC data in the cloud without the need of building custom plug-ins for the desktop authoring tools like Revit, Civil 3D, Plant3D and other AEC connected design applications.

At launch, the API is read-only for querying elements and their properties data from published Revit 2024 and later version models.

The value of the AEC Data Model extends beyond providing granular data. It offers an intuitive and consistent data navigation experience through tailored APIs within the AEC domain. With these APIs, you can seamlessly explore your Hub, Projects, Folders, Files, and delve deep into detailed AEC data, including elements and parameters.

The AEC Data Model is designed to cater to the entire AEC Project Lifecycle, from Conceptual Design to Construction and Operations. It is part of a family of Autodesk Data Models provided by Autodesk to cater to diverse industries. Similar data models are developed for the Manufacturing and Media & Entertainment industries.

## About AEC Data Model

AEC Data Model is a set of capabilities that breaks up monolithic AEC files, such as .rvt files, into valuable, granular data that are managed securely in the cloud platform. This granular, object-level data is then made accessible through easy-to-use APIs, resulting in good user experience.

Over time, the AEC Data Model API capabilities will be enhanced to enable developers to read, write, and extend subsets of models through cloud-based workflows through a single interface without the need to write custom plug-ins for individual desktop authoring applications. Our mission with the AEC Data Model is to support iterative and distributed customer workflows, spanning multiple experiences and capabilities, supporting the delivery of complex requirements of projects in today’s growing industry. Enhancing the accessibility and interoperability of AEC data starts with structuring it so that it can be mapped and connected across systems, which is a key capability that our AEC Data Model APIs enable.

AEC Data Model is built on three design principles:
- **Extensible**: This data model will allow you to add your own classifications to reflect their workflows by adding custom data using basic and common data currencies.
- **Flexible**: Flexibility is achieved through the different ways in which data can be related and categorized. For instance, a glass wall in a conference room may be regarded as both a window and a wall, such that it can be included both in the window schedule and as a room in the building’s specifications.
- **Federated**: In addition to Properties, the AEC Data Model can store other data models, such as Analytical and Structural Models, Issues, Drawings, and Requests for Information, although these data models are not yet included in this.

To adhere to these principles, AEC Data Model has taken inspiration from the [Entity Component System (ECS)](https://en.wikipedia.org/wiki/Entity_component_system) design concept, which is primarily used in game engines for its flexibility. As such, AEC Data Model introduces new concepts and constructs in a canonical form to encompass all of AEC design-and-make data, irrespective of the authoring application.

## Common uses

The AEC Data Model API exposes these capabilities through a user-friendly GraphQL interface tailored to the AEC industry. You can programmatically:
- Navigate to your Forma hub(s), project(s), and design(s) to retrieve granular data such as elements, parameters, and their values.
- Retrieve the different versions of a design and query for elements at specific design version.
- Search for elements within a design or across designs within a project or hub using specified search criteria.
- List all available property definitions in a design or project.
- Query elements based on their properties such as Categories (doors, windows, pipes, etc.) OR Parameter Name + Value (Area, Volume, etc.).
- Query for unique values of a parameter in a design.
- Retrieve geometry representations for elements (including axis, origin, and binary payloads where available); see the [Retrieve Geometry Data](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/geometry/geometry_query) tutorials and [geometryDataByElement](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/geometrydatabyelement) / [geometryDataByElements](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/queries/geometrydatabyelements) in the reference.
- Extend element data with custom properties using extensibility mutations; see [Extensibility of Element Data](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/extend_element_data/create_property_definition) and the [Mutations](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/mutations/addextensionpropertiestoelements) section of the reference.

The first instalment of the AEC Data API enables:
- Automation of workflows like identifying anomalies within design files for better quality control, locating null/missing data.
- Generation of quantity takeoffs, schedules, procurement dashboards, reports and so on.
- Web apps to visualize and engage with granular elements - properties and compare changes between different versions of a design.

## Next steps

Firstly, **Activate** your Forma Hub to enable extraction to the AEC Data Model. To do this, contact your Forma Hub Administrator and request that they enable your Forma Hub for the AEC Data Model by following the steps provided. For more information, see - [AEC Data Model Onboarding](https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/onboarding).
- Get started with our [How-to Guide](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials) that are based on typical AEC Data Model API workflows.
- Explore our [Code Samples](https://aps.autodesk.com/en/docs/aecdatamodel/v1/code_samples/code-samples) that provide more complex, fully functioning, Github-based example applications.
- Refer to the [Reference Guide](https://aps.autodesk.com/en/docs/aecdatamodel/v1/reference/graphqlendpoint) section, which will give you in-depth information to refine and create your own custom solutions.

# Terms of service

AEC Data Model API is subject to [APS Terms of Services.](https://www.autodesk.com/company/legal-notices-trademarks/terms-of-service-autodesk360-web-services/forge-platform-web-services-api-terms-of-service)

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/overview
