import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Header() {
    const { isim } = useContext(GlobalContext);

    return (
        <>
            <div className="alert alert-info ">
                Contexten gelen veri = isim : {isim}
            </div>
        </>
    );
}

export default Header;
