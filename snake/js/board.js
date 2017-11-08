const Snake = require('./snake.js');

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
