const paragraphs = document.getElementsByClassName('paragraph'); // this is a HTML collection
const paragraphArray = Array.from(paragraphs); // Create array from HTML collection
let secondParagraph = paragraphArray[1].textContent; // Select only the second paragraph

//Highlight entire paragraph on click
document.getElementById('test').onclick = () => {
	document.getElementById('test').classList.toggle('active');
};

// Shuffle words in random order function
function shuffle(array) {
	for(let i = 0; i < array.length; i++) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// form string from all the paragraphs
let paragraphString = [].map.call(paragraphs, (node) => {
	return node.textContent;
}).join("");

// form array of all the words from the paragraph string
const wordsArray = paragraphString.split(' ');
window.addEventListener('scroll', e => {
	console.log(e);
});