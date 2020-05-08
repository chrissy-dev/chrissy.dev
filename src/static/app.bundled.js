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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/_assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_assets/scripts/app.js":
/*!************************************!*\
  !*** ./src/_assets/scripts/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  'use strict';\n\n  var navigationToggle = document.querySelector('[data-id=\"nav-toggle\"]');\n  var navigationItems = document.querySelector('[data-id=\"nav-items\"]');\n  var isOpen = false;\n  navigationToggle.addEventListener('click', function (event) {\n    isOpen = !isOpen;\n    isOpen ? navigationToggle.textContent = \"Close\" : navigationToggle.textContent = \"Menu\";\n    navigationItems.classList.toggle('hidden');\n  }, false);\n  var images = document.querySelectorAll('img.lazy');\n  var options = {\n    root: null,\n    // Page as root\n    // rootMargin: (top, right bottom, left)\n    rootMargin: '10px 540px 320px 10px',\n    threshold: 0\n  };\n\n  var fetchImage = function (url) {\n    return new Promise(function (resolve, reject) {\n      var image = new Image();\n      image.src = url;\n      image.onload = resolve;\n      image.onerror = reject;\n    });\n  };\n\n  var loadImage = function (image) {\n    var src = image.dataset.src;\n    fetchImage(src).then(function () {\n      image.classList.add('fadeIn');\n      image.src = src;\n    });\n  };\n\n  var handleIntersection = function (entries, observer) {\n    entries.forEach(function (entry) {\n      if (entry.intersectionRatio > 0) {\n        loadImage(entry.target);\n      }\n    });\n  }; // The observer for the images on the page\n\n\n  var observer = new IntersectionObserver(handleIntersection, options);\n  images.forEach(function (img) {\n    if ('IntersectionObserver' in window) {\n      // LazyLoad images using IntersectionObserver\n      observer.observe(img);\n    } else {\n      // Load all images at once\n      loadImage(img);\n    }\n  }); // Set a variable for our button element.\n\n  const scrollToTopButton = document.getElementById('scroll-to-top'); // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.\n\n  const scrollFunc = () => {\n    // Get the current scroll value\n    let y = window.scrollY; // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!\n\n    if (y > 320) {\n      scrollToTopButton.classList.remove('hidden');\n    } else {\n      scrollToTopButton.classList.add('hidden');\n    }\n  };\n\n  window.addEventListener(\"scroll\", scrollFunc);\n\n  const scrollToTop = () => {\n    // Let's set a variable for the number of pixels we are from the top of the document.\n    const c = document.documentElement.scrollTop || document.body.scrollTop; // If that number is greater than 0, we'll scroll back to 0, or the top of the document.\n    // We'll also animate that scroll with requestAnimationFrame:\n    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame\n\n    if (c > 0) {\n      window.requestAnimationFrame(scrollToTop); // ScrollTo takes an x and a y coordinate.\n      // Increase the '10' value to get a smoother/slower scroll!\n\n      window.scrollTo(0, c - c / 10);\n    }\n  }; // When the button is clicked, run our ScrolltoTop function above!\n\n\n  scrollToTopButton.onclick = function (e) {\n    e.preventDefault();\n    scrollToTop();\n  };\n})();\n\n//# sourceURL=webpack:///./src/_assets/scripts/app.js?");

/***/ })

/******/ });