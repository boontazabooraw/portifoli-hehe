"use client";

import { AnimatePresence, motion } from "motion/react";

const AccordionItem = ({
  children,
  index,
  selectedIndex,
  setSelectedIndex,
  title,
}: {
  children: React.ReactNode;
  index: number;
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  title: string;
}) => {
  const isSelected = selectedIndex === index;

  return (
    <motion.div
      onMouseEnter={() => setSelectedIndex(index)}
      onMouseLeave={() => setSelectedIndex(null)}
      initial={{
        height: "50vh",
      }}
      animate={{
        height: isSelected ? "100vh" : "50vh",
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full overflow-hidden"
    >
      <div className="top-4 left-4 z-10 font-bold ">
        {title}
      </div>
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionItem;
