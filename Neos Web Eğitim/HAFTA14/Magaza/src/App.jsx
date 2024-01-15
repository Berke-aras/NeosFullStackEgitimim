import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";

function App() {
    const [cartIsShow, setCartIsShow] = useState(false);

    const showCartHandler = () => {
        setCartIsShow(true);
    };

    const hideCartHandler = (e) => {
        e.preventDefault();
        setCartIsShow(false);
    };

    return (
        <>
            {cartIsShow && <Cart hideCartHandler={hideCartHandler} />}

            <Header showCartHandler={showCartHandler} />
            <Hero />
            <Products />
        </>
    );
}

export default App;
