'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Cube } from './Cube';
import Loading from '@/components/Loading/Loading';

const CubeContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={<Loading />}>
        <Stage environment="warehouse" intensity={0.5}>
          <Cube />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.5} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default CubeContainer;
