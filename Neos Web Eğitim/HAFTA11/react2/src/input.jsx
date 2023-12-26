import React, { useState } from "react";

function input() {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
        // console.log(e);
    }

    function handleClick() {
        setName("");
    }

    return (
        <>
            <div>İsminizi Girin</div>

            <div>
                <input value={name} onChange={(e) => handleChange(e)} />
            </div>

            <div>İsminiz: {name}</div>

            <div>
                <button onClick={handleClick}> tıkla </button>
            </div>
        </>
    );
}

export default input;
