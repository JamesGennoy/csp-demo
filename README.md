# CSP Demo

This is a demo to show what Content Security Policy (CSP) is.

## Installation

`npm install`

## Start

`npm start`

## Demo

Add the following items using the form on the page:

`<script>alert('oh no')</script>`

`<script src="http://localhost:3002/script.js">`

`<iframe src="http://localhost:3002/index.html"></frame>`

Notice the script and iframe execute.

### To fix
edit `/app/config/webpackDevServer.config.js`

Uncomment the following lines:

```
const csp = [
  // "script-src 'self'",
  // "child-src 'self'",
  // "connect-src 'self' http://localhost:3001",
].join('; ');
```

