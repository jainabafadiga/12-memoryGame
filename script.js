var userPoint = 0;
var faceUp = [];
var assignments = 1;
var divIds = [];
var matches = 0;

function fillBoard() {
  //TODO: randomly assign positions to the tiles on the screen call
  // addTileToBoard here
  // Hint: You can use a forEach or a for loop
  var tiles=["dog","malala","cat"]
  var doubletiles=[]
  for (i=0 ;i<tiles.length; i++){
    tile= tiles[i]
    doubletiles.push(tile);
    doubletiles.push(tile);
    console.log (doubletiles);
    
  }
  doubletiles
  shuffledtiles = shuffle(doubletiles)
  console.log (shuffledtiles)
  for (i=0 ;i<shuffledtiles;i++){
  console.log(shuffledtiles[i]);
  }
};

function shuffle(array) {
  //TODO: use this method to shuffle the array
  var newArray = [];
  var length = array.length;

  for(i = 0; i < length; i++) {
    var arrLen = array.length;
    var randomPick = Math.floor(Math.random() * arrLen);
    var element = array[randomPick];
    newArray.push(element);
    array.splice(array.indexOf(element), 1);
    arrLen --;
  }

  return newArray;
};

function addtiletoBoard (element) {
  

  
  //TODO: randomly assign ids to the divs
  var div =  "<div id=\"" + assignments +"\" class=\""+ element + " token\"></div>";
  $(".game").append(div);
  assignments ++
};

function clearBoard() {
  $(".game").empty();
};

function checkTilesMatch(array) {
  //TODO: check to see if the value of the 2 face up tile match

};

function setPoint() {
    $('#userPoint').text(userPoint);
};

function evaluate( evt ) {
    var tileType = evt.target.getAttribute('class');
    var divID = evt.target.getAttribute("id");
    //TODO: If this is first tile clicked store the card if it is the second tile
    // clicked check to see if it is the same as the first.
};


$(document).ready(function() {
  function bop(elm) {
      $(elm).fadeOut('fast').delay(1).fadeIn('fast');
  };

  fillBoard();

  $('.token').click( function(e) {
      var element = e.toElement.classList[0]
      var id = e.toElement.getAttribute("id")
      assignText(id, element)
      bop(this);
      evaluate(e);
  });


});
