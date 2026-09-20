import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useRef, useState } from "react";

const ProjectItems = ({ data }) => {
  const [open, setOpen] = useState(null);

  const handleDetails = (id) => {
    setOpen((currentOpen) => (currentOpen === id ? null : id));
  };

  const bgRef = useRef(null);

  const openCurtain = (e) => {
    const t = e.currentTarget.getBoundingClientRect();
    const topHalf = e.clientY < t.top + t.height / 2;
    gsap.to(bgRef.current, { top: topHalf ? "-100%" : "100%", duration: 0 });
    gsap.to(bgRef.current, { top: "0%", duration: 0.2 });
  };

  const closeCurtain = (e) => {
    const t = e.currentTarget.getBoundingClientRect();
    const topHalf = e.clientY < t.top + t.height / 2;
    gsap.to(bgRef.current, { top: topHalf ? "-100%" : "100%", duration: 0.2 });
  };

  return (
    <div>
      <motion.div
        className="h-px bg-white"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <div
        onClick={() => {
          handleDetails(data.id);
        }}
        onMouseEnter={openCurtain}
        onMouseLeave={closeCurtain}
        className=" group relative w-full flex items-center justify-between capitalize py-3 overflow-hidden cursor-pointer"
      >
        <div
          ref={bgRef}
          className="absolute -top-full h-full w-full bg-white"
        />
        <div className="relative z-10 flex w-full items-center justify-between text-white group-hover:text-black group-hover:px-4">
          <h4 className="w-[35vw] text-[1rem] leading-none tracking-tight font-medium">
            {data.project}
          </h4>
          <h4 className="w-[45vw] text-[1rem] leading-none tracking-tight font-medium">
            {data.category}
          </h4>
          <h4 className="w-[25vw] text-[1rem] leading-none tracking-tight font-medium">
            {data.client}
          </h4>
          <h4 className="w-[10vw] flex justify-end text-[1rem] leading-none tracking-tight font-medium">
            {data.year}
          </h4>
        </div>
      </div>
      {open === data.id && (
        <div className="w-full h-auto flex flex-col gap-2.5 items-start">
          <p className="text-[2rem] w-[70%] mt-2.5 mb-1.5 text-white leading-none tracking-tighter">
            {data.description}
          </p>
          <a
            href=""
            className="button bg-white px-3 py-2.5 rounded-full mb-2.5 text-xs text-black font-semibold capitalize"
          >
            See Website
          </a>
          <div className="flex flex-col gap-1.5 mb-2.5">
            {data.services.map((service) => (
              <p className="flex items-center text-md capitalize before:content-[''] before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-white before:mr-2">
                {service}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2.5 mt-5 mb-10 w-full h-[35vh]">
            {data.images.map((image) => (
              <img
                className="w-full h-full object-contain"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItems;
