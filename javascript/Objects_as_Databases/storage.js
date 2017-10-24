// Each item in your home will be defined as an object with the following keys.
// Define at least 10 objects in your home, of at least 3 different types - i.e. crafts, electronics, furniture, etc.
const lips = {
    "name": "lipstick",
    "type": "makeup",
    "location": "bathroom",
    "description": "I put this on my lips."
  }
  
  const eyes = {
    "name": "mascara",
    "type": "makeup",
    "location": "bathroom",
    "description": "I put this on my eyelashes."
  }
  
  const cheeks = {
    "name": "blush",
    "type": "makeup",
    "location": "bathroom",
    "description": "I put this on my cheeks."
  }

  const face = {
    "name": "powder",
    "type": "makeup",
    "location": "bathroom",
    "description": "I put this on my lips."
  }

  const bed = {
    "name": "bed",
    "type": "furniture",
    "location": "bedroom",
    "description": "This is where we sleep."
  }

  const couch = {
    "name": "couch",
    "type": "furniture",
    "location": "livingroom",
    "description": "This is where we sit."
  }

  const tv = {
    "name": "tv",
    "type": "electronics",
    "location": "livingroom",
    "description": "This is where we watch tv."
  }

  const table = {
    "name": "table",
    "type": "furniture",
    "location": "kithen",
    "description": "This is where we eat."
  }

  const computer = {
    "name": "desk top",
    "type": "electronics",
    "location": "office",
    "description": "My main computer."
  }

  const radio = {
    "name": "sterio",
    "type": "electronics",
    "location": "livingroom",
    "description": "I listen to music."
  }

  // Define arrays for each type that you have defined.
let makeup = []
let furniture = []
let electronics = []

// Arrays of Objects
// Next, place each object that you have defined into the appropriate array.

makeup.push(lips, eyes, face, cheeks)
furniture.push(bed, couch, table)
electronics.push(tv, computer, radio)

 
// Now that you have collections of data stored in discrete JavaScript arrays, it's time to define our database object which will contain all of the data.
let homeInventory = {
    "furniture": furniture,
    "makeup": makeup,
    "electronics": electronics
  }

  // The JSON object allows you to take an in-memory object, and convert it to a string representation of the object that can be saved in local storage.
  
  const homeInventoryString = JSON.stringify(homeInventory)
  localStorage.setItem("homeInventory", homeInventoryString)

// Grab home database from local stoage and place into object called storedInventory.



  
