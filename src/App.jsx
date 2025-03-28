import styles from "./App.module.css";
import ToDoForm from "./Component/ToDoForm/ToDoForm";

function App() {
  return(
  <div className={styles.App}>
    <header className={styles.Header}>
      <img className={styles.Logo} src="/to-do.png" />
      <h2 className={styles.Title}>To-Do-App</h2>
    </header>
    <div className={styles.AppContainer}>
      <ToDoForm/>
    </div>
  </div>
  )
}

export default App