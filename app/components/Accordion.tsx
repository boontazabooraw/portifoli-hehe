"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="absolute flex flex-col md:flex-row h-full w-full">
      <AccordionItem
        index={0}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        <h1>INTRO COMPONENT</h1>
      </AccordionItem>
      <AccordionItem
        index={1}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        <h1>PROJECTS COMPONENT</h1>
      </AccordionItem>
      <AccordionItem
        index={2}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        <h1>CONTACT COMPONENT</h1>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
