import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Cube(props) {
  const { nodes, materials } = useGLTF('/cube.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.materialmat_0404A2_1_00000}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.materialmat_111111_1_00000}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.materialmat_222222_1_00000}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.materialmat_EEEEEE_1_00000}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.materialmat_FF0000_1_00000}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.materialmat_FFFE33_1_00000}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.materialmat_FFFFFF_1_00000}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/cube.glb');
