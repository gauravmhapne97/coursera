(function (window){
	var byeSpeaker = {};
	var speakbye = "Good Bye";

	byeSpeaker.speak = function (name) {
	  console.log(speakbye + " " + name);
	}
	window.byeSpeaker = byeSpeaker;

})(window);