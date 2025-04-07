'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import Button from './Button';

type DataProps = {
  data:
    | {
        id: number;
        title: string;
        desc: string;
        githubClient: string;
        liveLink: string;
        img: string;
        githubServer?: undefined;
      }
    | {
        id: number;
        title: string;
        desc: string;
        githubClient: string;
        githubServer: string;
        liveLink: string;
        img: string;
      };
};

const SingleWork = ({ data }: DataProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div className="flex h-screen w-full snap-start items-center justify-center">
      <div className="flex w-[90%] items-center justify-center gap-y-10 max-md:flex-col sm:w-[70%] md:w-[90%] md:gap-x-8 xl:w-[80%]">
        <div className="w-full md:w-[55%]">
          <div className="relative h-[30vh] w-full md:h-[50vh]" ref={ref}>
            <Image
              fill
              src={data.img}
              alt=""
              className="-z-10 h-full w-full rounded object-fill"
            />
          </div>
        </div>
        <motion.div
          className="flex w-[40%] flex-col gap-y-4 max-md:hidden"
          style={{ y }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl font-semibold">{data.title}</p>
          <p className="text-sm text-gray-400">{data.desc}</p>
          <Button link={data.liveLink} />
        </motion.div>

        <div className="flex w-full flex-col items-center gap-y-4 md:hidden md:w-[40%]">
          <p className="text-xl font-semibold">{data.title}</p>
          <p className="text-center text-sm text-gray-400">{data.desc}</p>
          <Button link={data.liveLink} />
        </div>
      </div>
    </div>
  );
};

export default SingleWork;
