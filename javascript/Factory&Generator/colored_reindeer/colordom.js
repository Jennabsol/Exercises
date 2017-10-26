// Create a function to print the info about each coloredReinder to the dom.



const coloredReindeerArray = coloredReindeerBuilder()

for (var k = 0; k < coloredReindeerArray.length; k++) {
    let currentReindeer = coloredReindeerArray[k];

    document.getElementById("colored-reindeer").innerHTML += `
        <section style="color:${currentReindeer.color}">
        <p>${currentReindeer.name}</p>
        </section>
        `


}

