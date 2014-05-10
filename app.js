$(document).ready(function() {
	$("#number_input").keyup(function(event) {
		var value=$("#number_input").val();
			if(event.keyCode == 13) {
				for (i=1; i<=value && i<=100; i++)	{
					if(i%3 == 0 && i%5 ==0) {
						$("body").append("<p>" + "fizz buzz");
					}
					else if(i%3 == 0) {
						$("body").append("<p>" + "fizz");
					}
					else if(i%5 == 0) {
						$("body").append("<p>" + "buzz");
					}
					else{
						$("body").append("<p>" + i);
					}
				$("#number_input").val("").hide("#number_input");
				}
				if(isNaN(value)) {
					alert("Please enter a number!");
					$("#number_input").val("");
				}
			}		
	});
});