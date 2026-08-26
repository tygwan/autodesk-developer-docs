# Authentication routing

Use this reference to choose an OAuth context and derive the minimum scopes. Exact support, parameters, and scopes must still come from the selected Authentication and operation leaf documents.

## Choose the security context

| Situation | Candidate flow | Required check |
| --- | --- | --- |
| A trusted server accesses app-owned or app-managed resources | Two-legged client credentials | The target operation and resource accept app-only access. |
| A server acts on a user's Autodesk data | Three-legged authorization code | The resource, account, and operation support delegated user access. |
| A native app or single-page app acts for a user | Authorization code with PKCE | The registered application type and redirect behavior match the captured guide. Never place a client secret in the public client. |
| The application needs identity claims | OpenID Connect and an ID token | Do not use an ID token as an API access token. Verify claims and validation requirements in the ID-token guide. |

Do not select a flow from HTTP method alone. Account permissions, product entitlement, project membership, and API scopes are separate gates.

## Derive scopes

1. List the concrete operations the implementation will call.
2. Read each operation or tutorial leaf for its authentication context and scopes.
3. Use the smallest union that supports the requested workflow.
4. Keep scopes on the same API version and token context as their operations.
5. Report a discrepancy when a tutorial and endpoint leaf disagree rather than choosing silently.

## Protect credentials

- Keep client secrets and refresh tokens on a trusted server and in the project's established secret store.
- Send browsers only the short-lived access material required by the documented client flow.
- Never copy tokens, signed URLs, authorization codes, or example credentials from captured pages into production code.
- Redact authorization headers, query signatures, secrets, and tokens from diagnostics.
- Verify redirect URIs, PKCE verifier/challenge handling, refresh behavior, revocation, and token expiry against the relevant leaf before implementing them.

For an authentication failure, distinguish invalid or expired token, wrong token type, missing scope, application configuration, user permission or membership, product entitlement, and resource-region mismatch before changing the flow.
