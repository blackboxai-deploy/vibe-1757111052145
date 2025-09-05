"use client";

import React, { useState } from 'react';
import { Box, Cylinder } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface MannequinProps {
  position: [number, number, number];
  clothing: 'mens-formal' | 'mens-casual' | 'womens-dress' | 'womens-casual';
  scale?: number;
}

export default function Mannequin({ position, clothing, scale = 1 }: MannequinProps) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && hovered) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  const getClothingColor = () => {
    switch (clothing) {
      case 'mens-formal':
        return '#1a1a1a'; // Black suit
      case 'mens-casual':
        return '#4a5568'; // Gray casual
      case 'womens-dress':
        return '#e53e3e'; // Red dress
      case 'womens-casual':
        return '#3182ce'; // Blue casual
      default:
        return '#f7fafc';
    }
  };

  const getClothingStyle = () => {
    switch (clothing) {
      case 'mens-formal':
        return { top: [0.35, 0.8, 0.2], bottom: [0.3, 0.7, 0.15] };
      case 'mens-casual':
        return { top: [0.4, 0.6, 0.2], bottom: [0.32, 0.8, 0.16] };
      case 'womens-dress':
        return { top: [0.45, 1.2, 0.25], bottom: null };
      case 'womens-casual':
        return { top: [0.4, 0.5, 0.22], bottom: [0.35, 0.6, 0.18] };
      default:
        return { top: [0.4, 0.6, 0.2], bottom: [0.3, 0.7, 0.15] };
    }
  };

  const style = getClothingStyle();
  const clothingColor = getClothingColor();

  return (
    <group 
      ref={groupRef}
      position={position} 
      scale={scale}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Base */}
      <Cylinder args={[0.2, 0.2, 0.05]} position={[0, 0.025, 0]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Cylinder>

      {/* Support Pole */}
      <Cylinder args={[0.02, 0.02, 1.8]} position={[0, 0.9, 0]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Cylinder>

      {/* Mannequin Body */}
      <group position={[0, 0.5, 0]}>
        {/* Head */}
        <Box args={[0.2, 0.25, 0.15]} position={[0, 1.4, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial 
            color={hovered ? "#f0f0f0" : "#e0e0e0"} 
            transparent
            opacity={0.9}
          />
        </Box>

        {/* Neck */}
        <Cylinder args={[0.05, 0.05, 0.1]} position={[0, 1.2, 0]}>
          <meshStandardMaterial color="#e0e0e0" />
        </Cylinder>

        {/* Torso */}
        <Box args={[0.3, 0.8, 0.15]} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#e0e0e0" />
        </Box>

        {/* Arms */}
        <Cylinder args={[0.05, 0.05, 0.6]} position={[-0.25, 0.7, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#e0e0e0" />
        </Cylinder>
        <Cylinder args={[0.05, 0.05, 0.6]} position={[0.25, 0.7, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <meshStandardMaterial color="#e0e0e0" />
        </Cylinder>

        {/* Hips */}
        <Box args={[0.25, 0.3, 0.12]} position={[0, 0.15, 0]}>
          <meshStandardMaterial color="#e0e0e0" />
        </Box>

        {/* Legs */}
        <Cylinder args={[0.06, 0.06, 0.8]} position={[-0.08, -0.4, 0]}>
          <meshStandardMaterial color="#e0e0e0" />
        </Cylinder>
        <Cylinder args={[0.06, 0.06, 0.8]} position={[0.08, -0.4, 0]}>
          <meshStandardMaterial color="#e0e0e0" />
        </Cylinder>
      </group>

      {/* Clothing */}
      <group position={[0, 0.5, 0]}>
        {/* Top/Dress */}
        <Box 
          args={style.top as [number, number, number]} 
          position={[0, clothing === 'womens-dress' ? 0.5 : 0.7, 0]}
        >
          <meshStandardMaterial 
            color={clothingColor}
            transparent
            opacity={0.9}
          />
        </Box>

        {/* Bottom (if not dress) */}
        {style.bottom && (
          <Box 
            args={style.bottom as [number, number, number]} 
            position={[0, -0.1, 0]}
          >
            <meshStandardMaterial 
              color={clothing.includes('formal') ? '#2a2a2a' : clothingColor}
              transparent
              opacity={0.9}
            />
          </Box>
        )}

        {/* Accessories */}
        {clothing === 'mens-formal' && (
          <Box args={[0.05, 0.4, 0.01]} position={[0, 0.7, 0.16]}>
            <meshStandardMaterial color="#8b0000" />
          </Box>
        )}

        {clothing === 'womens-dress' && (
          <Cylinder args={[0.15, 0.15, 0.02]} position={[0, 0.9, 0]}>
            <meshStandardMaterial color="#ffd700" />
          </Cylinder>
        )}
      </group>

      {/* Hover Effect - Spotlight */}
      {hovered && (
        <spotLight
          position={[0, 3, 1]}
          angle={0.3}
          penumbra={0.5}
          intensity={2}
          color="#ffffff"
          target-position={position}
        />
      )}

      {/* Product Info Panel (appears on hover) */}
      {hovered && (
        <group position={[0, 2.5, 0]}>
          <Box args={[1.5, 0.8, 0.05]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.9}
            />
          </Box>
          <Box args={[1.6, 0.9, 0.02]} position={[0, 0, -0.01]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Box>
        </group>
      )}
    </group>
  );
}