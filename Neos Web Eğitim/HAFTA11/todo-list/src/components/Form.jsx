import { FaCirclePlus } from "react-icons/fa6";
import React from "react";

function Form() {
    return (
        <>
            <form>
                <div className="search">
                    <input
                        className="todo-input"
                        type="text"
                        placeholder="Add..."
                    />
                    <button className="todo-button" type="submit">
                        <FaCirclePlus />
                    </button>
                </div>

                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="" key="">
                            All
                        </option>
                        <option value="" key="">
                            Complated
                        </option>
                        <option value="" key="">
                            UnComplated
                        </option>
                    </select>
                </div>
            </form>
        </>
    );
}

export default Form;
