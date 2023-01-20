import React from "react";
import style from "../module-css/Task.module.css";
import { taskType } from "../interfaces/TaskInterface";
import deleteIcon from "../assets/delete-icon.svg";

interface TaskProps {
  element: taskType;
  toggleTask: (task: taskType) => void;
  deleteTask: (task: taskType) => void;
}

export const Task: React.FC<TaskProps> = ({
  element,
  toggleTask,
  deleteTask,
}: TaskProps) => {

  const handleDrag = (event : React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("task",JSON.stringify(element));
  }

  return (

    <div
      className={style.taskElement}
      onClick={(e) => {
        e.stopPropagation();
        toggleTask(element);
      }}
      onDragStart={handleDrag}
      draggable
    >
      <img
        src={deleteIcon}
        className={style.deleteIcon}
        alt="delete"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(element);
        }}
      />
      <h5 style={{ margin: 0 }}>{element.title}</h5>
      <p style={{ fontSize: "0.6em", margin: 0 }}>{element.desc}</p>
      <p style={{ fontSize: "0.6em", margin: 0 }}>{element.due}</p>
    </div>
  );
};
