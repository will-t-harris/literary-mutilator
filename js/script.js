const paragraphs = document.getElementsByClassName('paragraph');
const paragraphArray = Array.from(paragraphs);
let secondParagraph = paragraphArray[1].textContent;

//Highlight entire paragraph
document.getElementById('test').onclick = () => {
	document.getElementById('test').classList.toggle('active');
};

// Remove word on scroll
let paragraphString = [].map.call(paragraphs, (node) => {
	return node.textContent;
}).join("");

console.log(paragraphString.split(' '));