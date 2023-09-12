import React from 'react';
import styles from './item.module.css';
import { ImBin } from "react-icons/im";

export default function Item() {
    return (
      <div className={styles.list}>
        <input type='checkbox' name='list-checkbox' />
        <label for='list-checkbox'>study react</label>
        <ImBin />
      </div>
    );
}

