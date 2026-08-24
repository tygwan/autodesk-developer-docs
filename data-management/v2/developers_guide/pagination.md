---
title: "Pagination"
url_path: developers_guide/pagination
product: "Data Management API"
surface: "data-management-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "pagination"
---
# Pagination

## OSS Pagination

When listing buckets and objects, if the total count of items is greater than the default page size, it is necessary to make multiple calls to the endpoint to retrieve all items. When calling for a set of items, store the last item’s key or name, and use that item as the starting point for the next call.

| beginsWithstring | returns objects beginning with the entered value |
| --- | --- |
| limitenum: int | the number of objects to return in the response payload

Acceptable values: `1`-`100`
Default value: `10` |
| startAtstring | key to use as an offset to continue pagination; typically the last key found
in the preceding response |

## Project and Data Service Pagination

Consistent with the [JSON API specification for pagination](http://jsonapi.org/format/#fetching-pagination),
many of the Project and Data service APIs support pagination to limit the number of resources returned in a response.

Page numbers are 0-based (the first page is page 0). So, to access the second page of the results, with ten resources per page, you must specify the query string parameter as `?page[number]=1&page[limit]=10`.

Note that when pagination is combined with filtering, the pagination parameters are applied before filtering. This may result in fewer records per page than expected. Always check for the existence of a `links.next.href` element to determine if additional pages are available.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/developers_guide/pagination
