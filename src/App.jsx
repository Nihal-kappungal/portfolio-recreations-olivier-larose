import Header from "./components/Header";
import Project from "./components/Project";
import GridAnimation from "./components/GridAnimation";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Loader />
      <GridAnimation />
      <Hero />
      <Project />
    </div>
  );
};

export default App;
