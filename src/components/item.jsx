import React from "react";
import styles from "./Item.module.css";
import { ImBin } from "react-icons/im";

export default function Item(props) {
  return (
    <div className={styles.list}>
      <li className={styles.item}>
        <input type='checkbox' name='list-checkbox' />
        <label>{props.todo}</label>
        <ImBin />
      </li>
    </div>
  );
}
