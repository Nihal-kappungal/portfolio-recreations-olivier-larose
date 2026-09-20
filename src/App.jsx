import { useEffect } from "react";
import Lenis from "lenis";

import Project from "./components/Project";
import GridAnimation from "./components/GridAnimation";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true,
      respectReducedMotion: false,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Loader />
      <GridAnimation />
      <Hero />
      <Project />
    </main>
  );
};

export default App;
