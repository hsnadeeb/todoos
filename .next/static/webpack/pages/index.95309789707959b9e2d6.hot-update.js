webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var _jsxFileName = "C:\\Users\\hadee\\Desktop\\sharpnerProjects\\todoos\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// pages/index.js


var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      todos = _useState[0],
      setTodos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newTodo = _useState2[0],
      setNewTodo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      editingTodo = _useState3[0],
      setEditingTodo = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      editedText = _useState4[0],
      setEditedText = _useState4[1];

  var fetchTodos = /*#__PURE__*/function () {
    var _ref = Object(C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var response, data;
      return C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('/api/todos');

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;

              if (data.success) {
                setTodos(data.data);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching todos:', _context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function fetchTodos() {
      return _ref.apply(this, arguments);
    };
  }();

  var addTodo = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var response, data;
      return C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch('/api/todos', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  text: newTodo
                })
              });

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.json();

            case 6:
              data = _context2.sent;

              if (data.success) {
                setTodos([].concat(Object(C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(todos), [_objectSpread(_objectSpread({}, data.data), {}, {
                  status: 'incomplete'
                })]));
                setNewTodo('');
              }

              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.error('Error adding todo:', _context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function addTodo() {
      return _ref2.apply(this, arguments);
    };
  }();

  var editTodo = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(id) {
      var editedText, response, data, updatedTodos;
      return C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              editedText = prompt('Edit todo:', editingTodo.text);

              if (!(editedText !== null)) {
                _context3.next = 15;
                break;
              }

              _context3.prev = 2;
              _context3.next = 5;
              return fetch("/api/todos/".concat(id), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  text: editedText
                })
              });

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              data = _context3.sent;

              if (data.success) {
                updatedTodos = todos.map(function (todo) {
                  return todo._id === id ? _objectSpread(_objectSpread({}, todo), {}, {
                    text: editedText
                  }) : todo;
                });
                setTodos(updatedTodos);
                setEditingTodo(null);
              }

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](2);
              console.error('Error editing todo:', _context3.t0);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 12]]);
    }));

    return function editTodo(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var deleteTodo = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(id) {
      var response, data, updatedTodos;
      return C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!window.confirm('Are you sure you want to delete this todo?')) {
                _context4.next = 14;
                break;
              }

              _context4.prev = 1;
              _context4.next = 4;
              return fetch("/api/todos/".concat(id), {
                method: 'DELETE'
              });

            case 4:
              response = _context4.sent;
              _context4.next = 7;
              return response.json();

            case 7:
              data = _context4.sent;

              if (data.success) {
                updatedTodos = todos.filter(function (todo) {
                  return todo._id !== id;
                });
                setTodos(updatedTodos);
              }

              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](1);
              console.error('Error deleting todo:', _context4.t0);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 11]]);
    }));

    return function deleteTodo(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var toggleStatus = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(id, status) {
      var response, data, updatedTodos;
      return C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return fetch("/api/todos/".concat(id), {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  status: status
                })
              });

            case 3:
              response = _context5.sent;
              _context5.next = 6;
              return response.json();

            case 6:
              data = _context5.sent;

              if (data.success) {
                updatedTodos = todos.map(function (todo) {
                  return todo._id === id ? _objectSpread(_objectSpread({}, todo), {}, {
                    status: data.data.status
                  }) : todo;
                });
                setTodos(updatedTodos);
              }

              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              console.error('Error toggling status:', _context5.t0);

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 10]]);
    }));

    return function toggleStatus(_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetchTodos();
  }, [newTodo, editingTodo]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Todo List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        value: newTodo,
        onChange: function onChange(e) {
          return setNewTodo(e.target.value);
        },
        placeholder: "Add a new todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: addTodo,
        children: "Add Todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: todos.map(function (todo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: editingTodo === todo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: editedText,
              onChange: function onChange(e) {
                return setEditedText(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return editTodo(todo._id);
              },
              children: "Save"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return setEditingTodo(null);
              },
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 17
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [todo.text, " - Status: ", todo.status]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return setEditingTodo(todo);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return deleteTodo(todo._id);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return toggleStatus(todo._id, todo.status === 'incomplete' ? 'complete' : 'incomplete');
                },
                children: todo.status === 'incomplete' ? 'Mark Complete' : 'Mark Incomplete'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 17
            }, _this)]
          }, void 0, true)
        }, todo._id, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, _this);
};

