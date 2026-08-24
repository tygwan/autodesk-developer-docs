---
title: "Filtering"
url_path: developers_guide/filtering
product: "Data Management API"
surface: "data-management-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "filtering"
---
# Filtering

You can filter the responses of most GET endpoints using the `filter` query string parameter. Depending on the endpoint, you can filter data for a specific version, item, folder, or hub. For example, the items or versions in a specifc folder, or the refs in a specific item. You can also specify more complex criteria to filter against. For example, the links in a specific version that contain a particular string, or the items in a folder of a particular size.

Note that filtering is case sensitive.

## Filter Examples

Filtering follows the following format:

filter[<fieldName>]=<matchValue>

FieldName can be a resource ID, type, or any of the resource’s attributes or metadata, and matchValue is the value you are filtering against.

| [GET hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/) `filter[id]=a.YnVzaW5lc3Md2lwMWZxYWF1G9kZXNrMTYx` | returns all hubs with the specified ID |
| --- | --- |
| [GET hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/) `filter[attributes.name]=MyHubName` | returns all hubs with `name` = `MyHubName` |
| [GET hubs](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-GET/) `filter[extension.type]=hubs:autodesk.core:Hub` | returns all hubs that are of type `hubs:autodesk.core:Hub` (i.e., team hubs) |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) `filter[extension.type]=items:autodesk.core:File` | returns all BIM 360 Team, Fusion Team, and A360 Personal files from the specified folder |

## Multiple Filters

You can create complex filters by combining several filters together with multiple field types and multiple match values.

Filtering multiple field types (e.g., `fileType` and `lastModifiedTime`) only returns results that satisfy all conditions, similar to an AND operation.

| Example | Description |
| --- | --- |
| [GET hubs/:hub_id/projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET/) `filter[extension.type]=projects:autodesk.core:Project&filter[name]=MyProject` | returns all A360 projects with `name` = `MyProject` from the specified hub |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) `filter[extension.type]=items:autodesk.core:File&filter[extension.version]-starts=1` | returns all files from the specified folder where the version number begins with `1` |

Filtering multiple match values returns results even when they only satisfy one condition, similar to an OR operation.

| Example | Description |
| --- | --- |
| [GET hubs/:hub_id/projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET/) `filter[name]=MyProject,YourProject` | returns all projects with `name` = `MyProject` and all projects with `name` = `YourProject` from the specified folder |
| [GET projects/:project_id/folders/:folder_id/search](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET/) `filter[fileType]=txt,jpg` | returns all tip versions of TXT or JPG files from the specified folder and its subfolder |

You can also combine multiple field types and multiple match values in a single filter.

| Example | Description |
| --- | --- |
| [GET projects/:project_id/folders/:folder_id/search](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-search-GET/) `filter[fileType]=rvt,jpg&filter[attributes.fileName]-contains=Floor` | returns all tip versions of Revit files or JPG files from the specified folder and its subfolders, where the filename contains the string: `Floor` |

## Comparison Types

The Data Management API uses relational operators (e.g., greater than and less than comparisons), as well as different types of string comparisons (e.g., string begins with) when matching filed names to match values.

The following table describes the options available:

| Comparison | Representation |
| --- | --- |
| less than | `filter[<fieldName>]-lt=<matchValue>` |
| less than or equal to | `filter[<fieldName>]-le=<matchValue>` |
| equal to | `filter[<fieldName>]-eq=<matchValue>` |
| greater than or equal to | `filter[<fieldName>]-ge=<matchValue>` |
| greater than | `filter[<fieldName>]-gt=<matchValue>` |
| string starts with | `filter[<fieldName>]-starts=<matchValue>` |
| string ends with | `filter[<fieldName>]-ends=<matchValue>` |
| string contains | `filter[<fieldName>]-contains=<matchValue>` |

