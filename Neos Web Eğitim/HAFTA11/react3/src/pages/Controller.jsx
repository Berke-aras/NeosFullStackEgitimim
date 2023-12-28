import React, { useState } from "react";
import LessComponent from "./LessComponent";
import BiggerCompanent from "./BiggerCompanent";

const Controller = () => {
    const [number, setNumber] = useState(0);

    return (
        <>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => {
                        setNumber(e.target.value);
                    }}
                />
            </div>

            {number < 5 && <LessComponent />}
            {number > 5 && <BiggerCompanent />}

            {/*     iflese = ?      İF                   else */}
            {/* {number > 5 ? <div>Evet Büyük</div> : <div>Evet Küçük</div>} */}
            {number > 5 ? <BiggerCompanent /> : <LessComponent />}

            {/* {number < 5 && (
                <div>
                    <p>Değer 5'ten küçüktür</p>
                </div>
            )}

            {number > 5 && (
                <div>
                    <p>Değer 5'ten büyüktür</p>
                </div>
            )} */}
        </>
    );
};

export default Controller;
