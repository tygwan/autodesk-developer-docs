# Data Management API 개발 문서

[English](./README.md) · [전체 제품 인덱스](./INDEX.md) · [저장소 카탈로그](../README.ko.md)

이 디렉터리는 Autodesk Data Management API 문서의 버전별 스냅샷을 보관합니다. 프로젝트 데이터, Object Storage Service 리소스, 파일 전송, 게시 작업과 공식 TypeScript·.NET SDK 문서를 포함합니다.

> [!NOTE]
> 이 저장소는 비공식 아카이브입니다. 리소스 이름, 경로, 요청·응답 값, SDK 심볼, 설명과 예제는 Autodesk가 게시한 형태 그대로 보존합니다.

## 구현할 수 있는 기능

| 기능 | 문서 경로 |
| --- | --- |
| 허브, 프로젝트, 폴더, 아이템, 버전, 관계와 참조 탐색 | [REST 레퍼런스](./v2/reference/http/INDEX.md) |
| OSS 버킷과 객체 생성 및 관리 | [REST 레퍼런스](./v2/reference/http/INDEX.md) |
| 파일 업로드, 다운로드, 복사, 삭제와 복원 | [How-to 가이드](./v2/tutorials/INDEX.md) |
| signed S3와 resumable 전송 작업 사용 | [REST 레퍼런스](./v2/reference/http/INDEX.md) |
| storage, item, version, download job과 publish-model job 생성 | [모델 게시 튜토리얼](./v2/tutorials/publish-model.md) |
| 공식 Data Management·OSS 클라이언트 사용 | [전체 SDK 레퍼런스](./v2/reference/INDEX.md) |

## 인터페이스 선택

| 인터페이스 | 용도 | 시작 문서 |
| --- | --- | --- |
| REST | 프로젝트 데이터와 OSS 직접 호출 | [HTTP 레퍼런스](./v2/reference/http/INDEX.md) |
| TypeScript SDK | JavaScript·TypeScript용 Data Management·OSS 타입 클라이언트 | [Data Management](./v2/reference/typescript-sdk-dm/INDEX.md), [OSS](./v2/reference/typescript-sdk-oss/INDEX.md) |
| .NET SDK | .NET용 Data Management·OSS 타입 클라이언트 | [Data Management](./v2/reference/dot-net-sdk-dm/INDEX.md), [OSS](./v2/reference/dot-net-sdk-oss/INDEX.md) |

## 관련 문서

[v2 문서군 인덱스](./v2/INDEX.md#related-captured-documentation)는 수집 페이지의 링크와 명시적인 API·SDK 이름으로 관련 경로를 계산합니다. 원문 근거가 있는 Authentication, Model Derivative, Viewer와 Forma 힌트를 노출하되 별도의 합성 워크플로는 추가하지 않습니다.

## 원본 보존

- 공식 source page마다 Markdown leaf 하나를 대응시키고 stable ID와 content hash를 `_meta`에 기록합니다.
- REST, TypeScript SDK, .NET SDK, guide, tutorial과 changelog 문서를 별도로 분류합니다.
- 스냅샷 사이의 정확한 변경은 Git 이력으로 추적합니다.
