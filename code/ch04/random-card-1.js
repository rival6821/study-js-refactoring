var suits = ['H', 'D', 'S', 'C'];
var values = ['1', '2', '3', '4', '5', '6',
              '7', '8', '9', '10', 'J', 'Q', 'K'];
var randomSuit = function(){
  return suits[Math.floor(Math.random()*(suits.length))];
};
var randomValue = function(){
  return values[Math.floor(Math.random()*(values.length))];
};
var randomCard = function(){
 return randomValue() + '-' + randomSuit();
};

var randomHand = function(){
  var cards = [];
  cards.push(randomCard());
  cards.push(randomCard());
  cards.push(randomCard());
  cards.push(randomCard());
  cards.push(randomCard());
  return cards;
};
console.log(randomHand());

var wish = require('wish');
var deepEqual = require('deep-equal');
describe('randomHand()', function() {
  it('returns 5 randomCards', function() {
    wish(randomHand().length === 5);
  });
});
describe('randomCard()', function() {
  it('returns nothing', function() {
    wish(randomCard().match(/\w{1,2}-[HDSC]/));
  });
});
describe('randomValue()', function() {
  it('returns nothing', function() {
    wish(randomValue().match(/\w{1,2}/));
  });
});
describe('randomSuit()', function() {
  it('returns nothing', function() {
    wish(randomSuit().match(/[HDSC]/));
  });
});
