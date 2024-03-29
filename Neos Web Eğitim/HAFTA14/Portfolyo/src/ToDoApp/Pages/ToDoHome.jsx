import React from "react";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import ToDoList from "../components/ToDoList";
import "./ToDo.css";

function ToDoHome() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filteredHandler = () => {
        switch (status) {
            case "complated":
                setFilteredTodos(
                    todos.filter((todo) => todo.complated === true)
                );
                break;
            case "uncomplated":
                setFilteredTodos(
                    todos.filter((todo) => todo.complated === false)
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filteredHandler(todos);

        if (todos.length !== 0) {
            saveLocalTodos();
        }

        if (todos.length === 0) {
            localStorage.removeItem("todos");
        }
    }, [todos, status]);

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    };

    return (
        <>
            <div className="container">
                <header>
                    <h1>TODO LIST</h1>
                </header>
                <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    setStatus={setStatus}
                />
                <ToDoList
                    todos={todos}
                    setTodos={setTodos}
                    filteredTodos={filteredTodos}
                />
            </div>
        </>
    );
}

export default ToDoHome;
