<div align="center">

# Autodesk Developer Documentation Archive

Find the Autodesk API or SDK you need, follow the source, and keep every answer traceable.

[한국어](./README.ko.md) · [Machine catalog](./CATALOG.json) · [Change history](./CHANGELOG.md)

<sub>Source-faithful snapshots · Stable paths · Provenance metadata</sub>

</div>

> [!NOTE]
> This is an unofficial, source-faithful archive of the [Autodesk Platform Services API & SDK Documentation](https://aps.autodesk.com/developer/documentation) catalog. **Local docs** opens a versioned snapshot in this repository; **Official source only** opens Autodesk documentation that is not available locally.

## AI coding-agent entrypoint

This repository is both a versioned documentation archive and a Claude Code/Codex plugin. The bundled [`autodesk-api-implementer`](./skills/autodesk-api-implementer/SKILL.md) workflow activates automatically for Autodesk developer API or SDK implementation, planning, review, and troubleshooting. Ask naturally; the user does not need to name the workflow.

If you are an AI agent working from this repository:

1. Open `CATALOG.json` first and select the product, surface, version, interface, and runtime that match the request.
2. Inspect the target project's dependencies and existing authentication code before asking for information that may already be present.
3. Use README and INDEX files only to route. Support consequential methods, paths, SDK symbols, fields, scopes, and constraints with leaf documents.
4. After selecting a surface, restrict file listings and searches to its cataloged `path`. Expand only for a concrete authentication, input/output, identifier, or runtime dependency.
5. Keep version, protocol or SDK language, runtime, region, and authentication context attached to every finding. Do not merge facts across surfaces.
6. Treat local documentation as snapshot evidence, not proof of current service availability. For latest behavior, status, pricing, entitlement, or availability, verify the current official Autodesk source and distinguish it from the snapshot.

### Install from a checkout

Run the commands from the repository root, then start a new conversation so the client reloads the plugin metadata.

**Codex**

```powershell
codex plugin marketplace add .
codex plugin add autodesk-developer-docs@autodesk-developer-docs
```

**Claude Code**

```powershell
claude plugin marketplace add --scope user .
claude plugin install --scope user autodesk-developer-docs@autodesk-developer-docs
```

## Explore the archive

- **[Authentication API](./authentication/README.md)** · `OAuth 2.0`<br>
  Choose an app type and OAuth flow, obtain tokens, and understand scopes.
- **[Data Management API](./data-management/README.md)** · `REST` `TypeScript` `.NET`<br>
  Navigate hubs, projects, folders, items, and versions; manage object storage and uploads.
- **[Model Derivative API](./model-derivative/README.md)** · `REST` `TypeScript` `.NET`<br>
  Translate design files and work with manifests, metadata, properties, and derivatives.
- **[Viewer SDK](./viewer/README.md)** · `JavaScript` `Browser`<br>
  Load and interact with 2D or 3D viewables, extensions, UI, and rendering.
- **[Autodesk Forma](./forma/README.md)** · `REST` `GraphQL` `TypeScript`<br>
  Work across Forma APIs, the AEC Data Model, and Site Design or Embedded View capabilities.

A common model-to-browser route is `Authentication → Data Management → Model Derivative → Viewer`. Use only the layers your source system and task require.

## Designed for reliable answers

- **Discover:** `CATALOG.json` separates products, surfaces, interfaces, versions, and document kinds.
- **Verify:** leaf documents preserve published values and link back to provenance under `_meta/`.
- **Compare:** stable paths and deterministic indexes make documentation changes reviewable in Git.

## Documentation catalog

Captured documentation is visible at a glance. Open the section below only when you need an Autodesk product that has not yet been archived.

| Autodesk documentation | Local docs |
| --- | --- |
| [AEC Data Model API](https://aps.autodesk.com/developer/overview/aec-data-model-api) | [Browse docs](./forma/aec-data-model/INDEX.md) |
| [Authentication API](https://aps.autodesk.com/developer/overview/authentication-api) | [Browse docs](./authentication/README.md) |
| [Autodesk Forma APIs](https://aps.autodesk.com/developer/overview/forma) | [Browse docs](./forma/README.md) |
| [Data Management API](https://aps.autodesk.com/developer/overview/data-management-api) | [Browse docs](./data-management/README.md) |
| [Model Derivative API](https://aps.autodesk.com/developer/overview/model-derivative-api) | [Browse docs](./model-derivative/README.md) |
| [Viewer SDK](https://aps.autodesk.com/developer/overview/viewer-sdk) | [Browse docs](./viewer/README.md) |

<details>
<summary><strong>Show documentation not yet archived</strong></summary>

These entries link to official Autodesk sources and are not available as local snapshots.

| Official Autodesk documentation | Availability |
| --- | --- |
| [3ds Max SDK](https://aps.autodesk.com/developer/overview/3ds-max-api) | Official source only |
| [Advance Steel](https://help.autodesk.com/view/ADSTPR/2025/ENU/?guid=GUID-C1C93611-F166-4F43-A308-53E4134542D0) | Official source only |
| [Alias APIs](https://aps.autodesk.com/developer/overview/alias-api) | Official source only |
| [Application Management API](https://aps.autodesk.com/developer/overview/application-management-api) | Official source only |
| [Arnold API](https://docs.arnoldrenderer.com/api/arnold-7.1.3.0/index.html) | Official source only |
| [AutoCAD APIs and SDKs](https://aps.autodesk.com/developer/overview/autocad) | Official source only |
| [AutoCAD Architecture and MEP](https://aps.autodesk.com/developer/overview/autocad-architecture-and-mep) | Official source only |
| [AutoCAD Electrical API](https://aps.autodesk.com/developer/overview/autocad-electrical-api) | Official source only |
| [AutoCAD Map 3D](https://aps.autodesk.com/developer/overview/autocad-map-3d) | Official source only |
| [AutoCAD Map 3D ObjectARX SDK](https://aps.autodesk.com/developer/overview/autocad-map-3d-objectarx-sdk) | Official source only |
| [AutoCAD Mechanical SDK and APIs](https://aps.autodesk.com/developer/overview/autocad-mechanical) | Official source only |
| [AutoCAD ObjectARX SDK](https://aps.autodesk.com/developer/overview/autocad-objectarx-sdk) | Official source only |
| [AutoCAD OEM](https://aps.autodesk.com/developer/overview/autocad-oem) | Official source only |
| [AutoCAD Plant 3D P&ID](https://aps.autodesk.com/developer/overview/autocad-plant-3d-and-pid) | Official source only |
| [Autodesk CFD APIs](https://help.autodesk.com/view/SCDSE/2024/ENU/?guid=GUID-B56DEB46-56B0-4AB6-9BA9-380E2A208065) | Official source only |
| [Autodesk Datum APIs](https://aps.autodesk.com/developer/overview/datum360-api) | Official source only |
| [Autodesk Fusion APIs](https://aps.autodesk.com/developer/overview/autodesk-fusion-360-api) | Official source only |
| [Autodesk Fusion Manage APIs](http://help.autodesk.com/view/PLM/ENU/) | Official source only |
| [Automation API](https://aps.autodesk.com/developer/overview/automation-api) | Official source only |
| [BIM 360 APIs](https://aps.autodesk.com/developer/overview/bim-360-api) | Official source only |
| [BuildingConnected and TradeTapp APIs](https://aps.autodesk.com/developer/overview/buildingconnected-and-tradetapp-apis) | Official source only |
| [Business Success Plan Reporting API](https://aps.autodesk.com/developer/overview/business-success-plan-reporting-api) | Official source only |
| [Civil 3D APIs and SDKs](https://aps.autodesk.com/developer/overview/civil-3d) | Official source only |
| [Content Catalog API](https://aps.autodesk.com/developer/overview/content-catalog-api) | Official source only |
| [Data Exchange API](https://aps.autodesk.com/developer/overview/data-exchange) | Official source only |
| [Data Visualization Extension](https://aps.autodesk.com/en/docs/dataviz/v1/developers_guide/introduction/overview/) | Official source only |
| [Factory Design Utilities](https://help.autodesk.com/view/FDU/2025/ENU/?guid=FDU_API_Application_Programming_html) | Official source only |
| [FBX SDK](https://aps.autodesk.com/developer/overview/fbx-sdk) | Official source only |
| [Flame SDK](https://aps.autodesk.com/developer/overview/wiretap) | Official source only |
| [Flow Capture API](https://help.moxion.io/article/234-api-documentation) | Official source only |
| [Flow Graph Engine API](https://aps.autodesk.com/developer/overview/flow-graph-engine-api) | Official source only |
| [Flow Production Tracking API](https://help.autodesk.com/view/SGDEV/ENU/) | Official source only |
| [FormIt](https://windows.help.formit.autodesk.com/plugins/useful-links) | Official source only |
| [Fusion Operations API](https://aps.autodesk.com/developer/overview/fusion-operations-api) | Official source only |
| [Informed Design API](https://aps.autodesk.com/developer/overview/informed-design-api) | Official source only |
| [InfraWorks](https://help.autodesk.com/view/INFMDR/ENU/?guid=new) | Official source only |
| [Inventor APIs and SDKs](https://aps.autodesk.com/developer/overview/inventor) | Official source only |
| [Inventor OEM](https://aps.autodesk.com/developer/overview/inventor-oem) | Official source only |
| [M&E Data Model API](https://aps.autodesk.com/developer/overview/me-data-model-api) | Official source only |
| [Machine Translation API](https://aps.autodesk.com/developer/overview/machine-translation-api) | Official source only |
| [Manufacturing Data Model API](https://aps.autodesk.com/developer/overview/manufacturing-data-model-api) | Official source only |
| [Maya APIs and SDKs](https://aps.autodesk.com/developer/overview/maya) | Official source only |
| [Moldflow API](https://help.autodesk.com/view/MFIA/2025/ENU/?guid=GUID-853E86EF-7294-424D-81AE-E38130C237A4) | Official source only |
| [MotionBuilder API](https://aps.autodesk.com/developer/overview/motionbuilder) | Official source only |
| [Mudbox SDK](https://aps.autodesk.com/developer/overview/mudbox) | Official source only |
| [Navisworks](https://aps.autodesk.com/developer/overview/navisworks) | Official source only |
| [Parameters API](https://aps.autodesk.com/developer/overview/parameters-api) | Official source only |
| [Partner Web Services](https://partner.developer.autodesk.com/) | Official source only |
| [RealDWG SDK](https://aps.autodesk.com/developer/overview/realdwg-oem) | Official source only |
| [Reality Capture API](https://aps.autodesk.com/developer/overview/reality-capture-api) | Official source only |
| [Reality Solutions SDK](https://aps.autodesk.com/developer/overview/reality-solutions-sdk) | Official source only |
| [Revit APIs and SDKs](https://aps.autodesk.com/developer/overview/revit) | Official source only |
| [Robot Structural Analysis Professional](https://help.autodesk.com/view/RSAPRO/2025/ENU/?guid=GUID-7887A433-FC8B-4BAA-B35E-CF6CC1F46AA4) | Official source only |
| [Secure Service Account API](https://aps.autodesk.com/en/docs/ssa/v1/developers_guide/overview/) | Official source only |
| [Structural Bridge Design](https://help.autodesk.com/view/SBRDES/ENU/?guid=ASBD_InProdEU_automation_Overview_html) | Official source only |
| [Sustainability Data API](https://aps.autodesk.com/developer/overview/sustainability-data-api) | Official source only |
| [Tandem Data API](https://aps.autodesk.com/developer/overview/tandem-data-api) | Official source only |
| [Token Flex API](https://aps.autodesk.com/developer/overview/token-flex-api) | Official source only |
| [Upchain API](https://help.autodesk.com/view/UPCHN/ENU/?guid=UC_API_GET_STARTED) | Official source only |
| [User Profile API](https://aps.autodesk.com/developer/overview/user-profile-api) | Official source only |
| [Vault API](https://aps.autodesk.com/developer/overview/vault) | Official source only |
| [Vault Data API](https://aps.autodesk.com/developer/overview/vault-data-api) | Official source only |
| [VRED APIs](https://aps.autodesk.com/developer/overview/vred-apis) | Official source only |
| [Webhooks API](https://aps.autodesk.com/developer/overview/webhooks-api) | Official source only |
| [Wiretap SDK](https://aps.autodesk.com/developer/overview/wiretap) | Official source only |

</details>
