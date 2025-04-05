import { useState } from "react";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import styles from "./App.module.css";
import { TodoFilters } from "./components/TodoFilters/TodoFilters";

const TODOS_DEFAULT = [
  {
    id: "1",
    name: "Have Breakfast",
    description: "Wake Up, freshen up and have breakfast",
    deadline: "2025-02-09",
    priority: "high",
    completed: true,
  },
  {
    id: "2",
    name: "Exercise",
    description: "Exercise and have a drink",
    deadline: "2025-02-28",
    priority: "low",
    completed: false,
  },
  {
    id: "3",
    name: "Code",
    description: "Do some coding",
    deadline: "2025-02-15",
    priority: "medium",
    completed: false
  },
  {
    id: "4",
    name: "Meditate",
    description: "Get out or meditate to freshen up your mind",
    deadline: "2025-02-15",
    priority: "high",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_DEFAULT);
  const [filters, setFilters] = useState({});

  function handleCreate(newTodo) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: `${prevTodos.length + 1}`, ...newTodo },
    ]);
  }

  function handleUpdate(id, newTodo) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? newTodo : todo))
    );
  }

  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function filterTodos(todo) {
    const { completed, priority } = filters;

    return (
      (completed === "" || todo.completed === completed) &&
      (priority === "" || todo.priority === priority)
    );
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/to-do.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        <TodoFilters onFilter={setFilters} />
        <TodoList
          todos={todos.filter(filterTodos)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
