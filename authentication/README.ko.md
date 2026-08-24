# Authentication API 개발 문서

[English](./README.md) · [전체 제품 인덱스](./INDEX.md) · [저장소 카탈로그](../README.ko.md)

이 디렉터리는 Autodesk Authentication(OAuth) 문서의 버전별 스냅샷을 보관합니다. REST 엔드포인트, 가이드, 튜토리얼과 공식 TypeScript·.NET SDK 레퍼런스를 모두 포함합니다.

> [!NOTE]
> 이 저장소는 비공식 아카이브입니다. 엔드포인트 값, 스코프, 토큰 필드, SDK 심볼, 설명과 예제는 Autodesk가 게시한 형태 그대로 보존합니다. 현재 서비스 동작이나 상업적 이용 가능 여부가 중요하면 공식 원문을 확인하세요.

## 구현할 수 있는 기능

| 기능 | 문서 경로 |
| --- | --- |
| APS 애플리케이션 등록과 앱 유형 선택 | [애플리케이션 유형](./v2/developers_guide/App-types/INDEX.md), [앱 생성 튜토리얼](./v2/tutorials/create-app.md) |
| 서버 간 액세스 토큰 발급 | [2-legged 토큰 튜토리얼](./v2/tutorials/get-2-legged-token.md) |
| 사용자를 대신한 접근 승인 | [3-legged 토큰 튜토리얼](./v2/tutorials/get-3-legged-token.md) |
| 네이티브·싱글 페이지 앱 지원 | [Authorization Code with PKCE](./v2/tutorials/get-3-legged-token-pkce/INDEX.md) |
| ID 토큰과 OAuth 스코프 사용 | [ID 토큰 튜토리얼](./v2/tutorials/get-ID-token.md), [스코프 가이드](./v2/developers_guide/scopes.md) |
| 토큰과 세션의 승인, 발급, 검사, 폐기와 종료 | [REST 엔드포인트 인덱스](./v2/reference/http/INDEX.md) |
| 공식 클라이언트 라이브러리 사용 | [TypeScript SDK](./v2/reference/typescript-sdk/INDEX.md), [.NET SDK](./v2/reference/dot-net-sdk/INDEX.md) |

## 인터페이스 선택

| 인터페이스 | 용도 | 시작 문서 |
| --- | --- | --- |
| REST | OAuth 승인과 토큰 수명주기 작업 | [REST 레퍼런스](./v2/reference/http/INDEX.md) |
| TypeScript SDK | JavaScript·TypeScript 앱의 타입 기반 인증 클라이언트 | [TypeScript 레퍼런스](./v2/reference/typescript-sdk/INDEX.md) |
| .NET SDK | .NET 앱의 타입 기반 인증 클라이언트 | [.NET 레퍼런스](./v2/reference/dot-net-sdk/INDEX.md) |

## 관련 문서

Authentication은 여러 APS API의 기반이지만 스코프와 토큰 컨텍스트는 작업마다 다릅니다. [v2 문서군 인덱스](./v2/INDEX.md#related-captured-documentation)는 수집 원문이 다른 보관 API·SDK를 직접 언급하거나 연결한 경우에만 관련 힌트를 표시하며, 별도의 통합 워크플로를 만들어내지 않습니다.

## 원본 보존

- 공식 source page마다 Markdown leaf 하나를 대응시키고 stable page ID와 SHA-256을 `_meta`에 기록합니다.
- AI 검색을 위해 제품, 문서군, 프로토콜과 문서 종류를 별도 metadata 필드로 유지합니다.
- 스냅샷 사이의 정확한 변경은 Git 이력으로 추적합니다.
