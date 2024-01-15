import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import OffCanvas from "../UI/OffCanvas";
import { cartContexts } from "../../Context/CartProvider";

function Cart({ hideCartHandler }) {
    const { items, totalAmount, clearItem } = useContext(cartContexts);

    const CartItems = (
        <ul className="cart-items">
            {items.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </ul>
    );

    const hasItems = items.length > 0;

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
                <span>Toplam Değer: </span>
                {hasItems && <span>{totalAmount}TL</span>}
            </div>
            {hasItems && (
                <div className="actions">
                    <button className="cart-order">Sipariş Ver</button>
                    <button className="cart-clear" onClick={clearItem}>
                        Temizle
                    </button>
                </div>
            )}
        </OffCanvas>
    );
}

export default Cart;
