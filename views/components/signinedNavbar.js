"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _styles = require("@material-ui/core/styles");

var _Menu2 = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _Mail = _interopRequireDefault(require("@material-ui/icons/Mail"));

var _Notifications = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

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

var styles = function styles(theme) {
  return {
    root: {
      width: '100%'
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    title: _defineProperty({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: _defineProperty({
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: 200
    }),
    sectionDesktop: _defineProperty({
      display: 'none'
    }, theme.breakpoints.up('md'), {
      display: 'flex'
    }),
    sectionMobile: _defineProperty({
      display: 'flex'
    }, theme.breakpoints.up('md'), {
      display: 'none'
    })
  };
};

var SigninedNavbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SigninedNavbar, _React$Component);

  function SigninedNavbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SigninedNavbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SigninedNavbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      anchorEl: null,
      mobileMoreAnchorEl: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleProfileMenuOpen", function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMenuClose", function () {
      _this.setState({
        anchorEl: null
      });

      _this.handleMobileMenuClose();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMobileMenuOpen", function (event) {
      _this.setState({
        mobileMoreAnchorEl: event.currentTarget
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMobileMenuClose", function () {
      _this.setState({
        mobileMoreAnchorEl: null
      });
    });

    return _this;
  }

  _createClass(SigninedNavbar, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          anchorEl = _this$state.anchorEl,
          mobileMoreAnchorEl = _this$state.mobileMoreAnchorEl;
      var classes = this.props.classes;
      var isMenuOpen = Boolean(anchorEl);
      var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

      var renderMenu = _react.default.createElement(_Menu.default, {
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        open: isMenuOpen,
        onClose: this.handleMenuClose
      }, _react.default.createElement(_MenuItem.default, {
        onClick: this.handleMenuClose
      }, "Profile"), _react.default.createElement(_MenuItem.default, {
        onClick: this.handleMenuClose
      }, "My account"));

      var renderMobileMenu = _react.default.createElement(_Menu.default, {
        anchorEl: mobileMoreAnchorEl,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        open: isMobileMenuOpen,
        onClose: this.handleMenuClose
      }, _react.default.createElement(_MenuItem.default, {
        onClick: this.handleMobileMenuClose
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null))), _react.default.createElement("p", null, "Messages")), _react.default.createElement(_MenuItem.default, {
        onClick: this.handleMobileMenuClose
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 11,
        color: "secondary"
      }, _react.default.createElement(_Notifications.default, null))), _react.default.createElement("p", null, "Notifications")), _react.default.createElement(_MenuItem.default, {
        onClick: this.handleProfileMenuOpen
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_AccountCircle.default, null)), _react.default.createElement("p", null, "Profile")));

      return _react.default.createElement("div", {
        className: classes.root
      }, _react.default.createElement(_AppBar.default, {
        position: "static"
      }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_IconButton.default, {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Open drawer"
      }, _react.default.createElement(_Menu2.default, null)), _react.default.createElement(_Typography.default, {
        className: classes.title,
        variant: "h6",
        color: "inherit",
        noWrap: true
      }, "Material-UI"), _react.default.createElement("div", {
        className: classes.grow
      }), _react.default.createElement("div", {
        className: classes.sectionDesktop
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 4,
        color: "secondary"
      }, _react.default.createElement(_Mail.default, null))), _react.default.createElement(_IconButton.default, {
        color: "inherit"
      }, _react.default.createElement(_Badge.default, {
        badgeContent: 17,
        color: "secondary"
      }, _react.default.createElement(_Notifications.default, null))), _react.default.createElement(_IconButton.default, {
        "aria-owns": isMenuOpen ? 'material-appbar' : undefined,
        "aria-haspopup": "true",
        onClick: this.handleProfileMenuOpen,
        color: "inherit"
      }, _react.default.createElement(_AccountCircle.default, null))), _react.default.createElement("div", {
        className: classes.sectionMobile
      }, _react.default.createElement(_IconButton.default, {
        "aria-haspopup": "true",
        onClick: this.handleMobileMenuOpen,
        color: "inherit"
      }, _react.default.createElement(_MoreVert.default, null))))), renderMenu, renderMobileMenu);
    }
  }]);

  return SigninedNavbar;
}(_react.default.Component);

SigninedNavbar.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(SigninedNavbar);

exports.default = _default;