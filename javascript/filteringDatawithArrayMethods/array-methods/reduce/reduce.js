
// every (stops looping the first time the iterator returns false or something falsey)
// some (stops looping the first time the iterator returns true or something truthy)
// filter (creates a new array including elements where the filter function returns true and omitting the ones where it returns false)
// map (creates a new array from the values returned by the iterator function)
// reduce (builds up a value by repeated calling the iterator, passing in previous values; see the spec for the details; useful for summing the contents of an array and many other things)
// reduceRight (like reduce, but works in descending rather than ascending order)


// The split() method is used to split a String object into an array of strings by separating the string into substrings.
// The charAt() method is used to get the specified character from a string.
// Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.
// The toUpperCase() method is used to convert the string value to uppercase.
// The slice() method returns a shallow copy of a portion of an array into a new array object.
// The join() method joins all elements of an array into a string.
// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentence = words.reduce(function(str, word) {
    return str + " " + word 
    

})
sentence

/* const sentence = words.reduce(function(str, word, index) {
    return index == 0 ? srt : str + " " + word 
    

})
sentence */