"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function SignoutedNavbar(props) {
  var classes = props.classes;
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_AppBar.default, {
    position: "static"
  }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_IconButton.default, {
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "Menu"
  }, _react.default.createElement(_Menu.default, null)), _react.default.createElement(_Typography.default, {
    variant: "h6",
    color: "inherit",
    className: classes.grow
  }, "LinkAbout"), _react.default.createElement(_Button.default, {
    tag: "a",
    href: "/auth/google",
    color: "inherit"
  }, "Login with google"))));
}

SignoutedNavbar.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(SignoutedNavbar);

exports.default = _default;