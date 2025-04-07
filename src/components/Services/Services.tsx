import React from 'react';
import ComputerContainer from './Computer/ComputerContainer';
import Image from 'next/image';
import Counter from './Counter';
import * as motion from 'motion/react-client';

const services = [
  {
    id: 1,
    img: '/service1.png',
    title: 'Full Stack Development',
    counter: 35,
  },
  {
    id: 2,
    img: '/service2.png',
    title: 'Fronted Development',
    counter: 23,
  },
  {
    id: 3,
    img: '/service3.png',
    title: 'Portfolio',
    counter: 46,
  },
];

const textVariants = {
  initial: { opacity: 0, y: -100, x: -100 },
  animate: { opacity: 1, y: 0, x: 0, transition: { duration: 1 } },
};

const listVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};

const Services = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <div className="flex h-full w-[90%] flex-col items-center justify-center sm:flex-row md:w-[80%]">
        <div className="flex h-[40vh] w-full flex-col justify-center gap-2 sm:h-full sm:w-1/2">
          <motion.p
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="text-3xl font-semibold sm:text-4xl lg:text-5xl"
          >
            How do i help?
          </motion.p>
          <motion.div
            variants={listVariants}
            initial="initial"
            whileInView="animate"
            className="flex flex-col gap-2"
          >
            {services.map((service) => (
              <motion.div
                variants={listVariants}
                key={service.id}
                className="service flex items-center gap-2 rounded-md bg-[#2f213f] p-3 sm:w-[80%] md:w-[70%] lg:w-[50%]"
              >
                <div className="serviceIcon rounded-full p-1.5">
                  <Image src={service.img} alt="" width={18} height={16} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs font-medium">{service.title}</p>
                  <p className="text-[10px]">{service.counter} projects</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div>
            <Counter from={0} to={24} text="Project Completed" />
          </div>
        </div>

        <div className="h-[40vh] w-full items-center justify-center sm:flex sm:h-full sm:w-1/2">
          <ComputerContainer />
        </div>
      </div>
    </div>
  );
};

export default Services;
