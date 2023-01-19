import React from "react";
import logo from "../assets/check-mark.svg";
import style from "./Header.module.css"

export const Header = () => {
  return (
    <div className={style.AppHeader}>
      <img src={logo} alt="logo" className={style.logo}/>
      TO-DO
    </div>
  );
};
