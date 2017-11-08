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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const SnakeView = __webpack_require__(1);

$( () => {
  const $rootEl = $('.snake');
  new SnakeView($rootEl);
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(2);

class View {
  constructor($el) {
    this.display = $el;
    this.board = new Board();
    this.bindEvents();
    this.setupMap();
    this.displayApple();
  }

  bindEvents() {
    $(document).on("keydown", function(event) {
      switch (event.which) {
        case 37:
          this.board.moveSnake("W");
          break;
        case 38:
          this.board.moveSnake("N");
          break;
        case 39:
          this.board.moveSnake("E");
          break;
        case 40:
          this.board.moveSnake("S");
          break;
        default:
          break;
      }
    }.bind(this));
  }

  setupMap() {
    for(let i = 0; i <= this.board.size; i++){
      const $row= $('<ul class="row"></ul>');
      this.display.append($row);
      for (var j = 0; j < this.board.size; j++) {
        const $square=$('<li class="square"></li>');
        $square.attr("pos",[i,j]);
        $row.append($square);
      }
    }
  }

  displayApple() {
    const $apple = $(`li[pos = ${this.board.apples[0].toString()}]`);
    $apple.addClass('apple');
  }
}

module.exports = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Snake = __webpack_require__(3);

class Board {
  constructor() {
    this.snake = new Snake();
    this.apples = [];
    this.size = 20;
    this.placeApple();
  }

  moveSnake(newDirection) {
    this.snake.turn(newDirection);
  }

  placeApple() {
    const x = Math.floor(Math.random() * this.size);
    const y = Math.floor(Math.random() * this.size);
    this.apples.push([x, y]);
  }
}

module.exports = Board;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Snake {
  constructor() {
    const DIRECTIONS = ["N", "E", "S", "W"];
    Object.freeze(DIRECTIONS);
    this.direction = "N";
    this.segments = [];
  }

  move() {
    this.takeMove(this.calculateMove());
  }

  turn(newDirection) {
    this.direction = newDirection;
  }

  calculateMove() {
    const nextPos = this.segments[0];
    switch (this.direction) {
      case "N":
        nextPos[1] = nextPos[1] - 1;
        return nextPos;
      case "E":
        nextPos[0] = nextPos[0] + 1;
        return nextPos;
      case "S":
        nextPos[1] = nextPos[1] + 1;
        return nextPos;
      case "W":
        nextPos[0] = nextPos[0] - 1;
        return nextPos;
      default:
        return nextPos;
    }
  }

  takeMove(newPos) {
    this.segments.unshift(newPos);
    this.segments.pop();
  }

}

module.exports = Snake;


/***/ })
/******/ ]);