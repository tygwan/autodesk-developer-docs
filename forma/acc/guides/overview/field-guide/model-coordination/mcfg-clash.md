---
title: "Clash Testing"
url_path: overview/field-guide/model-coordination/mcfg-clash
surface: guide
---
# Model Coordination Clash Testing

## Clash Testing

In Building Information Modeling (BIM), clash detection determines whether two parts of a building (for example, plumbing and walls) are interfering with one another. A _model_ is a document that defines, among other things, the dimensions and location of one or more objects. The Model Coordination clash detection service generates raw clash results by intersecting all of the models in one [model set version](https://aps.autodesk.com/en/docs/bim360/v1/overview/field-guide/mcfg-model-set/#model-set-versions), one pair at a time.

Clash Tests are executed for every model set version created by the system.

The abstract representations in the graphic below show Model A, a set of stair steps, and Model B, a bannister. Properly installed, there would be no clash between these models.

At some point while revising the installation designs, the bannister is repositioned improperly. A clash test detects the overlap between the models and reports a clash. The clash is represented by the red symbol in the diagram.

At the raw clash level, Model A ∩ Model B (the ∩ symbol means the model intersects, or clashes with). This is equivalent to Model B ∩ Model A.

You can examine the nature of the clash more closely by grouping the results of each clash test.

## Clash Grouping

You can filter and group raw clash test results to create a breakdown matrix that clearly indicates how many objects in a model set clash. Clash groups allow you to present more useful, pre-grouped clash data rather than raw clash numbers between models.

Model A, stair steps, is comprised of 5 objects. Model B, a bannister, is comprised of 1 object. The matrix table below the graphic lists the total number of clashes of individual objects in the model with the other models in the clash test. The order of intersection of rows and columns is significant: interpret the matrix view by reading each row individually. In clash grouping, A ∩ B no longer is the same as B ∩ A.
Interpret the clash matrix table row by row, reading across each row’s columns. Each column intersection shows the number of objects in the row model that are clashing with objects in the column model. 2 objects in Model A (A4 and A5) clash with the object in Model B. The 1 object in Model B clashes with objects in Model A.

To add more complexity, the example below introduces Model C, comprised of 2 supporting pillars. Pillar C2 is too tall and clashes with stair step A5. It also clashes with the improperly placed bannister, B1.

When working with clash groups, the total number of clashes between models is no longer the same as the total number of clashes between objects defined by the models. In this example, Model A clashes with two models (B and C), but the objects within Model A have a total of 3 clashes (A4 and A5 clash with B1, A5 clashes with C2).

Grouping and presenting clash data this way allows for the concept of _primacy_, where some models are of more importance to the user or are more likely to be moved to resolve clashes. In this example, moving the bannister would resolve 3 of the 4 object clashes between the models.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/model-coordination/mcfg-clash
