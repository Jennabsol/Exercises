// create generator function to make a unique Id for section and button ids
function* idGenerator() {
    let id = 1;
    while (true) { // since I don't know the length I will create an infinite iterator using true.
        yield id;
        id++
    }
}

// Create an instance of generator in a variable. idMaker is the iterator.
let idMaker = idGenerator();

// get a reference of dom element (button) that user will click to create a card
let buttonElement = document.getElementById("createButton")

/* create function to create a new card to be inserted into the DOM. Card should be created when
 user clicks the "Create" button. This card should include a delete button. Each card created
 should include a unique id for the entire card and for the delete button. */

    // console.log(event);
    // get control of the part of the DOM where the cards will be placed.

    // create a unique id to use in article & button tags and assign to variable

    // pull text input from the textarea DOM element that the user submitted and assign to variable

    // place the html code to create the card into the DOM using .innerHTML

    // clear the contents of the textarea after the "Create" button has been clicked and the new card has been created    


// create event listener to listen for the click of the "Create" button and run function to create a new card



// get reference of DOM parent element that user will click to delete a card

// create a function to delete the card that the user clicked the "delete" button on. 

    // console.log event to see what was targeted

    // console.log("btnId: ", event.target.id.split("_")[1]);

    // get the ID of the event that was clicked on

    // parse out the number in the ID of the event that was clicked


    // check if the ID of event that was clicked starts with "button_". If so, then remove that card

        // first console log a message to see if the "if statement" is working
        // console.log("yes it starts with button_")
        // assign the id of the card to be deleted to a variable by using document.getElementById
        // and the "article_" + the button Id number that was stored in a variable earlier. (btnIdNum) 

        // use .removeChild functionality to remove the card by referencing the parent container 



// add event listener to listen for a click on the delete card button, and run the function to delete card
