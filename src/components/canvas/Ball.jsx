"use client"

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Sphere } from "@react-three/drei";
import CanvasLoader from "../Loader";

// MovableSphere Component
const MovableSphere = ({ imgUrl }) => {
  const texture = useTexture(imgUrl); // Load texture
  const sphereRef = useRef();

  // Move sphere based on cursor
  useFrame(({ mouse }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = mouse.x * Math.PI; // Horizontal rotation
      sphereRef.current.rotation.x = -mouse.y * Math.PI; // Vertical rotation
    }
  });

  return (
    <>
      {/* Static Image Inside the Sphere */}
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[3, 3]} /> {/* Increased image size */}
        <meshBasicMaterial map={texture} transparent />
      </mesh>

      {/* Transparent Water Sphere */}
      <Sphere ref={sphereRef} args={[1.25, 64, 64]} scale={1.5}>
        <meshStandardMaterial
          color="#00aaff"
          transparent
          opacity={0.2}
          roughness={0.1}
          metalness={0.5}
        />
        {/* White Dots Effect */}
        <Sphere args={[1.26, 32, 32]}>
          <meshBasicMaterial
            color="white"
            wireframe
            transparent
            opacity={0.1}
          />
        </Sphere>
      </Sphere>
    </>
  );
};

// Canvas Component
const SphereCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always" // Ensures smooth movement
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <MovableSphere imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default SphereCanvas;