_s(Home, "kQu1ECO3b5XwXSJKe7UuMAqZlfA=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidG9kb3MiLCJzZXRUb2RvcyIsIm5ld1RvZG8iLCJzZXROZXdUb2RvIiwiZWRpdGluZ1RvZG8iLCJzZXRFZGl0aW5nVG9kbyIsImVkaXRlZFRleHQiLCJzZXRFZGl0ZWRUZXh0IiwiZmV0Y2hUb2RvcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRUb2RvIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGV4dCIsInN0YXR1cyIsImVkaXRUb2RvIiwiaWQiLCJwcm9tcHQiLCJ1cGRhdGVkVG9kb3MiLCJtYXAiLCJ0b2RvIiwiX2lkIiwiZGVsZXRlVG9kbyIsIndpbmRvdyIsImNvbmZpcm0iLCJmaWx0ZXIiLCJ0b2dnbGVTdGF0dXMiLCJ1c2VFZmZlY3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ1ZDLEtBRFU7QUFBQSxNQUNIQyxRQURHOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVWRyxPQUZVO0FBQUEsTUFFREMsVUFGQzs7QUFBQSxtQkFHcUJKLHNEQUFRLENBQUMsSUFBRCxDQUg3QjtBQUFBLE1BR1ZLLFdBSFU7QUFBQSxNQUdHQyxjQUhIOztBQUFBLG1CQUltQk4sc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJVk8sVUFKVTtBQUFBLE1BSUVDLGFBSkY7O0FBTWpCLE1BQU1DLFVBQVU7QUFBQSxvVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFB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QUksQ0FBQ04sTUFBTCxLQUFnQixZQUFoQixHQUErQixVQUEvQixHQUE0QyxZQUF2RCxDQURMO0FBQUEsaUJBRFg7QUFBQSwwQkFLR00sSUFBSSxDQUFDTixNQUFMLEtBQWdCLFlBQWhCLEdBQStCLGVBQS9CLEdBQWlEO0FBTHBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFaSixXQUFTTSxJQUFJLENBQUNDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0E1SkQ7O0dBQU1oQyxJOztLQUFBQSxJO0FBOEpTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NTMwOTc4OTcwNzk1OWI5ZTJkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlZGl0aW5nVG9kbywgc2V0RWRpdGluZ1RvZG9dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlZGl0ZWRUZXh0LCBzZXRFZGl0ZWRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBmZXRjaFRvZG9zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG9zJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICBzZXRUb2RvcyhkYXRhLmRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0b2RvczonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG8gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb3MnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0OiBuZXdUb2RvIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgeyAuLi5kYXRhLmRhdGEsIHN0YXR1czogJ2luY29tcGxldGUnIH1dKTtcbiAgICAgICAgc2V0TmV3VG9kbygnJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyB0b2RvOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCBlZGl0ZWRUZXh0ID0gcHJvbXB0KCdFZGl0IHRvZG86JywgZWRpdGluZ1RvZG8udGV4dCk7XG4gICAgaWYgKGVkaXRlZFRleHQgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdG9kb3MvJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0OiBlZGl0ZWRUZXh0IH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICAgICAgdG9kby5faWQgPT09IGlkID8geyAuLi50b2RvLCB0ZXh0OiBlZGl0ZWRUZXh0IH0gOiB0b2RvXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xuICAgICAgICAgIHNldEVkaXRpbmdUb2RvKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlZGl0aW5nIHRvZG86JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdG9kbz8nKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS90b2Rvcy8ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCAhPT0gaWQpO1xuICAgICAgICAgIHNldFRvZG9zKHVwZGF0ZWRUb2Rvcyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHRvZG86JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2dnbGVTdGF0dXMgPSBhc3luYyAoaWQsIHN0YXR1cykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3RvZG9zLyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXR1cyB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+XG4gICAgICAgICAgdG9kby5faWQgPT09IGlkID8geyAuLi50b2RvLCBzdGF0dXM6IGRhdGEuZGF0YS5zdGF0dXMgfSA6IHRvZG9cbiAgICAgICAgKTtcbiAgICAgICAgc2V0VG9kb3ModXBkYXRlZFRvZG9zKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdG9nZ2xpbmcgc3RhdHVzOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFRvZG9zKCk7XG4gIH0sIFtuZXdUb2RvLCBlZGl0aW5nVG9kb10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ub2RvIExpc3Q8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtuZXdUb2RvfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VG9kbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuZXcgdG9kb1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9kb30+QWRkIFRvZG88L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dG9kby5faWR9PlxuICAgICAgICAgICAge2VkaXRpbmdUb2RvID09PSB0b2RvID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRlZFRleHR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVkaXRlZFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0VG9kbyh0b2RvLl9pZCl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdUb2RvKG51bGwpfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICB7dG9kby50ZXh0fSAtIFN0YXR1czoge3RvZG8uc3RhdHVzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdUb2RvKHRvZG8pfT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8odG9kby5faWQpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVTdGF0dXModG9kby5faWQsIHRvZG8uc3RhdHVzID09PSAnaW5jb21wbGV0ZScgPyAnY29tcGxldGUnIDogJ2luY29tcGxldGUnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0b2RvLnN0YXR1cyA9PT0gJ2luY29tcGxldGUnID8gJ01hcmsgQ29tcGxldGUnIDogJ01hcmsgSW5jb21wbGV0ZSd9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9