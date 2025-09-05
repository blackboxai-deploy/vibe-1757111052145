"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Lighting() {
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const logoLightRef = useRef<THREE.SpotLight>(null);

  useFrame((state) => {
    // Subtle ambient light variation
    if (ambientRef.current) {
      ambientRef.current.intensity = 0.4 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    // Logo backlighting animation
    if (logoLightRef.current) {
      logoLightRef.current.intensity = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <group>
      {/* Ambient Light */}
      <ambientLight ref={ambientRef} intensity={0.4} color="#ffffff" />

      {/* Main Directional Light (Sun) */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Interior Ceiling Spotlights */}
      <group>
        {/* Men's Section Spotlights */}
        <spotLight
          position={[-2, 6.5, -1]}
          angle={0.4}
          penumbra={0.5}
          intensity={2}
          color="#ffffff"
          castShadow
          target-position={[-2, 0, -1]}
        />
        <spotLight
          position={[-2, 6.5, 1]}
          angle={0.4}
          penumbra={0.5}
          intensity={2}
          color="#ffffff"
          castShadow
          target-position={[-2, 0, 1]}
        />

        {/* Women's Section Spotlights */}
        <spotLight
          position={[2, 6.5, -1]}
          angle={0.4}
          penumbra={0.5}
          intensity={2}
          color="#ffffff"
          castShadow
          target-position={[2, 0, -1]}
        />
        <spotLight
          position={[2, 6.5, 1]}
          angle={0.4}
          penumbra={0.5}
          intensity={2}
          color="#ffffff"
          castShadow
          target-position={[2, 0, 1]}
        />

        {/* Central Spotlight */}
        <spotLight
          position={[0, 6.5, 0]}
          angle={0.5}
          penumbra={0.6}
          intensity={1.5}
          color="#ffffff"
          castShadow
          target-position={[0, 0, 2]}
        />
      </group>

      {/* DEUR Logo Backlighting */}
      <spotLight
        ref={logoLightRef}
        position={[0, 8, 4]}
        angle={0.3}
        penumbra={0.8}
        intensity={1.5}
        color="#e6e6e6"
        target-position={[0, 6.5, 3.2]}
      />

      {/* Window Natural Light Simulation */}
      <group>
        {/* Front Window Light */}
        <rectAreaLight
          width={10}
          height={6}
          color="#b3d9ff"
          intensity={0.8}
          position={[0, 3, 3.5]}
          rotation={[0, Math.PI, 0]}
        />

        {/* Side Window Lights */}
        <rectAreaLight
          width={6}
          height={6}
          color="#b3d9ff"
          intensity={0.6}
          position={[-6.5, 3, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <rectAreaLight
          width={6}
          height={6}
          color="#b3d9ff"
          intensity={0.6}
          position={[6.5, 3, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>

      {/* Accent Lighting for Displays */}
      <group>
        {/* Men's Display Accent */}
        <pointLight
          position={[-4.5, 2.5, -2]}
          intensity={1}
          color="#4a5568"
          distance={3}
          decay={2}
        />

        {/* Women's Display Accent */}
        <pointLight
          position={[4.5, 2.5, -2]}
          intensity={1}
          color="#e53e3e"
          distance={3}
          decay={2}
        />
      </group>

      {/* Under-shelf Accent Lighting */}
      <group>
        {/* Men's Shelving */}
        <rectAreaLight
          width={1.5}
          height={0.1}
          color="#ffffff"
          intensity={0.5}
          position={[-4, 0.9, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <rectAreaLight
          width={1.5}
          height={0.1}
          color="#ffffff"
          intensity={0.5}
          position={[-4, 1.7, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />

        {/* Women's Shelving */}
        <rectAreaLight
          width={1.2}
          height={0.1}
          color="#ffffff"
          intensity={0.5}
          position={[4, 0.9, 0]}
          rotation={[Math.PI / 2, 0, 0.1]}
        />
        <rectAreaLight
          width={1.2}
          height={0.1}
          color="#ffffff"
          intensity={0.5}
          position={[4, 1.7, 0]}
          rotation={[Math.PI / 2, 0, 0.1]}
        />
      </group>

      {/* Checkout Counter Light */}
      <spotLight
        position={[0, 4, 3]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.5}
        color="#ffffff"
        target-position={[0, 1.2, 2]}
      />
    </group>
  );
}