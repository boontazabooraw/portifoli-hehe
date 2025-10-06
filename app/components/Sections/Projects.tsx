"use client";

import Image from "next/image";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-row md:flex-col md:justify-center h-full w-full justify-between items-center gap-5 px-15 pb-10">
        <ProjectCard />
    </div>
  );
};

export default Projects;
