'use client';
import { animate, useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

type CounterProps = {
  from: number;
  to: number;
  text: string;
};

const Counter = ({ from, to, text }: CounterProps) => {
  const [count, setCount] = useState(from);

  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (value) => setCount(Math.floor(value)),
    });

    return () => animation.cancel();
  }, [isInView, from, to]);

  return (
    <div ref={ref}>
      <p className="text-xl font-semibold text-[#dd4c62] md:text-2xl">
        {count}+
      </p>
      <p className="text-[10px]">{text}</p>
    </div>
  );
};

export default Counter;
