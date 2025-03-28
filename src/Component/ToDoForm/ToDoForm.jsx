import React from 'react'
import styles from './ToDoForm.module.css'

function ToDoForm() {
  function handleSubmit(event){
    event.preventDefault()
    const {elements}=event.target
    if(elements.name.value === "") return;

    console.log({
      name:elements.name.value,
      description:elements.description.value,
      deadline:elements.deadline.value,
      priority:elements.priority.value,
      completed: false
    })
  }
  return (
    <section>
        <h3 className={styles.Title}>New Task</h3>

        <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.FormFields}>
            <div className={styles.FormField}>
              <input
                  type='text'
                  aria-label='Name*'
                  placeholder='Task Name*'
                  name='name'
                  autoComplete='off'
              />
            </div>

            <div className={styles.FormField}>
              <textarea 
                  aria-label='Description'
                  placeholder='Task Description'
                  name='description'
                  rows="3"
              />
            </div>
            
            <div className={styles.FormGroup}>
              <div className={styles.FormField}>
                <label htmlFor='deadline'>Deadline: </label>
                <input type='date' id='deadline' name='deadline'/>
              </div>

              <div className={styles.FormField}>
                <label htmlFor='priority'>Priority</label>
                <select defaultValue="none" name="priority" id="priority">
                  <option value="none">None</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>

          <input type="submit" value="Add" className={styles.Submit}/>
        </form>
    </section>
  )
}

export default ToDoForm