'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Computer } from './Services/Computer/Computer';

const Test = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Canvas>
        <Suspense fallback="Loading.....">
          <Stage environment="night" intensity={0.5}>
            <Computer />
          </Stage>
          <OrbitControls enableZoom={false} />
          <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Test;
