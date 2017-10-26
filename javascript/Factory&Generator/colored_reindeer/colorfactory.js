// A generator function to yield colors.
// Create a generator function to yield a different color out of the reindeerColors
// array each time the function is called.
const reindeerColorGenerator = function* () {
 let reindeerColors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

    //  Declare a counter and start it at  0.
    let i = 0
    
    // Write a while loop where the counter is less than the length of the array reindeerColors. 
    // So that it will only loop through the length of the array.
     
    while (i < reindeerColors.length) {
        // Declare a letiable that will store the current color in the array.
        let currentReindeerColor = reindeerColors[i]
        // Pause the generator function with a yield statement to output the current element in the array.
        yield currentReindeerColor
        // Included the counter letiable and increment by 1. 
        // This is added after the yield statement so that the when the 
        // next() method is called the generator function will resume and 
        // the next element in the array is outputted. 
        i++
        
    }
}


// Next we need to create an instance where when called the 
// sequence of the generator can be called. We are basically 
// storing the iterator or sequence in a letiable that we declare.
const reindeerColorIterator = reindeerColorGenerator()
// console.log(reindeerColorIterator.next().value)

// Write a factory function to create an object for the reindeer
// name and color. Use the generator function to call and apply a 
// distinct color for each reindeer. 
 
const reindeerObjectBuilder = function (name) {
    // Don't forget to put name in the function argument. It is needed so that we
    // can pass in the name to the object later.
    // This is the object template that will create the reindeer objects
    // with the keys name and color. 
    return Object.create(null, {
        "name": {
            enumerable: true,
            value: name
        },
        "color": {
            enumerable: true,
            value: reindeerColorIterator.next().value
        }
        // Null is used to make sure the newly created object is not an empty 
        // object, nested inside a prototype object. If null is not used you need 
        // to use a longer command to access the data such aColoredReindeer.name.value. 
        // So I have to add properties because it did not inherit ex. Enumerable: true. 
        // Use the letiable that you assigned the generator function instance to output
        // colors in an sequence.
        // The next() method retires the next item in the sequence. When the next().value 
        // method is initialized it can access key-value pair from the object. 
       
    })
}
// The main builder function will call factory function and then place each
// object in an array. Create a function factory to iterate over the reindeer 
// names and push  into an array.

const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    // Create an empty array to I can push objects in later.
    const coloredReindeer = []
    

    // Write a for loop that looks at each reindeer
    for (let j = 0; j < reindeer.length; j++) {
        let currentReindeer = reindeer[j]
        
        
        
        // Invoke factory function to create reindeer object
        const reindeerCurrentColor = reindeerObjectBuilder(currentReindeer)
        
        // Put new reindeer object in coloredReindeer array
        coloredReindeer.push(reindeerCurrentColor)
        // Return coloredReindeer array
    }
    
    return coloredReindeer;

}

// const coloredReindeerArray = coloredReindeerBuilder()

// for (var k = 0; k < coloredReindeerArray.length; k++) {
//     let currentReindeer = coloredReindeerArray[k];

//     document.getElementById("colored-reindeer").innerHTML += `
//     <section style="color: ${currentReindeer.color}">
//     <p>${currentReindeer.name}</p>
//     </section>
//     `


// }  
