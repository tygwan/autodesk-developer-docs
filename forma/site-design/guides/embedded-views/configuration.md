---
title: "Configuration"
url_path: embedded-views/configuration
surface: guide
---
# Configuration

In this guide, the options that are configurable in the **Integration** section on the extension management page are
described.

## Buttons (YAML configuration)

This is used to configure a floating panel that opens when clicking the extension in extension list in the left menu. It
is a code editor that will allow one to write a YAML configuration. For now, `OPEN_FLOATING_PANEL` is the
only supported type. Uncomment the default configuration and point to the URL of your extension. You can edit
the `preferredSize` is to configure the floating panel size. The default size is 400*400.

Example configuration:

```
- label: Hello world
  actions:
    click:
      type: OPEN_FLOATING_PANEL
      url: https://example.com/ # Replace with your URL
      preferredSize: #Optional
        width: 400
        height: 400
```

## Embedded views

Embedded views in the left and right panel are configured here. Select the appropriate option and specify the URL it should load inside the panel.

## Service accounts

A service account allows you to interact with project specific data from outside Forma by using the HTTP API. The client
ID must be a client ID for an Autodesk Platform Services application that you have configured.

Read more [here](https://aps.autodesk.com/en/docs/forma/v1/reference/http-specification/introduction).

## Endpoints

Here you can add endpoints can be used
via [invokeEndpoint](https://app.autodeskforma.com/forma-embedded-view-sdk/docs/classes/extensions.ExtensionsApi.html#invokeEndpoint)
in the Extension API to call your own service with Forma-specific authentication.

Read more [here](https://aps.autodesk.com/en/docs/forma/v1/reference/http-specification/introduction/#retrieving-authenticated-calls-from-forma).

## Secret used with endpoints

Adding this secret enable validating that requests to the endpoints configured in the section above are coming from
Forma.
The secret is included in the request header as `x-forma-extension-secret`.

## Bundles

Not relevant for embedded views.

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/embedded-views/configuration
