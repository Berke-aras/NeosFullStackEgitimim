import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <>
            <nav>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link
                            className="nav-link active"
                            aria-current="page"
                            to="/"
                        >
                            Anasayfa
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="hakkimizda">
                            Hakkımızda
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="contactus">
                            İletişim
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="todo">
                            To-Do App
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="magaza">
                            magaza App
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;
