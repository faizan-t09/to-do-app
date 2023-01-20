import React from "react";
import style from "../module-css/List.module.css";
import { Task } from "./Task";

import { taskType } from "../interfaces/TaskInterface";

interface ListProps {
  title: string;
  elements: taskType[];
  addTask:(task:taskType)=>void;
  removeTask:(task:taskType)=>void;
  deleteTask:(task:taskType)=>void
}

export const List: React.FC<ListProps> = ({ title, elements,addTask,removeTask,deleteTask }) => {
  
  const handleDrop = (event : React.DragEvent<HTMLDivElement>) => {
    addTask(JSON.parse(event.dataTransfer.getData("task")));
  }

  return (
    <div style={{ marginTop: "1em" }} onDrop={handleDrop} onDragOver={(e)=>{e.preventDefault()}}>
      <div className={style.listHeading}>{title}</div>
      <div className={style.listContainer}>
        {elements.map((element) => {
          return (
            <Task
              key={element.id}
              element={element}
              toggleTask={removeTask}
              deleteTask={deleteTask}
            ></Task>
          );
        })}
      </div>
    </div>
  );
};
