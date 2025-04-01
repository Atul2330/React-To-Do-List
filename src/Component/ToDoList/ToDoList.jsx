import React from 'react'
 import styles from './ToDoList.module.css'
import ToDoListItem from '../ToDoListItem/ToDoListItem';

function ToDoList({ todos,onUpdate, onDelete }) {
  return (
    <section>
      <h3>To-Do's</h3>
      {!todos.length && <i><small>
        No task left to do🎆 <br/>Add a few and get working😉
      </small></i>}

      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <ToDoListItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
        ))}
      </ul>
    </section>
  );
}

export default ToDoList