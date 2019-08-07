const paragraphs = document.getElementsByClassName('paragraph');
const paragraphArray = Array.from(paragraphs);

//Highlight entire paragraph
document.getElementById('test').onclick = () => {
	document.getElementById('test').classList.toggle('active');
};

// Highlight individual word on click
// const container = document.getElementById('container');
// container.addEventListener('click', event => {
// 	const target = `${event.offsetX} ${event.offsetY}`;
// 	console.log(target);
// });
//

// Remove word on scroll
let paragraphString = [].map.call(paragraphs, (node) => {
	return node.textContent;
}).join("");