---
title: "Create an App"
url_path: tutorials/create-app
product: "Authentication API"
surface: "authentication-v2"
protocol: "Documentation"
document_kind: "tutorial"
api_version: "v2"
section: "tutorials"
category: "create-app"
---
# Create an App

This walkthrough guides you through creating (registering) an app. The process generates a Client ID and Client Secret for your app, which you use to obtain access tokens and authenticate your API calls.

In APS, “create an app,” “register an app,” and “get a Client ID and Client Secret” all refer to the same process.

To complete this setup, you need:
- An APS account
- A developer hub

If you do not have an APS account, start with **Step 1: Create an APS account**.

If you already have an APS account, sign in at [https://aps.autodesk.com](https://aps.autodesk.com), then continue to **Step 2: Set up a developer hub**.

## Step 1: Create an APS account
- Visit the [Autodesk Platform Services portal](https://aps.autodesk.com). ![../../../_images/APSDevPortal.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/APSDevPortal.png)
- Click **Sign in** in the upper-right corner. ![../../../_images/signin-new.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/signin-new.png)
- Click **Create account**. ![../../../_images/signup-new.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/signup-new.png)
- Follow the on-screen instructions to complete account setup. When finished, you will see a page titled **It seems you don’t have a hub yet**. ![../../../_images/it-seems-you-dont-have-a-hub-yet.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/it-seems-you-dont-have-a-hub-yet.png)

**Important:** During account setup, you will receive a backup code. Store it securely. You can use this code to access your account if you are unable to receive a one-time password.

## Step 2: Set up a developer hub

Before you can register an app, you must have a developer hub.

### What is a developer hub?

A developer hub is a collaboration workspace where a team can build, share, and manage apps.

If you are part of a [team](https://www.autodesk.com/support/account/admin/users/manage-teams), your team may already have a developer hub. Ask your team admin to add you, then continue to **Step 3: Register an app**.
- If your team has an APS plan but has not created a developer hub yet:  If you are the team admin, continue to **Create a developer hub**.
- Otherwise, ask your team admin to create one.
- If your team does not have an APS plan, or if you want your own developer hub, follow the steps below.

### Get an APS plan
- If you see the **It seems you don’t have a hub yet** page, click **View options** in the **Get an APS plan** card. If you do not see this page, visit [https://www.autodesk.com/products/autodesk-platform-services/overview](https://www.autodesk.com/products/autodesk-platform-services/overview).
- Scroll to the **Autodesk Platform Services cloud APIs** section. ![../../../_images/autodesk-platform-services-cloud-apis.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/autodesk-platform-services-cloud-apis.png)
- Select your preferred plan tier. **Tip:** The Free tier provides monthly access to APS APIs with usage caps on paid APIs.
- Follow the on-screen instructions to complete the purchase process. When finished, you will see a confirmation screen similar to the following: ![../../../_images/thanks-for-your-subscription.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/thanks-for-your-subscription.png)

### Create a developer hub
- Visit [https://manage.autodesk.com](https://manage.autodesk.com).
- Navigate to **Products and Services** > **Hubs**. ![../../../_images/products-and-services.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/products-and-services.png)
- Click **Create hub**, then:  Select **APS developer hub**
- Enter a name and optional description
- Click **Create and Activate**

## Step 3: Register an app
- Visit [https://aps.autodesk.com](https://aps.autodesk.com) and sign in.
- Open your profile menu and select **My applications**. ![../../../_images/MyApplications.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/MyApplications.png)
- Select your developer hub from the **Developer Hub** dropdown. ![../../../_images/CreateApplication.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/CreateApplication.png)
- Click **Create application**, then configure the following:  **Name**: Enter a descriptive name for your app.
- **Application Type**: Select the application type for your app.

For more information, see [Application Types](https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/App-types).

![../../../_images/CreateApplicationDisplay.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/CreateApplicationDisplay.png)
- Configure the app settings:  **Description**: Enter a short description of your app.
- **API Access**: Select the APIs your app will use.

![../../../_images/CreatedApplication.png](https://developer.doc.autodesk.com/bPlouYTd/cloud-platform-id-pubdocs-master-756267/_images/CreatedApplication.png)
- Click **Save changes**.

## Step 4: Save your client credentials

After registering the app, copy the **Client ID** and **Client Secret** from **App settings**. You will use these credentials to obtain access tokens.

**Warning:** Store your Client Secret securely. Never commit it to source control, share it publicly, or include it in client-side code. For production environments, use a secure secrets manager.

---
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/tutorials/create-app
