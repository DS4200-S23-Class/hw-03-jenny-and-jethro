
// button function

// to update the fibonacci number shown
let fibonacci_first = 0;
let fibonacci_second = 1;

// to update the picture shown
let eeveeList = ["https://www.jeumobi.com/wp-content/uploads/2021/08/eevee-evolutions-pokemon-go.jpg", 
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png", 
	"https://img.pokemondb.net/artwork/large/sylveon.jpg", 
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
	"https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
	"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/games/switch/m/my-friend-peppa-pig-switch/description-image"];

// updates the value for the number of times the button was clicked and the image
function buttonClicked() {

	// printing to console
	console.log("button was clicked!");

	// updating fibonacci number 
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



