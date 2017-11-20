$(document).ready(function () {
    const outputEl = $("#products_listing")
    let products = null
    let categories = null

    // function to be called to update the dom
    let displayProducts = function (event) {
        let productHTML = ""
        console.log(this.value)
        
        //  If event is not undefined, get the option the user chose
        // the this.value is the current value of the select form and store it 
        let selection = this.value
        // build a  html representation of products 
        products.forEach(product => {
            // find the category for this product using foreign key
            let productCategory = categories.find(currentCategory => currentCategory.id === product.category_id)

            if (productCategory.season_discount === selection) {
                productHTML += `
                <article id="product_${product.id}">
                <h1>${product.name}</h1>
                <h2>$${(product.price - (product.price * productCategory.discount)).toFixed(2)}</h2>
                <p>${productCategory.name}</p>  
                </article>
                `
            } else {
                productHTML += `
                <section>
                <h1>${product.name}</h1>
                <h2>${product.price}</h2>
                <p>${productCategory.name}</p>
               </section>
                `
            }
        })
        outputEl.html(productHTML)
    }

    // load the products data from Firebase make sure to add .json
    $.ajax({
        "url": "https://personalsite-6cac4.firebaseio.com/products.json",
        "method": "GET"
    }).then(function (productData) {
        // after products are done loading store them
         products = productData
        // then request categories from firebase
        $.ajax({
            "url": "https://personalsite-6cac4.firebaseio.com/categories.json",
            "method": "GET"
        }).then(function (categoryData) {
            // store categortie  
            categories = categoryData
           
        // function to update the dom
            displayProducts()
            
        })
    })

// eventlistener to update the dom when season is selected.
    $("#seasons").change(displayProducts)
    
})


