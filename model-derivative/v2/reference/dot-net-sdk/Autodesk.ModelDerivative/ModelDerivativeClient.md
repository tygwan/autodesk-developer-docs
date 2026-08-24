---
title: "ModelDerivativeClient Class"
url_path: reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class ModelDerivativeClient

Namespace: [Autodesk.ModelDerivative](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative)Assembly: Autodesk.ModelDerivative.dll

Represents a collection of functions to interact with the API endpoints

```
public class ModelDerivativeClient : BaseClient
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
BaseClient ←
[ModelDerivativeClient](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient)

## Inherited Members

BaseClient.AuthenticationProvider,
[object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

# Constructors

## ModelDerivativeClient(SDKManager, IAuthenticationProvider)

**Operation:** Initializes a new instance of the class.

```
public ModelDerivativeClient(SDKManager sdkManager = null, IAuthenticationProvider authenticationProvider = null)
```

### Parameters

`sdkManager` SDKManager

The SDK manager.

`authenticationProvider` IAuthenticationProvider

The authentication provider.

# Methods

## DeleteManifestAsync(string, Region, string, bool)

**Operation:** Delete Manifest

```
public Task<DeleteManifest> DeleteManifestAsync(string urn, Region region = Region.US, string accessToken = null, bool throwOnError = true)
```

Deletes the manifest of the specified source design. It also deletes all derivatives (translated output files) generated from the source design. However, it does not delete the source design.

**Note:** This operation is idempotent. So, if you call it multiple times, even when no manifest exists, will still return a successful response (200).

### Parameters

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-safe Base64 encoded URN of the source design.

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[DeleteManifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/DeleteManifest)>

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## FetchSpecificPropertiesAsync(string, string, SpecificPropertiesPayload, Region, XAdsDerivativeFormat, string, string, bool)

**Operation:** Fetch Specific Properties

```
public Task<SpecificProperties> FetchSpecificPropertiesAsync(string urn, string modelGuid, SpecificPropertiesPayload specificPropertiesPayload, Region region = Region.US, XAdsDerivativeFormat xAdsDerivativeFormat = XAdsDerivativeFormat.Latest, string acceptEncoding = null, string accessToken = null, bool throwOnError = true)
```

Queries the objects in the Model View (Viewable) specified by the `modelGuid` parameter and returns the specified properties in a paginated list. You can limit the number of objects to be queried by specifying a filter using the `query` attribute in the request body.

**Note:** A design file must be translated to SVF or SVF2 before you can query object properties.

Before you call this operation:
- Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetModelViewsAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_) operation to obtain the list of Model Views in the source design.
- Pick the ID of the Model View you want to query and specify that ID as the value for the `modelGuid` parameter.

### Parameters

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-safe Base64 encoded URN of the source design.

`modelGuid` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID of the Model View you are querying. Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetModelViewsAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_) operation to get the IDs of the Model Views in the source design.

`specificPropertiesPayload` [SpecificPropertiesPayload](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificPropertiesPayload)

The payload containing the specific properties to be fetched.

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`xAdsDerivativeFormat` [XAdsDerivativeFormat](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/XAdsDerivativeFormat)

Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs or Forma Data Management service. Possible values are:
- `latest` - (Default) Return SVF2 Object IDs.
- `fallback` - Return SVF Object IDs.

**Note:**
- This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs or Forma Data Management service.
- The BIM 360 Docs or Forma Data Management service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs or Forma Data Management service. Setting this parameter to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.
- If you use this parameter with one derivative (URN), you must use it consistently across the following:  [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_StartJobAsync_System_String_Autodesk_ModelDerivative_Model_JobPayload_Autodesk_ModelDerivative_Model_Region_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_Boolean_) (for OBJ output)
- [Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetObjectTreeAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_String_System_Int32_System_String_System_Boolean_)
- [Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetAllPropertiesAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_Int32_System_String_System_Boolean_)
- [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_FetchSpecificPropertiesAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_SpecificPropertiesPayload_Autodesk_ModelDerivative_Model_Region_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_String_System_Boolean_) (optional)

`acceptEncoding` [string](https://learn.microsoft.com/dotnet/api/system.string)

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[SpecificProperties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecificProperties)>

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## GetAllPropertiesAsync(string, string, Region, string, bool, XAdsDerivativeFormat, int, string, string, bool)

**Operation:** Fetch All Properties

```
public Task<Properties> GetAllPropertiesAsync(string urn, string modelGuid, Region region = Region.US, string acceptEncoding = null, bool xAdsForce = false, XAdsDerivativeFormat xAdsDerivativeFormat = XAdsDerivativeFormat.Latest, int objectid = 0, string forceget = null, string accessToken = null, bool throwOnError = true)
```

Returns a list of properties of all objects in the Model View specified by the `modelGuid` parameter.

This operation returns properties of all objects by default. However, you can restrict the results to a specific object by specifying its ID as the `objectid` parameter.

Properties are returned as a flat list, ordered, by their `objectid`. The `objectid` is a non-persistent ID assigned to an object when the source design is translated to the SVF or SVF2 format. This means that:
- A design file must be translated to SVF or SVF2 before you can retrieve properties.
- The `objectid` of an object can change if the design is translated to SVF or SVF2 again. If you require a persistent ID across translations, use `externalId` to reference objects, instead of `objectid`.

Before you call this operation:
- Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetModelViewsAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_) operation to obtain the list of Model Views (Viewables) in the source design.
- Pick the ID of the Model View you want to query and specify that ID as the value for the `modelGuid` parameter.

**Tip**: Use [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_FetchSpecificPropertiesAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_SpecificPropertiesPayload_Autodesk_ModelDerivative_Model_Region_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_String_System_Boolean_) to retrieve only the objects and properties of interest. What’s more, the response is paginated. So, when the number of properties returned is large, responses start arriving more promptly.

### Parameters

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-safe Base64 encoded URN of the source design.

`modelGuid` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID of the Model View you are querying. Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetModelViewsAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_) operation to get the IDs of the Model Views in the source design.

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`acceptEncoding` [string](https://learn.microsoft.com/dotnet/api/system.string)

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format. (optional)

`xAdsForce` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`true`: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.

`false`: (Default) Use previously parsed property data to extract the object tree. (optional)

`xAdsDerivativeFormat` [XAdsDerivativeFormat](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/XAdsDerivativeFormat)

Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs or Forma Data Management service. Possible values are:
- `latest` - (Default) Return SVF2 Object IDs.
- `fallback` - Return SVF Object IDs.

**Note:**
- This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs or Forma Data Management service.
- The BIM 360 Docs or Forma Data Management service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs or Forma Data Management service. Setting this parameter to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.
- If you use this parameter with one derivative (URN), you must use it consistently across the following:  [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_StartJobAsync_System_String_Autodesk_ModelDerivative_Model_JobPayload_Autodesk_ModelDerivative_Model_Region_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_Boolean_) (for OBJ output)
- [Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetObjectTreeAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_String_System_Int32_System_String_System_Boolean_)
- [Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetAllPropertiesAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_Int32_System_String_System_Boolean_)
- [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_FetchSpecificPropertiesAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_SpecificPropertiesPayload_Autodesk_ModelDerivative_Model_Region_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_String_System_Boolean_) (optional)

`objectid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Object ID of the object you want to restrict the response to. If you do not specify this parameter, all properties of all objects within the Model View are returned. (optional)

