class View {
  constructor(game, $el) {
    this.game = game;
    this.viewContainer = $el;
    this.setupTowers(3);
  }

  setupTowers(numDiscs) {
    for(let i = 0; i < 3; i++) {
      const $tower= $('<ul class="tower"></ul>');
      $tower.attr("number", i);
      this.viewContainer.append($tower);
    }

    const $tower = $("ul[number='0']");
    for (var j = 0; j < numDiscs; j++) {
      const $disc=$(`<li class="disc disc-${j + 1}"> </li>`);
      $disc.attr("size", j);
      $tower.append($disc);
    }
  }



}


module.exports = View;
