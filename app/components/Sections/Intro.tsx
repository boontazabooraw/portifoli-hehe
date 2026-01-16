"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

const Intro = () => {
  return (
    <div className="flex flex-row md:flex-col md:justify-center h-full w-full justify-center items-center gap-5 px-15 pb-10">
      <div className="flex flex-col gap-5 lg:gap-3 w-60 lg:w-80">
        <div>
          <h1 className="text-xl lg:text-3xl font-bold tracking-wide">
            Hello, I&apos;m Leonard
          </h1>
          <h1 className="text-xs lg:text-lg">
            Frontend Web Developer and Designer
          </h1>
          <div className="flex flex-row gap-2 items-center pt-2">
            <FaHtml5 size={15} />
            <FaCss3Alt size={15} />
            <FaJs size={15} />
            <FaReact size={15} />
            <SiTypescript size={15} />
            <RiTailwindCssFill size={15} />
            <RiNextjsFill size={15} />
          </div>
        </div>
        <div>
          <span>
            I bring creativity and code together to craft websites that feel as
            good as they look.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
