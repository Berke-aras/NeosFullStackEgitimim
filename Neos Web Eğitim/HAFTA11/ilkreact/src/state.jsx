import React, { useState } from "react";

const state = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function azalt() {
        setCount(count - 1);
    }

    function esitle() {
        setCount(0);
    }

    return (
        <>
            <div>{count}</div>
            <div>
                <button onClick={handleClick}>Arttir</button>
            </div>

            <div>
                <button onClick={azalt}>Azalt</button>
            </div>

            <div>
                <button onClick={esitle}>Eşitle</button>
            </div>
        </>
    );
};

export default state;
