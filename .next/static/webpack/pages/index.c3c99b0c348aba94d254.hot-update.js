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
                setTodos([].concat(Object(C_Users_hadee_Desktop_sharpnerProjects_todoos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(todos), [data.data]));
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

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetchTodos();
  }, [setNewTodo]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Todo List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: addTodo,
        children: "Add Todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
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
              lineNumber: 107,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return editTodo(todo._id);
              },
              children: "Save"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return setEditingTodo(null);
              },
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: todo.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return setEditingTodo(todo);
                },
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return deleteTodo(todo._id);
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, _this)]
          }, void 0, true)
        }, todo._id, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidG9kb3MiLCJzZXRUb2RvcyIsIm5ld1RvZG8iLCJzZXROZXdUb2RvIiwiZWRpdGluZ1RvZG8iLCJzZXRFZGl0aW5nVG9kbyIsImVkaXRlZFRleHQiLCJzZXRFZGl0ZWRUZXh0IiwiZmV0Y2hUb2RvcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRUb2RvIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGV4dCIsImVkaXRUb2RvIiwiaWQiLCJwcm9tcHQiLCJ1cGRhdGVkVG9kb3MiLCJtYXAiLCJ0b2RvIiwiX2lkIiwiZGVsZXRlVG9kbyIsIndpbmRvdyIsImNvbmZpcm0iLCJmaWx0ZXIiLCJ1c2VFZmZlY3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ1ZDLEtBRFU7QUFBQSxNQUNIQyxRQURHOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVWRyxPQUZVO0FBQUEsTUFFREMsVUFGQzs7QUFBQSxtQkFHcUJKLHNEQUFRLENBQUMsSUFBRCxDQUg3QjtBQUFBLE1BR1ZLLFdBSFU7QUFBQSxNQUdHQyxjQUhIOztBQUFBLG1CQUltQk4sc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJVk8sVUFKVTtBQUFBLE1BSUVDLGFBSkY7O0FBTWpCLE1BQU1DLFVBQVU7QUFBQSxvVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJB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QUFBO0FBQUEscUJBRkY7QUFBQTtBQVpKLFdBQVNELElBQUksQ0FBQ0MsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQTdIRDs7R0FBTS9CLEk7O0tBQUFBLEk7QUErSFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMzYzk5YjBjMzQ4YWJhOTRkMjU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC5qc1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXdUb2RvLCBzZXROZXdUb2RvXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VkaXRpbmdUb2RvLCBzZXRFZGl0aW5nVG9kb10gPSB1c2VTdGF0ZShudWxsKTsgXG4gIGNvbnN0IFtlZGl0ZWRUZXh0LCBzZXRFZGl0ZWRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBmZXRjaFRvZG9zID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3RvZG9zJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICBzZXRUb2RvcyhkYXRhLmRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0b2RvczonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG8gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb3MnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0OiBuZXdUb2RvIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgZGF0YS5kYXRhXSk7XG4gICAgICAgIHNldE5ld1RvZG8oJycpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgdG9kbzonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgZWRpdGVkVGV4dCA9IHByb21wdCgnRWRpdCB0b2RvOicsIGVkaXRpbmdUb2RvLnRleHQpO1xuICAgIGlmIChlZGl0ZWRUZXh0ICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3RvZG9zLyR7aWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGV4dDogZWRpdGVkVGV4dCB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT5cbiAgICAgICAgICAgIHRvZG8uX2lkID09PSBpZCA/IHsgLi4udG9kbywgdGV4dDogZWRpdGVkVGV4dCB9IDogdG9kb1xuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0VG9kb3ModXBkYXRlZFRvZG9zKTtcbiAgICAgICAgICBzZXRFZGl0aW5nVG9kbyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZWRpdGluZyB0b2RvOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRvZG8/JykpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdG9kb3MvJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5faWQgIT09IGlkKTtcbiAgICAgICAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0b2RvOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFRvZG9zKCk7XG4gIH0sIFtzZXROZXdUb2RvXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRvZG8gTGlzdDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e25ld1RvZG99XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUb2RvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0b2RvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb2RvfT5BZGQgVG9kbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0b2RvLl9pZH0+XG4gICAgICAgICAgICB7ZWRpdGluZ1RvZG8gPT09IHRvZG8gPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZWRpdGVkVGV4dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RWRpdGVkVGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRUb2RvKHRvZG8uX2lkKX0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ1RvZG8obnVsbCl9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdj57dG9kby50ZXh0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdUb2RvKHRvZG8pfT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8odG9kby5faWQpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9