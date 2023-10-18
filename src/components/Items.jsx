import React, { useState } from "react";
import styles from "./items.module.css";
import Item from "./item";

export default function Items() {
  const items = [
    { todo: "study react", isChecked: false, id: 1 },
    { todo: "eating", isChecked: false, id: 2 },
    { todo: "go to cafe", isChecked: false, id: 3 },
    { todo: "buy some potatoes", isChecked: false, id: 4 },
  ];
  return (
    <div>
      <div className={styles.items}>
        <ul>
          {items.map((item) => (
            <Item todo={item.todo} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
