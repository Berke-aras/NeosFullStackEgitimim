import React, { useReducer } from "react";
import "./Calc.css";

function reducer(state, action) {
    switch (action.type) {
        case "SET_NUMBER1":
            return { ...state, number1: action.payload };
    }
}

//başlangıçdeğer belirleme
const initialState = {
    number1: 0,
    number2: 0,
    result: 0,
};

function CalculatorReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleNumber1Change = (e) => {
        dispatch({ type, payload });
    };

    return (
        <>
            <div className="calculator-container">
                <h1>useReducer</h1>
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
                        />
                    </div>
                    <button className="form-button"> Ekle </button>

                    <div className="form-froup">
                        <label htmlFor="result" className="form-label">
                            Result
                        </label>
                        <input
                            type="number"
                            className="form-input"
                            id="result"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalculatorReducer;
