---
title: "Window Schedule"
url_path: code-samples/schedule
surface: guide
---
# Window Schedule Sample Workflow

A schedule is typically used to identify, in most cases a chart or table providing descriptions of the windows , doors, finishes, lintels, footings, piers, etc. on a construction project. Let’s take the same sample model and imagine that you would like to build a window schedule. You will need to retrieve properties like panel glazing, glass, frame material, height, width, etc. of all Elementgroups entity instances of category windows.

See this code sample at [AEC Data Model Samples git repository](https://github.com/autodesk-platform-services/aps-aecdatamodel-samples)

**Note**: This code sample requires .NET 6.

## Before You Begin
- If you do not have an app registered, follow the procedure outlined in [Create an App](https://aps.autodesk.com/en/docs/oauth/v2/tutorials/create-app/) to sign up for an APS account (if required) and obtain a Client ID for your app.  Make sure that you add the following as the Callback URL: http://localhost:8080/api/auth/callback
- Contact us to enable AEC Data Model API for your app and Forma hub.
- Install [.NET 6](https://dotnet.microsoft.com/en-us/download)
- Clone or download the Git Repository. It’s recommended to install GitHub desktop. To clone it via command line, use the following command (Terminal on MacOSX/Linux, Git Shell on Windows): 

```
git clone https://github.com/autodesk-platform-services/aps-aecdatamodel-samples.git
```

## Setting up the Application

```
Define the following environment variables:

  Mac OSX/Linux (Terminal)

    dotnet restore
    export APS_CLIENT_ID=<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    export APS_CLIENT_SECRET=<<YOUR CLIENT SECRET>>
    export APS_CALLBACK_URL=http://localhost:8080/api/auth/callback

  Windows

    dotnet restore
    set APS_CLIENT_ID =<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    set APS_CLIENT_SECRET =<<YOUR CLIENT SECRET>>
    set APS_CALLBACK_URL=http://localhost:8080/api/auth/callback
```

When using [Visual Studio Code](https://code.visualstudio.com), you can specify the environment variables listed above in a _.env_ file in this folder, and run and debug the application directly from the editor.

In Microsoft Visual Studio, you can set the variables through Debug > aps-aecdatamodel-samples Properties and add the three Environment variables as follows: APS_CLIENT_ID=<>,APS_CLIENT_SECRET=<>,APS_CALLBACK_URL=http://localhost:8080/api/auth/callback

## Running the Sample

To run the sample, you need to execute the following command in the terminal:

```
  dotnet run
```

Go to [http://localhost:8080](http://localhost:8080), and then select Go to sample for Elementgroups Validation Sample Workflow.

![go to Elementgroups validation sample](https://user-images.githubusercontent.com/75683555/230185430-b92c3f69-cdbd-4d7a-a77a-fa39ea5df697.png)

Afterwards, you’ll need to login with your Autodesk (Forma) account before proceeding with the next steps.

## Workflow Description
- List all hubs After login (top-right), click on `List Hubs` and take note of the hubId (`id`). [See C# code](https://github.com/autodesk-platform-services/aps-aecdatamodel-samples/blob/main/Controllers/HubsProjects.cs). ![Step 1](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/hubs.png)
- List all projects Use the `HubId` from step 1 to list all projects and take note of the projectId (`id`). [See C# code](https://github.com/autodesk-platform-services/aps-aecdatamodel-samples/blob/main/Controllers/HubsProjects.cs). ![Step 2](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/projects.png)
- List all elementgroups in a project This step uses `projectId`. Take note of the `elementGroupId` of the desired file (in this image, `House.rvt`). [See C# code](https://github.com/autodesk-platform-services/aps-aecdatamodel-samples/blob/main/Controllers/Designs.cs). ![Step 3](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/elementgroups.png)
- Generate quantity takeoff Use the `elementGroupId` from step 3. Click on generate schedule. You may adjust he `filter` field. [See C# code](https://github.com/autodesk-platform-services/aps-aecdatamodel-samples/blob/main/Controllers/Schedule.cs). ![Step 4](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/schedule.png) Query used: 

```
 query GetSchedule($elementGroupId: ID!, $elementsfilter: String!){
 elementsByElementGroup(elementGroupId: $elementGroupId,filter: { query: $elementsfilter}){
     pagination{
     pageSize
     cursor
     }
     results{
     id
     name
     properties{
         results{
         name
         value
         displayValue
         propertyDefinition{
             units
         }
         }
     }
     references{
         results{
         name
         value{
             properties{
             results{
                 name
                 value
                 displayValue
                 definition{
                 units{
                     name
                 }
                 }
             }
             }
         }
         }
     }
     }
 }
 }
```

  Query used in case a valid cursor is provided: 

```
 query GetSchedule($elementGroupId: ID!, $elementsfilter: String!){
 elementsByElementGroup(elementGroupId: $elementGroupId,filter: { query: $elementsfilter}, pagination:{cursor:"cursor"}){
     pagination{
     pageSize
     cursor
     }
     results{
     id
     name
     properties{
         results{
         name
         value
         displayValue
         definition{
             units{
             name
             }
         }
         }
     }
     references{
         results{
         name
         value{
             properties{
             results{
                 name
                 value
                 displayValue
                 definition{
                 units{
                     name
                 }
                 }
             }
             }
         }
         }
     }
     }
 }
 }
```

  The variables are the same in both cases: 

```
 {
 elementGroupId = elementGroupId,
 elementsfilter = elementsfilter
 }
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/code-samples/schedule
