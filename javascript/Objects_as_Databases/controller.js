// Grab home database from local stoage and place into object called homeEntries
const homeEntries = JSON.parse(localStorage.getItem("newStoredInventory"))

// create placeholder for selected dom element
const homeElement = document.getElementsByClassName("inventory")[0]


for (let key in homeEntries) {
    //loop through each object inside of the object HomeInventory
    let categoryArray = homeEntries[key];


    //iterate over every key in the home database and push into the DOM
    for (let i = 0; i < categoryArray.length; i++) {
        let element = categoryArray[i];

        homeElement.innerHTML += `
        <section class="${element.name}">
        <h2 class="name">${element.name}</h2>
        <p class="type">${element.type}</p>
        <p class="location">${element.location}</p>
        <p class="discription">${element.description}</p>
        </section>`

    }
}
