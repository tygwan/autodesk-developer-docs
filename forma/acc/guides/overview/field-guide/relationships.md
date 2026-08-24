---
title: "Relationships"
url_path: overview/field-guide/relationships
surface: guide
---
# Relationships

## Containers vs. BIM 360 Projects

BIM 360 Data Services e.g. the Relationship Service use “Containers” as a primary data partition for all the service data associated with a specific Project and or Account. In the case of the Relationships Service, a container is created when a new BIM 360 Project is created. The application uses the BIM 360 Docs Project ID as the container GUID for the Relationships container.

## Domain Entities

The Relationship Service is built on the concept of Domain Entities. Put simply, a Domain Entity is something which can be identified in one of the applications which comprise BIM 360 today. Examples of Domain Entities include Issues, Files, Meetings, Check-lists etc.. Each of these things (or Entities) has three distinct attributes :-
- They belong to a Domain e.g. Budgets belong to the BIM 360 Cost domain (Application).
- The have an Entity Type which allows them to be distinguished from other types of entity in the Domain, e.g. a Budged is distinct from a Contract, however both these entity types belong to the Cost domain.
- They have a unique ID which allows them to be identified within the domain, in BIM 360 these are typically GUIDs or URNs and are often found as input variables to the various BIM 360 APIs.

## Domain Entity Relationships

Domain Entity Relationships are created by joining two domain entities together. This happens transparently to the user throughout the web and mobile application experience in BIM 360, for example when an issue is linked to an Asset in the Assets module or when Model Set Views are created in BIM 360 Model Coordination. A Domain Entity Relationship is no more than a unique ID (GUID) which can be used to discover a connection between Domain Entities. The diagram below illustrates the concept. Note that in the diagram numeric IDs have been used for entity IDs for simplicity, whereas typically IDs in BIM 360 are GUIDs or URNs.

In the example above there are five Relationships between five distinct Domain Entities which exist in two distinct domains (`modelcoordination` and `issues`).

| Relationship ID | Domain Entity | Domain Entity | Description |
| --- | --- | --- | --- |
| d9018d05-f23e-478f-8348-c5840785400a | issues-coordination-GUID(f00..ba1) | modelcoordination-documentlineage-urn:lineage.xyz | Issue … Model Coordination Clash Group Lineage |
| bbc1708e-8511-4d38-b80c-1a05f392bb6a | issues-coordination-GUID(f00..ba1) | modelcoordination-documentlineage-urn:lineage.abc | Issue … Model Coordination Clash Group Lineage |
| bf403b6f-075a-4160-8ee0-dfb7b172b330 | issues-coordination-GUID(f00..ba1) | modelcoordination-container-GUID(1fg..854) | Issue … Model Coordination Clash Group Container |
| 5908fd9b-4f0a-49bd-963a-8955f09ccfeb | issues-coordination-GUID(f00..ba1) | modelcoordination-scope-GUID(a53..0ed) | Issue … Model Coordination Clash Group Coordination Space |
| 095b1f99-1f08-4149-99aa-c03cf479dcc5 | issues-coordination-GUID(f00..ba1) | modelcoordination-clashgroup-GUID(a03..fed) | Issue … Model Coordination Clash Group |

## Relationship Querying

The starting point for interacting with the relationship service is either typically a search query, or a query for a specific entity (or set of entities) from another BIM 360 API (e.g. BIM 360 issues). In both these cases the objective is to find the other domain entities. It is important to remember relationships are bi-directional, there is no notion that a relationship can only be followed in a single direction. However the starting point for querying relationships does matter!

Using the example above, a query to the Relationship Service for the relationships between `domain:issues`, `entityType:coordination` `id:GUID(f00..ba1)` and other entities would return five relationships, i.e the issue specified in the search is related to five other entities in the model coordination domain. On the other hand a query for relationships between `domain:modelcoordination`, `entityType:clashgroup`, `id:GUID(a03..fed)` and other entities, would only yield a single relationship, i.e. the clash group specified in the query is only related to a singe entity, in this case a coordination issue in the issues domain. The full querying capabilities of the Relationship service can be explored further in the [Relationship Service API tutorial](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/relationships/relationships-tutorial).

## Relationship Security

The Relationship Service has a simple security model, all valid Project users have read access to the relationships stored in the project’s relationship container. There is no external domain security applied to relationships, ie. a valid project user can discover, via the relationship service, that a relationship exists between a specific issue and a specific RFI without having access to either of these entities. In this example the user will have obtained two GUIDs and understand the entity types they represent, however possession of this information does not automatically grant the user access to either of these two resources. This security model is based on the principal that relationships are no more or less sensitive than a URL. As with all information shared via APIs, the data in relationships can be shared outside the domain or potentially obtained by a malicious actor. This is a perfectly acceptable level of risk. As with URLs shared via email, when you try to access the resources participating in a relationship (e.g. calling the BIM 360 Issues API with an Issue GUID) the domain security model will kick in and the permissions controlling access the resource will be imposed.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/relationships
