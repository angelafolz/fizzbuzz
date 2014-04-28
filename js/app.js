$(document).ready(function(){

	var body = $("body");
	var input = $("input");
	var playBtn = $("button");

	// count and determine fizz/buzz
	var playFizzBuzz = function(num) {
		body.append("<br><br>");
		for (var i = 1; i <= num; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				body.append("fizzbuzz, ");
			} else if (i % 3 === 0) {
				body.append("fizz, ");
			} else if (i % 5 === 0) {
				body.append("buzz, ");
			} else {
				body.append(i + ", ");
			}
		}
	};

	// get input for highest number
	playBtn.click(function() {
		var value = input.val();
		if (0 < value && value < 1000) {
			playFizzBuzz(value);
		} else if (value >= 1000) {
			alert("I may be a computer, but I don't have all day. Try a number less than 1000.");
		} else {
			alert("That's not an integer > 0.");
		}
		input.val("").focus();
	});

	// pressing enter same as clicking button
	input.keypress(function(event){
		if (event.which == 13){
			playBtn.click();
		}
	});
});
