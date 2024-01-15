import React from "react";
import "./card.css";

function Card(props) {
    return <li className="card">{props.children}</li>;
}

export default Card;
