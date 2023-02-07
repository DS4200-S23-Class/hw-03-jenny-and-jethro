
// button function

// updates the Fibonacci number shown
let fibonacci_first = 0;
let fibonacci_second = 1;

// updates the picture shown on the button
const eeveeList = ["img/eeveelutions.jpg", 
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png", 
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png",
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png",
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png",
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
	"https://stock.flashmode.tn/wp-content/uploads/2020/06/peppa-pig-transparent-background-png-606.png"];

// updates the value for the number of times the button was clicked and the button's image
function buttonClicked() {

	// printing to console
	console.log("button was clicked!");

	// updating the Fibonacci number 
	let fibonacci_new = fibonacci_first + fibonacci_second;
	let buttonClickTracker = "Fibonacci Sequence: " + fibonacci_new;
	fibonacci_first = fibonacci_second;
	fibonacci_second = fibonacci_new;

	// select the element 
	// locate an element in the html document via its ID
	let buttonDiv = document.getElementById("button-div");

	// changing the text near the button
	buttonDiv.innerHTML = buttonClickTracker;

	// changing button image
	let img = new Image();
	img.src = eeveeList[Math.floor(Math.random() * eeveeList.length)];
	document.getElementById("buttonImg").src = img.src;

}



