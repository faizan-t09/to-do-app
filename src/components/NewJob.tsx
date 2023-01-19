import React,{useState} from "react";
import style from "../module-css/NewJob.module.css";
import { taskType } from '../interfaces/TaskInterface';

interface NewJobProps{
  setTasks:(value:taskType[]|((prev:taskType[])=>taskType[]))=>void;
}

export const NewJob:React.FC<NewJobProps> = ({setTasks}:NewJobProps) => {

  const [formData,setFormData] = useState<taskType>({id:0,title:"",desc:"",due:""})

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    if(formData.title==="")
      return;
    let randomId = Math.floor(Math.random()*1000)
    setTasks((prev)=>[...prev,{...formData,id:randomId}]);
    setFormData({id:0,title:"",desc:"",due:""})
  } 


  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev)=>{return {...prev,[event.target.id]:event.target.value}});
  }

  return (
    <form className={style.newJob} onSubmit={handleSubmit}>
      <div className={style.formDiv}>
        <label htmlFor="title" className={style.labelJob}>Title : </label>
        <input id="title" type="text" className={style.inputJob} value={formData.title} onChange={handleChange} />
      </div>
      <div className={style.formDiv}>
        <label htmlFor="details" className={style.labelJob}>Details : </label>
        <input id="desc" type="text" className={style.inputJob} value={formData.desc} onChange={handleChange}/>
      </div>
      <div style={{ marginBottom: "0.3em" }}>
        <label htmlFor="due" className={style.labelJob}>Due : </label>
        <input id="due" type="date" value={formData.due} onChange={handleChange}/>
      </div>
      <div className={style.actionsDiv}>
        <button className={style.buttonJob} type="reset">Clear</button>
        <button className={style.buttonJob} type="submit">+ Add</button>
      </div>
    </form>
  );
};
