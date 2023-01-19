import React from "react";
import style from "../module-css/List.module.css";
import { Task } from "./Task";

import { taskType } from "../interfaces/TaskInterface";

interface ListProps {
  title: string;
  elements: taskType[];
  onClick:(task:taskType)=>void
}

export const List: React.FC<ListProps> = ({ title, elements,onClick }) => {
  return (
    <div style={{ marginTop: "1em" }}>
      <div className={style.listHeading}>{title}</div>
      <div className={style.listContainer}>
        {elements.map((element) => {
          return (
            <Task
              key={element.id}
              element={element}
              onClick={onClick}
            ></Task>
          );
        })}
      </div>
    </div>
  );
};
