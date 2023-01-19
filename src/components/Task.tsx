import React from "react";
import style from "../module-css/Task.module.css";
import { taskType } from "../interfaces/TaskInterface";

interface TaskProps {
  element: taskType;
  onClick:(task:taskType)=>void
}

export const Task: React.FC<TaskProps> = ({ element,onClick }: TaskProps) => {
  return (
    <div className={style.taskElement} onClick={(e)=>{e.stopPropagation();onClick(element);}}>
        <h5 style={{margin:0}}>{element.title}</h5>
        <p style={{ fontSize: "0.6em" ,margin:0}}>{element.desc}</p>
        <p style={{ fontSize: "0.6em" ,margin:0}}>{element.due}</p>
    </div>
  );
};
