import React, { useState } from "react";
import { projectData } from "../data/ProjectData";

const Project = () => {
  const [open, setOpen] = useState(null);

  const handleDetails = (id) => {
    setOpen((currentOpen) => (currentOpen === id ? null : id));
    // console.log("Project name : ", data);
  };

  return (
    <section className="relative w-full min-h-screen z-25 px-6 pt-40 pb-15 bg-[#121212]">
      {/* header */}
      <div className="w-full flex items-center justify-between uppercase py-2 ">
        <h4 className="w-[35vw]  text-xs text-zinc-400 font-medium">Project</h4>
        <h4 className="w-[45vw] text-xs text-zinc-400 font-medium">category</h4>
        <h4 className="w-[25vw] text-xs text-zinc-400 font-medium">Client</h4>
        <h4 className="w-[10vw] flex justify-end text-xs text-zinc-400 font-medium">
          Year
        </h4>
      </div>
      {/* item */}
      {projectData.map((data) => (
        <React.Fragment key={data.id}>
          <div className="w-full h-px bg-white"></div>
          <div
            onClick={() => {
              handleDetails(data.id);
            }}
            className="w-full flex items-center justify-between uppercase py-4 text-white hover:bg-white transform-fill duration-300 ease-in-out hover:text-black"
          >
            <h4 className="w-[35vw] text-xs font-medium">{data.project}</h4>
            <h4 className="w-[45vw] text-xs font-medium">{data.category}</h4>
            <h4 className="w-[25vw] text-xs font-medium">{data.client}</h4>
            <h4 className="w-[10vw] flex justify-end text-xs font-medium">
              {data.year}
            </h4>
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
        </React.Fragment>
      ))}
    </section>
  );
};

export default Project;
