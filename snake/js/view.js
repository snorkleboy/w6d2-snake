const Board = require('./board.js');

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
