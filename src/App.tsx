import "./App.css";
import { MainPage } from "./pages/MainPage";
import { useEffect, useState } from "react";

import { taskType } from "./interfaces/TaskInterface";

function App() {
  const [tasks, setTasks] = useState<taskType[]>([
    {
      id: 1,
      title: "Work on todo",
      body: "add functionality",
      due: "today",
      done: false,
    },
  ]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        setTasks(
          json.map((element: taskType) => {
            return { ...element, done: false };
          })
        )
      );
  }, []);

  return (
    <div className="App">
      <MainPage tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
