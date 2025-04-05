'use client';
import React from 'react';
import { motion, useMotionTemplate } from 'motion/react';

// const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ResumeButton = () => {
  // const color = useMotionValue(COLORS_TOP[0]);

  // useEffect(() => {
  //     animate(color, COLORS_TOP, {
  //         ease: "easeInOut",
  //         duration: 10,
  //         repeat: Infinity,
  //         repeatType: "mirror",
  //     });
  // }, []);

  const border = useMotionTemplate`1px solid pink`;
  const boxShadow = useMotionTemplate`0px 4px 24px pink`;
  return (
    <motion.a
      href="/#contact"
      style={{ border, boxShadow }}
      animate={{ opacity: [0, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="cursor pointer text-md rounded-md border border-white px-4 py-1.5 font-medium text-white"
    >
      Get Resume
    </motion.a>
  );
};

export default ResumeButton;
