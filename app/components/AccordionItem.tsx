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
        ...(!isNotSmall && { height: isSelected ? "100vh" : "50vh" }),
        ...(isNotSmall && { width: isSelected ? "100vw" : "50vw" }),
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`w-full overflow-hidden ${background}`}
    >
      <div className="top-4 left-4 z-10 font-bold ">{title}</div>
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
