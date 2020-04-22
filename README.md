# Firefox unhandledrejection bug

`unhandledrejection` events that originate from content scripts won't be caught by the content script,
but the extension will listen to `unhandledrejection` events that originate from the page where the content
script is injected.

This example also demonstrates that `unhandledrejection` works on the background page.
