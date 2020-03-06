const Product = (product) => {
    return `
        <div class="product">
            <div class="product__name">${product.name}</div>
            <div class="product__bean__type">Bean Type: ${product.beanType}</div>
            <div class="product__roast__type">Roast Type: ${product.roastType}</div>
            <div class="product__price">Price: $${product.price}</div>
        </div>
    `
}

export default Product