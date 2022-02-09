self["webpackHotUpdate_N_E"]("pages/[season]",{

/***/ "./node_modules/@material-ui/core/esm/Fab/Fab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/Fab.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.button, {
      boxSizing: 'border-box',
      minHeight: 36,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      },
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: 'none'
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minHeight: 'auto',
      minWidth: 48,
      height: 48,
      '&$sizeSmall': {
        width: 'auto',
        padding: '0 8px',
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      },
      '&$sizeMedium': {
        width: 'auto',
        padding: '0 16px',
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
      width: 48,
      height: 48
    }
  };
};
var Fab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Fab(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$size = props.size,
      size = _props$size === void 0 ? 'large' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'circular' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, size !== 'large' && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(size))], disabled && classes.disabled, variant === 'extended' && classes.extended, {
      'primary': classes.primary,
      'secondary': classes.secondary,
      'inherit': classes.colorInherit
    }[color]),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.focusVisible, focusVisibleClassName),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classes.label
  }, children));
});
 true ? Fab.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * @ignore
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['large', 'medium', 'small']),

  /**
   * The variant to use.
   * 'round' is deprecated, use 'circular' instead.
   */
  variant: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_7__.chainPropTypes)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['extended', 'circular', 'round']), function (props) {
    if (props.variant === 'round') {
      throw new Error('Material-UI: variant="round" was renamed variant="circular" for consistency.');
    }

    return null;
  })
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiFab'
})(Fab));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fab/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Fab__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fab */ "./node_modules/@material-ui/core/esm/Fab/Fab.js");


/***/ }),

/***/ "./node_modules/@material-ui/icons/Block.js":
/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Block.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"
}), 'Block');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/CheckCircleOutline.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/icons/CheckCircleOutline.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'CheckCircleOutline');

exports.default = _default;

/***/ }),

/***/ "./components/Popup.tsx":
/*!******************************!*\
  !*** ./components/Popup.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\Popup.tsx",
    _this = undefined;

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  background-color: rgb(171, 196, 223);\n  color: rgb(10, 59, 112);\n  display: inline;\n  border: 1px solid rgb(10, 59, 112);\n  border-radius: 6px;\n  padding: 15px;\n  padding-top: 7px;\n  padding-bottom: 2px;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: fixed;\n  left: 50%;\n  text-align: center;\n  top: 50%;\n  z-index: 2147483649;\n  transform: translate(-50%, -50%);\n  background-color: rgba(230, 230, 230, 1);\n  font-size: 11px;\n  color: rgb(10, 59, 112);\n  word-break: keep-all;\n  padding: 10px 5px;\n  z-index: 999;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 100%;\n  height: 100%;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5);\n  display: none;\n  transition: all ease-out 0.3s;\n  z-index: 998;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Bg = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject());
_c = Bg;
var CenterDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject2());
_c2 = CenterDiv;
var ConfirmBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.button(_templateObject3());
_c3 = ConfirmBtn;

var Popup = function Popup() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Bg, {
    id: "popup",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CenterDiv, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "\uD53C\uBD80 \uCE21\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "\uB354 \uC815\uD655\uD55C \uC9C4\uB2E8\uC744 \uC704\uD574 \uB2E4\uC74C \uB2E8\uACC4\uB85C \uB118\uC5B4\uAC11\uB2C8\uB2E4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "\uBC84\uD2BC\uC744 \uB20C\uB7EC \uAC01 \uD544\uD130\uB97C \uC801\uC6A9\uD574\uBCF8 \uD6C4 \uC5BC\uAD74\uC774 \uB3CB\uBCF4\uC774\uB294 \uD544\uD130 \uC21C\uC73C\uB85C \uBC88\uD638\uB97C \uC815\uD574\uC8FC\uC138\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfirmBtn, {
        onClick: function onClick() {
          return document.getElementById('popup').style.display = 'none';
        },
        children: "\uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_c4 = Popup;
/* harmony default export */ __webpack_exports__["default"] = (Popup);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Bg");
$RefreshReg$(_c2, "CenterDiv");
$RefreshReg$(_c3, "ConfirmBtn");
$RefreshReg$(_c4, "Popup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/Header.tsx":
/*!************************************!*\
  !*** ./components/home/Header.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\Header.tsx",
    _this = undefined;

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  margin-top: 7vh;\n  margin-bottom: 3.9vh;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  font-size: 3.4vh;\n  font-weight: 600;\n  @media (max-height: 513px) {\n    font-size: 15px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  font-size: 3.3vh;\n  margin-bottom: 1.56vh;\n  font-weight: 400;\n  font-family: 'Dongle';\n  @media (max-height: 513px) {\n    font-size: 13px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var P = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.p(_templateObject());
_c = P;
var P2 = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.p(_templateObject2());
_c2 = P2;
var Head = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.header(_templateObject3());
_c3 = Head;

var Header = function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Head, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(P, {
      children: "\uB098\uB294 \uC6DC\uD1A4\uC77C\uAE4C? \uCFE8\uD1A4\uC77C\uAE4C?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(P2, {
      children: "\uD37C\uC2A4\uB110 \uCEEC\uB7EC \uC9C4\uB2E8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_c4 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "P");
$RefreshReg$(_c2, "P2");
$RefreshReg$(_c3, "Head");
$RefreshReg$(_c4, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/MainBtn.ts":
/*!************************************!*\
  !*** ./components/home/MainBtn.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject8() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    padding: 2vh 2vh;\n    align-items: center;\n    position: relative;\n    margin-bottom: 2.5vh;\n    background: white;\n    text-align: center;\n    cursor: pointer;\n    box-shadow: 0px 10px 40px #0000000f;\n    border-radius: 1.11vh;\n    :hover {\n      background-color: #ebfdfc;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    align-items: center;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 1.9vh;\n    @media (max-height: 513px) {\n      font-size: 11px;\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-weight: 300;\n    font-size: 1.22vh;\n    margin-top: 0.63vh;\n    color: #92888c;\n    @media (max-height: 513px) {\n      font-size: 8px;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    width: 2vh;\n    min-width: 12px;\n    min-height: 12px;\n    height: 2vh;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    width: 4.22vh;\n    height: 4.22vh;\n    min-width: 24px;\n    min-height: 24px;\n    border-radius: 100px;\n    background-color: #ff5da3;\n    display: flex;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    margin-left: 1vh;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    margin-top: 5px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var MainBtn = {
  ModeBtn: styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject()),
  TextWrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2()),
  ImgWrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3()),
  CamImg: styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject4()),
  P: styled_components__WEBPACK_IMPORTED_MODULE_1__.default.p(_templateObject5()),
  H1: styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span(_templateObject6()),
  MiddleWrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject7()),
  Wrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject8())
};
/* harmony default export */ __webpack_exports__["default"] = (MainBtn);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/MainBtnWrapper.tsx":
/*!********************************************!*\
  !*** ./components/home/MainBtnWrapper.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelfMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelfMode */ "./components/home/SelfMode.tsx");
/* harmony import */ var _UploadMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadMode */ "./components/home/UploadMode.tsx");
/* harmony import */ var _VideoMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VideoMode */ "./components/home/VideoMode.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\MainBtnWrapper.tsx",
    _this = undefined;





var MainBtnWrapper = function MainBtnWrapper() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VideoMode__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UploadMode__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SelfMode__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = MainBtnWrapper;
/* harmony default export */ __webpack_exports__["default"] = (MainBtnWrapper);

var _c;

$RefreshReg$(_c, "MainBtnWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/MainImage.tsx":
/*!***************************************!*\
  !*** ./components/home/MainImage.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\MainImage.tsx",
    _this = undefined;

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 16.5vh;\n  height: 16.5vh;\n  @media (max-height: 512px) {\n    width: 80px;\n    height: 80px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SVG = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.svg(_templateObject());
_c = SVG;

var MainImage = function MainImage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 210 210",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
        id: "clip-path",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
          id: "\uD0C0\uC6D0_113",
          "data-name": "\uD0C0\uC6D0 113",
          cx: "105",
          cy: "105",
          r: "105",
          transform: "translate(1030 1524)",
          fill: "#fff",
          stroke: "#707070",
          "stroke-width": "1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
        id: "clip-path-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
          id: "\uD0C0\uC6D0_111",
          "data-name": "\uD0C0\uC6D0 111",
          cx: "106",
          cy: "106",
          r: "106",
          transform: "translate(430.991 -1192.009)",
          fill: "#fff",
          stroke: "#707070",
          "stroke-width": "1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient",
        x1: "0.067",
        y1: "0.197",
        x2: "0.903",
        y2: "0.864",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#fac712"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#f69f23"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-3",
        x1: "0.939",
        y1: "0.658",
        x2: "0.05",
        y2: "0.5",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#fac712"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#feef00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-4",
        x1: "0.165",
        y1: "0.093",
        x2: "0.777",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#f69f23"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#fb6312"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-5",
        x1: "0.923",
        y1: "0.5",
        x2: "0",
        y2: "0.5",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#7421b0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#3a48ba"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-6",
        x1: "0.863",
        y1: "0.783",
        x2: "0.14",
        y2: "0.168",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#3a48ba"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#006fc4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-8",
        x1: "0.878",
        y1: "0.121",
        x2: "0.043",
        y2: "0.802",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#d2298e"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#7421b0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-10",
        x1: "0.625",
        y1: "0.698",
        x2: "0.197",
        y2: "0.034",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#006fc4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#00c2af"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-11",
        x1: "0.788",
        y1: "0.076",
        x2: "0.152",
        y2: "0.875",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#ff2600"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#d2298e"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-12",
        x1: "0.562",
        y1: "0.141",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#fb6312"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#ff2600"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-13",
        x1: "0.5",
        y1: "0.958",
        x2: "0.5",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#00c2af"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#00b500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-14",
        x1: "0.107",
        y1: "0.817",
        x2: "0.921",
        y2: "0.149",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#7fd200"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#feef00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "linear-gradient-16",
        x1: "0.251",
        y1: "1",
        x2: "0.822",
        y2: "0.108",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0",
          "stop-color": "#00b500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          "stop-color": "#7fd200"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      id: "\uB9C8\uC2A4\uD06C_\uADF8\uB8F9_9",
      "data-name": "\uB9C8\uC2A4\uD06C \uADF8\uB8F9 9",
      transform: "translate(-1030 -1524)",
      "clip-path": "url(#clip-path)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        id: "color-img",
        transform: "translate(598.009 2715.009)",
        "clip-path": "url(#clip-path-2)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          id: "\uADF8\uB8F9_1891",
          "data-name": "\uADF8\uB8F9 1891",
          transform: "translate(431 -1192)",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
            id: "\uD0C0\uC6D0_110",
            "data-name": "\uD0C0\uC6D0 110",
            cx: "93",
            cy: "93",
            r: "93",
            transform: "translate(11.991 11.991)",
            fill: "#fff"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
            id: "\uADF8\uB8F9_1890",
            "data-name": "\uADF8\uB8F9 1890",
            transform: "translate(0 0)",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_228",
              "data-name": "\uD328\uC2A4 228",
              d: "M1059.352,338.546l.019.019-.019-.019Z",
              transform: "translate(-878.672 -157.867)",
              fill: "none"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_229",
              "data-name": "\uD328\uC2A4 229",
              d: "M863.792,225.648h0Z",
              transform: "translate(-860.174 -147.096)",
              fill: "none"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_230",
              "data-name": "\uD328\uC2A4 230",
              d: "M1001.985,159.988a89.191,89.191,0,0,1,40.02,23.123l12.438-12.439h0l.019-.019-.1-.056a106.761,106.761,0,0,0-47.822-27.611h0Z",
              transform: "translate(-873.763 -139.369)",
              fill: "url(#linear-gradient)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_254",
              "data-name": "\uD328\uC2A4 254",
              d: "M1001.985,159.988a89.191,89.191,0,0,1,40.02,23.123l12.438-12.439h0l.019-.019-.1-.056a106.761,106.761,0,0,0-47.822-27.611h0Z",
              transform: "translate(-873.763 -137.35)",
              fill: "url(#linear-gradient)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_231",
              "data-name": "\uD328\uC2A4 231",
              d: "M946.455,142.647l4.556,17a89.748,89.748,0,0,1,46.223,0l4.557-17a107.669,107.669,0,0,0-55.336,0h0Z",
              transform: "translate(-868.13 -139.031)",
              fill: "url(#linear-gradient-3)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              id: "\uC0AC\uAC01\uD615_856",
              "data-name": "\uC0AC\uAC01\uD615 856",
              width: "17.602",
              transform: "translate(128.89 20.619) rotate(-75)",
              fill: "#feef00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_232",
              "data-name": "\uD328\uC2A4 232",
              d: "M1045.75,185.7a89.178,89.178,0,0,1,23.122,40.019l17-4.556h0l0,0a106.762,106.762,0,0,0-27.608-47.819l-.057-.1h0Z",
              transform: "translate(-877.508 -141.958)",
              fill: "url(#linear-gradient-4)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_233",
              "data-name": "\uD328\uC2A4 233",
              d: "M1058.188,173.261,1045.75,185.7h0l12.458-12.458h0l-.019.019Z",
              transform: "translate(-877.508 -141.958)",
              fill: "#f69f23"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_234",
              "data-name": "\uD328\uC2A4 234",
              d: "M997.233,350.23a89.748,89.748,0,0,1-46.223,0l-4.557,17h0a107.654,107.654,0,0,0,55.332,0h0Z",
              transform: "translate(-868.13 -158.867)",
              fill: "url(#linear-gradient-5)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_235",
              "data-name": "\uD328\uC2A4 235",
              d: "M941.97,365.068l4.556-17a89.183,89.183,0,0,1-40.019-23.122l-12.44,12.44h0l-.017.018.089.051a106.757,106.757,0,0,0,47.832,27.617h0Z",
              transform: "translate(-862.764 -156.703)",
              fill: "url(#linear-gradient-6)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_252",
              "data-name": "\uD328\uC2A4 252",
              d: "M941.97,365.068l4.556-17a89.183,89.183,0,0,1-40.019-23.122l-12.44,12.44h0l-.017.018.089.051a106.757,106.757,0,0,0,47.832,27.617h0Z",
              transform: "translate(-865.709 -158.722)",
              fill: "url(#linear-gradient-6)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_236",
              "data-name": "\uD328\uC2A4 236",
              d: "M946.454,367.232h0l4.556-17h0Z",
              transform: "translate(-867.916 -158.867)",
              fill: "#3a48ba"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_237",
              "data-name": "\uD328\uC2A4 237",
              d: "M1054.443,337.382l-12.438-12.439a89.181,89.181,0,0,1-40.02,23.122l4.556,17h0a106.749,106.749,0,0,0,47.822-27.609l.1-.058h0l-.019-.019Z",
              transform: "translate(-873.763 -156.703)",
              fill: "url(#linear-gradient-8)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_253",
              "data-name": "\uD328\uC2A4 253",
              d: "M1054.443,337.382l-12.438-12.439a89.181,89.181,0,0,1-40.02,23.122l4.556,17h0a106.749,106.749,0,0,0,47.822-27.609l.1-.058h0l-.019-.019Z",
              transform: "translate(-873.095 -157.712)",
              fill: "url(#linear-gradient-8)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_238",
              "data-name": "\uD328\uC2A4 238",
              d: "M1006.541,367.232l-4.556-17h0l4.556,17h0Z",
              transform: "translate(-873.095 -158.867)",
              fill: "#d2298e"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_239",
              "data-name": "\uD328\uC2A4 239",
              d: "M903.917,321.2a89.183,89.183,0,0,1-23.122-40.019l-17,4.556a106.754,106.754,0,0,0,27.616,47.829l.053.092h0Z",
              transform: "translate(-860.174 -152.958)",
              fill: "url(#linear-gradient-10)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_240",
              "data-name": "\uD328\uC2A4 240",
              d: "M894.066,337.383l12.44-12.44h0L894.048,337.4h0l.018-.018Z",
              transform: "translate(-862.764 -156.703)",
              fill: "#006fc4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_241",
              "data-name": "\uD328\uC2A4 241",
              d: "M1085.875,285.735l-17-4.556A89.183,89.183,0,0,1,1045.75,321.2l12.438,12.439h0l.019.019.056-.1a106.756,106.756,0,0,0,27.609-47.818l0-.006Z",
              transform: "translate(-877.508 -152.958)",
              fill: "url(#linear-gradient-11)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_242",
              "data-name": "\uD328\uC2A4 242",
              d: "M1045.75,324.943l12.438,12.439h0l-12.439-12.439Z",
              transform: "translate(-877.508 -156.703)",
              fill: "#ff2600"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_243",
              "data-name": "\uD328\uC2A4 243",
              d: "M1071.036,230.2a89.756,89.756,0,0,1,0,46.224l17,4.555h0v0a107.662,107.662,0,0,0,0-55.324v-.006h0Z",
              transform: "translate(-879.672 -147.325)",
              fill: "url(#linear-gradient-12)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_244",
              "data-name": "\uD328\uC2A4 244",
              d: "M1088.038,225.648l-17,4.556h0l17-4.556h0Z",
              transform: "translate(-879.672 -147.11)",
              fill: "#fb6312"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_245",
              "data-name": "\uD328\uC2A4 245",
              d: "M1088.038,285.734l-17-4.556h0l17,4.556h0Z",
              transform: "translate(-879.672 -152.29)",
              fill: "#fb6312"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_246",
              "data-name": "\uD328\uC2A4 246",
              d: "M863.454,280.983l17-4.556a89.726,89.726,0,0,1,0-46.224l-17-4.556h0a107.67,107.67,0,0,0,0,55.336Z",
              transform: "translate(-859.836 -147.324)",
              fill: "url(#linear-gradient-13)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_247",
              "data-name": "\uD328\uC2A4 247",
              d: "M880.794,281.179l-17,4.556h0l17-4.556Z",
              transform: "translate(-860.174 -152.29)",
              fill: "#00c2af"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_248",
              "data-name": "\uD328\uC2A4 248",
              d: "M906.506,183.111a89.183,89.183,0,0,1,40.02-23.123l-.752-2.8-.687-2.562-.152-.566c-.292-1.091-.573-2.141-.848-3.165l-.469-1.749q-.444-1.66-.869-3.243l-.781-2.914A106.758,106.758,0,0,0,894.14,170.6l-.091.053h0Z",
              transform: "translate(-862.764 -139.369)",
              fill: "url(#linear-gradient-14)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_255",
              "data-name": "\uD328\uC2A4 255",
              d: "M906.506,183.111a89.183,89.183,0,0,1,40.02-23.123l-.752-2.8-.687-2.562-.152-.566c-.292-1.091-.573-2.141-.848-3.165l-.469-1.749q-.444-1.66-.869-3.243l-.781-2.914A106.758,106.758,0,0,0,894.14,170.6l-.091.053h0Z",
              transform: "translate(-863.431 -138.36)",
              fill: "url(#linear-gradient-14)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_249",
              "data-name": "\uD328\uC2A4 249",
              d: "M948.1,149.142l.469,1.749c.274,1.024.556,2.074.848,3.165l.152.566.687,2.562.752,2.8h0l-4.556-17h0l.781,2.914Q947.66,147.484,948.1,149.142Z",
              transform: "translate(-867.916 -139.369)",
              fill: "#7fd200"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_250",
              "data-name": "\uD328\uC2A4 250",
              d: "M863.792,221.164l17,4.556A89.173,89.173,0,0,1,903.917,185.7L891.46,173.242l-.052.09a106.758,106.758,0,0,0-27.618,47.831Z",
              transform: "translate(-860.174 -141.958)",
              fill: "url(#linear-gradient-16)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              id: "\uD328\uC2A4_251",
              "data-name": "\uD328\uC2A4 251",
              d: "M863.792,225.648h0l17,4.556h0Z",
              transform: "translate(-860.175 -147.11)",
              fill: "#00b500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              id: "\uC0AC\uAC01\uD615_857",
              "data-name": "\uC0AC\uAC01\uD615 857",
              height: "17.618",
              transform: "translate(31.285 31.283) rotate(-45)",
              fill: "#00b500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 403,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
          id: "\uD0C0\uC6D0_112",
          "data-name": "\uD0C0\uC6D0 112",
          cx: "90",
          cy: "90",
          r: "90",
          transform: "translate(446.991 -1176.009)",
          fill: "#fff"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("text", {
          id: "_",
          "data-name": "?",
          transform: "translate(507.991 -1043.009)",
          "font-size": "123",
          fontWeight: "300",
          fontFamily: "Pretendard Variable",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tspan", {
            x: "0",
            y: "0",
            children: "?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c2 = MainImage;
/* harmony default export */ __webpack_exports__["default"] = (MainImage);

var _c, _c2;

$RefreshReg$(_c, "SVG");
$RefreshReg$(_c2, "MainImage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/MetaTag.tsx":
/*!*************************************!*\
  !*** ./components/home/MetaTag.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\MetaTag.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var MetaTag = function MetaTag() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('metaImg.jpg'),
      ogImage = _useState[0],
      setOgImage = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (sessionStorage.getItem('preUrl')) {
      //결과 공유페이지에서 리다이렉트 됐다면 새로운 썸네일 적용
      setOgImage(sessionStorage.getItem('preUrl'));
      sessionStorage.removeItem('preUrl');
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "\uD37C\uC2A4\uB110\uCEEC\uB7EC \uC9C4\uB2E8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image",
      content: "".concat("", "/images/").concat(ogImage)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:type",
      content: "website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:title",
      content: "\uC778\uACF5\uC9C0\uB2A5 \uD37C\uC2A4\uB110\uCEEC\uB7EC \uC790\uAC00\uC9C4\uB2E8 \uD14C\uC2A4\uD2B8-\uB9C8\uC774\uD37C\uC2A4\uB110\uCEEC\uB7EC(\uB9C8\uC774\uCEEC\uB7EC)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:description",
      content: "\uB098\uB294 \uC6DC\uD1A4\uC77C\uAE4C? \uCFE8\uD1A4\uC77C\uAE4C? \uD37C\uC2A4\uB110\uCEEC\uB7EC \uC790\uAC00 \uC9C4\uB2E8\uD558\uB7EC\uAC00\uAE30!! \uC778\uACF5\uC9C0\uB2A5\uC774 \uD53C\uBD80\uC0AC\uC9C4\uC744 \uBD84\uC11D\uD558\uC5EC \uACB0\uACFC\uB97C \uC54C\uB824\uC90D\uB2C8\uB2E4. \uD68C\uC6D0\uAC00\uC785\uC5C6\uC774 \uBD04 \uC6DC\uD1A4, \uC5EC\uB984 \uCFE8\uD1A4, \uAC00\uC744 \uC6DC\uD1A4, \uACA8\uC6B8 \uCFE8\uD1A4 \uC911 \uC5B4\uB514\uC5D0 \uD574\uB2F9\uD558\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:site_name",
      content: "\uC778\uACF5\uC9C0\uB2A5 \uD37C\uC2A4\uB110\uCEEC\uB7EC \uC790\uAC00\uC9C4\uB2E8 \uD14C\uC2A4\uD2B8-\uB9C8\uC774\uD37C\uC2A4\uB110\uCEEC\uB7EC(\uB9C8\uC774\uCEEC\uB7EC)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "canonical",
      href: "https://mycolor.kr/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: "\uB098\uB294 \uC6DC\uD1A4\uC77C\uAE4C? \uCFE8\uD1A4\uC77C\uAE4C? \uD37C\uC2A4\uB110\uCEEC\uB7EC \uC790\uAC00 \uC9C4\uB2E8\uD558\uB7EC\uAC00\uAE30!! \uC778\uACF5\uC9C0\uB2A5\uC774 \uD53C\uBD80\uC0AC\uC9C4\uC744 \uBD84\uC11D\uD558\uC5EC \uACB0\uACFC\uB97C \uC54C\uB824\uC90D\uB2C8\uB2E4. \uD68C\uC6D0\uAC00\uC785\uC5C6\uC774 \uBD04 \uC6DC\uD1A4, \uC5EC\uB984 \uCFE8\uD1A4, \uAC00\uC744 \uC6DC\uD1A4, \uACA8\uC6B8 \uCFE8\uD1A4 \uC911 \uC5B4\uB514\uC5D0 \uD574\uB2F9\uD558\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(MetaTag, "qc1RKeSCv8PexJ1XMKVFyBZpG5E=");

_c = MetaTag;
/* harmony default export */ __webpack_exports__["default"] = (MetaTag);

var _c;

$RefreshReg$(_c, "MetaTag");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/MiddleInfo.tsx":
/*!****************************************!*\
  !*** ./components/home/MiddleInfo.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\MiddleInfo.tsx",
    _this = undefined;

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  font-weight: 400;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  font-weight: 700;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  font-size: 1.9vh;\n  margin-top: 7.5vh;\n  margin-bottom: 3.13vh;\n  text-align: center;\n  line-height: 2.5vh;\n  @media (max-height: 513px) {\n    font-size: 9px;\n    line-height: 15px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Div = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject());
_c = Div;
var Bold = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.span(_templateObject2());
_c2 = Bold;
var Span = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.span(_templateObject3());
_c3 = Span;

var MiddleInfo = function MiddleInfo() {
  // const a = html`<div className="name" id="id">
  //   jaehoon<span>id</span><span>id</span> <span>id</span> <span>id</span
  //   ><span>id</span><span>id</span><span>id</span><span>id</span><span>id</span
  //   ><span>id</span>
  //   <span>id</span>
  // </div>`;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Div, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Bold, {
      children: "\uCEEC\uB7EC\uB9AC\uC2A4\uD2B8\uAC00 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Span, {
      children: "\uC81C\uC791\uD55C \uD37C\uC2A4\uB110\uCEEC\uB7EC \uC9C4\uB2E8 \uC0AC\uC774\uD2B8!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Span, {
      children: "\uB525\uB7EC\uB2DD \uD559\uC2B5 \uBAA8\uB378\uC744 \uD1B5\uD574 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Bold, {
      children: "\uD53C\uBD80\uB97C \uC9C4\uB2E8\uD569\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_c4 = MiddleInfo;
/* harmony default export */ __webpack_exports__["default"] = (MiddleInfo);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Div");
$RefreshReg$(_c2, "Bold");
$RefreshReg$(_c3, "Span");
$RefreshReg$(_c4, "MiddleInfo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/NewFaceBoardBtnGroup.tsx":
/*!**************************************************!*\
  !*** ./components/home/NewFaceBoardBtnGroup.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _store_colorStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/colorStore */ "./store/colorStore.ts");
/* harmony import */ var _utils_Debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/Debounce */ "./utils/Debounce.js");
/* harmony import */ var _DefaultBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DefaultBtn */ "./components/DefaultBtn.tsx");
/* harmony import */ var _canvasToImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./canvasToImg */ "./components/home/canvasToImg.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\NewFaceBoardBtnGroup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  color: white;\n  background: #7c7c7c;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  color: white;\n  background: #ff5da3;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  color: #ff5da3;\n  background: white;\n  margin-left: 10px;\n  margin-bottom: 1vh;\n  font-size: 1.8vh;\n  padding: 0.8vh 5vh;\n  border-radius: 0.4vh;\n  &:hover {\n    background: #ff5da3;\n    color: white;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Div = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div(_templateObject()); // const Button = styled.button`
// border: 2px solid rgb(10, 59, 112);
// display: inline;
// border-radius: 7px;
// padding: 0 1vh;
// padding-bottom: 0px;
// background-color: white;
// color : rgb(10, 59, 112);
// cursor: pointer;
// outline : 0;
// transition: all 0.3s ease-out 0s;
// margin-right : 10px;
// margin-bottom : 1vh;
// `

