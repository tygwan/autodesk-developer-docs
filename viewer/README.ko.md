# Viewer SDK 개발 문서

[English](./README.md) · [전체 제품 인덱스](./INDEX.md) · [저장소 카탈로그](../README.ko.md)

이 디렉터리는 공식 Autodesk Platform Services Viewer SDK 문서의 버전별 스냅샷을 보관합니다.

> [!NOTE]
> 이 저장소는 비공식 아카이브입니다. 확보한 SDK 이름, 시그니처, 타입, 설명, 예제와 변경 이력은 Autodesk가 게시한 형태 그대로 보존합니다. 현재 서비스 상태나 상업적 이용 가능 여부는 공식 원문을 확인하세요.

## 만들 수 있는 기능

| 기능 | 제공 내용 | 시작 문서 | SDK 레퍼런스 |
| --- | --- | --- | --- |
| 모델 로딩과 보기 | 2D·3D 문서, 모델 및 집계 뷰 로딩 | [시작하기](./v7/developers_guide/viewer_basics/starting-html.md) | [`Viewer3D`](./v7/reference/Viewing/Viewer3D.md), [`Document`](./v7/reference/Viewing/Document.md), [`Model`](./v7/reference/Viewing/Model.md) |
| 탐색과 상호작용 | 카메라 탐색, 선택, 단축키, 이벤트, 도구와 화면 모드 | [이벤트 처리](./v7/developers_guide/viewer_basics/events.md) | [`Navigation`](./v7/reference/Viewing/Navigation.md), [`ToolController`](./v7/reference/Viewing/ToolController.md), [`EventUtils`](./v7/reference/Viewing/EventUtils.md) |
| UI 커스터마이징 | 툴바 컨트롤, 도킹 패널, 속성 패널, 트리, 컨텍스트 메뉴와 설정 | [툴바 커스터마이징](./v7/developers_guide/viewer_basics/toolbar-button.md) | [UI 레퍼런스](./v7/reference/UI/INDEX.md) |
| 모델 데이터와 속성 | 객체 트리, 모델 속성, 메타데이터와 속성 데이터베이스 조회 | [속성 데이터베이스 조회](./v7/developers_guide/advanced_options/propdb-queries.md) | [`ObjectTree`](./v7/reference/Viewing/ObjectTree.md), [`PropertySet`](./v7/reference/Viewing/PropertySet.md) |
| 확장 | 커스텀 확장 로딩과 기본 Viewer 확장 기능 사용 | [확장 작성](./v7/developers_guide/viewer_basics/extensions.md) | [Extensions 레퍼런스](./v7/reference/Extensions/INDEX.md) |
| 측정과 검토 | 측정, 마크업, 단면, 스냅과 모델 비교 | [DiffTool 사용](./v7/developers_guide/viewer_basics/difftool.md) | [`MeasureExtension`](./v7/reference/Extensions/MeasureExtension.md), [`MarkupsCore`](./v7/reference/Extensions/MarkupsCore.md), [`SectionExtension`](./v7/reference/Extensions/SectionExtension.md) |
| 장면과 렌더링 | 커스텀 지오메트리, 재질, 렌더 레이어, 오버레이와 장면 구성 | [Scene API 개념](./v7/developers_guide/scene_api/concepts.md) | [Scene 레퍼런스](./v7/reference/Scene/INDEX.md) |
| 2D 편집 | Edit2D 지오메트리와 도구 생성 및 커스터마이징 | [Edit2D 설정](./v7/developers_guide/advanced_options/edit2d-setup.md) | [`Edit2DExtension`](./v7/reference/Extensions/Edit2DExtension.md) |
| 프로파일과 설정 | Viewer 환경설정, 기능 플래그, 프로파일과 설정 UI | [Profile API 사용](./v7/developers_guide/advanced_options/profiles.md) | [`Profile`](./v7/reference/Viewing/Profile.md), [`ProfileManager`](./v7/reference/Viewing/ProfileManager.md) |
| 파일과 표시 형식 | glTF·PDF 로딩, 와이어프레임과 분할 화면 | [glTF 로딩](./v7/developers_guide/viewer_basics/GLTFExtension.md) | [`glTF`](./v7/reference/Extensions/glTF.md), [`PDFExtension`](./v7/reference/Extensions/PDFExtension.md) |

## 관련 보관 문서

생성된 [관계 인덱스](./RELATED.md)는 수집된 Viewer 페이지에 Authentication, Data Management, Model Derivative 또는 Forma의 이름이나 링크가 있을 때만 해당 문서로 연결합니다. 어떤 기반 API가 필요한지는 연결된 근거 문서로 판단하며, 이 아카이브는 별도 통합 레시피를 합성하지 않습니다.

## 저장소 지도

```text
viewer/v7/
├─ developers_guide/   작업 중심 가이드와 예제
├─ reference/
│  ├─ Viewing/         Viewer 수명주기, 모델, 탐색, 이벤트와 도구
│  ├─ UI/              버튼, 툴바, 패널, 트리와 메뉴
│  ├─ Extensions/      기본 및 커스텀 Viewer 기능
│  ├─ Scene/           지오메트리, 재질과 렌더링
│  ├─ Math/            벡터, 행렬, 박스와 변환
│  └─ globals/         전역 함수, 속성, 클래스와 타입 정의
└─ change_history/     버전 변경과 마이그레이션 안내
```

## 문서 경로

| 필요한 내용 | 문서 |
| --- | --- |
| Viewer 개념과 작업 흐름 학습 | [Viewer SDK v7](./v7/INDEX.md) |
| 클래스, 함수, 속성, 타입 정의 또는 확장 탐색 | [전체 SDK 레퍼런스](./v7/reference/INDEX.md) |
| 마이그레이션 안내와 게시된 변경 사항 확인 | [변경 이력](./v7/INDEX.md#change-history) |

## 제품 인덱스

[Viewer SDK 전체 문서 인덱스](./INDEX.md)는 독립적인 기능 요약과 확보된 SDK 문서군 진입점을 제공합니다.

## 원본 보존

- SDK 심볼, 시그니처, 매개변수와 반환 타입, 설명, 예제 및 게시된 변경 이력을 확보한 원문 그대로 보존합니다.
- SDK 문서군에 빌드 메타데이터, 페이지 매니페스트, 안정적인 페이지 ID와 콘텐츠 해시를 함께 저장합니다.
- 스냅샷 사이의 정확한 변경은 Git 이력으로 추적합니다.
