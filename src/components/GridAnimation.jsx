import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Header from "./Header";

const GridAnimation = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const colorize = (el) => {
    el.style.backgroundColor = "white";

    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  const getBlocks = () => {
    const blockSize = windowWidth * 0.05;

    const numberOfBlocks = Math.ceil(window.innerHeight / blockSize);

    return [...Array(numberOfBlocks).keys()].map((_, index) => (
      <div
        key={index}
        onMouseEnter={(e) => colorize(e.currentTarget)}
        className="h-[5vw] w-full"
      />
    ));
  };

  console.log("width :", windowWidth);

  return (
    <div className="absolute z-11 mix-blend-difference inset-0 flex h-full w-full overflow-hidden">
      {windowWidth > 0 &&
        [...Array(20).keys()].map((_, index) => (
          <div key={index} className="w-[5vw] shrink-0">
            {getBlocks()}
          </div>
        ))}
    </div>
  );
};

export default GridAnimation;