_c = Div;
var FilterBtn = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(_DefaultBtn__WEBPACK_IMPORTED_MODULE_8__.ButtonStyle)(_templateObject2());
_c2 = FilterBtn;
var FirstBtn = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(FilterBtn)(_templateObject3());
_c3 = FirstBtn;
var SendBtn = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(FilterBtn)(_templateObject4());
_c4 = SendBtn;
var SPRING_FALL_COLORS = [// ['rgb(195,127,158)', 'rgb(192,148,155)'],
// ['rgb(101,182,189)', 'rgb(145,127,107)'],
// ['rgb(89,156,49)', 'rgb(146,148,73)'],
['rgb(174,13,25)', 'rgb(84,44,37)'], ['rgb(189,177,153)', 'rgb(158,140,120)'], ['rgb(210,171,34)', 'rgb(211,159,70)']];
var SUMMER_WINTER_COLORS = [// ['rgb(15,162,165)', 'rgb(45,81,74)'],
// ['rgb(135,111,159)', 'rgb(63,51,120)'],
// ['rgb(66,123,166)', 'rgb(27,73,159)'],
['rgb(15,162,165)', 'rgb(45,81,74)'], ['rgb(212,163,182)', 'rgb(210,52,101)'], ['rgb(209,209,197)', 'rgb(211,207,168)']];
var SPRING_LIGHT_BRIGHT_COLORS = [['rgb(239, 204, 170)', 'rgb(251, 141, 61)'], //페일 , 브라이트
['rgb(216, 213, 168)', 'rgb(217, 200, 27)'], //페일 , 브라이트
['rgb(142, 135, 190)', 'rgb(0, 80, 157)'] //라이트 , 비비드
];
var SUMMER_LIGHT_BRIGHT_COLORS = [['rgb(239, 204, 170)', 'rgb(251, 141, 61)'], //페일 , 브라이트
['rgb(216, 213, 168)', 'rgb(217, 200, 27)'], //페일 , 브라이트
['rgb(228, 186, 192)', 'rgb(204, 92, 135)'] //페일 , 브라이트
];
var SUMMER_LIGHT_MUTE_COLORS = [['rgb(165, 206, 182)', 'rgb(102, 169, 134)'], //페일 , 소프트
['rgb(242, 140, 142)', 'rgb(157, 84, 86)'], //라이트 , 덜
['rgb(82, 166, 191)', 'rgb(76, 96, 104)'] //라이트 , 그레이시
];
var SUMMER_BRIGHT_MUTE_COLORS = [['rgb(118, 187, 76)', 'rgb(102, 169, 134)'], //브라이트 , 소프트
['rgb(242, 140, 142)', 'rgb(157, 84, 86)'], //라이트 , 덜
['rgb(82, 166, 191)', 'rgb(76, 96, 104)'] //라이트 , 그레이시
];
var FALL_MUTE_DEEP_COLORS = [['rgb(189, 162, 162)', 'rgb(61, 47, 47)'], //라이트 그레이시, 다크 그레이시
['rgb(79, 104, 107)', 'rgb(0, 94, 105)'], //그레이시, 딥
['rgb(204, 182, 100)', 'rgb(107, 94, 27)'] //소프트, 다크
];
var FALL_MUTE_STRONG_COLORS = [['rgb(149, 175, 160)', 'rgb(0, 138, 82)'], //라이트 그레이시, 스트롱
['rgb(115, 95, 84)', 'rgb(209, 105, 27)'], //그레이시 , 스트롱
['rgb(52, 84, 116)', 'rgb(0, 86, 146)'] //덜 , 스트롱
];
var FALL_DEEP_STRONG_COLORS = [['rgb(24, 81, 56)', 'rgb(0, 138, 82)'], //라이트 그레이시, 스트롱
['rgb(66, 53, 46)', 'rgb(209, 105, 27)'], //다크 그레이시 , 스트롱
['rgb(0, 64, 117)', 'rgb(0, 86, 146)'] //딥 , 스트롱
];
var WINTER_DEEP_BRIGHT_COLORS = [['rgb(61, 47, 47)', 'rgb(193, 53, 71)'], //다크 그레이시, 스트롱
['rgb(24, 81, 56)', 'rgb(74, 163, 21)'], //다크 , 비비드
['rgb(90, 38, 95)', 'rgb(102, 62, 140)'] //딥 , 비비드
]; // const season = ['springWarm', 'summerCool', 'fallWarm', 'winterCool'];

var NewFaceBoardBtnGroup = function NewFaceBoardBtnGroup() {
  _s();

  var deb = (0,_utils_Debounce__WEBPACK_IMPORTED_MODULE_7__.Debounce)();
  var toggleIdx = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
  var resultArr = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.ColorReducer.selfResult;
  });
  var SELF_COLORS = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.ColorReducer.selfColors;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var setResultArr = function setResultArr(isNext) {
    isNext ? resultArr.push(toggleIdx.current) : resultArr.pop();
    dispatch(_store_colorStore__WEBPACK_IMPORTED_MODULE_6__.actionCreators.setSelfResult((0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(resultArr)));
  };

  var IS_SUMMER_FALL = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
  var tone = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)('');
  var isNextRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
  var progressBar = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(document.getElementById('progressBar'));
  var percent = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(document.getElementById('progressPercent'));
  var video = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(document.getElementById('video'));
  var canvas = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(document.getElementById('drawingCanvas'));

  var setColors = function setColors(isPush) {
    //스토어 객체를 액션으로 업데이트하지 않는 이유는 리렌더링을 resultArr이 담당하고 있기 때문에.
    var ARR_SIZE = resultArr.length;

    if (isPush) {
      if (ARR_SIZE === 3) {
        var FIRST_COUNT = resultArr.filter(function (i) {
          return i === 0;
        });

        if (FIRST_COUNT.length >= 2) {
          SPRING_FALL_COLORS.forEach(function (_i, idx) {
            return SELF_COLORS.push(SPRING_FALL_COLORS[idx]);
          });
          tone.current = 'warm';
        } else {
          SUMMER_WINTER_COLORS.forEach(function (_i, idx) {
            return SELF_COLORS.push(SUMMER_WINTER_COLORS[idx]);
          });
          tone.current = 'cool';
        }
      } else if (ARR_SIZE === 6) {
        var _FIRST_COUNT = resultArr.slice(3, 6).filter(function (i) {
          return i === 0;
        });

        if (_FIRST_COUNT.length >= 2) {
          if (tone.current === 'warm') SPRING_LIGHT_BRIGHT_COLORS.forEach(function (_i, idx) {
            return SELF_COLORS.push(SPRING_LIGHT_BRIGHT_COLORS[idx]);
          });else {
            SUMMER_LIGHT_BRIGHT_COLORS.forEach(function (_i, idx) {
              return SELF_COLORS.push(SUMMER_LIGHT_BRIGHT_COLORS[idx]);
            });
            tone.current = 'summer';
            IS_SUMMER_FALL.current = true;
          }
        } else {
          if (tone.current === 'warm') {
            FALL_MUTE_DEEP_COLORS.forEach(function (_i, idx) {
              return SELF_COLORS.push(FALL_MUTE_DEEP_COLORS[idx]);
            });
            tone.current = 'fall';
            IS_SUMMER_FALL.current = true;
          } else WINTER_DEEP_BRIGHT_COLORS.forEach(function (_i, idx) {
            return SELF_COLORS.push(WINTER_DEEP_BRIGHT_COLORS[idx]);
          });
        }
      } else if (ARR_SIZE === 9) {
        var _FIRST_COUNT2 = resultArr.slice(6, 9).filter(function (i) {
          return i === 0;
        });

        if (_FIRST_COUNT2.length >= 2) {
          if (tone.current === 'summer') {
            SUMMER_LIGHT_MUTE_COLORS.forEach(function (_i, idx) {
              return SELF_COLORS.push(SUMMER_LIGHT_MUTE_COLORS[idx]);
            });
            tone.current = 'light';
          } else {
            FALL_MUTE_STRONG_COLORS.forEach(function (_i, idx) {
              return SELF_COLORS.push(FALL_MUTE_STRONG_COLORS[idx]);
            });
            tone.current = 'mute';
          }
        } else {
          if (tone.current === 'summer') {
            SUMMER_BRIGHT_MUTE_COLORS.forEach(function (_i, idx) {
              return SELF_COLORS.push(SUMMER_BRIGHT_MUTE_COLORS[idx]);
            });
            tone.current = 'bright';
          } else {
            FALL_DEEP_STRONG_COLORS.forEach(function (_i, idx) {
              return SELF_COLORS.push(FALL_DEEP_STRONG_COLORS[idx]);
            });
            tone.current = 'deep';
          }
        }
      }
    } else if (ARR_SIZE === 2 || ARR_SIZE === 5 || ARR_SIZE === 8) {
      if (tone.current === 'deep' || tone.current === 'mute') tone.current = 'fall';else if (tone.current === 'light' || tone.current === 'bright') tone.current = 'summer';else if (tone.current === 'fall' || tone.current === 'warm') {
        IS_SUMMER_FALL.current = false;
        tone.current = 'warm';
      } else {
        IS_SUMMER_FALL.current = false;
        tone.current = 'cool';
      }
      SELF_COLORS.splice(ARR_SIZE + 1);
    }
  };

  var getResult = function getResult() {
    try {
      var colorID = 0;

      if (!IS_SUMMER_FALL.current) {
        var FIRST_COUNT = resultArr.slice(6).filter(function (i) {
          return i === 0;
        });

        switch (tone.current) {
          case 'warm':
            if (FIRST_COUNT.length >= 2) {
              colorID = 5;
            } else {
              colorID = 6;
            }

            break;

          case 'cool':
            if (FIRST_COUNT.length >= 2) {
              colorID = 13;
            } else {
              colorID = 14;
            }

            break;

          default:
            break;
        }
      } else {
        var _FIRST_COUNT3 = resultArr.slice(9).filter(function (i) {
          return i === 0;
        });

        switch (tone.current) {
          case 'light':
            if (_FIRST_COUNT3.length >= 2) {
              colorID = 7;
            } else {
              colorID = 8;
            }

            break;

          case 'bright':
            if (_FIRST_COUNT3.length >= 2) {
              colorID = 9;
            } else {
              colorID = 8;
            }

            break;

          case 'mute':
            if (_FIRST_COUNT3.length >= 2) {
              colorID = 10;
            } else {
              colorID = 11;
            }

            break;

          case 'deep':
            if (_FIRST_COUNT3.length >= 2) {
              colorID = 12;
            } else {
              colorID = 11;
            }

            break;

          default:
            break;
        }
      }

      var form = new FormData();
      form.append('file', (0,_canvasToImg__WEBPACK_IMPORTED_MODULE_9__.default)(false));
      form.append('colorID', colorID.toString());
      form.append('data_ver', '2');
      form.append('Q_Arr', JSON.stringify(resultArr));
      axios__WEBPACK_IMPORTED_MODULE_3___default().post('/remove/setSelfResult', form);
      SELF_COLORS.splice(3);
      dispatch(_store_colorStore__WEBPACK_IMPORTED_MODULE_6__.actionCreators.setSelfResult([]));
      var stream = video.current.srcObject; //비디오 스트림

      var tracks = stream.getTracks(); //트랙

      tracks[0].stop();
      if (colorID >= 5 && colorID <= 6) document.getElementById('springWarm').click();else if (colorID >= 7 && colorID <= 9) document.getElementById('summerCool').click();else if (colorID >= 10 && colorID <= 12) document.getElementById('fallWarm').click();else document.getElementById('winterCool').click();
    } catch (error) {
      alert(error.name);
    } // document.getElementById(season[colorID])!.click();

  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (isNextRef.current && resultArr.length === 9 && !IS_SUMMER_FALL.current || resultArr.length === 12 && IS_SUMMER_FALL.current) {
      getResult();
    } else {
      setColors(isNextRef.current);

      if (IS_SUMMER_FALL.current) {
        percent.current.innerText = "".concat(resultArr.length + 1, "/12");
        progressBar.current.style.width = "".concat((resultArr.length + 1) * 8.33, "%");
      } else {
        percent.current.innerText = "".concat(resultArr.length + 1, "/9");
        progressBar.current.style.width = "".concat((resultArr.length + 1) * 11.11, "%");
      }
    }
  }, [resultArr]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setTimeout(function () {
      window.scrollTo(0, window.innerHeight);
    }, 100);
    var progressContainer = document.getElementById('progressContainer');
    progressContainer.style.display = 'flex';
    percent.current.innerText = "1/9";
    progressBar.current.style.width = "10%";
  }, []);
  var toggleChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (idx) {
    var _document$getElementB, _document$getElementB2;

    var beforeSelect = (_document$getElementB = document.getElementById('faceBoardBtnGroup')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.childNodes[toggleIdx.current];
    var target = (_document$getElementB2 = document.getElementById('faceBoardBtnGroup')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.childNodes[idx];
    beforeSelect.style.color = '#ff5da3';
    beforeSelect.style.background = 'white';
    target.style.color = 'white';
    target.style.background = '#ff5da3';
    toggleIdx.current = idx;
  }, []);
  var prevNextBtn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (isNext) {
    canvas.current.style.transform = 'scale(1,1)';
    video.current.style.transform = 'scale(1,1)';
    setTimeout(function () {
      canvas.current.style.transform = 'scale(-1,1)';
      video.current.style.transform = 'scale(-1,1)';
    }, 125);
    setResultArr(isNext);
    isNextRef.current = isNext;
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Div, {
    id: "faceBoardBtnGroup",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstBtn, {
      size: "small",
      onClick: function onClick() {
        toggleChange(0);
        sessionStorage.setItem('colorSelect', '0');
      },
      children: "1\uBC88 \uC0C9\uC0C1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterBtn, {
      size: "small",
      onClick: function onClick() {
        toggleChange(1);
        sessionStorage.setItem('colorSelect', '1');
      },
      children: "2\uBC88 \uC0C9\uC0C1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [resultArr.length === 0 ? '' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SendBtn, {
        onClick: function onClick() {
          return deb.debounce(function () {
            return prevNextBtn(false);
          }, 400);
        },
        children: "\uC774\uC804 \uC0C9\uC0C1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SendBtn, {
        onClick: function onClick() {
          return deb.debounce(function () {
            return prevNextBtn(true);
          }, 400);
        },
        children: "\uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 374,
    columnNumber: 5
  }, _this);
};

_s(NewFaceBoardBtnGroup, "YahcTsM8h7TDKUUW7an2i4p7ghE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch];
});

_c5 = NewFaceBoardBtnGroup;
/* harmony default export */ __webpack_exports__["default"] = (NewFaceBoardBtnGroup);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Div");
$RefreshReg$(_c2, "FilterBtn");
$RefreshReg$(_c3, "FirstBtn");
$RefreshReg$(_c4, "SendBtn");
$RefreshReg$(_c5, "NewFaceBoardBtnGroup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/ProgressBar.tsx":
/*!*****************************************!*\
  !*** ./components/home/ProgressBar.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\ProgressBar.tsx",
    _this = undefined;

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  font-size: 2.5vh;\n  position: absolute;\n  transition: all 0.17s;\n  left: 50%;\n  transform: translateX(-50%);\n  color: white;\n  @media (min-height: 440px) {\n    font-size: 12px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  float: left;\n  background: rgb(255, 93, 163);\n  transition: unset;\n  height: 5vh;\n  max-height: 20px;\n  width: 0%;\n  border-radius: 2vh;\n  @media (max-height: 470px) {\n    height: 20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 100%;\n  background: rgb(218, 174, 193);\n  flex-direction: column-reverse;\n  justify-content: center;\n  border-radius: 2vh;\n  margin-bottom: 1vh;\n  margin-top: 1vh;\n  height: 20px;\n  display: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ProgressWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject());
_c = ProgressWrapper;
var Bar = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject2());
_c2 = Bar;
var Span = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.span(_templateObject3());
_c3 = Span;

var ProgressBar = function ProgressBar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressWrapper, {
    id: "progressContainer",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Bar, {
      id: "progressBar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Span, {
      id: "progressPercent",
      children: "0%"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_c4 = ProgressBar;
/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ProgressWrapper");
$RefreshReg$(_c2, "Bar");
$RefreshReg$(_c3, "Span");
$RefreshReg$(_c4, "ProgressBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/Router.tsx":
/*!************************************!*\
  !*** ./components/home/Router.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\Router.tsx",
    _this = undefined;



var Router = function Router() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/springWarm",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        id: "springWarm"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/summerCool",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        id: "summerCool"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/fallWarm",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        id: "fallWarm"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/winterCool",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        id: "winterCool"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Router;
/* harmony default export */ __webpack_exports__["default"] = (Router);

var _c;

$RefreshReg$(_c, "Router");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/ScanNotice.tsx":
/*!****************************************!*\
  !*** ./components/home/ScanNotice.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _DefaultBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DefaultBtn */ "./components/DefaultBtn.tsx");
/* harmony import */ var _store_colorStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/colorStore */ "./store/colorStore.ts");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Block */ "./node_modules/@material-ui/icons/Block.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "./node_modules/@material-ui/icons/CheckCircleOutline.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/theme */ "./utils/theme.ts");
/* harmony import */ var _StreamCanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StreamCanvas */ "./components/home/StreamCanvas.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\ScanNotice.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject16() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  color: #3f51b5;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  color: #f50057;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  margin-top: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  @media (max-width: 499px) {\n    margin-top: 6px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 50px;\n  @media (max-width: 499px) {\n    width: 40px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  margin-top: 5px;\n  white-space: nowrap;\n  font-size: 13px;\n  @media (max-width: 499px) {\n    font-size: 10px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex;\n  align-items: flex-end;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex;\n  padding-bottom: 10px;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  background: ", ";\n  border-top-", "-radius: 15px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  width: 150px;\n  height: 220px;\n  border-radius: 5px;\n  @media (max-width: 499px) {\n    width: 120px;\n    height: 170px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  margin-right: 5px;\n  font-size: 20px;\n  position: relative;\n  top: 1.5px;\n  @media (max-width: 499px) {\n    font-size: 15px;\n    top: 0px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  font-size: 13px;\n  margin-bottom: 0px;\n  padding: 0px 20px !important;\n  cursor: unset;\n  @media (max-width: 499px) {\n    font-size: 11px;\n    padding: 0px 10px !important;\n    height: 27px !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  padding: 1.5vh 2.8vh;\n  font-size: 1.8vh;\n  color: white;\n  background: #ff5da3;\n  border: 1px solid #ff5da3;\n  :hover {\n    color: #ff5da3;\n    background: white;\n  }\n  @media (max-width: 720px) {\n    padding: 1.2vh 2.5vh;\n    font-size: 1.5vh;\n  }\n  @media (max-height: 568px) {\n    padding: 10px 13px;\n    font-size: 13px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  background: white;\n  border-radius: 15px;\n  box-shadow: 3px 3px 3px gray;\n  position: fixed;\n  padding-bottom: 10px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: all 0.5s ease-out;\n  max-height: 100vh;\n  @media (max-width: 499px) {\n    width: 360px;\n  }\n  @media (max-width: 321px) {\n    width: 320px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  background: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  animation: ", " 0.5s linear alternate;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject(), _utils_theme__WEBPACK_IMPORTED_MODULE_5__.default.fadeUp);
_c = Container;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject2());
_c2 = Wrapper;
var CustomBtn = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_DefaultBtn__WEBPACK_IMPORTED_MODULE_3__.ButtonStyle)(_templateObject3());
_c3 = CustomBtn;
var Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject4());
_c4 = Title;
var IconStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(_templateObject5());
var Icon = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_9__.default)(_templateObject6(), IconStyle);
_c5 = Icon;
var Icon2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject7(), IconStyle);
_c6 = Icon2;
var MiddleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject8());
_c7 = MiddleWrapper;
var Img = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.img(_templateObject9());
_c8 = Img;
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject10(), function (props) {
  return props.color;
}, function (props) {
  return props.radius;
});
_c9 = ImgWrapper;
var SubWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject11());
_c10 = SubWrapper;
var SubInfo = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.span(_templateObject12());
_c11 = SubInfo;
var SmallIcon = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.img(_templateObject13());
_c12 = SmallIcon;
var SmallIconDiv = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject14());
_c13 = SmallIconDiv;
var PointRed = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.span(_templateObject15());
_c14 = PointRed;
var PointBlue = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.span(_templateObject16());
_c15 = PointBlue;

var ScanNotice = function ScanNotice(_ref) {
  _s();

  var storyTrigger = _ref.storyTrigger;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var popupTrigger = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.ColorReducer.scanTrigger;
  });

  var closeNotice = function closeNotice() {
    document.getElementById('scanNotice').parentElement.style.zIndex = '997';
    dispatch(_store_colorStore__WEBPACK_IMPORTED_MODULE_4__.actionCreators.setScanTrigger(false));
    (0,_StreamCanvas__WEBPACK_IMPORTED_MODULE_6__.default)('scan'); // console.log(getComputedStyle(document.getElementById("scanNotice")!.parentElement!).getPropertyValue('z-index'));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    trigger: popupTrigger,
    storyTrigger: storyTrigger,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      trigger: popupTrigger,
      storyTrigger: storyTrigger,
      id: "scanNotice",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MiddleWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImgWrapper, {
          color: "rgb(224, 230, 251)",
          radius: "left",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubWrapper, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              variant: "extended",
              size: "small",
              color: "primary",
              "aria-label": "add",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon2, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, _this), "\uC62C\uBC14\uB978 \uCE21\uC815\uBC95"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
            src: "".concat("", "/images/scanSuccess.jpg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubInfo, {
            children: ["\uC5BC\uAD74\uC774 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PointBlue, {
              children: "\uADF8\uB298\uC9C0\uC9C0 \uC54A\uC740"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 19
            }, _this), " \uAE68\uB057\uD55C \uC0C1\uD0DC"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImgWrapper, {
          color: "rgba(235, 83, 116, 0.12)",
          radius: "right",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubWrapper, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              variant: "extended",
              size: "small",
              color: "secondary",
              "aria-label": "add",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, _this), "\uC798\uBABB\uB41C \uCE21\uC815\uBC95"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallIconDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallIcon, {
              src: "".concat("", "/images/noGlasses.png")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallIcon, {
              src: "".concat("", "/images/noMask.png")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubInfo, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PointRed, {
              children: "\uC548\uACBD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, _this), "\uACFC ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PointRed, {
              children: "\uB9C8\uC2A4\uD06C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 40
            }, _this), "\uB294 \uC7A0\uC2DC \uBC97\uC5B4\uC8FC\uC138\uC694!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallIconDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallIcon, {
              src: "".concat("", "/images/degreeFace.png")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallIcon, {
              src: "".concat("", "/images/rightFace.png")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubInfo, {
            children: ["\uC5BC\uAD74\uC740 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PointRed, {
              children: "\uAE30\uC6B8\uC774\uC9C0 \uC54A\uACE0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 19
            }, _this), " \uB611\uBC14\uB85C!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallIconDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallIcon, {
              src: "".concat("", "/images/dark.png")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubInfo, {
            children: ["\uB108\uBB34 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PointRed, {
              children: "\uC5B4\uB450\uC6B4 \uACF3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 18
            }, _this), "\uC740 \uC548\uB3FC\uC694!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomBtn, {
        onClick: closeNotice,
        children: "\uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 5
  }, _this);
};

_s(ScanNotice, "6E3D9vUcm1rqsndtPBK8zSB13P4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c16 = ScanNotice;
/* harmony default export */ __webpack_exports__["default"] = (ScanNotice);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "CustomBtn");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "Icon");
$RefreshReg$(_c6, "Icon2");
$RefreshReg$(_c7, "MiddleWrapper");
$RefreshReg$(_c8, "Img");
$RefreshReg$(_c9, "ImgWrapper");
$RefreshReg$(_c10, "SubWrapper");
$RefreshReg$(_c11, "SubInfo");
$RefreshReg$(_c12, "SmallIcon");
$RefreshReg$(_c13, "SmallIconDiv");
$RefreshReg$(_c14, "PointRed");
$RefreshReg$(_c15, "PointBlue");
$RefreshReg$(_c16, "ScanNotice");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/SelfMode.tsx":
/*!**************************************!*\
  !*** ./components/home/SelfMode.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainBtn */ "./components/home/MainBtn.ts");
/* harmony import */ var _Stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stream */ "./components/home/Stream.ts");
/* harmony import */ var _utils_Debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Debounce */ "./utils/Debounce.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\SelfMode.tsx",
    _this = undefined;





var SelfMode = function SelfMode() {
  // var store = useSelector((state:StoreState)=> state.ColorReducer.springFaceBoard)
  var deb = (0,_utils_Debounce__WEBPACK_IMPORTED_MODULE_3__.Debounce)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.Wrapper, {
    onClick: function onClick() {
      deb.debounce(function () {
        (0,_Stream__WEBPACK_IMPORTED_MODULE_2__.default)('faceboard'); // document.getElementById("testExplain")!.parentElement!.innerText = "가장 얼굴이 화사해지는 필터를 확인 후 결과 확인 버튼을 눌러주세요"
      }, 300);
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.MiddleWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.ImgWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.CamImg, {
          alt: "camera \uCE74\uBA54\uB77C",
          src: "".concat("", "/images/self.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.TextWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.H1, {
          children: "\uC790\uAC00\uC9C4\uB2E8 \uBC29\uC2DD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.P, {
          children: "\uC9C1\uC811 \uC5B4\uC6B8\uB9AC\uB294 \uC0C9\uC744 \uD310\uB2E8\uD574\uBCF4\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = SelfMode;
/* harmony default export */ __webpack_exports__["default"] = (SelfMode);

var _c;

$RefreshReg$(_c, "SelfMode");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/UploadMode.tsx":
/*!****************************************!*\
  !*** ./components/home/UploadMode.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainBtn */ "./components/home/MainBtn.ts");
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageUpload */ "./components/home/ImageUpload.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\UploadMode.tsx",
    _this = undefined;




var UploadMode = function UploadMode() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.Wrapper, {
    onClick: function onClick() {
      var ua = navigator.userAgent;

      if (/fb|instagram/i.test(ua) && !/iphone|ipad/i.test(ua)) {
        alert('원활한 측정을 위해 기본 브라우저로 이동합니다.');
        window.open('intent://mycolortest.ml#Intent;scheme=http;package=com.android.chrome;end');
        return;
      }

      (0,_ImageUpload__WEBPACK_IMPORTED_MODULE_2__.default)('scan');
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.MiddleWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.ImgWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.CamImg, {
          alt: "camera \uCE74\uBA54\uB77C",
          src: "".concat("", "/images/upload.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.TextWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.H1, {
          children: "\uC0AC\uC9C4 \uC5C5\uB85C\uB4DC \uBC29\uC2DD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.P, {
          children: "\uC0AC\uC9C4\uC740 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = UploadMode;
/* harmony default export */ __webpack_exports__["default"] = (UploadMode);

var _c;

$RefreshReg$(_c, "UploadMode");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/home/VideoMode.tsx":
/*!***************************************!*\
  !*** ./components/home/VideoMode.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainBtn */ "./components/home/MainBtn.ts");
/* harmony import */ var _Stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stream */ "./components/home/Stream.ts");
/* harmony import */ var _utils_Debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Debounce */ "./utils/Debounce.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\home\\VideoMode.tsx",
    _this = undefined;





var VideoMode = function VideoMode() {
  // var store = useSelector((state:StoreState)=> state.ColorReducer.springFaceBoard)
  var deb = (0,_utils_Debounce__WEBPACK_IMPORTED_MODULE_3__.Debounce)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.Wrapper, {
    onClick: function onClick() {
      deb.debounce(function () {
        // dispatch(actionCreators.setScanTrigger(true));
        (0,_Stream__WEBPACK_IMPORTED_MODULE_2__.default)('scan');
      }, 300);
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.MiddleWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.ImgWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.CamImg, {
          alt: "camera \uCE74\uBA54\uB77C",
          src: "".concat("", "/images/camera.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.TextWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.H1, {
          children: "\uC2E4\uC2DC\uAC04 \uCE21\uC815 \uBC29\uC2DD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainBtn__WEBPACK_IMPORTED_MODULE_1__.default.P, {
          children: "\uAE30\uC885\uC5D0 \uB530\uB77C \uB2E4\uC18C \uB290\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = VideoMode;
/* harmony default export */ __webpack_exports__["default"] = (VideoMode);

var _c;

$RefreshReg$(_c, "VideoMode");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/resultPage/MaskRecommend.tsx":
/*!*************************************************!*\
  !*** ./components/resultPage/MaskRecommend.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/theme */ "./utils/theme.ts");
/* harmony import */ var _DefaultBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DefaultBtn */ "./components/DefaultBtn.tsx");
/* harmony import */ var _home_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/Stream */ "./components/home/Stream.ts");
/* harmony import */ var _home_TestExplain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/TestExplain */ "./components/home/TestExplain.tsx");
/* harmony import */ var _NoBgTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NoBgTitle */ "./components/NoBgTitle.tsx");
/* harmony import */ var _MaskSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MaskSlider */ "./components/resultPage/MaskSlider.tsx");
/* harmony import */ var _utils_Debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/Debounce */ "./utils/Debounce.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages */ "./pages/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\resultPage\\MaskRecommend.tsx",
    _this = undefined;

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: relative;\n  opacity: 0;\n  transition: all 0.5s ease-out;\n  @media (min-width: 1025px) {\n    width: 650px;\n  }\n  @media (min-width: 610px) and (max-width: 1024px) {\n    width: 600px;\n  }\n  @media (max-width: 610px) {\n    width: 320px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.article(_templateObject()); // const MainWrapper = styled(theme.columnWrapper)`
//  width : 100%;
// `

_c = Wrapper;
var Img = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.img(_templateObject2());
_c2 = Img;

var MaskRecommend = function MaskRecommend() {
  var deb = (0,_utils_Debounce__WEBPACK_IMPORTED_MODULE_8__.Debounce)();

  var maskOn = function maskOn() {
    return deb.debounce(function () {
      (0,_home_Stream__WEBPACK_IMPORTED_MODULE_4__.default)('mask');
    }, 300);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_theme__WEBPACK_IMPORTED_MODULE_2__.default.columnWrapper, {
    id: "maskContainer",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoBgTitle__WEBPACK_IMPORTED_MODULE_6__.default, {
      rightText: "\uCD94\uCC9C \uB9C8\uC2A4\uD06C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DefaultBtn__WEBPACK_IMPORTED_MODULE_3__.default, {
      id: "maskBtn",
      onClick: maskOn,
      children: "\uAC00\uC0C1 \uB9C8\uC2A4\uD06C \uCC29\uC6A9\uD574\uBCF4\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      id: "testWrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages__WEBPACK_IMPORTED_MODULE_9__.Canvas, {
        className: "faceCanvas",
        id: "drawingCanvas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages__WEBPACK_IMPORTED_MODULE_9__.Video, {
        id: "video",
        width: "400",
        height: "400",
        autoPlay: true,
        muted: true,
        playsInline: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "file",
        accept: "image/*",
        id: "imageInput",
        style: {
          display: 'none'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        id: "faceImage",
        className: "faceCanvas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_TestExplain__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MaskSlider__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_c3 = MaskRecommend;
/* harmony default export */ __webpack_exports__["default"] = (MaskRecommend);

var _c, _c2, _c3;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Img");
$RefreshReg$(_c3, "MaskRecommend");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Video": function() { return /* binding */ Video; },
/* harmony export */   "Canvas": function() { return /* binding */ Canvas; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_home_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/ProgressBar */ "./components/home/ProgressBar.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Popup */ "./components/Popup.tsx");
/* harmony import */ var _components_home_MetaTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/MetaTag */ "./components/home/MetaTag.tsx");
/* harmony import */ var _components_home_Router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/Router */ "./components/home/Router.tsx");
/* harmony import */ var _components_home_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/Header */ "./components/home/Header.tsx");
/* harmony import */ var _components_home_MainBtnWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/MainBtnWrapper */ "./components/home/MainBtnWrapper.tsx");
/* harmony import */ var _components_home_TestExplain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/TestExplain */ "./components/home/TestExplain.tsx");
/* harmony import */ var _components_home_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/Loading */ "./components/home/Loading.tsx");
/* harmony import */ var _components_home_ScanNotice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/ScanNotice */ "./components/home/ScanNotice.tsx");
/* harmony import */ var _components_home_ML_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home/ML_Loading */ "./components/home/ML_Loading.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_home_MainImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/home/MainImage */ "./components/home/MainImage.tsx");
/* harmony import */ var _components_home_MiddleInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/home/MiddleInfo */ "./components/home/MiddleInfo.tsx");
/* harmony import */ var _components_home_NewFaceBoardBtnGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/home/NewFaceBoardBtnGroup */ "./components/home/NewFaceBoardBtnGroup.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject6() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: none;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: relative;\n  margin-top: 25px;\n  transition: all 0.5s ease-out;\n  opacity: 0;\n  @media (min-width: 1025px) {\n    width: 650px;\n  }\n  @media (min-width: 610px) and (max-width: 1024px) {\n    width: 600px;\n  }\n  @media (max-width: 610px) {\n    width: 320px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  z-index: 997;\n  left: 0;\n  position: absolute;\n  transform: scale(-1, 1);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  object-fit: fill;\n  transform: scale(-1, 1);\n  display: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  flex-direction: column;\n  align-items: center;\n  transition: all 0.5s ease-in;\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  overflow-y: hidden;\n  @media (max-height: 568px) {\n    height: unset;\n    min-height: 100vh;\n    justify-content: unset;\n    padding-bottom: 60px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // import FaceBoardBtnGroup from '../components/home/FaceBoardBtnGroup';













var MainBody = styled_components__WEBPACK_IMPORTED_MODULE_17__.default.section(_templateObject());
_c = MainBody;
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_17__.default.div(_templateObject2());
_c2 = HeaderWrapper;
var Video = styled_components__WEBPACK_IMPORTED_MODULE_17__.default.video(_templateObject3());
_c3 = Video;
var Canvas = styled_components__WEBPACK_IMPORTED_MODULE_17__.default.canvas(_templateObject4());
_c4 = Canvas;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_17__.default.div(_templateObject5());
_c5 = Wrapper;
var Img = styled_components__WEBPACK_IMPORTED_MODULE_17__.default.img(_templateObject6());
_c6 = Img;

var IndexPage = function IndexPage() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    // StreamCheck()
    // Promise.all([
    //   faceapi.nets.tinyFaceDetector.loadFromUri(`${process.env.PATH}/models`),
    //   faceapi.nets.faceLandmark68TinyNet.loadFromUri(`${process.env.PATH}/models`),
    // ]).then(() => {
    //   // document.getElementById("loading").style.display = "none" //모델이 로드되면 로딩 끄기
    // })
    document.body.parentElement.style.fontSize = '10px';
    var img = new Image();
    img.src = "".concat("", "/images/background.svg");

    img.onload = function () {
      var body = document.getElementById('mainBody');
      body.style.backgroundImage = "url(".concat(img.src, ")");
      body.style.display = 'flex';
    }; // let userAgent = navigator.userAgent.toLowerCase()
    // if(userAgent.indexOf('kakaotalk')> -1){
    //   alert("인앱브라우저가 실시간 스캔 기능을 지원하지 않아 기본브라우저로 이동합니다")
    //   window.open("https://urlopen.link/mycolortest.ml")
    // }
    // let ua = navigator.userAgent
    // document.getElementById("headerWrapper").innerText = ua
    // if(/mobile/i.test(ua) || /inapp|kakaotalk|line\/|fb_iab\/fa4a|fban\/fbios|instagram|daumdevice\/mobile|samsungbrowser\/[^1]/i.test(ua))
    // window.open("https://urlopen.link/mycolortest.ml/")

  }, []);
  var scanNotice = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(function (state) {
    return state.ColorReducer.scanTrigger;
  });
  var scanStart = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(function (state) {
    return state.ColorReducer.scanStart;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainBody, {
    id: "mainBody",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ML_Loading__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), scanNotice ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ScanNotice__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }, _this) : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Loading__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_MetaTag__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Router__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Popup__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderWrapper, {
      id: "headerWrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_Header__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_MainImage__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_MiddleInfo__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_MainBtnWrapper__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      id: "testWrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Canvas, {
        className: "faceCanvas",
        id: "drawingCanvas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Video, {
        id: "video",
        width: "400",
        height: "400",
        muted: true,
        playsInline: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "file",
        accept: ".jpg,.png,.gif,.jpeg,.bmp",
        id: "imageInput",
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        id: "faceImage",
        className: "faceCanvas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TestExplain__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), scanStart ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_NewFaceBoardBtnGroup__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 22
      }, _this) : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }, _this);
};

