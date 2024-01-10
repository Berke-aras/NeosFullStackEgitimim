import React from "react";
import "./productItem.css";
import Card from "../UI/Card";
function ProductItem({ product }) {
    const { name, description, img, price } = product;

    return (
        <Card>
            <img src={img} alt={name} />
            <h3 className="product-title"> {name} </h3>
            <p> {description} </p>
            <div className="product-info">
                <span className="price"> {price}TL </span>
            </div>
            <button className="add-to-cart"> Sepete Ekle </button>
        </Card>
    );
}

export default ProductItem;
