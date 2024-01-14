import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

function Header({ showCartHandler }) {
    return (
        <header className="header">
            <h1>Mağaza</h1>
            <HeaderCartButton showCartHandler={showCartHandler} />
        </header>
    );
}

export default Header;
