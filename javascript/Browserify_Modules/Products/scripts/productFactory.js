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
