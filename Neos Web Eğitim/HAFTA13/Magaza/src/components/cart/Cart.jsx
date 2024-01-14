import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData";
import OffCanvas from "../UI/OffCanvas";

function Cart({ hideCartHandler }) {
    const CartItems = (
        <ul className="cart-items">
            {products.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </ul>
    );

    return (
        <OffCanvas hideCartHandler={hideCartHandler}>
            <div className="cart-head">
                <h2>Spetim</h2>
                <a href="/" className="cart-close" onClick={hideCartHandler}>
                    x
                </a>
            </div>
            {CartItems}
            <div className="total">
                <span>Toplam Değer</span>
                <span>10TL</span>
            </div>
            <div className="actions">
                <button className="cart-order">Sipariş Ver</button>
                <button className="cart-clear">Temizle</button>
            </div>
        </OffCanvas>
    );
}

export default Cart;
