---
title: "Share your extension"
url_path: overview/sharing-extensions
surface: guide
---
# Sharing your extension

This guide builds upon the [Getting started guide](https://aps.autodesk.com/en/docs/forma/v1/overview/getting-started/) and describes how
to go from local development to making other Forma users able to install your extension. We encourage authors to share
and test their code early.

## 1. Deploying and hosting the extension

To make your extension available to other Forma users, you need to deploy and host it on a public URL. This can be done
in many ways, but [here is a guide](https://vitejs.dev/guide/static-deploy#github-pages) on how to deploy a Vite
application to GitHub Pages using GitHub Actions workflow.

When your extension is hosted on a public URL, you need to update the extension configuration to point to this URL
instead of _localhost_. This is configured in the **Integration** section on the extension management page as previously
touched upon in the _Configure extension_ part of
the [Getting started guide](https://aps.autodesk.com/en/docs/forma/v1/overview/getting-started/).

## 2. Connect an extension to Autodesk Platform Services application

To share your extension with other Forma users, your extension needs to be owned by an Autodesk Platform
Services (APS) application. Go to the extension management page and click the **Owner** drop-down. If you have already
created an APS application, it will show up in the drop-down. If not, click “Manage APS applications” to create one. This
will open a new tab, and you will get the option to _Create application_. Choose a name for your application and
make sure to create a server-to-server app, as this will make it possible to create all the different types of Forma
extensions. Then, go back to the extension management page and select the created APS application in the drop-down.

More information about creating APS applications can be found in [this tutorial](https://tutorials.autodesk.io/).

## 3. Add permission to the installed extension

For other users to be able to install the extension on their projects, you need to add their project IDs to the allowed
list on the extension management page. Alternatively, you can select the option “All users of Forma”. _Note: before
going through the [publishing steps](https://aps.autodesk.com/en/docs/forma/v1/overview/publishing-extensions/), your extension will only be
visible for users looking up the extension ID (as explained in the next step)._

## 4. Share the extension ID with other Forma users

You can share your extension with other Forma users by sharing the extension ID. This is found at the top of the
extension management page, as well as in the Forma product through the dot menu in the extension menu.

[This help article](https://help.autodeskforma.com/en/articles/7869507-open-up-new-forma-capabilities-with-extensions#h_8a866f600e),
describes how a user can install an unpublished extension, and this link is useful to include when sharing your extension
ID with other Forma users.

## Next steps

Now you are able to share your extension with other Forma users by sharing the extension ID. To make the extension show
up in the marketplace for all users, check out
the [publishing guide](https://aps.autodesk.com/en/docs/forma/v1/overview/publishing-extensions/).

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/overview/sharing-extensions
