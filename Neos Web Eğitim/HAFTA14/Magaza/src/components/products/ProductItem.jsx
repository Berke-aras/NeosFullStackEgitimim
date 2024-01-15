import React, { createContext, useContext } from "react";
import "./productItem.css";
import Card from "../UI/Card";
import { cartContexts } from "../../Context/CartProvider";

function ProductItem({ product }) {
    const { name, description, img, price } = product;

    const { addItem, items, totalAmount } = useContext(cartContexts);

    // console.log(items, totalAmount);

    return (
        <Card>
            <img src={img} alt={name} />
            <h3 className="product-title"> {name} </h3>
            <p> {description} </p>
            <div className="product-info">
                <span className="price"> {price}TL </span>
            </div>
            <button className="add-to-cart" onClick={() => addItem(product)}>
                Sepete Ekle
            </button>
        </Card>
    );
}

export default ProductItem;
