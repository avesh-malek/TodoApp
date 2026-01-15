import styles from "./Input.module.css";

const Input = ({additem,val,value,Date,valuedate}) => {
  return (
    <div className={`container text-center ${styles.row}`}>
      <div className="row">
        <div className="col">
          <input type="text" className={styles.input} onChange={(e) => val(e.target.value)} value={value} />
        </div>
        <div className="col">
          <input type="date" className={styles.input}
          onChange={(e) => Date(e.target.value)} 
          value={valuedate}/>
        </div>
        <div className="col">
          <button onClick={additem} className={styles.button}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
