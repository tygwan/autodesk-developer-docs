---
operation_id: autospecs-getversionrequirements-GET
method: GET
path: /construction/autospecs/v1/projects/{projectId}/version/{versionId}/requirements
group: "AutoSpecs"
auth_context: user context required
scopes: [data:read]
surface: http
verification: docs-only
---

# Retrieves the number of submittals for the submittal groups in each submittal section

```http
GET https://developer.api.autodesk.com/construction/autospecs/v1/projects/{projectId}/version/{versionId}/requirements
```

| | |
| --- | --- |
| **인증 컨텍스트** | user context required |
| **필요 스코프** | `data:read` |
| **데이터 포맷** | JSON |
| **그룹** | AutoSpecs |

Retrieves the number of submittals for the submittal groups in each submittal section. To retrieve all submittal data from the Smart Register, call GET smartregister.

## 요청

### URI 파라미터

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `projectId` | string |  | The ID of the project. Use the Data Management API to retrieve the project ID. For more information, see the Retrieve a Project ID tutorial. You need to convert the project ID into a project ID for the Forma API by removing the “b.” prefix. For example, a project ID of b.a4be0c34a-4ab7 translates to a project ID of a4be0c34a-4ab7. |
| `versionId` | string |  | The AutoSpecs version ID of the project. For information about how to find the version ID, see the first few steps of the Retrieve Submittal Log tutorial. |

### 헤더

| 이름 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| `Authorization` | string | **필수** | Must be Bearer <token>, where <token> is obtained via a three-legged OAuth flow. |

## 응답

| 코드 | 의미 | 설명 |
| --- | --- | --- |
| `200` | OK | OK |
| `401` | Unauthorized | The provided bearer token is not valid. |
| `403` | Forbidden | The user or service represented by the bearer token does not have permission to perform this operation. |
| `404` | Not Found | The requested resource could not be found. |
| `500` | Internal Server Error | An unknown error occurred on the server. |

### 응답 본문 (200)

- `divisionCode` — `string`  
    The division code associated with the submittal. This is the equivalent to the Division column in the UI.
- `divisionName` — `string`  
    The division name associated with the submittal. This is equivalent to the name in the Division filter in the UI.
- `specSections` — `array: object`  
    A list of specification divisions and groups.
  - `specName` — `string`  
      The CSI specification name of the submittal. This is equivalent of the Section name column in the UI.
  - `specCode` — `string`  
      The CSI specification code of the submittal. This is equivalent to the Section number column in the UI.
  - `submittalGroups` — `array: object`  
      A list of submittal groups.
    - `submittalGroupTypes` — `array: object`
      - `submittalType` — `enum:string`  
          The type of submittal. This corresponds to the Submittal type column in the UI. Possible values: Test Reports, Shop Drawings, Schedules, Samples, Sample Warranty, Reports, Qualification Data, QUALITY ASSURANCE, Product Data, Performance Data, Mfg. Instructions, Meeting/Conferences, Drawings, Delegated-Design, Certifications, Certificates, Calculations, Attic Stock, Demonstrations, General Warranties, O&M Manuals, Special Warranties, LEED, As-Builts, TESTS AND INSPECTIONS, General, Manufacturers Instructions, Substitutions, Mix Design, Others
      - `total` — `int`  
          The number of submittals for the submittal type.
    - `submittalGroup` — `enum:string`  
        The submittal group associcated with the submittal. This is equivalent to the Submittal group column in the UI. Possible values: ACTION AND INFORMATIONAL, CLOSEOUT SUBMITTALS, DIVISION 01 REQUIREMENTS, FIELD QUALITY CONTROL, Mockups, QUALITY ASSURANCE, Tests And Inspections
    - `total` — `int`  
        The number of submittals for the submittal group.

## Example

```
curl -v 'https://developer.api.autodesk.com/construction/autospecs/v1/projects/:projectId/version/:versionId/requirements' \
  -H 'Authorization: Bearer AuIPTf4KYLTYGVnOHQ0cuolwCW2a'
```

```
[
  {
    "divisionCode": "01",
    "divisionName": "General Requirements",
    "specSections": [
      {
        "specName": "STRUCTURAL TESTS AND SPECIAL INSPECTIONS",
        "specCode": "01 45 33",
        "submittalGroups": [
          {
            "submittalGroup": "DIVISION 01 REQUIREMENTS",
            "total": 4
          }
        ]
      }
    ]
  },
  {
    "divisionCode": "03",
    "divisionName": "Concrete",
    "specSections": [
      {
        "specName": "CONCRETE REINFORCING",
        "specCode": "03 20 00",
        "submittalGroups": [
          {
            "submittalGroup": "ACTION AND INFORMATIONAL",
            "total": 5
          },
          {
            "submittalGroup": "QUALITY ASSURANCE",
            "total": 1
          },
          {
            "submittalGroup": "TESTS AND INSPECTIONS",
            "total": 1
          }
        ]
      }
    ]
  }
]
```

## 같은 그룹의 다른 엔드포인트

- `GET /construction/autospecs/v1/projects/{projectId}/metadata` — [project metadata](./autospecs-getprojectmetadata-GET.md)
- `GET /construction/autospecs/v1/projects/{projectId}/version/{versionId}/smartregister` — [Retrieves the submittal logs (Smart Register) that are part of the specification PDFs that were imported into AutoSpecs](./autospecs-getversionsmartregister-GET.md)
- `GET /construction/autospecs/v1/projects/{projectId}/version/{versionId}/submittalsSummary` — [Retrieves the number of submittals for each submittal group and each submittal type](./autospecs-getversionsummary-GET.md)

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/reference/http/autospecs-getversionrequirements-GET
