import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/todoContextApi";
import "./App.css";
import TodoForm from "./Components/todoForm";
import TodoItem from "./Components/TodoItem";


function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos, 'todos')

  const addTodos = (todo) => {
     setTodos((prev) =>[...prev, {id: Date.now(), ...todo}])
  }

  const updateTodos = (id, todo) => {
    setTodos((prev) => {
    return  prev.map((prevId) =>{
        return prevId.id === id ? todo : prevId
      } )
    })
  }

  const deleteTodos = (id) => {
    setTodos((prev) => 
    prev.filter((prevId) => prevId.id !== id)
    )
  }

const isCompletedTodos = (id) => {
  setTodos((prev) => {
   return prev.map((pre) => { 
     return pre.id === id ? {...pre, isCompleted: !pre.isCompleted} : pre
    })
  })
}

useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  if (savedTodos&& savedTodos.length>0) {
    setTodos(savedTodos);
  }
}, []);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

  return (
    <TodoProvider value={{todos,addTodos,updateTodos,deleteTodos,isCompletedTodos}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
            </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => (
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
