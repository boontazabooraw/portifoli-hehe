"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";
import Intro from "./Sections/Intro";

const Accordion = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="absolute flex flex-col md:flex-row h-full w-full">
      <AccordionItem
        title="_Info"
        index={0}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        background="bg-black/20 bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10"
      >
        <Intro />
      </AccordionItem>
      <AccordionItem
        title="_Projects"
        index={1}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        background="bg-black/30 bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10"
      >
        <h1>PROJECTS COMPONENT</h1>
      </AccordionItem>
      <AccordionItem
        title="_Contact"
        index={2}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        background="bg-black/40 bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10"
      >
        <h1>CONTACT COMPONENT</h1>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
