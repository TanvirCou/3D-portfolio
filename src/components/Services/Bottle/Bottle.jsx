import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Bottle(props) {
  const { nodes, materials } = useGLTF('/bottle.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Circle_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={21.539}
      />
      <mesh
        geometry={nodes.Circle002_Material001_0.geometry}
        material={materials['Material.001']}
        position={[0, 114.156, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={25.912}
      />
    </group>
  );
}

useGLTF.preload('/bottle.glb');
