import './App.css';
import {MainPage} from "./pages/MainPage"
import {useState} from 'react'

import { taskType } from './interfaces/TaskInterface';

function App() {

  const [tasks,setTasks] = useState<taskType[]>([{id:1,title:"Work on todo",desc:"add functionality",due:"today",done:false}]);

  return (
    <div className="App">
      <MainPage tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
