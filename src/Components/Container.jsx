import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={styles.container2}>{children}</div>;
};

export default Container;
