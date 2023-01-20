import React from "react";
import { Header } from "../components/Header";
import { NewJob } from "../components/NewJob";
import { List } from "../components/List";
import { Footer } from "../components/Footer";

import { taskType } from "../interfaces/TaskInterface";

interface MainPageProps {
  tasks: taskType[];
  setTasks: (value: taskType[] | ((prev: taskType[]) => taskType[])) => void;
}

export const MainPage: React.FC<MainPageProps> = ({
  tasks,
  setTasks,
}: MainPageProps) => {
  
  const markTaskDone = (currTask: taskType) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === currTask.id) {
          task.done = true;
        }
        return task;
      })
    );
  };

  const unmarkTaskDone = (currTask: taskType) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === currTask.id) {
          task.done = false;
        }
        return task;
      })
    );
  };
  return (
    <div>
      <Header />
      <NewJob setTasks={setTasks} />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <List onClick={markTaskDone} title="Tasks" elements={tasks.filter((task)=>task.done===false)} />
        <List onClick={unmarkTaskDone} title="Finished" elements={tasks.filter((task)=>task.done===true)} />
      </div>
      <Footer />
    </div>
  );
};
