# literary-mutilator
This was a JavaScript excersize for Deep Dive Code.

I chose to implement these four features: 

1. Highlight a section of text on `click` event
2. Shuffle all of the words in each paragraph via a button `click` event and append the randomized words to the DOM.
3. Change the background of the `h1` element on `keydown` event
4. Drag and drop any of the original three paragraphs into the `#dropTarget` paragraph element to append the text to the DOM at that point
   - This technique utilizes the `DataTransfer` API (https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)
