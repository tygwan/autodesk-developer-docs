---
title: "Extension types"
url_path: overview/extension-types
surface: guide
---
# Extension types

Your extension can provide different types of functionality. _[Embedded view](https://aps.autodesk.com/en/docs/forma/v1/embedded-views/introduction)_ is an option that lets you add general functionality and UI inside Forma. We also provide HTTP API’s that allows you to access data and interact with Forma from other contexts.

## Embedded views

An embedded view is a web page provided by you that is included as a part of
Forma as an iframe. It is by far the most flexible way to extend Forma, since it
gives you the ability to provide custom UI and run JavaScript or WebAssembly
code. There are different placements for the embedded view depending on what
functionality you want to provide.
[Read more here](https://aps.autodesk.com/en/docs/forma/v1/embedded-views/introduction).

## HTTP API’s

With the API’s, you can interact with Forma from your desired context. Through these
apis you can read and write geometry, manage project and proposals or orgainze the library.
To interact with the api’s you’ll need a 3-legged token, obtained by having the user
complete a login flow. [Read more here](https://aps.autodesk.com/en/docs/forma/v1/embedded-views/using-http-apis).

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/overview/extension-types
