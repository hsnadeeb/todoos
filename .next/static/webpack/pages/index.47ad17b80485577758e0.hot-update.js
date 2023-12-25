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
      setEditingTodo = _useState3[1]; // Track the todo being edited


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
      lineNumber: 91,
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
        lineNumber: 93,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: addTodo,
        children: "Add Todo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: todos.map(function (todo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: editingTodo === todo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: editingTodo.text,
              onChange: function onChange(e) {
                return setEditingTodo(_objectSpread(_objectSpread({}, editingTodo), {}, {
                  text: e.target.value
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return editTodo(todo._id);
              },
              children: "Save"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return setEditingTodo(null);
              },
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
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
              lineNumber: 117,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteTodo(todo._id);
              },
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this)]
          }, void 0, true)
        }, todo._id, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, _this) // <div>
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
  //               value={todo.text}
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

_s(Home, "TaZbQEVWNYdgjNm673YMJ5+mtBQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidG9kb3MiLCJzZXRUb2RvcyIsIm5ld1RvZG8iLCJzZXROZXdUb2RvIiwiZWRpdGluZ1RvZG8iLCJzZXRFZGl0aW5nVG9kbyIsImZldGNoVG9kb3MiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsImVycm9yIiwiYWRkVG9kbyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHQiLCJlZGl0VG9kbyIsImlkIiwiZWRpdGVkVGV4dCIsInByb21wdCIsInVwZGF0ZWRUb2RvcyIsIm1hcCIsInRvZG8iLCJfaWQiLCJkZWxldGVUb2RvIiwid2luZG93IiwiY29uZmlybSIsImZpbHRlciIsInVzZUVmZmVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDVkMsS0FEVTtBQUFBLE1BQ0hDLFFBREc7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRVZHLE9BRlU7QUFBQSxNQUVEQyxVQUZDOztBQUFBLG1CQUdxQkosc0RBQVEsQ0FBQyxJQUFELENBSDdCO0FBQUEsTUFHVkssV0FIVTtBQUFBLE1BR0dDLGNBSEgsa0JBR3FDOzs7QUFFdEQsTUFBTUMsVUFBVTtBQUFBLG9UQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFUUMsS0FBSyxDQUFDLFlBQUQsQ0FGYjs7QUFBQTtBQUVUQyxzQkFGUztBQUFBO0FBQUEscUJBR0lBLFFBQVEsQ0FBQ0MsSUFBVCxF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QUFBO0FBQUE7QUFBQSxXQURGLENBb0NFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RUY7QUF3RUQsQ0E3SkQ7O0dBQU05QixJOztLQUFBQSxJO0FBK0pTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40N2FkMTdiODA0ODU1Nzc3NThlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlZGl0aW5nVG9kbywgc2V0RWRpdGluZ1RvZG9dID0gdXNlU3RhdGUobnVsbCk7IC8vIFRyYWNrIHRoZSB0b2RvIGJlaW5nIGVkaXRlZFxuXG4gIGNvbnN0IGZldGNoVG9kb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kb3MnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIHNldFRvZG9zKGRhdGEuZGF0YSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRvZG9zOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kbyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvcycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRleHQ6IG5ld1RvZG8gfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCBkYXRhLmRhdGFdKTtcbiAgICAgICAgc2V0TmV3VG9kbygnJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyB0b2RvOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCBlZGl0ZWRUZXh0ID0gcHJvbXB0KCdFZGl0IHRvZG86JywgZWRpdGluZ1RvZG8udGV4dCk7XG4gICAgaWYgKGVkaXRlZFRleHQgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdG9kb3MvJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0OiBlZGl0ZWRUZXh0IH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICAgICAgdG9kby5faWQgPT09IGlkID8geyAuLi50b2RvLCB0ZXh0OiBlZGl0ZWRUZXh0IH0gOiB0b2RvXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xuICAgICAgICAgIHNldEVkaXRpbmdUb2RvKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlZGl0aW5nIHRvZG86JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdG9kbz8nKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS90b2Rvcy8ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCAhPT0gaWQpO1xuICAgICAgICAgIHNldFRvZG9zKHVwZGF0ZWRUb2Rvcyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHRvZG86JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVG9kb3MoKTtcbiAgfSwgW3NldE5ld1RvZG9dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGgxPlRvZG8gTGlzdDwvaDE+XG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtuZXdUb2RvfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RvZG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0b2RvXCJcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvZG99PkFkZCBUb2RvPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPHVsPlxuICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICA8bGkga2V5PXt0b2RvLl9pZH0+XG4gICAgICAgICAge2VkaXRpbmdUb2RvID09PSB0b2RvID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlZGl0aW5nVG9kby50ZXh0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RWRpdGluZ1RvZG8oeyAuLi5lZGl0aW5nVG9kbywgdGV4dDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdFRvZG8odG9kby5faWQpfT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ1RvZG8obnVsbCl9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHt0b2RvLnRleHR9XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ1RvZG8odG9kbyl9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVUb2RvKHRvZG8uX2lkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gICAgLy8gPGRpdj5cbiAgICAvLyAgIDxoMT5Ub2RvIExpc3Q8L2gxPlxuICAgIC8vICAgPGRpdj5cbiAgICAvLyAgICAgPGlucHV0XG4gICAgLy8gICAgICAgdHlwZT1cInRleHRcIlxuICAgIC8vICAgICAgIHZhbHVlPXtuZXdUb2RvfVxuICAgIC8vICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VG9kbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgLy8gICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuZXcgdG9kb1wiXG4gICAgLy8gICAgIC8+XG4gICAgLy8gICAgIDxidXR0b24gb25DbGljaz17YWRkVG9kb30+QWRkIFRvZG88L2J1dHRvbj5cbiAgICAvLyAgIDwvZGl2PlxuICAgIC8vICAgPHVsPlxuICAgIC8vICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgLy8gICAgICAgPGxpIGtleT17dG9kby5faWR9PlxuICAgIC8vICAgICAgICAge2VkaXRpbmdUb2RvID09PSB0b2RvID8gKFxuICAgIC8vICAgICAgICAgICA8PlxuICAgIC8vICAgICAgICAgICAgIDxpbnB1dFxuICAgIC8vICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgIC8vICAgICAgICAgICAgICAgdmFsdWU9e3RvZG8udGV4dH1cbiAgICAvLyAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RWRpdGluZ1RvZG8oeyAuLi5lZGl0aW5nVG9kbywgdGV4dDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgLy8gICAgICAgICAgICAgLz5cbiAgICAvLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRUb2RvKHRvZG8uX2lkKX0+U2F2ZTwvYnV0dG9uPlxuICAgIC8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ1RvZG8obnVsbCl9PkNhbmNlbDwvYnV0dG9uPlxuICAgIC8vICAgICAgICAgICA8Lz5cbiAgICAvLyAgICAgICAgICkgOiAoXG4gICAgLy8gICAgICAgICAgIDw+XG4gICAgLy8gICAgICAgICAgICAge3RvZG8udGV4dH1cbiAgICAvLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdUb2RvKHRvZG8pfT5FZGl0PC9idXR0b24+XG4gICAgLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVUb2RvKHRvZG8uX2lkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgLy8gICAgICAgICAgIDwvPlxuICAgIC8vICAgICAgICAgKX1cbiAgICAvLyAgICAgICA8L2xpPlxuICAgIC8vICAgICApKX1cbiAgICAvLyAgIDwvdWw+XG4gICAgLy8gPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=