const paragraphs = document.getElementsByClassName("paragraph"); // this is a HTML collection
const paragraphArray = [...paragraphs]; // Create array from HTML collection using spread operator
const randomButton = document.getElementById("randomize");
const randomOutput = document.getElementById("randomizeOutput");

// HIGHLIGHT WORDS SOLUTION!
document.getElementById("first").onclick = () => {
	document.getElementById("first").classList.toggle("active");
};

document.getElementById("second").onclick = () => {
	document.getElementById("second").classList.toggle("active");
};

document.getElementById("third").onclick = () => {
	document.getElementById("third").classList.toggle("active");
};

// SHUFFLE WORDS SOLUTION!
// form string from array
let paragraphString = paragraphArray
	.map(paragraph => {
		return paragraph.textContent;
	})
	.join(" ");

// form array of all the words from the paragraph string
const wordsArray = paragraphString.split(" ");

// Shuffle words in random order function
function shuffleWords(array) {
	for (let i = 0; i < array.length; i++) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// call shuffleWords function and display output in paragraph element in DOM
document.getElementById("randomize").addEventListener("mousedown", () => {
	shuffleWords(wordsArray);
	document.getElementById("randomizeOutput").innerHTML = wordsArray.toString();
});

// KEYPRESS EVENT SOLUTION!
window.addEventListener("keydown", () => {
	document.getElementById("header").classList.toggle("pink");
});

// DRAG AND DROP!
function dragstart_handler(event) {
	event.dataTransfer.setData("text/plain", event.target.id);
	event.dataTransfer.setData("text/plain", event.target.innerText);
	event.dataTransfer.dropEffect = "move";
}

function dragover_handler(event) {
	event.preventDefault();
	event.dataTransfer.dropEffect = "move";
}

function drop_handler(event) {
	event.preventDefault();
	// get the id of the target and add the moved element to the target's DOM
	let data = event.dataTransfer.getData("text/plain");
	let paragraph = document.createElement("p");
	paragraph.innerHTML = data;
	event.target.appendChild(paragraph);
}
