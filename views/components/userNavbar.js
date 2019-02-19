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

var UserNavbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserNavbar, _React$Component);

  function UserNavbar(props) {
    var _this;

    _classCallCheck(this, UserNavbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserNavbar).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(UserNavbar, [{
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
        href: "/auth/signinpage"
      }, "Sign-In")), _react.default.createElement(_reactstrap.UncontrolledDropdown, {
        nav: true,
        inNavbar: true
      }, _react.default.createElement(_reactstrap.DropdownToggle, {
        nav: true,
        caret: true
      }, "Sign In"), _react.default.createElement(_reactstrap.DropdownMenu, {
        right: true
      }, _react.default.createElement(_reactstrap.DropdownItem, {
        tag: "a",
        href: "/auth/google"
      }, "Sign In with Google"), _react.default.createElement(_reactstrap.DropdownItem, {
        tag: "a",
        href: "/auth/kakao"
      }, "Sign In with Kakao")))))));
    }
  }]);

  return UserNavbar;
}(_react.default.Component);

exports.default = UserNavbar;