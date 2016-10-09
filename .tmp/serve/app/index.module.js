/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = __webpack_require__(2);
	
	var _index3 = __webpack_require__(3);
	
	var _main = __webpack_require__(4);
	
	var _githubContributor = __webpack_require__(5);
	
	var _webDevTec = __webpack_require__(6);
	
	var _navbar = __webpack_require__(7);
	
	var _malarkey = __webpack_require__(8);
	
	/* global malarkey:false, moment:false */
	
	angular.module('myMessageFront', ['ui.router', 'ui.bootstrap', 'toastr']).constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).controller('MainController', _main.MainController).directive('acmeNavbar', _navbar.NavbarDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	
	  $stateProvider.state('home', {
	    url: '/',
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  });
	
	  $urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';
	
	  $log.debug('runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainController = exports.MainController = function () {
	  function MainController() {
	    'ngInject';
	
	    _classCallCheck(this, MainController);
	  }
	
	  _createClass(MainController, [{
	    key: 'postMessage',
	    value: function postMessage() {
	      console.log('post');
	    }
	  }]);
	
	  return MainController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';
	
	    _classCallCheck(this, GithubContributorService);
	
	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }
	
	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;
	
	      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
	
	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);
	
	  return GithubContributorService;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WebDevTecService = exports.WebDevTecService = function () {
	  function WebDevTecService() {
	    'ngInject';
	
	    _classCallCheck(this, WebDevTecService);
	
	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'Angular UI Bootstrap',
	      'url': 'http://angular-ui.github.io/bootstrap/',
	      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
	      'logo': 'ui-bootstrap.png'
	    }, {
	      'title': 'Sass (Node)',
	      'url': 'https://github.com/sass/node-sass',
	      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	      'logo': 'node-sass.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	  }
	
	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);
	
	  return WebDevTecService;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function NavbarDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var NavbarController = function NavbarController(moment) {
	  'ngInject';
	
	  // "this.creationDate" is available by directive option "bindToController: true"
	
	  _classCallCheck(this, NavbarController);
	
	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.MalarkeyDirective = MalarkeyDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function MalarkeyDirective(malarkey) {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };
	
	  return directive;
	
	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });
	
	    el.addClass('acme-malarkey');
	
	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });
	
	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });
	
	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}
	
	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';
	
	    _classCallCheck(this, MalarkeyController);
	
	    this.$log = $log;
	    this.contributors = [];
	
	    this.activate(githubContributor);
	  }
	
	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;
	
	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;
	
	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;
	
	        return _this2.contributors;
	      });
	    }
	  }]);
	
	  return MalarkeyController;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTFjM2RkOGEyNTg3NDk2OGI3YWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnN0YW50IiwibWFsYXJrZXkiLCJtb21lbnQiLCJjb25maWciLCJydW4iLCJzZXJ2aWNlIiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIiRsb2dQcm92aWRlciIsInRvYXN0ckNvbmZpZyIsImRlYnVnRW5hYmxlZCIsImFsbG93SHRtbCIsInRpbWVPdXQiLCJwb3NpdGlvbkNsYXNzIiwicHJldmVudER1cGxpY2F0ZXMiLCJwcm9ncmVzc0JhciIsInJvdXRlckNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXJBcyIsIm90aGVyd2lzZSIsInJ1bkJsb2NrIiwiJGxvZyIsImRlYnVnIiwiTWFpbkNvbnRyb2xsZXIiLCJjb25zb2xlIiwibG9nIiwiJGh0dHAiLCJhcGlIb3N0IiwibGltaXQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInRvSnNvbiIsIldlYkRldlRlY1NlcnZpY2UiLCJOYXZiYXJEaXJlY3RpdmUiLCJyZXN0cmljdCIsInNjb3BlIiwiY3JlYXRpb25EYXRlIiwiTmF2YmFyQ29udHJvbGxlciIsImJpbmRUb0NvbnRyb2xsZXIiLCJyZWxhdGl2ZURhdGUiLCJmcm9tTm93IiwiTWFsYXJrZXlEaXJlY3RpdmUiLCJleHRyYVZhbHVlcyIsInRlbXBsYXRlIiwibGluayIsImxpbmtGdW5jIiwiTWFsYXJrZXlDb250cm9sbGVyIiwiZWwiLCJhdHRyIiwidm0iLCJ3YXRjaGVyIiwidHlwaXN0IiwidHlwZVNwZWVkIiwiZGVsZXRlU3BlZWQiLCJwYXVzZURlbGF5IiwibG9vcCIsInBvc3RmaXgiLCJhZGRDbGFzcyIsImZvckVhY2giLCJ2YWx1ZSIsInR5cGUiLCJwYXVzZSIsImRlbGV0ZSIsIiR3YXRjaCIsImNvbnRyaWJ1dG9ycyIsImNvbnRyaWJ1dG9yIiwibG9naW4iLCIkb24iLCJnaXRodWJDb250cmlidXRvciIsImFjdGl2YXRlIiwiZ2V0Q29udHJpYnV0b3JzIiwiaW5mbyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsU0FBUUMsT0FBTyxrQkFBa0IsQ0FBQyxhQUFhLGdCQUFnQixXQUM1REMsU0FBUyxZQUFZQyxVQUNyQkQsU0FBUyxV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TW1ELG1CQUFtQjtLQUNwQzs7S0FEb0M7O0tBR3BDLEtBQUtuRCxPQUFPQTtLQUNaLEtBQUsrQyxlQUFlOztLQUVwQixLQUFLSyxTQUFTRDs7O0dBZ0JoQixhQUFhLG9CQUFvQixDQUFDO0tBQ2hDLEtBQUs7S0FDTCxPQUFPLFNBQVMsU0FmVEEsbUJBQW1CO09BQUE7O09BQzFCLE9BQU8sS0FBS0UsZ0JBQWdCRixtQkFBbUIxQyxLQUFLLFlBQU07U0FDeEQsTUFBS1QsS0FBS3NELEtBQUs7OztNQW9CaEI7S0FDRCxLQUFLO0tBQ0wsT0FBTyxTQUFTLGdCQWxCRkgsbUJBQW1CO09BQUE7O09BQ2pDLE9BQU9BLGtCQUFrQkUsZ0JBQWdCLElBQUk1QyxLQUFLLFVBQUNFLE1BQVM7U0FDMUQsT0FBS29DLGVBQWVwQzs7U0FFcEIsT0FBTyxPQUFLb0M7Ozs7O0dBeUJoQixPQUFPIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZTFjM2RkOGEyNTg3NDk2OGI3YWJcbiAqKi8iLCIvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2luZGV4LmNvbmZpZyc7XG5pbXBvcnQgeyByb3V0ZXJDb25maWcgfSBmcm9tICcuL2luZGV4LnJvdXRlJztcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xuaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vbWFpbi5jb250cm9sbGVyJztcbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZiYXJEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XG5cbmFuZ3VsYXIubW9kdWxlKCdteU1lc3NhZ2VGcm9udCcsIFsndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd0b2FzdHInXSlcbiAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxuICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcbiAgLmNvbmZpZyhjb25maWcpXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxuICAucnVuKHJ1bkJsb2NrKVxuICAuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBHaXRodWJDb250cmlidXRvclNlcnZpY2UpXG4gIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBXZWJEZXZUZWNTZXJ2aWNlKVxuICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcilcbiAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIE5hdmJhckRpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgTWFsYXJrZXlEaXJlY3RpdmUpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gcm91dGVyQ29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdob21lJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgucm91dGUuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gcnVuQmxvY2sgKCRsb2cpIHtcbiAgJ25nSW5qZWN0JztcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgucnVuLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgfVxuXG4gIHBvc3RNZXNzYWdlKCl7XG4gICAgY29uc29sZS5sb2coJ3Bvc3QnKVxuICB9XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQ9MzApIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5pby9ib290c3RyYXAvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBjb21wb25lbnRzIHdyaXR0ZW4gaW4gcHVyZSBBbmd1bGFySlMgYnkgdGhlIEFuZ3VsYXJVSSBUZWFtLicsXG4gICAgICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxuICAgICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGdldFRlYygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vbWVudCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBcInRoaXMuY3JlYXRpb25EYXRlXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIGxldCB3YXRjaGVyO1xuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==