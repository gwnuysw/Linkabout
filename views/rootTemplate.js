"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function template() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var page = "<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"utf-8\" />\n      <link rel=\"shortcut icon\" href=\"assets/favicon.ico\" />\n      <meta\n        name=\"viewport\"\n        content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"\n      />\n      <title>LinkAbout</title>\n    </head>\n    <body>\n      <div id=\"root\">".concat(content, "</div>\n      <script src=\"/assets/client.js\"> </script>\n    </body>\n  </html>");
  return page;
}

module.exports = template;