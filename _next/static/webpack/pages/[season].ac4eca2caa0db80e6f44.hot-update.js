self["webpackHotUpdate_N_E"]("pages/[season]",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/theme */ "./utils/theme.ts");
/* harmony import */ var _DefaultBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DefaultBtn */ "./components/DefaultBtn.tsx");
/* harmony import */ var _home_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/Stream */ "./components/home/Stream.ts");
/* harmony import */ var _home_TestExplain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/TestExplain */ "./components/home/TestExplain.tsx");
/* harmony import */ var _NoBgTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NoBgTitle */ "./components/NoBgTitle.tsx");
/* harmony import */ var _MaskSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MaskSlider */ "./components/resultPage/MaskSlider.tsx");
/* harmony import */ var _utils_Debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/Debounce */ "./utils/Debounce.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\JAEHOON\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uD504\uB85C\uC81D\uD2B8\\test2\\mycolor-ts-next\\components\\resultPage\\MaskRecommend.tsx",
    _this = undefined;

function _templateObject3() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  display: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  position: relative;\n  opacity: 0;\n  transition: all 0.5s ease-out;\n  @media (min-width: 1025px) {\n    width: 650px;\n  }\n  @media (min-width: 610px) and (max-width: 1024px) {\n    width: 600px;\n  }\n  @media (max-width: 610px) {\n    width: 320px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_JAEHOON_OneDrive_test2_mycolor_ts_next_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  object-fit: fill;\n  transform: scale(-1, 1);\n  display: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Video = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.video(_templateObject());
_c = Video;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.article(_templateObject2()); // const MainWrapper = styled(theme.columnWrapper)`
//  width : 100%;
// `

_c2 = Wrapper;
var Img = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.img(_templateObject3());
_c3 = Img;

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
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DefaultBtn__WEBPACK_IMPORTED_MODULE_3__.default, {
      id: "maskBtn",
      onClick: maskOn,
      children: "\uAC00\uC0C1 \uB9C8\uC2A4\uD06C \uCC29\uC6A9\uD574\uBCF4\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      id: "testWrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Canvas, {
        className: "faceCanvas",
        id: "drawingCanvas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Video, {
        id: "video",
        width: "400",
        height: "400",
        autoPlay: true,
        muted: true,
        playsInline: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
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
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        id: "faceImage",
        className: "faceCanvas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_TestExplain__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MaskSlider__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_c4 = MaskRecommend;
/* harmony default export */ __webpack_exports__["default"] = (MaskRecommend);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Video");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "Img");
$RefreshReg$(_c4, "MaskRecommend");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bHRQYWdlL01hc2tSZWNvbW1lbmQudHN4Il0sIm5hbWVzIjpbIlZpZGVvIiwic3R5bGVkIiwiV3JhcHBlciIsIkltZyIsIk1hc2tSZWNvbW1lbmQiLCJkZWIiLCJEZWJvdW5jZSIsIm1hc2tPbiIsImRlYm91bmNlIiwiU3RyZWFtIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLDREQUFILG1CQUFYO0tBQU1ELEs7QUFLTixJQUFNRSxPQUFPLEdBQUdELDhEQUFILG9CQUFiLEMsQ0FlQTtBQUNBO0FBQ0E7O01BakJNQyxPO0FBbUJOLElBQU1DLEdBQUcsR0FBR0YsMERBQUgsb0JBQVQ7TUFBTUUsRzs7QUFJTixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQW9CO0FBQ3hDLE1BQU1DLEdBQUcsR0FBR0MseURBQVEsRUFBcEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUNiRixHQUFHLENBQUNHLFFBQUosQ0FBYSxZQUFNO0FBQ2pCQywyREFBTSxDQUFDLE1BQUQsQ0FBTjtBQUNELEtBRkQsRUFFRyxHQUZILENBRGE7QUFBQSxHQUFmOztBQUtBLHNCQUNFLDhEQUFDLCtEQUFEO0FBQXFCLE1BQUUsRUFBQyxlQUF4QjtBQUFBLDRCQUNFLDhEQUFDLCtDQUFEO0FBQVcsZUFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLGdEQUFEO0FBQVksUUFBRSxFQUFDLFNBQWY7QUFBeUIsYUFBTyxFQUFFRixNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBS0UsOERBQUMsT0FBRDtBQUFTLFFBQUUsRUFBQyxhQUFaO0FBQUEsOEJBQ0UsOERBQUMsTUFBRDtBQUFRLGlCQUFTLEVBQUMsWUFBbEI7QUFBK0IsVUFBRSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLEtBQUQ7QUFBTyxVQUFFLEVBQUMsT0FBVjtBQUFrQixhQUFLLEVBQUMsS0FBeEI7QUFBOEIsY0FBTSxFQUFDLEtBQXJDO0FBQTJDLGdCQUFRLE1BQW5EO0FBQW9ELGFBQUssTUFBekQ7QUFBMEQsbUJBQVc7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGNBQU0sRUFBQyxTQUZUO0FBR0UsVUFBRSxFQUFDLFlBSEw7QUFJRSxhQUFLLEVBQUU7QUFBRUcsaUJBQU8sRUFBRTtBQUFYO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBU0UsOERBQUMsR0FBRDtBQUFLLFVBQUUsRUFBQyxXQUFSO0FBQW9CLGlCQUFTLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBVUUsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBaUJFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0E1QkQ7O01BQU1OLGE7QUE4Qk4sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3NlYXNvbl0uYWM0ZWNhMmNhYTBkYjgwZTZmNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi91dGlscy90aGVtZSc7XHJcbmltcG9ydCBEZWZhdWx0QnRuIGZyb20gJy4uL0RlZmF1bHRCdG4nO1xyXG5pbXBvcnQgU3RyZWFtIGZyb20gJy4uL2hvbWUvU3RyZWFtJztcclxuaW1wb3J0IFRlc3RFeHBsYWluIGZyb20gJy4uL2hvbWUvVGVzdEV4cGxhaW4nO1xyXG5pbXBvcnQgTm9CZ1RpdGxlIGZyb20gJy4uL05vQmdUaXRsZSc7XHJcbmltcG9ydCBNYXNrU2xpZGVyIGZyb20gJy4vTWFza1NsaWRlcic7XHJcbmltcG9ydCB7IERlYm91bmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvRGVib3VuY2UnO1xyXG5cclxuY29uc3QgVmlkZW8gPSBzdHlsZWQudmlkZW9gXHJcbiAgb2JqZWN0LWZpdDogZmlsbDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuICBkaXNwbGF5OiBub25lO1xyXG5gO1xyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmFydGljbGVgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNjEwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gY29uc3QgTWFpbldyYXBwZXIgPSBzdHlsZWQodGhlbWUuY29sdW1uV3JhcHBlcilgXHJcbi8vICB3aWR0aCA6IDEwMCU7XHJcbi8vIGBcclxuXHJcbmNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgZGlzcGxheTogbm9uZTtcclxuYDtcclxuXHJcbmNvbnN0IE1hc2tSZWNvbW1lbmQgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBkZWIgPSBEZWJvdW5jZSgpO1xyXG4gIGNvbnN0IG1hc2tPbiA9ICgpID0+XHJcbiAgICBkZWIuZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICBTdHJlYW0oJ21hc2snKTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGhlbWUuY29sdW1uV3JhcHBlciBpZD1cIm1hc2tDb250YWluZXJcIj5cclxuICAgICAgPE5vQmdUaXRsZSByaWdodFRleHQ9XCLstpTsspwg66eI7Iqk7YGsXCIgLz5cclxuICAgICAgPERlZmF1bHRCdG4gaWQ9XCJtYXNrQnRuXCIgb25DbGljaz17bWFza09ufT5cclxuICAgICAgICDqsIDsg4Eg66eI7Iqk7YGsIOywqeyaqe2VtOuztOq4sFxyXG4gICAgICA8L0RlZmF1bHRCdG4+XHJcbiAgICAgIDxXcmFwcGVyIGlkPVwidGVzdFdyYXBwZXJcIj5cclxuICAgICAgICA8Q2FudmFzIGNsYXNzTmFtZT1cImZhY2VDYW52YXNcIiBpZD1cImRyYXdpbmdDYW52YXNcIiAvPlxyXG4gICAgICAgIDxWaWRlbyBpZD1cInZpZGVvXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIiBhdXRvUGxheSBtdXRlZCBwbGF5c0lubGluZSAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBpZD1cImltYWdlSW5wdXRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW1nIGlkPVwiZmFjZUltYWdlXCIgY2xhc3NOYW1lPVwiZmFjZUNhbnZhc1wiIC8+XHJcbiAgICAgICAgPFRlc3RFeHBsYWluIC8+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgICAgPE1hc2tTbGlkZXIgLz5cclxuICAgIDwvdGhlbWUuY29sdW1uV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFza1JlY29tbWVuZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==