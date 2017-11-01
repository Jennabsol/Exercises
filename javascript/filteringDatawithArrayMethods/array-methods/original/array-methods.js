const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

// planets.forEach(function(currentPlanet) {
//     console.log(currentPlanet)
    
    
//     const planetEl = document.getElementById("planets")
    
//     planetEl.innerHTML += `
//     <section class="${currentPlanet}">
//     <p>${currentPlanet}</p>
//     </section>
//     `
// });
   
/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


// The split() method is used to split a String object into an array of strings by separating the string into substrings.
// The charAt() method is used to get the specified character from a string.
// Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.
// The toUpperCase() method is used to convert the string value to uppercase.
// The slice() method returns a shallow copy of a portion of an array into a new array object.
// The join() method joins all elements of an array into a string.




const capitalized = planets.map(function(upperCaseEl) {
    upperCaseEl = upperCaseEl.split('').join().charAt(0).toUpperCase() + upperCaseEl.slice(1).split(" "); 
    console.log(upperCaseEl)
    return upperCaseEl
    
})

console.log(capitalized)




/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]