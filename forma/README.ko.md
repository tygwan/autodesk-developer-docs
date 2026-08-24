# Autodesk Forma 개발 문서

[English](./README.md) · [전체 제품 인덱스](./INDEX.md) · [저장소 카탈로그](../README.ko.md)

이 디렉터리는 Autodesk Forma와 관련된 공식 API·SDK 문서의 버전별 스냅샷을 보관합니다.

> [!NOTE]
> 이 저장소는 비공식 아카이브입니다. 확보한 API·SDK 값은 Autodesk가 게시한 형태 그대로 보존합니다. 현재 서비스 상태나 상업적 이용 가능 여부는 연결된 공식 원문을 확인하세요.

## 만들 수 있는 기능

| 기능 | 제공 내용 | 인터페이스 | 시작 문서 |
| --- | --- | --- | --- |
| 시공 업무 | 자산, 양식, 이슈, 검토, RFI, 시트, 제출물, 물량 산출과 전송 | Forma APIs (REST) | [Forma APIs](./acc/INDEX.md) |
| 비용과 프로젝트 관리 | 비용 관리, 허브, 프로젝트, 회사, 사용자, 위치와 분류 | Forma APIs (REST) | [Cost Management](./acc/groups/cost-management/INDEX.md), [Hub Admin](./acc/groups/hub-admin/INDEX.md) |
| 모델 조정과 프로젝트 데이터 | 모델 세트, 간섭 결과, 모델 속성, 파일과 관계 | Forma APIs (REST) | [Model Coordination](./acc/groups/model-coordination/INDEX.md), [Model Properties](./acc/groups/model-properties/INDEX.md) |
| 구조화된 AEC 데이터 | 허브, 프로젝트, 폴더, 요소 그룹, 요소, 속성, 지오메트리, 버전과 차이 | AEC Data Model API (GraphQL) | [AEC Data Model](./aec-data-model/INDEX.md) |
| 사이트와 제안 워크플로 | 프로젝트, 사이트, 제안, 라이브러리, 요소와 통합 | Forma Site Design API (REST) | [Site Design API](./site-design/INDEX.md) |
| 지형과 분석 | 지형 데이터, 일조 분석, 면적 지표, 예측 분석과 분석 결과 | REST 및 Embedded SDK | [Terrain API](./site-design/groups/terrain/INDEX.md), [Embedded SDK](./site-design/sdk/INDEX.md) |
| 임베디드 상호작용과 렌더링 | 선택, 카메라, 지오메트리, GeoJSON/GLB 렌더링, 색상, 디자인 도구와 UI 패널 | Forma Embedded View SDK (TypeScript) | [Embedded SDK](./site-design/sdk/INDEX.md) |
| 확장 데이터와 자동화 | 확장 저장소, 커스텀 요소 속성, 생성기와 요소 통합 | GraphQL 및 Embedded SDK | [Extension properties](./aec-data-model/reference/mutations/INDEX.md), [Extension SDK](./site-design/sdk/INDEX.md#extension-data-and-automation) |

> [!IMPORTANT]
> 실행 위치에 따라 인터페이스를 선택하세요. 서버, CLI, 배치에서는 REST 또는 GraphQL을 사용하고, Embedded View SDK는 Forma 임베디드 뷰 iframe 안에서만 사용합니다. 인증과 리전 요구사항은 API 문서군별로 다르므로 임의로 통일하면 안 됩니다.

## 관련 보관 문서

생성된 [관계 인덱스](./RELATED.md)는 수집된 Forma 페이지가 Authentication, Data Management, Model Derivative 또는 Viewer를 연결하거나 명시적으로 언급한 경우에만 관련 경로를 노출합니다. 이는 원문 근거가 있는 탐색 힌트이며 별도로 작성한 “Forma 파일을 Viewer에 표시하기” 워크플로가 아닙니다.

## 저장소 지도

```text
forma/
├─ acc/              시공·프로젝트 관리 REST API
├─ aec-data-model/   구조화된 AEC 데이터 GraphQL API
└─ site-design/
   ├─ groups/        Site Design REST API 그룹
   ├─ sdk/           Embedded View SDK 기능 및 네임스페이스 레퍼런스
   └─ guides/        확장, 임베디드 뷰와 Site Design 가이드
```

## 제품 인덱스

[Autodesk Forma 전체 문서 인덱스](./INDEX.md)는 독립적인 기능 요약과 확보된 모든 API·SDK 문서군 진입점을 제공합니다.

## 원본 보존

- API 경로, 메서드, 식별자, 스코프, 타입, 설명, 예제와 SDK 시그니처를 확보한 원문 그대로 보존합니다.
- 가능한 경우 각 문서군에 빌드 메타데이터, 페이지 매니페스트, 안정적인 페이지 ID와 콘텐츠 해시를 함께 저장합니다.
- 스냅샷 사이의 정확한 변경은 Git 이력으로 추적합니다.

릴리스 기준 탐색은 [Autodesk 원본 변경 로그 인덱스](./CHANGELOG.md)를 확인하세요.
