"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useMediaQuery } from "react-responsive";

const AccordionItem = ({
  children,
  index,
  selectedIndex,
  setSelectedIndex,
  title,
  background,
}: {
  children: React.ReactNode;
  index: number;
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  title: string;
  background: string;
}) => {
  const isSelected = selectedIndex === index;
  const isNotSmall = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      onMouseEnter={() => setSelectedIndex(index)}
      onMouseLeave={() => setSelectedIndex(null)}
      initial={{
        ...(mounted && !isNotSmall && { height: "50vh" }),
        ...(mounted && isNotSmall && { height: "100vh" }),
      }}
      animate={{
        ...(!isNotSmall && {
          height: isSelected ? "100vh" : "50vh",
          backdropFilter: isSelected ? "blur(5px)" : "blur(0px)",
          background: isSelected ? "rgba(0, 1, 1, 0.30)" : "transparent",
        }),
        ...(isNotSmall && {
          width: isSelected ? "100vw" : "50vw",
          backdropFilter: isSelected ? "blur(5px)" : "blur(0px)",
          background: isSelected ? "rgba(0, 1, 1, 0.30)" : "transparent",
        }),
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`w-full overflow-hidden transition-colors duration-800 border-1 md:border-3 border-white/10 rounded-xl`}
    >
      <div
        className={`top-4 left-4 z-10 ${
          isSelected ? "opacity-0" : "opacity-80"
        } transition-opacity duration-400`}
      >
        <h1 className="font-semibold tracking-widest">{title}</h1>
      </div>
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className={`h-full w-full`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionItem;
