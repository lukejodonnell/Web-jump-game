window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 1000, 500);
    var rectangle = paper.rect(10, 300, 100, 100, 5).attr({fill: '0-#f00-#fc0:14-#dd0:28-#0f0:42-#09e:56-#00f:70-#f0d:84'});
    var platform = paper.rect(300, 300, 300, 20).attr({fill:'#000'});
	var floor = paper.path("M0 400L1000 400");
	var jumping = false;
	
	function resetPlatform() {
	    platform.attr({x: '500'});
	    movePlatform();
	};
	
	function movePlatform() {
	    platform.animate({x: '-1000'}, 5000, 'linear', resetPlatform);
	};
	
	 
	function jumpDown() {
	    rectangle.animate({y: '300'}, 500, '<');
	};
	
    function jumpUp() {
        rectangle.animate({y: '50'}, 500, '>', jumpDown );
	};
	
	function runloop(s) {
		while (s.keyCode != 32) {
		    jumpUp();
		};
	};
	
	rectangle.click(jumpUp);
	platform.click(movePlatform);
};
