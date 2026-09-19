import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onDone }) => {
  const loaderRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const path = pathRef.current;
    const animationState = { depth: 200 };

    const getHeight = () => loader.getBoundingClientRect().height;

    const setPath = (depth) => {
      const width = window.innerWidth;
      const height = getHeight();

      path.setAttribute(
        "d",
        `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
          height - depth
        } 0 ${height} L0 0`,
      );
    };

    document.body.style.backgroundColor = "#121212";
    setPath(animationState.depth);

    const timeline = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        loader.style.display = "none"; // ✅ fully removes it from view
        onDone?.();
      },
    });

    timeline.to(animationState, {
      depth: 0,
      duration: 1,
      // 0.75 initial duration value
      ease: "power2.inOut",
      onUpdate: () => setPath(animationState.depth),
    });

    timeline.to(
      loader,
      {
        top: () => -(getHeight() + 5),
        duration: 1,
        ease: "power2.inOut",
      },
      "<",
    );

    const handleResize = () => setPath(animationState.depth);
    window.addEventListener("resize", handleResize);

    return () => {
      timeline.kill();
      window.removeEventListener("resize", handleResize);
      document.body.style.backgroundColor = "";
    };
  }, [onDone]);

  return (
    <div
      ref={loaderRef}
      className="fixed left-0 top-0 z-99 h-[calc(100vh+200px)] w-full"
    >
      <svg aria-hidden="true" className="h-full w-[110%]">
        <path ref={pathRef} className="fill-white" />
      </svg>
    </div>
  );
};

export default Loader;
