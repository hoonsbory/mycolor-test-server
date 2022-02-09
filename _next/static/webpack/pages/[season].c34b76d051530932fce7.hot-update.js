self["webpackHotUpdate_N_E"]("pages/[season]",{

/***/ "./components/home/Stream.ts":
/*!***********************************!*\
  !*** ./components/home/Stream.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Stream; }
/* harmony export */ });
/* harmony import */ var _StreamCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StreamCanvas */ "./components/home/StreamCanvas.ts");
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageUpload */ "./components/home/ImageUpload.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _store_colorStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/colorStore */ "./store/colorStore.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




function Stream(faceBoard) {
  var video = document.getElementById('video');
  var loading = document.getElementById('ML_Loading');
  document.getElementById('testExplain').innerText = '인공지능을 불러오고 있습니다.';
  var ua = navigator.userAgent; // loading.style.display = 'block';

  if (/fb/i.test(ua) && !/fbios/i.test(ua)) {
    var floatOs = 0;
    var osInfo;
    var realOs;

    if (ua.indexOf('FBSV') > -1) {
      osInfo = ua.split('FBSV')[1];
      realOs = osInfo.substring(1, 3) + '.' + osInfo.substring(4, 5);
      floatOs = parseFloat(realOs);
    } else {
      osInfo = ua.split('OS')[1];
      realOs = osInfo.substring(1, 3) + '.' + osInfo.substring(4, 5); //ios버전 추출해서 실수형으로.

      floatOs = parseFloat(realOs);
    }

    if (floatOs < 13.4) {
      window.open('x-web-search://?mycolor.kr');
      return;
    }
  } // if (/fb|instagram|kakaotalk/i.test(ua)) {
  //     loading.style.display = 'none'
  //     alert("원활한 측정을 위해 기본 브라우저로 이동합니다.")
  //     if(/ipad|iphone/i.test(ua))
  //     window.open("https://urlopen.link/mycolor.kr")
  //     else
  //     window.open("intent://mycolor.kr#Intent;scheme=http;package=com.android.chrome;end")
  //     return
  // }
  // window.open("x-web-search://?마이퍼스널컬러")


  if (localStorage.getItem('isScanPossible') === 'false') {
    if (confirm('기기의 사양이 좋지 않아 원활한 측정이 힘듭니다. 확인을 누르시면 이미지 업로드 방식으로 전환합니다. 취소를 누르시면 그대로 진행합니다.')) {
      noCam();
      return;
    }
  }

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //사파리는 해상도가 자동으로 조절되기때문에 해상도를 설정해주면 에러가난다. 그래서 사파리는 설정을 안해줘야하는데,
    //기기 정보를 받아올때 크롬에는 사파리 크롬이 다 적혀있고, 사파리에는 사파리만 적혀있으므로 사파리를 특정하기 위해서는
    //사파리 문자를 포함하고 크롬 문자를 포함하지않는 조건을 충족시켜줘야한다
    if (ua.indexOf('Safari') != -1 && ua.indexOf('Chrome') == -1) {
      navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          frameRate: {
            ideal: 60
          }
        }
      }).then(function (stream) {
        video.srcObject = stream;
        if (faceBoard == 'scan') _store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_store_colorStore__WEBPACK_IMPORTED_MODULE_3__.actionCreators.setScanTrigger(true)); //video.src = window.URL.createObjectURL(stream);
        else (0,_StreamCanvas__WEBPACK_IMPORTED_MODULE_0__.default)(faceBoard);
      })["catch"](function (err) {
        //err은 문자열이 아니기 때문에 문자열로 만들어줘야 indexOf가 가능
        err = err + '';
        noCam();
      });
    } else {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({
        video: {
          width: {
            min: 0,
            ideal: 1430
          },
          height: {
            min: 0,
            ideal: 1050
          },
          frameRate: {
            ideal: 60
          },
          facingMode: 'user'
        }
      }).then(function (stream) {
        video.srcObject = stream;
        if (faceBoard == 'mask') _store__WEBPACK_IMPORTED_MODULE_2__.default.dispatch(_store_colorStore__WEBPACK_IMPORTED_MODULE_3__.actionCreators.setScanTrigger(true));else (0,_StreamCanvas__WEBPACK_IMPORTED_MODULE_0__.default)(faceBoard);
        return; // noCam(err)
        //video.src = window.URL.createObjectURL(stream);
      })["catch"](function (err) {
        err += '';
        noCam(err);
      });
    }
  } // else if (navigator.getUserMedia) {
  //   // Standard
  //   navigator.getUserMedia(
  //     {
  //       video: {
  //         width: { min: 0, ideal: 1280, max: 2560 },
  //         height: { min: 0, ideal: 894, max: 1788 },
  //         facingMode: 'user',
  //       },
  //     },
  //     function (stream) {
  //       video.src = stream;
  //       video.play();
  //       StreamCanvas(faceBoard);
  //     },
  //     err => {
  //       err += '';
  //       noCam(err);
  //     },
  //   );
  // } else if (navigator.webkitGetUserMedia) {
  //   // WebKit-prefixed
  //   navigator.webkitGetUserMedia(
  //     {
  //       video: {
  //         width: { min: 0, ideal: 1280, max: 2560 },
  //         height: { min: 0, ideal: 894, max: 1788 },
  //         facingMode: 'user',
  //       },
  //     },
  //     function (stream) {
  //       video.src = window.webkitURL.createObjectURL(stream);
  //       video.play();
  //       StreamCanvas(faceBoard);
  //     },
  //     err => {
  //       err += '';
  //       noCam(err);
  //     },
  //   );
  // } else if (navigator.mozGetUserMedia) {
  //   // Mozilla-prefixed
  //   navigator.mozGetUserMedia(
  //     {
  //       video: {
  //         width: { min: 0, ideal: 1280, max: 2560 },
  //         height: { min: 0, ideal: 894, max: 1788 },
  //         facingMode: 'user',
  //       },
  //     },
  //     function (stream) {
  //       video.srcObject = stream;
  //       video.play();
  //       StreamCanvas(faceBoard);
  //     },
  //     err => {
  //       err += '';
  //       noCam(err);
  //     },
  //   );
  // }
  else {
      noCam();
    }

  function noCam() {
    var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
    console.log(err);
    loading.style.display = 'none';

    if (faceBoard != 'scan') {
      (0,_ImageUpload__WEBPACK_IMPORTED_MODULE_1__.default)(faceBoard);
      return;
    }

    var isMobile = /mobile/i.test(ua);
    if (/crios/i.test(ua)) alert('지원하지 않는 브라우저입니다. safari로 접속해주세요.');else if (/denied/i.test(err)) {
      if (/kakaotalk/i.test(ua)) {
        if (confirm('지원하지 않는 브라우저거나 카메라 권한을 차단하셨습니다. 외부 브라우저로 연결하시겠습니까?')) {
          if (/iphone|ipad/i.test(ua)) {
            window.open('https://urlopen.link/mycolor.kr');
          } else window.open('intent://mycolor.kr#Intent;scheme=http;package=com.android.chrome;end');
        }
      } else alert('카메라 권한을 차단하셨습니다. 브라우저 설정에서 허용으로 바꿔주세요.');
    } else if (isMobile) {
      if (confirm('지원하지 않는 브라우저거나 카메라 권한을 차단하셨습니다. 외부 브라우저로 연결하시겠습니까?')) {
        if (/iphone|ipad/i.test(ua)) {
          window.open('https://urlopen.link/mycolor.kr');
        } else window.open('intent://mycolor.kr#Intent;scheme=http;package=com.android.chrome;end');
      }
    } else {
      (0,_ImageUpload__WEBPACK_IMPORTED_MODULE_1__.default)(faceBoard);
    }
  }
}
_c = Stream;

