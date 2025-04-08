'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Bottle } from './Bottle';

const BottleContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading...">
        <Stage environment="apartment" intensity={0.5}>
          <Bottle />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default BottleContainer;
