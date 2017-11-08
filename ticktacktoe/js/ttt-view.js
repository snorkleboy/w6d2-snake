class View {
  constructor(game, $el) {
    this.game=game;
    this.viewContainer=$el;
    this.setupBoard();
    this.bindEvents();


  }

  bindEvents() {
    const $uls=$('ul');
    $uls.on('click','li', function (event){
      this.makeMove($(event.target));
    }.bind(this));
  }
  unBindEvents() {
    const $uls=$('ul');
    $uls.off('click','li');
    const $lis=$('li');
    $lis.removeClass('hover');
  }


  makeMove($square) {
    const pos=$square.attr('pos').split(',').map((el)=>parseInt(el));
    if($square.hasClass('hover')){
      $square.removeClass('hover').text(`${this.game.currentPlayer}`);
      $square.addClass(`${this.game.currentPlayer}`);
      $square.addClass('clicked');
      this.game.playMove(pos);



      if(this.game.isOver()){
        this.unBindEvents();
        const winMark=this.game.winner();
        if (winMark===null){
          $('li').addClass('lost');
          this.viewContainer.append($(`<h1>DRAW!</h1>`));

        }else{
          // debugger;
          const $winSquares= $(`.${winMark}`);
          const $lostsquares= winMark==='x'? $('.o') : $('.x');

          $lostsquares.addClass('lost');
          $winSquares.removeClass('clicked');
          $winSquares.addClass('win');
          this.viewContainer.append($(`<h1>${winMark} wins!</h1>`));
        }
      }
    }else{
      console.log("you fucked up");
    }
  }

  setupBoard() {
    this.rowMaker(3);


  }
  rowMaker(rows){
    const grid=[];
    for(let i=0; i< rows;i++){
      const $row= $('<ul class="row"></ul>');
      this.viewContainer.append($row);
      for (var j = 0; j < 3; j++) {
        const $square=$('<li class="square hover"></li>');
        $square.attr("pos",[i,j]);
        $row.append($square);
      }
    }
    return grid;
  }
}

module.exports = View;
