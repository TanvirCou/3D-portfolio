'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

const Test = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Canvas>
        <mesh>
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#DB8B9B"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          {/* <meshStandardMaterial color="red" /> */}

          <ambientLight intensity={1} />
          <directionalLight position={[1, 2, 3]} />
          {/* <OrbitControls /> */}
        </mesh>
      </Canvas>
    </div>
  );
};

export default Test;
