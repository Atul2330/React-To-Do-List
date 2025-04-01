import React, { useState } from 'react'
import { PRIORITY_DEFAULT } from '../../Constants/priorities';
import styles from './ToDoForm.module.css'
import ToDoFormFields from '../ToDoFormFields/ToDoFormFields';

function ToDoForm({onCreate}) {
  const [showAllFields,setShowAllFields]=useState(false);

  function handleSubmit(event){
    event.preventDefault()
    const {elements}=event.target
    if(elements.name.value === "") return;

    onCreate({
      name:elements.name.value,
      description:elements.description?.value??"",
      deadline:elements.deadline?.value??"",
      priority:elements.priority?.value?? PRIORITY_DEFAULT,
      completed: false
    })
    event.target.reset()
  }
  return (
    <section>
        <h3 className={styles.Title}>New Task
          <button onClick={()=>setShowAllFields(!showAllFields)}>
            {showAllFields ? "🔼" :"🔽"} </button>
        </h3>

        <form className={styles.Form} onSubmit={handleSubmit}>
          <ToDoFormFields showAllFields={showAllFields}/>

          <input type="submit" value="Add" className={styles.Submit}/>
        </form>
    </section>
 )
}

export default ToDoForm