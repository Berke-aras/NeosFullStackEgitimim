import React from "react";

const click = () => {
    let count = 0;

    function handleClick() {
        console.log("Click");
    }

    return (
        <>
            <button onClick={handleClick}>buton</button>

            <button
                onClick={() => {
                    console.log("Click2");
                }}
            >
                buton2
            </button>

            <div>{count}</div>
            <button
                onClick={() => {
                    count++;
                    console.log(count);
                }}
            >
                Buton3
            </button>
        </>
    );
};

export default click;
