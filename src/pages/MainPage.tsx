import React from "react";
import { Header } from "../components/Header";
import { NewJob } from "../components/NewJob";
import { List } from "../components/List";
import { Footer } from "../components/Footer";
import style from "./MainPage.module.css";
import { useDispatch , useSelector} from "react-redux";
import { todoActions } from "../redux/todoReducer";
import { rootStateType } from '../redux/reducer';
import { taskType } from "../interfaces/TaskInterface";

export const MainPage: React.FC = () => {
  const dispatch= useDispatch()
  const tasks = useSelector((state:rootStateType) => state.todo)
  const markTaskDone = (currTask: taskType) => {
    dispatch(todoActions.markTaskDone({id:currTask.id}))
  };

  const unmarkTaskDone = (currTask: taskType) => {
    dispatch(todoActions.unmarkTaskDone({id:currTask.id}))
  };

  const deleteTask = (currTask: taskType) => {
    dispatch(todoActions.deleteTask({id:currTask.id}))
  };

  return (
    <div>
      <Header />
      <NewJob />
      <div className={style.mainPageDisplay}>
        <List
          removeTask={markTaskDone}
          addTask={unmarkTaskDone}
          title="Tasks"
          elements={tasks.filter((task) => task.done === false)}
          deleteTask={deleteTask}
        />
        <List
          removeTask={unmarkTaskDone}
          addTask={markTaskDone}
          title="Finished"
          elements={tasks.filter((task) => task.done === true)}
          deleteTask={deleteTask}
        />
      </div>
      <Footer />
    </div>
  );
};
