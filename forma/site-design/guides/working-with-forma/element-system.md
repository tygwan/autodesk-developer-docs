---
title: "Element System"
url_path: working-with-forma/element-system
surface: guide
---
# Forma Element System

This section describes _elements_ - the key building block for data in Autodesk
Forma.

The core idea behind Forma’s element system is to decouple geometry providers and
let each of them use their own internal services to create and edit geometrical
features.

By only having clear expectations to how elements are _served_ and which
_properties_ and derived _representations_ are available, it is possible to consume
all pieces of a model which has been built up via many different data sources
and authoring modes.

As long as each _element_ is served according to the specification, the entire
model can be consumed without regard to where the individual pieces of data are
stored or where they came from.

The
[FormaElement spec](https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/forma-element-specification/)
is therefore a natural starting point for exploring the specified output format.
But before diving in, we recommend understanding the
[key principles](https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system/key-principles/)
for the system.

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/working-with-forma/element-system
