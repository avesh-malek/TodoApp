import styles from "./Display.module.css";
import React, { useRef } from "react";
import { TodoContext } from "../Store/TodoContext";
import { useContext } from "react";

const Display = () => {

  const {todoitems,updateitem,deleteitem,updatecompid,updateid} = useContext(TodoContext)

  const updateinput = useRef()
  const updatedate = useRef()

  const Updateitemhandle = (id) => {

    let input = updateinput.current.value
    let date = updatedate.current.value
    updateitem(id,input,date)

    updateinput.current.value = ""  
    updatedate.current.value = ""
  }
  return (
    <div className="container text-center">
      {todoitems.map((item, index) => (
        <React.Fragment key={item.id}>
        <div className={`row ${styles.todorow}`} >
          <div className="col">
            <p className={styles.para}>{item.name}</p>
          </div>

          <div className="col">
            <p className={styles.date}>{item.dudate}</p>
          </div>

          <div className={`${styles.butcont} col`}>
            <button
              onClick={() => deleteitem(item.id)}
              className={styles.Delete}
            >
              Delete
            </button>
            <button
              onClick={() => updatecompid(item.id)}
              className={styles.Update}
            >
              Update
            </button>
          </div>
        </div>

          {updateid === item.id && (

            <div className={`row ${styles.todorow}`}>
              <div className="col">
                  <input type="text" className={styles.input} 
                  ref={updateinput}  />
              
              </div>

              <div className="col">
              
                  <input type="date" className={styles.input} ref={updatedate} />
              
              </div>

              <div className={`col`}>
                <button className={styles.button} onClick={()=>Updateitemhandle(item.id)}>Add</button>
              </div>
            </div>
          )}
       </React.Fragment>
      ))}
    </div>
  );
};

export default Display;
