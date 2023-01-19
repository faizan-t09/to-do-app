import React from "react";
import style from '../module-css/NewJob.module.css'

export const NewJob = () => {
  return (
    <form className={style.newJob}>
      <input className={style.inputJob} type="text" />
      <button className={style.submitJob} type="submit">Add</button>
    </form>
  );
};
