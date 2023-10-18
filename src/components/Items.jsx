import React, { useState } from "react";
import styles from "./Items.module.css";
import Item from "./Item";
import Header from "./Header";
import ItemsAdd from "./ItemsAdd";

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
        <Header />
        <ul className={styles.itemsList}>
          {items.map((item) => (
            <Item todo={item.todo} key={item.id} />
          ))}
        </ul>
        <ItemsAdd />
      </div>
    </div>
  );
}
