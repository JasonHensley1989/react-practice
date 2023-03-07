import React, { useState } from "react";
import TodoList from "./TodoList";


function App() {
  const [todos, setTodos] = useState(['ToDo1', 'Todo2']);
  return (
    <>
    <TodoList todos={todos} />
    <input type="text"></input>
    <button>Add</button>
    <button>Delete</button>
    <div>0 left</div>
    </>
  )
}

export default App;
