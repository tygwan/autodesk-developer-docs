---
title: "About AEC Data Model Explorer"
url_path: developers_guide/aecima_data_explorer
surface: guide
---
# About the AEC Data Model Explorer

The [AEC Data Model Explorer](https://aecdatamodel-explorer.autodesk.io/) is an interactive browser-based user interface. It is designed for exploring and executing GraphQL queries against the AEC Data Model API. It includes an autocomplete feature, which automatically suggests potential fields as you type a query. The Autodesk AEC Data Model Beta connects to a test Forma Hub with sample Revit Models. A new **Viewer** option is now available in the latest GraphiQL explorer. This option allows you to preview the model based on the model ID also known as design URN.

**Note:** AEC Data Model Explorer accesses your production data.

## Using AEC Data Model Explorer

To use AEC Data Model Explorer with the API:
- Provision the client id “HKVjhUXySDGLGJimolxAgDdpoCuZLlql” to your Forma Hub using the steps mentioned [here](https://tutorials.autodesk.io/#provision-access-in-other-products).
- Use your Autodesk’s credential to sign in to [aecdatamodel-explorer.autodesk.io](https://aecdatamodel-explorer.autodesk.io/).
- Refer to the [Sign in to AEC Data Model Explorer](https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/before_you_begin#step-3-sign-in-to-aec-data-model-explorer) for detailed steps.
- You can also clone the [AEC Data Model Explorer source code](https://github.com/autodesk-platform-services/aps-aecdatamodel-explorer) to use with your own APS application.

## User interaction elements

This section describes the GUI elements of the explorer, such as panes, tabs, buttons, toggle button for viewer, etc.

### Explorer panes

The following image illustrates the elements of Explorer pane. Refer to the table below for an explanation about the Panes.

![User Interaction Elements in AEC Data Model Explorer. Refer to the table below for an explanation about explorer panes.](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/aec_cim_xplorr_01.png)

| No. | Interaction Elements | Description |
| --- | --- | --- |
| 1 | Query Pane | The pane where you can author GraphQL queries and mutations. |
| 2 | Query Variables & Request Headers Pane | The pane where you can add and edit Query Variables or additional Request Headers. |
| 3 | Results Pane | Displays responses of the queries executed. |

### Interactive elements

Following screenshot identifies important User Interaction (UI) elements of the explorer. Refer to the table below for an explanation of each UI element.

![User Interaction Elements in AEC Data Model Explorer. Refer to the table below for an explanation about explorer panes.](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/aec_cim_xplorr_02.png)

| No. | Interaction Elements | Description |
| --- | --- | --- |
| 1 | Documentation Explorer Button | Displays the user documentation pane. |
| 2 | History Button | Displays history of queries recently sent in the left side of the screen. |
| 3 | Prettify Button | Reformats the query for readability. |
| 4 | Play Button | Runs the query and displays response in the result pane. |
| 5 | Merge Button | Merges any GraphQL fragments into the query. |
| 6 | Copy Button | Copies the query present in the Query Pane. |
| 7 | Project ID Input | Accepts the Project ID of a project to which the model is associated with. |
| 8 | Model Viewer Toggle | Toggle button to show or hide the model viewer. |
| 9 | Voyager | Redirects to the Voyager interface to explore the schema structure. |
| 10 | Settings Dialog | Displays configurations for the UI theme and Data Cache. |
| 11 | Short Keys Guide | Displays guide which breaks down keyboard shortcuts for quick functionalities. |
| 12 | Re-fetch Button | Re-fetches the GraphQL Schema. |
| 13 | Request Headers Tab | The tab where you can add and edit additional Request Headers. |
| 14 | Query Variables Tab | The tab where you can add and edit Query Variables. |

**Tip**: You can view the user documentation of a particular term by holding Control (on Windows) or Command (on macOS) key on your keyboard and clicking the term. After clicking, the Documentation Explorer appears on the right side of the screen. You can also use the **Viewer** button to toggle the model preview.

After Documentation Explorer opens, you should see an image similar to the one following with the description of the fields in the table below it.

![../../../_images/aec_cim_xplorr_03.png](https://developer.doc.autodesk.com/bPlouYTd/forge-aim-graphql-docs-main-695451/_images/aec_cim_xplorr_03.png)

| No. | Interaction Elements | Description |
| --- | --- | --- |
| 1 | Documentation Explorer Button | Displays the user documentation pane. |
| 2 | Documentation Explorer | Displays user documentation on the fly when working with queries within the AEC Data Model Explorer. |
| 3 | Query Term | A valid schema term which can be described using the Query Pane Term Viewer. |
| 4 | Query Pane Term Viewer | Using the keyboard short key and selecting a term, displays the definition of the respective term within the Query Pane. |

## Sending queries
- In the Query Pane, enter your query. As you enter the query, autocomplete assists you in completing the query.
- In the Query Variables Pane, specify the variable and its value in JSON format. **Note:** The Query Variable Pane is collapsed by default, so click QUERY VARIABLES to expand the Query Variable Pane.
- Click **Play** to send the query to the GraphQL server. The response is displayed in the pane on the right.

## Handling token expiration

The AEC Data Model Explorer handles access tokens transparently. If you are notified that the access token has expired, refresh the browser or close the browser and sign in again. If the problem persists, try clearing your browser’s cache before signing in again.

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/aecima_data_explorer
