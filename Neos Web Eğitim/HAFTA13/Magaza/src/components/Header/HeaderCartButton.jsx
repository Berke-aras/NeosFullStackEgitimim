import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./HeaderCartButton.css";

function HeaderCartButton() {
    return (
        <button className="button">
            <span className="icon">
                <FaShoppingCart className="iconShop" />
            </span>
            <span className="badge">0</span>
        </button>
    );
}

export default HeaderCartButton;
