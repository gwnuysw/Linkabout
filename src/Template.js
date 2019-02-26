module.exports = function renderFullPage(html, css) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>LinkAbout</title>
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
        <script async src="/assets/main.js"></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}
