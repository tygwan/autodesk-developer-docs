<div align="center">

# Autodesk 개발자 문서 아카이브

필요한 Autodesk API·SDK를 찾고, 원문까지 따라가며, 답변의 근거를 남길 수 있는 개발 문서 아카이브

[English](./README.md) · [기계 판독형 카탈로그](./CATALOG.json) · [변경 이력](./CHANGELOG.md)

<sub>원문 충실성 · 안정적인 경로 · 출처 추적 메타데이터</sub>

</div>

> [!NOTE]
> 이 저장소는 [Autodesk Platform Services API & SDK Documentation](https://aps.autodesk.com/developer/documentation) 카탈로그를 원문에 충실하게 보관한 비공식 아카이브입니다. **로컬 문서**는 이 저장소의 버전 스냅샷을 열고, **공식 원문만 연결**은 아직 이 저장소에 없는 Autodesk 문서를 엽니다.

## AI 코딩 에이전트 시작점

이 저장소는 버전이 지정된 문서 아카이브이자 Claude Code/Codex 플러그인입니다. 포함된 [`autodesk-api-implementer`](./skills/autodesk-api-implementer/SKILL.md) 워크플로는 Autodesk 개발자 API·SDK 구현, 계획, 검토, 문제 해결 요청에 자동으로 활성화됩니다. 자연어로 요청하면 되며 사용자가 워크플로 이름을 지정할 필요는 없습니다.

이 저장소에서 작업하는 AI 에이전트는 다음 순서를 따릅니다.

1. 먼저 `CATALOG.json`을 열고 요청에 맞는 제품, 문서군, 버전, 인터페이스, 실행 환경을 선택합니다.
2. 이미 확인할 수 있는 정보를 다시 묻기 전에 대상 프로젝트의 의존성과 기존 인증 코드를 살펴봅니다.
3. README와 INDEX는 탐색에만 사용합니다. 중요한 메서드, 경로, SDK 심벌, 필드, scope, 제약은 leaf 문서로 뒷받침합니다.
4. 문서군을 선택한 뒤에는 카탈로그의 해당 `path` 안에서만 파일을 나열하고 검색합니다. 구체적인 인증, 입출력, 식별자 또는 실행 환경 의존성이 있을 때만 범위를 넓힙니다.
5. 버전, 프로토콜 또는 SDK 언어, 실행 환경, 리전, 인증 맥락을 각 근거와 함께 유지하고 서로 다른 문서군의 사실을 합치지 않습니다.
6. 로컬 문서는 스냅샷 근거이며 현재 서비스 제공 여부를 보장하지 않습니다. 최신 동작, 상태, 가격, entitlement 또는 제공 여부를 묻는다면 현재 Autodesk 공식 원문을 확인하고 스냅샷과 구분합니다.

### 체크아웃한 저장소에서 설치

저장소 루트에서 다음 명령을 실행한 뒤, 클라이언트가 플러그인 메타데이터를 다시 불러오도록 새 대화를 시작합니다.

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

## 아카이브 둘러보기

- **[Authentication API](./authentication/README.ko.md)** · `OAuth 2.0`<br>
  앱 유형과 OAuth 흐름을 선택하고 토큰과 scope를 이해합니다.
- **[Data Management API](./data-management/README.ko.md)** · `REST` `TypeScript` `.NET`<br>
  허브·프로젝트·폴더·항목·버전을 탐색하고 객체 저장소와 업로드를 다룹니다.
- **[Model Derivative API](./model-derivative/README.ko.md)** · `REST` `TypeScript` `.NET`<br>
  설계 파일을 변환하고 manifest·메타데이터·속성·파생 결과를 다룹니다.
- **[Viewer SDK](./viewer/README.ko.md)** · `JavaScript` `Browser`<br>
  브라우저에서 2D·3D viewable을 표시하고 extension·UI·렌더링을 확장합니다.
- **[Autodesk Forma](./forma/README.ko.md)** · `REST` `GraphQL` `TypeScript`<br>
  Forma API·AEC Data Model·Site Design·Embedded View의 개발 경로를 탐색합니다.

모델을 브라우저에 표시하는 일반적인 경로는 `Authentication → Data Management → Model Derivative → Viewer`입니다. 원본 시스템과 작업에 필요한 계층만 선택하세요.

## 신뢰할 수 있는 답변을 위한 구조

- **탐색:** `CATALOG.json`은 제품·문서군·인터페이스·버전·문서 종류를 구분합니다.
- **검증:** leaf 문서는 게시된 값을 보존하고 `_meta/`의 출처 정보로 이어집니다.
- **비교:** 안정적인 경로와 결정적으로 생성한 INDEX를 통해 Git에서 문서 변화를 검토할 수 있습니다.

## 문서 카탈로그

보관된 문서는 바로 표시합니다. 아직 보관하지 않은 Autodesk 제품은 아래 목록을 열어야 볼 수 있습니다.

| Autodesk 문서 | 로컬 문서 |
| --- | --- |
| [AEC Data Model API](https://aps.autodesk.com/developer/overview/aec-data-model-api) | [문서 보기](./forma/aec-data-model/INDEX.md) |
| [Authentication API](https://aps.autodesk.com/developer/overview/authentication-api) | [문서 보기](./authentication/README.ko.md) |
| [Autodesk Forma APIs](https://aps.autodesk.com/developer/overview/forma) | [문서 보기](./forma/README.ko.md) |
| [Data Management API](https://aps.autodesk.com/developer/overview/data-management-api) | [문서 보기](./data-management/README.ko.md) |
| [Model Derivative API](https://aps.autodesk.com/developer/overview/model-derivative-api) | [문서 보기](./model-derivative/README.ko.md) |
| [Viewer SDK](https://aps.autodesk.com/developer/overview/viewer-sdk) | [문서 보기](./viewer/README.ko.md) |

<details>
<summary><strong>아직 보관하지 않은 문서 보기</strong></summary>

아래 항목은 Autodesk 공식 원문으로 연결되며 로컬 스냅샷은 아직 없습니다.

| 보관 전 Autodesk 문서 | 상태 |
| --- | --- |
| [3ds Max SDK](https://aps.autodesk.com/developer/overview/3ds-max-api) | 공식 원문만 연결 |
| [Advance Steel](https://help.autodesk.com/view/ADSTPR/2025/ENU/?guid=GUID-C1C93611-F166-4F43-A308-53E4134542D0) | 공식 원문만 연결 |
| [Alias APIs](https://aps.autodesk.com/developer/overview/alias-api) | 공식 원문만 연결 |
| [Application Management API](https://aps.autodesk.com/developer/overview/application-management-api) | 공식 원문만 연결 |
| [Arnold API](https://docs.arnoldrenderer.com/api/arnold-7.1.3.0/index.html) | 공식 원문만 연결 |
| [AutoCAD APIs and SDKs](https://aps.autodesk.com/developer/overview/autocad) | 공식 원문만 연결 |
| [AutoCAD Architecture and MEP](https://aps.autodesk.com/developer/overview/autocad-architecture-and-mep) | 공식 원문만 연결 |
| [AutoCAD Electrical API](https://aps.autodesk.com/developer/overview/autocad-electrical-api) | 공식 원문만 연결 |
| [AutoCAD Map 3D](https://aps.autodesk.com/developer/overview/autocad-map-3d) | 공식 원문만 연결 |
| [AutoCAD Map 3D ObjectARX SDK](https://aps.autodesk.com/developer/overview/autocad-map-3d-objectarx-sdk) | 공식 원문만 연결 |
| [AutoCAD Mechanical SDK and APIs](https://aps.autodesk.com/developer/overview/autocad-mechanical) | 공식 원문만 연결 |
| [AutoCAD ObjectARX SDK](https://aps.autodesk.com/developer/overview/autocad-objectarx-sdk) | 공식 원문만 연결 |
| [AutoCAD OEM](https://aps.autodesk.com/developer/overview/autocad-oem) | 공식 원문만 연결 |
| [AutoCAD Plant 3D P&ID](https://aps.autodesk.com/developer/overview/autocad-plant-3d-and-pid) | 공식 원문만 연결 |
| [Autodesk CFD APIs](https://help.autodesk.com/view/SCDSE/2024/ENU/?guid=GUID-B56DEB46-56B0-4AB6-9BA9-380E2A208065) | 공식 원문만 연결 |
| [Autodesk Datum APIs](https://aps.autodesk.com/developer/overview/datum360-api) | 공식 원문만 연결 |
| [Autodesk Fusion APIs](https://aps.autodesk.com/developer/overview/autodesk-fusion-360-api) | 공식 원문만 연결 |
| [Autodesk Fusion Manage APIs](http://help.autodesk.com/view/PLM/ENU/) | 공식 원문만 연결 |
| [Automation API](https://aps.autodesk.com/developer/overview/automation-api) | 공식 원문만 연결 |
| [BIM 360 APIs](https://aps.autodesk.com/developer/overview/bim-360-api) | 공식 원문만 연결 |
| [BuildingConnected and TradeTapp APIs](https://aps.autodesk.com/developer/overview/buildingconnected-and-tradetapp-apis) | 공식 원문만 연결 |
| [Business Success Plan Reporting API](https://aps.autodesk.com/developer/overview/business-success-plan-reporting-api) | 공식 원문만 연결 |
| [Civil 3D APIs and SDKs](https://aps.autodesk.com/developer/overview/civil-3d) | 공식 원문만 연결 |
| [Content Catalog API](https://aps.autodesk.com/developer/overview/content-catalog-api) | 공식 원문만 연결 |
| [Data Exchange API](https://aps.autodesk.com/developer/overview/data-exchange) | 공식 원문만 연결 |
| [Data Visualization Extension](https://aps.autodesk.com/en/docs/dataviz/v1/developers_guide/introduction/overview/) | 공식 원문만 연결 |
| [Factory Design Utilities](https://help.autodesk.com/view/FDU/2025/ENU/?guid=FDU_API_Application_Programming_html) | 공식 원문만 연결 |
| [FBX SDK](https://aps.autodesk.com/developer/overview/fbx-sdk) | 공식 원문만 연결 |
| [Flame SDK](https://aps.autodesk.com/developer/overview/wiretap) | 공식 원문만 연결 |
| [Flow Capture API](https://help.moxion.io/article/234-api-documentation) | 공식 원문만 연결 |
| [Flow Graph Engine API](https://aps.autodesk.com/developer/overview/flow-graph-engine-api) | 공식 원문만 연결 |
| [Flow Production Tracking API](https://help.autodesk.com/view/SGDEV/ENU/) | 공식 원문만 연결 |
| [FormIt](https://windows.help.formit.autodesk.com/plugins/useful-links) | 공식 원문만 연결 |
| [Fusion Operations API](https://aps.autodesk.com/developer/overview/fusion-operations-api) | 공식 원문만 연결 |
| [Informed Design API](https://aps.autodesk.com/developer/overview/informed-design-api) | 공식 원문만 연결 |
| [InfraWorks](https://help.autodesk.com/view/INFMDR/ENU/?guid=new) | 공식 원문만 연결 |
| [Inventor APIs and SDKs](https://aps.autodesk.com/developer/overview/inventor) | 공식 원문만 연결 |
| [Inventor OEM](https://aps.autodesk.com/developer/overview/inventor-oem) | 공식 원문만 연결 |
| [M&E Data Model API](https://aps.autodesk.com/developer/overview/me-data-model-api) | 공식 원문만 연결 |
| [Machine Translation API](https://aps.autodesk.com/developer/overview/machine-translation-api) | 공식 원문만 연결 |
| [Manufacturing Data Model API](https://aps.autodesk.com/developer/overview/manufacturing-data-model-api) | 공식 원문만 연결 |
| [Maya APIs and SDKs](https://aps.autodesk.com/developer/overview/maya) | 공식 원문만 연결 |
| [Moldflow API](https://help.autodesk.com/view/MFIA/2025/ENU/?guid=GUID-853E86EF-7294-424D-81AE-E38130C237A4) | 공식 원문만 연결 |
| [MotionBuilder API](https://aps.autodesk.com/developer/overview/motionbuilder) | 공식 원문만 연결 |
| [Mudbox SDK](https://aps.autodesk.com/developer/overview/mudbox) | 공식 원문만 연결 |
| [Navisworks](https://aps.autodesk.com/developer/overview/navisworks) | 공식 원문만 연결 |
| [Parameters API](https://aps.autodesk.com/developer/overview/parameters-api) | 공식 원문만 연결 |
| [Partner Web Services](https://partner.developer.autodesk.com/) | 공식 원문만 연결 |
| [RealDWG SDK](https://aps.autodesk.com/developer/overview/realdwg-oem) | 공식 원문만 연결 |
| [Reality Capture API](https://aps.autodesk.com/developer/overview/reality-capture-api) | 공식 원문만 연결 |
| [Reality Solutions SDK](https://aps.autodesk.com/developer/overview/reality-solutions-sdk) | 공식 원문만 연결 |
| [Revit APIs and SDKs](https://aps.autodesk.com/developer/overview/revit) | 공식 원문만 연결 |
| [Robot Structural Analysis Professional](https://help.autodesk.com/view/RSAPRO/2025/ENU/?guid=GUID-7887A433-FC8B-4BAA-B35E-CF6CC1F46AA4) | 공식 원문만 연결 |
| [Secure Service Account API](https://aps.autodesk.com/en/docs/ssa/v1/developers_guide/overview/) | 공식 원문만 연결 |
| [Structural Bridge Design](https://help.autodesk.com/view/SBRDES/ENU/?guid=ASBD_InProdEU_automation_Overview_html) | 공식 원문만 연결 |
| [Sustainability Data API](https://aps.autodesk.com/developer/overview/sustainability-data-api) | 공식 원문만 연결 |
| [Tandem Data API](https://aps.autodesk.com/developer/overview/tandem-data-api) | 공식 원문만 연결 |
| [Token Flex API](https://aps.autodesk.com/developer/overview/token-flex-api) | 공식 원문만 연결 |
| [Upchain API](https://help.autodesk.com/view/UPCHN/ENU/?guid=UC_API_GET_STARTED) | 공식 원문만 연결 |
| [User Profile API](https://aps.autodesk.com/developer/overview/user-profile-api) | 공식 원문만 연결 |
| [Vault API](https://aps.autodesk.com/developer/overview/vault) | 공식 원문만 연결 |
| [Vault Data API](https://aps.autodesk.com/developer/overview/vault-data-api) | 공식 원문만 연결 |
| [VRED APIs](https://aps.autodesk.com/developer/overview/vred-apis) | 공식 원문만 연결 |
| [Webhooks API](https://aps.autodesk.com/developer/overview/webhooks-api) | 공식 원문만 연결 |
| [Wiretap SDK](https://aps.autodesk.com/developer/overview/wiretap) | 공식 원문만 연결 |

</details>