var _c;

$RefreshReg$(_c, "Stream");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1N0cmVhbS50cyJdLCJuYW1lcyI6WyJTdHJlYW0iLCJmYWNlQm9hcmQiLCJ2aWRlbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2FkaW5nIiwiaW5uZXJUZXh0IiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0ZXN0IiwiZmxvYXRPcyIsIm9zSW5mbyIsInJlYWxPcyIsImluZGV4T2YiLCJzcGxpdCIsInN1YnN0cmluZyIsInBhcnNlRmxvYXQiLCJ3aW5kb3ciLCJvcGVuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbmZpcm0iLCJub0NhbSIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImZhY2luZ01vZGUiLCJmcmFtZVJhdGUiLCJpZGVhbCIsInRoZW4iLCJzdHJlYW0iLCJzcmNPYmplY3QiLCJzdG9yZSIsImFjdGlvbkNyZWF0b3JzIiwiU3RyZWFtQ2FudmFzIiwiZXJyIiwid2lkdGgiLCJtaW4iLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJkaXNwbGF5IiwiSW1hZ2VVcGxvYWQiLCJpc01vYmlsZSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLFNBQWhCLEVBQXlDO0FBQ3RELE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFoQjtBQUNBRCxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBd0NFLFNBQXhDLEdBQ0Usa0JBREY7QUFFQSxNQUFNQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0MsU0FBckIsQ0FMc0QsQ0FPdEQ7O0FBRUEsTUFBSSxNQUFNQyxJQUFOLENBQVdILEVBQVgsS0FBa0IsQ0FB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QUNBLFFBQUksU0FBU0csSUFBVCxDQUFjSCxFQUFkLENBQUosRUFDRXNDLEtBQUssQ0FBQyxrQ0FBRCxDQUFMLENBREYsS0FFSyxJQUFJLFVBQVVuQyxJQUFWLENBQWV5QixHQUFmLENBQUosRUFBeUI7QUFDNUIsVUFBSSxhQUFhekIsSUFBYixDQUFrQkgsRUFBbEIsQ0FBSixFQUEyQjtBQUN6QixZQUNFZSxPQUFPLENBQ0wsb0RBREssQ0FEVCxFQUlFO0FBQ0EsY0FBSSxlQUFlWixJQUFmLENBQW9CSCxFQUFwQixDQUFKLEVBQTZCO0FBQzNCVyxrQkFBTSxDQUFDQyxJQUFQLENBQVksaUNBQVo7QUFDRCxXQUZELE1BR0VELE1BQU0sQ0FBQ0MsSUFBUCxDQUNFLHVFQURGO0FBR0g7QUFDRixPQWJELE1BY0UwQixLQUFLLENBQ0gsd0NBREcsQ0FBTDtBQUdILEtBbEJJLE1Ba0JFLElBQUlELFFBQUosRUFBYztBQUNuQixVQUNFdEIsT0FBTyxDQUNMLG9EQURLLENBRFQsRUFJRTtBQUNBLFlBQUksZUFBZVosSUFBZixDQUFvQkgsRUFBcEIsQ0FBSixFQUE2QjtBQUMzQlcsZ0JBQU0sQ0FBQ0MsSUFBUCxDQUFZLGlDQUFaO0FBQ0QsU0FGRCxNQUdFRCxNQUFNLENBQUNDLElBQVAsQ0FDRSx1RUFERjtBQUdIO0FBQ0YsS0FiTSxNQWFBO0FBQ0x3QiwyREFBVyxDQUFDMUMsU0FBRCxDQUFYO0FBQ0Q7QUFDRjtBQUNGO0tBdk51QkQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bc2Vhc29uXS5jMzRiNzZkMDUxNTMwOTMyZmNlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmVhbUNhbnZhcyBmcm9tICcuL1N0cmVhbUNhbnZhcyc7XHJcbmltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuL0ltYWdlVXBsb2FkJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9jb2xvclN0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0cmVhbShmYWNlQm9hcmQ6IHN0cmluZyk6IHZvaWQge1xyXG4gIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJykgYXMgSFRNTFZpZGVvRWxlbWVudDtcclxuICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01MX0xvYWRpbmcnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdEV4cGxhaW4nKSEuaW5uZXJUZXh0ID1cclxuICAgICfsnbjqs7Xsp4DriqXsnYQg67aI65+s7Jik6rOgIOyeiOyKteuLiOuLpC4nO1xyXG4gIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHJcbiAgLy8gbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgaWYgKC9mYi9pLnRlc3QodWEpICYmICEvZmJpb3MvaS50ZXN0KHVhKSkge1xyXG4gICAgbGV0IGZsb2F0T3MgPSAwO1xyXG4gICAgbGV0IG9zSW5mbztcclxuICAgIGxldCByZWFsT3M7XHJcbiAgICBpZiAodWEuaW5kZXhPZignRkJTVicpID4gLTEpIHtcclxuICAgICAgb3NJbmZvID0gdWEuc3BsaXQoJ0ZCU1YnKVsxXTtcclxuICAgICAgcmVhbE9zID0gb3NJbmZvLnN1YnN0cmluZygxLCAzKSArICcuJyArIG9zSW5mby5zdWJzdHJpbmcoNCwgNSk7XHJcbiAgICAgIGZsb2F0T3MgPSBwYXJzZUZsb2F0KHJlYWxPcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvc0luZm8gPSB1YS5zcGxpdCgnT1MnKVsxXTtcclxuICAgICAgcmVhbE9zID0gb3NJbmZvLnN1YnN0cmluZygxLCAzKSArICcuJyArIG9zSW5mby5zdWJzdHJpbmcoNCwgNSk7XHJcblxyXG4gICAgICAvL2lvc+uyhOyghCDstpTstpztlbTshJwg7Iuk7IiY7ZiV7Jy866GcLlxyXG4gICAgICBmbG9hdE9zID0gcGFyc2VGbG9hdChyZWFsT3MpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZsb2F0T3MgPCAxMy40KSB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKCd4LXdlYi1zZWFyY2g6Ly8/bXljb2xvci5rcicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGlmICgvZmJ8aW5zdGFncmFtfGtha2FvdGFsay9pLnRlc3QodWEpKSB7XHJcbiAgLy8gICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIC8vICAgICBhbGVydChcIuybkO2ZnO2VnCDsuKHsoJXsnYQg7JyE7ZW0IOq4sOuzuCDruIzrnbzsmrDsoIDroZwg7J2064+Z7ZWp64uI64ukLlwiKVxyXG4gIC8vICAgICBpZigvaXBhZHxpcGhvbmUvaS50ZXN0KHVhKSlcclxuICAvLyAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3VybG9wZW4ubGluay9teWNvbG9yLmtyXCIpXHJcbiAgLy8gICAgIGVsc2VcclxuICAvLyAgICAgd2luZG93Lm9wZW4oXCJpbnRlbnQ6Ly9teWNvbG9yLmtyI0ludGVudDtzY2hlbWU9aHR0cDtwYWNrYWdlPWNvbS5hbmRyb2lkLmNocm9tZTtlbmRcIilcclxuICAvLyAgICAgcmV0dXJuXHJcbiAgLy8gfVxyXG4gIC8vIHdpbmRvdy5vcGVuKFwieC13ZWItc2VhcmNoOi8vP+uniOydtO2NvOyKpOuEkOy7rOufrFwiKVxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNTY2FuUG9zc2libGUnKSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgaWYgKFxyXG4gICAgICBjb25maXJtKFxyXG4gICAgICAgICfquLDquLDsnZgg7IKs7JaR7J20IOyii+yngCDslYrslYQg7JuQ7Zmc7ZWcIOy4oeygleydtCDtnpjrk63ri4jri6QuIO2ZleyduOydhCDriITrpbTsi5zrqbQg7J2066+47KeAIOyXheuhnOuTnCDrsKnsi53snLzroZwg7KCE7ZmY7ZWp64uI64ukLiDst6jshozrpbwg64iE66W07Iuc66m0IOq3uOuMgOuhnCDsp4Ttlontlanri4jri6QuJyxcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIG5vQ2FtKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcclxuICAgIC8v7IKs7YyM66as64qUIO2VtOyDgeuPhOqwgCDsnpDrj5nsnLzroZwg7KGw7KCI65CY6riw65WM66y47JeQIO2VtOyDgeuPhOulvCDshKTsoJXtlbTso7zrqbQg7JeQ65+s6rCA64Kc64ukLiDqt7jrnpjshJwg7IKs7YyM66as64qUIOyEpOygleydhCDslYjtlbTspJjslbztlZjripTrjbAsXHJcbiAgICAvL+q4sOq4sCDsoJXrs7Trpbwg67Cb7JWE7Jis65WMIO2BrOuhrOyXkOuKlCDsgqztjIzrpqwg7YGs66Gs7J20IOuLpCDsoIHtmIDsnojqs6AsIOyCrO2MjOumrOyXkOuKlCDsgqztjIzrpqzrp4wg7KCB7ZiA7J6I7Jy866+A66GcIOyCrO2MjOumrOulvCDtirnsoJXtlZjquLAg7JyE7ZW07ISc64qUXHJcbiAgICAvL+yCrO2MjOumrCDrrLjsnpDrpbwg7Y+s7ZWo7ZWY6rOgIO2BrOuhrCDrrLjsnpDrpbwg7Y+s7ZWo7ZWY7KeA7JWK64qUIOyhsOqxtOydhCDstqnsobHsi5zsvJzspJjslbztlZzri6RcclxuICAgIGlmICh1YS5pbmRleE9mKCdTYWZhcmknKSAhPSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PSAtMSkge1xyXG4gICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXHJcbiAgICAgICAgLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICB2aWRlbzoge1xyXG4gICAgICAgICAgICBmYWNpbmdNb2RlOiAndXNlcicsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZToge1xyXG4gICAgICAgICAgICAgIGlkZWFsOiA2MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgICBpZiAoZmFjZUJvYXJkID09ICdzY2FuJylcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2V0U2NhblRyaWdnZXIodHJ1ZSkpO1xyXG4gICAgICAgICAgLy92aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xyXG4gICAgICAgICAgZWxzZSBTdHJlYW1DYW52YXMoZmFjZUJvYXJkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAvL2VycuydgCDrrLjsnpDsl7TsnbQg7JWE64uI6riwIOuVjOusuOyXkCDrrLjsnpDsl7TroZwg66eM65Ok7Ja07KSY7JW8IGluZGV4T2bqsIAg6rCA64qlXHJcbiAgICAgICAgICBlcnIgPSBlcnIgKyAnJztcclxuICAgICAgICAgIG5vQ2FtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBOb3QgYWRkaW5nIGB7IGF1ZGlvOiB0cnVlIH1gIHNpbmNlIHdlIG9ubHkgd2FudCB2aWRlbyBub3dcclxuICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xyXG4gICAgICAgIC5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgdmlkZW86IHtcclxuICAgICAgICAgICAgd2lkdGg6IHsgbWluOiAwLCBpZGVhbDogMTQzMCB9LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHsgbWluOiAwLCBpZGVhbDogMTA1MCB9LFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IHtcclxuICAgICAgICAgICAgICBpZGVhbDogNjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhY2luZ01vZGU6ICd1c2VyJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgICBpZiAoZmFjZUJvYXJkID09ICdtYXNrJylcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2V0U2NhblRyaWdnZXIodHJ1ZSkpO1xyXG4gICAgICAgICAgZWxzZSBTdHJlYW1DYW52YXMoZmFjZUJvYXJkKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIC8vIG5vQ2FtKGVycilcclxuICAgICAgICAgIC8vdmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICBlcnIgKz0gJyc7XHJcbiAgICAgICAgICBub0NhbShlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBlbHNlIGlmIChuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKSB7XHJcbiAgLy8gICAvLyBTdGFuZGFyZFxyXG5cclxuICAvLyAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB2aWRlbzoge1xyXG4gIC8vICAgICAgICAgd2lkdGg6IHsgbWluOiAwLCBpZGVhbDogMTI4MCwgbWF4OiAyNTYwIH0sXHJcbiAgLy8gICAgICAgICBoZWlnaHQ6IHsgbWluOiAwLCBpZGVhbDogODk0LCBtYXg6IDE3ODggfSxcclxuICAvLyAgICAgICAgIGZhY2luZ01vZGU6ICd1c2VyJyxcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBmdW5jdGlvbiAoc3RyZWFtKSB7XHJcbiAgLy8gICAgICAgdmlkZW8uc3JjID0gc3RyZWFtO1xyXG4gIC8vICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAvLyAgICAgICBTdHJlYW1DYW52YXMoZmFjZUJvYXJkKTtcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZXJyID0+IHtcclxuICAvLyAgICAgICBlcnIgKz0gJyc7XHJcbiAgLy8gICAgICAgbm9DYW0oZXJyKTtcclxuICAvLyAgICAgfSxcclxuICAvLyAgICk7XHJcbiAgLy8gfSBlbHNlIGlmIChuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKSB7XHJcbiAgLy8gICAvLyBXZWJLaXQtcHJlZml4ZWRcclxuXHJcbiAgLy8gICBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgdmlkZW86IHtcclxuICAvLyAgICAgICAgIHdpZHRoOiB7IG1pbjogMCwgaWRlYWw6IDEyODAsIG1heDogMjU2MCB9LFxyXG4gIC8vICAgICAgICAgaGVpZ2h0OiB7IG1pbjogMCwgaWRlYWw6IDg5NCwgbWF4OiAxNzg4IH0sXHJcbiAgLy8gICAgICAgICBmYWNpbmdNb2RlOiAndXNlcicsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gIC8vICAgICAgIHZpZGVvLnNyYyA9IHdpbmRvdy53ZWJraXRVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XHJcbiAgLy8gICAgICAgdmlkZW8ucGxheSgpO1xyXG4gIC8vICAgICAgIFN0cmVhbUNhbnZhcyhmYWNlQm9hcmQpO1xyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBlcnIgPT4ge1xyXG4gIC8vICAgICAgIGVyciArPSAnJztcclxuICAvLyAgICAgICBub0NhbShlcnIpO1xyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgKTtcclxuICAvLyB9IGVsc2UgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAvLyAgIC8vIE1vemlsbGEtcHJlZml4ZWRcclxuXHJcbiAgLy8gICBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgdmlkZW86IHtcclxuICAvLyAgICAgICAgIHdpZHRoOiB7IG1pbjogMCwgaWRlYWw6IDEyODAsIG1heDogMjU2MCB9LFxyXG4gIC8vICAgICAgICAgaGVpZ2h0OiB7IG1pbjogMCwgaWRlYWw6IDg5NCwgbWF4OiAxNzg4IH0sXHJcbiAgLy8gICAgICAgICBmYWNpbmdNb2RlOiAndXNlcicsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZnVuY3Rpb24gKHN0cmVhbSkge1xyXG4gIC8vICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAvLyAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgLy8gICAgICAgU3RyZWFtQ2FudmFzKGZhY2VCb2FyZCk7XHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGVyciA9PiB7XHJcbiAgLy8gICAgICAgZXJyICs9ICcnO1xyXG4gIC8vICAgICAgIG5vQ2FtKGVycik7XHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuICBlbHNlIHtcclxuICAgIG5vQ2FtKCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5vQ2FtKGVyciA9ICdkZWZhdWx0Jykge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGlmIChmYWNlQm9hcmQgIT0gJ3NjYW4nKSB7XHJcbiAgICAgIEltYWdlVXBsb2FkKGZhY2VCb2FyZCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGlzTW9iaWxlID0gL21vYmlsZS9pLnRlc3QodWEpO1xyXG4gICAgaWYgKC9jcmlvcy9pLnRlc3QodWEpKVxyXG4gICAgICBhbGVydCgn7KeA7JuQ7ZWY7KeAIOyViuuKlCDruIzrnbzsmrDsoIDsnoXri4jri6QuIHNhZmFyaeuhnCDsoJHsho3tlbTso7zshLjsmpQuJyk7XHJcbiAgICBlbHNlIGlmICgvZGVuaWVkL2kudGVzdChlcnIpKSB7XHJcbiAgICAgIGlmICgva2FrYW90YWxrL2kudGVzdCh1YSkpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjb25maXJtKFxyXG4gICAgICAgICAgICAn7KeA7JuQ7ZWY7KeAIOyViuuKlCDruIzrnbzsmrDsoIDqsbDrgpgg7Lm066mU6528IOq2jO2VnOydhCDssKjri6jtlZjshajsirXri4jri6QuIOyZuOu2gCDruIzrnbzsmrDsoIDroZwg7Jew6rKw7ZWY7Iuc6rKg7Iq164uI6rmMPycsXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoL2lwaG9uZXxpcGFkL2kudGVzdCh1YSkpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vdXJsb3Blbi5saW5rL215Y29sb3Iua3InKTtcclxuICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihcclxuICAgICAgICAgICAgICAnaW50ZW50Oi8vbXljb2xvci5rciNJbnRlbnQ7c2NoZW1lPWh0dHA7cGFja2FnZT1jb20uYW5kcm9pZC5jaHJvbWU7ZW5kJyxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgJ+y5tOuplOudvCDqtoztlZzsnYQg7LCo64uo7ZWY7IWo7Iq164uI64ukLiDruIzrnbzsmrDsoIAg7ISk7KCV7JeQ7IScIO2XiOyaqeycvOuhnCDrsJTqv5Tso7zshLjsmpQuJyxcclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChpc01vYmlsZSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY29uZmlybShcclxuICAgICAgICAgICfsp4Dsm5DtlZjsp4Ag7JWK64qUIOu4jOudvOyasOyggOqxsOuCmCDsubTrqZTrnbwg6raM7ZWc7J2EIOywqOuLqO2VmOyFqOyKteuLiOuLpC4g7Jm467aAIOu4jOudvOyasOyggOuhnCDsl7DqsrDtlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICApXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICgvaXBob25lfGlwYWQvaS50ZXN0KHVhKSkge1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vdXJsb3Blbi5saW5rL215Y29sb3Iua3InKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgIHdpbmRvdy5vcGVuKFxyXG4gICAgICAgICAgICAnaW50ZW50Oi8vbXljb2xvci5rciNJbnRlbnQ7c2NoZW1lPWh0dHA7cGFja2FnZT1jb20uYW5kcm9pZC5jaHJvbWU7ZW5kJyxcclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEltYWdlVXBsb2FkKGZhY2VCb2FyZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=