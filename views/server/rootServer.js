"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _server = require("react-dom/server");

var _root = _interopRequireDefault(require("../components/root"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(inform) {
  // Model the initial state
  console.log('rootserver inform', inform);
  var content = (0, _server.renderToString)(_react.default.createElement(_root.default, {
    setInform: inform
  }));
  return content;
};