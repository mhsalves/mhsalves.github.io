webpackHotUpdate_N_E("pages/_app",{

/***/ "./bosons/themes/base/typography.js":
/*!******************************************!*\
  !*** ./bosons/themes/base/typography.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakpoints */ \"./bosons/themes/base/breakpoints.js\");\n\n\nfunction _templateObject8() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \"\\n  \", \"\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \"\\n  \", \"\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \"\\n  \", \"\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \"\\n  \", \"\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \"\\n  \", \"\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \", \"\\n  font-size: 2.5rem;\\n  line-height: 3rem;\\n\\n  \", \" {\\n    font-size: 4.5rem;\\n    line-height: 5rem;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: \", \";\\n  line-height: \", \";\\n\\n  \", \" {\\n    font-size: \", \";\\n    line-height: \", \";\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_home_matheus_alves_Documentos_Projetos_mhsalves_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: \", \";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar family = {\n  nunito: 'Source Sans Pro, sans-serif'\n};\nvar scales = {\n  mobile: 1.2,\n  tablet: 1.333\n};\n\nvar fontSize = function fontSize(scale) {\n  return {\n    small: '.8125rem',\n    medium: '1rem',\n    large: \"\".concat(scale, \"rem\"),\n    big: \"\".concat(Math.pow(scale, 2), \"rem\"),\n    huge: \"\".concat(Math.pow(scale, 3), \"rem\")\n  };\n};\n\nvar lineHeight = function lineHeight(scale) {\n  return {\n    small: '1rem',\n    medium: '1.5rem',\n    large: '1.5rem',\n    big: \"\".concat(Math.ceil(Math.pow(scale, 2) * 2) / 2, \"rem\"),\n    huge: \"\".concat(Math.ceil(Math.pow(scale, 3) * 2) / 2, \"rem\")\n  };\n};\n\nvar common = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject(), family.nunito);\n\nvar sizeScaled = function sizeScaled(size) {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject2(), fontSize(scales.mobile)[size], lineHeight(scales.mobile)[size], _breakpoints__WEBPACK_IMPORTED_MODULE_2__[\"default\"].md, fontSize(scales.tablet)[size], lineHeight(scales.tablet)[size]);\n};\n\nvar display = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject3(), common, _breakpoints__WEBPACK_IMPORTED_MODULE_2__[\"default\"].md);\nvar h2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject4(), common, sizeScaled('huge'));\nvar h3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject5(), common, sizeScaled('big'));\nvar lead = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject6(), common, sizeScaled('large'));\nvar normal = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject7(), common, sizeScaled('medium'));\nvar small = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject8(), common, sizeScaled('small'));\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  display: display,\n  h2: h2,\n  h3: h3,\n  lead: lead,\n  normal: normal,\n  small: small\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYm9zb25zL3RoZW1lcy9iYXNlL3R5cG9ncmFwaHkuanM/MmM2OCJdLCJuYW1lcyI6WyJmYW1pbHkiLCJudW5pdG8iLCJzY2FsZXMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJmb250U2l6ZSIsInNjYWxlIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsImJpZyIsImh1Z2UiLCJsaW5lSGVpZ2h0IiwiTWF0aCIsImNlaWwiLCJjb21tb24iLCJjc3MiLCJzaXplU2NhbGVkIiwic2l6ZSIsImJyZWFrcG9pbnRzIiwibWQiLCJkaXNwbGF5IiwiaDIiLCJoMyIsImxlYWQiLCJub3JtYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFESyxDQUFmO0FBSUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRSxHQURLO0FBRWJDLFFBQU0sRUFBRTtBQUZLLENBQWY7O0FBS0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDM0JDLFNBQUssRUFBRSxVQURvQjtBQUUzQkMsVUFBTSxFQUFFLE1BRm1CO0FBRzNCQyxTQUFLLFlBQUtILEtBQUwsUUFIc0I7QUFJM0JJLE9BQUcscUJBQUtKLEtBQUwsRUFBYyxDQUFkLFNBSndCO0FBSzNCSyxRQUFJLHFCQUFLTCxLQUFMLEVBQWMsQ0FBZDtBQUx1QixHQUFaO0FBQUEsQ0FBakI7O0FBUUEsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ04sS0FBRDtBQUFBLFNBQVk7QUFDN0JDLFNBQUssRUFBRSxNQURzQjtBQUU3QkMsVUFBTSxFQUFFLFFBRnFCO0FBRzdCQyxTQUFLLEVBQUUsUUFIc0I7QUFJN0JDLE9BQUcsWUFBS0csSUFBSSxDQUFDQyxJQUFMLENBQVUsU0FBQ1IsS0FBRCxFQUFVLENBQVYsSUFBZSxDQUF6QixJQUE4QixDQUFuQyxRQUowQjtBQUs3QkssUUFBSSxZQUFLRSxJQUFJLENBQUNDLElBQUwsQ0FBVSxTQUFDUixLQUFELEVBQVUsQ0FBVixJQUFlLENBQXpCLElBQThCLENBQW5DO0FBTHlCLEdBQVo7QUFBQSxDQUFuQjs7QUFRQSxJQUFNUyxNQUFNLEdBQUdDLDZEQUFILG9CQUNLaEIsTUFBTSxDQUFDQyxNQURaLENBQVo7O0FBSUEsSUFBTWdCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQ7QUFBQSxTQUFVRiw2REFBVixxQkFDSlgsUUFBUSxDQUFDSCxNQUFNLENBQUNDLE1BQVIsQ0FBUixDQUF3QmUsSUFBeEIsQ0FESSxFQUVGTixVQUFVLENBQUNWLE1BQU0sQ0FBQ0MsTUFBUixDQUFWLENBQTBCZSxJQUExQixDQUZFLEVBSWZDLG9EQUFXLENBQUNDLEVBSkcsRUFLRmYsUUFBUSxDQUFDSCxNQUFNLENBQUNFLE1BQVIsQ0FBUixDQUF3QmMsSUFBeEIsQ0FMRSxFQU1BTixVQUFVLENBQUNWLE1BQU0sQ0FBQ0UsTUFBUixDQUFWLENBQTBCYyxJQUExQixDQU5BO0FBQUEsQ0FBbkI7O0FBVUEsSUFBTUcsT0FBTyxHQUFHTCw2REFBSCxxQkFDVEQsTUFEUyxFQUtUSSxvREFBVyxDQUFDQyxFQUxILENBQWI7QUFXQSxJQUFNRSxFQUFFLEdBQUdOLDZEQUFILHFCQUNKRCxNQURJLEVBRUpFLFVBQVUsQ0FBQyxNQUFELENBRk4sQ0FBUjtBQUtBLElBQU1NLEVBQUUsR0FBR1AsNkRBQUgscUJBQ0pELE1BREksRUFFSkUsVUFBVSxDQUFDLEtBQUQsQ0FGTixDQUFSO0FBS0EsSUFBTU8sSUFBSSxHQUFHUiw2REFBSCxxQkFDTkQsTUFETSxFQUVORSxVQUFVLENBQUMsT0FBRCxDQUZKLENBQVY7QUFLQSxJQUFNUSxNQUFNLEdBQUdULDZEQUFILHFCQUNSRCxNQURRLEVBRVJFLFVBQVUsQ0FBQyxRQUFELENBRkYsQ0FBWjtBQUtBLElBQU1WLEtBQUssR0FBR1MsNkRBQUgscUJBQ1BELE1BRE8sRUFFUEUsVUFBVSxDQUFDLE9BQUQsQ0FGSCxDQUFYO0FBTWU7QUFDYkksU0FBTyxFQUFQQSxPQURhO0FBRWJDLElBQUUsRUFBRkEsRUFGYTtBQUdiQyxJQUFFLEVBQUZBLEVBSGE7QUFJYkMsTUFBSSxFQUFKQSxJQUphO0FBS2JDLFFBQU0sRUFBTkEsTUFMYTtBQU1ibEIsT0FBSyxFQUFMQTtBQU5hLENBQWYiLCJmaWxlIjoiLi9ib3NvbnMvdGhlbWVzL2Jhc2UvdHlwb2dyYXBoeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBicmVha3BvaW50cyBmcm9tICcuL2JyZWFrcG9pbnRzJztcblxuY29uc3QgZmFtaWx5ID0ge1xuICBudW5pdG86ICdTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWYnLFxufTtcblxuY29uc3Qgc2NhbGVzID0ge1xuICBtb2JpbGU6IDEuMixcbiAgdGFibGV0OiAxLjMzMyxcbn07XG5cbmNvbnN0IGZvbnRTaXplID0gKHNjYWxlKSA9PiAoe1xuICBzbWFsbDogJy44MTI1cmVtJyxcbiAgbWVkaXVtOiAnMXJlbScsXG4gIGxhcmdlOiBgJHtzY2FsZX1yZW1gLFxuICBiaWc6IGAke3NjYWxlICoqIDJ9cmVtYCxcbiAgaHVnZTogYCR7c2NhbGUgKiogM31yZW1gLFxufSk7XG5cbmNvbnN0IGxpbmVIZWlnaHQgPSAoc2NhbGUpID0+ICh7XG4gIHNtYWxsOiAnMXJlbScsXG4gIG1lZGl1bTogJzEuNXJlbScsXG4gIGxhcmdlOiAnMS41cmVtJyxcbiAgYmlnOiBgJHtNYXRoLmNlaWwoKHNjYWxlICoqIDIpICogMikgLyAyfXJlbWAsXG4gIGh1Z2U6IGAke01hdGguY2VpbCgoc2NhbGUgKiogMykgKiAyKSAvIDJ9cmVtYCxcbn0pO1xuXG5jb25zdCBjb21tb24gPSBjc3NgXG4gIGZvbnQtZmFtaWx5OiAke2ZhbWlseS5udW5pdG99O1xuYDtcblxuY29uc3Qgc2l6ZVNjYWxlZCA9IChzaXplKSA9PiBjc3NgXG4gIGZvbnQtc2l6ZTogJHtmb250U2l6ZShzY2FsZXMubW9iaWxlKVtzaXplXX07XG4gIGxpbmUtaGVpZ2h0OiAke2xpbmVIZWlnaHQoc2NhbGVzLm1vYmlsZSlbc2l6ZV19O1xuXG4gICR7YnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemUoc2NhbGVzLnRhYmxldClbc2l6ZV19O1xuICAgIGxpbmUtaGVpZ2h0OiAke2xpbmVIZWlnaHQoc2NhbGVzLnRhYmxldClbc2l6ZV19O1xuICB9XG5gO1xuXG5jb25zdCBkaXNwbGF5ID0gY3NzYFxuICAke2NvbW1vbn1cbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuXG4gICR7YnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogNXJlbTtcbiAgfVxuYDtcblxuY29uc3QgaDIgPSBjc3NgXG4gICR7Y29tbW9ufVxuICAke3NpemVTY2FsZWQoJ2h1Z2UnKX1cbmA7XG5cbmNvbnN0IGgzID0gY3NzYFxuICAke2NvbW1vbn1cbiAgJHtzaXplU2NhbGVkKCdiaWcnKX1cbmA7XG5cbmNvbnN0IGxlYWQgPSBjc3NgXG4gICR7Y29tbW9ufVxuICAke3NpemVTY2FsZWQoJ2xhcmdlJyl9XG5gO1xuXG5jb25zdCBub3JtYWwgPSBjc3NgXG4gICR7Y29tbW9ufVxuICAke3NpemVTY2FsZWQoJ21lZGl1bScpfVxuYDtcblxuY29uc3Qgc21hbGwgPSBjc3NgXG4gICR7Y29tbW9ufVxuICAke3NpemVTY2FsZWQoJ3NtYWxsJyl9XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGlzcGxheSxcbiAgaDIsXG4gIGgzLFxuICBsZWFkLFxuICBub3JtYWwsXG4gIHNtYWxsLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./bosons/themes/base/typography.js\n");

/***/ })

})