---
title: "Auth context"
url_path: working-with-forma/authcontext
surface: guide
---
# Auth context

Auth context is a concept in the API that points to either a hub ID or a project ID. All API endpoints use it as a query
parameter to indicate the ownership of data, and the caller must be authorized to access data of the given auth context.
The query parameter name is always `authcontext` in lowercase, no space.

It is also used frequently in global IDs, such as element IDs, which is needed so that the proper auth context can be
used when looking up the data for an element ID.

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/authcontext
