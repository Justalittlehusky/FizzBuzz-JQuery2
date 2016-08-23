$(document).ready(function(){
	var userNumber = prompt("Enter in a number!");
	var userThrees = prompt("What would you like to replace the multiples of three with???");
	var userFives = prompt("and the multiples of five???")
	var userBoth = prompt("Last but not least how about the multiples of three and five?")
// I cannot figure out how to check if the number is actually a number
	// var checkNumber = function(number){
	// 	if (parseint(number)){
	// 		alert("Thanks!");
	// 	}
	// 	else {
	// 		alert("Thats not a number!");
	// 		prompt("Please enter a number!")
	// 	}
	// }

	// checkNumber(userNumber);


for(var i = 1; i<=userNumber; i++){


	if(i % 3 === 0 && i % 5 === 0){
	$("body").append("<p>"+ userBoth +"</p>");
	}

	else if(i % 3 === 0){
		$("body").append("<p>"+ userThrees +"</p>");
	}

	else if(i % 5 === 0){
		$("body").append("<p>"+ userFives +"</p>")
	}

	 else{
		$("body").append("<p>" + i + "</p>")
	}
}
})