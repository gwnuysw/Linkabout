"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Folder = _interopRequireDefault(require("@material-ui/icons/Folder"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _categoryCard = _interopRequireDefault(require("./categoryCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      flexGrow: 1,
      maxWidth: 752
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: "".concat(theme.spacing.unit * 4, "px 0 ").concat(theme.spacing.unit * 2, "px")
    }
  };
}; // function generate(element) {
//   return [0, 1, 2].map(value =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }


var CategoryList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CategoryList, _React$Component);

  function CategoryList() {
    _classCallCheck(this, CategoryList);

    return _possibleConstructorReturn(this, _getPrototypeOf(CategoryList).apply(this, arguments));
  }

  _createClass(CategoryList, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var curset;

      if (this.props.informOfSet != null) {
        curset = this.props.informOfSet.curset[0];
      } else {
        curset.title = 4;
        curset.createBy = 5;
      }

      console.log('check curset', this.props.informOfSet);
      return _react.default.createElement("div", {
        className: classes.root
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        md: 6
      }, _react.default.createElement("div", {
        className: classes.demo
      }, _react.default.createElement(_List.default, {
        dense: false
      }, _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, {
        primary: curset.title,
        secondary: curset.createdBy
      })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_categoryCard.default, null)))))));
    }
  }]);

  return CategoryList;
}(_react.default.Component);

CategoryList.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(CategoryList);

exports.default = _default;