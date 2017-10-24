// Create an array that contains the words in the sentence
var sentence = ["I", "love", "to", "eat", "mocha", "icecream"];

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {
    let row = ""
    let addToWord = 0
    for (let i = 0; i < theWordArray.length; i++) {
        row  += theWordArray[i]
            if (i % 3 === 2) {
                row += "!"
                addToWord++ 
                for (let j = addToWord; j > 1; j--) {
                    row += "!"
                    
                }
            }
            
                row += " "
            
        console.log(row)
    }

    
}


// Invoke the function and pass in the array
addExcitement(sentence);