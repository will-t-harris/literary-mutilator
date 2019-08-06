const paragraphs = document.getElementsByClassName('paragraph');

// const paragraphsArray = Array.from(paragraphs);

const paragraphArray = Array.from(paragraphs);
paragraphArray.forEach(element => element.style.color = "red");