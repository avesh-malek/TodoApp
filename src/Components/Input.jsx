import styles from "./Input.module.css";
import { TodoContext } from "../Store/TodoContext";
import { useContext, useRef } from "react";

const Input = () => {

  const {additem} = useContext(TodoContext)
  const inputref = useRef()
  const dateref = useRef()
  
  const handleformsubmit = (e) =>{
    e.preventDefault()

    let text = inputref.current.value
    let date = dateref.current.value
    additem(text,date)

    inputref.current.value = ""
    dateref.current.value = ""
  
  }


  return (
    <div className={`container text-center ${styles.row}`}>
      <form className="row" onSubmit={handleformsubmit}>
        <div className="col">
          <input type="text" className={styles.input} 
            ref={inputref}
          />
        </div>
        <div className="col">
          <input type="date" className={styles.input}
          ref={dateref}
          />
        </div>
        <div className="col">
          <button className={styles.button}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
