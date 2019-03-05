"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  card: {
    width: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function LinkCard(props) {
  var classes = props.classes;

  var bull = _react.default.createElement("span", {
    className: classes.bullet
  }, "\u2022");

  return _react.default.createElement(_Card.default, {
    className: classes.card
  }, _react.default.createElement(_CardContent.default, null, _react.default.createElement(_Typography.default, {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, "Word of the Day"), _react.default.createElement(_Typography.default, {
    variant: "h5",
    component: "h2"
  }, "be", bull, "nev", bull, "o", bull, "lent"), _react.default.createElement(_Typography.default, {
    className: classes.pos,
    color: "textSecondary"
  }, "adjective"), _react.default.createElement(_Typography.default, {
    component: "p"
  }, "well meaning and kindly.", _react.default.createElement("br", null), '"a benevolent smile"')), _react.default.createElement(_CardActions.default, null, _react.default.createElement(_Button.default, {
    size: "small"
  }, "Learn More")));
}

LinkCard.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(LinkCard);

exports.default = _default;