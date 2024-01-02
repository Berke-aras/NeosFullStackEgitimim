
import { useEffect, useState } from 'react'
import './App.css'
import Forms from './components/Forms'
import TodoList from './components/TodoList'

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status,setStatus] = useState("all")
  const [filteredTodos,setFilteredTodos] = useState([])

  const filteredHandler = () => {
    switch (status) {
      case "completed" :
        setFilteredTodos( todos.filter((todo) => todo.completed === true ) )
        break;
      case "uncompleted":
        setFilteredTodos( todos.filter((todo) => todo.completed === false ) )
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  useEffect(()=>{
    filteredHandler(todos)
  },[todos,status])
  

  return (
    <>
    <div className='container'>
      <header> <h1>TODO LIST</h1> </header>
      <Forms inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
      
    </>
  )
}

export default App
