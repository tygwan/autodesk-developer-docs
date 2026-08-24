---
title: "Introduction"
url_path: overview/introduction
surface: guide
---
# Forma APIs

The unified Forma APIs allow developers to develop apps that integrate with Forma to extend its capabilities in the construction ecosystem. Forma is Autodesk’s new unified construction management software. For more information about Forma, see the [Forma](https://construction.autodesk.com/) website.

We currently offer the following APIs:
- The **Assets API** creates and manages assets in the Forma Assets service. Use it to define the settings such as categories, custom attributes, and sets of statuses that are required to define assets, and then to create and modify assets within those settings. The API offers powerful search tools to retrieve specific sets of assets and other components, and it can modify both assets and the settings that define those assets.
- The **AutoSpecs API** provides access to draft submittal logs that are extracted from construction project specification documents.
- The **Classifications API (beta)** provides access to classification structures in Forma. Classification structures are hierarchical frameworks that enable data to be organized and classified consistently across projects, tools, and workflows. Use the API to import and version classification structures, retrieve structure metadata, and retrieve nodes from the latest published version of a structure.
- The **Cost Management API** provides access to the data stored in the Forma Cost Management module. It enables you to manage cost and budget changes to your projects, such as accessing budget, contract, and change order information. For example, you can extract budget data to export to external systems and import the data back to the Forma Cost Management module.
- The **Data Connector API** retrieves data from Forma services such as Admin (both Project and Hub), Issues, Locations, Submittals, Cost, and RFIs so the data can be used for local data analysis and other purposes. It works across multiple projects within a hub, can set up data reporting on a regular schedule, and returns data in a format easily used by business intelligence tools.
- The **Files API** lets you upload, access, and share 2D plans, 3D BIM models, and other project documents, as well as create packages to maximize collaboration. Note that the Files API is part of the [Data Management API](https://aps.autodesk.com/en/docs/data/v2/).
- The **Forms API** provides access to the data stored in the Forma Forms module. The Forms tool enables your team to securely fill out, review, and manage project forms.
- The **Hub Admin API** automates creating and managing projects, assigning and managing project users, and managing member and partner company directories. You can also synchronize data with external systems.
- The **Issues API** creates and updates issues in your Forma projects. An issue is an item that is created in Forma for tracking, managing and communicating tasks, problems and other points of concern through to resolution. You can manage different types of issues, such as design, safety, and commissioning. We currently support issues that are associated with a project.
- The **Locations API** enables you to configure the hierarchy (tree) of building areas (locations) in your project. A locations tree is commonly known as a _location breakdown structure_ (LBS). With an LBS, users can identify the location associated with each of a project’s Assets, Issues, Photos, Forms, RFIs, and Submittals.
- The **Model Coordination API** provides full access to the set of services used by the Forma Model Coordination web application. It enables users to detect and manage the issues that arise when 3D models from different design disciplines are combined into a unified project coordination space.
- The **Photos API** provides access to the data stored in the Forma Photos module. The Photos tool is the single unified place to view and manage photos and videos in Forma.
- The **Relationships API** creates, retrieves, and deletes links between entities across domains in Forma.
- The **Reviews API** provides access to data related to reviews in Forma projects, including approval workflows, review metadata, and file versions currently under review. Use it to check review progress, approval statuses, and file-level review outcomes. It also allows you to create approval workflows and review instances.
- The **RFIs API** allows you to create, track, and update RFIs (Requests for Information). An RFI is a formal question raised by one project member to another—often to clarify design intent, such as by an architect. The API supports the full RFI workflow: assigning members, transitioning between RFI states, adding comments, and submitting both responses and official responses. You can also attach files to responses and official responses. Attachments are supported for Forma RFIs, but pushpin RFIs—those linked to specific document locations—are not supported in Forma. For more details, see the [help documentation](https://help.autodesk.com/view/BIM360D/ENU/?guid=topicid=GUID-913C2675-77DA-471F-98AF-71C4E182EB04).
- The **Sheets API** publishes and distributes sheets for use in the field. We currently support managing sheets and version sets, as well as uploading, publishing, and exporting sheets.
- The **Submittals API** enables you to create submittal items and provides read access to the data stored in the [Forma Submittals module](https://help.autodesk.com/view/BUILD/ENU/?guid=Submittals_Overview).
- The **Takeoff API** retrieves settings, classification systems, packages, takeoff types, takeoff items and content views associated with a takeoff project. It’s also possible to update settings, create and update packages, create, update, delete and reimport classifications.
- The **Transmittals API** provides read-only access to transmittals in Forma projects, including transmittal details, folders, documents, and recipients.

## Releasing New Forma APIs

We will keep you informed as we are able to share additional details on our Forma API development roadmap and timing, and our customer success and support team will work with you to take advantage of new capabilities when you are ready.

If you have specific questions about using the Forma APIs or migrating your BIM 360 apps to be compatible with Forma, we encourage you to [contact support](https://aps.autodesk.com/get-help). You can also check out the [APS blog](https://aps.autodesk.com/blog) or [subscribe to our newsletter](https://aps.autodesk.com/#newsletter) for updates and guidance.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/introduction
