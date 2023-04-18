import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Shop } from "./Sceneo";
// import {orbitControls} from ''
// import Cylinder3d from "./component/Cylinder3d";

import React from 'react'

const Dbox = () => {
  return (
    <>
        <Canvas>
            {/* <Cylinder3d position={[-1.2, 0, 0]} /> */}
            {/* <Cylinder3d position={[1.2, 0, 0]} /> */}
            <Stage environment={"city"} intensity={0.5} >
                <Shop/>
            </Stage>
            <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true}></OrbitControls>
        </Canvas>
    </>
  )
}

export default Dbox