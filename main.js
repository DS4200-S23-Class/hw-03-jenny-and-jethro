
// button function
let fibonacci_first = 0;
let fibonacci_second = 1;

// updates the value for the number of times the button was clicked
function buttonClicked() {

	console.log("button was clicked!");

	fibonacci_new = fibonacci_first + fibonacci_second;
	let buttonClickTracker = "Fibonacci Sequence: " + fibonacci_new;
	fibonacci_first = fibonacci_second;
	fibonacci_second = fibonacci_new;

	// select the element 
	// locate an element in the html document via its ID
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = buttonClickTracker;
}