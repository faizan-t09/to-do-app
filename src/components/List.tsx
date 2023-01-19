import React from "react";
import style from "./List.module.css";

export const List = () => {
  return (
    <div style={{marginTop:"1em"}}>
      <div className={style.listHeading}>Label</div>
      <div className={style.listContainer}>
        <li className={style.listElement} draggable>Hello</li>
        <li className={style.listElement} draggable>Hello</li>
        <li className={style.listElement} draggable>Hello</li>
        <li className={style.listElement} draggable>Hello</li>
      </div>
    </div>
  );
};