`forceget` [string](https://learn.microsoft.com/dotnet/api/system.string)

`true`: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if `forceget` is `false`.

`false`: (Default) Does not retrieve resources if they are larger than 20 MB. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Properties)>

Task of Properties

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## GetDerivativeUrlAsync(string, string, Region, int, string, string, bool)

**Operation:** Fetch Derivative Download URL

```
public Task<DerivativeDownload> GetDerivativeUrlAsync(string derivativeUrn, string urn, Region region = Region.US, int minutesExpiration = 0, string responseContentDisposition = null, string accessToken = null, bool throwOnError = true)
```

Returns a download URL and a set of signed cookies, which lets you securely download the derivative specified by the `derivativeUrn` parameter. The signed cookies have a lifetime of 6 hours. You can use range parameters with the returned download URL to download the derivative in chunks, in parallel.

### Parameters

`derivativeUrn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded URN of the derivative. Use the [Fetch Manifest operation](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetManifestAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_)to obtain the URNs of derivatives for the specified source design.

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-safe Base64 encoded URN of the source design.

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`minutesExpiration` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies how many minutes the signed cookies should remain valid. Default value is 360 minutes. The value you specify must be lower than the default value for this parameter. If you specify a value greater than the default value, the Model Derivative service will return an error with an HTTP status code of `400`. (optional)

`responseContentDisposition` [string](https://learn.microsoft.com/dotnet/api/system.string)

The value that must be specified as the `response-content-disposition` query string parameter with the download URL. Must begin with `attachment`. This value defaults to the default value corresponding to the derivative/file. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[DerivativeDownload](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/DerivativeDownload)>

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## GetFormatsAsync(string, string, string, bool)

**Operation:** List Supported Formats

```
public Task<SupportedFormats> GetFormatsAsync(string ifModifiedSince = null, string acceptEncoding = null, string accessToken = null, bool throwOnError = true)
```

Returns an up-to-date list of supported translations. This operation also provides information on the types of derivatives that can be generated for each source design file type. Furthermore, it allows you to obtain a list of translations that have changed since a specified date.

See the [Supported Translation Formats table](https://aps.autodesk.com/en/docs/model-derivative/v2/overview/supported-translations) for more details.

**Note:** We keep adding new file formats to our supported translations list, constantly.

### Parameters

`ifModifiedSince` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies a date in the `Day of the week, DD Month YYYY HH:MM:SS GMT` format. The response will contain only the formats modified since the specified date and time. If you specify an invalid date, the response will contain all supported formats. If no changes have been made after the specified date, the service returns HTTP status `304`, NOT MODIFIED. (optional)

`acceptEncoding` [string](https://learn.microsoft.com/dotnet/api/system.string)

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)
 
Indicates whether to throw an exception on error.(optional)

Returns
[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[SupportedFormats](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SupportedFormats)>

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## GetManifestAsync(string, Region, string, string, bool)

**Operation:** Fetch Manifest

```
public Task<Manifest> GetManifestAsync(string urn, Region region = Region.US, string acceptEncoding = null, string accessToken = null, bool throwOnError = true)
```

Retrieves the manifest of the specified source design.

The manifest is a JSON file containing information about all the derivatives translated from the specified source design. It contains information such as the URNs of the derivatives, the translation status of each derivative, and much more.

The first time you translate a source design, the Model Derivative service creates a manifest for that design. Thereafter, every time you translate that source design, even to a different format, the Model Derivative service updates the same manifest. It does not create a new manifest. Instead, the manifest acts like a central registry for all the derivatives of your source design created through the Model Derivative service.

When the Model Derivative service starts a translation job (as a result of a request you make using [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/job-POST/)), it keeps on updating the manifest at regular intervals. So, you can use the manifest to check the status and progress of each derivative that is being generated. When multiple derivatives have been requested each derivative may complete at a different time. So, each derivative has its own `status` attribute. The manifest also contains an overall `status` attribute. The overall `status` becomes `complete` when the `status` of all individual derivatives become complete.

Once the translation status of a derivative is `complete` you can download the derivative.

**Note:** You cannot download 3D SVF2 derivatives.

### Parameters

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-safe Base64 encoded URN of the source design.

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`acceptEncoding` [string](https://learn.microsoft.com/dotnet/api/system.string)

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Manifest)>

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## GetModelViewsAsync(string, Region, string, string, bool)

**Operation:** List Model Views

```
public Task<ModelViews> GetModelViewsAsync(string urn, Region region = Region.US, string acceptEncoding = null, string accessToken = null, bool throwOnError = true)
```

Returns a list of Model Views (Viewables) in the source design specified by the `urn` parameter. It also returns an ID that uniquely identifies the Model View. You can use these IDs with other metadata operations to obtain information about the objects within those Model Views.

Designs created with applications like Fusion 360 and Inventor contain only one Model View per design. Applications like Revit allow multiple Model Views per design.

**Note:** You can retrieve metadata only from a design that has already been translated to SVF or SVF2.

### Parameters

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-safe Base64 encoded URN of the source design.

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`acceptEncoding` [string](https://learn.microsoft.com/dotnet/api/system.string)

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ModelViews](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ModelViews)>

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## GetObjectTreeAsync(string, string, Region, string, bool, XAdsDerivativeFormat, string, int, string, string, bool)

**Operation:** Fetch Object tree

```
public Task<ObjectTree> GetObjectTreeAsync(string urn, string modelGuid, Region region = Region.US, string acceptEncoding = null, bool xAdsForce = false, XAdsDerivativeFormat xAdsDerivativeFormat = XAdsDerivativeFormat.Latest, string forceget = null, int objectid = 0, string level = null, string accessToken = null, bool throwOnError = true)
```

Retrieves the structured hierarchy of objects, known as an object tree, from the specified Model View (Viewable) within the specified source design. The object tree represents the arrangement and relationships of various objects present in that Model View.

**Note:** A design file must be translated to SVF or SVF2 before you can retrieve its object tree.

Before you call this operation:
- Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetModelViewsAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_) operation to obtain the list of Model Views in the source design.
- Pick the ID of the Model View you want to query and specify that ID as the value for the `modelGuid` parameter.

### Parameters

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-safe Base64 encoded URN of the source design.

`modelGuid` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ID of the Model View you are extracting the object tree from. Use the [List Model Views](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetModelViewsAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_) operation to get the IDs of the Model Views in the source design.

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`acceptEncoding` [string](https://learn.microsoft.com/dotnet/api/system.string)

A comma separated list of the algorithms you want the response to be encoded in, specified in the order of preference.

If you specify `gzip` or `*`, content is compressed and returned in gzip format. (optional)

`xAdsForce` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`true`: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.

`false`: (Default) Use previously parsed property data to extract the object tree. (optional)

`xAdsDerivativeFormat` [XAdsDerivativeFormat](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/XAdsDerivativeFormat)

Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs or Forma Data Management service. Possible values are:
- `latest` - (Default) Return SVF2 Object IDs.
- `fallback` - Return SVF Object IDs.

**Note:**
- This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs or Forma Data Management service.
- The BIM 360 Docs or Forma Data Management service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs or Forma Data Management service. Setting this parameter to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.
- If you use this parameter with one derivative (URN), you must use it consistently across the following:  [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_StartJobAsync_System_String_Autodesk_ModelDerivative_Model_JobPayload_Autodesk_ModelDerivative_Model_Region_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_Boolean_) (for OBJ output)
- [Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetObjectTreeAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_String_System_Int32_System_String_System_Boolean_)
- [Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetAllPropertiesAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_Int32_System_String_System_Boolean_)
- [Fetch Specific Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_FetchSpecificPropertiesAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_SpecificPropertiesPayload_Autodesk_ModelDerivative_Model_Region_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_String_System_Boolean_) (optional)

`forceget` [string](https://learn.microsoft.com/dotnet/api/system.string)

`true`: Retrieves large resources, even beyond the 20 MB limit. If exceptionally large (over 800 MB), the system acts as if `forceget` is `false`.

`false`: (Default) Does not retrieve resources if they are larger than 20 MB. (optional)

`objectid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

