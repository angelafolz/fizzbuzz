$(document).ready(function(){

	var body = $("body");

	$("button").click(function() {
		for (var i = 1; i <= 100; i++) {
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
	
		// alternate method
		/*for (var i = 1; i <= 100; i++) {
			if (i % 3 === 0) {
				body.append("fizz");
				if (i % 5 === 0) {
					body.append("buzz, ");
				} else {
					body.append(", ");
				}
			} else if (i % 5 === 0) {
				body.append("buzz, ");
			} else {
				body.append(i + ", ");
			}
		}*/
	});
});
