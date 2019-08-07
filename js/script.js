const paragraphs = document.getElementsByClassName('paragraph'); // this is a HTML collection
const paragraphArray = Array.from(paragraphs); // Create array from HTML collection
const randomButton = document.getElementById('randomize');

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

// form string from all the paragraphs
let paragraphString = [].map.call(paragraphs, (node) => {
	return node.textContent;
}).join("");

// form array of all the words from the paragraph string
const wordsArray = paragraphString.split(' ');

// Shuffle words in random order function
function shuffleWords(array) {
	for(let i = 0; i < array.length; i++) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}


document.getElementById('randomize').addEventListener('mousedown', () => {
	shuffleWords(wordsArray);
	console.log(wordsArray);
	document.getElementById('container').innerHTML = wordsArray.toString();
});