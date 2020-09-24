(function (window){
	var helloSpeaker = {};
	var speakhello = "Hello";

	helloSpeaker.speak = function (name) {
	  console.log(speakhello + " " + name);
	}
	window.helloSpeaker = helloSpeaker;

})(window);