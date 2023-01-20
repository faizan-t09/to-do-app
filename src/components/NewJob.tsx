import React, { useState } from "react";
import style from "../module-css/NewJob.module.css";
import { taskType } from "../interfaces/TaskInterface";

interface NewJobProps {
  setTasks: (value: taskType[] | ((prev: taskType[]) => taskType[])) => void;
}

export const NewJob: React.FC<NewJobProps> = ({ setTasks }: NewJobProps) => {
  const [formData, setFormData] = useState<taskType>({
    id: -1,
    title: "",
    desc: "",
    due: "",
    done: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.title === "") return;

    if (formData.id !== -1)
      setTasks((prev) => {
        return prev.map((task) => {
          if (task.id === formData.id) {
            task.title = formData.title;
            task.desc = formData.desc;
            task.due = formData.due;
          }
          return task;
        });
      });
    else {
      let randomId = Math.floor(Math.random() * 1000);
      setTasks((prev) => [...prev, { ...formData, id: randomId }]);
    }

    setFormData({ id: -1, title: "", desc: "", due: "", done: false });
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
          id="desc"
          type="text"
          className={style.inputJob}
          value={formData.desc}
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
            setFormData({ id: -1, title: "", desc: "", due: "", done: false })
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
