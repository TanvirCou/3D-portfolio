'use client';
import { useRef } from 'react';
import { featuredData } from '../../Data/Data';
import SingleWork from './SingleWork';
import { useScroll, useSpring, motion } from 'motion/react';

const Portfolio = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} id="portfolio">
      <div className="sticky left-0 top-0 w-full pt-12 text-center font-[Poppins] text-[#dd4c62]">
        <p className="text-3xl font-semibold">Featured Works</p>
        <motion.div className="mx-3 mt-2 h-2 rounded-md bg-white"></motion.div>
        <motion.div
          style={{ scaleX }}
          className="mx-3 -mt-2 h-2 rounded-md bg-[#dd4c62]"
        ></motion.div>
      </div>
      <div>
        {featuredData.map((data) => (
          <SingleWork key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
