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
      setEditedText = _useState4[1]; // Track the todo being edited


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
      lineNumber: 93,
      columnNumber: 5
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
        lineNumber: 95,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: addTodo,
        children: "Add Todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: todos.map(function (todo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: editingTodo === todo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: editedText // Use editedText here
              ,
              onChange: function onChange(e) {
                return setEditedText(e.target.value);
              } // Update editedText state

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return editTodo(todo._id);
              },
              children: "Save"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return setEditingTodo(null);
              },
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [todo.text, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return setEditingTodo(todo);
              },
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteTodo(todo._id);
              },
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this)]
          }, void 0, true)
        }, todo._id, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, _this) //    <div>
  //   <h1>Todo List</h1>
  //   <div>
  //     <input
  //       type="text"
  //       value={newTodo}
  //       onChange={(e) => setNewTodo(e.target.value)}
  //       placeholder="Add a new todo"
  //     />
  //     <button onClick={addTodo}>Add Todo</button>
  //   </div>
  //   <ul>
  //     {todos.map((todo) => (
  //       <li key={todo._id}>
  //         {editingTodo === todo ? (
  //           <>
  //             <input
  //               type="text"
  //               value={editingTodo.text}
  //               onChange={(e) => setEditingTodo({ ...editingTodo, text: e.target.value })}
  //             />
  //             <button onClick={() => editTodo(todo._id)}>Save</button>
  //             <button onClick={() => setEditingTodo(null)}>Cancel</button>
  //           </>
  //         ) : (
  //           <>
  //             {todo.text}
  //             <button onClick={() => setEditingTodo(todo)}>Edit</button>
  //             <button onClick={() => deleteTodo(todo._id)}>Delete</button>
  //           </>
  //         )}
  //       </li>
  //     ))}
  //   </ul>
  // </div>
  ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidG9kb3MiLCJzZXRUb2RvcyIsIm5ld1RvZG8iLCJzZXROZXdUb2RvIiwiZWRpdGluZ1RvZG8iLCJzZXRFZGl0aW5nVG9kbyIsImVkaXRlZFRleHQiLCJzZXRFZGl0ZWRUZXh0IiwiZmV0Y2hUb2RvcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRUb2RvIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGV4dCIsImVkaXRUb2RvIiwiaWQiLCJwcm9tcHQiLCJ1cGRhdGVkVG9kb3MiLCJtYXAiLCJ0b2RvIiwiX2lkIiwiZGVsZXRlVG9kbyIsIndpbmRvdyIsImNvbmZpcm0iLCJmaWx0ZXIiLCJ1c2VFZmZlY3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ1ZDLEtBRFU7QUFBQSxNQUNIQyxRQURHOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVWRyxPQUZVO0FBQUEsTUFFREMsVUFGQzs7QUFBQSxtQkFHcUJKLHNEQUFRLENBQUMsSUFBRCxDQUg3QjtBQUFBLE1BR1ZLLFdBSFU7QUFBQSxNQUdHQyxjQUhIOztBQUFBLG1CQUltQk4sc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJVk8sVUFKVTtBQUFBLE1BSUVDLGFBSkYsa0JBSWdDOzs7QUFFakQsTUFBTUMsVUFBVTtBQUFBLG9UQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRixDQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkVBO0FBeUVELENBL0pEOztHQUFNL0IsSTs7S0FBQUEsSTtBQWlLU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWQyYzZiZTFjNmU3NDc0YjRmNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LmpzXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25ld1RvZG8sIHNldE5ld1RvZG9dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZWRpdGluZ1RvZG8sIHNldEVkaXRpbmdUb2RvXSA9IHVzZVN0YXRlKG51bGwpOyBcbiAgY29uc3QgW2VkaXRlZFRleHQsIHNldEVkaXRlZFRleHRdID0gdXNlU3RhdGUoJycpOy8vIFRyYWNrIHRoZSB0b2RvIGJlaW5nIGVkaXRlZFxuXG4gIGNvbnN0IGZldGNoVG9kb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb3MnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIHNldFRvZG9zKGRhdGEuZGF0YSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRvZG9zOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kbyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvcycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRleHQ6IG5ld1RvZG8gfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCBkYXRhLmRhdGFdKTtcbiAgICAgICAgc2V0TmV3VG9kbygnJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyB0b2RvOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCBlZGl0ZWRUZXh0ID0gcHJvbXB0KCdFZGl0IHRvZG86JywgZWRpdGluZ1RvZG8udGV4dCk7XG4gICAgaWYgKGVkaXRlZFRleHQgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdG9kb3MvJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0OiBlZGl0ZWRUZXh0IH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICAgICAgdG9kby5faWQgPT09IGlkID8geyAuLi50b2RvLCB0ZXh0OiBlZGl0ZWRUZXh0IH0gOiB0b2RvXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xuICAgICAgICAgIHNldEVkaXRpbmdUb2RvKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlZGl0aW5nIHRvZG86JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdG9kbz8nKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS90b2Rvcy8ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCAhPT0gaWQpO1xuICAgICAgICAgIHNldFRvZG9zKHVwZGF0ZWRUb2Rvcyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHRvZG86JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVG9kb3MoKTtcbiAgfSwgW3NldE5ld1RvZG9dKTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICA8aDE+VG9kbyBMaXN0PC9oMT5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e25ld1RvZG99XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VG9kbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgbmV3IHRvZG9cIlxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9kb30+QWRkIFRvZG88L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8dWw+XG4gICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3RvZG8uX2lkfT5cbiAgICAgICAgICB7ZWRpdGluZ1RvZG8gPT09IHRvZG8gPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRlZFRleHR9IC8vIFVzZSBlZGl0ZWRUZXh0IGhlcmVcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVkaXRlZFRleHQoZS50YXJnZXQudmFsdWUpfSAvLyBVcGRhdGUgZWRpdGVkVGV4dCBzdGF0ZVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRUb2RvKHRvZG8uX2lkKX0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdUb2RvKG51bGwpfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7dG9kby50ZXh0fVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdUb2RvKHRvZG8pfT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlVG9kbyh0b2RvLl9pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxuICAvLyAgICA8ZGl2PlxuICAvLyAgIDxoMT5Ub2RvIExpc3Q8L2gxPlxuICAvLyAgIDxkaXY+XG4gIC8vICAgICA8aW5wdXRcbiAgLy8gICAgICAgdHlwZT1cInRleHRcIlxuICAvLyAgICAgICB2YWx1ZT17bmV3VG9kb31cbiAgLy8gICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUb2RvKGUudGFyZ2V0LnZhbHVlKX1cbiAgLy8gICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuZXcgdG9kb1wiXG4gIC8vICAgICAvPlxuICAvLyAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb2RvfT5BZGQgVG9kbzwvYnV0dG9uPlxuICAvLyAgIDwvZGl2PlxuICAvLyAgIDx1bD5cbiAgLy8gICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgLy8gICAgICAgPGxpIGtleT17dG9kby5faWR9PlxuICAvLyAgICAgICAgIHtlZGl0aW5nVG9kbyA9PT0gdG9kbyA/IChcbiAgLy8gICAgICAgICAgIDw+XG4gIC8vICAgICAgICAgICAgIDxpbnB1dFxuICAvLyAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgLy8gICAgICAgICAgICAgICB2YWx1ZT17ZWRpdGluZ1RvZG8udGV4dH1cbiAgLy8gICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVkaXRpbmdUb2RvKHsgLi4uZWRpdGluZ1RvZG8sIHRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAvLyAgICAgICAgICAgICAvPlxuICAvLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRUb2RvKHRvZG8uX2lkKX0+U2F2ZTwvYnV0dG9uPlxuICAvLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdUb2RvKG51bGwpfT5DYW5jZWw8L2J1dHRvbj5cbiAgLy8gICAgICAgICAgIDwvPlxuICAvLyAgICAgICAgICkgOiAoXG4gIC8vICAgICAgICAgICA8PlxuICAvLyAgICAgICAgICAgICB7dG9kby50ZXh0fVxuICAvLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdUb2RvKHRvZG8pfT5FZGl0PC9idXR0b24+XG4gIC8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlVG9kbyh0b2RvLl9pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAvLyAgICAgICAgICAgPC8+XG4gIC8vICAgICAgICAgKX1cbiAgLy8gICAgICAgPC9saT5cbiAgLy8gICAgICkpfVxuICAvLyAgIDwvdWw+XG4gIC8vIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9