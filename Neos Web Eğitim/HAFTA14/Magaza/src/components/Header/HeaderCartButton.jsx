import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./HeaderCartButton.css";
import { cartContexts } from "../../Context/CartProvider";

function HeaderCartButton({ showCartHandler }) {
    const cartCtx = useContext(cartContexts);

    const totalItemsInCart = cartCtx.items.reduce(
        (accumulator, currentItem) => {
            return accumulator + currentItem.amount;
        },
        0
    );

    return (
        <button className="button" onClick={showCartHandler}>
            <span className="icon">
                <FaShoppingCart className="iconShop" />
            </span>
            {totalItemsInCart > 0 && (
                <span className="badge"> {totalItemsInCart} </span>
            )}
        </button>
    );
}

export default HeaderCartButton;
