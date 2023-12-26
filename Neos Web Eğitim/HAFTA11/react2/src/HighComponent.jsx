import React, { useState } from "react";
import NumberChange from "./NumberChange";
import NumberShow from "./NumberShow";

function HighComponent() {
    const [number, setNumber] = useState(1);

    return (
        <>
            <NumberShow number={number} />
            <NumberChange setNumber={setNumber} />
        </>
    );
}

export default HighComponent;
