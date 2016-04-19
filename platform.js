(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./reducer.js"), require("./actions.js"), require("./router.js"), require("./Server.js"), require("./Client.js"), require("./navigationMiddleware.js"));
	else if(typeof define === 'function' && define.amd)
		define(["./reducer.js", "./actions.js", "./router.js", "./Server.js", "./Client.js", "./navigationMiddleware.js"], factory);
	else if(typeof exports === 'object')
		exports["platform.js"] = factory(require("./reducer.js"), require("./actions.js"), require("./router.js"), require("./Server.js"), require("./Client.js"), require("./navigationMiddleware.js"));
	else
		root["platform.js"] = factory(root["./reducer.js"], root["./actions.js"], root["./router.js"], root["./Server.js"], root["./Client.js"], root["./navigationMiddleware.js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.navigationMiddleware = exports.router = exports.reducer = exports.actions = exports.Client = exports.Server = undefined;

	var _Server = __webpack_require__(15);

	var _Server2 = _interopRequireDefault(_Server);

	var _Client = __webpack_require__(16);

	var _Client2 = _interopRequireDefault(_Client);

	var _reducer = __webpack_require__(6);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _router = __webpack_require__(13);

	var _router2 = _interopRequireDefault(_router);

	var _navigationMiddleware = __webpack_require__(17);

	var _navigationMiddleware2 = _interopRequireDefault(_navigationMiddleware);

	var _actions = __webpack_require__(7);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Server = _Server2.default;
	exports.Client = _Client2.default;
	exports.actions = actions;
	exports.reducer = _reducer2.default;
	exports.router = _router2.default;
	exports.navigationMiddleware = _navigationMiddleware2.default;
	exports.default = {
	  Server: _Server2.default,
	  Client: _Client2.default,
	  actions: actions,
	  reducer: _reducer2.default,
	  router: _router2.default,
	  navigationMiddleware: _navigationMiddleware2.default
	};

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }
/******/ ])
});
;