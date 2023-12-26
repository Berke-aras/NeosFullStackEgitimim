import React from "react";

function PersonInfo(props) {
    console.log(props);

    return (
        <>
            <div>
                <h1> {props.name + " " + props.soyad} </h1>
                <h2> {props.age} </h2>
            </div>
        </>
    );
}

export default PersonInfo;
