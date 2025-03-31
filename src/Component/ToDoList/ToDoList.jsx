import React from 'react'
 import styles from './ToDoList.module.css'
import ToDoListItem from '../ToDoListItem/ToDoListItem';

function ToDoList({ todos,onUpdate }) {
  return (
    <section>
      <h3>To-Do's</h3>

      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <ToDoListItem key={todo.id} todo={todo} onUpdate={onUpdate}/>
        ))}
      </ul>
    </section>
  );
}

export default ToDoList