import React from "react";
import { Header } from "../components/Header";
import { NewJob } from "../components/NewJob";
import { List } from "../components/List";
import { Footer } from "../components/Footer";

import { taskType } from "../interfaces/TaskInterface";

interface MainPageProps{
  tasks:taskType[];
  setTasks:( value:taskType[] | ((prev:taskType[])=>taskType[]))=>void;
  taskBin:taskType[];
  setTaskBin:( value:taskType[] | ((prev:taskType[])=>taskType[]))=>void;
}

export const MainPage:React.FC<MainPageProps> = ({tasks,setTasks,taskBin,setTaskBin}:MainPageProps) => {

  const deleteTask = (currTask:taskType) => {
    setTaskBin((prev)=>{return [...prev,currTask]});
    setTasks((prev)=>prev.filter((task)=>task.id!==currTask.id))
  }

  const undoDeleteTask = (currTask:taskType) => {
    setTasks((prev)=>{return [...prev,currTask]});
    setTaskBin((prev)=>prev.filter((task)=>task.id!==currTask.id))
  }
  return (
    <div>
      <Header />
      <NewJob setTasks={setTasks}/>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <List onClick={deleteTask} title="Tasks" elements={tasks}/>
        <List onClick={undoDeleteTask} title="Finished" elements={taskBin}/>
      </div>
      <Footer/>
    </div>
  );
};
