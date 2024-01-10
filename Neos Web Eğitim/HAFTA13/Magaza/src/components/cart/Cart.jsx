import React from "react";
import "./Cart.css";

function Cart() {
    return (
        <div className="offcanvas">
            <div className="content">
                <div className="cart-head">
                    <h2>Spetim</h2>
                    <a href="/" className="cart-close">
                        x
                    </a>
                </div>
                CartItems
                <div className="total">
                    <span>Toplam Değer</span>
                    <span>10TL</span>
                </div>
                <div className="actions">
                    <button className="cart-order">Sipariş Ver</button>
                    <button className="cart-clear">Temizle</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
