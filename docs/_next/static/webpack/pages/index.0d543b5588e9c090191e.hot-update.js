webpackHotUpdate_N_E("pages/index",{

/***/ "./sections/PresentationSection/styles.js":
/*!************************************************!*\
  !*** ./sections/PresentationSection/styles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject6() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \"\\n  text-decoration: none;\\n  font-weight: bold;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \"\\n  color: \", \";\\n\\n  text-align: justify;\\n  line-height: 2rem !important;\\n\\n  \", \" {\\n    text-align: center;\\n  }\\n\\n  margin: 0;\\n  margin-bottom: 2rem;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \"\\n  color: \", \";\\n\\n  text-align: center;\\n  margin: 0;\\n  margin-bottom: 2rem;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  padding: 0 1rem;\\n  margin: 0 auto;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  box-sizing: border-box;\\n\\n  z-index: \", \";\\n\\n  \", \"\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  height: 100vh;\\n  min-height: 576px;\\n\\n  display: flex;\\n  align-items: center;\\n\\n  &:before {\\n    content: '';\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    background: rgba(166, 166, 166, 0.8);\\n    z-index: \", \";\\n  }\\n\\n  background: url('presentation.jpg');\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat;\\n  position: relative;\\n  overflow: hidden;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject(), function (_ref) {\n  var zIndex = _ref.theme.zIndex;\n  return zIndex.presentation.fade;\n});\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2(), function (_ref2) {\n  var zIndex = _ref2.theme.zIndex;\n  return zIndex.presentation.content;\n}, function (_ref3) {\n  var breakpoints = _ref3.theme.breakpoints;\n  return \"\\n    \".concat(breakpoints.sm, \" {\\n      max-width: 540px;\\n    }\\n    \").concat(breakpoints.md, \" {\\n      max-width: 720px;\\n    }\\n    \").concat(breakpoints.lg, \" {\\n      max-width: 960px;\\n    }\\n  \");\n});\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1(_templateObject3(), function (_ref4) {\n  var typography = _ref4.theme.typography;\n  return typography.display;\n}, function (_ref5) {\n  var colors = _ref5.theme.colors;\n  return colors.coal.dark;\n});\nvar TitleHighlight = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].strong(_templateObject4());\nvar Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(_templateObject5(), function (_ref6) {\n  var typography = _ref6.theme.typography;\n  return typography.lead;\n}, function (_ref7) {\n  var colors = _ref7.theme.colors;\n  return colors.coal.normal;\n}, function (_ref8) {\n  var breakpoints = _ref8.theme.breakpoints;\n  return breakpoints.md;\n});\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a(_templateObject6(), function (_ref9) {\n  var button = _ref9.theme.button;\n  return button.primary;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Container: Container,\n  Content: Content,\n  Title: Title,\n  TitleHighlight: TitleHighlight,\n  Subtitle: Subtitle,\n  Button: Button\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvUHJlc2VudGF0aW9uU2VjdGlvbi9zdHlsZXMuanM/MjA0YiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ6SW5kZXgiLCJ0aGVtZSIsInByZXNlbnRhdGlvbiIsImZhZGUiLCJDb250ZW50IiwiY29udGVudCIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwiVGl0bGUiLCJoMSIsInR5cG9ncmFwaHkiLCJkaXNwbGF5IiwiY29sb3JzIiwiY29hbCIsImRhcmsiLCJUaXRsZUhpZ2hsaWdodCIsInN0cm9uZyIsIlN1YnRpdGxlIiwicCIsImxlYWQiLCJub3JtYWwiLCJCdXR0b24iLCJhIiwiYnV0dG9uIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFnQkE7QUFBQSxNQUFZQyxNQUFaLFFBQUdDLEtBQUgsQ0FBWUQsTUFBWjtBQUFBLFNBQTJCQSxNQUFNLENBQUNFLFlBQVAsQ0FBb0JDLElBQS9DO0FBQUEsQ0FoQkEsQ0FBZjtBQTJCQSxJQUFNQyxPQUFPLEdBQUdOLHlEQUFNLENBQUNDLEdBQVYscUJBV0E7QUFBQSxNQUFZQyxNQUFaLFNBQUdDLEtBQUgsQ0FBWUQsTUFBWjtBQUFBLFNBQTJCQSxNQUFNLENBQUNFLFlBQVAsQ0FBb0JHLE9BQS9DO0FBQUEsQ0FYQSxFQWFUO0FBQUEsTUFBWUMsV0FBWixTQUFHTCxLQUFILENBQVlLLFdBQVo7QUFBQSx5QkFDRUEsV0FBVyxDQUFDQyxFQURkLHFEQUlFRCxXQUFXLENBQUNFLEVBSmQscURBT0VGLFdBQVcsQ0FBQ0csRUFQZDtBQUFBLENBYlMsQ0FBYjtBQTBCQSxJQUFNQyxLQUFLLEdBQUdaLHlEQUFNLENBQUNhLEVBQVYscUJBQ1A7QUFBQSxNQUFZQyxVQUFaLFNBQUdYLEtBQUgsQ0FBWVcsVUFBWjtBQUFBLFNBQStCQSxVQUFVLENBQUNDLE9BQTFDO0FBQUEsQ0FETyxFQUVBO0FBQUEsTUFBWUMsTUFBWixTQUFHYixLQUFILENBQVlhLE1BQVo7QUFBQSxTQUEyQkEsTUFBTSxDQUFDQyxJQUFQLENBQVlDLElBQXZDO0FBQUEsQ0FGQSxDQUFYO0FBU0EsSUFBTUMsY0FBYyxHQUFHbkIseURBQU0sQ0FBQ29CLE1BQVYsb0JBQXBCO0FBRUEsSUFBTUMsUUFBUSxHQUFHckIseURBQU0sQ0FBQ3NCLENBQVYscUJBQ1Y7QUFBQSxNQUFZUixVQUFaLFNBQUdYLEtBQUgsQ0FBWVcsVUFBWjtBQUFBLFNBQStCQSxVQUFVLENBQUNTLElBQTFDO0FBQUEsQ0FEVSxFQUVIO0FBQUEsTUFBWVAsTUFBWixTQUFHYixLQUFILENBQVlhLE1BQVo7QUFBQSxTQUEyQkEsTUFBTSxDQUFDQyxJQUFQLENBQVlPLE1BQXZDO0FBQUEsQ0FGRyxFQU9WO0FBQUEsTUFBWWhCLFdBQVosU0FBR0wsS0FBSCxDQUFZSyxXQUFaO0FBQUEsU0FBZ0NBLFdBQVcsQ0FBQ0UsRUFBNUM7QUFBQSxDQVBVLENBQWQ7QUFlQSxJQUFNZSxNQUFNLEdBQUd6Qix5REFBTSxDQUFDMEIsQ0FBVixxQkFDUjtBQUFBLE1BQVlDLE1BQVosU0FBR3hCLEtBQUgsQ0FBWXdCLE1BQVo7QUFBQSxTQUEyQkEsTUFBTSxDQUFDQyxPQUFsQztBQUFBLENBRFEsQ0FBWjtBQU1lO0FBQ2I3QixXQUFTLEVBQVRBLFNBRGE7QUFFYk8sU0FBTyxFQUFQQSxPQUZhO0FBR2JNLE9BQUssRUFBTEEsS0FIYTtBQUliTyxnQkFBYyxFQUFkQSxjQUphO0FBS2JFLFVBQVEsRUFBUkEsUUFMYTtBQU1iSSxRQUFNLEVBQU5BO0FBTmEsQ0FBZiIsImZpbGUiOiIuL3NlY3Rpb25zL1ByZXNlbnRhdGlvblNlY3Rpb24vc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiA1NzZweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTY2LCAxNjYsIDE2NiwgMC44KTtcbiAgICB6LWluZGV4OiAkeyh7IHRoZW1lOiB7IHpJbmRleCB9IH0pID0+IHpJbmRleC5wcmVzZW50YXRpb24uZmFkZX07XG4gIH1cblxuICBiYWNrZ3JvdW5kOiB1cmwoJ3ByZXNlbnRhdGlvbi5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIHotaW5kZXg6ICR7KHsgdGhlbWU6IHsgekluZGV4IH0gfSkgPT4gekluZGV4LnByZXNlbnRhdGlvbi5jb250ZW50fTtcblxuICAkeyh7IHRoZW1lOiB7IGJyZWFrcG9pbnRzIH0gfSkgPT4gYFxuICAgICR7YnJlYWtwb2ludHMuc219IHtcbiAgICAgIG1heC13aWR0aDogNTQwcHg7XG4gICAgfVxuICAgICR7YnJlYWtwb2ludHMubWR9IHtcbiAgICAgIG1heC13aWR0aDogNzIwcHg7XG4gICAgfVxuICAgICR7YnJlYWtwb2ludHMubGd9IHtcbiAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgfVxuICBgfVxuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICR7KHsgdGhlbWU6IHsgdHlwb2dyYXBoeSB9IH0pID0+IHR5cG9ncmFwaHkuZGlzcGxheX1cbiAgY29sb3I6ICR7KHsgdGhlbWU6IHsgY29sb3JzIH0gfSkgPT4gY29sb3JzLmNvYWwuZGFya307XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5gO1xuXG5jb25zdCBUaXRsZUhpZ2hsaWdodCA9IHN0eWxlZC5zdHJvbmdgYDtcblxuY29uc3QgU3VidGl0bGUgPSBzdHlsZWQucGBcbiAgJHsoeyB0aGVtZTogeyB0eXBvZ3JhcGh5IH0gfSkgPT4gdHlwb2dyYXBoeS5sZWFkfVxuICBjb2xvcjogJHsoeyB0aGVtZTogeyBjb2xvcnMgfSB9KSA9PiBjb2xvcnMuY29hbC5ub3JtYWx9O1xuXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XG5cbiAgJHsoeyB0aGVtZTogeyBicmVha3BvaW50cyB9IH0pID0+IGJyZWFrcG9pbnRzLm1kfSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmFgXG4gICR7KHsgdGhlbWU6IHsgYnV0dG9uIH0gfSkgPT4gYnV0dG9uLnByaW1hcnl9XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIENvbnRhaW5lcixcbiAgQ29udGVudCxcbiAgVGl0bGUsXG4gIFRpdGxlSGlnaGxpZ2h0LFxuICBTdWJ0aXRsZSxcbiAgQnV0dG9uLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/PresentationSection/styles.js\n");

/***/ })

})