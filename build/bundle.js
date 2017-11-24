/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			'Hello'
		),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					return console.log('Hi there');
				} },
			'Click'
		)
	);
};

exports.default = Home;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._routes = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _Home = __webpack_require__(1);

var _Home2 = _interopRequireDefault(_Home);

var _UserList = __webpack_require__(11);

var _UserList2 = _interopRequireDefault(_UserList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _routes = exports._routes = function _routes() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/users', component: _UserList2.default })
	);
};

exports.default = [{
	path: '/',
	component: _Home2.default,
	exact: true
}, {
	path: '/users',
	component: _UserList2.default,
	loadData: _UserList.loadData
}];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _redux = __webpack_require__(14);

var _reduxThunk = __webpack_require__(15);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterConfig = __webpack_require__(10);

var _reducers = __webpack_require__(16);

var _reducers2 = _interopRequireDefault(_reducers);

var _Home = __webpack_require__(1);

var _Home2 = _interopRequireDefault(_Home);

var _render = __webpack_require__(7);

var _render2 = _interopRequireDefault(_render);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
	var initialStore = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	var loadDataPromises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
		var route = _ref.route;
		return route.loadData && route.loadData(initialStore);
	});
	Promise.all(loadDataPromises).then(function (data) {
		var content = (0, _render2.default)(_Routes2.default, req, initialStore);
		res.send(content);
	});
});

app.listen(3333, function () {
	console.log("App is listening on port 3333.");
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (Routes, _ref, store) {
    var path = _ref.path;

    var componentWithRouter = connectRouterToStore(Routes, path)(store);
    var componentToString = (0, _server.renderToString)(componentWithRouter);
    return (0, _template.wrapWithHtmlTemplate)(componentToString);
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _template = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(10);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectRouterToStore = function connectRouterToStore(Routes, path) {
    return function (store) {
        return _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { context: {}, location: path },
                _react2.default.createElement(
                    'div',
                    null,
                    (0, _reactRouterConfig.renderRoutes)(Routes)
                )
            )
        );
    };
};
// import Routes from '../Routes'

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var wrapWithHtmlTemplate = exports.wrapWithHtmlTemplate = function wrapWithHtmlTemplate(content) {
	return "<html>\n\t<head></head>\n\t<body>\n\t\t<div id=\"root\">" + content + "</div>\n\t\t<script src=\"bundle.js\"></script>\n\t</body>\n</html>";
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
    _inherits(UserList, _Component);

    function UserList() {
        _classCallCheck(this, UserList);

        return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
    }

    _createClass(UserList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUsers();
        }
    }, {
        key: 'renderUsers',
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    'li',
                    { key: user.id },
                    user.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UserList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var users = _ref.users;
    return { users: users };
};

function loadData(store) {
    return store.dispatch((0, _actions.fetchUsers)());
}

exports.loadData = loadData;
exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UserList);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchUsers = exports.FETCH_USERS = undefined;

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';

var baseAPIUrl = 'http://react-ssr-api.herokuapp.com';

var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _axios2.default.get(baseAPIUrl + '/users');

                        case 2:
                            res = _context.sent;

                            dispatch({
                                type: FETCH_USERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(14);

var _actions = __webpack_require__(12);

var usersReducer = function usersReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

exports.default = (0, _redux.combineReducers)({
    users: usersReducer
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ })
/******/ ]);