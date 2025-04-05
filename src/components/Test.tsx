"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei"

const Test = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <Canvas>
                <mesh>
                    <Sphere args={[1, 100, 200]} scale={2.5}>
                        <MeshDistortMaterial color="#DB8B9B" attach="material" distort={0.5} speed={2} />
                    </Sphere>
                    {/* <meshStandardMaterial color="red" /> */}

                    <ambientLight intensity={2} />
                    <directionalLight position={[1, 2, 3]} />
                    {/* <OrbitControls /> */}
                </mesh>
            </Canvas>
        </div>
    )
}

export default Test