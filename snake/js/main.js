const SnakeView = require('./view.js');

$( () => {
  const $rootEl = $('.snake');
  new SnakeView($rootEl);
});
