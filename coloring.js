
var coloring = [

	['360', '50'],
];

var switch_here = 1; 
var value = 0; 
var valueArr = [];
var rank = 0; 
var score = 100; 



(function detect() { 
 	if( navigator.userAgent.match(/Android/i)
 	|| navigator.userAgent.match(/webOS/i)
 	|| navigator.userAgent.match(/iPhone/i)
 	|| navigator.userAgent.match(/iPod/i)
 	|| navigator.userAgent.match(/BlackBerry/i)
 	|| navigator.userAgent.match(/Windows Phone/i)
 	){
    	alert("Please play the game on a larger device!"); 
  	}
 	else {
    	return false;
  	}
})(); 




function submit(){
	var headline = document.getElementById("submit_s");
	for(var i = 5; i<=24;i++){
		var temp = document.getElementsByTagName("li")[i].innerHTML;
		valueArr[i-5] = parseFloat(temp); 
	}


	for (var j = 0; j<=19; j++){
		for (var k = j; k<=19;k++){
			if (valueArr[j] > valueArr[k])
				score -= 1.2; 
		}
	}
	if(score<0)
		score=0;

	score = Math.floor(score); 




	headline.innerHTML = "Congradulations! <br> Your Score is <strong/>"+score+"</strong>" ;
	if (switch_here==0)
		headline.style.color = "hsl(230, 100%, 75%)";
	else
		headline.style.color = "hsl(360, 100%, 70%)";
	document.getElementById("foo").style.marginTop = "120px"; 

	var submit = document.getElementsByTagName("li"); 
	submit[0].style.display = 'none';
	//submit[2].style.display = '';

	submit[1].style.display = '';
	submit[3].style.display = 'none';
	submit[4].style.display = ''; 
}




function to_blue(){
	if(switch_here==1)
		switch_here=0;
	else
		switch_here=1; 

	if(switch_here==0){
		var colorBar = document.getElementsByTagName("li");
  		for (var i = 5; i <= 24; i++) {
  			color_tag = produce_b(); 
  			colorBar[i].style.background = color_tag;
  			colorBar[i].innerHTML = value;
  			colorBar[i].style.fontSize = "0px";
  		}

  	var colorFix = document.getElementsByTagName("li");
  		colorFix[25].style.background = "hsl(230, 100%, 50%)";
  		colorFix[26].style.background = "hsl(220, 100%, 90%)";


	}else if (switch_here==1){
		var colorBar = document.getElementsByTagName("li");
  		for (var i = 5; i <= 24; i++) {
  			color_tag = produce(); 
  			colorBar[i].style.background = color_tag;
  			colorBar[i].innerHTML = value;
  			colorBar[i].style.fontSize = "0px";
		}

		var colorFix = document.getElementsByTagName("li");
  		colorFix[25].style.background = "hsl(360, 100%, 50%)";
  		colorFix[26].style.background = "hsl(350, 100%, 90%)";

	}

}
	

	(function changeColor(){
  		var colorBar = document.getElementsByTagName("li");
  		for (var i = 5; i <= 24; i++) {
  			color_tag = produce(); 
  			colorBar[i].style.background = color_tag;
			
  			colorBar[i].innerHTML = value;
  			colorBar[i].style.fontSize = "0px";
  			
  		}

	})();



	function produce(){
		var red = Math.floor(Math.random() * (360- 350+ 1)) + 350;
		var lightness = Math.floor(Math.random() * (90- 50+ 1)) + 50;
		value = red/10+lightness; 
		var color = "hsl("+red+",100%,"+lightness+"%)";
		return color; 
	}

	function produce_b(){
		var blue = Math.floor(Math.random() * (240- 220+ 1)) + 220;
		var lightness = Math.floor(Math.random() * (90- 50+ 1)) + 50;
		value = blue/10+lightness; 
		var color = "hsl("+blue+",100%,"+lightness+"%)";
		return color; 
	}



		
	function select_light(){
		var randomlight = Math.floor(Math.random() * (62- 55+ 1)) + 55;
		return randomlight;
	}

