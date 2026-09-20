import React, { useRef, useState } from "react";
import { projectData } from "../data/ProjectData";
import ProjectItems from "./ProjectItems";

const Project = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative w-full min-h-screen z-25 px-5 pt-45 pb-15 bg-[#121212]">
      <div className="w-full flex items-center justify-between uppercase py-2 ">
        <h4 className="w-[35vw] text-xs text-zinc-400 font-medium">Project</h4>
        <h4 className="w-[45vw] text-xs text-zinc-400 font-medium">category</h4>
        <h4 className="w-[25vw] text-xs text-zinc-400 font-medium">Client</h4>
        <h4 className="w-[10vw] flex justify-end text-xs text-zinc-400 font-medium">
          Year
        </h4>
      </div>
      {projectData.map((data) => (
        <ProjectItems
          key={data.id}
          data={data}
          open={open}
          onToggle={(id) => setOpen((current) => (current === id ? null : id))}
        />
      ))}
    </section>
  );
};

export default Project;
