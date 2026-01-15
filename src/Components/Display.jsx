import styles from "./Display.module.css";
import React from "react";

const Display = ({ Todoitems, deleteitem, updatecompid, updateid ,update_input,update_date,Updateitem,valuefor_up_date,valuefor_upInput}) => {
  return (
    <div className="container text-center">
      {Todoitems.map((item, index) => (
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
                  <input type="text" className={styles.input} onChange={(e) => update_input(e.target.value)} value={valuefor_upInput} />
              
              </div>

              <div className="col">
              
                  <input type="date" className={styles.input} onChange={(e) =>update_date(e.target.value)} value={valuefor_up_date}/>
              
              </div>

              <div className={`col`}>
                <button className={styles.button} onClick={()=>Updateitem(item.id)}>Add</button>
              </div>
            </div>
          )}
       </React.Fragment>
      ))}
    </div>
  );
};

export default Display;
