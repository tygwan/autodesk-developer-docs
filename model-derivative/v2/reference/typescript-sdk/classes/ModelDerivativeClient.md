---
title: "ModelDerivativeClient"
url_path: reference/typescript-sdk/classes/ModelDerivativeClient
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "TypeScript SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "typescript-sdk"
---
# Class: ModelDerivativeClient

Defined in: [custom-code/modelDerivativeClient.ts:8](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L8)

## Extends
- `BaseClient`

## Constructors

### Constructor

**new ModelDerivativeClient**(`optionalArgs?`): `ModelDerivativeClient`

Defined in: [custom-code/modelDerivativeClient.ts:16](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L16)

### optionalArgs?

#### authenticationProvider?

`IAuthenticationProvider`

#### sdkManager?

`SdkManager`

#### Returns

`ModelDerivativeClient`

#### Overrides

`BaseClient.constructor`

## Accessors

### authenticationProvider

#### Get Signature

**get** **authenticationProvider**(): `IAuthenticationProvider`

Defined in: node_modules/@aps_sdk/autodesk-sdkmanager/dist/src/baseClient.d.ts:4

#### Returns

`IAuthenticationProvider`

#### Set Signature

**set** **authenticationProvider**(`value`): `void`

Defined in: node_modules/@aps_sdk/autodesk-sdkmanager/dist/src/baseClient.d.ts:5

#### Parameters

#### value

`IAuthenticationProvider`

#### Returns

`void`

#### Inherited from

`BaseClient.authenticationProvider`

# Methods

## deleteManifest()

**Operation**: Delete Manifest

**deleteManifest**(`urn`, `optionalArgs?`): `Promise`<[`DeleteManifest`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/DeleteManifest)>

Defined in: [custom-code/modelDerivativeClient.ts:227](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L227)

Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.

**Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).

### Parameters

#### urn

`string`

The URL-safe Base64 encoded URN of the source design.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### Returns

`Promise`<[`DeleteManifest`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/DeleteManifest)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## fetchSpecificProperties()

**Operation**: Fetch Specific Properties

**fetchSpecificProperties**(`urn`, `modelGuid`, `specificPropertiesPayload`, `optionalArgs?`): `Promise`<[`SpecificProperties`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/SpecificProperties)>

Defined in: [custom-code/modelDerivativeClient.ts:597](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L597)

Queries the objects in the Model View (Viewable) specified by the `modelGuid` parameter and returns the specified properties in a paginated list. You can limit the number of objects to be queried by specifying a filter using the `query` attribute in the request body.

**Note:** A design file must be translated to SVF or SVF2 before you can query object properties.

Before you call this operation:
- Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getmodelviews) operation to obtain the list of Model Views in the source design.
- Pick the ID of the Model View you want to query and specify that ID as the value for the `modelGuid` parameter.

### Parameters

#### urn

`string`

The URL-safe Base64 encoded URN of the source design.

#### modelGuid

`string`

The ID of the Model View you are querying. Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getmodelviews) operation to get the IDs of the Model Views in the source design.

#### specificPropertiesPayload

[`SpecificPropertiesPayload`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecificPropertiesPayload)

### optionalArgs?

#### acceptEncoding?

`string`

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format.

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### xAdsDerivativeFormat?

[`XAdsDerivativeFormat`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/XAdsDerivativeFormat)

Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs or Forma Data Management service. Possible values are:
- `latest` - (Default) Return SVF2 Object IDs.
- `fallback` - Return SVF Object IDs.

