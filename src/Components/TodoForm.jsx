import { useState } from "react";
import { useTodos } from "../contexts/todoContextApi";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodos } = useTodos();

  const addTodoList = (e) => {
    e.preventDefault();
    addTodos({ title: todo, isCompleted: false });
    setTodo("");
  };

  return (
    <form className="flex" onSubmit={addTodoList}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
