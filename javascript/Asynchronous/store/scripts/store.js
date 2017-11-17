$(document).ready(function () {
    const outputEl = $("#products_listing")

    $.ajax({
        "url": "data/products.json",
        "method": "GET"
    }).then(function (productData) {
        const products = productData.products
        $.ajax({
            "url": "data/categories.json",
            "method": "GET"
        }).then(function (categoryData) {

            const categories = categoryData.categories

            let productHTML = ""
            products.forEach(product => {
                let productCategory = categories.find(currentCategory => currentCategory.id === product.category_id)
                productHTML += `
                <section>
                <h1>${product.name}</h1>
                <h2>${product.price}</h2>
                <p>${productCategory.name}</p>
               </section>
                `

            })


            outputEl.html(productHTML)

        })
    })
})
