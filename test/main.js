$(function(){
	var div = ""
	for(var i = 100; i--;){
		div = div + '<div style="float : left; margin : 10px; width : 180px; height : 170px; background-color : #cd' + Math.floor(Math.random() * 10) + ';"></div>';
	}
	$(".wrap").prepend(div);
	Background.slide();
	Background.tick('./test.json')
});