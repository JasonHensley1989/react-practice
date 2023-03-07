import React, { useState, useRef } from "react";
import TodoList from "./TodoList";


function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {

  }

  return (
    <>
    <TodoList todos={todos} />
    <input ref={todoNameRef} type="text"></input>
    <button onClick={handleAddTodo}>Add</button>
    <button>Delete</button>
    <div>0 left</div>
    </>
  )
}

export default App;
