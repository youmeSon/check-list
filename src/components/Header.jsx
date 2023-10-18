import React from "react";
import styles from "./Header.module.css";
import { ImSun } from "react-icons/im";

export default function Header() {
  return (
    <div className={styles.header}>
      <ImSun />
      <ul className={styles.headerList}>
        <li className={styles.list}>All</li>
        <li className={styles.list}>Active</li>
        <li className={styles.list}>Completed</li>
      </ul>
    </div>
  );
}
