"use client";

import { ProjectData } from "./data/Projects";
import Image from "next/image";

const ProjectCards = () => {
  return (
    <div className="lg:grid grid-cols-2 grid-rows-2 flex flex-col gap-2">
      {ProjectData.map((proj) => (
        <div
          key={proj.id}
          className=" border-1 border-white/30 rounded-2xl p-4 "
        >
          <a href={proj.url} target="_blank" className="cursor-default">
            <Image
              src={proj.imgpath}
              alt="Project Preview"
              width={200}
              height={200}
              className="rounded-2xl opacity-80"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
