import React, { useState } from "react";
import "./Calc.css";

function Calculator() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [result, setresult] = useState();

    const handleNumber1Change = (e) => {
        setNumber1(Number(e.target.value));
    };

    const handleNumber2Change = (e) => {
        setNumber2(Number(e.target.value));
    };

    const handleAdd = () => {
        setresult(number1 + number2);
    };

    return (
        <>
            <div className="calculator-container">
                <h1>useState</h1>
                <div className="form-container">
                    <div className="form-group">
                        <label htmlFor="number1" className="form-label">
                            number1
                        </label>
                        <input
                            type="number"
                            id="number1"
                            className="form-input"
                            onChange={handleNumber1Change}
                            value={number1}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="number" className="form-label">
                            number2
                        </label>
                        <input
                            type="number"
                            id="number2"
                            className="form-input"
                            onChange={handleNumber2Change}
                            value={number2}
                        />
                    </div>

                    <button className="form-button" onClick={handleAdd}>
                        Ekle
                    </button>

                    <div className="form-froup">
                        <label htmlFor="result" className="form-label">
                            Result
                        </label>
                        <input
                            type="number"
                            className="form-input"
                            id="result"
                            value={result}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculator;
