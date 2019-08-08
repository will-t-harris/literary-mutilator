const paragraphs = document.getElementsByClassName('paragraph'); // this is a HTML collection
const paragraphArray = [...paragraphs]; // Create array from HTML collection using spread operator
const randomButton = document.getElementById('randomize');
const randomOutput = document.getElementById('randomizeOutput');

// Highlight entire paragraph on click
document.getElementById('first').onclick = () => {
	document.getElementById('first').classList.toggle('active');
};

document.getElementById('second').onclick = () => {
	document.getElementById('second').classList.toggle('active');
};

document.getElementById('third').onclick = () => {
	document.getElementById('third').classList.toggle('active');
};

// form string from array
let paragraphString = paragraphArray.map((paragraph) => {
	return paragraph.textContent;
}).join(' ');

// form array of all the words from the paragraph string
const wordsArray = paragraphString.split(' ');

// Shuffle words in random order function
function shuffleWords(array) {
	for(let i = 0; i < array.length; i++) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// call shuffleWords function and display output in paragraph element in DOM
document.getElementById('randomize').addEventListener('mousedown', () => {
	shuffleWords(wordsArray);
	document.getElementById('randomizeOutput').innerHTML = wordsArray.toString();
});

// DRAG AND DROP!
function dragstart_handler(event) {
	event.dataTransfer.setData("text/plain", event.target.innerText);
}