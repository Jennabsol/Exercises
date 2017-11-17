(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const productStorage = []

const StorageSupervisor = Object.create(null, {
    "store": {
        value: function (product) {
            productStorage.push(product)
        }
    },
    "retrieve": {
        value: function (productId) {
            return productStorage.find(product => product.id === productId)
        }
    },
    "inventory": {
        get: () => productStorage
    }
})

module.exports = StorageSupervisor

},{}],2:[function(require,module,exports){
const productFactory = require("./productFactory")
const productStorage = require("./inventory")
const update = require("./productController.js")

const jimbles = productFactory("Jimbles Munties", "Soufflé pudding jelly liquorice cake danish ice cream wafer marzipan.", 20, 30, "img/candy.jpg")
productStorage.store(jimbles)

const fairy = productFactory("Fairy Rainbows", "Jelly beans wafer dragée donut biscuits.", 34, 30, "img/candy.jpg")
productStorage.store(fairy)
const pippops = productFactory("Pippops Chuckles", "Marshmallow brownie ice cream gummies candy canes gingerbread lollipop.", 26, 30, "img/candy.jpg")
productStorage.store(pippops)
const miracle = productFactory("Miracle Poofs", "Donut ice cream cotton candy sweet roll pie jelly beans lollipop sugar plum.", 23, 30, "img/candy.jpg")
productStorage.store(miracle)
const banonzas = productFactory("Banonza Bunnies", "Croissant gummi bears macaroon dessert sesame snaps tiramisu.", 18, 30, "img/candy.jpg")
productStorage.store(banonzas)
console.log(productStorage.inventory)

const productArray = productStorage.inventory

update(productArray)
},{"./inventory":1,"./productController.js":3,"./productFactory":4}],3:[function(require,module,exports){
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

},{"./inventory":1}],4:[function(require,module,exports){
const updateProductFactory = require("./productController")
const idMaker = function* (startFrom = 0) {
    let id = 1

    while (true) {
        yield id + startFrom
        id++
    }
}

const idGenerator = idMaker()

const productFactoryObj = function (title, description, price, quantity, image) {
    const newProduct = Object.create(null, {
        "id": {
            value: idGenerator.next().value,
            enumerable: true
        },
        "title": {
            value: `${title}`,
            enumerable: true
        },
        "description": {
            value: `${description}`,
            enumerable: true
        },
        "price": {
            value: `${price}`,
            enumerable: true
        },
        "quantity": {
            value: `${quantity}`,
            enumerable: true
        },
        "image": {
            value: `<img src=${image}>`,
            enumerable: true
        }
    })
    return newProduct
}










module.exports = productFactoryObj

},{"./productController":3}]},{},[2]);
