import styles from "./Empty.module.css";
import { TodoContext } from "../Store/TodoContext";
import { useContext } from "react";
function Empty() {
    
  const {todoitems} = useContext(TodoContext)
//   if (Todoitems.length !== 0) return null;
  return (
    <>{ todoitems.length === 0 &&<p className={styles.warnning}>
      your Todo-list is empty
    </p>}
    </>
  );
}

export default Empty;
