$(document).ready(function() {
	$("#number_input").keyup(function(event) {
		if(event.keyCode == 13) {
			var fizzBuzz = function(integer) {
			var clear = $("#number_input").val(" ");		
				for (i=1; i<=integer && i<=100; i++)	{
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
					$(clear).hide("#number_input");
				}
				if(isNaN(integer) || integer%1 !=0) {
					alert("Please enter a whole number!");
					$(clear);
				}
			}
			fizzBuzz( +$("#number_input").val() );
		}			
	});
	
});