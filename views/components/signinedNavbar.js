"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

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

var signinNavbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(signinNavbar, _React$Component);

  function signinNavbar(props) {
    var _this;

    _classCallCheck(this, signinNavbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(signinNavbar).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(signinNavbar, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_reactstrap.Navbar, {
        color: "light",
        light: true,
        expand: "md"
      }, _react.default.createElement(_reactstrap.NavbarBrand, {
        href: "/"
      }, "LinkAbout"), _react.default.createElement(_reactstrap.NavbarToggler, {
        onClick: this.toggle
      }), _react.default.createElement(_reactstrap.Collapse, {
        isOpen: this.state.isOpen,
        navbar: true
      }, _react.default.createElement(_reactstrap.Nav, {
        className: "ml-auto",
        navbar: true
      }, _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement(_reactstrap.NavLink, {
        href: "#"
      }, this.props.userName)), _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement(_reactstrap.NavLink, {
        href: "#"
      }, "Following")), _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement(_reactstrap.NavLink, {
        href: "#"
      }, "Followers")), _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement(_reactstrap.NavLink, {
        href: "/auth/signout"
      }, "Signout"))))));
    }
  }]);

  return signinNavbar;
}(_react.default.Component);

exports.default = signinNavbar;