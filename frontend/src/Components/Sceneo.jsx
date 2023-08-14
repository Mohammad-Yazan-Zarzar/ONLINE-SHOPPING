/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\public\3D-Model\online_store_-_anil\sceneo.gltf --transform
Author: aniljaco (https://sketchfab.com/aniljaco)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/online-store-anil-37325ea8995b4b5e81ac1b0b86d4ee32
Title: Online Store - Anil
*/

import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
export  function Shop(props) {
  const meshRef=useRef();
  const controlsRef=useRef();
  const { nodes, materials } = useGLTF('/sceneo-transformed.glb')
  useEffect(()=>{
    controlsRef.current.target=meshRef.current.position;
    controlsRef.current.distance=5;
  },[]);
  return (
    <>
    <mesh position={[0,0,0]} ref={meshRef} >

    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0,0]} scale={0.2}>
      {/* <group > */}
        
        <mesh geometry={nodes.Object_2.geometry} material={materials.Body} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.mat_door} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.mat_door_panes} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.mat_frame} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.mat_roof} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.mat_slabs} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.mat_walls} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.mat_window} />
      </group>
    </group>
    </mesh>
    <OrbitControls enableZoom={false} ref={controlsRef}/>
</>
  )
}

useGLTF.preload('/sceneo-transformed.glb')
// export default Shop