"use client";

import { ProjectData } from "./data/Projects";
import Image from "next/image";

const ProjectCards = () => {
  return (
    <div className="lg:grid grid-cols-2 grid-rows-2 flex flex-col gap-2">
      {ProjectData.map((proj) => (
        <div
          key={proj.id}
          className="border-1 border-white/30 rounded-2xl p-4 "
        >
          <a
            href={proj.url}
            target="_blank"
            className="cursor-default relative"
          >
            <span className="absolute z-10 flex items-center justify-center text-center opacity-0 hover:opacity-100 h-full w-full rounded-xl hover:bg-black/50 p-5 text-xs transition-all duration-300 font-bold">
              {proj.desc}
            </span>
            <Image
              src={proj.imgpath}
              alt="Project Preview"
              width={200}
              height={200}
              className="rounded-2xl opacity-80  hover:brightness-30 transition-all duration-300"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
