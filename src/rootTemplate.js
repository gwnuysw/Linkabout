import React from 'react'

function template(content = ""){
  let page = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="assets/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>LinkAbout</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/assets/main.js"> </script>
    </body>
  </html>`;
  return page;
}
module.exports = template;
