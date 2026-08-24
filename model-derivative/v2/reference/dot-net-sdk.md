---
title: ".NET SDK Reference"
url_path: reference/dot-net-sdk
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# .NET SDK Reference

## Resource Information

| **Namespace:** | Autodesk.ModelDerivativeApi |
| --- | --- |
| **Assembly:** | Autodesk.ModelDerivativeApi.dll |
| **Version:** | 1.0.0 |

## Installing this Library

The recommended way of installing this library to your .NET project is to use the NuGet Package Manager.
- Within the NuGet Package Manager locate the [Autodesk.ModelDerivative library](https://www.nuget.org/packages/Autodesk.ModelDerivative).
- Follow the instructions on the [NuGet documentation site](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#find-and-install-a-package) to install the library.

Alternatively, from Visual Studio IDE or CLI tools:

```
dotnet add package Autodesk.ModelDerivative
```

## Learning Resources

### Source Code

The source code for this library is available at [https://github.com/autodesk-platform-services/aps-sdk-net](https://github.com/autodesk-platform-services/aps-sdk-net).

### Tutorials

The [Simple Viewer tutorial](https://get-started.aps.autodesk.com/tutorials/simple-viewer/) illustrates how to use this library to prepare a model for display in a browser.

### Code Sample

```
class ModelDerivative
{
    string? token = Environment.GetEnvironmentVariable("token");
    string? urn = Environment.GetEnvironmentVariable("urn");

    ModelDerivativeClient modelDerivativeClient = null!;

    public void Initialise()
    {
        // Instantiate SDK manager as below.
        // You can also optionally pass configurations, logger, etc.
        SDKManager sdkManager = SdkManagerBuilder
            .Create() // Creates SDK Manager Builder itself.
            .Build();

        // Instantiate ModelDerivativeClient using the created SDK manager
        modelDerivativeClient = new ModelDerivativeClient(sdkManager);
    }

    #region Jobs
    // Post Job
    public async Task StartJobAsync()
    {
        // set output formats
        List<IJobPayloadFormat> payloadFormats = new List<IJobPayloadFormat>()
        {
            // initialising an Svf2 output class will automatically set the type to Svf2.
            new JobPayloadFormatSVF2()
            {
                Views = new List<View>()
                {
                    View._2d,
                    View._3d
                },
                Advanced = new JobPayloadFormatSVF2AdvancedRVT()
                {
                    GenerateMasterViews = true
                }
            },

            // initialising a Thumbnail output class will automatically set the type to Thumbnail.
            new JobPayloadFormatThumbnail()
            {
                Advanced = new JobPayloadFormatAdvancedThumbnail()
                {
                    Width = Width.NUMBER_100, // enum changed to only 100
                    Height = Height.NUMBER_100
                }
            }
        };

        // specify Job details
        JobPayload Job = new JobPayload()
        {
            Input = new JobPayloadInput()
            {
                Urn = urn,
                CompressedUrn = false,
                RootFilename = "<fileName>",
            },
            Output = new JobPayloadOutput()
            {
                Formats = payloadFormats,
                // Destination is obsolete. Use the region header instead.
                // Destination = new JobPayloadOutputDestination() { Region = Region.US } // This will call the respective endpoint - Either US or EMEA. Defaults to US.
            },
        };

        // start the translation job
        try
        {
            Job jobResponse = await modelDerivativeClient.StartJobAsync(jobPayload: Job, accessToken: token, region: Region.US);
            // query for urn, result etc...
            string jobUrn = jobResponse.Urn;
            string jobResult = jobResponse.Result;
        }
        catch (ModelDerivativeApiException ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}
```

## SDK to REST API Cross Reference

| Operation Category | Operation | Method | HTTP Request |
| --- | --- | --- | --- |
| Derivatives | Fetch Derivative Download URL | [GetDerivativeUrlAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetDerivativeUrlAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_Int32_System_String_System_Boolean_) | [GET /{urn}/manifest/{derivativeUrn}/signedcookies](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeUrn-signedcookies-GET/) |
| Check Derivative Details | [HeadCheckDerivativeAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_HeadCheckDerivativeAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_Boolean_) | [HEAD /{urn}/manifest/{derivativeUrn}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-HEAD/) |   |
| Informational | List Supported Formats | [GetFormatsAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetFormatsAsync_System_String_System_String_System_String_System_Boolean_) | [GET /formats](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET/) |
| Jobs | Start a Translation Job | [StartJobAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_StartJobAsync_System_String_Autodesk_ModelDerivative_Model_JobPayload_Autodesk_ModelDerivative_Model_Region_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_Boolean_) | [POST /job](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/job-POST/) |
| Specify References | [SpecifyReferencesAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_SpecifyReferencesAsync_System_String_System_String_Autodesk_ModelDerivative_Model_SpecifyReferencesPayload_Autodesk_ModelDerivative_Model_Region_System_Boolean_) | [POST /{urn}/references](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/jobs/urn-references-POST/) |   |
| Manifest | Fetch Manifest | [GetManifestAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetManifestAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_) | [GET /{urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-GET/) |
| Delete Manifest | [DeleteManifestAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_DeleteManifestAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_Boolean_) | [DELETE /{urn}/manifest](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/manifest/urn-manifest-DELETE/) |   |
| Metadata | List Model Views | [GetModelViewsAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetModelViewsAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_) | [GET /{urn}/metadata](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-GET/) |
| Fetch Object Tree | [GetObjectTreeAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetObjectTreeAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_String_System_Int32_System_String_System_Boolean_) | [GET /{urn}/metadata/{modelGuid}](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-GET/) |   |
| Fetch All Properties | [GetAllPropertiesAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetAllPropertiesAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_Region_System_String_System_Boolean_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_Int32_System_String_System_Boolean_) | [GET /{urn}/metadata/{modelGuid}/properties](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-GET/) |   |
| Fetch Specific Properties | [FetchSpecificPropertiesAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_FetchSpecificPropertiesAsync_System_String_System_String_System_String_Autodesk_ModelDerivative_Model_SpecificPropertiesPayload_Autodesk_ModelDerivative_Model_Region_Autodesk_ModelDerivative_Model_XAdsDerivativeFormat_System_String_System_Boolean_) | [POST /{urn}/metadata/{modelGuid}/properties:query](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/metadata/urn-metadata-guid-properties-query-POST/) |   |
| Thumbnails | Fetch Thumbnail | [GetThumbnailAsync](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk/Autodesk.ModelDerivative/ModelDerivativeClient#Autodesk_ModelDerivative_ModelDerivativeClient_GetThumbnailAsync_System_String_System_String_Autodesk_ModelDerivative_Model_Width_Autodesk_ModelDerivative_Model_Height_Autodesk_ModelDerivative_Model_Region_System_Boolean_) | [GET /{urn}/thumbnail](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/thumbnails/urn-thumbnail-GET/) |

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/reference/dot-net-sdk
