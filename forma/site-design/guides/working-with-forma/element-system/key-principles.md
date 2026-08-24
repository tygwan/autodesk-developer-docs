---
title: "Key principles"
url_path: working-with-forma/element-system/key-principles
surface: guide
---
# Key principles for working with elements

## 1. Specification as the source of truth

Consumers should only rely on data according to the element schema, and not make
assumptions on undocumented data returned by an API. This goes both ways -
element producers should strive to only serve data according to the official
element specification or specifically label data as internal.

## 2. Write generic handlers

When parsing an element tree, consumers should gracefully handle elements that
do not provide the representation your feature needs to be unlocked.

Consumers can’t expect an element to always provide the derived representations
they did earlier.

## 3. Immutability

A specific revision of an element should be immutable. It’s representations and
other properties should not change. Editing an element should lead to the
creation of a new revision, and updating references to the new revision is
necessary for changes in the element to propagate to e.g. the proposal it is in.

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/key-principles