If specified, retrieves the sub-tree that has the specified Object ID as its parent node. If this parameter is not specified, retrieves the entire object tree. (optional)

`level` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies how many child levels of the hierarchy to return, when the `objectid` parameter is specified. Currently supports only `level` = `1`. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[ObjectTree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/ObjectTree)>

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## GetThumbnailAsync(string, Width, Height, Region, string, bool)

**Operation:** Fetch Thumbnail

```
public Task<Stream> GetThumbnailAsync(string urn, Width width = Width.NUMBER_200, Height height = Height.NUMBER_200, Region region = Region.US, string accessToken = null, bool throwOnError = true)
```

Downloads a thumbnail of the specified source design.

### Parameters

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-safe Base64 encoded URN of the source design.

`width` [Width](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Width)

Width of thumbnail in pixels.

Possible values are: `100`, `200`, `400`

If `width` is omitted, but `height` is specified, `width` defaults to `height`. If both `width` and `height` are omitted, the server will return a thumbnail closest to `200`, if such a thumbnail is available. (optional)

`height` [Height](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Height)

Height of thumbnails.

Possible values are: `100`, `200`, `400`.

If `height` is omitted, but `width` is specified, `height` defaults to `width`. If both `width` and `height` are omitted, the server will return a thumbnail closest to `200`, if such a thumbnail is available. (optional)

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)>

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## HeadCheckDerivativeAsync(string, string, Region, string, bool)

