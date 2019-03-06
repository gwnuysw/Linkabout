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

var _categoryList = _interopRequireDefault(require("./categoryList"));

var _linkList = _interopRequireDefault(require("./linkList"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var colContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(colContainer, _React$Component);

  function colContainer() {
    _classCallCheck(this, colContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(colContainer).apply(this, arguments));
  }

  _createClass(colContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (this.props.match.url == "/") {
        fetch('http://localhost/set/5c7e008874f7270f3190499e').then(function (response) {
          return response.json();
        }).then(function (data) {
          _this.setState(_objectSpread({}, data, {
            ajaxed: true
          }));

          console.log('this is ajax result', _this.state);
        });
      }

      console.log('check url', this.props.match.url);
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      console.log('container classes', classes);
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
      }, _react.default.createElement(_categoryList.default, {
        informOfSet: this.state,
        width: "100%"
      }))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _react.default.createElement(_Paper.default, {
        className: classes.paper
      }, _react.default.createElement(_linkList.default, null))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: true
      }, _react.default.createElement(_Paper.default, {
        className: classes.paper
      }, "xs"))));
    }
  }]);

  return colContainer;
}(_react.default.Component);

colContainer.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(colContainer);

exports.default = _default;