$(document).ready(function () {
    const outputEl = $("#products_listing")
    // load the products data
    $.ajax({
        "url": "https://personalsite-6cac4.firebaseio.com/products.json",
        "method": "GET"
    }).then(function (productData) {
        // after products are done loading store them
        const products = productData
        // then request categories
        $.ajax({
            "url": "https://personalsite-6cac4.firebaseio.com/categories.json",
            "method": "GET"
        }).then(function (categoryData) {
            // store categorties
            const categories = categoryData
            let productHTML = ""
            // build a  html representation of products 
            products.forEach(product => {
                // find the category for this product using foreign key
                let productCategory = categories.find(currentCategory => currentCategory.id === product.category_id)
                productHTML += `
                <section>
                <h1>${product.name}</h1>
                <h2>${product.price}</h2>
                <p>${productCategory.name}</p>
               </section>
                `

            })
            // let currentSeason = document.getElementById("seasons")
            // currentSeason.addEventListener("change", function() {

            // //     if (this.value === categories.season_discount){
            // //     return categories.discount.value - product.price.value 
            // // }
            // // const currentDiscount = categories.find(function (c){ c.season_discount === this.value

            //     })
            //     // console.log(currentDiscount)

            outputEl.html(productHTML)
        })



    })
})
