"use client";

import { useMediaQuery } from "react-responsive";
import ProjectCarousel from "../ProjectCarousel";
import React from "react";
import ProjectCards from "../ProjectCards";

const Projects = () => {
  const isNotSmall = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const [_, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex h-full w-full justify-center items-center gap-5 px-15 pb-10">
      {isNotSmall ? <ProjectCards /> : <ProjectCarousel />}
    </div>
  );
};

export default Projects;
