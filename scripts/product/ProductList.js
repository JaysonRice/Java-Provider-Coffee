import Product from "./Product.js";
import { useProduct } from "./productDataProvider.js";

const ProductList = () => {

    const productElement = document.querySelector(".productContainer")
    const products = useProduct()

    let productHTMLRepresentations = ""
    for (const productObjects of products) {
        productHTMLRepresentations += Product(productObjects)
    }

    productElement.innerHTML = `
        <h4>Products</h4>
        ${productHTMLRepresentations}
`
}

export default ProductList
