import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

function Forms({inputText, setInputText,todos,setTodos,setStatus}) {

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text:inputText, completed:false, id:Math.random() }
        ])
        console.log(todos)
        setInputText("")
    }

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
        console.log(e.target.value)
    }

  return (
    <>
        <form>
            <div className='search'>
                <input className='todo-input' type='text' placeholder='Add..' onChange={inputTextHandler} value={inputText} />
                <button className='todo-button' type='submit' onClick={submitTodoHandler} >
                <FaPlusCircle />
                </button>
            </div>
            <div className='select' >
                <select name="todos" className='filter-todo' onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Complated</option>
                    <option value="uncompleted">Uncomplated</option>
                </select>
            </div>
        </form>
    </>
  )
}

export default Forms