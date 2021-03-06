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


/* Requirements

Using one single line of JavaScript code, complete the following tasks on the array of integers below.

1. Sort the numbers in descending order (10, 9, 8, 7, etc).
2. Remove any integers greater than 19.
3. Multiply each remaining number by 1.5 and then subtract 1.
4. Then output (either in the DOM or the console) the sum of all the resulting numbers. */

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const sorted = integers.sort(function(a, b){return a - b})

const filterd = integers.filter(function(num){
    return num < 19 
})
console.log(filterd)



const outPut = filterd.map(function(amount){
    return amount * 1.5 - 1
})
console.log(outPut)

const totalOutPut = outPut.reduce(function(total, amount){
    return total + amount 
})

console.log(totalOutPut)


