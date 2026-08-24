---
title: "Data Connector"
url_path: overview/field-guide/data-connector
surface: guide
---
# Data Connector API Field Guide

This field guide describes the components of the Forma Data Connector API and how they work together.

## Data Requests

Using the Data Connector API starts with a data request. A request defines important parameters:
- The hub for which to extract data. An optional parameter can be added to only extract data for Active projects only.
- One or more service groups for which to return data, currently including Admin (both Project and Hub), Issues, Locations, Submittals, Cost, and RFIs.
- A schedule to follow when extracting data: immediately and just once, or recurring daily, weekly, monthly or yearly during a specified interval of time.
- The project for which to extract data. Required for users with _project admin_ permissions, and optional for users with _executive overview_ permissions. Alternatively, a list of project ids can be provided to extract data from multiple projects.
- An optional callback URL that the Data Connector service calls whenever data is extracted for the request.

When the Data Connector service receives a data request, it stores the request where you can edit or delete it later. The request remains in place even after all its specified data extraction is completed. You can request a list of all currently stored requests that you have created, inspect the status of each request, and look to see what data each request has returned.

Whenever a request is scheduled to start data extraction, the Data Connector service spawns a job to carry out that extraction. A data request can be set to be inactive, however, so that even though the request might have scheduled data extraction, it won’t be carried out. Editing a request can change it from active to inactive and back again at any time to pause or re-engage a request.

## Jobs

Whenever a request spawns a job, the Data Connector service extracts data from the service groups within the Autodesk hub defined by the request. When a job finishes, the Data Connector service sends an email notification to the email address specified by the user hub of the user who made the request. The email contains a link to information about the job execution. If the request specified a callback URL, the service will POST to that URL with job execution information.

A request contains a list of all the jobs it has spawned, so that you can find and examine any of those jobs to see what data extract it has created.

## Data Extracts

A data extract is all the data returned by a successfully executed job. It contains a set of CSV files that each contain a different data set. It also contains a ZIP file that contains all of the CSV files along with a README file that lists the CSV files and provides detailed information about the schema used for each file.

You can examine a data extract to see what components it contains, and how large each component is.

When you use the API to request a data extract, the Data Connector service returns a signed URL that is valid for 60 seconds. You can use the URL to retrieve any part of the data extract: one or more CSV files, the README file, or the ZIP file which contains all of them. Because you know how large each file is, you can opt to retrieve only part of the extract if you don’t want to take the time to download the whole extract. As long as you connect to the URL within 60 seconds, the download can take as long as necessary.

## Request Scheduling and Data Timeframes

The Data Connector API uses scheduling attributes to control when jobs run and a data extraction attribute to define what data is included in each run.

The `scheduleInterval`, `reoccuringInterval`, `effectiveFrom`, and `effectiveTo` attributes determine the timing of job execution. For example, you can schedule jobs to run daily, weekly, monthly, or yearly, starting at the time specified by `effectiveFrom` and ending at `effectiveTo`. The `reoccuringInterval` specifies the number of intervals between runs, such as every two weeks or every three months.

The `dateRange` attribute defines the timeframe for the data extracted during each execution. Currently, it is applicable only to the Activities service and delta extraction service groups (see the Delta Extraction section below for more details). For example, `TODAY` extracts data for the current day (00:00 UTC to the time of execution), `PAST_7_DAYS` extracts data for the last seven days, and `MONTH_TO_DATE` extracts data from the start of the current month to the time of execution.

For example, a request with `scheduleInterval = MONTH`, `reoccuringInterval = 1`, and `dateRange = PAST_7_DAYS` runs monthly and extracts data for the last seven days during each run. This allows you to run jobs on any schedule while targeting specific data periods.

When `dateRange` is provided, it dynamically defines the extraction window and overrides any explicitly provided `startDate` and `endDate` values. If `dateRange` is not set, the request uses the provided `startDate` and `endDate`.

For scheduled jobs using dynamic values (e.g., `YESTERDAY`), the computed date range is resolved when the job is created and is not recalculated at execution time.

### Delta Extraction (CDC)

The Data Connector API also supports delta extraction (CDC - Change Data Capture) for selected service groups. Instead of returning full datasets on each run, delta extraction extracts only records that have changed within a specified time window, making it more efficient for keeping downstream systems in sync.

Delta extraction requests work like standard data requests, but use delta extraction service groups and require `startDate` and `endDate` to define the extraction window. Overlapping windows are recommended to account for latency, and consumers should handle possible duplicates using UPSERT logic. Note that not all tables are supported. The schema documentation delivered with each data extract identifies which tables support delta extraction.

Delta extraction returns records that have changed within the specified date range. The response does not indicate the type of change (e.g., added, updated, deleted). Consumers must determine this by comparing results across runs.

## Data Connector API Tutorials

One tutorial demonstrates several common use cases for the Data Connector API. It’s split into three phases, each documented on its own page:

| Tutorial Phase | Description |
| --- | --- |
| [Submit a Data Request](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/data-connector/dc-tutorial-submit-data-request/) | Demonstrates how to submit a data request that extracts data from specified service groups, on a specified schedule, from within a Forma hub. The data request spawns a job that retrieves the requested data. |
| [Find and Update a Data Request](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/data-connector/dc-tutorial-find-update-data-request/) | Demonstrates how to retrieve a list of saved data requests and change the active status of a request. |
| [Find a Job and Retrieve Its Data Extract](https://aps.autodesk.com/en/docs/bim360/v1/tutorials/data-connector/dc-tutorial-retrieve-data-extract/) | Demonstrates how to retrieve a list of jobs spawned by the data request; how to retrieve a list of the files contained in a specified job’s data extract; and how to download one or more files from a specified job. |

For more information about the Data Connector API, see the API Basics section.

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/data-connector
