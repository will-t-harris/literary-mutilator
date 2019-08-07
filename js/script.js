const paragraphs = document.getElementsByClassName('paragraph');
const paragraphArray = Array.from(paragraphs);

//Highlight entire paragraph
document.getElementById('test').onclick = () => {
	document.getElementById('test').style.background = "yellow";
};

// Highlight individual word on click
// const container = document.getElementById('container');
// container.addEventListener('click', event => {
// 	const target = `${event.offsetX} ${event.offsetY}`;
// 	console.log(target);
// });
//
// // Find & Replace
// findAndReplace = (findWord, replaceWord) => {
//
// }