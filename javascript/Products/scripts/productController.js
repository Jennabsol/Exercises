const productArray = require("./inventory")
const updatesEl = document.getElementsByClassName("product_info")[0]

const updateProductFactory = (array) => {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        updatesEl.innerHTML += `
        <article class="candy" id="${element.id}">
        <div class="title">${element.title}</div>
        <div class="description">${element.description}</div>
        <div class="price">"$ "${element.price}</div>
        <div class="quantity">${element.quantity}</div>
        <div class="img">${element.image}</div>
        </article>`
    }
    debugger
}








module.exports = updateProductFactory