_s(IndexPage, "xrHZnKFsrros/XExHDRkg3QDyJc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector];
});

_c7 = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "MainBody");
$RefreshReg$(_c2, "HeaderWrapper");
$RefreshReg$(_c3, "Video");
$RefreshReg$(_c4, "Canvas");
$RefreshReg$(_c5, "Wrapper");
$RefreshReg$(_c6, "Img");
$RefreshReg$(_c7, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9GYWIvRmFiLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0Jsb2NrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlT3V0bGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3B1cC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9IZWFkZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvTWFpbkJ0bi50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL01haW5CdG5XcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL01haW5JbWFnZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9NZXRhVGFnLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL01pZGRsZUluZm8udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvTmV3RmFjZUJvYXJkQnRuR3JvdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvUHJvZ3Jlc3NCYXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvUm91dGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1NjYW5Ob3RpY2UudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvU2VsZk1vZGUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvVXBsb2FkTW9kZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9WaWRlb01vZGUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Jlc3VsdFBhZ2UvTWFza1JlY29tbWVuZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJCZyIsInN0eWxlZCIsIkNlbnRlckRpdiIsIkNvbmZpcm1CdG4iLCJQb3B1cCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJQIiwiUDIiLCJIZWFkIiwiSGVhZGVyIiwiTWFpbkJ0biIsIk1vZGVCdG4iLCJUZXh0V3JhcHBlciIsIkltZ1dyYXBwZXIiLCJDYW1JbWciLCJIMSIsIk1pZGRsZVdyYXBwZXIiLCJXcmFwcGVyIiwiTWFpbkJ0bldyYXBwZXIiLCJTVkciLCJNYWluSW1hZ2UiLCJNZXRhVGFnIiwidXNlU3RhdGUiLCJvZ0ltYWdlIiwic2V0T2dJbWFnZSIsInVzZUVmZmVjdCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJwcm9jZXNzIiwiRGl2IiwiQm9sZCIsIlNwYW4iLCJNaWRkbGVJbmZvIiwiRmlsdGVyQnRuIiwiQnV0dG9uU3R5bGUiLCJGaXJzdEJ0biIsIlNlbmRCdG4iLCJTUFJJTkdfRkFMTF9DT0xPUlMiLCJTVU1NRVJfV0lOVEVSX0NPTE9SUyIsIlNQUklOR19MSUdIVF9CUklHSFRfQ09MT1JTIiwiU1VNTUVSX0xJR0hUX0JSSUdIVF9DT0xPUlMiLCJTVU1NRVJfTElHSFRfTVVURV9DT0xPUlMiLCJTVU1NRVJfQlJJR0hUX01VVEVfQ09MT1JTIiwiRkFMTF9NVVRFX0RFRVBfQ09MT1JTIiwiRkFMTF9NVVRFX1NUUk9OR19DT0xPUlMiLCJGQUxMX0RFRVBfU1RST05HX0NPTE9SUyIsIldJTlRFUl9ERUVQX0JSSUdIVF9DT0xPUlMiLCJOZXdGYWNlQm9hcmRCdG5Hcm91cCIsImRlYiIsIkRlYm91bmNlIiwidG9nZ2xlSWR4IiwidXNlUmVmIiwicmVzdWx0QXJyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIkNvbG9yUmVkdWNlciIsInNlbGZSZXN1bHQiLCJTRUxGX0NPTE9SUyIsInNlbGZDb2xvcnMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2V0UmVzdWx0QXJyIiwiaXNOZXh0IiwicHVzaCIsImN1cnJlbnQiLCJwb3AiLCJhY3Rpb25DcmVhdG9ycyIsIklTX1NVTU1FUl9GQUxMIiwidG9uZSIsImlzTmV4dFJlZiIsInByb2dyZXNzQmFyIiwicGVyY2VudCIsInZpZGVvIiwiY2FudmFzIiwic2V0Q29sb3JzIiwiaXNQdXNoIiwiQVJSX1NJWkUiLCJsZW5ndGgiLCJGSVJTVF9DT1VOVCIsImZpbHRlciIsImkiLCJmb3JFYWNoIiwiX2kiLCJpZHgiLCJzbGljZSIsInNwbGljZSIsImdldFJlc3VsdCIsImNvbG9ySUQiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJjYW52YXNUb0ltZyIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImF4aW9zIiwic3RyZWFtIiwic3JjT2JqZWN0IiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwic3RvcCIsImNsaWNrIiwiZXJyb3IiLCJhbGVydCIsIm5hbWUiLCJpbm5lclRleHQiLCJ3aWR0aCIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImlubmVySGVpZ2h0IiwicHJvZ3Jlc3NDb250YWluZXIiLCJ0b2dnbGVDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImJlZm9yZVNlbGVjdCIsImNoaWxkTm9kZXMiLCJ0YXJnZXQiLCJjb2xvciIsImJhY2tncm91bmQiLCJwcmV2TmV4dEJ0biIsInRyYW5zZm9ybSIsInNldEl0ZW0iLCJkZWJvdW5jZSIsIlByb2dyZXNzV3JhcHBlciIsIkJhciIsIlByb2dyZXNzQmFyIiwiUm91dGVyIiwiQ29udGFpbmVyIiwidGhlbWUiLCJDdXN0b21CdG4iLCJUaXRsZSIsIkZhYiIsIkljb25TdHlsZSIsImNzcyIsIkljb24iLCJCbG9ja0ljb24iLCJJY29uMiIsIkNoZWNrQ2lyY2xlT3V0bGluZUljb24iLCJJbWciLCJwcm9wcyIsInJhZGl1cyIsIlN1YldyYXBwZXIiLCJTdWJJbmZvIiwiU21hbGxJY29uIiwiU21hbGxJY29uRGl2IiwiUG9pbnRSZWQiLCJQb2ludEJsdWUiLCJTY2FuTm90aWNlIiwic3RvcnlUcmlnZ2VyIiwicG9wdXBUcmlnZ2VyIiwic2NhblRyaWdnZXIiLCJjbG9zZU5vdGljZSIsInBhcmVudEVsZW1lbnQiLCJ6SW5kZXgiLCJTdHJlYW1DYW52YXMiLCJTZWxmTW9kZSIsIlN0cmVhbSIsIlVwbG9hZE1vZGUiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRlc3QiLCJvcGVuIiwiSW1hZ2VVcGxvYWQiLCJWaWRlb01vZGUiLCJNYXNrUmVjb21tZW5kIiwibWFza09uIiwiTWFpbkJvZHkiLCJIZWFkZXJXcmFwcGVyIiwiVmlkZW8iLCJDYW52YXMiLCJJbmRleFBhZ2UiLCJib2R5IiwiZm9udFNpemUiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImJhY2tncm91bmRJbWFnZSIsInNjYW5Ob3RpY2UiLCJzY2FuU3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRjtBQUNoQztBQUMzQjtBQUNJO0FBQ1g7QUFDNEI7QUFDTjtBQUNQO0FBQ007QUFDdEM7QUFDUDtBQUNBO0FBQ0EsVUFBVSwyRUFBUSxHQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG9CQUFvQjs7QUFFcEIsOERBQThELEtBQUs7QUFDbkUsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJGQUF3Qjs7QUFFdEMsc0JBQXNCLGdEQUFtQixDQUFDLGdEQUFVLEVBQUUsMkVBQVE7QUFDOUQsZUFBZSw2Q0FBSSxvRUFBb0UsMERBQVU7QUFDakc7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2Q0FBSTtBQUMvQjtBQUNBLEdBQUcsdUJBQXVCLGdEQUFtQjtBQUM3QztBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFFTTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBEQUFnQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwREFBZ0I7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsdURBQWU7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrREFFQzs7QUFFZDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQWM7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3REFBYzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBEQUFnQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFnQjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFlOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0VBQWMsQ0FBQyx1REFBZTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxHQUFHLENBQU07QUFDViwrREFBZSwyREFBVTtBQUN6QjtBQUNBLENBQUMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUE07O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRiw4QkFBOEIsbUJBQU8sQ0FBQyxzSEFBK0M7O0FBRXJGLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGVBQWU7O0FBRWYsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELDRDQUE0QyxtQkFBTyxDQUFDLHVGQUF1Qjs7QUFFM0U7QUFDQTtBQUNBLENBQUM7O0FBRUQsZUFBZSxZOzs7Ozs7Ozs7OztBQ25CRjs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GLDhCQUE4QixtQkFBTyxDQUFDLHNIQUErQzs7QUFFckYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsZUFBZTs7QUFFZixvQ0FBb0MsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFbkQsNENBQTRDLG1CQUFPLENBQUMsdUZBQXVCOztBQUUzRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxlQUFlLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJmO0FBRUEsSUFBTUEsRUFBRSxHQUFHQywwREFBSCxtQkFBUjtLQUFNRCxFO0FBV04sSUFBTUUsU0FBUyxHQUFHRCwwREFBSCxvQkFBZjtNQUFNQyxTO0FBY04sSUFBTUMsVUFBVSxHQUFHRiw2REFBSCxvQkFBaEI7TUFBTUUsVTs7QUFXTixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLHNCQUNFLDhEQUFDLEVBQUQ7QUFBSSxNQUFFLEVBQUMsT0FBUDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFPRSw4REFBQyxVQUFEO0FBQ0UsZUFBTyxFQUFFO0FBQUEsaUJBQ05DLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFrQ0MsS0FBbEMsQ0FBd0NDLE9BQXhDLEdBQWtELE1BRDVDO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQXBCRDs7TUFBTUosSztBQXNCTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFFQSxJQUFNSyxDQUFDLEdBQUdSLHdEQUFILG1CQUFQO0tBQU1RLEM7QUFVTixJQUFNQyxFQUFFLEdBQUdULHdEQUFILG9CQUFSO01BQU1TLEU7QUFRTixJQUFNQyxJQUFJLEdBQUdWLDZEQUFILG9CQUFWO01BQU1VLEk7O0FBTU4sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBb0I7QUFDakMsc0JBQ0UsOERBQUMsSUFBRDtBQUFBLDRCQUNFLDhEQUFDLENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBUEQ7O01BQU1BLE07QUFTTiwrREFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUVBLElBQU1DLE9BQU8sR0FBRztBQUNkQyxTQUFPLEVBQUViLDBEQUFGLG1CQURPO0FBT2RjLGFBQVcsRUFBRWQsMERBQUYsb0JBUEc7QUFhZGUsWUFBVSxFQUFFZiwwREFBRixvQkFiSTtBQXNCZGdCLFFBQU0sRUFBRWhCLDBEQUFGLG9CQXRCUTtBQWdDZFEsR0FBQyxFQUFFUix3REFBRixvQkFoQ2E7QUEwQ2RpQixJQUFFLEVBQUVqQiwyREFBRixvQkExQ1k7QUFnRGRrQixlQUFhLEVBQUVsQiwwREFBRixvQkFoREM7QUFvRGRtQixTQUFPLEVBQUVuQiwwREFBRjtBQXBETyxDQUFoQjtBQXFFQSwrREFBZVksT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFvQjtBQUN6QyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O0tBQU1BLGM7QUFVTiwrREFBZUEsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQSxJQUFNQyxHQUFHLEdBQUdyQiwwREFBSCxtQkFBVDtLQUFNcUIsRzs7QUFTTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLHNCQUNFLDhEQUFDLEdBQUQ7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDLGFBQWhEO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUFVLFVBQUUsRUFBQyxXQUFiO0FBQUEsK0JBQ0U7QUFDRSxZQUFFLEVBQUMsa0JBREw7QUFFRSx1QkFBVSxrQkFGWjtBQUdFLFlBQUUsRUFBQyxLQUhMO0FBSUUsWUFBRSxFQUFDLEtBSkw7QUFLRSxXQUFDLEVBQUMsS0FMSjtBQU1FLG1CQUFTLEVBQUMsc0JBTlo7QUFPRSxjQUFJLEVBQUMsTUFQUDtBQVFFLGdCQUFNLEVBQUMsU0FSVDtBQVNFLDBCQUFhO0FBVGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWNFO0FBQVUsVUFBRSxFQUFDLGFBQWI7QUFBQSwrQkFDRTtBQUNFLFlBQUUsRUFBQyxrQkFETDtBQUVFLHVCQUFVLGtCQUZaO0FBR0UsWUFBRSxFQUFDLEtBSEw7QUFJRSxZQUFFLEVBQUMsS0FKTDtBQUtFLFdBQUMsRUFBQyxLQUxKO0FBTUUsbUJBQVMsRUFBQyw4QkFOWjtBQU9FLGNBQUksRUFBQyxNQVBQO0FBUUUsZ0JBQU0sRUFBQyxTQVJUO0FBU0UsMEJBQWE7QUFUZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGLGVBMkJFO0FBQ0UsVUFBRSxFQUFDLGlCQURMO0FBRUUsVUFBRSxFQUFDLE9BRkw7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLFVBQUUsRUFBQyxPQUpMO0FBS0UsVUFBRSxFQUFDLE9BTEw7QUFNRSxxQkFBYSxFQUFDLG1CQU5oQjtBQUFBLGdDQVFFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLHdCQUFXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQix3QkFBVztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNCRixlQXNDRTtBQUNFLFVBQUUsRUFBQyxtQkFETDtBQUVFLFVBQUUsRUFBQyxPQUZMO0FBR0UsVUFBRSxFQUFDLE9BSEw7QUFJRSxVQUFFLEVBQUMsTUFKTDtBQUtFLFVBQUUsRUFBQyxLQUxMO0FBTUUscUJBQWEsRUFBQyxtQkFOaEI7QUFBQSxnQ0FRRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQix3QkFBVztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBU0U7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsd0JBQVc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0Q0YsZUFpREU7QUFDRSxVQUFFLEVBQUMsbUJBREw7QUFFRSxVQUFFLEVBQUMsT0FGTDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsVUFBRSxFQUFDLE9BSkw7QUFLRSxVQUFFLEVBQUMsR0FMTDtBQU1FLHFCQUFhLEVBQUMsbUJBTmhCO0FBQUEsZ0NBUUU7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsd0JBQVc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLHdCQUFXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakRGLGVBNERFO0FBQ0UsVUFBRSxFQUFDLG1CQURMO0FBRUUsVUFBRSxFQUFDLE9BRkw7QUFHRSxVQUFFLEVBQUMsS0FITDtBQUlFLFVBQUUsRUFBQyxHQUpMO0FBS0UsVUFBRSxFQUFDLEtBTEw7QUFNRSxxQkFBYSxFQUFDLG1CQU5oQjtBQUFBLGdDQVFFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLHdCQUFXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQix3QkFBVztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVERixlQXVFRTtBQUNFLFVBQUUsRUFBQyxtQkFETDtBQUVFLFVBQUUsRUFBQyxPQUZMO0FBR0UsVUFBRSxFQUFDLE9BSEw7QUFJRSxVQUFFLEVBQUMsTUFKTDtBQUtFLFVBQUUsRUFBQyxPQUxMO0FBTUUscUJBQWEsRUFBQyxtQkFOaEI7QUFBQSxnQ0FRRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQix3QkFBVztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBU0U7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsd0JBQVc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2RUYsZUFrRkU7QUFDRSxVQUFFLEVBQUMsbUJBREw7QUFFRSxVQUFFLEVBQUMsT0FGTDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsVUFBRSxFQUFDLE9BSkw7QUFLRSxVQUFFLEVBQUMsT0FMTDtBQU1FLHFCQUFhLEVBQUMsbUJBTmhCO0FBQUEsZ0NBUUU7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsd0JBQVc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLHdCQUFXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEZGLGVBNkZFO0FBQ0UsVUFBRSxFQUFDLG9CQURMO0FBRUUsVUFBRSxFQUFDLE9BRkw7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLFVBQUUsRUFBQyxPQUpMO0FBS0UsVUFBRSxFQUFDLE9BTEw7QUFNRSxxQkFBYSxFQUFDLG1CQU5oQjtBQUFBLGdDQVFFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLHdCQUFXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQix3QkFBVztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdGRixlQXdHRTtBQUNFLFVBQUUsRUFBQyxvQkFETDtBQUVFLFVBQUUsRUFBQyxPQUZMO0FBR0UsVUFBRSxFQUFDLE9BSEw7QUFJRSxVQUFFLEVBQUMsT0FKTDtBQUtFLFVBQUUsRUFBQyxPQUxMO0FBTUUscUJBQWEsRUFBQyxtQkFOaEI7QUFBQSxnQ0FRRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQix3QkFBVztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBU0U7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsd0JBQVc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4R0YsZUFtSEU7QUFDRSxVQUFFLEVBQUMsb0JBREw7QUFFRSxVQUFFLEVBQUMsT0FGTDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsVUFBRSxFQUFDLEtBSkw7QUFLRSxVQUFFLEVBQUMsR0FMTDtBQU1FLHFCQUFhLEVBQUMsbUJBTmhCO0FBQUEsZ0NBUUU7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsd0JBQVc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLHdCQUFXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkhGLGVBOEhFO0FBQ0UsVUFBRSxFQUFDLG9CQURMO0FBRUUsVUFBRSxFQUFDLEtBRkw7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLFVBQUUsRUFBQyxLQUpMO0FBS0UscUJBQWEsRUFBQyxtQkFMaEI7QUFBQSxnQ0FPRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQix3QkFBVztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBUUU7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsd0JBQVc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5SEYsZUF3SUU7QUFDRSxVQUFFLEVBQUMsb0JBREw7QUFFRSxVQUFFLEVBQUMsT0FGTDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsVUFBRSxFQUFDLE9BSkw7QUFLRSxVQUFFLEVBQUMsT0FMTDtBQU1FLHFCQUFhLEVBQUMsbUJBTmhCO0FBQUEsZ0NBUUU7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsd0JBQVc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLHdCQUFXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeElGLGVBbUpFO0FBQ0UsVUFBRSxFQUFDLG9CQURMO0FBRUUsVUFBRSxFQUFDLE9BRkw7QUFHRSxVQUFFLEVBQUMsR0FITDtBQUlFLFVBQUUsRUFBQyxPQUpMO0FBS0UsVUFBRSxFQUFDLE9BTEw7QUFNRSxxQkFBYSxFQUFDLG1CQU5oQjtBQUFBLGdDQVFFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLHdCQUFXO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQix3QkFBVztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5KRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWdLRTtBQUNFLFFBQUUsRUFBQyxtQ0FETDtBQUVFLG1CQUFVLG1DQUZaO0FBR0UsZUFBUyxFQUFDLHdCQUhaO0FBSUUsbUJBQVUsaUJBSlo7QUFBQSw2QkFNRTtBQUNFLFVBQUUsRUFBQyxXQURMO0FBRUUsaUJBQVMsRUFBQyw2QkFGWjtBQUdFLHFCQUFVLG1CQUhaO0FBQUEsZ0NBS0U7QUFDRSxZQUFFLEVBQUMsbUJBREw7QUFFRSx1QkFBVSxtQkFGWjtBQUdFLG1CQUFTLEVBQUMsc0JBSFo7QUFBQSxrQ0FLRTtBQUNFLGNBQUUsRUFBQyxrQkFETDtBQUVFLHlCQUFVLGtCQUZaO0FBR0UsY0FBRSxFQUFDLElBSEw7QUFJRSxjQUFFLEVBQUMsSUFKTDtBQUtFLGFBQUMsRUFBQyxJQUxKO0FBTUUscUJBQVMsRUFBQywwQkFOWjtBQU9FLGdCQUFJLEVBQUM7QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBY0U7QUFBRyxjQUFFLEVBQUMsbUJBQU47QUFBZ0IseUJBQVUsbUJBQTFCO0FBQW9DLHFCQUFTLEVBQUMsZ0JBQTlDO0FBQUEsb0NBQ0U7QUFDRSxnQkFBRSxFQUFDLGtCQURMO0FBRUUsMkJBQVUsa0JBRlo7QUFHRSxlQUFDLEVBQUMsdUNBSEo7QUFJRSx1QkFBUyxFQUFDLDhCQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQyxxQkFISjtBQUlFLHVCQUFTLEVBQUMsOEJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQWVFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLDZIQUhKO0FBSUUsdUJBQVMsRUFBQyw4QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZGLGVBc0JFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLDZIQUhKO0FBSUUsdUJBQVMsRUFBQyw2QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRCRixlQTZCRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQyxtR0FISjtBQUlFLHVCQUFTLEVBQUMsNkJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3QkYsZUFvQ0U7QUFDRSxnQkFBRSxFQUFDLHdCQURMO0FBRUUsMkJBQVUsd0JBRlo7QUFHRSxtQkFBSyxFQUFDLFFBSFI7QUFJRSx1QkFBUyxFQUFDLHNDQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcENGLGVBMkNFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLGlIQUhKO0FBSUUsdUJBQVMsRUFBQyw4QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTNDRixlQWtERTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQyw4REFISjtBQUlFLHVCQUFTLEVBQUMsOEJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsREYsZUF5REU7QUFDRSxnQkFBRSxFQUFDLGtCQURMO0FBRUUsMkJBQVUsa0JBRlo7QUFHRSxlQUFDLEVBQUMsNEZBSEo7QUFJRSx1QkFBUyxFQUFDLDZCQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekRGLGVBZ0VFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLG9JQUhKO0FBSUUsdUJBQVMsRUFBQyw4QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhFRixlQXVFRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQyxvSUFISjtBQUlFLHVCQUFTLEVBQUMsOEJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2RUYsZUE4RUU7QUFDRSxnQkFBRSxFQUFDLGtCQURMO0FBRUUsMkJBQVUsa0JBRlo7QUFHRSxlQUFDLEVBQUMsZ0NBSEo7QUFJRSx1QkFBUyxFQUFDLDhCQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBOUVGLGVBcUZFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLHdJQUhKO0FBSUUsdUJBQVMsRUFBQyw4QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJGRixlQTRGRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQyx3SUFISjtBQUlFLHVCQUFTLEVBQUMsOEJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE1RkYsZUFtR0U7QUFDRSxnQkFBRSxFQUFDLGtCQURMO0FBRUUsMkJBQVUsa0JBRlo7QUFHRSxlQUFDLEVBQUMsMkNBSEo7QUFJRSx1QkFBUyxFQUFDLDhCQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkdGLGVBMEdFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLDRHQUhKO0FBSUUsdUJBQVMsRUFBQyw4QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFHRixlQWlIRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQywyREFISjtBQUlFLHVCQUFTLEVBQUMsOEJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqSEYsZUF3SEU7QUFDRSxnQkFBRSxFQUFDLGtCQURMO0FBRUUsMkJBQVUsa0JBRlo7QUFHRSxlQUFDLEVBQUMsMklBSEo7QUFJRSx1QkFBUyxFQUFDLDhCQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeEhGLGVBK0hFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLGtEQUhKO0FBSUUsdUJBQVMsRUFBQyw4QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQS9IRixlQXNJRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQyxtR0FISjtBQUlFLHVCQUFTLEVBQUMsOEJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0SUYsZUE2SUU7QUFDRSxnQkFBRSxFQUFDLGtCQURMO0FBRUUsMkJBQVUsa0JBRlo7QUFHRSxlQUFDLEVBQUMsMkNBSEo7QUFJRSx1QkFBUyxFQUFDLDZCQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0lGLGVBb0pFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLDJDQUhKO0FBSUUsdUJBQVMsRUFBQyw2QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBKRixlQTJKRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQyxrR0FISjtBQUlFLHVCQUFTLEVBQUMsOEJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzSkYsZUFrS0U7QUFDRSxnQkFBRSxFQUFDLGtCQURMO0FBRUUsMkJBQVUsa0JBRlo7QUFHRSxlQUFDLEVBQUMsd0NBSEo7QUFJRSx1QkFBUyxFQUFDLDZCQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEtGLGVBeUtFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLGtOQUhKO0FBSUUsdUJBQVMsRUFBQyw4QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpLRixlQWdMRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQyxrTkFISjtBQUlFLHVCQUFTLEVBQUMsNkJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoTEYsZUF1TEU7QUFDRSxnQkFBRSxFQUFDLGtCQURMO0FBRUUsMkJBQVUsa0JBRlo7QUFHRSxlQUFDLEVBQUMsNElBSEo7QUFJRSx1QkFBUyxFQUFDLDhCQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdkxGLGVBOExFO0FBQ0UsZ0JBQUUsRUFBQyxrQkFETDtBQUVFLDJCQUFVLGtCQUZaO0FBR0UsZUFBQyxFQUFDLDBIQUhKO0FBSUUsdUJBQVMsRUFBQyw4QkFKWjtBQUtFLGtCQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlMRixlQXFNRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSwyQkFBVSxrQkFGWjtBQUdFLGVBQUMsRUFBQyxnQ0FISjtBQUlFLHVCQUFTLEVBQUMsNkJBSlo7QUFLRSxrQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyTUYsZUE0TUU7QUFDRSxnQkFBRSxFQUFDLHdCQURMO0FBRUUsMkJBQVUsd0JBRlo7QUFHRSxvQkFBTSxFQUFDLFFBSFQ7QUFJRSx1QkFBUyxFQUFDLHNDQUpaO0FBS0Usa0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBNU1GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUF3T0U7QUFDRSxZQUFFLEVBQUMsa0JBREw7QUFFRSx1QkFBVSxrQkFGWjtBQUdFLFlBQUUsRUFBQyxJQUhMO0FBSUUsWUFBRSxFQUFDLElBSkw7QUFLRSxXQUFDLEVBQUMsSUFMSjtBQU1FLG1CQUFTLEVBQUMsOEJBTlo7QUFPRSxjQUFJLEVBQUM7QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhPRixlQWlQRTtBQUNFLFlBQUUsRUFBQyxHQURMO0FBRUUsdUJBQVUsR0FGWjtBQUdFLG1CQUFTLEVBQUMsOEJBSFo7QUFJRSx1QkFBVSxLQUpaO0FBS0Usb0JBQVUsRUFBQyxLQUxiO0FBTUUsb0JBQVUsRUFBQyxxQkFOYjtBQUFBLGlDQVFFO0FBQU8sYUFBQyxFQUFDLEdBQVQ7QUFBYSxhQUFDLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBalBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoS0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3YUQsQ0F6YUQ7O01BQU1BLFM7QUEyYU4sK0RBQWVBLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGJBO0FBQ0E7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBb0I7QUFBQTs7QUFBQSxrQkFDSkMsK0NBQVEsQ0FBQyxhQUFELENBREo7QUFBQSxNQUMzQkMsT0FEMkI7QUFBQSxNQUNsQkMsVUFEa0I7O0FBR2xDQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsUUFBdkIsQ0FBSixFQUFzQztBQUNwQztBQUNBSCxnQkFBVSxDQUFDRSxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsUUFBdkIsQ0FBRCxDQUFWO0FBQ0FELG9CQUFjLENBQUNFLFVBQWYsQ0FBMEIsUUFBMUI7QUFDRDtBQUNGLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxzQkFDRSw4REFBQyxrREFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUNFLGNBQVEsRUFBQyxVQURYO0FBRUUsYUFBTyxZQUFLQyxFQUFMLHFCQUFnQ04sT0FBaEM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFNRTtBQUFNLGNBQVEsRUFBQyxTQUFmO0FBQXlCLGFBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRTtBQUNFLGNBQVEsRUFBQyxVQURYO0FBRUUsYUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBV0U7QUFDRSxjQUFRLEVBQUMsZ0JBRFg7QUFFRSxhQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUFlRTtBQUNFLGNBQVEsRUFBQyxjQURYO0FBRUUsYUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGLGVBbUJFO0FBQU0sU0FBRyxFQUFDLFdBQVY7QUFBc0IsVUFBSSxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkYsZUFvQkU7QUFDRSxVQUFJLEVBQUMsYUFEUDtBQUVFLGFBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0FyQ0Q7O0dBQU1GLE87O0tBQUFBLE87QUF1Q04sK0RBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBRUEsSUFBTVMsR0FBRyxHQUFHaEMsMERBQUgsbUJBQVQ7S0FBTWdDLEc7QUFXTixJQUFNQyxJQUFJLEdBQUdqQywyREFBSCxvQkFBVjtNQUFNaUMsSTtBQUdOLElBQU1DLElBQUksR0FBR2xDLDJEQUFILG9CQUFWO01BQU1rQyxJOztBQUdOLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQ0UsOERBQUMsR0FBRDtBQUFBLDRCQUNFLDhEQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLDhEQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFLDhEQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBaEJEOztNQUFNQSxVO0FBa0JOLCtEQUFlQSxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1ILEdBQUcsR0FBR2hDLDJEQUFILG1CQUFULEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQWpCTWdDLEc7QUFtQk4sSUFBTUksU0FBUyxHQUFHcEMsMkRBQU0sQ0FBQ3FDLG9EQUFELENBQVQsb0JBQWY7TUFBTUQsUztBQWNOLElBQU1FLFFBQVEsR0FBR3RDLDJEQUFNLENBQUNvQyxTQUFELENBQVQsb0JBQWQ7TUFBTUUsUTtBQUtOLElBQU1DLE9BQU8sR0FBR3ZDLDJEQUFNLENBQUNvQyxTQUFELENBQVQsb0JBQWI7TUFBTUcsTztBQUtOLElBQU1DLGtCQUFrQixHQUFHLENBQ3pCO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQUQsRUFBbUIsZUFBbkIsQ0FKeUIsRUFLekIsQ0FBQyxrQkFBRCxFQUFxQixrQkFBckIsQ0FMeUIsRUFNekIsQ0FBQyxpQkFBRCxFQUFvQixpQkFBcEIsQ0FOeUIsQ0FBM0I7QUFTQSxJQUFNQyxvQkFBb0IsR0FBRyxDQUMzQjtBQUNBO0FBQ0E7QUFDQSxDQUFDLGlCQUFELEVBQW9CLGVBQXBCLENBSjJCLEVBSzNCLENBQUMsa0JBQUQsRUFBcUIsaUJBQXJCLENBTDJCLEVBTTNCLENBQUMsa0JBQUQsRUFBcUIsa0JBQXJCLENBTjJCLENBQTdCO0FBU0EsSUFBTUMsMEJBQTBCLEdBQUcsQ0FDakMsQ0FBQyxvQkFBRCxFQUF1QixtQkFBdkIsQ0FEaUMsRUFDWTtBQUM3QyxDQUFDLG9CQUFELEVBQXVCLG1CQUF2QixDQUZpQyxFQUVZO0FBQzdDLENBQUMsb0JBQUQsRUFBdUIsaUJBQXZCLENBSGlDLENBR1U7QUFIVixDQUFuQztBQUtBLElBQU1DLDBCQUEwQixHQUFHLENBQ2pDLENBQUMsb0JBQUQsRUFBdUIsbUJBQXZCLENBRGlDLEVBQ1k7QUFDN0MsQ0FBQyxvQkFBRCxFQUF1QixtQkFBdkIsQ0FGaUMsRUFFWTtBQUM3QyxDQUFDLG9CQUFELEVBQXVCLG1CQUF2QixDQUhpQyxDQUdZO0FBSFosQ0FBbkM7QUFLQSxJQUFNQyx3QkFBd0IsR0FBRyxDQUMvQixDQUFDLG9CQUFELEVBQXVCLG9CQUF2QixDQUQrQixFQUNlO0FBQzlDLENBQUMsb0JBQUQsRUFBdUIsa0JBQXZCLENBRitCLEVBRWE7QUFDNUMsQ0FBQyxtQkFBRCxFQUFzQixrQkFBdEIsQ0FIK0IsQ0FHWTtBQUhaLENBQWpDO0FBS0EsSUFBTUMseUJBQXlCLEdBQUcsQ0FDaEMsQ0FBQyxtQkFBRCxFQUFzQixvQkFBdEIsQ0FEZ0MsRUFDYTtBQUM3QyxDQUFDLG9CQUFELEVBQXVCLGtCQUF2QixDQUZnQyxFQUVZO0FBQzVDLENBQUMsbUJBQUQsRUFBc0Isa0JBQXRCLENBSGdDLENBR1c7QUFIWCxDQUFsQztBQUtBLElBQU1DLHFCQUFxQixHQUFHLENBQzVCLENBQUMsb0JBQUQsRUFBdUIsaUJBQXZCLENBRDRCLEVBQ2U7QUFDM0MsQ0FBQyxtQkFBRCxFQUFzQixpQkFBdEIsQ0FGNEIsRUFFYztBQUMxQyxDQUFDLG9CQUFELEVBQXVCLGtCQUF2QixDQUg0QixDQUdnQjtBQUhoQixDQUE5QjtBQUtBLElBQU1DLHVCQUF1QixHQUFHLENBQzlCLENBQUMsb0JBQUQsRUFBdUIsaUJBQXZCLENBRDhCLEVBQ2E7QUFDM0MsQ0FBQyxrQkFBRCxFQUFxQixtQkFBckIsQ0FGOEIsRUFFYTtBQUMzQyxDQUFDLGtCQUFELEVBQXFCLGlCQUFyQixDQUg4QixDQUdXO0FBSFgsQ0FBaEM7QUFNQSxJQUFNQyx1QkFBdUIsR0FBRyxDQUM5QixDQUFDLGlCQUFELEVBQW9CLGlCQUFwQixDQUQ4QixFQUNVO0FBQ3hDLENBQUMsaUJBQUQsRUFBb0IsbUJBQXBCLENBRjhCLEVBRVk7QUFDMUMsQ0FBQyxpQkFBRCxFQUFvQixpQkFBcEIsQ0FIOEIsQ0FHVTtBQUhWLENBQWhDO0FBTUEsSUFBTUMseUJBQXlCLEdBQUcsQ0FDaEMsQ0FBQyxpQkFBRCxFQUFvQixrQkFBcEIsQ0FEZ0MsRUFDUztBQUN6QyxDQUFDLGlCQUFELEVBQW9CLGtCQUFwQixDQUZnQyxFQUVTO0FBQ3pDLENBQUMsaUJBQUQsRUFBb0IsbUJBQXBCLENBSGdDLENBR1U7QUFIVixDQUFsQyxDLENBTUE7O0FBRUEsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFvQjtBQUFBOztBQUMvQyxNQUFNQyxHQUFHLEdBQUdDLHlEQUFRLEVBQXBCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyw2Q0FBTSxDQUFTLENBQVQsQ0FBeEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLHdEQUFXLENBQzNCLFVBQUNDLEtBQUQ7QUFBQSxXQUF1QkEsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxVQUExQztBQUFBLEdBRDJCLENBQTdCO0FBR0EsTUFBTUMsV0FBVyxHQUFHSix3REFBVyxDQUM3QixVQUFDQyxLQUFEO0FBQUEsV0FBdUJBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkcsVUFBMUM7QUFBQSxHQUQ2QixDQUEvQjtBQUdBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFxQjtBQUN4Q0EsVUFBTSxHQUFHVixTQUFTLENBQUNXLElBQVYsQ0FBZWIsU0FBUyxDQUFDYyxPQUF6QixDQUFILEdBQXVDWixTQUFTLENBQUNhLEdBQVYsRUFBN0M7QUFDQU4sWUFBUSxDQUFDTywyRUFBQSxvS0FBaUNkLFNBQWpDLEVBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBSUEsTUFBTWUsY0FBYyxHQUFHaEIsNkNBQU0sQ0FBVSxLQUFWLENBQTdCO0FBQ0EsTUFBTWlCLElBQUksR0FBR2pCLDZDQUFNLENBQVMsRUFBVCxDQUFuQjtBQUNBLE1BQU1rQixTQUFTLEdBQUdsQiw2Q0FBTSxDQUFVLEtBQVYsQ0FBeEI7QUFDQSxNQUFNbUIsV0FBVyxHQUFHbkIsNkNBQU0sQ0FDeEJsRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FEd0IsQ0FBMUI7QUFHQSxNQUFNcUUsT0FBTyxHQUFHcEIsNkNBQU0sQ0FDcEJsRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBRG9CLENBQXRCO0FBR0EsTUFBTXNFLEtBQUssR0FBR3JCLDZDQUFNLENBQUNsRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBRCxDQUFwQjtBQUNBLE1BQU11RSxNQUFNLEdBQUd0Qiw2Q0FBTSxDQUNuQmxELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQURtQixDQUFyQjs7QUFHQSxNQUFNd0UsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFxQjtBQUNyQztBQUNBLFFBQU1DLFFBQVEsR0FBR3hCLFNBQVMsQ0FBQ3lCLE1BQTNCOztBQUNBLFFBQUlGLE1BQUosRUFBWTtBQUNWLFVBQUlDLFFBQVEsS0FBSyxDQUFqQixFQUFvQjtBQUNsQixZQUFNRSxXQUFXLEdBQUcxQixTQUFTLENBQUMyQixNQUFWLENBQWlCLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxLQUFLLENBQVY7QUFBQSxTQUFsQixDQUFwQjs7QUFDQSxZQUFJRixXQUFXLENBQUNELE1BQVosSUFBc0IsQ0FBMUIsRUFBNkI7QUFDM0J4Qyw0QkFBa0IsQ0FBQzRDLE9BQW5CLENBQTJCLFVBQUNDLEVBQUQsRUFBS0MsR0FBTDtBQUFBLG1CQUN6QjFCLFdBQVcsQ0FBQ00sSUFBWixDQUFpQjFCLGtCQUFrQixDQUFDOEMsR0FBRCxDQUFuQyxDQUR5QjtBQUFBLFdBQTNCO0FBR0FmLGNBQUksQ0FBQ0osT0FBTCxHQUFlLE1BQWY7QUFDRCxTQUxELE1BS087QUFDTDFCLDhCQUFvQixDQUFDMkMsT0FBckIsQ0FBNkIsVUFBQ0MsRUFBRCxFQUFLQyxHQUFMO0FBQUEsbUJBQzNCMUIsV0FBVyxDQUFDTSxJQUFaLENBQWlCekIsb0JBQW9CLENBQUM2QyxHQUFELENBQXJDLENBRDJCO0FBQUEsV0FBN0I7QUFHQWYsY0FBSSxDQUFDSixPQUFMLEdBQWUsTUFBZjtBQUNEO0FBQ0YsT0FiRCxNQWFPLElBQUlZLFFBQVEsS0FBSyxDQUFqQixFQUFvQjtBQUN6QixZQUFNRSxZQUFXLEdBQUcxQixTQUFTLENBQUNnQyxLQUFWLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCTCxNQUF0QixDQUE2QixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsS0FBSyxDQUFWO0FBQUEsU0FBOUIsQ0FBcEI7O0FBRUEsWUFBSUYsWUFBVyxDQUFDRCxNQUFaLElBQXNCLENBQTFCLEVBQTZCO0FBQzNCLGNBQUlULElBQUksQ0FBQ0osT0FBTCxLQUFpQixNQUFyQixFQUNFekIsMEJBQTBCLENBQUMwQyxPQUEzQixDQUFtQyxVQUFDQyxFQUFELEVBQUtDLEdBQUw7QUFBQSxtQkFDakMxQixXQUFXLENBQUNNLElBQVosQ0FBaUJ4QiwwQkFBMEIsQ0FBQzRDLEdBQUQsQ0FBM0MsQ0FEaUM7QUFBQSxXQUFuQyxFQURGLEtBSUs7QUFDSDNDLHNDQUEwQixDQUFDeUMsT0FBM0IsQ0FBbUMsVUFBQ0MsRUFBRCxFQUFLQyxHQUFMO0FBQUEscUJBQ2pDMUIsV0FBVyxDQUFDTSxJQUFaLENBQWlCdkIsMEJBQTBCLENBQUMyQyxHQUFELENBQTNDLENBRGlDO0FBQUEsYUFBbkM7QUFHQWYsZ0JBQUksQ0FBQ0osT0FBTCxHQUFlLFFBQWY7QUFDQUcsMEJBQWMsQ0FBQ0gsT0FBZixHQUF5QixJQUF6QjtBQUNEO0FBQ0YsU0FaRCxNQVlPO0FBQ0wsY0FBSUksSUFBSSxDQUFDSixPQUFMLEtBQWlCLE1BQXJCLEVBQTZCO0FBQzNCckIsaUNBQXFCLENBQUNzQyxPQUF0QixDQUE4QixVQUFDQyxFQUFELEVBQUtDLEdBQUw7QUFBQSxxQkFDNUIxQixXQUFXLENBQUNNLElBQVosQ0FBaUJwQixxQkFBcUIsQ0FBQ3dDLEdBQUQsQ0FBdEMsQ0FENEI7QUFBQSxhQUE5QjtBQUdBZixnQkFBSSxDQUFDSixPQUFMLEdBQWUsTUFBZjtBQUNBRywwQkFBYyxDQUFDSCxPQUFmLEdBQXlCLElBQXpCO0FBQ0QsV0FORCxNQU9FbEIseUJBQXlCLENBQUNtQyxPQUExQixDQUFrQyxVQUFDQyxFQUFELEVBQUtDLEdBQUw7QUFBQSxtQkFDaEMxQixXQUFXLENBQUNNLElBQVosQ0FBaUJqQix5QkFBeUIsQ0FBQ3FDLEdBQUQsQ0FBMUMsQ0FEZ0M7QUFBQSxXQUFsQztBQUdIO0FBQ0YsT0EzQk0sTUEyQkEsSUFBSVAsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ3pCLFlBQU1FLGFBQVcsR0FBRzFCLFNBQVMsQ0FBQ2dDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0JMLE1BQXRCLENBQTZCLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxLQUFLLENBQVY7QUFBQSxTQUE5QixDQUFwQjs7QUFDQSxZQUFJRixhQUFXLENBQUNELE1BQVosSUFBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsY0FBSVQsSUFBSSxDQUFDSixPQUFMLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCdkIsb0NBQXdCLENBQUN3QyxPQUF6QixDQUFpQyxVQUFDQyxFQUFELEVBQUtDLEdBQUw7QUFBQSxxQkFDL0IxQixXQUFXLENBQUNNLElBQVosQ0FBaUJ0Qix3QkFBd0IsQ0FBQzBDLEdBQUQsQ0FBekMsQ0FEK0I7QUFBQSxhQUFqQztBQUdBZixnQkFBSSxDQUFDSixPQUFMLEdBQWUsT0FBZjtBQUNELFdBTEQsTUFLTztBQUNMcEIsbUNBQXVCLENBQUNxQyxPQUF4QixDQUFnQyxVQUFDQyxFQUFELEVBQUtDLEdBQUw7QUFBQSxxQkFDOUIxQixXQUFXLENBQUNNLElBQVosQ0FBaUJuQix1QkFBdUIsQ0FBQ3VDLEdBQUQsQ0FBeEMsQ0FEOEI7QUFBQSxhQUFoQztBQUdBZixnQkFBSSxDQUFDSixPQUFMLEdBQWUsTUFBZjtBQUNEO0FBQ0YsU0FaRCxNQVlPO0FBQ0wsY0FBSUksSUFBSSxDQUFDSixPQUFMLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCdEIscUNBQXlCLENBQUN1QyxPQUExQixDQUFrQyxVQUFDQyxFQUFELEVBQUtDLEdBQUw7QUFBQSxxQkFDaEMxQixXQUFXLENBQUNNLElBQVosQ0FBaUJyQix5QkFBeUIsQ0FBQ3lDLEdBQUQsQ0FBMUMsQ0FEZ0M7QUFBQSxhQUFsQztBQUdBZixnQkFBSSxDQUFDSixPQUFMLEdBQWUsUUFBZjtBQUNELFdBTEQsTUFLTztBQUNMbkIsbUNBQXVCLENBQUNvQyxPQUF4QixDQUFnQyxVQUFDQyxFQUFELEVBQUtDLEdBQUw7QUFBQSxxQkFDOUIxQixXQUFXLENBQUNNLElBQVosQ0FBaUJsQix1QkFBdUIsQ0FBQ3NDLEdBQUQsQ0FBeEMsQ0FEOEI7QUFBQSxhQUFoQztBQUdBZixnQkFBSSxDQUFDSixPQUFMLEdBQWUsTUFBZjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBckVELE1BcUVPLElBQUlZLFFBQVEsS0FBSyxDQUFiLElBQWtCQSxRQUFRLEtBQUssQ0FBL0IsSUFBb0NBLFFBQVEsS0FBSyxDQUFyRCxFQUF3RDtBQUM3RCxVQUFJUixJQUFJLENBQUNKLE9BQUwsS0FBaUIsTUFBakIsSUFBMkJJLElBQUksQ0FBQ0osT0FBTCxLQUFpQixNQUFoRCxFQUNFSSxJQUFJLENBQUNKLE9BQUwsR0FBZSxNQUFmLENBREYsS0FFSyxJQUFJSSxJQUFJLENBQUNKLE9BQUwsS0FBaUIsT0FBakIsSUFBNEJJLElBQUksQ0FBQ0osT0FBTCxLQUFpQixRQUFqRCxFQUNISSxJQUFJLENBQUNKLE9BQUwsR0FBZSxRQUFmLENBREcsS0FFQSxJQUFJSSxJQUFJLENBQUNKLE9BQUwsS0FBaUIsTUFBakIsSUFBMkJJLElBQUksQ0FBQ0osT0FBTCxLQUFpQixNQUFoRCxFQUF3RDtBQUMzREcsc0JBQWMsQ0FBQ0gsT0FBZixHQUF5QixLQUF6QjtBQUNBSSxZQUFJLENBQUNKLE9BQUwsR0FBZSxNQUFmO0FBQ0QsT0FISSxNQUdFO0FBQ0xHLHNCQUFjLENBQUNILE9BQWYsR0FBeUIsS0FBekI7QUFDQUksWUFBSSxDQUFDSixPQUFMLEdBQWUsTUFBZjtBQUNEO0FBQ0RQLGlCQUFXLENBQUM0QixNQUFaLENBQW1CVCxRQUFRLEdBQUcsQ0FBOUI7QUFDRDtBQUNGLEdBdEZEOztBQXVGQSxNQUFNVSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQUk7QUFDRixVQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFDQSxVQUFJLENBQUNwQixjQUFjLENBQUNILE9BQXBCLEVBQTZCO0FBQzNCLFlBQU1jLFdBQVcsR0FBRzFCLFNBQVMsQ0FBQ2dDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUJMLE1BQW5CLENBQTBCLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxLQUFLLENBQVY7QUFBQSxTQUEzQixDQUFwQjs7QUFDQSxnQkFBUVosSUFBSSxDQUFDSixPQUFiO0FBQ0UsZUFBSyxNQUFMO0FBQ0UsZ0JBQUljLFdBQVcsQ0FBQ0QsTUFBWixJQUFzQixDQUExQixFQUE2QjtBQUMzQlUscUJBQU8sR0FBRyxDQUFWO0FBQ0QsYUFGRCxNQUVPO0FBQ0xBLHFCQUFPLEdBQUcsQ0FBVjtBQUNEOztBQUNEOztBQUNGLGVBQUssTUFBTDtBQUNFLGdCQUFJVCxXQUFXLENBQUNELE1BQVosSUFBc0IsQ0FBMUIsRUFBNkI7QUFDM0JVLHFCQUFPLEdBQUcsRUFBVjtBQUNELGFBRkQsTUFFTztBQUNMQSxxQkFBTyxHQUFHLEVBQVY7QUFDRDs7QUFDRDs7QUFDRjtBQUNFO0FBaEJKO0FBa0JELE9BcEJELE1Bb0JPO0FBQ0wsWUFBTVQsYUFBVyxHQUFHMUIsU0FBUyxDQUFDZ0MsS0FBVixDQUFnQixDQUFoQixFQUFtQkwsTUFBbkIsQ0FBMEIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLEtBQUssQ0FBVjtBQUFBLFNBQTNCLENBQXBCOztBQUNBLGdCQUFRWixJQUFJLENBQUNKLE9BQWI7QUFDRSxlQUFLLE9BQUw7QUFDRSxnQkFBSWMsYUFBVyxDQUFDRCxNQUFaLElBQXNCLENBQTFCLEVBQTZCO0FBQzNCVSxxQkFBTyxHQUFHLENBQVY7QUFDRCxhQUZELE1BRU87QUFDTEEscUJBQU8sR0FBRyxDQUFWO0FBQ0Q7O0FBQ0Q7O0FBQ0YsZUFBSyxRQUFMO0FBQ0UsZ0JBQUlULGFBQVcsQ0FBQ0QsTUFBWixJQUFzQixDQUExQixFQUE2QjtBQUMzQlUscUJBQU8sR0FBRyxDQUFWO0FBQ0QsYUFGRCxNQUVPO0FBQ0xBLHFCQUFPLEdBQUcsQ0FBVjtBQUNEOztBQUNEOztBQUNGLGVBQUssTUFBTDtBQUNFLGdCQUFJVCxhQUFXLENBQUNELE1BQVosSUFBc0IsQ0FBMUIsRUFBNkI7QUFDM0JVLHFCQUFPLEdBQUcsRUFBVjtBQUNELGFBRkQsTUFFTztBQUNMQSxxQkFBTyxHQUFHLEVBQVY7QUFDRDs7QUFDRDs7QUFDRixlQUFLLE1BQUw7QUFDRSxnQkFBSVQsYUFBVyxDQUFDRCxNQUFaLElBQXNCLENBQTFCLEVBQTZCO0FBQzNCVSxxQkFBTyxHQUFHLEVBQVY7QUFDRCxhQUZELE1BRU87QUFDTEEscUJBQU8sR0FBRyxFQUFWO0FBQ0Q7O0FBQ0Q7O0FBQ0Y7QUFDRTtBQTlCSjtBQWdDRDs7QUFDRCxVQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELFVBQUksQ0FBQ0UsTUFBTCxDQUFZLE1BQVosRUFBb0JDLHFEQUFXLENBQUMsS0FBRCxDQUEvQjtBQUNBSCxVQUFJLENBQUNFLE1BQUwsQ0FBWSxTQUFaLEVBQXVCSCxPQUFPLENBQUNLLFFBQVIsRUFBdkI7QUFDQUosVUFBSSxDQUFDRSxNQUFMLENBQVksVUFBWixFQUF3QixHQUF4QjtBQUNBRixVQUFJLENBQUNFLE1BQUwsQ0FBWSxPQUFaLEVBQXFCRyxJQUFJLENBQUNDLFNBQUwsQ0FBZTFDLFNBQWYsQ0FBckI7QUFDQTJDLHVEQUFBLENBQVcsdUJBQVgsRUFBb0NQLElBQXBDO0FBRUEvQixpQkFBVyxDQUFDNEIsTUFBWixDQUFtQixDQUFuQjtBQUNBMUIsY0FBUSxDQUFDTywyRUFBQSxDQUE2QixFQUE3QixDQUFELENBQVI7QUFFQSxVQUFNOEIsTUFBTSxHQUFHeEIsS0FBSyxDQUFDUixPQUFOLENBQWNpQyxTQUE3QixDQW5FRSxDQW1FcUQ7O0FBQ3ZELFVBQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFFRyxTQUFSLEVBQWYsQ0FwRUUsQ0FvRWtDOztBQUNwQ0QsWUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxJQUFWO0FBRUEsVUFBSWIsT0FBTyxJQUFJLENBQVgsSUFBZ0JBLE9BQU8sSUFBSSxDQUEvQixFQUNFdEYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXVDbUcsS0FBdkMsR0FERixLQUVLLElBQUlkLE9BQU8sSUFBSSxDQUFYLElBQWdCQSxPQUFPLElBQUksQ0FBL0IsRUFDSHRGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUF1Q21HLEtBQXZDLEdBREcsS0FFQSxJQUFJZCxPQUFPLElBQUksRUFBWCxJQUFpQkEsT0FBTyxJQUFJLEVBQWhDLEVBQ0h0RixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBcUNtRyxLQUFyQyxHQURHLEtBRUFwRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBdUNtRyxLQUF2QztBQUNOLEtBOUVELENBOEVFLE9BQU9DLEtBQVAsRUFBbUI7QUFDbkJDLFdBQUssQ0FBQ0QsS0FBSyxDQUFDRSxJQUFQLENBQUw7QUFDRCxLQWpGcUIsQ0FrRnRCOztBQUNELEdBbkZEOztBQXFGQWhGLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQ0c2QyxTQUFTLENBQUNMLE9BQVYsSUFDQ1osU0FBUyxDQUFDeUIsTUFBVixLQUFxQixDQUR0QixJQUVDLENBQUNWLGNBQWMsQ0FBQ0gsT0FGbEIsSUFHQ1osU0FBUyxDQUFDeUIsTUFBVixLQUFxQixFQUFyQixJQUEyQlYsY0FBYyxDQUFDSCxPQUo3QyxFQUtFO0FBQ0FzQixlQUFTO0FBQ1YsS0FQRCxNQU9PO0FBQ0xaLGVBQVMsQ0FBQ0wsU0FBUyxDQUFDTCxPQUFYLENBQVQ7O0FBRUEsVUFBSUcsY0FBYyxDQUFDSCxPQUFuQixFQUE0QjtBQUMxQk8sZUFBTyxDQUFDUCxPQUFSLENBQWdCeUMsU0FBaEIsYUFBK0JyRCxTQUFTLENBQUN5QixNQUFWLEdBQW1CLENBQWxEO0FBQ0FQLG1CQUFXLENBQUNOLE9BQVosQ0FBb0I3RCxLQUFwQixDQUEwQnVHLEtBQTFCLGFBQXFDLENBQUN0RCxTQUFTLENBQUN5QixNQUFWLEdBQW1CLENBQXBCLElBQXlCLElBQTlEO0FBQ0QsT0FIRCxNQUdPO0FBQ0xOLGVBQU8sQ0FBQ1AsT0FBUixDQUFnQnlDLFNBQWhCLGFBQStCckQsU0FBUyxDQUFDeUIsTUFBVixHQUFtQixDQUFsRDtBQUNBUCxtQkFBVyxDQUFDTixPQUFaLENBQW9CN0QsS0FBcEIsQ0FBMEJ1RyxLQUExQixhQUFxQyxDQUFDdEQsU0FBUyxDQUFDeUIsTUFBVixHQUFtQixDQUFwQixJQUF5QixLQUE5RDtBQUNEO0FBQ0Y7QUFDRixHQW5CUSxFQW1CTixDQUFDekIsU0FBRCxDQW5CTSxDQUFUO0FBcUJBNUIsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RtRixjQUFVLENBQUMsWUFBTTtBQUNmQyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJELE1BQU0sQ0FBQ0UsV0FBMUI7QUFDRCxLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0EsUUFBTUMsaUJBQWlCLEdBQUc5RyxRQUFRLENBQUNDLGNBQVQsQ0FDeEIsbUJBRHdCLENBQTFCO0FBR0E2RyxxQkFBaUIsQ0FBQzVHLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxNQUFsQztBQUNBbUUsV0FBTyxDQUFDUCxPQUFSLENBQWdCeUMsU0FBaEI7QUFDQW5DLGVBQVcsQ0FBQ04sT0FBWixDQUFvQjdELEtBQXBCLENBQTBCdUcsS0FBMUI7QUFDRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsTUFBTU0sWUFBWSxHQUFHQyxrREFBVyxDQUFDLFVBQUM5QixHQUFELEVBQWlCO0FBQUE7O0FBQ2hELFFBQU0rQixZQUFZLDRCQUFHakgsUUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixDQUFILDBEQUFHLHNCQUNqQmlILFVBRGlCLENBQ05qRSxTQUFTLENBQUNjLE9BREosQ0FBckI7QUFFQSxRQUFNb0QsTUFBTSw2QkFBR25ILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBSCwyREFBRyx1QkFBOENpSCxVQUE5QyxDQUNiaEMsR0FEYSxDQUFmO0FBR0ErQixnQkFBWSxDQUFDL0csS0FBYixDQUFtQmtILEtBQW5CLEdBQTJCLFNBQTNCO0FBQ0FILGdCQUFZLENBQUMvRyxLQUFiLENBQW1CbUgsVUFBbkIsR0FBZ0MsT0FBaEM7QUFDQUYsVUFBTSxDQUFDakgsS0FBUCxDQUFha0gsS0FBYixHQUFxQixPQUFyQjtBQUNBRCxVQUFNLENBQUNqSCxLQUFQLENBQWFtSCxVQUFiLEdBQTBCLFNBQTFCO0FBQ0FwRSxhQUFTLENBQUNjLE9BQVYsR0FBb0JtQixHQUFwQjtBQUNELEdBWCtCLEVBVzdCLEVBWDZCLENBQWhDO0FBYUEsTUFBTW9DLFdBQVcsR0FBR04sa0RBQVcsQ0FBQyxVQUFDbkQsTUFBRCxFQUFxQjtBQUNuRFcsVUFBTSxDQUFDVCxPQUFQLENBQWU3RCxLQUFmLENBQXFCcUgsU0FBckIsR0FBaUMsWUFBakM7QUFDQWhELFNBQUssQ0FBQ1IsT0FBTixDQUFjN0QsS0FBZCxDQUFvQnFILFNBQXBCLEdBQWdDLFlBQWhDO0FBQ0FiLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZsQyxZQUFNLENBQUNULE9BQVAsQ0FBZTdELEtBQWYsQ0FBcUJxSCxTQUFyQixHQUFpQyxhQUFqQztBQUNBaEQsV0FBSyxDQUFDUixPQUFOLENBQWM3RCxLQUFkLENBQW9CcUgsU0FBcEIsR0FBZ0MsYUFBaEM7QUFDRCxLQUhTLEVBR1AsR0FITyxDQUFWO0FBSUEzRCxnQkFBWSxDQUFDQyxNQUFELENBQVo7QUFDQU8sYUFBUyxDQUFDTCxPQUFWLEdBQW9CRixNQUFwQjtBQUNELEdBVDhCLEVBUzVCLEVBVDRCLENBQS9CO0FBV0Esc0JBQ0UsOERBQUMsR0FBRDtBQUFLLE1BQUUsRUFBQyxtQkFBUjtBQUFBLDRCQUNFLDhEQUFDLFFBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLGFBQU8sRUFBRSxtQkFBTTtBQUNia0Qsb0JBQVksQ0FBQyxDQUFELENBQVo7QUFDQXZGLHNCQUFjLENBQUNnRyxPQUFmLENBQXVCLGFBQXZCLEVBQXNDLEdBQXRDO0FBQ0QsT0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUUsOERBQUMsU0FBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2JULG9CQUFZLENBQUMsQ0FBRCxDQUFaO0FBQ0F2RixzQkFBYyxDQUFDZ0csT0FBZixDQUF1QixhQUF2QixFQUFzQyxHQUF0QztBQUNELE9BTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixlQW1CRTtBQUFBLGlCQUNHckUsU0FBUyxDQUFDeUIsTUFBVixLQUFxQixDQUFyQixHQUNDLEVBREQsZ0JBR0MsOERBQUMsT0FBRDtBQUFTLGVBQU8sRUFBRTtBQUFBLGlCQUFNN0IsR0FBRyxDQUFDMEUsUUFBSixDQUFhO0FBQUEsbUJBQU1ILFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUEsV0FBYixFQUF1QyxHQUF2QyxDQUFOO0FBQUEsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQVFFLDhEQUFDLE9BQUQ7QUFBUyxlQUFPLEVBQUU7QUFBQSxpQkFBTXZFLEdBQUcsQ0FBQzBFLFFBQUosQ0FBYTtBQUFBLG1CQUFNSCxXQUFXLENBQUMsSUFBRCxDQUFqQjtBQUFBLFdBQWIsRUFBc0MsR0FBdEMsQ0FBTjtBQUFBLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBblNEOztHQUFNeEUsb0I7VUFHY00sb0QsRUFHRUEsb0QsRUFHSE8sb0Q7OztNQVRiYixvQjtBQXFTTiwrREFBZUEsb0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZaQTtBQUVBLElBQU00RSxlQUFlLEdBQUc5SCwwREFBSCxtQkFBckI7S0FBTThILGU7QUFXTixJQUFNQyxHQUFHLEdBQUcvSCwwREFBSCxvQkFBVDtNQUFNK0gsRztBQWFOLElBQU03RixJQUFJLEdBQUdsQywyREFBSCxvQkFBVjtNQUFNa0MsSTs7QUFXTixJQUFNOEYsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBb0I7QUFDdEMsc0JBQ0UsOERBQUMsZUFBRDtBQUFpQixNQUFFLEVBQUMsbUJBQXBCO0FBQUEsNEJBQ0UsOERBQUMsR0FBRDtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLElBQUQ7QUFBTSxRQUFFLEVBQUMsaUJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBUEQ7O01BQU1BLFc7QUFRTiwrREFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTs7QUFHQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFvQjtBQUNqQyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxlQUFWO0FBQUEsNkJBQ0U7QUFBRyxVQUFFLEVBQUM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLGVBQVY7QUFBQSw2QkFDRTtBQUFHLFVBQUUsRUFBQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFPRSw4REFBQyxrREFBRDtBQUFNLFVBQUksYUFBVjtBQUFBLDZCQUNFO0FBQUcsVUFBRSxFQUFDO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVVFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxlQUFWO0FBQUEsNkJBQ0U7QUFBRyxVQUFFLEVBQUM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBakJEOztLQUFNQSxNO0FBbUJOLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBU0EsSUFBTUMsU0FBUyxHQUFHbEksMERBQUgsb0JBTUFtSSx3REFOQSxDQUFmO0tBQU1ELFM7QUFRTixJQUFNL0csT0FBTyxHQUFHbkIsMERBQUgsb0JBQWI7TUFBTW1CLE87QUFzQk4sSUFBTWlILFNBQVMsR0FBR3BJLDBEQUFNLENBQUNxQyxvREFBRCxDQUFULG9CQUFmO01BQU0rRixTO0FBbUJOLElBQU1DLEtBQUssR0FBR3JJLDBEQUFNLENBQUNzSSwwREFBRCxDQUFULG9CQUFYO01BQU1ELEs7QUFZTixJQUFNRSxTQUFTLEdBQUdDLHNEQUFILG9CQUFmO0FBV0EsSUFBTUMsSUFBSSxHQUFHekksMERBQU0sQ0FBQzBJLDZEQUFELENBQVQscUJBQ05ILFNBRE0sQ0FBVjtNQUFNRSxJO0FBSU4sSUFBTUUsS0FBSyxHQUFHM0ksMERBQU0sQ0FBQzRJLDJFQUFELENBQVQscUJBQ1BMLFNBRE8sQ0FBWDtNQUFNSSxLO0FBSU4sSUFBTXpILGFBQWEsR0FBR2xCLDBEQUFILG9CQUFuQjtNQUFNa0IsYTtBQU1OLElBQU0ySCxHQUFHLEdBQUc3SSwwREFBSCxvQkFBVDtNQUFNNkksRztBQVNOLElBQU05SCxVQUFVLEdBQUdmLDBEQUFILHNCQU1BLFVBQUE4SSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDdEIsS0FBVjtBQUFBLENBTkwsRUFPRCxVQUFBc0IsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBVjtBQUFBLENBUEosQ0FBaEI7TUFBTWhJLFU7QUFVTixJQUFNaUksVUFBVSxHQUFHaEosMERBQUgscUJBQWhCO09BQU1nSixVO0FBTU4sSUFBTUMsT0FBTyxHQUFHakosMkRBQUgscUJBQWI7T0FBTWlKLE87QUFTTixJQUFNQyxTQUFTLEdBQUdsSiwwREFBSCxxQkFBZjtPQUFNa0osUztBQU9OLElBQU1DLFlBQVksR0FBR25KLDBEQUFILHFCQUFsQjtPQUFNbUosWTtBQVVOLElBQU1DLFFBQVEsR0FBR3BKLDJEQUFILHFCQUFkO09BQU1vSixRO0FBSU4sSUFBTUMsU0FBUyxHQUFHckosMkRBQUgscUJBQWY7T0FBTXFKLFM7O0FBSU4sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsWUFBd0MsUUFBeENBLFlBQXdDO0FBQzVELE1BQU16RixRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsTUFBTXlGLFlBQVksR0FBR2hHLHdEQUFXLENBQzlCLFVBQUNDLEtBQUQ7QUFBQSxXQUF1QkEsS0FBSyxDQUFDQyxZQUFOLENBQW1CK0YsV0FBMUM7QUFBQSxHQUQ4QixDQUFoQzs7QUFHQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCdEosWUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXVDc0osYUFBdkMsQ0FBc0RySixLQUF0RCxDQUE0RHNKLE1BQTVELEdBQXFFLEtBQXJFO0FBQ0E5RixZQUFRLENBQUNPLDRFQUFBLENBQThCLEtBQTlCLENBQUQsQ0FBUjtBQUNBd0YsMERBQVksQ0FBQyxNQUFELENBQVosQ0FId0IsQ0FJeEI7QUFDRCxHQUxEOztBQU1BLHNCQUNFLDhEQUFDLFNBQUQ7QUFBVyxXQUFPLEVBQUVMLFlBQXBCO0FBQWtDLGdCQUFZLEVBQUVELFlBQWhEO0FBQUEsMkJBQ0UsOERBQUMsT0FBRDtBQUNFLGFBQU8sRUFBRUMsWUFEWDtBQUVFLGtCQUFZLEVBQUVELFlBRmhCO0FBR0UsUUFBRSxFQUFDLFlBSEw7QUFBQSw4QkFLRSw4REFBQyxhQUFEO0FBQUEsZ0NBQ0UsOERBQUMsVUFBRDtBQUFZLGVBQUssRUFBQyxvQkFBbEI7QUFBdUMsZ0JBQU0sRUFBQyxNQUE5QztBQUFBLGtDQUNFLDhEQUFDLFVBQUQ7QUFBQSxtQ0FDRSw4REFBQyxLQUFEO0FBQ0UscUJBQU8sRUFBQyxVQURWO0FBRUUsa0JBQUksRUFBQyxPQUZQO0FBR0UsbUJBQUssRUFBQyxTQUhSO0FBSUUsNEJBQVcsS0FKYjtBQUFBLHNDQU1FLDhEQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBWUUsOERBQUMsR0FBRDtBQUFLLGVBQUcsWUFBS3hILEVBQUw7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLGVBYUUsOERBQUMsT0FBRDtBQUFBLDJEQUNNLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWtCRSw4REFBQyxVQUFEO0FBQVksZUFBSyxFQUFDLDBCQUFsQjtBQUE2QyxnQkFBTSxFQUFDLE9BQXBEO0FBQUEsa0NBQ0UsOERBQUMsVUFBRDtBQUFBLG1DQUNFLDhEQUFDLEtBQUQ7QUFDRSxxQkFBTyxFQUFDLFVBRFY7QUFFRSxrQkFBSSxFQUFDLE9BRlA7QUFHRSxtQkFBSyxFQUFDLFdBSFI7QUFJRSw0QkFBVyxLQUpiO0FBQUEsc0NBTUUsOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFZRSw4REFBQyxZQUFEO0FBQUEsb0NBQ0UsOERBQUMsU0FBRDtBQUFXLGlCQUFHLFlBQUtBLEVBQUw7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsU0FBRDtBQUFXLGlCQUFHLFlBQUtBLEVBQUw7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixlQWlCRSw4REFBQyxPQUFEO0FBQUEsb0NBQ0UsOERBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERiwwQkFDMkIsOERBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRixlQXFCRSw4REFBQyxZQUFEO0FBQUEsb0NBQ0UsOERBQUMsU0FBRDtBQUFXLGlCQUFHLFlBQUtBLEVBQUw7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsU0FBRDtBQUFXLGlCQUFHLFlBQUtBLEVBQUw7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkYsZUF5QkUsOERBQUMsT0FBRDtBQUFBLDJEQUNNLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpCRixlQTRCRSw4REFBQyxZQUFEO0FBQUEsbUNBQ0UsOERBQUMsU0FBRDtBQUFXLGlCQUFHLFlBQUtBLEVBQUw7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkYsZUErQkUsOERBQUMsT0FBRDtBQUFBLHFEQUNLLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBMkRFLDhEQUFDLFNBQUQ7QUFBVyxlQUFPLEVBQUUySCxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpRUQsQ0E1RUQ7O0dBQU1KLFU7VUFDYXZGLG9ELEVBQ0lQLG9EOzs7T0FGakI4RixVO0FBOEVOLCtEQUFlQSxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xQQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBb0I7QUFDbkM7QUFDQSxNQUFNM0csR0FBRyxHQUFHQyx5REFBUSxFQUFwQjtBQUNBLHNCQUNFLDhEQUFDLHFEQUFEO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JELFNBQUcsQ0FBQzBFLFFBQUosQ0FBYSxZQUFNO0FBQ2pCa0Msd0RBQU0sQ0FBQyxXQUFELENBQU4sQ0FEaUIsQ0FHakI7QUFDRCxPQUpELEVBSUcsR0FKSDtBQUtELEtBUEg7QUFBQSwyQkFTRSw4REFBQywyREFBRDtBQUFBLDhCQUNFLDhEQUFDLHdEQUFEO0FBQUEsK0JBQ0UsOERBQUMsb0RBQUQ7QUFDRSxhQUFHLEVBQUMsMkJBRE47QUFFRSxhQUFHLFlBQUtoSSxFQUFMO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0EzQkQ7O0tBQU0rSCxRO0FBNkJOLCtEQUFlQSxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7O0FBR0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBb0I7QUFDckMsc0JBQ0UsOERBQUMscURBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYixVQUFNQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0MsU0FBckI7O0FBQ0EsVUFBSSxnQkFBZ0JDLElBQWhCLENBQXFCSCxFQUFyQixLQUE0QixDQUFDLGVBQWVHLElBQWYsQ0FBb0JILEVBQXBCLENBQWpDLEVBQTBEO0FBQ3hEdkQsYUFBSyxDQUFDLDRCQUFELENBQUw7QUFDQUssY0FBTSxDQUFDc0QsSUFBUCxDQUNFLDJFQURGO0FBR0E7QUFDRDs7QUFDREMsMkRBQVcsQ0FBQyxNQUFELENBQVg7QUFDRCxLQVhIO0FBQUEsMkJBYUUsOERBQUMsMkRBQUQ7QUFBQSw4QkFDRSw4REFBQyx3REFBRDtBQUFBLCtCQUNFLDhEQUFDLG9EQUFEO0FBQ0UsYUFBRyxFQUFDLDJCQUROO0FBRUUsYUFBRyxZQUFLdkksRUFBTDtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRSw4REFBQyx5REFBRDtBQUFBLGdDQUNFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBN0JEOztLQUFNaUksVTtBQStCTiwrREFBZUEsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQW9CO0FBQ3BDO0FBQ0EsTUFBTXBILEdBQUcsR0FBR0MseURBQVEsRUFBcEI7QUFDQSxzQkFDRSw4REFBQyxxREFBRDtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiRCxTQUFHLENBQUMwRSxRQUFKLENBQWEsWUFBTTtBQUNqQjtBQUNBa0Msd0RBQU0sQ0FBQyxNQUFELENBQU47QUFDRCxPQUhELEVBR0csR0FISDtBQUlELEtBTkg7QUFBQSwyQkFRRSw4REFBQywyREFBRDtBQUFBLDhCQUNFLDhEQUFDLHdEQUFEO0FBQUEsK0JBQ0UsOERBQUMsb0RBQUQ7QUFDRSxhQUFHLEVBQUMsMkJBRE47QUFFRSxhQUFHLFlBQUtoSSxFQUFMO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0EvQkQ7O0tBQU13SSxTO0FBaUNOLCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXBKLE9BQU8sR0FBR25CLCtEQUFILG1CQUFiLEMsQ0FlQTtBQUNBO0FBQ0E7O0tBakJNbUIsTztBQW1CTixJQUFNMEgsR0FBRyxHQUFHN0ksMkRBQUgsb0JBQVQ7TUFBTTZJLEc7O0FBSU4sSUFBTTJCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBb0I7QUFDeEMsTUFBTXJILEdBQUcsR0FBR0MseURBQVEsRUFBcEI7O0FBQ0EsTUFBTXFILE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FDYnRILEdBQUcsQ0FBQzBFLFFBQUosQ0FBYSxZQUFNO0FBQ2pCa0MsMkRBQU0sQ0FBQyxNQUFELENBQU47QUFDRCxLQUZELEVBRUcsR0FGSCxDQURhO0FBQUEsR0FBZjs7QUFLQSxzQkFDRSw4REFBQywrREFBRDtBQUFxQixNQUFFLEVBQUMsZUFBeEI7QUFBQSw0QkFDRSw4REFBQywrQ0FBRDtBQUFXLGVBQVMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxnREFBRDtBQUFZLFFBQUUsRUFBQyxTQUFmO0FBQXlCLGFBQU8sRUFBRVUsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFLDhEQUFDLE9BQUQ7QUFBUyxRQUFFLEVBQUMsYUFBWjtBQUFBLDhCQUNFLDhEQUFDLDBDQUFEO0FBQVEsaUJBQVMsRUFBQyxZQUFsQjtBQUErQixVQUFFLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMseUNBQUQ7QUFBTyxVQUFFLEVBQUMsT0FBVjtBQUFrQixhQUFLLEVBQUMsS0FBeEI7QUFBOEIsY0FBTSxFQUFDLEtBQXJDO0FBQTJDLGdCQUFRLE1BQW5EO0FBQW9ELGFBQUssTUFBekQ7QUFBMEQsbUJBQVc7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGNBQU0sRUFBQyxTQUZUO0FBR0UsVUFBRSxFQUFDLFlBSEw7QUFJRSxhQUFLLEVBQUU7QUFBRWxLLGlCQUFPLEVBQUU7QUFBWDtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQVNFLDhEQUFDLEdBQUQ7QUFBSyxVQUFFLEVBQUMsV0FBUjtBQUFvQixpQkFBUyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQWlCRSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBNUJEOztNQUFNaUssYTtBQThCTiwrREFBZUEsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNRSxRQUFRLEdBQUcxSywrREFBSCxtQkFBZDtLQUFNMEssUTtBQWVOLElBQU1DLGFBQWEsR0FBRzNLLDJEQUFILG9CQUFuQjtNQUFNMkssYTtBQU1DLElBQU1DLEtBQUssR0FBRzVLLDZEQUFILG9CQUFYO01BQU00SyxLO0FBS04sSUFBTUMsTUFBTSxHQUFHN0ssOERBQUgsb0JBQVo7TUFBTTZLLE07QUFNYixJQUFNMUosT0FBTyxHQUFHbkIsMkRBQUgsb0JBQWI7TUFBTW1CLE87QUFnQk4sSUFBTTBILEdBQUcsR0FBRzdJLDJEQUFILG9CQUFUO01BQU02SSxHOztBQUlOLElBQU1pQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCbkosa0RBQVMsQ0FBQyxZQUFNO0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXZCLFlBQVEsQ0FBQzJLLElBQVQsQ0FBY3BCLGFBQWQsQ0FBNkJySixLQUE3QixDQUFtQzBLLFFBQW5DLEdBQThDLE1BQTlDO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxPQUFHLENBQUNFLEdBQUosYUFBYXBKLEVBQWI7O0FBQ0FrSixPQUFHLENBQUNHLE1BQUosR0FBYSxZQUFNO0FBQ2pCLFVBQU1MLElBQUksR0FBRzNLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFiO0FBQ0EwSyxVQUFJLENBQUV6SyxLQUFOLENBQVkrSyxlQUFaLGlCQUFxQ0osR0FBRyxDQUFDRSxHQUF6QztBQUNBSixVQUFJLENBQUV6SyxLQUFOLENBQVlDLE9BQVosR0FBc0IsTUFBdEI7QUFDRCxLQUpELENBWmMsQ0FpQmQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNELEdBMUJRLEVBMEJOLEVBMUJNLENBQVQ7QUE0QkEsTUFBTStLLFVBQVUsR0FBRzlILHlEQUFXLENBQzVCLFVBQUNDLEtBQUQ7QUFBQSxXQUF1QkEsS0FBSyxDQUFDQyxZQUFOLENBQW1CK0YsV0FBMUM7QUFBQSxHQUQ0QixDQUE5QjtBQUdBLE1BQU04QixTQUFTLEdBQUcvSCx5REFBVyxDQUMzQixVQUFDQyxLQUFEO0FBQUEsV0FBdUJBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQjZILFNBQTFDO0FBQUEsR0FEMkIsQ0FBN0I7QUFJQSxzQkFDRSw4REFBQyxRQUFEO0FBQVUsTUFBRSxFQUFDLFVBQWI7QUFBQSw0QkFDRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0QsVUFBVSxnQkFBRyw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBb0IsRUFGakMsZUFHRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFRRSw4REFBQyxhQUFEO0FBQWUsUUFBRSxFQUFDLGVBQWxCO0FBQUEsOEJBQ0UsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBZUUsOERBQUMsT0FBRDtBQUFTLFFBQUUsRUFBQyxhQUFaO0FBQUEsOEJBQ0UsOERBQUMsTUFBRDtBQUFRLGlCQUFTLEVBQUMsWUFBbEI7QUFBK0IsVUFBRSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLEtBQUQ7QUFBTyxVQUFFLEVBQUMsT0FBVjtBQUFrQixhQUFLLEVBQUMsS0FBeEI7QUFBOEIsY0FBTSxFQUFDLEtBQXJDO0FBQTJDLGFBQUssTUFBaEQ7QUFBaUQsbUJBQVc7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGNBQU0sRUFBQywyQkFGVDtBQUdFLFVBQUUsRUFBQyxZQUhMO0FBSUUsY0FBTTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQVNFLDhEQUFDLEdBQUQ7QUFBSyxVQUFFLEVBQUMsV0FBUjtBQUFvQixpQkFBUyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixlQVdFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixFQWFHQyxTQUFTLGdCQUFHLDhEQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUE4QixFQWIxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQXJFRDs7R0FBTVQsUztVQTZCZXRILHFELEVBR0RBLHFEOzs7TUFoQ2RzSCxTO0FBc0VOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tzZWFzb25dLjZlY2E2ZWI0MjUzOWE2ODA1OTQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICcuLi9CdXR0b25CYXNlJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbiwge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtaW5IZWlnaHQ6IDM2LFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnYmFja2dyb3VuZC1jb2xvcicsICdib3gtc2hhZG93JywgJ2JvcmRlciddLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydFxuICAgICAgfSksXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgd2lkdGg6IDU2LFxuICAgICAgaGVpZ2h0OiA1NixcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s2XSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzEyXVxuICAgICAgfSxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dCh0aGVtZS5wYWxldHRlLmdyZXlbMzAwXSksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5LkExMDAsXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdXG4gICAgICAgIH0sXG4gICAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kXG4gICAgICAgIH0sXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c1Zpc2libGUnOiB7XG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s2XVxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWQsXG4gICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1swXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZEJhY2tncm91bmRcbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzcGFuIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgY2hpbGRyZW4uICovXG4gICAgbGFiZWw6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAvLyBhc3N1cmUgdGhlIGNvcnJlY3Qgd2lkdGggZm9yIGlPUyBTYWZhcmlcbiAgICAgIGRpc3BsYXk6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwic2Vjb25kYXJ5XCJgLiAqL1xuICAgIHNlY29uZGFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiZXh0ZW5kZWRcImAuICovXG4gICAgZXh0ZW5kZWQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogNDggLyAyLFxuICAgICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgbWluSGVpZ2h0OiAnYXV0bycsXG4gICAgICBtaW5XaWR0aDogNDgsXG4gICAgICBoZWlnaHQ6IDQ4LFxuICAgICAgJyYkc2l6ZVNtYWxsJzoge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDM0IC8gMixcbiAgICAgICAgbWluV2lkdGg6IDM0LFxuICAgICAgICBoZWlnaHQ6IDM0XG4gICAgICB9LFxuICAgICAgJyYkc2l6ZU1lZGl1bSc6IHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogNDAgLyAyLFxuICAgICAgICBtaW5XaWR0aDogNDAsXG4gICAgICAgIGhlaWdodDogNDBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIEJ1dHRvbkJhc2Ugcm9vdCBlbGVtZW50IGlmIHRoZSBidXR0b24gaXMga2V5Ym9hcmQgZm9jdXNlZC4gKi9cbiAgICBmb2N1c1Zpc2libGU6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImluaGVyaXRcImAuICovXG4gICAgY29sb3JJbmhlcml0OiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJzbWFsbFwiYGAuICovXG4gICAgc2l6ZVNtYWxsOiB7XG4gICAgICB3aWR0aDogNDAsXG4gICAgICBoZWlnaHQ6IDQwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJtZWRpdW1cImBgLiAqL1xuICAgIHNpemVNZWRpdW06IHtcbiAgICAgIHdpZHRoOiA0OCxcbiAgICAgIGhlaWdodDogNDhcbiAgICB9XG4gIH07XG59O1xudmFyIEZhYiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZhYihwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAnZGVmYXVsdCcgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgY29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2J1dHRvbicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9wcm9wcyRkaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZWQsXG4gICAgICBfcHJvcHMkZGlzYWJsZUZvY3VzUmkgPSBwcm9wcy5kaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICBkaXNhYmxlRm9jdXNSaXBwbGUgPSBfcHJvcHMkZGlzYWJsZUZvY3VzUmkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVGb2N1c1JpLFxuICAgICAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lID0gcHJvcHMuZm9jdXNWaXNpYmxlQ2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyAnbGFyZ2UnIDogX3Byb3BzJHNpemUsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdjaXJjdWxhcicgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVkXCIsIFwiZGlzYWJsZUZvY3VzUmlwcGxlXCIsIFwiZm9jdXNWaXNpYmxlQ2xhc3NOYW1lXCIsIFwic2l6ZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25CYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBzaXplICE9PSAnbGFyZ2UnICYmIGNsYXNzZXNbXCJzaXplXCIuY29uY2F0KGNhcGl0YWxpemUoc2l6ZSkpXSwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgdmFyaWFudCA9PT0gJ2V4dGVuZGVkJyAmJiBjbGFzc2VzLmV4dGVuZGVkLCB7XG4gICAgICAncHJpbWFyeSc6IGNsYXNzZXMucHJpbWFyeSxcbiAgICAgICdzZWNvbmRhcnknOiBjbGFzc2VzLnNlY29uZGFyeSxcbiAgICAgICdpbmhlcml0JzogY2xhc3Nlcy5jb2xvckluaGVyaXRcbiAgICB9W2NvbG9yXSksXG4gICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGZvY3VzUmlwcGxlOiAhZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmZvY3VzVmlzaWJsZSwgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmxhYmVsXG4gIH0sIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEZhYi5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdpbmhlcml0JywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlICBrZXlib2FyZCBmb2N1cyByaXBwbGUgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVGb2N1c1JpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBmb2N1c1Zpc2libGVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogSWYgZGVmaW5lZCwgYW4gYGFgIGVsZW1lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSByb290IG5vZGUuXG4gICAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgYnV0dG9uLlxuICAgKiBgc21hbGxgIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGRlbnNlIGJ1dHRvbiBzdHlsaW5nLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbGFyZ2UnLCAnbWVkaXVtJywgJ3NtYWxsJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqICdyb3VuZCcgaXMgZGVwcmVjYXRlZCwgdXNlICdjaXJjdWxhcicgaW5zdGVhZC5cbiAgICovXG4gIHZhcmlhbnQ6IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5vbmVPZihbJ2V4dGVuZGVkJywgJ2NpcmN1bGFyJywgJ3JvdW5kJ10pLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMudmFyaWFudCA9PT0gJ3JvdW5kJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRlcmlhbC1VSTogdmFyaWFudD1cInJvdW5kXCIgd2FzIHJlbmFtZWQgdmFyaWFudD1cImNpcmN1bGFyXCIgZm9yIGNvbnNpc3RlbmN5LicpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGYWInXG59KShGYWIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyek00IDEyYzAtNC40MiAzLjU4LTggOC04IDEuODUgMCAzLjU1LjYzIDQuOSAxLjY5TDUuNjkgMTYuOUM0LjYzIDE1LjU1IDQgMTMuODUgNCAxMnptOCA4Yy0xLjg1IDAtMy41NS0uNjMtNC45LTEuNjlMMTguMzEgNy4xQzE5LjM3IDguNDUgMjAgMTAuMTUgMjAgMTJjMCA0LjQyLTMuNTggOC04IDh6XCJcbn0pLCAnQmxvY2snKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2LjU5IDcuNThMMTAgMTQuMTdsLTMuNTktMy41OEw1IDEybDUgNSA4LTh6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elwiXG59KSwgJ0NoZWNrQ2lyY2xlT3V0bGluZScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEJnID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAwLjNzO1xyXG4gIHotaW5kZXg6IDk5ODtcclxuYDtcclxuY29uc3QgQ2VudGVyRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDUwJTtcclxuICB6LWluZGV4OiAyMTQ3NDgzNjQ5O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMSk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiByZ2IoMTAsIDU5LCAxMTIpO1xyXG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuYDtcclxuY29uc3QgQ29uZmlybUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MSwgMTk2LCAyMjMpO1xyXG4gIGNvbG9yOiByZ2IoMTAsIDU5LCAxMTIpO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAsIDU5LCAxMTIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbmNvbnN0IFBvcHVwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmcgaWQ9XCJwb3B1cFwiPlxyXG4gICAgICA8Q2VudGVyRGl2PlxyXG4gICAgICAgIDxwPu2UvOu2gCDsuKHsoJXsnbQg7JmE66OM65CY7JeI7Iq164uI64ukITwvcD5cclxuICAgICAgICA8cD7rjZQg7KCV7ZmV7ZWcIOynhOuLqOydhCDsnITtlbQg64uk7J2MIOuLqOqzhOuhnCDrhJjslrTqsJHri4jri6Q8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICDrsoTtirzsnYQg64iM65+sIOqwgSDtlYTthLDrpbwg7KCB7Jqp7ZW067O4IO2bhCDslrzqtbTsnbQg64+L67O07J2064qUIO2VhO2EsCDsiJzsnLzroZwg67KI7Zi466W8XHJcbiAgICAgICAgICDsoJXtlbTso7zshLjsmpRcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPENvbmZpcm1CdG5cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKSEuc3R5bGUuZGlzcGxheSA9ICdub25lJylcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDtmZXsnbhcclxuICAgICAgICA8L0NvbmZpcm1CdG4+XHJcbiAgICAgIDwvQ2VudGVyRGl2PlxyXG4gICAgPC9CZz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XHJcbiIsImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBQID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAzLjN2aDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjU2dmg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogJ0RvbmdsZSc7XHJcbiAgQG1lZGlhIChtYXgtaGVpZ2h0OiA1MTNweCkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFAyID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAzLjR2aDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIEBtZWRpYSAobWF4LWhlaWdodDogNTEzcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkID0gc3R5bGVkLmhlYWRlcmBcclxuICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMy45dmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8UD7rgpjripQg7Juc7Yak7J286rmMPyDsv6jthqTsnbzquYw/PC9QPlxyXG4gICAgICA8UDI+7Y287Iqk64SQIOy7rOufrCDsp4Tri6g8L1AyPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTWFpbkJ0biA9IHtcclxuICBNb2RlQnRuOiBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYCxcclxuICBUZXh0V3JhcHBlcjogc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxdmg7XHJcbiAgYCxcclxuICBJbWdXcmFwcGVyOiBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDQuMjJ2aDtcclxuICAgIGhlaWdodDogNC4yMnZoO1xyXG4gICAgbWluLXdpZHRoOiAyNHB4O1xyXG4gICAgbWluLWhlaWdodDogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWRhMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgYCxcclxuICBDYW1JbWc6IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogMnZoO1xyXG4gICAgbWluLXdpZHRoOiAxMnB4O1xyXG4gICAgbWluLWhlaWdodDogMTJweDtcclxuICAgIGhlaWdodDogMnZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBgLFxyXG4gIFA6IHN0eWxlZC5wYFxyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yMnZoO1xyXG4gICAgbWFyZ2luLXRvcDogMC42M3ZoO1xyXG4gICAgY29sb3I6ICM5Mjg4OGM7XHJcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDUxM3B4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG4gIGAsXHJcblxyXG4gIEgxOiBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtc2l6ZTogMS45dmg7XHJcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDUxM3B4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuICBgLFxyXG4gIE1pZGRsZVdyYXBwZXI6IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBgLFxyXG4gIFdyYXBwZXI6IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMnZoIDJ2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjV2aDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNDBweCAjMDAwMDAwMGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjExdmg7XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmZGZjO1xyXG4gICAgfVxyXG4gIGAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQnRuO1xyXG4iLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWxmTW9kZSBmcm9tICcuL1NlbGZNb2RlJztcclxuaW1wb3J0IFVwbG9hZE1vZGUgZnJvbSAnLi9VcGxvYWRNb2RlJztcclxuaW1wb3J0IFZpZGVvTW9kZSBmcm9tICcuL1ZpZGVvTW9kZSc7XHJcblxyXG5jb25zdCBNYWluQnRuV3JhcHBlciA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPFZpZGVvTW9kZSAvPlxyXG4gICAgICA8VXBsb2FkTW9kZSAvPlxyXG4gICAgICA8U2VsZk1vZGUgLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkJ0bldyYXBwZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU1ZHID0gc3R5bGVkLnN2Z2BcclxuICB3aWR0aDogMTYuNXZoO1xyXG4gIGhlaWdodDogMTYuNXZoO1xyXG4gIEBtZWRpYSAobWF4LWhlaWdodDogNTEycHgpIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE1haW5JbWFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMTAgMjEwXCI+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAtcGF0aFwiPlxyXG4gICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICBpZD1cIu2DgOybkF8xMTNcIlxyXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCLtg4Dsm5AgMTEzXCJcclxuICAgICAgICAgICAgY3g9XCIxMDVcIlxyXG4gICAgICAgICAgICBjeT1cIjEwNVwiXHJcbiAgICAgICAgICAgIHI9XCIxMDVcIlxyXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAzMCAxNTI0KVwiXHJcbiAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiIzcwNzA3MFwiXHJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAtcGF0aC0yXCI+XHJcbiAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgIGlkPVwi7YOA7JuQXzExMVwiXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2DgOybkCAxMTFcIlxyXG4gICAgICAgICAgICBjeD1cIjEwNlwiXHJcbiAgICAgICAgICAgIGN5PVwiMTA2XCJcclxuICAgICAgICAgICAgcj1cIjEwNlwiXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MzAuOTkxIC0xMTkyLjAwOSlcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cIiM3MDcwNzBcIlxyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50XCJcclxuICAgICAgICAgIHgxPVwiMC4wNjdcIlxyXG4gICAgICAgICAgeTE9XCIwLjE5N1wiXHJcbiAgICAgICAgICB4Mj1cIjAuOTAzXCJcclxuICAgICAgICAgIHkyPVwiMC44NjRcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiNmYWM3MTJcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjZjY5ZjIzXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnQtM1wiXHJcbiAgICAgICAgICB4MT1cIjAuOTM5XCJcclxuICAgICAgICAgIHkxPVwiMC42NThcIlxyXG4gICAgICAgICAgeDI9XCIwLjA1XCJcclxuICAgICAgICAgIHkyPVwiMC41XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjZmFjNzEyXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2ZlZWYwMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50LTRcIlxyXG4gICAgICAgICAgeDE9XCIwLjE2NVwiXHJcbiAgICAgICAgICB5MT1cIjAuMDkzXCJcclxuICAgICAgICAgIHgyPVwiMC43NzdcIlxyXG4gICAgICAgICAgeTI9XCIxXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjZjY5ZjIzXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2ZiNjMxMlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50LTVcIlxyXG4gICAgICAgICAgeDE9XCIwLjkyM1wiXHJcbiAgICAgICAgICB5MT1cIjAuNVwiXHJcbiAgICAgICAgICB4Mj1cIjBcIlxyXG4gICAgICAgICAgeTI9XCIwLjVcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiM3NDIxYjBcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjM2E0OGJhXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnQtNlwiXHJcbiAgICAgICAgICB4MT1cIjAuODYzXCJcclxuICAgICAgICAgIHkxPVwiMC43ODNcIlxyXG4gICAgICAgICAgeDI9XCIwLjE0XCJcclxuICAgICAgICAgIHkyPVwiMC4xNjhcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMzYTQ4YmFcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjMDA2ZmM0XCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnQtOFwiXHJcbiAgICAgICAgICB4MT1cIjAuODc4XCJcclxuICAgICAgICAgIHkxPVwiMC4xMjFcIlxyXG4gICAgICAgICAgeDI9XCIwLjA0M1wiXHJcbiAgICAgICAgICB5Mj1cIjAuODAyXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjZDIyOThlXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzc0MjFiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50LTEwXCJcclxuICAgICAgICAgIHgxPVwiMC42MjVcIlxyXG4gICAgICAgICAgeTE9XCIwLjY5OFwiXHJcbiAgICAgICAgICB4Mj1cIjAuMTk3XCJcclxuICAgICAgICAgIHkyPVwiMC4wMzRcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMwMDZmYzRcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjMDBjMmFmXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnQtMTFcIlxyXG4gICAgICAgICAgeDE9XCIwLjc4OFwiXHJcbiAgICAgICAgICB5MT1cIjAuMDc2XCJcclxuICAgICAgICAgIHgyPVwiMC4xNTJcIlxyXG4gICAgICAgICAgeTI9XCIwLjg3NVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI2ZmMjYwMFwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNkMjI5OGVcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cImxpbmVhci1ncmFkaWVudC0xMlwiXHJcbiAgICAgICAgICB4MT1cIjAuNTYyXCJcclxuICAgICAgICAgIHkxPVwiMC4xNDFcIlxyXG4gICAgICAgICAgeDI9XCIwLjVcIlxyXG4gICAgICAgICAgeTI9XCIxXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjZmI2MzEyXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2ZmMjYwMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwibGluZWFyLWdyYWRpZW50LTEzXCJcclxuICAgICAgICAgIHgxPVwiMC41XCJcclxuICAgICAgICAgIHkxPVwiMC45NThcIlxyXG4gICAgICAgICAgeDI9XCIwLjVcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMwMGMyYWZcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjMDBiNTAwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJsaW5lYXItZ3JhZGllbnQtMTRcIlxyXG4gICAgICAgICAgeDE9XCIwLjEwN1wiXHJcbiAgICAgICAgICB5MT1cIjAuODE3XCJcclxuICAgICAgICAgIHgyPVwiMC45MjFcIlxyXG4gICAgICAgICAgeTI9XCIwLjE0OVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzdmZDIwMFwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNmZWVmMDBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cImxpbmVhci1ncmFkaWVudC0xNlwiXHJcbiAgICAgICAgICB4MT1cIjAuMjUxXCJcclxuICAgICAgICAgIHkxPVwiMVwiXHJcbiAgICAgICAgICB4Mj1cIjAuODIyXCJcclxuICAgICAgICAgIHkyPVwiMC4xMDhcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMwMGI1MDBcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2ZkMjAwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxnXHJcbiAgICAgICAgaWQ9XCLrp4jsiqTtgaxf6re466O5XzlcIlxyXG4gICAgICAgIGRhdGEtbmFtZT1cIuuniOyKpO2BrCDqt7jro7kgOVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMDMwIC0xNTI0KVwiXHJcbiAgICAgICAgY2xpcC1wYXRoPVwidXJsKCNjbGlwLXBhdGgpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxnXHJcbiAgICAgICAgICBpZD1cImNvbG9yLWltZ1wiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTk4LjAwOSAyNzE1LjAwOSlcIlxyXG4gICAgICAgICAgY2xpcC1wYXRoPVwidXJsKCNjbGlwLXBhdGgtMilcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxnXHJcbiAgICAgICAgICAgIGlkPVwi6re466O5XzE4OTFcIlxyXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCLqt7jro7kgMTg5MVwiXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MzEgLTExOTIpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgIGlkPVwi7YOA7JuQXzExMFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwi7YOA7JuQIDExMFwiXHJcbiAgICAgICAgICAgICAgY3g9XCI5M1wiXHJcbiAgICAgICAgICAgICAgY3k9XCI5M1wiXHJcbiAgICAgICAgICAgICAgcj1cIjkzXCJcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTEuOTkxIDExLjk5MSlcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGcgaWQ9XCLqt7jro7lfMTg5MFwiIGRhdGEtbmFtZT1cIuq3uOujuSAxODkwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIj5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjI4XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyMjhcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMDU5LjM1MiwzMzguNTQ2bC4wMTkuMDE5LS4wMTktLjAxOVpcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NzguNjcyIC0xNTcuODY3KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjI5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyMjlcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk04NjMuNzkyLDIyNS42NDhoMFpcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NjAuMTc0IC0xNDcuMDk2KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjMwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyMzBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMDAxLjk4NSwxNTkuOTg4YTg5LjE5MSw4OS4xOTEsMCwwLDEsNDAuMDIsMjMuMTIzbDEyLjQzOC0xMi40MzloMGwuMDE5LS4wMTktLjEtLjA1NmExMDYuNzYxLDEwNi43NjEsMCwwLDAtNDcuODIyLTI3LjYxMWgwWlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg3My43NjMgLTEzOS4zNjkpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzI1NFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjU0XCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTAwMS45ODUsMTU5Ljk4OGE4OS4xOTEsODkuMTkxLDAsMCwxLDQwLjAyLDIzLjEyM2wxMi40MzgtMTIuNDM5aDBsLjAxOS0uMDE5LS4xLS4wNTZhMTA2Ljc2MSwxMDYuNzYxLDAsMCwwLTQ3LjgyMi0yNy42MTFoMFpcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NzMuNzYzIC0xMzcuMzUpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudClcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzIzMVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjMxXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNOTQ2LjQ1NSwxNDIuNjQ3bDQuNTU2LDE3YTg5Ljc0OCw4OS43NDgsMCwwLDEsNDYuMjIzLDBsNC41NTctMTdhMTA3LjY2OSwxMDcuNjY5LDAsMCwwLTU1LjMzNiwwaDBaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODY4LjEzIC0xMzkuMDMxKVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtMylcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICAgIGlkPVwi7IKs6rCB7ZiVXzg1NlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLsgqzqsIHtmJUgODU2XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTcuNjAyXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMjguODkgMjAuNjE5KSByb3RhdGUoLTc1KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZlZWYwMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjMyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyMzJcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMDQ1Ljc1LDE4NS43YTg5LjE3OCw4OS4xNzgsMCwwLDEsMjMuMTIyLDQwLjAxOWwxNy00LjU1NmgwbDAsMGExMDYuNzYyLDEwNi43NjIsMCwwLDAtMjcuNjA4LTQ3LjgxOWwtLjA1Ny0uMWgwWlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg3Ny41MDggLTE0MS45NTgpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC00KVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjMzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyMzNcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMDU4LjE4OCwxNzMuMjYxLDEwNDUuNzUsMTg1LjdoMGwxMi40NTgtMTIuNDU4aDBsLS4wMTkuMDE5WlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg3Ny41MDggLTE0MS45NTgpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZjY5ZjIzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBpZD1cIu2MqOyKpF8yMzRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwi7Yyo7IqkIDIzNFwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTk5Ny4yMzMsMzUwLjIzYTg5Ljc0OCw4OS43NDgsMCwwLDEtNDYuMjIzLDBsLTQuNTU3LDE3aDBhMTA3LjY1NCwxMDcuNjU0LDAsMCwwLDU1LjMzMiwwaDBaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODY4LjEzIC0xNTguODY3KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtNSlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzIzNVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjM1XCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNOTQxLjk3LDM2NS4wNjhsNC41NTYtMTdhODkuMTgzLDg5LjE4MywwLDAsMS00MC4wMTktMjMuMTIybC0xMi40NCwxMi40NGgwbC0uMDE3LjAxOC4wODkuMDUxYTEwNi43NTcsMTA2Ljc1NywwLDAsMCw0Ny44MzIsMjcuNjE3aDBaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODYyLjc2NCAtMTU2LjcwMylcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTYpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBpZD1cIu2MqOyKpF8yNTJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwi7Yyo7IqkIDI1MlwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTk0MS45NywzNjUuMDY4bDQuNTU2LTE3YTg5LjE4Myw4OS4xODMsMCwwLDEtNDAuMDE5LTIzLjEyMmwtMTIuNDQsMTIuNDRoMGwtLjAxNy4wMTguMDg5LjA1MWExMDYuNzU3LDEwNi43NTcsMCwwLDAsNDcuODMyLDI3LjYxN2gwWlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg2NS43MDkgLTE1OC43MjIpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC02KVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjM2XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyMzZcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk05NDYuNDU0LDM2Ny4yMzJoMGw0LjU1Ni0xN2gwWlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg2Ny45MTYgLTE1OC44NjcpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjM2E0OGJhXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBpZD1cIu2MqOyKpF8yMzdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwi7Yyo7IqkIDIzN1wiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEwNTQuNDQzLDMzNy4zODJsLTEyLjQzOC0xMi40MzlhODkuMTgxLDg5LjE4MSwwLDAsMS00MC4wMiwyMy4xMjJsNC41NTYsMTdoMGExMDYuNzQ5LDEwNi43NDksMCwwLDAsNDcuODIyLTI3LjYwOWwuMS0uMDU4aDBsLS4wMTktLjAxOVpcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NzMuNzYzIC0xNTYuNzAzKVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtOClcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzI1M1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjUzXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTA1NC40NDMsMzM3LjM4MmwtMTIuNDM4LTEyLjQzOWE4OS4xODEsODkuMTgxLDAsMCwxLTQwLjAyLDIzLjEyMmw0LjU1NiwxN2gwYTEwNi43NDksMTA2Ljc0OSwwLDAsMCw0Ny44MjItMjcuNjA5bC4xLS4wNThoMGwtLjAxOS0uMDE5WlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg3My4wOTUgLTE1Ny43MTIpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC04KVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjM4XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyMzhcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMDA2LjU0MSwzNjcuMjMybC00LjU1Ni0xN2gwbDQuNTU2LDE3aDBaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODczLjA5NSAtMTU4Ljg2NylcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNkMjI5OGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzIzOVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjM5XCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNOTAzLjkxNywzMjEuMmE4OS4xODMsODkuMTgzLDAsMCwxLTIzLjEyMi00MC4wMTlsLTE3LDQuNTU2YTEwNi43NTQsMTA2Ljc1NCwwLDAsMCwyNy42MTYsNDcuODI5bC4wNTMuMDkyaDBaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODYwLjE3NCAtMTUyLjk1OClcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTEwKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjQwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyNDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk04OTQuMDY2LDMzNy4zODNsMTIuNDQtMTIuNDRoMEw4OTQuMDQ4LDMzNy40aDBsLjAxOC0uMDE4WlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg2Mi43NjQgLTE1Ni43MDMpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDA2ZmM0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBpZD1cIu2MqOyKpF8yNDFcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwi7Yyo7IqkIDI0MVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEwODUuODc1LDI4NS43MzVsLTE3LTQuNTU2QTg5LjE4Myw4OS4xODMsMCwwLDEsMTA0NS43NSwzMjEuMmwxMi40MzgsMTIuNDM5aDBsLjAxOS4wMTkuMDU2LS4xYTEwNi43NTYsMTA2Ljc1NiwwLDAsMCwyNy42MDktNDcuODE4bDAtLjAwNlpcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NzcuNTA4IC0xNTIuOTU4KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNsaW5lYXItZ3JhZGllbnQtMTEpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBpZD1cIu2MqOyKpF8yNDJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwi7Yyo7IqkIDI0MlwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEwNDUuNzUsMzI0Ljk0M2wxMi40MzgsMTIuNDM5aDBsLTEyLjQzOS0xMi40MzlaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODc3LjUwOCAtMTU2LjcwMylcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZjI2MDBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzI0M1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjQzXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTA3MS4wMzYsMjMwLjJhODkuNzU2LDg5Ljc1NiwwLDAsMSwwLDQ2LjIyNGwxNyw0LjU1NWgwdjBhMTA3LjY2MiwxMDcuNjYyLDAsMCwwLDAtNTUuMzI0di0uMDA2aDBaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODc5LjY3MiAtMTQ3LjMyNSlcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTEyKVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjQ0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyNDRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMDg4LjAzOCwyMjUuNjQ4bC0xNyw0LjU1NmgwbDE3LTQuNTU2aDBaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODc5LjY3MiAtMTQ3LjExKVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZiNjMxMlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjQ1XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyNDVcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMDg4LjAzOCwyODUuNzM0bC0xNy00LjU1NmgwbDE3LDQuNTU2aDBaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODc5LjY3MiAtMTUyLjI5KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZiNjMxMlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjQ2XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyNDZcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk04NjMuNDU0LDI4MC45ODNsMTctNC41NTZhODkuNzI2LDg5LjcyNiwwLDAsMSwwLTQ2LjIyNGwtMTctNC41NTZoMGExMDcuNjcsMTA3LjY3LDAsMCwwLDAsNTUuMzM2WlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg1OS44MzYgLTE0Ny4zMjQpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0xMylcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzI0N1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjQ3XCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNODgwLjc5NCwyODEuMTc5bC0xNyw0LjU1NmgwbDE3LTQuNTU2WlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg2MC4xNzQgLTE1Mi4yOSlcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwMGMyYWZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzI0OFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjQ4XCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNOTA2LjUwNiwxODMuMTExYTg5LjE4Myw4OS4xODMsMCwwLDEsNDAuMDItMjMuMTIzbC0uNzUyLTIuOC0uNjg3LTIuNTYyLS4xNTItLjU2NmMtLjI5Mi0xLjA5MS0uNTczLTIuMTQxLS44NDgtMy4xNjVsLS40NjktMS43NDlxLS40NDQtMS42Ni0uODY5LTMuMjQzbC0uNzgxLTIuOTE0QTEwNi43NTgsMTA2Ljc1OCwwLDAsMCw4OTQuMTQsMTcwLjZsLS4wOTEuMDUzaDBaXCJcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODYyLjc2NCAtMTM5LjM2OSlcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInVybCgjbGluZWFyLWdyYWRpZW50LTE0KVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjU1XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyNTVcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk05MDYuNTA2LDE4My4xMTFhODkuMTgzLDg5LjE4MywwLDAsMSw0MC4wMi0yMy4xMjNsLS43NTItMi44LS42ODctMi41NjItLjE1Mi0uNTY2Yy0uMjkyLTEuMDkxLS41NzMtMi4xNDEtLjg0OC0zLjE2NWwtLjQ2OS0xLjc0OXEtLjQ0NC0xLjY2LS44NjktMy4yNDNsLS43ODEtMi45MTRBMTA2Ljc1OCwxMDYuNzU4LDAsMCwwLDg5NC4xNCwxNzAuNmwtLjA5MS4wNTNoMFpcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NjMuNDMxIC0xMzguMzYpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0xNClcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzI0OVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjQ5XCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNOTQ4LjEsMTQ5LjE0MmwuNDY5LDEuNzQ5Yy4yNzQsMS4wMjQuNTU2LDIuMDc0Ljg0OCwzLjE2NWwuMTUyLjU2Ni42ODcsMi41NjIuNzUyLDIuOGgwbC00LjU1Ni0xN2gwbC43ODEsMi45MTRROTQ3LjY2LDE0Ny40ODQsOTQ4LjEsMTQ5LjE0MlpcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NjcuOTE2IC0xMzkuMzY5KVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzdmZDIwMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgaWQ9XCLtjKjsiqRfMjUwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2MqOyKpCAyNTBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk04NjMuNzkyLDIyMS4xNjRsMTcsNC41NTZBODkuMTczLDg5LjE3MywwLDAsMSw5MDMuOTE3LDE4NS43TDg5MS40NiwxNzMuMjQybC0uMDUyLjA5YTEwNi43NTgsMTA2Ljc1OCwwLDAsMC0yNy42MTgsNDcuODMxWlwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTg2MC4xNzQgLTE0MS45NTgpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2xpbmVhci1ncmFkaWVudC0xNilcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGlkPVwi7Yyo7IqkXzI1MVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCLtjKjsiqQgMjUxXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNODYzLjc5MiwyMjUuNjQ4aDBsMTcsNC41NTZoMFpcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NjAuMTc1IC0xNDcuMTEpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDBiNTAwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgICBpZD1cIuyCrOqwge2YlV84NTdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwi7IKs6rCB7ZiVIDg1N1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNy42MThcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMxLjI4NSAzMS4yODMpIHJvdGF0ZSgtNDUpXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDBiNTAwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgIGlkPVwi7YOA7JuQXzExMlwiXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIu2DgOybkCAxMTJcIlxyXG4gICAgICAgICAgICBjeD1cIjkwXCJcclxuICAgICAgICAgICAgY3k9XCI5MFwiXHJcbiAgICAgICAgICAgIHI9XCI5MFwiXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0NDYuOTkxIC0xMTc2LjAwOSlcIlxyXG4gICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgaWQ9XCJfXCJcclxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiP1wiXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MDcuOTkxIC0xMDQzLjAwOSlcIlxyXG4gICAgICAgICAgICBmb250LXNpemU9XCIxMjNcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiMzAwXCJcclxuICAgICAgICAgICAgZm9udEZhbWlseT1cIlByZXRlbmRhcmQgVmFyaWFibGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dHNwYW4geD1cIjBcIiB5PVwiMFwiPlxyXG4gICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgPC90c3Bhbj5cclxuICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvU1ZHPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluSW1hZ2U7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1ldGFUYWcgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBbb2dJbWFnZSwgc2V0T2dJbWFnZV0gPSB1c2VTdGF0ZSgnbWV0YUltZy5qcGcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwcmVVcmwnKSkge1xyXG4gICAgICAvL+qysOqzvCDqs7XsnKDtjpjsnbTsp4Dsl5DshJwg66as64uk7J2066CJ7Yq4IOuQkOuLpOuptCDsg4jroZzsmrQg7I2464Sk7J28IOyggeyaqVxyXG4gICAgICBzZXRPZ0ltYWdlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3ByZVVybCcpISk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByZVVybCcpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT7tjbzsiqTrhJDsu6zrn6wg7KeE64uoPC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICBjb250ZW50PXtgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvJHtvZ0ltYWdlfWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcclxuICAgICAgICBjb250ZW50PVwi7J246rO17KeA64qlIO2NvOyKpOuEkOy7rOufrCDsnpDqsIDsp4Tri6gg7YWM7Iqk7Yq4LeuniOydtO2NvOyKpOuEkOy7rOufrCjrp4jsnbTsu6zrn6wpXCJcclxuICAgICAgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjb250ZW50PVwi64KY64qUIOybnO2GpOydvOq5jD8g7L+o7Yak7J286rmMPyDtjbzsiqTrhJDsu6zrn6wg7J6Q6rCAIOynhOuLqO2VmOufrOqwgOq4sCEhIOyduOqzteyngOuKpeydtCDtlLzrtoDsgqzsp4TsnYQg67aE7ISd7ZWY7JesIOqysOqzvOulvCDslYzroKTspI3ri4jri6QuIO2ajOybkOqwgOyeheyXhuydtCDrtIQg7Juc7YakLCDsl6zrpoQg7L+o7YakLCDqsIDsnYQg7Juc7YakLCDqsqjsmrgg7L+o7YakIOykkSDslrTrlJTsl5Ag7ZW064u57ZWY64qU7KeAIOyVjOyVhOuztOyEuOyalC5cIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCJcclxuICAgICAgICBjb250ZW50PVwi7J246rO17KeA64qlIO2NvOyKpOuEkOy7rOufrCDsnpDqsIDsp4Tri6gg7YWM7Iqk7Yq4LeuniOydtO2NvOyKpOuEkOy7rOufrCjrp4jsnbTsu6zrn6wpXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vbXljb2xvci5rci9cIiAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD1cIuuCmOuKlCDsm5zthqTsnbzquYw/IOy/qO2GpOydvOq5jD8g7Y287Iqk64SQ7Lus65+sIOyekOqwgCDsp4Tri6jtlZjrn6zqsIDquLAhISDsnbjqs7Xsp4DriqXsnbQg7ZS867aA7IKs7KeE7J2EIOu2hOyEne2VmOyXrCDqsrDqs7zrpbwg7JWM66Ck7KSN64uI64ukLiDtmozsm5DqsIDsnoXsl4bsnbQg67SEIOybnO2GpCwg7Jes66aEIOy/qO2GpCwg6rCA7J2EIOybnO2GpCwg6rKo7Jq4IOy/qO2GpCDspJEg7Ja065SU7JeQIO2VtOuLue2VmOuKlOyngCDslYzslYTrs7TshLjsmpQuXCJcclxuICAgICAgLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWV0YVRhZztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMS45dmg7XHJcbiAgbWFyZ2luLXRvcDogNy41dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMy4xM3ZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMi41dmg7XHJcbiAgQG1lZGlhIChtYXgtaGVpZ2h0OiA1MTNweCkge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEJvbGQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuYDtcclxuY29uc3QgTWlkZGxlSW5mbyA9ICgpID0+IHtcclxuICAvLyBjb25zdCBhID0gaHRtbGA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIiBpZD1cImlkXCI+XHJcbiAgLy8gICBqYWVob29uPHNwYW4+aWQ8L3NwYW4+PHNwYW4+aWQ8L3NwYW4+IDxzcGFuPmlkPC9zcGFuPiA8c3Bhbj5pZDwvc3BhblxyXG4gIC8vICAgPjxzcGFuPmlkPC9zcGFuPjxzcGFuPmlkPC9zcGFuPjxzcGFuPmlkPC9zcGFuPjxzcGFuPmlkPC9zcGFuPjxzcGFuPmlkPC9zcGFuXHJcbiAgLy8gICA+PHNwYW4+aWQ8L3NwYW4+XHJcbiAgLy8gICA8c3Bhbj5pZDwvc3Bhbj5cclxuICAvLyA8L2Rpdj5gO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGl2PlxyXG4gICAgICA8Qm9sZD7su6zrn6zrpqzsiqTtirjqsIAgPC9Cb2xkPlxyXG4gICAgICA8U3Bhbj7soJzsnpHtlZwg7Y287Iqk64SQ7Lus65+sIOynhOuLqCDsgqzsnbTtirghPC9TcGFuPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFNwYW4+65Sl65+s64udIO2VmeyKtSDrqqjrjbjsnYQg7Ya17ZW0IDwvU3Bhbj5cclxuICAgICAgPEJvbGQ+7ZS867aA66W8IOynhOuLqO2VqeuLiOuLpC48L0JvbGQ+XHJcbiAgICA8L0Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlkZGxlSW5mbztcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIH0gZnJvbSAnLi4vLi4vc3RvcmUvY29sb3JTdG9yZSc7XHJcbmltcG9ydCB7IERlYm91bmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvRGVib3VuY2UnO1xyXG5pbXBvcnQgeyBCdXR0b25TdHlsZSB9IGZyb20gJy4uL0RlZmF1bHRCdG4nO1xyXG5pbXBvcnQgY2FudmFzVG9JbWcgZnJvbSAnLi9jYW52YXNUb0ltZyc7XHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuLy8gY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuLy8gYm9yZGVyOiAycHggc29saWQgcmdiKDEwLCA1OSwgMTEyKTtcclxuLy8gZGlzcGxheTogaW5saW5lO1xyXG4vLyBib3JkZXItcmFkaXVzOiA3cHg7XHJcbi8vIHBhZGRpbmc6IDAgMXZoO1xyXG4vLyBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gY29sb3IgOiByZ2IoMTAsIDU5LCAxMTIpO1xyXG4vLyBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIG91dGxpbmUgOiAwO1xyXG4vLyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcclxuLy8gbWFyZ2luLXJpZ2h0IDogMTBweDtcclxuLy8gbWFyZ2luLWJvdHRvbSA6IDF2aDtcclxuLy8gYFxyXG5cclxuY29uc3QgRmlsdGVyQnRuID0gc3R5bGVkKEJ1dHRvblN0eWxlKWBcclxuICBjb2xvcjogI2ZmNWRhMztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgZm9udC1zaXplOiAxLjh2aDtcclxuICBwYWRkaW5nOiAwLjh2aCA1dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40dmg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY1ZGEzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEZpcnN0QnRuID0gc3R5bGVkKEZpbHRlckJ0bilgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICNmZjVkYTM7XHJcbmA7XHJcblxyXG5jb25zdCBTZW5kQnRuID0gc3R5bGVkKEZpbHRlckJ0bilgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICM3YzdjN2M7XHJcbmA7XHJcblxyXG5jb25zdCBTUFJJTkdfRkFMTF9DT0xPUlMgPSBbXHJcbiAgLy8gWydyZ2IoMTk1LDEyNywxNTgpJywgJ3JnYigxOTIsMTQ4LDE1NSknXSxcclxuICAvLyBbJ3JnYigxMDEsMTgyLDE4OSknLCAncmdiKDE0NSwxMjcsMTA3KSddLFxyXG4gIC8vIFsncmdiKDg5LDE1Niw0OSknLCAncmdiKDE0NiwxNDgsNzMpJ10sXHJcbiAgWydyZ2IoMTc0LDEzLDI1KScsICdyZ2IoODQsNDQsMzcpJ10sXHJcbiAgWydyZ2IoMTg5LDE3NywxNTMpJywgJ3JnYigxNTgsMTQwLDEyMCknXSxcclxuICBbJ3JnYigyMTAsMTcxLDM0KScsICdyZ2IoMjExLDE1OSw3MCknXSxcclxuXTtcclxuXHJcbmNvbnN0IFNVTU1FUl9XSU5URVJfQ09MT1JTID0gW1xyXG4gIC8vIFsncmdiKDE1LDE2MiwxNjUpJywgJ3JnYig0NSw4MSw3NCknXSxcclxuICAvLyBbJ3JnYigxMzUsMTExLDE1OSknLCAncmdiKDYzLDUxLDEyMCknXSxcclxuICAvLyBbJ3JnYig2NiwxMjMsMTY2KScsICdyZ2IoMjcsNzMsMTU5KSddLFxyXG4gIFsncmdiKDE1LDE2MiwxNjUpJywgJ3JnYig0NSw4MSw3NCknXSxcclxuICBbJ3JnYigyMTIsMTYzLDE4MiknLCAncmdiKDIxMCw1MiwxMDEpJ10sXHJcbiAgWydyZ2IoMjA5LDIwOSwxOTcpJywgJ3JnYigyMTEsMjA3LDE2OCknXSxcclxuXTtcclxuXHJcbmNvbnN0IFNQUklOR19MSUdIVF9CUklHSFRfQ09MT1JTID0gW1xyXG4gIFsncmdiKDIzOSwgMjA0LCAxNzApJywgJ3JnYigyNTEsIDE0MSwgNjEpJ10sIC8v7Y6Y7J28ICwg67iM65287J207Yq4XHJcbiAgWydyZ2IoMjE2LCAyMTMsIDE2OCknLCAncmdiKDIxNywgMjAwLCAyNyknXSwgLy/tjpjsnbwgLCDruIzrnbzsnbTtirhcclxuICBbJ3JnYigxNDIsIDEzNSwgMTkwKScsICdyZ2IoMCwgODAsIDE1NyknXSwgLy/rnbzsnbTtirggLCDruYTruYTrk5xcclxuXTtcclxuY29uc3QgU1VNTUVSX0xJR0hUX0JSSUdIVF9DT0xPUlMgPSBbXHJcbiAgWydyZ2IoMjM5LCAyMDQsIDE3MCknLCAncmdiKDI1MSwgMTQxLCA2MSknXSwgLy/tjpjsnbwgLCDruIzrnbzsnbTtirhcclxuICBbJ3JnYigyMTYsIDIxMywgMTY4KScsICdyZ2IoMjE3LCAyMDAsIDI3KSddLCAvL+2OmOydvCAsIOu4jOudvOydtO2KuFxyXG4gIFsncmdiKDIyOCwgMTg2LCAxOTIpJywgJ3JnYigyMDQsIDkyLCAxMzUpJ10sIC8v7Y6Y7J28ICwg67iM65287J207Yq4XHJcbl07XHJcbmNvbnN0IFNVTU1FUl9MSUdIVF9NVVRFX0NPTE9SUyA9IFtcclxuICBbJ3JnYigxNjUsIDIwNiwgMTgyKScsICdyZ2IoMTAyLCAxNjksIDEzNCknXSwgLy/tjpjsnbwgLCDshoztlITtirhcclxuICBbJ3JnYigyNDIsIDE0MCwgMTQyKScsICdyZ2IoMTU3LCA4NCwgODYpJ10sIC8v65287J207Yq4ICwg642cXHJcbiAgWydyZ2IoODIsIDE2NiwgMTkxKScsICdyZ2IoNzYsIDk2LCAxMDQpJ10sIC8v65287J207Yq4ICwg6re466CI7J207IucXHJcbl07XHJcbmNvbnN0IFNVTU1FUl9CUklHSFRfTVVURV9DT0xPUlMgPSBbXHJcbiAgWydyZ2IoMTE4LCAxODcsIDc2KScsICdyZ2IoMTAyLCAxNjksIDEzNCknXSwgLy/ruIzrnbzsnbTtirggLCDshoztlITtirhcclxuICBbJ3JnYigyNDIsIDE0MCwgMTQyKScsICdyZ2IoMTU3LCA4NCwgODYpJ10sIC8v65287J207Yq4ICwg642cXHJcbiAgWydyZ2IoODIsIDE2NiwgMTkxKScsICdyZ2IoNzYsIDk2LCAxMDQpJ10sIC8v65287J207Yq4ICwg6re466CI7J207IucXHJcbl07XHJcbmNvbnN0IEZBTExfTVVURV9ERUVQX0NPTE9SUyA9IFtcclxuICBbJ3JnYigxODksIDE2MiwgMTYyKScsICdyZ2IoNjEsIDQ3LCA0NyknXSwgLy/rnbzsnbTtirgg6re466CI7J207IucLCDri6Ttgawg6re466CI7J207IucXHJcbiAgWydyZ2IoNzksIDEwNCwgMTA3KScsICdyZ2IoMCwgOTQsIDEwNSknXSwgLy/qt7jroIjsnbTsi5wsIOuUpVxyXG4gIFsncmdiKDIwNCwgMTgyLCAxMDApJywgJ3JnYigxMDcsIDk0LCAyNyknXSwgLy/shoztlITtirgsIOuLpO2BrFxyXG5dO1xyXG5jb25zdCBGQUxMX01VVEVfU1RST05HX0NPTE9SUyA9IFtcclxuICBbJ3JnYigxNDksIDE3NSwgMTYwKScsICdyZ2IoMCwgMTM4LCA4MiknXSwgLy/rnbzsnbTtirgg6re466CI7J207IucLCDsiqTtirjrobFcclxuICBbJ3JnYigxMTUsIDk1LCA4NCknLCAncmdiKDIwOSwgMTA1LCAyNyknXSwgLy/qt7jroIjsnbTsi5wgLCDsiqTtirjrobFcclxuICBbJ3JnYig1MiwgODQsIDExNiknLCAncmdiKDAsIDg2LCAxNDYpJ10sIC8v642cICwg7Iqk7Yq466GxXHJcbl07XHJcblxyXG5jb25zdCBGQUxMX0RFRVBfU1RST05HX0NPTE9SUyA9IFtcclxuICBbJ3JnYigyNCwgODEsIDU2KScsICdyZ2IoMCwgMTM4LCA4MiknXSwgLy/rnbzsnbTtirgg6re466CI7J207IucLCDsiqTtirjrobFcclxuICBbJ3JnYig2NiwgNTMsIDQ2KScsICdyZ2IoMjA5LCAxMDUsIDI3KSddLCAvL+uLpO2BrCDqt7jroIjsnbTsi5wgLCDsiqTtirjrobFcclxuICBbJ3JnYigwLCA2NCwgMTE3KScsICdyZ2IoMCwgODYsIDE0NiknXSwgLy/rlKUgLCDsiqTtirjrobFcclxuXTtcclxuXHJcbmNvbnN0IFdJTlRFUl9ERUVQX0JSSUdIVF9DT0xPUlMgPSBbXHJcbiAgWydyZ2IoNjEsIDQ3LCA0NyknLCAncmdiKDE5MywgNTMsIDcxKSddLCAvL+uLpO2BrCDqt7jroIjsnbTsi5wsIOyKpO2KuOuhsVxyXG4gIFsncmdiKDI0LCA4MSwgNTYpJywgJ3JnYig3NCwgMTYzLCAyMSknXSwgLy/ri6TtgawgLCDruYTruYTrk5xcclxuICBbJ3JnYig5MCwgMzgsIDk1KScsICdyZ2IoMTAyLCA2MiwgMTQwKSddLCAvL+uUpSAsIOu5hOu5hOuTnFxyXG5dO1xyXG5cclxuLy8gY29uc3Qgc2Vhc29uID0gWydzcHJpbmdXYXJtJywgJ3N1bW1lckNvb2wnLCAnZmFsbFdhcm0nLCAnd2ludGVyQ29vbCddO1xyXG5cclxuY29uc3QgTmV3RmFjZUJvYXJkQnRuR3JvdXAgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBkZWIgPSBEZWJvdW5jZSgpO1xyXG4gIGNvbnN0IHRvZ2dsZUlkeCA9IHVzZVJlZjxudW1iZXI+KDApO1xyXG4gIGNvbnN0IHJlc3VsdEFyciA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5Db2xvclJlZHVjZXIuc2VsZlJlc3VsdCxcclxuICApO1xyXG4gIGNvbnN0IFNFTEZfQ09MT1JTID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLkNvbG9yUmVkdWNlci5zZWxmQ29sb3JzLFxyXG4gICk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBzZXRSZXN1bHRBcnIgPSAoaXNOZXh0OiBib29sZWFuKSA9PiB7XHJcbiAgICBpc05leHQgPyByZXN1bHRBcnIucHVzaCh0b2dnbGVJZHguY3VycmVudCkgOiByZXN1bHRBcnIucG9wKCk7XHJcbiAgICBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zZXRTZWxmUmVzdWx0KFsuLi5yZXN1bHRBcnJdKSk7XHJcbiAgfTtcclxuICBjb25zdCBJU19TVU1NRVJfRkFMTCA9IHVzZVJlZjxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgdG9uZSA9IHVzZVJlZjxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBpc05leHRSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IHByb2dyZXNzQmFyID0gdXNlUmVmKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQmFyJykgYXMgSFRNTEVsZW1lbnQsXHJcbiAgKTtcclxuICBjb25zdCBwZXJjZW50ID0gdXNlUmVmKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzUGVyY2VudCcpIGFzIEhUTUxFbGVtZW50LFxyXG4gICk7XHJcbiAgY29uc3QgdmlkZW8gPSB1c2VSZWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJykgYXMgSFRNTFZpZGVvRWxlbWVudCk7XHJcbiAgY29uc3QgY2FudmFzID0gdXNlUmVmKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdpbmdDYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcclxuICApO1xyXG4gIGNvbnN0IHNldENvbG9ycyA9IChpc1B1c2g6IGJvb2xlYW4pID0+IHtcclxuICAgIC8v7Iqk7Yag7Ja0IOqwneyytOulvCDslaHshZjsnLzroZwg7JeF642w7J207Yq47ZWY7KeAIOyViuuKlCDsnbTsnKDripQg66as66CM642U66eB7J2EIHJlc3VsdEFycuydtCDri7Tri7ntlZjqs6Ag7J6I6riwIOuVjOusuOyXkC5cclxuICAgIGNvbnN0IEFSUl9TSVpFID0gcmVzdWx0QXJyLmxlbmd0aDtcclxuICAgIGlmIChpc1B1c2gpIHtcclxuICAgICAgaWYgKEFSUl9TSVpFID09PSAzKSB7XHJcbiAgICAgICAgY29uc3QgRklSU1RfQ09VTlQgPSByZXN1bHRBcnIuZmlsdGVyKGkgPT4gaSA9PT0gMCk7XHJcbiAgICAgICAgaWYgKEZJUlNUX0NPVU5ULmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICBTUFJJTkdfRkFMTF9DT0xPUlMuZm9yRWFjaCgoX2ksIGlkeCkgPT5cclxuICAgICAgICAgICAgU0VMRl9DT0xPUlMucHVzaChTUFJJTkdfRkFMTF9DT0xPUlNbaWR4XSksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdG9uZS5jdXJyZW50ID0gJ3dhcm0nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBTVU1NRVJfV0lOVEVSX0NPTE9SUy5mb3JFYWNoKChfaSwgaWR4KSA9PlxyXG4gICAgICAgICAgICBTRUxGX0NPTE9SUy5wdXNoKFNVTU1FUl9XSU5URVJfQ09MT1JTW2lkeF0pLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRvbmUuY3VycmVudCA9ICdjb29sJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoQVJSX1NJWkUgPT09IDYpIHtcclxuICAgICAgICBjb25zdCBGSVJTVF9DT1VOVCA9IHJlc3VsdEFyci5zbGljZSgzLCA2KS5maWx0ZXIoaSA9PiBpID09PSAwKTtcclxuXHJcbiAgICAgICAgaWYgKEZJUlNUX0NPVU5ULmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICBpZiAodG9uZS5jdXJyZW50ID09PSAnd2FybScpXHJcbiAgICAgICAgICAgIFNQUklOR19MSUdIVF9CUklHSFRfQ09MT1JTLmZvckVhY2goKF9pLCBpZHgpID0+XHJcbiAgICAgICAgICAgICAgU0VMRl9DT0xPUlMucHVzaChTUFJJTkdfTElHSFRfQlJJR0hUX0NPTE9SU1tpZHhdKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBTVU1NRVJfTElHSFRfQlJJR0hUX0NPTE9SUy5mb3JFYWNoKChfaSwgaWR4KSA9PlxyXG4gICAgICAgICAgICAgIFNFTEZfQ09MT1JTLnB1c2goU1VNTUVSX0xJR0hUX0JSSUdIVF9DT0xPUlNbaWR4XSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRvbmUuY3VycmVudCA9ICdzdW1tZXInO1xyXG4gICAgICAgICAgICBJU19TVU1NRVJfRkFMTC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRvbmUuY3VycmVudCA9PT0gJ3dhcm0nKSB7XHJcbiAgICAgICAgICAgIEZBTExfTVVURV9ERUVQX0NPTE9SUy5mb3JFYWNoKChfaSwgaWR4KSA9PlxyXG4gICAgICAgICAgICAgIFNFTEZfQ09MT1JTLnB1c2goRkFMTF9NVVRFX0RFRVBfQ09MT1JTW2lkeF0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0b25lLmN1cnJlbnQgPSAnZmFsbCc7XHJcbiAgICAgICAgICAgIElTX1NVTU1FUl9GQUxMLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIFdJTlRFUl9ERUVQX0JSSUdIVF9DT0xPUlMuZm9yRWFjaCgoX2ksIGlkeCkgPT5cclxuICAgICAgICAgICAgICBTRUxGX0NPTE9SUy5wdXNoKFdJTlRFUl9ERUVQX0JSSUdIVF9DT0xPUlNbaWR4XSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKEFSUl9TSVpFID09PSA5KSB7XHJcbiAgICAgICAgY29uc3QgRklSU1RfQ09VTlQgPSByZXN1bHRBcnIuc2xpY2UoNiwgOSkuZmlsdGVyKGkgPT4gaSA9PT0gMCk7XHJcbiAgICAgICAgaWYgKEZJUlNUX0NPVU5ULmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICBpZiAodG9uZS5jdXJyZW50ID09PSAnc3VtbWVyJykge1xyXG4gICAgICAgICAgICBTVU1NRVJfTElHSFRfTVVURV9DT0xPUlMuZm9yRWFjaCgoX2ksIGlkeCkgPT5cclxuICAgICAgICAgICAgICBTRUxGX0NPTE9SUy5wdXNoKFNVTU1FUl9MSUdIVF9NVVRFX0NPTE9SU1tpZHhdKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdG9uZS5jdXJyZW50ID0gJ2xpZ2h0JztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEZBTExfTVVURV9TVFJPTkdfQ09MT1JTLmZvckVhY2goKF9pLCBpZHgpID0+XHJcbiAgICAgICAgICAgICAgU0VMRl9DT0xPUlMucHVzaChGQUxMX01VVEVfU1RST05HX0NPTE9SU1tpZHhdKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdG9uZS5jdXJyZW50ID0gJ211dGUnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodG9uZS5jdXJyZW50ID09PSAnc3VtbWVyJykge1xyXG4gICAgICAgICAgICBTVU1NRVJfQlJJR0hUX01VVEVfQ09MT1JTLmZvckVhY2goKF9pLCBpZHgpID0+XHJcbiAgICAgICAgICAgICAgU0VMRl9DT0xPUlMucHVzaChTVU1NRVJfQlJJR0hUX01VVEVfQ09MT1JTW2lkeF0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0b25lLmN1cnJlbnQgPSAnYnJpZ2h0JztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEZBTExfREVFUF9TVFJPTkdfQ09MT1JTLmZvckVhY2goKF9pLCBpZHgpID0+XHJcbiAgICAgICAgICAgICAgU0VMRl9DT0xPUlMucHVzaChGQUxMX0RFRVBfU1RST05HX0NPTE9SU1tpZHhdKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdG9uZS5jdXJyZW50ID0gJ2RlZXAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChBUlJfU0laRSA9PT0gMiB8fCBBUlJfU0laRSA9PT0gNSB8fCBBUlJfU0laRSA9PT0gOCkge1xyXG4gICAgICBpZiAodG9uZS5jdXJyZW50ID09PSAnZGVlcCcgfHwgdG9uZS5jdXJyZW50ID09PSAnbXV0ZScpXHJcbiAgICAgICAgdG9uZS5jdXJyZW50ID0gJ2ZhbGwnO1xyXG4gICAgICBlbHNlIGlmICh0b25lLmN1cnJlbnQgPT09ICdsaWdodCcgfHwgdG9uZS5jdXJyZW50ID09PSAnYnJpZ2h0JylcclxuICAgICAgICB0b25lLmN1cnJlbnQgPSAnc3VtbWVyJztcclxuICAgICAgZWxzZSBpZiAodG9uZS5jdXJyZW50ID09PSAnZmFsbCcgfHwgdG9uZS5jdXJyZW50ID09PSAnd2FybScpIHtcclxuICAgICAgICBJU19TVU1NRVJfRkFMTC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdG9uZS5jdXJyZW50ID0gJ3dhcm0nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIElTX1NVTU1FUl9GQUxMLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB0b25lLmN1cnJlbnQgPSAnY29vbCc7XHJcbiAgICAgIH1cclxuICAgICAgU0VMRl9DT0xPUlMuc3BsaWNlKEFSUl9TSVpFICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBnZXRSZXN1bHQgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgY29sb3JJRCA9IDA7XHJcbiAgICAgIGlmICghSVNfU1VNTUVSX0ZBTEwuY3VycmVudCkge1xyXG4gICAgICAgIGNvbnN0IEZJUlNUX0NPVU5UID0gcmVzdWx0QXJyLnNsaWNlKDYpLmZpbHRlcihpID0+IGkgPT09IDApO1xyXG4gICAgICAgIHN3aXRjaCAodG9uZS5jdXJyZW50KSB7XHJcbiAgICAgICAgICBjYXNlICd3YXJtJzpcclxuICAgICAgICAgICAgaWYgKEZJUlNUX0NPVU5ULmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JJRCA9IDU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29sb3JJRCA9IDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjb29sJzpcclxuICAgICAgICAgICAgaWYgKEZJUlNUX0NPVU5ULmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JJRCA9IDEzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbG9ySUQgPSAxNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBGSVJTVF9DT1VOVCA9IHJlc3VsdEFyci5zbGljZSg5KS5maWx0ZXIoaSA9PiBpID09PSAwKTtcclxuICAgICAgICBzd2l0Y2ggKHRvbmUuY3VycmVudCkge1xyXG4gICAgICAgICAgY2FzZSAnbGlnaHQnOlxyXG4gICAgICAgICAgICBpZiAoRklSU1RfQ09VTlQubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICBjb2xvcklEID0gNztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb2xvcklEID0gODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2JyaWdodCc6XHJcbiAgICAgICAgICAgIGlmIChGSVJTVF9DT1VOVC5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgIGNvbG9ySUQgPSA5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbG9ySUQgPSA4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbXV0ZSc6XHJcbiAgICAgICAgICAgIGlmIChGSVJTVF9DT1VOVC5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgIGNvbG9ySUQgPSAxMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb2xvcklEID0gMTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkZWVwJzpcclxuICAgICAgICAgICAgaWYgKEZJUlNUX0NPVU5ULmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JJRCA9IDEyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbG9ySUQgPSAxMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kKCdmaWxlJywgY2FudmFzVG9JbWcoZmFsc2UpKTtcclxuICAgICAgZm9ybS5hcHBlbmQoJ2NvbG9ySUQnLCBjb2xvcklELnRvU3RyaW5nKCkpO1xyXG4gICAgICBmb3JtLmFwcGVuZCgnZGF0YV92ZXInLCAnMicpO1xyXG4gICAgICBmb3JtLmFwcGVuZCgnUV9BcnInLCBKU09OLnN0cmluZ2lmeShyZXN1bHRBcnIpKTtcclxuICAgICAgYXhpb3MucG9zdCgnL3JlbW92ZS9zZXRTZWxmUmVzdWx0JywgZm9ybSk7XHJcblxyXG4gICAgICBTRUxGX0NPTE9SUy5zcGxpY2UoMyk7XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNldFNlbGZSZXN1bHQoW10pKTtcclxuXHJcbiAgICAgIGNvbnN0IHN0cmVhbSA9IHZpZGVvLmN1cnJlbnQuc3JjT2JqZWN0IGFzIE1lZGlhU3RyZWFtOyAvL+u5hOuUlOyYpCDsiqTtirjrprxcclxuICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtIS5nZXRUcmFja3MoKTsgLy/tirjrnplcclxuICAgICAgdHJhY2tzWzBdLnN0b3AoKTtcclxuXHJcbiAgICAgIGlmIChjb2xvcklEID49IDUgJiYgY29sb3JJRCA8PSA2KVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcHJpbmdXYXJtJykhLmNsaWNrKCk7XHJcbiAgICAgIGVsc2UgaWYgKGNvbG9ySUQgPj0gNyAmJiBjb2xvcklEIDw9IDkpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1lckNvb2wnKSEuY2xpY2soKTtcclxuICAgICAgZWxzZSBpZiAoY29sb3JJRCA+PSAxMCAmJiBjb2xvcklEIDw9IDEyKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWxsV2FybScpIS5jbGljaygpO1xyXG4gICAgICBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW50ZXJDb29sJykhLmNsaWNrKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2Vhc29uW2NvbG9ySURdKSEuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAoaXNOZXh0UmVmLmN1cnJlbnQgJiZcclxuICAgICAgICByZXN1bHRBcnIubGVuZ3RoID09PSA5ICYmXHJcbiAgICAgICAgIUlTX1NVTU1FUl9GQUxMLmN1cnJlbnQpIHx8XHJcbiAgICAgIChyZXN1bHRBcnIubGVuZ3RoID09PSAxMiAmJiBJU19TVU1NRVJfRkFMTC5jdXJyZW50KVxyXG4gICAgKSB7XHJcbiAgICAgIGdldFJlc3VsdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q29sb3JzKGlzTmV4dFJlZi5jdXJyZW50KTtcclxuXHJcbiAgICAgIGlmIChJU19TVU1NRVJfRkFMTC5jdXJyZW50KSB7XHJcbiAgICAgICAgcGVyY2VudC5jdXJyZW50LmlubmVyVGV4dCA9IGAke3Jlc3VsdEFyci5sZW5ndGggKyAxfS8xMmA7XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS53aWR0aCA9IGAkeyhyZXN1bHRBcnIubGVuZ3RoICsgMSkgKiA4LjMzfSVgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBlcmNlbnQuY3VycmVudC5pbm5lclRleHQgPSBgJHtyZXN1bHRBcnIubGVuZ3RoICsgMX0vOWA7XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS53aWR0aCA9IGAkeyhyZXN1bHRBcnIubGVuZ3RoICsgMSkgKiAxMS4xMX0lYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtyZXN1bHRBcnJdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIH0sIDEwMCk7XHJcbiAgICBjb25zdCBwcm9ncmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAncHJvZ3Jlc3NDb250YWluZXInLFxyXG4gICAgKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHByb2dyZXNzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBwZXJjZW50LmN1cnJlbnQuaW5uZXJUZXh0ID0gYDEvOWA7XHJcbiAgICBwcm9ncmVzc0Jhci5jdXJyZW50LnN0eWxlLndpZHRoID0gYDEwJWA7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB0b2dnbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoaWR4OiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGJlZm9yZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNlQm9hcmRCdG5Hcm91cCcpXHJcbiAgICAgID8uY2hpbGROb2Rlc1t0b2dnbGVJZHguY3VycmVudF0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZUJvYXJkQnRuR3JvdXAnKT8uY2hpbGROb2Rlc1tcclxuICAgICAgaWR4XHJcbiAgICBdIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgYmVmb3JlU2VsZWN0LnN0eWxlLmNvbG9yID0gJyNmZjVkYTMnO1xyXG4gICAgYmVmb3JlU2VsZWN0LnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgIHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZjVkYTMnO1xyXG4gICAgdG9nZ2xlSWR4LmN1cnJlbnQgPSBpZHg7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBwcmV2TmV4dEJ0biA9IHVzZUNhbGxiYWNrKChpc05leHQ6IGJvb2xlYW4pID0+IHtcclxuICAgIGNhbnZhcy5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLDEpJztcclxuICAgIHZpZGVvLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEsMSknO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNhbnZhcy5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgtMSwxKSc7XHJcbiAgICAgIHZpZGVvLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKC0xLDEpJztcclxuICAgIH0sIDEyNSk7XHJcbiAgICBzZXRSZXN1bHRBcnIoaXNOZXh0KTtcclxuICAgIGlzTmV4dFJlZi5jdXJyZW50ID0gaXNOZXh0O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEaXYgaWQ9XCJmYWNlQm9hcmRCdG5Hcm91cFwiPlxyXG4gICAgICA8Rmlyc3RCdG5cclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHRvZ2dsZUNoYW5nZSgwKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NvbG9yU2VsZWN0JywgJzAnKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMeuyiCDsg4nsg4FcclxuICAgICAgPC9GaXJzdEJ0bj5cclxuICAgICAgPEZpbHRlckJ0blxyXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgdG9nZ2xlQ2hhbmdlKDEpO1xyXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29sb3JTZWxlY3QnLCAnMScpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAy67KIIOyDieyDgVxyXG4gICAgICA8L0ZpbHRlckJ0bj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cmVzdWx0QXJyLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICcnXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTZW5kQnRuIG9uQ2xpY2s9eygpID0+IGRlYi5kZWJvdW5jZSgoKSA9PiBwcmV2TmV4dEJ0bihmYWxzZSksIDQwMCl9PlxyXG4gICAgICAgICAgICDsnbTsoIQg7IOJ7IOBXHJcbiAgICAgICAgICA8L1NlbmRCdG4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8U2VuZEJ0biBvbkNsaWNrPXsoKSA9PiBkZWIuZGVib3VuY2UoKCkgPT4gcHJldk5leHRCdG4odHJ1ZSksIDQwMCl9PlxyXG4gICAgICAgICAg7ZmV7J24XHJcbiAgICAgICAgPC9TZW5kQnRuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdGYWNlQm9hcmRCdG5Hcm91cDtcclxuIiwiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFByb2dyZXNzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxOCwgMTc0LCAxOTMpO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAydmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuYDtcclxuY29uc3QgQmFyID0gc3R5bGVkLmRpdmBcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA5MywgMTYzKTtcclxuICB0cmFuc2l0aW9uOiB1bnNldDtcclxuICBoZWlnaHQ6IDV2aDtcclxuICBtYXgtaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAwJTtcclxuICBib3JkZXItcmFkaXVzOiAydmg7XHJcbiAgQG1lZGlhIChtYXgtaGVpZ2h0OiA0NzBweCkge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDIuNXZoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xN3M7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgQG1lZGlhIChtaW4taGVpZ2h0OiA0NDBweCkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb2dyZXNzV3JhcHBlciBpZD1cInByb2dyZXNzQ29udGFpbmVyXCI+XHJcbiAgICAgIDxCYXIgaWQ9XCJwcm9ncmVzc0JhclwiPjwvQmFyPlxyXG4gICAgICA8U3BhbiBpZD1cInByb2dyZXNzUGVyY2VudFwiPjAlPC9TcGFuPlxyXG4gICAgPC9Qcm9ncmVzc1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFJvdXRlciA9ICgpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGluayBocmVmPXtgL3NwcmluZ1dhcm1gfT5cclxuICAgICAgICA8YSBpZD1cInNwcmluZ1dhcm1cIj48L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj17YC9zdW1tZXJDb29sYH0+XHJcbiAgICAgICAgPGEgaWQ9XCJzdW1tZXJDb29sXCI+PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvZmFsbFdhcm1gfT5cclxuICAgICAgICA8YSBpZD1cImZhbGxXYXJtXCI+PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2Avd2ludGVyQ29vbGB9PlxyXG4gICAgICAgIDxhIGlkPVwid2ludGVyQ29vbFwiPjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcclxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQnV0dG9uU3R5bGUgfSBmcm9tICcuLi9EZWZhdWx0QnRuJztcclxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9jb2xvclN0b3JlJztcclxuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xyXG5pbXBvcnQgQmxvY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CbG9jayc7XHJcbmltcG9ydCBDaGVja0NpcmNsZU91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZU91dGxpbmUnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vdXRpbHMvdGhlbWUnO1xyXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdHJlYW1DYW52YXMgZnJvbSAnLi9TdHJlYW1DYW52YXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwcm9wcyB7XHJcbiAgdHJpZ2dlcj86IGJvb2xlYW47XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbiAgcmFkaXVzPzogc3RyaW5nO1xyXG4gIHN0b3J5VHJpZ2dlcj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8cHJvcHM+YFxyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBhbmltYXRpb246ICR7dGhlbWUuZmFkZVVwfSAwLjVzIGxpbmVhciBhbHRlcm5hdGU7XHJcbmA7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHByb3BzPmBcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IGdyYXk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5OXB4KSB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzMjFweCkge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ3VzdG9tQnRuID0gc3R5bGVkKEJ1dHRvblN0eWxlKWBcclxuICBwYWRkaW5nOiAxLjV2aCAyLjh2aDtcclxuICBmb250LXNpemU6IDEuOHZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjZmY1ZGEzO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjVkYTM7XHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmY1ZGEzO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgcGFkZGluZzogMS4ydmggMi41dmg7XHJcbiAgICBmb250LXNpemU6IDEuNXZoO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC1oZWlnaHQ6IDU2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBUaXRsZSA9IHN0eWxlZChGYWIpYFxyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4IDIwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHVuc2V0O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OTlweCkge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEljb25TdHlsZSA9IGNzc2BcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMS41cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5OXB4KSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0b3A6IDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJY29uID0gc3R5bGVkKEJsb2NrSWNvbilgXHJcbiAgJHtJY29uU3R5bGV9XHJcbmA7XHJcblxyXG5jb25zdCBJY29uMiA9IHN0eWxlZChDaGVja0NpcmNsZU91dGxpbmVJY29uKWBcclxuICAke0ljb25TdHlsZX1cclxuYDtcclxuXHJcbmNvbnN0IE1pZGRsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OTlweCkge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2PHByb3BzPmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xyXG4gIGJvcmRlci10b3AtJHtwcm9wcyA9PiBwcm9wcy5yYWRpdXN9LXJhZGl1czogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IFN1YldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuY29uc3QgU3ViSW5mbyA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDk5cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTbWFsbEljb24gPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OTlweCkge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU21hbGxJY29uRGl2ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5OXB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9pbnRSZWQgPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogI2Y1MDA1NztcclxuYDtcclxuXHJcbmNvbnN0IFBvaW50Qmx1ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG5gO1xyXG5cclxuY29uc3QgU2Nhbk5vdGljZSA9ICh7IHN0b3J5VHJpZ2dlciB9OiBwcm9wcyk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHBvcHVwVHJpZ2dlciA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5Db2xvclJlZHVjZXIuc2NhblRyaWdnZXIsXHJcbiAgKTtcclxuICBjb25zdCBjbG9zZU5vdGljZSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FuTm90aWNlJykhLnBhcmVudEVsZW1lbnQhLnN0eWxlLnpJbmRleCA9ICc5OTcnO1xyXG4gICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2V0U2NhblRyaWdnZXIoZmFsc2UpKTtcclxuICAgIFN0cmVhbUNhbnZhcygnc2NhbicpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYW5Ob3RpY2VcIikhLnBhcmVudEVsZW1lbnQhKS5nZXRQcm9wZXJ0eVZhbHVlKCd6LWluZGV4JykpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgdHJpZ2dlcj17cG9wdXBUcmlnZ2VyfSBzdG9yeVRyaWdnZXI9e3N0b3J5VHJpZ2dlcn0+XHJcbiAgICAgIDxXcmFwcGVyXHJcbiAgICAgICAgdHJpZ2dlcj17cG9wdXBUcmlnZ2VyfVxyXG4gICAgICAgIHN0b3J5VHJpZ2dlcj17c3RvcnlUcmlnZ2VyfVxyXG4gICAgICAgIGlkPVwic2Nhbk5vdGljZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8TWlkZGxlV3JhcHBlcj5cclxuICAgICAgICAgIDxJbWdXcmFwcGVyIGNvbG9yPVwicmdiKDIyNCwgMjMwLCAyNTEpXCIgcmFkaXVzPVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8U3ViV3JhcHBlcj5cclxuICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJleHRlbmRlZFwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhZGRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uMiAvPlxyXG4gICAgICAgICAgICAgICAg7Jis67CU66W4IOy4oeygleuylVxyXG4gICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgIDwvU3ViV3JhcHBlcj5cclxuICAgICAgICAgICAgPEltZyBzcmM9e2Ake3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9zY2FuU3VjY2Vzcy5qcGdgfT48L0ltZz5cclxuICAgICAgICAgICAgPFN1YkluZm8+XHJcbiAgICAgICAgICAgICAg7Ja86rW07J20IDxQb2ludEJsdWU+6re464qY7KeA7KeAIOyViuydgDwvUG9pbnRCbHVlPiDquajrgZftlZwg7IOB7YOcXHJcbiAgICAgICAgICAgIDwvU3ViSW5mbz5cclxuICAgICAgICAgIDwvSW1nV3JhcHBlcj5cclxuICAgICAgICAgIDxJbWdXcmFwcGVyIGNvbG9yPVwicmdiYSgyMzUsIDgzLCAxMTYsIDAuMTIpXCIgcmFkaXVzPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgPFN1YldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZXh0ZW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhZGRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICDsnpjrqrvrkJwg7Lih7KCV67KVXHJcbiAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgPC9TdWJXcmFwcGVyPlxyXG4gICAgICAgICAgICA8U21hbGxJY29uRGl2PlxyXG4gICAgICAgICAgICAgIDxTbWFsbEljb24gc3JjPXtgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvbm9HbGFzc2VzLnBuZ2B9IC8+XHJcbiAgICAgICAgICAgICAgPFNtYWxsSWNvbiBzcmM9e2Ake3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9ub01hc2sucG5nYH0gLz5cclxuICAgICAgICAgICAgPC9TbWFsbEljb25EaXY+XHJcblxyXG4gICAgICAgICAgICA8U3ViSW5mbz5cclxuICAgICAgICAgICAgICA8UG9pbnRSZWQ+7JWI6rK9PC9Qb2ludFJlZD7qs7wgPFBvaW50UmVkPuuniOyKpO2BrDwvUG9pbnRSZWQ+64qUIOyeoOyLnFxyXG4gICAgICAgICAgICAgIOuyl+yWtOyjvOyEuOyalCFcclxuICAgICAgICAgICAgPC9TdWJJbmZvPlxyXG4gICAgICAgICAgICA8U21hbGxJY29uRGl2PlxyXG4gICAgICAgICAgICAgIDxTbWFsbEljb24gc3JjPXtgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvZGVncmVlRmFjZS5wbmdgfSAvPlxyXG4gICAgICAgICAgICAgIDxTbWFsbEljb24gc3JjPXtgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvcmlnaHRGYWNlLnBuZ2B9IC8+XHJcbiAgICAgICAgICAgIDwvU21hbGxJY29uRGl2PlxyXG4gICAgICAgICAgICA8U3ViSW5mbz5cclxuICAgICAgICAgICAgICDslrzqtbTsnYAgPFBvaW50UmVkPuq4sOyauOydtOyngCDslYrqs6A8L1BvaW50UmVkPiDrmJHrsJTroZwhXHJcbiAgICAgICAgICAgIDwvU3ViSW5mbz5cclxuICAgICAgICAgICAgPFNtYWxsSWNvbkRpdj5cclxuICAgICAgICAgICAgICA8U21hbGxJY29uIHNyYz17YCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2RhcmsucG5nYH0gLz5cclxuICAgICAgICAgICAgPC9TbWFsbEljb25EaXY+XHJcbiAgICAgICAgICAgIDxTdWJJbmZvPlxyXG4gICAgICAgICAgICAgIOuEiOustCA8UG9pbnRSZWQ+7Ja065GQ7Jq0IOqzszwvUG9pbnRSZWQ+7J2AIOyViOuPvOyalCFcclxuICAgICAgICAgICAgPC9TdWJJbmZvPlxyXG4gICAgICAgICAgPC9JbWdXcmFwcGVyPlxyXG4gICAgICAgIDwvTWlkZGxlV3JhcHBlcj5cclxuICAgICAgICA8Q3VzdG9tQnRuIG9uQ2xpY2s9e2Nsb3NlTm90aWNlfT7tmZXsnbg8L0N1c3RvbUJ0bj5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjYW5Ob3RpY2U7XHJcbiIsImltcG9ydCBNYWluQnRuIGZyb20gJy4vTWFpbkJ0bic7XHJcbmltcG9ydCBTdHJlYW0gZnJvbSAnLi9TdHJlYW0nO1xyXG5pbXBvcnQgeyBEZWJvdW5jZSB9IGZyb20gJy4uLy4uL3V0aWxzL0RlYm91bmNlJztcclxuaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2VsZk1vZGUgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICAvLyB2YXIgc3RvcmUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6U3RvcmVTdGF0ZSk9PiBzdGF0ZS5Db2xvclJlZHVjZXIuc3ByaW5nRmFjZUJvYXJkKVxyXG4gIGNvbnN0IGRlYiA9IERlYm91bmNlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQnRuLldyYXBwZXJcclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGRlYi5kZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgICAgICBTdHJlYW0oJ2ZhY2Vib2FyZCcpO1xyXG5cclxuICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdEV4cGxhaW5cIikhLnBhcmVudEVsZW1lbnQhLmlubmVyVGV4dCA9IFwi6rCA7J6lIOyWvOq1tOydtCDtmZTsgqztlbTsp4DripQg7ZWE7YSw66W8IO2ZleyduCDtm4Qg6rKw6rO8IO2ZleyduCDrsoTtirzsnYQg64iM65+s7KO87IS47JqUXCJcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8TWFpbkJ0bi5NaWRkbGVXcmFwcGVyPlxyXG4gICAgICAgIDxNYWluQnRuLkltZ1dyYXBwZXI+XHJcbiAgICAgICAgICA8TWFpbkJ0bi5DYW1JbWdcclxuICAgICAgICAgICAgYWx0PVwiY2FtZXJhIOy5tOuplOudvFwiXHJcbiAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL3NlbGYuc3ZnYH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9NYWluQnRuLkltZ1dyYXBwZXI+XHJcbiAgICAgICAgPE1haW5CdG4uVGV4dFdyYXBwZXI+XHJcbiAgICAgICAgICA8TWFpbkJ0bi5IMT7snpDqsIDsp4Tri6gg67Cp7IudPC9NYWluQnRuLkgxPlxyXG4gICAgICAgICAgPE1haW5CdG4uUD7sp4HsoJEg7Ja07Jq466as64qUIOyDieydhCDtjJDri6jtlbTrs7TshLjsmpQuPC9NYWluQnRuLlA+XHJcbiAgICAgICAgPC9NYWluQnRuLlRleHRXcmFwcGVyPlxyXG4gICAgICA8L01haW5CdG4uTWlkZGxlV3JhcHBlcj5cclxuICAgIDwvTWFpbkJ0bi5XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxmTW9kZTtcclxuIiwiaW1wb3J0IE1haW5CdG4gZnJvbSAnLi9NYWluQnRuJztcclxuaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gJy4vSW1hZ2VVcGxvYWQnO1xyXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBVcGxvYWRNb2RlID0gKCk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQnRuLldyYXBwZXJcclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICBpZiAoL2ZifGluc3RhZ3JhbS9pLnRlc3QodWEpICYmICEvaXBob25lfGlwYWQvaS50ZXN0KHVhKSkge1xyXG4gICAgICAgICAgYWxlcnQoJ+ybkO2ZnO2VnCDsuKHsoJXsnYQg7JyE7ZW0IOq4sOuzuCDruIzrnbzsmrDsoIDroZwg7J2064+Z7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4oXHJcbiAgICAgICAgICAgICdpbnRlbnQ6Ly9teWNvbG9ydGVzdC5tbCNJbnRlbnQ7c2NoZW1lPWh0dHA7cGFja2FnZT1jb20uYW5kcm9pZC5jaHJvbWU7ZW5kJyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEltYWdlVXBsb2FkKCdzY2FuJyk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxNYWluQnRuLk1pZGRsZVdyYXBwZXI+XHJcbiAgICAgICAgPE1haW5CdG4uSW1nV3JhcHBlcj5cclxuICAgICAgICAgIDxNYWluQnRuLkNhbUltZ1xyXG4gICAgICAgICAgICBhbHQ9XCJjYW1lcmEg7Lm066mU6528XCJcclxuICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5QQVRIfS9pbWFnZXMvdXBsb2FkLnN2Z2B9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTWFpbkJ0bi5JbWdXcmFwcGVyPlxyXG4gICAgICAgIDxNYWluQnRuLlRleHRXcmFwcGVyPlxyXG4gICAgICAgICAgPE1haW5CdG4uSDE+7IKs7KeEIOyXheuhnOuTnCDrsKnsi508L01haW5CdG4uSDE+XHJcbiAgICAgICAgICA8TWFpbkJ0bi5QPuyCrOynhOydgCDsoIDsnqXrkJjsp4Ag7JWK7Iq164uI64ukLjwvTWFpbkJ0bi5QPlxyXG4gICAgICAgIDwvTWFpbkJ0bi5UZXh0V3JhcHBlcj5cclxuICAgICAgPC9NYWluQnRuLk1pZGRsZVdyYXBwZXI+XHJcbiAgICA8L01haW5CdG4uV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkTW9kZTtcclxuIiwiaW1wb3J0IE1haW5CdG4gZnJvbSAnLi9NYWluQnRuJztcclxuaW1wb3J0IFN0cmVhbSBmcm9tICcuL1N0cmVhbSc7XHJcbmltcG9ydCB7IERlYm91bmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvRGVib3VuY2UnO1xyXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBWaWRlb01vZGUgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICAvLyB2YXIgc3RvcmUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6U3RvcmVTdGF0ZSk9PiBzdGF0ZS5Db2xvclJlZHVjZXIuc3ByaW5nRmFjZUJvYXJkKVxyXG4gIGNvbnN0IGRlYiA9IERlYm91bmNlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQnRuLldyYXBwZXJcclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGRlYi5kZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgICAgICAvLyBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zZXRTY2FuVHJpZ2dlcih0cnVlKSk7XHJcbiAgICAgICAgICBTdHJlYW0oJ3NjYW4nKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8TWFpbkJ0bi5NaWRkbGVXcmFwcGVyPlxyXG4gICAgICAgIDxNYWluQnRuLkltZ1dyYXBwZXI+XHJcbiAgICAgICAgICA8TWFpbkJ0bi5DYW1JbWdcclxuICAgICAgICAgICAgYWx0PVwiY2FtZXJhIOy5tOuplOudvFwiXHJcbiAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuUEFUSH0vaW1hZ2VzL2NhbWVyYS5zdmdgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L01haW5CdG4uSW1nV3JhcHBlcj5cclxuICAgICAgICA8TWFpbkJ0bi5UZXh0V3JhcHBlcj5cclxuICAgICAgICAgIDxNYWluQnRuLkgxPuyLpOyLnOqwhCDsuKHsoJUg67Cp7IudPC9NYWluQnRuLkgxPlxyXG4gICAgICAgICAgPE1haW5CdG4uUD7quLDsooXsl5Ag65Sw6528IOuLpOyGjCDripDrprQg7IiYIOyeiOyKteuLiOuLpC48L01haW5CdG4uUD5cclxuICAgICAgICAgIHsvKiA8TWFpbkJ0bi5IMT7slYzroKTrk5zrpr3ri4jri6QhPC9NYWluQnRuLkgxPlxyXG4gICAgICAgICAgPE1haW5CdG4uUD5cclxuICAgICAgICAgICAg642UIOygle2Zle2VnCDsnbjqs7Xsp4DriqXsnYQg66eM65Ok6riwIOychO2VtCA8YnI+PC9icj7snqDsi5zrj5nslYgg7J6Q6rCA7KeE64uoIOq4sOuKpeunjOydtFxyXG4gICAgICAgICAgICDsoJzqs7XrkKnri4jri6QuXHJcbiAgICAgICAgICA8L01haW5CdG4uUD4gKi99XHJcbiAgICAgICAgPC9NYWluQnRuLlRleHRXcmFwcGVyPlxyXG4gICAgICA8L01haW5CdG4uTWlkZGxlV3JhcHBlcj5cclxuICAgIDwvTWFpbkJ0bi5XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb01vZGU7XHJcbiIsImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi91dGlscy90aGVtZSc7XHJcbmltcG9ydCBEZWZhdWx0QnRuIGZyb20gJy4uL0RlZmF1bHRCdG4nO1xyXG5pbXBvcnQgU3RyZWFtIGZyb20gJy4uL2hvbWUvU3RyZWFtJztcclxuaW1wb3J0IFRlc3RFeHBsYWluIGZyb20gJy4uL2hvbWUvVGVzdEV4cGxhaW4nO1xyXG5pbXBvcnQgTm9CZ1RpdGxlIGZyb20gJy4uL05vQmdUaXRsZSc7XHJcbmltcG9ydCBNYXNrU2xpZGVyIGZyb20gJy4vTWFza1NsaWRlcic7XHJcbmltcG9ydCB7IERlYm91bmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvRGVib3VuY2UnO1xyXG5pbXBvcnQgeyBDYW52YXMsIFZpZGVvIH0gZnJvbSAnLi4vLi4vcGFnZXMnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYxMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MTBweCkge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbi8vIGNvbnN0IE1haW5XcmFwcGVyID0gc3R5bGVkKHRoZW1lLmNvbHVtbldyYXBwZXIpYFxyXG4vLyAgd2lkdGggOiAxMDAlO1xyXG4vLyBgXHJcblxyXG5jb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbmA7XHJcblxyXG5jb25zdCBNYXNrUmVjb21tZW5kID0gKCk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZGViID0gRGVib3VuY2UoKTtcclxuICBjb25zdCBtYXNrT24gPSAoKSA9PlxyXG4gICAgZGViLmRlYm91bmNlKCgpID0+IHtcclxuICAgICAgU3RyZWFtKCdtYXNrJyk7XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRoZW1lLmNvbHVtbldyYXBwZXIgaWQ9XCJtYXNrQ29udGFpbmVyXCI+XHJcbiAgICAgIDxOb0JnVGl0bGUgcmlnaHRUZXh0PVwi7LaU7LKcIOuniOyKpO2BrFwiIC8+XHJcbiAgICAgIDxEZWZhdWx0QnRuIGlkPVwibWFza0J0blwiIG9uQ2xpY2s9e21hc2tPbn0+XHJcbiAgICAgICAg6rCA7IOBIOuniOyKpO2BrCDssKnsmqntlbTrs7TquLBcclxuICAgICAgPC9EZWZhdWx0QnRuPlxyXG4gICAgICA8V3JhcHBlciBpZD1cInRlc3RXcmFwcGVyXCI+XHJcbiAgICAgICAgPENhbnZhcyBjbGFzc05hbWU9XCJmYWNlQ2FudmFzXCIgaWQ9XCJkcmF3aW5nQ2FudmFzXCIgLz5cclxuICAgICAgICA8VmlkZW8gaWQ9XCJ2aWRlb1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgYXV0b1BsYXkgbXV0ZWQgcGxheXNJbmxpbmUgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgaWQ9XCJpbWFnZUlucHV0XCJcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEltZyBpZD1cImZhY2VJbWFnZVwiIGNsYXNzTmFtZT1cImZhY2VDYW52YXNcIiAvPlxyXG4gICAgICAgIDxUZXN0RXhwbGFpbiAvPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICAgIDxNYXNrU2xpZGVyIC8+XHJcbiAgICA8L3RoZW1lLmNvbHVtbldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hc2tSZWNvbW1lbmQ7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL1Byb2dyZXNzQmFyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cCc7XHJcbi8vIGltcG9ydCBGYWNlQm9hcmRCdG5Hcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvRmFjZUJvYXJkQnRuR3JvdXAnO1xyXG5pbXBvcnQgTWV0YVRhZyBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvTWV0YVRhZyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL1JvdXRlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL0hlYWRlcic7XHJcbmltcG9ydCBNYWluQnRuV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvTWFpbkJ0bldyYXBwZXInO1xyXG5pbXBvcnQgVGVzdEV4cGxhaW4gZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL1Rlc3RFeHBsYWluJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL0xvYWRpbmcnO1xyXG5pbXBvcnQgU2Nhbk5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvU2Nhbk5vdGljZSc7XHJcbmltcG9ydCBNTF9Mb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9NTF9Mb2FkaW5nJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCBNYWluSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL01haW5JbWFnZSc7XHJcbmltcG9ydCBNaWRkbGVJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9NaWRkbGVJbmZvJztcclxuaW1wb3J0IE5ld0ZhY2VCb2FyZEJ0bkdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9OZXdGYWNlQm9hcmRCdG5Hcm91cCc7XHJcblxyXG5jb25zdCBNYWluQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIEBtZWRpYSAobWF4LWhlaWdodDogNTY4cHgpIHtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogdW5zZXQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBWaWRlbyA9IHN0eWxlZC52aWRlb2BcclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDYW52YXMgPSBzdHlsZWQuY2FudmFzYFxyXG4gIHotaW5kZXg6IDk5NztcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuYDtcclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbiAgb3BhY2l0eTogMDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICB3aWR0aDogNjUwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MTBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gU3RyZWFtQ2hlY2soKVxyXG4gICAgLy8gUHJvbWlzZS5hbGwoW1xyXG4gICAgLy8gICBmYWNlYXBpLm5ldHMudGlueUZhY2VEZXRlY3Rvci5sb2FkRnJvbVVyaShgJHtwcm9jZXNzLmVudi5QQVRIfS9tb2RlbHNgKSxcclxuICAgIC8vICAgZmFjZWFwaS5uZXRzLmZhY2VMYW5kbWFyazY4VGlueU5ldC5sb2FkRnJvbVVyaShgJHtwcm9jZXNzLmVudi5QQVRIfS9tb2RlbHNgKSxcclxuICAgIC8vIF0pLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiIC8v66qo64247J20IOuhnOuTnOuQmOuptCDroZzrlKkg64GE6riwXHJcbiAgICAvLyB9KVxyXG4gICAgZG9jdW1lbnQuYm9keS5wYXJlbnRFbGVtZW50IS5zdHlsZS5mb250U2l6ZSA9ICcxMHB4JztcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLnNyYyA9IGAke3Byb2Nlc3MuZW52LlBBVEh9L2ltYWdlcy9iYWNrZ3JvdW5kLnN2Z2A7XHJcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Cb2R5Jyk7XHJcbiAgICAgIGJvZHkhLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWcuc3JjfSlgO1xyXG4gICAgICBib2R5IS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfTtcclxuICAgIC8vIGxldCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcclxuICAgIC8vIGlmKHVzZXJBZ2VudC5pbmRleE9mKCdrYWthb3RhbGsnKT4gLTEpe1xyXG4gICAgLy8gICBhbGVydChcIuyduOyVseu4jOudvOyasOyggOqwgCDsi6Tsi5zqsIQg7Iqk7LqUIOq4sOuKpeydhCDsp4Dsm5DtlZjsp4Ag7JWK7JWEIOq4sOuzuOu4jOudvOyasOyggOuhnCDsnbTrj5ntlanri4jri6RcIilcclxuICAgIC8vICAgd2luZG93Lm9wZW4oXCJodHRwczovL3VybG9wZW4ubGluay9teWNvbG9ydGVzdC5tbFwiKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJXcmFwcGVyXCIpLmlubmVyVGV4dCA9IHVhXHJcbiAgICAvLyBpZigvbW9iaWxlL2kudGVzdCh1YSkgfHwgL2luYXBwfGtha2FvdGFsa3xsaW5lXFwvfGZiX2lhYlxcL2ZhNGF8ZmJhblxcL2ZiaW9zfGluc3RhZ3JhbXxkYXVtZGV2aWNlXFwvbW9iaWxlfHNhbXN1bmdicm93c2VyXFwvW14xXS9pLnRlc3QodWEpKVxyXG4gICAgLy8gd2luZG93Lm9wZW4oXCJodHRwczovL3VybG9wZW4ubGluay9teWNvbG9ydGVzdC5tbC9cIilcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNjYW5Ob3RpY2UgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUuQ29sb3JSZWR1Y2VyLnNjYW5UcmlnZ2VyLFxyXG4gICk7XHJcbiAgY29uc3Qgc2NhblN0YXJ0ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLkNvbG9yUmVkdWNlci5zY2FuU3RhcnQsXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQm9keSBpZD1cIm1haW5Cb2R5XCI+XHJcbiAgICAgIDxNTF9Mb2FkaW5nIC8+XHJcbiAgICAgIHtzY2FuTm90aWNlID8gPFNjYW5Ob3RpY2UgLz4gOiAnJ31cclxuICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgPE1ldGFUYWcgLz5cclxuICAgICAgPFJvdXRlciAvPlxyXG4gICAgICA8UG9wdXAgLz5cclxuICAgICAgey8qIO2FjOyKpO2KuCDrk6TslrTqsIDquLDsoIQgdWkgKi99XHJcbiAgICAgIDxIZWFkZXJXcmFwcGVyIGlkPVwiaGVhZGVyV3JhcHBlclwiPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8TWFpbkltYWdlIC8+XHJcbiAgICAgICAgPE1pZGRsZUluZm8gLz5cclxuICAgICAgICA8TWFpbkJ0bldyYXBwZXIgLz5cclxuICAgICAgPC9IZWFkZXJXcmFwcGVyPlxyXG4gICAgICB7Lyog7YWM7Iqk7Yq4IOuyhO2KvOydhCDriITrpbTrqbQg64KY7YOA64KY64qUIHVpICovfVxyXG4gICAgICA8V3JhcHBlciBpZD1cInRlc3RXcmFwcGVyXCI+XHJcbiAgICAgICAgPENhbnZhcyBjbGFzc05hbWU9XCJmYWNlQ2FudmFzXCIgaWQ9XCJkcmF3aW5nQ2FudmFzXCIgLz5cclxuICAgICAgICA8VmlkZW8gaWQ9XCJ2aWRlb1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgbXV0ZWQgcGxheXNJbmxpbmUgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGFjY2VwdD1cIi5qcGcsLnBuZywuZ2lmLC5qcGVnLC5ibXBcIlxyXG4gICAgICAgICAgaWQ9XCJpbWFnZUlucHV0XCJcclxuICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDxJbWcgaWQ9XCJmYWNlSW1hZ2VcIiBjbGFzc05hbWU9XCJmYWNlQ2FudmFzXCIgLz5cclxuICAgICAgICA8UHJvZ3Jlc3NCYXIgLz5cclxuICAgICAgICA8VGVzdEV4cGxhaW4gLz5cclxuXHJcbiAgICAgICAge3NjYW5TdGFydCA/IDxOZXdGYWNlQm9hcmRCdG5Hcm91cCAvPiA6ICcnfVxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICA8L01haW5Cb2R5PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==