import React, { useContext } from "react";
import "./cartItem.css";
import { cartContexts } from "../../Context/CartProvider";

function CartItem(props) {
    const { removeItem } = useContext(cartContexts);

    const deleteHandler = (e) => {
        e.preventDefault();
        removeItem(props.product.id);
    };

    return (
        <li className="cart-item">
            <div className="cart-item-img">
                <img src={props.product.img} alt={props.product.name} />
            </div>

            <div className="cart-item-info">
                <div className="cart-item-texts">
                    <b> {props.product.name} </b>
                    <div>
                        <span> {props.product.price} x </span>
                        <span className="cart-item-amount">
                            {props.product.amount}
                        </span>
                    </div>
                </div>
                <a
                    href="/"
                    className="cart-item-remove"
                    onClick={deleteHandler}
                >
                    x
                </a>
            </div>
        </li>
    );
}

export default CartItem;
