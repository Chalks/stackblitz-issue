# Bug

This repo is intended to demonstrate a history bug in the Stackblitz SDK. I believe the issue is with [this line](https://github.com/stackblitz/sdk/blob/main/src/lib.ts#L65) primarily because of [the warning on write's documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/write). This is reproduceable in Firefox on an M1 Mac, Big Sur 11.3.1. This does **not** happen with Chrome.

# How to reproduce

* `npm run dev`
* navigate to [http://localhost:3000/bug](http://localhost:3000/bug) in Firefox
* look at your browser history and feel feelings.