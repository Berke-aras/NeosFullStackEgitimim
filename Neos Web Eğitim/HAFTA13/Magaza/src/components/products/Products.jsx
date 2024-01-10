import React from "react";
import "./products.css";
import products from "../../productData.js";
import ProductItem from "../products/ProductItem.jsx";

function Products() {
    const productsList = products.map((product) => (
        <ProductItem product={product} key={product.id} />
    ));

    return (
        <main className="product-wrapper">
            <ul className="products">{productsList}</ul>
        </main>
    );
}

export default Products;
