/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar say = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(text) {\n    var _ref2, _ref2$data, audioContent;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n\n            setting.input.text = text;\n            _context.next = 4;\n            return _axios2.default.post('https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyDqXWG_Pw4kKldwZCBQYsvNYaw7oeV7kG0', setting);\n\n          case 4:\n            _ref2 = _context.sent;\n            _ref2$data = _ref2.data;\n            _ref2$data = _ref2$data === undefined ? {} : _ref2$data;\n            audioContent = _ref2$data.audioContent;\n\n\n            audio.src = 'data:audio/wav;base64,' + audioContent;\n            source.connect(analyser);\n            analyser.connect(audioCtx.destination);\n            audio.play();\n            return _context.abrupt('return', audioContent);\n\n          case 15:\n            _context.prev = 15;\n            _context.t0 = _context['catch'](0);\n\n            console.log('error', _context.t0);\n\n          case 18:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[0, 15]]);\n  }));\n\n  return function say(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar _lodash = __webpack_require__(/*! lodash */ \"../../node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _axios = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// import \nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\nvar input = document.getElementById('input');\nvar mouth = { x: 0, y: 0, w: 20, h: 20 };\nvar text = input.value;\nvar time = 0;\nvar setting = {\n  audioConfig: {\n    audioEncoding: \"LINEAR16\"\n  },\n  input: {\n    text: \"Фыр фыр фыр\"\n  },\n  voice: {\n    languageCode: \"ru-ru\"\n  }\n};\n\nvar keyHandler = _lodash2.default.debounce(function () {\n  say(input.value);\n}, 1000, false);\n\nsay(input.value);\n\ninput.addEventListener('keyup', keyHandler);\n\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n\nvar image = new Image();\n\nimage.src = '/assets/img/lama.png';\n\nimage.addEventListener('load', function () {\n  mouth = { x: canvas.width / 2 + image.width / 2 * 0.12, y: canvas.height - image.height * 0.75, w: 20, h: 20 };\n  ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height - image.height, image.width, image.height);\n});\n\nfunction roundRect(ctx, x, y, width, height, radius, fill, stroke) {\n  if (typeof stroke == 'undefined') {\n    stroke = true;\n  }\n  if (typeof radius === 'undefined') {\n    radius = 5;\n  }\n  if (typeof radius === 'number') {\n    radius = { tl: radius, tr: radius, br: radius, bl: radius };\n  } else {\n    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };\n    for (var side in defaultRadius) {\n      radius[side] = radius[side] || defaultRadius[side];\n    }\n  }\n  ctx.beginPath();\n  ctx.moveTo(x + radius.tl, y);\n  ctx.lineTo(x + width - radius.tr, y);\n  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);\n  ctx.lineTo(x + width, y + height - radius.br);\n  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);\n  ctx.lineTo(x + radius.bl, y + height);\n  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);\n  ctx.lineTo(x, y + radius.tl);\n  ctx.quadraticCurveTo(x, y, x + radius.tl, y);\n  ctx.closePath();\n  if (fill) {\n    ctx.fill();\n  }\n  if (stroke) {\n    ctx.stroke();\n  }\n}\n\nvar audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context\nvar analyser = audioCtx.createAnalyser();\n\nanalyser.fftSize = 64;\nvar bufferLength = analyser.frequencyBinCount;\nvar dataArray = new Uint8Array(bufferLength);\nvar dataArray2 = new Uint8Array(bufferLength);\n\nanalyser.getByteTimeDomainData(dataArray);\n\nvar audio = new Audio();\nvar source = audioCtx.createMediaElementSource(audio);\n\nfunction speakAnimation(t) {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  analyser.getByteFrequencyData(dataArray);\n  analyser.getByteFrequencyData(dataArray2);\n  // const h = dataArray[0];\n  var h = Math.abs(dataArray.reduce(function (sum, val) {\n    return sum + val;\n  }, 0));\n  var h2 = Math.abs(dataArray2.reduce(function (sum, val) {\n    return sum + val;\n  }, 0));\n  h2 = h2 < 0 ? 0 : h2;\n\n  ctx.beginPath();\n  ctx.arc(mouth.x, mouth.y - 20, 20 + dataArray[5], 0, 2 * Math.PI);\n  ctx.fillStyle = '#fee0d4';\n  ctx.fill();\n  ctx.lineWidth = 5;\n  ctx.strokeStyle = '#894554';\n  ctx.stroke();\n\n  ctx.lineWidth = 3;\n  ctx.lineCap = \"round\";\n  ctx.lineJoin = \"round\";\n  ctx.strokeStyle = '#964762';\n\n  // ctx.lineTo(canvas.width, canvas.height/2);\n\n  ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height - image.height, image.width, image.height);\n  // ctx.rect(mouth.x, mouth.y, 10, 10);\n  roundRect(ctx, mouth.x, mouth.y, 12, 1 + dataArray[5] / 17, { tl: 0, tr: 0, br: 4, bl: 4 }, 'black', 'transparent');\n  window.requestAnimationFrame(speakAnimation);\n}\n\nspeakAnimation();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy8gaW1wb3J0IFxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xubGV0IG1vdXRoID0ge3g6IDAsIHk6IDAsIHc6IDIwLCBoOiAyMH07XG5sZXQgdGV4dCA9IGlucHV0LnZhbHVlO1xubGV0IHRpbWUgPSAwO1xubGV0IHNldHRpbmcgPSB7XG4gIGF1ZGlvQ29uZmlnOiB7XG4gICAgYXVkaW9FbmNvZGluZzogXCJMSU5FQVIxNlwiLFxuICB9LFxuICBpbnB1dDoge1xuICAgIHRleHQ6IFwi0KTRi9GAINGE0YvRgCDRhNGL0YBcIlxuICB9LFxuICB2b2ljZToge1xuICAgIGxhbmd1YWdlQ29kZTogXCJydS1ydVwiLFxuICB9XG59XG5cbmNvbnN0IGtleUhhbmRsZXIgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgc2F5KGlucHV0LnZhbHVlKTtcbn0sIDEwMDAsIGZhbHNlKTtcblxuc2F5KGlucHV0LnZhbHVlKTtcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlIYW5kbGVyKVxuXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbmxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG5pbWFnZS5zcmMgPSAnL2Fzc2V0cy9pbWcvbGFtYS5wbmcnO1xuXG5pbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBtb3V0aCA9IHt4OiBjYW52YXMud2lkdGggLyAyICsgKGltYWdlLndpZHRoIC8gMiAqIDAuMTIpLCB5OiBjYW52YXMuaGVpZ2h0IC0gaW1hZ2UuaGVpZ2h0ICogMC43NSwgdzogMjAsIGg6IDIwfTtcbiAgY3R4LmRyYXdJbWFnZShpbWFnZSwgY2FudmFzLndpZHRoIC8gMiAtIGltYWdlLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAtIGltYWdlLmhlaWdodCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG59KTtcblxuZnVuY3Rpb24gcm91bmRSZWN0KGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzLCBmaWxsLCBzdHJva2UpIHtcbiAgaWYgKHR5cGVvZiBzdHJva2UgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdHJva2UgPSB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgcmFkaXVzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJhZGl1cyA9IDU7XG4gIH1cbiAgaWYgKHR5cGVvZiByYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgcmFkaXVzID0ge3RsOiByYWRpdXMsIHRyOiByYWRpdXMsIGJyOiByYWRpdXMsIGJsOiByYWRpdXN9O1xuICB9IGVsc2Uge1xuICAgIHZhciBkZWZhdWx0UmFkaXVzID0ge3RsOiAwLCB0cjogMCwgYnI6IDAsIGJsOiAwfTtcbiAgICBmb3IgKHZhciBzaWRlIGluIGRlZmF1bHRSYWRpdXMpIHtcbiAgICAgIHJhZGl1c1tzaWRlXSA9IHJhZGl1c1tzaWRlXSB8fCBkZWZhdWx0UmFkaXVzW3NpZGVdO1xuICAgIH1cbiAgfVxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeCArIHJhZGl1cy50bCwgeSk7XG4gIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLnRyLCB5KTtcbiAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMudHIpO1xuICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cy5icik7XG4gIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaXVzLmJyLCB5ICsgaGVpZ2h0KTtcbiAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cy5ibCk7XG4gIGN0eC5saW5lVG8oeCwgeSArIHJhZGl1cy50bCk7XG4gIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMudGwsIHkpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGlmIChmaWxsKSB7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuICBpZiAoc3Ryb2tlKSB7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cbmNvbnN0IGF1ZGlvQ3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7IC8vIGRlZmluZSBhdWRpbyBjb250ZXh0XG5jb25zdCBhbmFseXNlciA9IGF1ZGlvQ3R4LmNyZWF0ZUFuYWx5c2VyKCk7XG5cbmFuYWx5c2VyLmZmdFNpemUgPSA2NDtcbnZhciBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbnZhciBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xudmFyIGRhdGFBcnJheTIgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuXG5hbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEoZGF0YUFycmF5KTtcblxuY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTtcbmNvbnN0IHNvdXJjZSA9IGF1ZGlvQ3R4LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNheSh0ZXh0KSB7XG4gIHRyeSB7XG4gICAgc2V0dGluZy5pbnB1dC50ZXh0ID0gdGV4dDtcbiAgICBjb25zdCB7IGRhdGE6IHsgYXVkaW9Db250ZW50IH0gPSB7fSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly90ZXh0dG9zcGVlY2guZ29vZ2xlYXBpcy5jb20vdjFiZXRhMS90ZXh0OnN5bnRoZXNpemU/a2V5PUFJemFTeURxWFdHX1B3NGtLbGR3WkNCUVlzdk5ZYXc3b2VWN2tHMCcsIHNldHRpbmcpO1xuXG4gICAgYXVkaW8uc3JjID0gJ2RhdGE6YXVkaW8vd2F2O2Jhc2U2NCwnICsgYXVkaW9Db250ZW50O1xuICAgIHNvdXJjZS5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICBhbmFseXNlci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgcmV0dXJuIGF1ZGlvQ29udGVudDtcbiAgfSBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3BlYWtBbmltYXRpb24odCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5KTtcbiAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZGF0YUFycmF5Mik7XG4gIC8vIGNvbnN0IGggPSBkYXRhQXJyYXlbMF07XG4gIGNvbnN0IGggPSBNYXRoLmFicyhkYXRhQXJyYXkucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgdmFsLCAwKSk7XG4gIGxldCBoMiA9IE1hdGguYWJzKGRhdGFBcnJheTIucmVkdWNlKChzdW0sIHZhbCkgPT4gc3VtICsgdmFsLCAwKSk7XG4gIGgyID0gaDIgPCAwID8gMCA6IGgyO1xuXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyhtb3V0aC54LCBtb3V0aC55IC0gMjAsIDIwICsgZGF0YUFycmF5WzVdLCAwLCAyICogTWF0aC5QSSk7XG4gIGN0eC5maWxsU3R5bGUgPSAnI2ZlZTBkNCc7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5saW5lV2lkdGggPSA1O1xuICBjdHguc3Ryb2tlU3R5bGUgPSAnIzg5NDU1NCc7XG4gIGN0eC5zdHJva2UoKTtcblxuICBjdHgubGluZVdpZHRoID0gMztcbiAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyM5NjQ3NjInO1xuXG4gIC8vIGN0eC5saW5lVG8oY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LzIpO1xuXG4gIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIGNhbnZhcy53aWR0aCAvIDIgLSBpbWFnZS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLSBpbWFnZS5oZWlnaHQsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAvLyBjdHgucmVjdChtb3V0aC54LCBtb3V0aC55LCAxMCwgMTApO1xuICByb3VuZFJlY3QoY3R4LCBtb3V0aC54LCBtb3V0aC55LCAxMiwgMSArIGRhdGFBcnJheVs1XSAvIDE3LCB7dGw6IDAsIHRyOiAwLCBicjogNCwgYmw6IDR9LCAnYmxhY2snLCAndHJhbnNwYXJlbnQnKTtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzcGVha0FuaW1hdGlvbik7XG59XG5cbnNwZWFrQW5pbWF0aW9uKCk7XG4iXSwibWFwcGluZ3MiOiI7OztBQXdGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOzs7OztBQXhGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQVBBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi @babel/polyfill ./app.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./app.js */"./app.js");


/***/ })

/******/ });