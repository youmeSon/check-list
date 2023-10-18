import React from "react";
import styles from "./ItemsAdd.module.css";

export default function ItemsAdd(props) {
  return (
    <div className={styles.addSection}>
      <input type='text' className={styles.input} />
      <button className={styles.btn}>Add</button>
    </div>
  );
}
