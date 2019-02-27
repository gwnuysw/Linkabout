"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _server = _interopRequireWildcard(require("react-dom/server"));

var _root = _interopRequireDefault(require("../components/root"));

var _jss = require("jss");

var _JssProvider = _interopRequireDefault(require("react-jss/lib/JssProvider"));

var _styles = require("@material-ui/core/styles");

var _Template = _interopRequireDefault(require("../Template"));

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render() {
  // Model the initial state
  // Create a sheetsRegistry instance.
  var sheetsRegistry = new _jss.SheetsRegistry(); // Create a sheetsManager instance.

  var sheetsManager = new Map(); // Create a theme instance.

  var theme = (0, _styles.createMuiTheme)({
    palette: {
      primary: _green.default,
      accent: _red.default,
      type: 'light'
    },
    typography: {
      useNextVariants: true
    }
  }); // Create a new class name generator.

  var generateClassName = (0, _styles.createGenerateClassName)(); // Render the component to a string.

  var html = _server.default.renderToString(_react.default.createElement(_JssProvider.default, {
    registry: sheetsRegistry,
    generateClassName: generateClassName
  }, _react.default.createElement(_styles.MuiThemeProvider, {
    theme: theme,
    sheetsManager: sheetsManager
  }, _react.default.createElement(_reactRouterDom.StaticRouter, {
    location: "/"
  }, _react.default.createElement(_root.default, null))))); // Grab the CSS from our sheetsRegistry.


  var css = sheetsRegistry.toString();
  var page = (0, _Template.default)(html, css);
  return page;
};