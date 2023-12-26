import React from "react";

function NumberChange(props) {
    function handelClick() {
        props.setNumber(999);
    }

    return (
        <>
            <div>
                <button onClick={handelClick}>Değiştir</button>
            </div>
        </>
    );
}

export default NumberChange;
