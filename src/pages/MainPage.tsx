import React from "react";
import { Header } from "../components/Header";
import { NewJob } from "../components/NewJob";
import { List } from "../components/List";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <NewJob />
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <List />
        <List />
      </div>
      <Footer/>
    </div>
  );
};
