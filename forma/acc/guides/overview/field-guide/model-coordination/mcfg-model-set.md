---
title: "Model Sets"
url_path: overview/field-guide/model-coordination/mcfg-model-set
surface: guide
---
# Model Coordination Model Sets

## Containers vs. BIM 360 Projects

BIM 360 Data Services (including Model Coordination Services) use containers as the primary data partition for all service data associated with a specific project or account. There does not need to be a 1:1 relationship between containers and projects: a container can hold data for multiple projects associated with an account. However, for all practical purposes, there typically is a 1:1 relationship. For Model Coordination, a container is created as needed when Model Coordination Project Administrators use the BIM 360 Model Coordination Web Application to configure a project’s first model set. The application uses the BIM 360 Docs Project ID as the container GUID for the model coordination container.

## Model Set

A _Model Set_ is the _unit of coordination_ in BIM 360 Model Coordination. It is defined as a BIM 360 Docs Folder URN. Model sets define access control permissions to BIM 360 Model Coordination. Model sets also dictate the creation of model set versions. Before explaining model set versions in more detail, it is helpful to understand how BIM 360 Docs Project and Folder permissions are used for Model Coordination access control. The following table summarizes how BIM 360 document management permissions equate to model set permissions.

| Docs Folder Permission | Model Set Permission |
| --- | --- |
| Upload - only | None |
| View - only | Model Set Read |
| View + Upload | Model Set Read |
| View + Upload + Edit + Control | Model Set Edit |

No explicit management of model set permissions is necessary. The Model Coordination Model Set service automatically maintains model set access controls by reading the permissions configured via BIM 360 Document Management.

## Model Set Versions

Once you define a model set, the Model Coordination Model Set service automatically creates model set versions to represent the current state of the content in the model set. A model set version is a collection of 3D design document versions stored in the folder associated with a given model set (or any of its sub-folders) at a given point in time. Once calculated, this set is persisted by the Model Set service and is then available for use in coordination workflows (for example, clash detection).

The system creates a new model set version when it receives a _Folder Changed_ event from BIM 360 Docs and samples the documents as users upload, move, delete, and copy content to and from folders. Each unique document added to the model set is considered a document _lineage_. Each revision to the document is a sequential component of the document lineage. This is illustrated in the following diagram.

The system continually receives _Folder Changed_ events from BIM 360 Docs. In response to these events, the Model Set service first checks to see if the folder referenced in the notification is contained in any model sets configured by users of the system. If the folder is not participating in a model set, then no further processing is required. If the folder is participating in one or more model sets, the Model Set service calculates and persists the document version list for each model set. It does this by recursively scanning the set of folders in each model set to find the tip (latest) version of the 3D model documents encompassed by the folders included in the model set definition.

The diagram above also illustrates a limitation of the current implementation of the Model Set service: not every combination of the latest document versions make it into a specific model set version. BIM 360 Docs is a multi-user system. At any point in time, multiple users can be changing the content of individual folders in a project. It is possible for a user to change the composition of a folder in a model set _after_ the Model Set service has scanned it for its latest document versions, but _before_ the model set version is persisted by the service. The Model Set service does not abandon a model set version if it receives a new _Folder Changed_ notification in the middle of processing a new model set version; instead, the signal is temporarily ignored until the current model set version folder scan is complete.

Practically speaking, model set versions are serialized for a model set. In other words, for any given model set, a new document version scan cannot start until the preceeding scan is finished. However, the Model Set service does guarantee the model set will become _eventually consistent_ with the tip versions of the documents in the system, when users stop changing folder content. The time this takes is dependent on the size of a project and the number of users making changes to the model content in the project through time.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/model-coordination/mcfg-model-set
