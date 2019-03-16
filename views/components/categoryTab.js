"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _categoryList = _interopRequireDefault(require("./categoryList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TabContainer(props) {
  return _react.default.createElement(_Typography.default, {
    component: "div",
    style: {
      padding: 8 * 3
    }
  }, props.children);
}

TabContainer.propTypes = {
  children: _propTypes.default.node.isRequired
};

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    }
  };
};

var categoryTab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(categoryTab, _React$Component);

  function categoryTab() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, categoryTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(categoryTab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  _createClass(categoryTab, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var value = this.state.value;
      var title = "Category Title";
      var createdBy = "Category Owner";
      var downset = {};

      if (this.props.informOfSet.curset) {
        title = this.props.informOfSet.curset[0].title;
        createdBy = this.props.informOfSet.curset[0].createdBy;
        downset = this.props.informOfSet.downset;
      }

      console.log('this is curset', this.props);
      return _react.default.createElement("div", {
        className: classes.root
      }, _react.default.createElement(_Typography.default, {
        variant: "h5",
        component: "h2",
        gutterBottom: true
      }, title), _react.default.createElement(_Typography.default, {
        color: "textSecondary"
      }, createdBy), _react.default.createElement(_AppBar.default, {
        position: "static"
      }, _react.default.createElement(_Tabs.default, {
        value: value,
        onChange: this.handleChange
      }, _react.default.createElement(_Tab.default, {
        label: "Up"
      }), _react.default.createElement(_Tab.default, {
        label: "Down"
      }))), value === 0 && _react.default.createElement(TabContainer, null, _react.default.createElement(_categoryList.default, null)), value === 1 && _react.default.createElement(TabContainer, null, _react.default.createElement(_categoryList.default, {
        downCategory: downset,
        change: this.props.change
      })));
    }
  }]);

  return categoryTab;
}(_react.default.Component);

categoryTab.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(categoryTab);

exports.default = _default;