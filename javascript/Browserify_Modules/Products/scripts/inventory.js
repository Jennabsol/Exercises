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