**Note:**
- This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs or Forma Data Management service.
- The BIM 360 Docs or Forma Data Management service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs or Forma Data Management service. Setting this parameter to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.
- If you use this parameter with one derivative (URN), you must use it consistently across the following:  [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#startjob) (for OBJ output)
- [Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getobjecttree)
- [Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getallproperties)
- [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#fetchspecificproperties)

#### Returns

`Promise`<[`SpecificProperties`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/SpecificProperties)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## getAllProperties()

**Operation**: Fetch All Properties

**getAllProperties**(`urn`, `modelGuid`, `optionalArgs?`): `Promise`<[`Properties`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/Properties)>

Defined in: [custom-code/modelDerivativeClient.ts:531](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L531)

Returns a list of properties of all objects in the Model View specified by the `modelGuid` parameter.

This operation returns properties of all objects by default. However, you can restrict the results to a specific object by specifying its ID as the `objectid` parameter.

Properties are returned as a flat list, ordered, by their `objectid`. The `objectid` is a non-persistent ID assigned to an object when the source design is translated to the SVF or SVF2 format. This means that:
- A design file must be translated to SVF or SVF2 before you can retrieve properties.
- The `objectid` of an object can change if the design is translated to SVF or SVF2 again. If you require a persistent ID across translations, use `externalId` to reference objects, instead of `objectid`.

Before you call this operation:
- Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getmodelviews) operation to obtain the list of Model Views (Viewables) in the source design.
- Pick the ID of the Model View you want to query and specify that ID as the value for the `modelGuid` parameter.

**Tip**: Use [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#fetchspecificproperties) to retrieve only the objects and properties of interest. What’s more, the response is paginated. So, when the number of properties returned is large, responses start arriving more promptly.

### Parameters

#### urn

`string`

The URL-safe Base64 encoded URN of the source design.

#### modelGuid

`string`

The ID of the Model View you are querying. Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getmodelviews) operation to get the IDs of the Model Views in the source design.

### optionalArgs?

#### acceptEncoding?

`string`

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format.

```
    *
```

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### forceget?

`string`

`true`: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if `forceget` is `false`.

`false`: (Default) Does not retrieve resources if they are larger than 20 MB.

#### objectId?

`number`

The Object ID of the object you want to restrict the response to. If you do not specify this parameter, all properties of all objects within the Model View are returned.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### xAdsDerivativeFormat?

[`XAdsDerivativeFormat`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/XAdsDerivativeFormat)

Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs or Forma Data Management service. Possible values are:
- `latest` - (Default) Return SVF2 Object IDs.
- `fallback` - Return SVF Object IDs.

**Note:**
- This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs or Forma Data Management service.
- The BIM 360 Docs or Forma Data Management service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs or Forma Data Management service. Setting this parameter to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.
- If you use this parameter with one derivative (URN), you must use it consistently across the following:  [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#startjob) (for OBJ output)
- [Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getobjecttree)
- [Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getallproperties)
- [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#fetchspecificproperties)

#### xAdsForce?

`boolean`

`true`: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.- `false`: (Default) Use previously parsed property data to extract the object tree.

```
    *
```

#### Returns

`Promise`<[`Properties`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/Properties)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## getDerivativeUrl()

**Operation**: Fetch Derivative Download URL

**getDerivativeUrl**(`derivativeUrn`, `urn`, `optionalArgs?`): `Promise`<[`DerivativeDownload`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/DerivativeDownload)>

Defined in: [custom-code/modelDerivativeClient.ts:264](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L264)

Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the `derivativeUrn` parameter. The signed cookies have a lifetime of 6 hours. You can use range parameters with the returned download URL to download the derivative in chunks, in parallel.

### Parameters

#### derivativeUrn

`string`

The URL-encoded URN of the derivative. Use the [Fetch Manifest operation](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getmanifest) to obtain the URNs of derivatives for the specified source design.

#### urn

`string`

The URL-safe Base64 encoded URN of the source design.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### minutesExpiration?

`number`

Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of `400`.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### responseContentDisposition?

`string`

The value that must be specified as the `response-content-disposition` query string parameter with the download URL. Must begin with `attachment`. This value defaults to the default value corresponding to the derivative/file.

#### Returns

`Promise`<[`DerivativeDownload`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/DerivativeDownload)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## getFormats()

**Operation**: List Supported Formats

**getFormats**(`optionalArgs?`): `Promise`<[`SupportedFormats`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SupportedFormats)>

Defined in: [custom-code/modelDerivativeClient.ts:49](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L49)

Returns an up-to-date list of supported translations. This operation also provides information on the types of derivatives that can be generated for each source design file type. Furthermore, it allows you to obtain a list of translations that have changed since a specified date.

See the [Supported Translation Formats table](https://aps.autodesk.com/en/docs/model-derivative/v2/overview/supported-translations/) for more details.

**Note:** We keep adding new file formats to our supported translations list, constantly.

### optionalArgs?

#### acceptEncoding?

`string`

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format.

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### ifModifiedSince?

`string`

Specifies a date in the `Day of the week, DD Month YYYY HH:MM:SS GMT` format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status `304`, NOT MODIFIED.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### Returns

`Promise`<[`SupportedFormats`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SupportedFormats)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

#### Memberof

InformationalApi

## getManifest()

**Operation**: Fetch Manifest

**getManifest**(`urn`, `optionalArgs?`): `Promise`<[`Manifest`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Manifest)>

Defined in: [custom-code/modelDerivativeClient.ts:193](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L193)

Retrieves the manifest of the specified source design.

The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.

The first time you translate a source design, the Model Derivative service creates a manifest for that design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates the same manifest. It does not create a new manifest. Instead, the manifest acts like a central registry for all the derivatives of your source design created through the Model Derivative service.

When the Model Derivative service starts a translation job (as a result of a request you make using [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#startjob)), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own `status` attribute. The manifest also contains an overall `status` attribute. The overall `status` becomes `complete` when the `status` of all individual derivatives become complete.

Once the translation status of a derivative is `complete` you can download the derivative.

**Note:** You cannot download 3D SVF2 derivatives.

### Parameters

#### urn

`string`

The URL-safe Base64 encoded URN of the source design.

### optionalArgs?

#### acceptEncoding?

`string`

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format.

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### Returns

`Promise`<[`Manifest`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Manifest)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## getModelViews()

**Operation**: List Model Views

**getModelViews**(`urn`, `optionalArgs?`): `Promise`<[`ModelViews`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/ModelViews)>

Defined in: [custom-code/modelDerivativeClient.ts:457](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L457)

Returns a list of Model Views (Viewables) in the source design specified by the `urn` parameter. It also returns an ID that uniquely identifies the Model View. You can use these IDs with other metadata operations to obtain information about the objects within those Model Views.

Designs created with applications like Fusion 360 and Inventor contain only one Model View per design. Applications like Revit allow multiple Model Views per design.

**Note:** You can retrieve metadata only from a design that has already been translated to SVF or SVF2.

### Parameters

#### urn

`string`

The URL-safe Base64 encoded URN of the source design.

### optionalArgs?

#### acceptEncoding?

`string`

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format.

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### Returns

`Promise`<[`ModelViews`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/ModelViews)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## getObjectTree()

**Operation**: Fetch Object tree

**getObjectTree**(`urn`, `modelGuid`, `optionalArgs?`): `Promise`<[`ObjectTree`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ObjectTree)>

Defined in: [custom-code/modelDerivativeClient.ts:412](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L412)

Retrieves the structured hierarchy of objects, known as an object tree, from the specified Model View (Viewable) within the specified source design. The object tree represents the arrangement and relationships of various objects present in that Model View.

**Note:** A design file must be translated to SVF or SVF2 before you can retrieve its object tree.

Before you call this operation:
- Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getmodelviews) operation to obtain the list of Model Views in the source design.
- Pick the ID of the Model View you want to query and specify that ID as the value for the `modelGuid` parameter.

### Parameters

#### urn

`string`

The URL-safe Base64 encoded URN of the source design.

#### modelGuid

`string`

The ID of the Model View you are extracting the object tree from. Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getmodelviews) operation to get the IDs of the Model Views in the source design.

### optionalArgs?

#### acceptEncoding?

`string`

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format.

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### forceget?

`string`

`true`: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if `forceget` is `false`.

`false`: (Default) Does not retrieve resources if they are larger than 20 MB.

#### level?

`string`

Specifies how many child levels of the hierarchy to return, when the `objectid` parameter is specified. Currently supports only `level` = `1`.

#### objectId?

`number`

If specified, retrieves the sub-tree that has the specified Object ID as its parent node. If this parameter is not specified, retrieves the entire object tree.

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### xAdsDerivativeFormat?

[`XAdsDerivativeFormat`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/XAdsDerivativeFormat)

Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs or Forma Data Management service. Possible values are:
- `latest` - (Default) Return SVF2 Object IDs.
- `fallback` - Return SVF Object IDs.

**Note:**
- This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs or Forma Data Management service.
- The BIM 360 Docs or Forma Data Management service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs or Forma Data Management service. Setting this parameter to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.
- If you use this parameter with one derivative (URN), you must use it consistently across the following:  [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#startjob) (for OBJ output)
- [Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getobjecttree)
- [Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getallproperties)
- [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#fetchspecificproperties)

#### xAdsForce?

`boolean`

`true`: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.- `false`: (Default) Use previously parsed property data to extract the object tree.

#### Returns

`Promise`<[`ObjectTree`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ObjectTree)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## getThumbnail()

**Operation**: Fetch Thumbnail

**getThumbnail**(`urn`, `optionalArgs?`): `Promise`<`string`>

Defined in: [custom-code/modelDerivativeClient.ts:341](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L341)

Downloads a thumbnail of the specified source design.

### Parameters

#### urn

`string`

The URL-safe Base64 encoded URN of the source design.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### height?

[`Height`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Height)

Height of thumbnails. Possible values are: `100`, `200`, `400`.If `height` is omitted, but `width` is specified, `height` defaults to `width`. If both `width` and `height` are omitted, the server will return a thumbnail closest to `200`, if such a thumbnail is available

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### width?

[`Width`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Width)

Width of thumbnail in pixels. Possible values are: `100`, `200`, `400` If `width` is omitted, but `height` is specified, `width` defaults to `height`. If both `width` and `height` are omitted, the server will return a thumbnail closest to `200`, if such a thumbnail is available.

#### Returns

`Promise`<`string`>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## headCheckDerivative()

**Operation**: Check Derivative Details

**headCheckDerivative**(`urn`, `derivativeUrn`, `optionalArgs?`): `Promise`<`ApiResponse`>

Defined in: [custom-code/modelDerivativeClient.ts:306](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L306)

Returns information about the specified derivative.

Use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the `Range` parameter.

### Parameters

#### urn

`string`

The URL-safe Base64 encoded URN of the source design.

#### derivativeUrn

`string`

The URL-encoded URN of the derivative. Check the manifest of the source design to get the URNs of the derivatives available for download.

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### Returns

`Promise`<`ApiResponse`>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## specifyReferences()

**Operation**: Specify References

**specifyReferences**(`urn`, `specifyReferencesPayload`, `optionalArgs?`): `Promise`<[`SpecifyReferences`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecifyReferences)>

Defined in: [custom-code/modelDerivativeClient.ts:87](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L87)

Specifies the location of the files referenced by the specified source design.

When you call [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#startjob), set `checkReferences` to `true`. The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files.

### Parameters

#### urn

`string`

The Base64 (URL Safe) encoded design URN.

#### specifyReferencesPayload

[`SpecifyReferencesPayload`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecifyReferencesPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### Returns

`Promise`<[`SpecifyReferences`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/SpecifyReferences)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

## startJob()

**Operation**: Create Translation Job

**startJob**(`jobPayload`, `optionalArgs?`): `Promise`<[`Job`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Job)>

Defined in: [custom-code/modelDerivativeClient.ts:145](https://github.com/autodesk-platform-services/aps-sdk-node/blob/1eac33ac732b358235e77db0f440dd49d6d595b5/modelderivative/source/custom-code/modelDerivativeClient.ts#L145)

Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionally:
- Extract selected parts of a design and export the set of geometries in OBJ format.
- Generate different-sized thumbnails.

When the translation job runs, details about the process and generated derivatives are logged to a JSON file known as a manifest. This manifest is typically created during the first translation of a source design. Subsequently, the system updates the same manifest whenever a translation is performed for that design.

If necessary, you can set the `x-ads-force` parameter to `true`. Then, the system will delete the existing manifest and create a new one. However, be aware that doing so will also delete all previously generated derivatives.

### Parameters

#### jobPayload

[`JobPayload`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/JobPayload)

### optionalArgs?

#### accessToken?

`string`

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync().

#### options?

`ApsServiceRequestConfig`

Override http request option.

#### region?

[`Region`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

#### xAdsDerivativeFormat?

[`XAdsDerivativeFormat`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/enumerations/XAdsDerivativeFormat)

Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs or Forma Data Management service. Possible values are:
- `latest` - (Default) Return SVF2 Object IDs.
- `fallback` - Return SVF Object IDs.

**Note:**
- This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs or Forma Data Management service.
- The BIM 360 Docs or Forma Data Management service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs or Forma Data Management service. Setting this parameter to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.
- If you use this parameter with one derivative (URN), you must use it consistently across the following:  [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#startjob) (for OBJ output)
- [Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getobjecttree)
- [Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#getallproperties)
- [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient/#fetchspecificproperties)

#### xAdsForce?

`boolean`

Specifies how the translation job must handle any existing manifest and derivatives.
- `true`: Deletes the existing manifest and derivatives of the source design before translation.
- `false`: (Default) Updates existing manifest and generates derivatives only for the formats that the source design has no derivatives.

#### Returns

`Promise`<[`Job`](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/interfaces/Job)>

#### Throws

[ModelDerivativeApiError](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeApiError)

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/typescript-sdk/classes/ModelDerivativeClient
