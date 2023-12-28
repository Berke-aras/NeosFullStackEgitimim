import React, { useEffect, useState } from "react";

function Effect() {
    const [number, setNumber] = useState(0);

    function handleClick() {
        setNumber(Math.random());
        // console.log(number);
    }

    useEffect(() => {
        console.log(number); //anlık olarak değeri veriyor
    }, [number]);

    useEffect(() => {
        console.log("yüklendi");
    }, []); // sayfa yüklendiğinde yenilendiğinde çalışır bu şekilde

    return (
        <>
            <div>
                {number}
                <button onClick={handleClick}>Değiştir</button>
            </div>
        </>
    );
}

export default Effect;
