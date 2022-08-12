"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./src/redux/Slices/TodoSlice.ts
var TodoSlice = __webpack_require__(207);
// EXTERNAL MODULE: ./src/redux/Slices/ThemeSlice.ts
var ThemeSlice = __webpack_require__(151);
// EXTERNAL MODULE: ./src/redux/Slices/dogSlice.ts + 1 modules
var dogSlice = __webpack_require__(313);
// EXTERNAL MODULE: ./src/redux/Slices/IpSlice.ts + 1 modules
var IpSlice = __webpack_require__(581);
// EXTERNAL MODULE: ./src/redux/Slices/catSlice.ts + 1 modules
var catSlice = __webpack_require__(669);
// EXTERNAL MODULE: ./src/redux/Slices/boredSlice.ts + 1 modules
var boredSlice = __webpack_require__(105);
// EXTERNAL MODULE: ./src/redux/Slices/weatherSlice.ts + 1 modules
var weatherSlice = __webpack_require__(653);
// EXTERNAL MODULE: ./src/redux/Slices/authReducer.ts
var authReducer = __webpack_require__(645);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./src/redux/store/store.ts










function makeStore() {
    return (0,toolkit_.configureStore)({
        reducer: {
            todos: TodoSlice/* default */.ZP,
            theme: ThemeSlice/* default */.ZP,
            ip: IpSlice/* default */.ZP,
            dog: dogSlice/* default */.ZP,
            cat: catSlice/* default */.ZP,
            bored: boredSlice/* default */.ZP,
            weather: weatherSlice/* default */.ZP,
            auth: authReducer/* default */.ZP
        },
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat((external_redux_thunk_default()))
    });
}
const store = makeStore();
/* harmony default export */ const store_store = (store);

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};


/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [911], () => (__webpack_exec__(579)));
module.exports = __webpack_exports__;

})();