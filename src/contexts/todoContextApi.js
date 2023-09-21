import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "hello",
      isCompleted: false,
    },
  ],
  addTodos: (todo) => {},
  updateTodos: (id, todo) => {},
  deleteTodos: (id) => {},
  isCompletedTodos: (id) => {},
});

export const useTodos = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
