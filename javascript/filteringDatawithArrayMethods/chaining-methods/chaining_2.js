// The forEach() method executes a provided function once for each array element.
// every (stops looping the first time the iterator returns false or something falsey)
// some (stops looping the first time the iterator returns true or something truthy)
// filter (creates a new array including elements where the filter function returns true and omitting the ones where it returns false)
// map (creates a new array from the values returned by the iterator function)
// reduce (builds up a value by repeated calling the iterator, passing in previous values; see the spec for the details; useful for summing the contents of an array and many other things)
// reduceRight (like reduce, but works in descending rather than ascending order)
// sort() method sorts the elements of an array in place and returns the array.


// The split() method is used to split a String object into an array of strings by separating the string into substrings.
// The charAt() method is used to get the specified character from a string.
// Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.
// The toUpperCase() method is used to convert the string value to uppercase.
// The slice() method returns a shallow copy of a portion of an array into a new array object.
// The join() method joins all elements of an array into a string.
// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.


/* Requirements

Using one single line of JavaScript code, complete the following tasks on the array of integers below.

1. Sort the numbers in descending order (10, 9, 8, 7, etc).
2. Remove any integers greater than 19.
3. Multiply each remaining number by 1.5 and then subtract 1.
4. Then output (either in the DOM or the console) the sum of all the resulting numbers. */

// In ES6 syntax we replace the word function with a “fat arrow” (=>) after the parameters, and we omit the word ‘return’ and {}.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const sorted = integers.sort((a, b) =>  a - b )

const filterd = integers.filter((num) => num < 19)

const outPut = filterd.map((amount) => amount * 1.5 - 1)


const totalAmountIntegers = outPut.reduce((total, amount) =>
 total + amount)

console.log(totalAmountIntegers)


