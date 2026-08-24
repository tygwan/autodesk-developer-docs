---
title: "Technical guidelines"
url_path: embedded-views/technical-guidelines
surface: guide
---
# Technical guidelines

This guideline outlines essential considerations for extension developers working with Forma with regard to:
- Cookie and storage limitations in certain browsers
- A proper way to build an auth flow inside an embedded view

Forma’s [embedded view](https://aps.autodesk.com/en/docs/forma/v1/embedded-views/introduction/) uses an iframe to host the extension page. However depending on the browser used, the page in the iframe may not work in the same way as when visiting the same URL as a normal page. The following paragraphs explain these differences and what you need to do to handle them.

## Storage partitioning

Historically browser storage has been shared between all pages on the same origin. This means that when a web page (e.g. `example.com`) is embedded into two different websites using iframes, both iframe pages have access to the same storage space. However, recent browser changes have changed this to use distinct storage spaces for each page. This means that each iframe for `example.com` will see different cookies and local storage. These will also be different from the storage space used when visiting `example.com` directly.

This means that even though a user is logged onto your domain, if you use that same domain in an embedded view they may not be logged in there. The same goes for any settings or other things stored in cookies or local storage.

## Remote authentication

There are various methods to enable users to log in within an embedded view. This guide emphasizes the need for a secure solution.

Directly including a username and password field within the extension is discouraged due to potential confusion between Forma and the embedded view provider. The user typically can’t be sure if they’re giving the password to Forma or the extension, which in turn points towards a **phishing** attack. To read more about this please visit [this Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

An alternative method involves opening a new window for the login that sets an authorization cookie on the domain. However, due to the storage restrictions mentioned, this approach is not viable for embedded views.

The recommended solution is instead to open a new window from the embedded view for logging in, and sending the credentials back to the embedded view with a `postMessage`. Opening the window can be done like this:

```
<button
  onClick={() =>
    window.open("https://www.example.com/login", "example-extension-login")
  }
>
  Login
</button>
```

In this example `https://www.example.com/login` is a login page for your service that has implemented support for sending the authorization token back to the embedded view. That can be done in this way:

```
window.opener.postMessage(
  JSON.stringify({ token: data }),
  // The origin of the extensions embedded view must be specified in order to ensure that the token is not sent to any other origin
  "https://www.example.com"
);
```

Then to receive this message in the embedded view and store the credentials:

```
window.addEventListener("message", (event) => {
  // It's always recommended to verify the sender identity using the origin so you only process messages from the expected origin
  if (event.origin !== "https://www.example.com") return;

  try {
    const data = JSON.parse(event.data);
    localStorage.setItem("token", data.token);
  } catch (e) {
    // ignore
  }
});
```

In this example, the event listener captures the authorization token sent from the opened window to the embedded view, demonstrating the seamless integration of external login processes.

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/embedded-views/technical-guidelines
