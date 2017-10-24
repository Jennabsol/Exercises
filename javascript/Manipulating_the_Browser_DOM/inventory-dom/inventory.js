
// Grab home database from local stoage and place into object called HomeInventory.
const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"));

// To get DOM elements by their class attribute.
// create placeholder for selected dom element
const inventoryElement = document.getElementsByClassName("inventory")[0];


console.log("HomeInventory:", HomeInventory);

//loop through objects in HomeInventory 

for (let key in HomeInventory) {
    //loop through each object inside of the object HomeInventory
    let categoryArray = HomeInventory[key];


//iterate over every key in the home database and push into the DOM
for (let i = 0; i < categoryArray.length; i++) {
    let element = categoryArray[i];
        
    
    inventoryElement.innerHTML += `
        <section class="${element.name}" id="${element.type}">
        <h2 class="name">${element.name}</h2>
        <p class="${element.type}">${element.type}</p>
        <p class="location">${element.location}</p>
        <p class="discription">${element.description}</p>
        </section>`
    
        
    }

}