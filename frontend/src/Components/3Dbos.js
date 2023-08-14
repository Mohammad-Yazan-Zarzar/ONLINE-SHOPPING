import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Shop } from "./Sceneo";
import {Environment } from '@react-three/drei'
// import { Cylinder3d } from "@react-three/drei";

// import {orbitControls} from ''
// import Cylinder3d from "./component/Cylinder3d";

import React, { Suspense } from 'react'

const Dbox = () => {
  return (
    <>
        <Canvas>
            {/* <Cylinder3d position={[-1.2, 0, 0]} /> */}
            {/* <Cylinder3d position={[1.2, 0, 0]} /> */}
            {/* <Environment files="./img/workshop_1k.hdr" background /> */}
            {/* <Environment preset="forest" /> */}

            {/* <Stage environment={"city"} intensity={0.5} > */}
            {/* <Stage environment={{files:"city.hdr"}} intensity={0.5} > */}
            {/* <Environment path="http://localhost:5000/public/hdri/"  files="city.hdr" preset="city" /> */}
            <ambientLight intensity={0.5}   />
            <spotLight intensity={0.5} penumbra={1}/>
            <Suspense fallback={null}  >
                <Shop/>

            </Suspense>
            {/* </Stage> */}
            <OrbitControls target={[0,0,0]} enableZoom={false} enableRotate={true} autoRotate={true}  ></OrbitControls>
        </Canvas>
    </>
  )
}

export default Dbox