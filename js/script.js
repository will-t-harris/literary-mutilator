const paragraphs = document.getElementsByClassName("paragraph"); // this is a HTML collection
const paragraphArray = [...paragraphs]; // Create array from HTML collection using spread operator
const randomButton = document.getElementById("randomize");
const randomOutput = document.getElementById("randomizeOutput");

// HIGHLIGHT WORDS SOLUTION!
const firstParagraph = document.querySelector("#first");
const secondParagraph = document.querySelector("#second");
const thirdParagraph = document.querySelector("#third");

firstParagraph.onclick = () => {
	firstParagraph.classList.toggle("active");
};

secondParagraph.onclick = () => {
	secondParagraph.classList.toggle("active");
};

thirdParagraph.onclick = () => {
	thirdParagraph.classList.toggle("active");
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
const shuffleWords = array => {
	array.forEach((_, index) => {
		const j = Math.floor(Math.random() * (index + 1));
		[array[index], array[j]] = [array[j], array[index]];
	});
};

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
	// append the moved data to the target's DOM in a paragraph tag
	let data = event.dataTransfer.getData("text/plain");
	let paragraph = document.createElement("p");
	paragraph.innerHTML = data;
	event.target.appendChild(paragraph);
}
