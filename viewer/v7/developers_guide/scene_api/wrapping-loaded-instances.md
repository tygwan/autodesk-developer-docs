---
title: "Wrapping Loaded Instances"
url_path: developers_guide/scene_api//wrapping-loaded-instances
surface: viewer-sdk
document_kind: guide
category: "scene_api"
---
# Wrapping Loaded Instances

This example shows how to interact with loaded models and customize the rendering of loaded objects.
When a model is loaded from the cloud, its instances already exist in the [InstanceCollection3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceCollection3D/).

We show how to use the ObjectTree (via [Model.getObjectTreeAsync](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/Model/#getObjectTreeAsync/)) to map objects (identified by dbIds) to instances and change their position.

Instead of directly using the [InstanceCollection3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceCollection3D/) interfaces, we
show how to wrap existing objects in scene graph nodes with [InstanceNode3D.fromInstance(instanceId, parent)](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceNode3D/#fromInstance/) and move them as one transformation group.
This gives you the full transform hierarchy of the scene-graph API over geometry that was loaded, not authored in code.

Understanding the object-to-instance direction is essential. A _dbId_ is an **object** id — it
identifies a logical component in the object tree (think: a door, a room, a structural column). One
object can have **multiple instances**, each with its own geometry, material, and transform stored
in the [InstanceCollection3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceCollection3D/). [enumNodeInstances(node, callback)](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/ObjectTree/#enumNodeInstances/) iterates those instances,
supplying each instance id to the callback. The pattern is: object tree → dbId →
[enumNodeInstances](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/ObjectTree/#enumNodeInstances/) → instance ids → [InstanceNode3D.fromInstance()](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/InstanceNode3D/#fromInstance/).

**Opt-In feature — required for loaded models.**

Enable the Scene API before `Autodesk.Viewing.Initializer`:

```
FeatureFlags.set(Autodesk.Viewing.PublicFeatureFlags.SceneAPI, true);

Autodesk.Viewing.Initializer(options, function() {
    // ... create viewer, load document ...
});
```

## Source

**Gather instance ids from dbIds**

The snippet below collects only instances that have geometry.

```
const targetDbIds = [
  260, 261, 262, 263, 264, 265,
  266, 267, 268, 269, 270, 271,
];

const objectTree = await model.getObjectTreeAsync();

const instanceIds = [];
for (let i = 0; i < targetDbIds.length; i++) {
  objectTree.enumNodeInstances(
    targetDbIds[i],
    (instanceId) => {
      if (instances.getGeometry(instanceId)) {
        instanceIds.push(instanceId);
      }
    },
    true
  );
}
```

**Wrap instances in scene graph nodes**

Instances are wrapped in a scene graph node and grouped under a single [Node3D](https://aps.autodesk.com/en/docs/viewer/v7/reference/Scene/Node3D/).

```
const root = instances.getSceneGraph();
const group = new avs.Node3D();
root.add(group);

// Wrap the selected instances into the group
const nodes = [];
for (let j = 0; j < instanceIds.length; j++) {
  const node = avs.InstanceNode3D.fromInstance(
    instanceIds[j], group
  );
  nodes.push(node);
}
```

**Update positions of all instances**

The group of wrapped instances can be moved in one call.

```
const togglePosition = () => {
  // Move the group — all wrapped instances follow
  if (group.position.equals(originalPosition)) {
    group.position.y -= 40;
    group.position.z -= 4;
  } else {
    group.position.copy(originalPosition);
  }
  group.updateTransformWorld(true);
  viewer.refresh(true);
  setTimeout(togglePosition, 1000);
};

togglePosition();
```

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/scene_api/wrapping-loaded-instances
