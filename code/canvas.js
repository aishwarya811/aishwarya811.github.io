var rules = "Hey human! Are you ready to play? Collect\n" + 
			"all the bones and avoid lava and fireballs\n" +
			"so I don't die. ENJOY!\n\n" +
			"Click to start.";

var Letters = [];
var ctx, interval;
var displayRules = true;

var Letter = function(_x, _y, _letter, _num){
  var x, y, dy;
  var name, num;  
  
  this.x = _x; 
  this.y = _y; 
  this.name = _letter; 
  this.dx = 0;
  this.num = _num;

}

Letter.prototype.drawLetter = function(){
  ctx.font = "15px Courier New"; 
  ctx.fillStyle = "white";
  ctx.fillText(this.name, this.x, this.y); 
}

Letter.prototype.moveLetter = function(){
  this.x += this.dx; 
}

function drawTitle() {
  clear();

  for (var i = 0; i < Letters.length; i++) {
    var temp = Letters[i];
    temp.drawLetter(); 

    if (Letters[0].x > 600) {
    	Letters = [];
    	console.log("title is gone");
    	clearInterval(interval);

    	if (displayRules) {
	    	displayText(rules, 175, 12);
	    	displayRules = false;
	    }
    }

    temp.moveLetter(); 
  }
}

function clear(){
  ctx.clearRect(0,0,600,450); 
}

function displayText(text, y, _x){
	c = document.getElementById("myCanvas"); 
	ctx = c.getContext("2d"); 

	var x = 50; 

	for (var i = 0; i < text.length; i++) {
	  Letters.push(new Letter(x, y, text.charAt(i), i)); 
	  if (text == "Run, Dino, Run!") 
	  	Letters[i].dx = 2;
	  x += _x; 

	  if (text.charAt(i) == '\n') {
	  	y += 40;
	  	x = 50;
	  }
	}

	interval = setInterval(drawTitle, 20);
}

function start() {
	location.href="game.html";
}