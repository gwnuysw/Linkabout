"use strict";

module.exports = function renderFullPage(html, css) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n        <title>LinkAbout</title>\n        <style id=\"jss-server-side\">".concat(css, "</style>\n      </head>\n      <body>\n        <script async src=\"/assets/main.js\"></script>\n        <div id=\"root\">").concat(html, "</div>\n      </body>\n    </html>\n  ");
};