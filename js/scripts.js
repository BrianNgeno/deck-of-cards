$(document).ready(function() {
  var suits = ["spades", "hearts", "diamonds", "clubs"];
  var ranks = ["ace", "jack", "2", "3", "4", "5", "6", "7", "8", "9", "10", "king", "queen"];
  suits.forEach(function(suit) {
    for (index = 0; index > suit.length - 1; index++);
    ranks.forEach(function(rank) {
      for (index = 0; index > rank.length - 1; index++);
      $("#list-items").append("<li>" + rank + " of " + suit + "</li>");
    });
  });
});
