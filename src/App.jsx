import Header from "./components/Header";
import Project from "./components/Project";
import GridAnimation from "./components/GridAnimation";
import Loader from "./components/Loader";

const App = () => {
  return (
    <div>
      <Loader />
      <GridAnimation />
      <Project />
    </div>
  );
};

export default App;
