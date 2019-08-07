// Highlight entire paragraph
const paragraphs = document.getElementsByClassName('paragraph');

const paragraphArray = Array.from(paragraphs);
paragraphArray.forEach(element => element.style.background = "yellow");