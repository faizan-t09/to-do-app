import React, { useEffect } from "react";
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
  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("task", JSON.stringify(element));
  };

  useEffect(() => {
    console.log(`Task component mounted for : ${element.title}`);
    return () => {
      console.log(`Task component unmounted for : ${element.title}`);
    };
  });

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
      <h5 className={element.done ? style.done : ""} style={{ margin: 0 }}>
        {element.title}
      </h5>
      <p
        className={element.done ? style.done : ""}
        style={{ fontSize: "0.6em", margin: 0 }}
      >
        {element.body}
      </p>
      <p
        className={element.done ? style.done : ""}
        style={{ fontSize: "0.6em", margin: 0 }}
      >
        {element.due}
      </p>
    </div>
  );
};
