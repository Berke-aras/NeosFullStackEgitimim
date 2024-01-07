import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Navbar() {
    const { baslik, listeler, setBaslik } = useContext(GlobalContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {baslik}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {listeler.map((liste, i) => {
                                // i index değeri listedeki
                                return (
                                    <li className="nav-item" key={i}>
                                        <a
                                            className="nav-link active"
                                            aria-current="page"
                                            href="#"
                                        >
                                            {liste}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        <p>
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    setBaslik("navbar");
                                }}
                            >
                                Değiştir
                            </button>
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
