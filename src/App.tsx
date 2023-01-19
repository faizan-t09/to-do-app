import './App.css';
import {MainPage} from "./pages/MainPage"
import {useState} from 'react'

import { taskType } from './interfaces/TaskInterface';

function App() {

  const [tasks,setTasks] = useState<taskType[]>([{id:1,title:"Work on todo",desc:"add functionality",due:"today"}]);
  const [taskBin,setTaskBin] = useState<taskType[]>([]);

  return (
    <div className="App">
      <MainPage tasks={tasks} setTasks={setTasks} taskBin={taskBin} setTaskBin={setTaskBin}/>
    </div>
  );
}

export default App;
