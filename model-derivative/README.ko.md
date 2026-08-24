# Model Derivative API 개발 문서

[English](./README.md) · [전체 제품 인덱스](./INDEX.md) · [저장소 카탈로그](../README.ko.md)

이 디렉터리는 Autodesk Model Derivative API 문서의 버전별 스냅샷을 보관합니다. 변환, 온라인 뷰잉용 derivative, manifest, metadata, geometry, thumbnail, 외부 참조와 공식 TypeScript·.NET SDK 문서를 포함합니다.

> [!NOTE]
> 이 저장소는 비공식 아카이브입니다. 형식, 경로, 옵션, 스키마, SDK 심볼, 설명, 예제와 변경 이력은 Autodesk가 게시한 형태 그대로 보존합니다.

## 구현할 수 있는 기능

| 기능 | 문서 경로 |
| --- | --- |
| 지원되는 설계·모델링 파일 형식 변환 | [변환 가이드](./v2/developers_guide/basics/translation.md), [지원 변환 형식](./v2/developers_guide/supported-translations/INDEX.md) |
| 온라인 뷰잉용 SVF·SVF2 derivative 준비 | [Prepare Models for Online Viewing](./v2/developers_guide/basics/preperation.md) |
| 변환 job 제출과 manifest 상태 확인 | [REST 레퍼런스](./v2/reference/http/INDEX.md) |
| object tree, metadata와 property 추출 | [Metadata extraction](./v2/developers_guide/basics/metadata_extraction.md) |
| geometry 추출과 derivative resource 다운로드 | [Geometry extraction](./v2/developers_guide/basics/geometry_extraction.md) |
| 모델 thumbnail 생성 | [Thumbnail generation](./v2/developers_guide/basics/thumbnail_generation.md) |
| 외부 참조가 있는 source package 변환 | [Xref 튜토리얼](./v2/tutorials/translate-source-file-containing-xref/INDEX.md) |
| 공식 클라이언트 라이브러리 사용 | [TypeScript SDK](./v2/reference/typescript-sdk/INDEX.md), [.NET SDK](./v2/reference/dot-net-sdk/INDEX.md) |

## 인터페이스 선택

| 인터페이스 | 용도 | 시작 문서 |
| --- | --- | --- |
| REST | 변환 job, manifest, derivative, metadata, property와 thumbnail | [HTTP 레퍼런스](./v2/reference/http/INDEX.md) |
| TypeScript SDK | JavaScript·TypeScript용 타입 기반 Model Derivative 클라이언트 | [TypeScript 레퍼런스](./v2/reference/typescript-sdk/INDEX.md) |
| .NET SDK | .NET용 타입 기반 Model Derivative 클라이언트 | [.NET 레퍼런스](./v2/reference/dot-net-sdk/INDEX.md) |

## 관련 문서

[v2 문서군 인덱스](./v2/INDEX.md#related-captured-documentation)는 원문 근거가 있는 Authentication, Data Management와 Viewer 경로를 노출합니다. 이는 수집 페이지에서 얻은 관계 힌트이며 새로 작성한 end-to-end 통합 가이드가 아닙니다.

## 원본 보존

- 공식 source page마다 Markdown leaf 하나를 대응시키고 stable ID와 SHA-256을 `_meta`에 기록합니다.
- REST·SDK 레퍼런스, guide, tutorial, code sample과 change history를 별도로 분류합니다.
- 스냅샷 사이의 정확한 변경은 Git 이력으로 추적합니다.
