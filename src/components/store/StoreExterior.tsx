"use client";

import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Plane } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export default function StoreExterior() {
  const logoRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (logoRef.current) {
      // Subtle glow animation for the logo
      const intensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      (logoRef.current.material as any).emissiveIntensity = intensity;
    }
  });

  return (
    <group>
      {/* Building Structure */}
      <group>
        {/* Main Building */}
        <Box args={[12, 8, 6]} position={[0, 4, 0]}>
          <meshStandardMaterial color="#e5e5e5" />
        </Box>

        {/* Roof */}
        <Box args={[12.5, 0.3, 6.5]} position={[0, 8.15, 0]}>
          <meshStandardMaterial color="#2a2a2a" />
        </Box>

        {/* Glass Facade - Front */}
        <Plane args={[10, 6]} position={[0, 3, 3.01]} rotation={[0, 0, 0]}>
          <meshPhysicalMaterial
            color="#87ceeb"
            transparent
            opacity={0.3}
            transmission={0.9}
            roughness={0.1}
            metalness={0.1}
            reflectivity={0.8}
          />
        </Plane>

        {/* Glass Facade - Left Side */}
        <Plane args={[6, 6]} position={[-6.01, 3, 0]} rotation={[0, Math.PI / 2, 0]}>
          <meshPhysicalMaterial
            color="#87ceeb"
            transparent
            opacity={0.3}
            transmission={0.9}
            roughness={0.1}
            metalness={0.1}
            reflectivity={0.8}
          />
        </Plane>

        {/* Glass Facade - Right Side */}
        <Plane args={[6, 6]} position={[6.01, 3, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <meshPhysicalMaterial
            color="#87ceeb"
            transparent
            opacity={0.3}
            transmission={0.9}
            roughness={0.1}
            metalness={0.1}
            reflectivity={0.8}
          />
        </Plane>

        {/* Window Frames */}
        {/* Front frame */}
        <group>
          <Box args={[10.2, 0.2, 0.1]} position={[0, 6, 3.05]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Box>
          <Box args={[10.2, 0.2, 0.1]} position={[0, 0, 3.05]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Box>
          <Box args={[0.2, 6, 0.1]} position={[-5, 3, 3.05]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Box>
          <Box args={[0.2, 6, 0.1]} position={[5, 3, 3.05]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Box>
        </group>

        {/* Entrance Door */}
        <Box args={[2.5, 4, 0.1]} position={[0, 2, 3.05]}>
          <meshPhysicalMaterial
            color="#333333"
            transparent
            opacity={0.8}
            transmission={0.2}
            roughness={0.3}
          />
        </Box>

        {/* Door Frame */}
        <Box args={[2.7, 4.2, 0.15]} position={[0, 2, 3.02]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>

        {/* Wood Accent Panels */}
        <Box args={[2, 8, 0.2]} position={[-4, 4, 3.1]}>
          <meshStandardMaterial color="#8b4513" />
        </Box>
        <Box args={[2, 8, 0.2]} position={[4, 4, 3.1]}>
          <meshStandardMaterial color="#8b4513" />
        </Box>
      </group>

      {/* DEUR Logo */}
      <group position={[0, 6.5, 3.2]}>
        <Text
          ref={logoRef}
          fontSize={1.2}
          font="/fonts/helvetica-bold.woff"
          color="#c0c0c0"
          anchorX="center"
          anchorY="middle"
        >
          DEUR
          <meshStandardMaterial
            color="#c0c0c0"
            emissive="#404040"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Text>
        
        {/* Logo Backing */}
        <Box args={[3, 1, 0.1]} position={[0, 0, -0.1]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
      </group>

      {/* Ground/Sidewalk */}
      <Plane args={[20, 20]} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#d3d3d3" />
      </Plane>

      {/* Mannequins visible through windows */}
      <group>
        {/* Front window mannequins */}
        <Box args={[0.4, 1.8, 0.2]} position={[-2, 1, 2.5]}>
          <meshStandardMaterial color="#f5f5f5" />
        </Box>
        <Box args={[0.4, 1.8, 0.2]} position={[2, 1, 2.5]}>
          <meshStandardMaterial color="#f5f5f5" />
        </Box>
        
        {/* Side window mannequins */}
        <Box args={[0.2, 1.8, 0.4]} position={[-5.5, 1, -1]} rotation={[0, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#f5f5f5" />
        </Box>
        <Box args={[0.2, 1.8, 0.4]} position={[5.5, 1, 1]} rotation={[0, -Math.PI / 2, 0]}>
          <meshStandardMaterial color="#f5f5f5" />
        </Box>
      </group>

      {/* Ambient lighting for exterior */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
}