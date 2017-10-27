// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"]

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {
    let row = " "
    
    for (let i = 0; i < sentence.length; i++) {
        let currentWord = sentence[i];
        row += currentWord += " "
        console.log(row)

        if (i % 3 === 2) {
          
        }
    }
    


}

// Invoke the function and pass in the array
addExcitement(sentence);