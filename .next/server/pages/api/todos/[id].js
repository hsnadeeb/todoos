module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/todos/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/todos/[id].js":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
// pages/api/todos/[id].js

const uri = 'mongodb+srv://shaz:YaEvs1cXGsw56jB9@todoos.1wqp0k6.mongodb.net/?retryWrites=true&w=majority';
const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"](uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
async function handler(req, res) {
  const {
    query: {
      id
    },
    method,
    body
  } = req;

  try {
    await client.connect();
    const database = client.db('todoos');
    const collection = database.collection('todos');

    switch (method) {
      case 'GET':
        const todo = await collection.findOne({
          _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__["ObjectId"](id)
        });

        if (!todo) {
          return res.status(404).json({
            success: false,
            error: 'Todo not found'
          });
        } // Continue with the rest of the code using `todo`...


        res.status(200).json({
          success: true,
          data: todo
        });
        break;

      case 'PUT':
        const updatedTodo = await collection.findOneAndUpdate({
          _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__["ObjectId"](id)
        }, {
          $set: body
        }, {
          returnDocument: 'after'
        });

        if (!updatedTodo.value) {
          return res.status(404).json({
            success: false,
            error: 'Todo not found'
          });
        }

        res.status(200).json({
          success: true,
          data: updatedTodo.value
        });
        break;

      case 'DELETE':
        const deleteResult = await collection.deleteOne({
          _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__["ObjectId"](id)
        });

        if (deleteResult.deletedCount === 0) {
          return res.status(404).json({
            success: false,
            error: 'Todo not found'
          });
        }

        res.status(200).json({
          success: true,
          data: {}
        });
        break;

      default:
        res.status(405).json({
          success: false,
          error: 'Method not allowed'
        });
        break;
    }
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  } finally {
    await client.close();
  }
} // // pages/api/todos/[id].js
// import { MongoClient, ObjectId } from 'mongodb';
// const uri = 'mongodb+srv://shaz:YaEvs1cXGsw56jB9@todoos.1wqp0k6.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// export default async function handler(req, res) {
//   const {
//     query: { id },
//     method,
//     body,
//   } = req;
//   try {
//     await client.connect();
//     const database = client.db('todoos');
//     const collection = database.collection('todos');
//     switch (method) {
//       case 'GET':
//         const todo = await collection.findOne({ _id: new ObjectId(id) });
//         if (!todo) {
//           return res.status(404).json({ success: false, error: 'Todo not found' });
//         }
//         res.status(200).json({ success: true, data: todo });
//         break;
//       case 'PUT':
//         const updatedTodo = await collection.findOneAndUpdate(
//           { _id: new ObjectId(id) },
//           { $set: body },
//           { returnDocument: 'after' }
//         );
//         if (!updatedTodo.value) {
//           return res.status(404).json({ success: false, error: 'Todo not found' });
//         }
//         res.status(200).json({ success: true, data: updatedTodo.value });
//         break;
//       case 'DELETE':
//         const deleteResult = await collection.deleteOne({ _id: new ObjectId(id) });
//         if (deleteResult.deletedCount === 0) {
//           return res.status(404).json({ success: false, error: 'Todo not found' });
//         }
//         res.status(200).json({ success: true, data: {} });
//         break;
//       default:
//         res.status(405).json({ success: false, error: 'Method not allowed' });
//         break;
//     }
//   } catch (error) {
//     console.error('Error in API route:', error);
//     res.status(500).json({ success: false, error: 'Server Error' });
//   } finally {
//     await client.close();
//   }
// }

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3RvZG9zLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiXSwibmFtZXMiOlsidXJpIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsImJvZHkiLCJjb25uZWN0IiwiZGF0YWJhc2UiLCJkYiIsImNvbGxlY3Rpb24iLCJ0b2RvIiwiZmluZE9uZSIsIl9pZCIsIk9iamVjdElkIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciIsImRhdGEiLCJ1cGRhdGVkVG9kbyIsImZpbmRPbmVBbmRVcGRhdGUiLCIkc2V0IiwicmV0dXJuRG9jdW1lbnQiLCJ2YWx1ZSIsImRlbGV0ZVJlc3VsdCIsImRlbGV0ZU9uZSIsImRlbGV0ZWRDb3VudCIsImNvbnNvbGUiLCJjbG9zZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFF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QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCRSxjQUFJLEVBQUU7QUFBdkIsU0FBckI7QUFDQTs7QUFFRjtBQUNFakIsV0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxLQUFYO0FBQWtCQyxlQUFLLEVBQUU7QUFBekIsU0FBckI7QUFDQTtBQW5DSjtBQXFDRCxHQTFDRCxDQTBDRSxPQUFPQSxLQUFQLEVBQWM7QUFDZFUsV0FBTyxDQUFDVixLQUFSLENBQWMscUJBQWQsRUFBcUNBLEtBQXJDO0FBQ0FoQixPQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsV0FBSyxFQUFFO0FBQXpCLEtBQXJCO0FBQ0QsR0E3Q0QsU0E2Q1U7QUFDUixVQUFNdEIsTUFBTSxDQUFDaUMsS0FBUCxFQUFOO0FBQ0Q7QUFDRixDLENBTUQ7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDNUhBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS90b2Rvcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS5qc1wiKTtcbiIsIi8vIHBhZ2VzL2FwaS90b2Rvcy9baWRdLmpzXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuY29uc3QgdXJpID0gJ21vbmdvZGIrc3J2Oi8vc2hhejpZYUV2czFjWEdzdzU2akI5QHRvZG9vcy4xd3FwMGs2Lm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknO1xyXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICBtZXRob2QsXHJcbiAgICBib2R5LFxyXG4gIH0gPSByZXE7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG4gICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoJ3RvZG9vcycpO1xyXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oJ3RvZG9zJyk7XHJcblxyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICBjb25zdCB0b2RvID0gYXdhaXQgY29sbGVjdGlvbi5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXRvZG8pIHtcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1RvZG8gbm90IGZvdW5kJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgcmVzdCBvZiB0aGUgY29kZSB1c2luZyBgdG9kb2AuLi5cclxuICAgICAgICBcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRvZG8gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdQVVQnOlxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvID0gYXdhaXQgY29sbGVjdGlvbi5maW5kT25lQW5kVXBkYXRlKFxyXG4gICAgICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSxcclxuICAgICAgICAgIHsgJHNldDogYm9keSB9LFxyXG4gICAgICAgICAgeyByZXR1cm5Eb2N1bWVudDogJ2FmdGVyJyB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoIXVwZGF0ZWRUb2RvLnZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUb2RvIG5vdCBmb3VuZCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZFRvZG8udmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0pO1xyXG4gICAgICAgIGlmIChkZWxldGVSZXN1bHQuZGVsZXRlZENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUb2RvIG5vdCBmb3VuZCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YToge30gfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gQVBJIHJvdXRlOicsIGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmVyIEVycm9yJyB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgY2xpZW50LmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gLy8gcGFnZXMvYXBpL3RvZG9zL1tpZF0uanNcclxuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG4vLyBjb25zdCB1cmkgPSAnbW9uZ29kYitzcnY6Ly9zaGF6OllhRXZzMWNYR3N3NTZqQjlAdG9kb29zLjF3cXAwazYubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSc7XHJcbi8vIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUgfSk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8vICAgY29uc3Qge1xyXG4vLyAgICAgcXVlcnk6IHsgaWQgfSxcclxuLy8gICAgIG1ldGhvZCxcclxuLy8gICAgIGJvZHksXHJcbi8vICAgfSA9IHJlcTtcclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbi8vICAgICBjb25zdCBkYXRhYmFzZSA9IGNsaWVudC5kYigndG9kb29zJyk7XHJcbi8vICAgICBjb25zdCBjb2xsZWN0aW9uID0gZGF0YWJhc2UuY29sbGVjdGlvbigndG9kb3MnKTtcclxuXHJcbi8vICAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4vLyAgICAgICBjYXNlICdHRVQnOlxyXG4vLyAgICAgICAgIGNvbnN0IHRvZG8gPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSk7XHJcbi8vICAgICAgICAgaWYgKCF0b2RvKSB7XHJcbi8vICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUb2RvIG5vdCBmb3VuZCcgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdG9kbyB9KTtcclxuLy8gICAgICAgICBicmVhaztcclxuXHJcbi8vICAgICAgIGNhc2UgJ1BVVCc6XHJcbi8vICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG8gPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmVBbmRVcGRhdGUoXHJcbi8vICAgICAgICAgICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9LFxyXG4vLyAgICAgICAgICAgeyAkc2V0OiBib2R5IH0sXHJcbi8vICAgICAgICAgICB7IHJldHVybkRvY3VtZW50OiAnYWZ0ZXInIH1cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICAgIGlmICghdXBkYXRlZFRvZG8udmFsdWUpIHtcclxuLy8gICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1RvZG8gbm90IGZvdW5kJyB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cGRhdGVkVG9kby52YWx1ZSB9KTtcclxuLy8gICAgICAgICBicmVhaztcclxuXHJcbi8vICAgICAgIGNhc2UgJ0RFTEVURSc6XHJcbi8vICAgICAgICAgY29uc3QgZGVsZXRlUmVzdWx0ID0gYXdhaXQgY29sbGVjdGlvbi5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSk7XHJcbi8vICAgICAgICAgaWYgKGRlbGV0ZVJlc3VsdC5kZWxldGVkQ291bnQgPT09IDApIHtcclxuLy8gICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1RvZG8gbm90IGZvdW5kJyB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7fSB9KTtcclxuLy8gICAgICAgICBicmVhaztcclxuXHJcbi8vICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xyXG4vLyAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBBUEkgcm91dGU6JywgZXJyb3IpO1xyXG4vLyAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2ZXIgRXJyb3InIH0pO1xyXG4vLyAgIH0gZmluYWxseSB7XHJcbi8vICAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcclxuLy8gICB9XHJcbi8vIH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9