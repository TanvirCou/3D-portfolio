import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot.glb');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.head_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0.291, 490.57, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.neck_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-0.128, 434.475, -0.621]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={100}
        />
        <mesh
          geometry={nodes.left_ear_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-51.275, 495.806, -0.621]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[-59.633, 59.633, 59.633]}
        />
        <mesh
          geometry={nodes.upper_body_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0.018, 351.127, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={80.436}
        />
        <mesh
          geometry={nodes.screen_Material002_0.geometry}
          material={materials['Material.002']}
          position={[0.018, 351.127, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={80.436}
        />
        <mesh
          geometry={nodes.left_arm_Material001_0.geometry}
          material={materials['Material.001']}
          position={[82.272, 389.049, 11.795]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.right_arm_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-83.587, 389.049, 11.795]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-100, 100, 100]}
        />
        <mesh
          geometry={nodes.left_leg_Material001_0.geometry}
          material={materials['Material.001']}
          position={[23.474, 153.968, 8.622]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.right_foot_Material001_0.geometry}
          material={materials['Material.001']}
          position={[27.421, 32.685, 7.248]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.right_leg_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-32.382, 153.968, 8.622]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.left_foot_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-28.435, 32.685, 7.248]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.eyes_Material001_0.geometry}
          material={materials['Material.001']}
          position={[21.321, 500.528, 52.817]}
          scale={[15.282, 15.282, 4.594]}
        />
        <mesh
          geometry={nodes.right_ear_Material001_0.geometry}
          material={materials['Material.001']}
          position={[51.682, 495.806, -0.621]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={59.633}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/robot.glb');
