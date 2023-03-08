import React, { useState} from "react";
import {useDispatch} from 'react-redux';
import style from "../module-css/NewJob.module.css";
import { taskType } from "../interfaces/TaskInterface";
import { todoActions } from "../redux/todoReducer";

export const NewJob: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<taskType>({
    id: -1,
    title: "",
    body: "",
    due: "",
    done: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.title === "") return;

    if (formData.id !== -1)
      dispatch(todoActions.updateTask(formData))
    else {
      let randomId = Math.floor(Math.random() * 1000);
      dispatch(todoActions.addTask({ ...formData, id: randomId }));
    }

    setFormData({ id: -1, title: "", body: "", due: "", done: false });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  const handleDrop = (event: React.DragEvent<HTMLFormElement>) => {
    const taskData = JSON.parse(event.dataTransfer.getData("task"));
    if (!taskData.done) {
      setFormData(taskData);
    }
  };

  return (
    <form
      className={style.newJob}
      onSubmit={handleSubmit}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className={style.formDiv}>
        <label htmlFor="title" className={style.labelJob}>
          Title :{" "}
        </label>
        <input
          id="title"
          type="text"
          className={style.inputJob}
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className={style.formDiv}>
        <label htmlFor="details" className={style.labelJob}>
          Details :{" "}
        </label>
        <input
          id="body"
          type="text"
          className={style.inputJob}
          value={formData.body}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginBottom: "0.3em" }}>
        <label htmlFor="due" className={style.labelJob}>
          Due :{" "}
        </label>
        <input
          id="due"
          type="date"
          value={formData.due}
          onChange={handleChange}
        />
      </div>
      <div className={style.actionsDiv}>
        <button
          className={style.buttonJob}
          type="reset"
          onClick={() =>
            setFormData({ id: -1, title: "", body: "", due: "", done: false })
          }
        >
          Clear
        </button>
        <button className={style.buttonJob} type="submit">
          + Add
        </button>
      </div>
    </form>
  );
};
