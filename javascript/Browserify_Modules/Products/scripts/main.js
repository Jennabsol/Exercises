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