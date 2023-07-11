import React from 'react'
import { Suspense,useState ,useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer  = useGLTF('./desktop_pc/scene.gltf')
  const sword  = useGLTF('./desktop_pc/model.gltf') 
  return (
    <mesh>
      <hemisphereLight 
      intensity={1} 
      groundColor='red'/>

      <pointLight intensity={1}/>

      <spotLight 
      position={[-20,80,10]}
      angle={0.12}
      // penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={10}
      />

      <primitive 
      object={computer.scene}
      scale={1.4}
      position={[0,-3.25,-1.5]}
      rotation={[-.1,0.2,-.1]}
      /> 

    <primitive 
      object={sword.scene}
      scale={3.7}
      position={[6.4,-2,7]}
      rotation={[1.3,0,1]}
      /> 

    </mesh>
  )
}

const ComputersCanvas = ()=>{
  return(
  <Canvas
  frameloop='demand'
  shadows
  camera={{position:[20,3,5] ,fav:25}}
  gl={{preserveDrawingBuffer:true}}
  
  >

    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
      enableZoom={true}
      maxPolarAngle={Math.PI/3}
      minPolarAngle={Math.PI/3}
      />

      <Computers/>
    </Suspense>

    <Preload all/> 
  </Canvas>

  )
}

export default ComputersCanvas