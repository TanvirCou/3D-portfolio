'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Computer } from './Computer';
import Loading from '@/components/Loading/Loading';

const ComputerContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={<Loading />}>
        <Stage environment="night" intensity={0.5}>
          <Computer />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default ComputerContainer;
