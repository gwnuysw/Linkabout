"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _system = require("@material-ui/system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  };
};

function colContainer(props) {
  var classes = props.classes;
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_Grid.default, {
    container: true,
    spacing: 24
  }, _react.default.createElement(_Grid.default, {
    item: true,
    xs: true
  }, _react.default.createElement(_Paper.default, {
    className: classes.paper
  }, "xs")), _react.default.createElement(_Grid.default, {
    item: true,
    xs: 6
  }, _react.default.createElement(_Paper.default, {
    className: classes.paper
  }, "xs=6")), _react.default.createElement(_Grid.default, {
    item: true,
    xs: true
  }, _react.default.createElement(_Paper.default, {
    className: classes.paper
  }, "xs"))));
}

colContainer.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(colContainer);

exports.default = _default;