Note that the comparisons use [lexicographic ordering](https://en.wikipedia.org/wiki/Lexicographical_order). Numbers can be integers or floating points.

| Example | Description |
| --- | --- |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) `filter[lastModifiedTime]-ge=2016` | returns all files from the specified folder that were modified in the year 2016 or later |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) `filter[lastModifiedTime]-ge=2016-10-15` | returns all files from the specified folder that were modified since 15 October 2016 or later ([GMT-0](https://www.timeanddate.com/time/zones/gmt)) |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) `filter[lastModifiedTime]-ge=2016-10-15T08:00&filter[lastModifiedTime]-le=2016-10-15T22:00` | returns all files in the specified folder that were modified between 8:00 am and 10:00 pm on 15 October 2016 ([GMT-0](https://www.timeanddate.com/time/zones/gmt)) |

## Abbreviated Filters

To simplify filtering you can omit the `attribute` and `meta` prefixes from property names.

The following tables show examples of abbreviated filters:

| Regular Format | Abbreviated Format |
| --- | --- |
| `filter[attributes.fileType]` | `filter[fileType]` |
| `filter[attributes.extension.data.extended_prop]` | `filter[extension.data.extended_prop]` |
| `filter[meta.refType]` | `filter[refType]` |
| `filter[meta.extension.data.ref_prop]` | `filter[extension.data.ref_prop]` |

| Example | Description |
| --- | --- |
| [GET hubs/:hub_id/projects](https://aps.autodesk.com/en/docs/data/v2/reference/http/hubs-hub_id-projects-GET/) `filter[extension.type]=projects:autodesk.core:Project` | returns all files from the specified hub |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) `filter[extension.type]=items` | returns all items from the specified folder |

## Pagination

Most of the endpoints that support filtering support pagination. However, filtering can cause the following unexpected behavior.
- Empty pages can be returned in the middle of the response.
- Receiving less than the maximum elements allowed per page does not indicate that you have reached the last page.
- The only true indication that you have reached the last page is if a link for the next page (`meta.links.next`) is missing from the end of the page.

See the [Pagination](https://aps.autodesk.com/en/docs/data/v2/overview/pagination/) section for more details.

## Dates and Timestamps

Dates and timestamps are represented as strings using [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) with a timezone offset normalized to [GMT-0](https://www.timeanddate.com/time/zones/gmt). For example,
`2016-10-15T13:11:36.0000000Z`

Values for Date-Time attributes (createTime and lastModifiedTime) must be given in one of the supported Date-Time formats in the following table:

Note that all supported Date-Time Formats also support a suffix of Coordinated UTC Time (`Z`) or Time Offset from UTC as per [ISO 8601 Time zone designators](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators), and that all Date-Time values without these suffixes are assumed to be given in UTC Time.

| Supported Date-Time Formats | Example |
| --- | --- |
| YYYY | `2022` |
|   | `2022Z` |
|   | `2022+08:00` |
| YYYY-MM | `2022-01` |
|   | `2022-01Z` |
|   | `2022-01+08:00` |
| YYYY-MM-DD | `2022-01-01` |
|   | `2022-01-01Z` |
|   | `2022-01-01+08:00` |
| YYYY-MM-DDT | `2022-01-01T` |
|   | `2022-01-01TZ` |
|   | `2022-01-01T+08:00` |
| YYYY-MM-DDTHH | `2022-01-01T00` |
|   | `2022-01-01T00Z` |
|   | `2022-01-01T00+08:00` |
| YYYY-MM-DDTHH:mm | `2022-01-01T00:00` |
|   | `2022-01-01T00:00Z` |
|   | `2022-01-01T00:00+08:00` |
| YYYY-MM-DDTHH:mm:ss | `2022-01-01T00:00:00` |
|   | `2022-01-01T00:00:00Z` |
|   | `2022-01-01T00:00:00+08:00` |
| YYYY-MM-DDTHH:mm:ss.fffffff | `2022-01-01T00:00:00.0` |
|   | `2022-01-01T00:00:00.0Z` |
|   | `2022-01-01T00:00:00.0+08:00` |
|   | `2022-01-01T00:00:00.00` |
|   | `2022-01-01T00:00:00.00Z` |
|   | `2022-01-01T00:00:00.00+08:00` |
|   | `2022-01-01T00:00:00.000` |
|   | `2022-01-01T00:00:00.000Z` |
|   | `2022-01-01T00:00:00.000+08:00` |
|   | `2022-01-01T00:00:00.0000` |
|   | `2022-01-01T00:00:00.0000Z` |
|   | `2022-01-01T00:00:00.0000+08:00` |
|   | `2022-01-01T00:00:00.00000` |
|   | `2022-01-01T00:00:00.00000Z` |
|   | `2022-01-01T00:00:00.00000+08:00` |
|   | `2022-01-01T00:00:00.000000` |
|   | `2022-01-01T00:00:00.000000Z` |
|   | `2022-01-01T00:00:00.000000+08:00` |
|   | `2022-01-01T00:00:00.0000000` |
|   | `2022-01-01T00:00:00.0000000Z` |
|   | `2022-01-01T00:00:00.0000000+08:00` |

## Hidden Items and Folders

Hidden items and folders refer to items and folders that were deleted from BIM 360 Docs projects. They cannot be permanently deleted and remain `hidden` until they are restored. Items and folders that are deleted from other types of projects are immediately permanently deleted and cannot be hidden. Before they are deleted they are tagged as `hidden: false`.

By default, hidden items and folders are not returned.

| Example | Description |
| --- | --- |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) `filter[hidden]=true` | returns only items and folders that were deleted from BIM 360 Docs from the specified folder |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) `filter[hidden]=false` | returns all non-deleted files and folders from the specified folder for all types of projects |
| [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) `filter[hidden]=true,false` | returns both deleted and non-deleted files and folders from the specified folder for all types of projects |

Note that you can also use the `includeHidden` query string parameter in the [GET projects/:project_id/folders/:folder_id/contents](https://aps.autodesk.com/en/docs/data/v2/reference/http/projects-project_id-folders-folder_id-contents-GET/) endpoint to filter hidden items and folders.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/developers_guide/filtering
