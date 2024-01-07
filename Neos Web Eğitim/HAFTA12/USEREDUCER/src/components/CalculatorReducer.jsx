import React, { useReducer } from "react";
import "./Calc.css";
import { reducer, initialState } from "./ReducerCalculator";

function CalculatorReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleNumber1Change = (e) => {
        dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
    };

    const handleNumber2Change = (e) => {
        dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) });
    };

    const handleAdd = () => {
        dispatch({
            type: "SET_RESULT",
            payload: state.number1 + state.number2,
        });
    };

    // console.log(state);

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
                            onChange={handleNumber2Change}
                        />
                    </div>
                    <button className="form-button" onClick={handleAdd}>
                        Ekle
                    </button>

                    <div className="form-group">
                        <label htmlFor="result" className="form-label">
                            Result
                        </label>
                        <input
                            type="number"
                            id="result"
                            className="form-input"
                            value={state.result}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalculatorReducer;
