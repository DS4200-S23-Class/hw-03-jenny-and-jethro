
// button function
let fibonacci_first = 0;
let fibonacci_second = 1;
let eeveeList = ["https://www.jeumobi.com/wp-content/uploads/2021/08/eevee-evolutions-pokemon-go.jpg", 
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png", 
	"https://img.pokemondb.net/artwork/large/sylveon.jpg", 
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"];

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


	// changing button image
	let img = new Image();
	img.src = eeveeList[Math.floor(Math.random() * eeveeList.length)];
	document.getElementById("buttonImg").src = img.src;

}



