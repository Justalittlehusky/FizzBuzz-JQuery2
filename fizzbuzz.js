$(document).ready(function(){

	var userNumber = parseInt(prompt("Enter in a number!"));
		checkNumber(userNumber);
	var userThrees = prompt("What would you like to replace the multiples of three with???");
	var userFives = prompt("and the multiples of five???");
	var userBoth = prompt("Last but not least how about the multiples of three and five?");



// Fizzbuzz LOOP	


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

// THis is a function made to check whether or not the number entered is actually a number.
	var checkNumber = function(a){
		if (typeof a === "number"){
			console.log("It's a number.");
				return a;
		}
		else {
			alert("Thats not a number! Please Reload the page and try again");
				var userNumber = prompt("Please enter a number!");
					return userNumber;
		}
	}



