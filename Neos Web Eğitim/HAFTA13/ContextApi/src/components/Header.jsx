import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Header() {
    const { isim, soyisim, setBaslik } = useContext(GlobalContext);

    return (
        <>
            <div className="alert alert-info ">
                <h2>
                    Contexten gelen veri = isim : {isim}, {soyisim}
                </h2>

                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setBaslik("NavbarEX");
                    }}
                >
                    Fark
                </button>
            </div>
        </>
    );
}

export default Header;