**Operation:** Check Derivative Details

```
public Task<HttpResponseMessage> HeadCheckDerivativeAsync(string urn, string derivativeUrn, Region region = Region.US, string accessToken = null, bool throwOnError = true)
```

Returns information about the specified derivative.

Use this operation to determine the total content length of a derivative before you download it. If the derivative is large, you can choose to download the derivative in chunks, by specifying a chunk size using the `Range` parameter parameter.

### Parameters

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-safe Base64 encoded URN of the source design.

`derivativeUrn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The URL-encoded URN of the derivative. Check the manifest of the source design to get the URNs of the derivatives available for download.

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)>

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## SpecifyReferencesAsync(string, SpecifyReferencesPayload, Region, string, bool)

**Operation:** Specify References

```
public Task<SpecifyReferences> SpecifyReferencesAsync(string urn, SpecifyReferencesPayload referencesPayload, Region region = Region.US, string accessToken = null, bool throwOnError = true)
```

Specifies the location of the files referenced by the specified source design.

When you call [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_StartJobAsync_System_String_Autodesk_ModelDerivative_Model_JobPayload_Autodesk_ModelDerivative_Model_Region_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_Boolean_), set `checkReferences` to `true`. The Model Derivative service will then use the details you specify in this operation to locate and download the referenced files.

### Parameters

`urn` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Base64 (URL Safe) encoded design URN.

`referencesPayload` [SpecifyReferencesPayload](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecifyReferencesPayload)

(optional)

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives of the specified source design are stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for the European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note**: Beta features are subject to change. Please avoid using them in production environments. (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[SpecifyReferences](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/SpecifyReferences)>

Task of SpecifyReferences

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

## StartJobAsync(JobPayload, Region, bool, XAdsDerivativeFormat, string, bool)

**Operation:** Create Translation Job

```
public Task<Job> StartJobAsync(JobPayload jobPayload, Region region = Region.US, bool xAdsForce = false, XAdsDerivativeFormat xAdsDerivativeFormat = XAdsDerivativeFormat.Latest, string accessToken = null, bool throwOnError = true)
```

Creates a job to translate the specified source design to another format, generating derivatives of the source design. You can optionally:
- Extract selected parts of a design and export the set of geometries in OBJ format.
- Generate different-sized thumbnails.

When the translation job runs, details about the process and generated derivatives are logged to a JSON file known as a manifest. This manifest is typically created during the first translation of a source design. Subsequently, the system updates the same manifest whenever a translation is performed for that design.

If necessary, you can set the `x-ads-force` parameter to `true`. Then, the system will delete the existing manifest and create a new one. However, be aware that doing so will also delete all previously generated derivatives.

### Parameters

`jobPayload` [JobPayload](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/JobPayload)

`region` [Region](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Region)

Specifies the data center where the manifest and derivatives must be stored. Possible values are:
- `US` - (Default) Data center for the US region.
- `EMEA` - Data center for European Union, Middle East, and Africa.
- `AUS` - Data center for the Australia region.
- `CAN` - Data center for the Canada region.
- `DEU` - Data center for the Germany region.
- `IND` - Data center for the India region.
- `JPN` - Data center for the Japan region.
- `GBR` - Data center for the United Kingdom region.

**Note:**
- Beta features are subject to change. Please avoid using them in production environments.
- Calling this operation twice for the same source design with different values for this parameter creates two distinct sets of manifests and derivatives. Each set is stored in the respective region. (optional)

`xAdsForce` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`true`: Forces the system to parse property data all over again. Use this option to retrieve an object tree when previous attempts have failed.

`false`: (Default) Use previously parsed property data to extract the object tree. (optional)

`xAdsDerivativeFormat` [XAdsDerivativeFormat](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/XAdsDerivativeFormat)

Specifies what Object IDs to return, if the design has legacy SVF derivatives generated by the BIM Docs or Forma Data Management service. Possible values are:
- `latest` - (Default) Return SVF2 Object IDs.
- `fallback` - Return SVF Object IDs.

**Note:**
- This parameter applies only to designs with legacy SVF derivatives generated by the BIM 360 Docs or Forma Data Management service.
- The BIM 360 Docs or Forma Data Management service now generates SVF2 derivatives. SVF2 Object IDs may not be compatible with the SVF Object IDs previously generated by the BIM 360 Docs or Forma Data Management service. Setting this parameter to fallback may resolve backward compatibility issues resulting from Object IDs of legacy SVF derivatives being retained on the client side.
- If you use this parameter with one derivative (URN), you must use it consistently across the following:  [Create Translation Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST) (for OBJ output)
- [Fetch Object Tree](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-modelguid-GET)
- [Fetch All Properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-properties-GET) (optional)

`accessToken` [string](https://learn.microsoft.com/dotnet/api/system.string)

An access token obtained by a call to GetThreeLeggedTokenAsync() or GetTwoLeggedTokenAsync(). (optional)

`throwOnError` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether to throw an exception on error.(optional)

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[Job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative.Model/Job)>

Task of Job

### Exceptions

[ModelDerivativeApiException](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeApiException)

Thrown when an API call fails.

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient
