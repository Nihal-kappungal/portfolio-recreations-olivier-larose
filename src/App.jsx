import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import GridAnimation from "./components/GridAnimation";

const App = () => {
  return (
    <div>
      <Header />
      <GridAnimation />
      <Project />
    </div>
  );
};

export default App;
