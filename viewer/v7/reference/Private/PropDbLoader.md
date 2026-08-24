---
title: "PropDbLoader"
url_path: reference/Private/PropDbLoader
surface: viewer-sdk
document_kind: reference
category: "Private"
---
# PropDbLoader

Per model property database interface, talks to the worker thread behind the scenes.

## new PropDbLoader(sharedDbPath, model, eventTarget)

### Parameters

| sharedDbPath* |   |
| --- | --- |
| model* |   |
| eventTarget* |   |

# Methods

## getAttributeDefinitions(force)

Gets a list of all available attributes in the property database

### Parameters

| forceboolean | fetch the attribute definitions afresh (and update the cache) |
| --- | --- |

### Returns

| type | description |
| --- | --- |
| Promise ({category: string, dataTypeContext: (string\|undefined), description: (string\|undefined), flags: number, name: string, precision: number, propertyHash: string}[]) |   |

## getProperties(dbId, onSuccess, onError)

Gets the properties for an ID.

### Parameters

| dbId*number | The database identifier. |
| --- | --- |
| onSuccess[Callbacks#onPropertiesSuccess](https://aps.autodesk.com/en/docs/viewer/v7/reference/Callbacks/onPropertiesSuccess/) | Callback for when the properties are fetched. |
| onError[Callbacks#onGenericError](https://aps.autodesk.com/en/docs/viewer/v7/reference/Callbacks/onGenericError/) | Callback for when the properties are not found or another error occurs. |

## getProperties2(dbId, onSuccess, onError, options)

Gets the properties for an ID. New version of getProperties() that avoids loading of externalId table unless really needed.

### Parameters

| dbId*number | The database identifier. |
| --- | --- |
| onSuccess[Callbacks#onPropertiesSuccess](https://aps.autodesk.com/en/docs/viewer/v7/reference/Callbacks/onPropertiesSuccess/) | Callback for when the properties are fetched. |
| onError[Callbacks#onGenericError](https://aps.autodesk.com/en/docs/viewer/v7/reference/Callbacks/onGenericError/) | Callback for when the properties are not found or another error occurs. |
| optionsobject |   |
| needsExternalIdboolean | If true, we enforce loading of externalIDs if necessary. ExternalIds may significantly increase memory consumption and should only be loaded if unavoidable. |

## getBulkProperties(dbIds, propFilter, onSuccess, onError, ignoreHidden)

Bulk property retrieval with property name filter.

### Parameters

| dbIds*Array.<number> | array of object dbIds to return properties for. |
| --- | --- |
| propFilterobject | array of property names to retrieve values for. If empty, all properties are returned. |
| onSuccess*function | Callback function for when results are ready. |
| onError*function | Callback function for when something went wrong. |
| ignoreHiddenboolean | true to ignore hidden properties. |

## getBulkProperties2(dbIds, options, onSuccess, onError)

Bulk property retrieval with property name filter.

### Parameters

| dbIds*Array.<number> | array of object dbIds to return properties for. |
| --- | --- |
| optionsobject |   |
| propFilterArray.<string> | array of property names to retrieve values for. If empty, all properties are returned. |
| categoryFilterArray.<string> | array of category names to retrieve values for. If empty, all properties are returned. |
| ignoreHiddenboolean | true to ignore hidden properties. |
| needsExternalIdboolean | If true, it is ensured that externalId table is loaded before doing the property query. |
| onSuccess*function | Callback function for when results are ready. |
| onError*function | Callback function for when something went wrong. |

## getPropertySet(dbIds, options, onSuccess, onError)

Retrieves properties related to the specified dbIds. The results object that is passed into the onSuccess callback contains the displayName and displayCategory separated by a ‘/’ as the key and all of the related properties as the entry’s value. The results can be used to create a new [PropertySet](https://aps.autodesk.com/en/docs/viewer/v7/reference/Viewing/PropertySet/) instance.

### Parameters

| dbIds*Array.<number> | array of object dbIds to return properties for. |
| --- | --- |
| optionsObject |   |
| propFilterArray.<string> | array of property names to retrieve values for. If empty, all properties are returned. |
| ignoreHiddenboolean | true to ignore hidden properties. |
| needsExternalIdboolean | If true, it is ensured that externalId table is loaded before doing the property query. |
| onSuccess*function | Callback function for when results are ready. |
| onError*function | Callback function for when something went wrong. |

## executeUserFunction(code, userData)

Allows executing user supplied function code on the worker thread against the [PropertyDatabase](https://aps.autodesk.com/en/docs/viewer/v7/reference/Private/PropertyDatabase/) instance. The returned value from the supplied function will be used to resolve the returned Promise.

### Parameters

| code*function, string | Function takes two arguments, the [PropertyDatabase](https://aps.autodesk.com/en/docs/viewer/v7/reference/Private/PropertyDatabase/) instance and userData. |
| --- | --- |
| userData* | A value that will get passed to the `code` function when run in the property worker context. it needs to be serializable. |

### Returns

| type | description |
| --- | --- |
| Promise | Resolves with the return value of user function. |

### Examples

```
function myCustomFunction(pdb, userData) {
       const dbId = 1;
       pdb.enumObjectProperties(dbId, function(propId, valueId) {
             // do stuff
       });
       return 42 * userData; // userData will be 2 in this example
  }
  executeUserFunction(myCustomFunction, 2).then(function(result) {
       console.log(result); // result === 84 === 42 * 2
  })
```

You can also directly pass in a string, which must contain just the function definition.

```
await executeUserFunction('function myCustomFunction(pdb, userData) { ... }');
```

Note that the function must be fully self-contained, and free of any syntax that causes e.g. babel
to change it using polyfills (e.g. decopomposition operators). Since the polyfills don’t exist
in the worker, the function could fail depending on babeling.

## getLoadProgress()

Estimated load progress in percent.

### Returns

| type | description |
| --- | --- |
| number | in the range 0..100 |

## isLoadDone()

Returns true if loading is finished (either with success or with error)

### Returns

| type | description |
| --- | --- |
| boolean |   |

---
원본 문서: https://aps.autodesk.com/en/docs/viewer/v7/reference/Private/PropDbLoader
