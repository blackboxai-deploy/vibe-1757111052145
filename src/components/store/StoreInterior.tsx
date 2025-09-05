"use client";

import React from 'react';
import { Box, Plane, Cylinder } from '@react-three/drei';
import { ViewMode } from '../Store3D';
import Mannequin from './Mannequin';
import DigitalDisplay from './DigitalDisplay';

interface StoreInteriorProps {
  viewMode: ViewMode;
}

export default function StoreInterior({ viewMode }: StoreInteriorProps) {
  return (
    <group>
      {/* Interior Floor - Polished Concrete */}
      <Plane args={[11, 5]} position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#909090" 
          roughness={0.3}
          metalness={0.1}
        />
      </Plane>

      {/* Interior Walls */}
      {/* Back Wall */}
      <Plane args={[11, 7]} position={[0, 3.5, -2.5]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#f0f0f0" />
      </Plane>

      {/* Left Wall */}
      <Plane args={[5, 7]} position={[-5.5, 3.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#f0f0f0" />
      </Plane>

      {/* Right Wall */}
      <Plane args={[5, 7]} position={[5.5, 3.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <meshStandardMaterial color="#f0f0f0" />
      </Plane>

      {/* Ceiling */}
      <Plane args={[11, 5]} position={[0, 7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Plane>

      {/* Men's Section (Left Side) */}
      <group position={[-2.5, 0, 0]}>
        {/* Section Divider */}
        <Box args={[0.1, 7, 0.1]} position={[2, 3.5, 0]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>

        {/* Men's Clothing Racks */}
        <group>
          {/* Rack 1 */}
          <Cylinder args={[0.05, 0.05, 2]} position={[-1.5, 1.5, -1]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Cylinder>
          <Cylinder args={[0.1, 0.1, 2]} position={[-1.5, 2, -1]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Cylinder>

          {/* Rack 2 */}
          <Cylinder args={[0.05, 0.05, 2]} position={[-1.5, 1.5, 1]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Cylinder>
          <Cylinder args={[0.1, 0.1, 2]} position={[-1.5, 2, 1]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Cylinder>
        </group>

        {/* Men's Mannequins */}
        <Mannequin 
          position={[-1, 0, -1.8]} 
          clothing="mens-formal"
          scale={1}
        />
        <Mannequin 
          position={[-3, 0, 0]} 
          clothing="mens-casual"
          scale={1}
        />

        {/* Men's Shelving - Wood Accents */}
        <Box args={[1.5, 0.3, 3]} position={[-4, 1, 0]}>
          <meshStandardMaterial color="#8b4513" />
        </Box>
        <Box args={[1.5, 0.3, 3]} position={[-4, 1.8, 0]}>
          <meshStandardMaterial color="#8b4513" />
        </Box>

        {/* Men's Seating Area */}
        <group position={[-3.5, 0, -1.5]}>
          <Box args={[0.8, 0.4, 0.8]} position={[0, 0.2, 0]}>
            <meshStandardMaterial color="#2a2a2a" />
          </Box>
          <Box args={[0.8, 0.6, 0.1]} position={[0, 0.5, -0.35]}>
            <meshStandardMaterial color="#2a2a2a" />
          </Box>
        </group>
      </group>

      {/* Women's Section (Right Side) */}
      <group position={[2.5, 0, 0]}>
        {/* Women's Clothing Racks - Curved Design */}
        <group>
          {/* Curved Rack 1 */}
          <Cylinder args={[0.05, 0.05, 1.5]} position={[1.5, 1.5, -1]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Cylinder>
          <Cylinder args={[0.08, 0.08, 1.5]} position={[1.5, 2, -1]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Cylinder>

          {/* Curved Rack 2 */}
          <Cylinder args={[0.05, 0.05, 1.5]} position={[1.5, 1.5, 1]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Cylinder>
          <Cylinder args={[0.08, 0.08, 1.5]} position={[1.5, 2, 1]}>
            <meshStandardMaterial color="#1a1a1a" />
          </Cylinder>
        </group>

        {/* Women's Mannequins */}
        <Mannequin 
          position={[1, 0, -1.8]} 
          clothing="womens-dress"
          scale={0.95}
        />
        <Mannequin 
          position={[3, 0, 0]} 
          clothing="womens-casual"
          scale={0.95}
        />

        {/* Women's Elegant Shelving */}
        <Box args={[1.2, 0.2, 2.5]} position={[4, 1, 0]} rotation={[0, 0, -0.1]}>
          <meshStandardMaterial color="#8b4513" />
        </Box>
        <Box args={[1.2, 0.2, 2.5]} position={[4, 1.8, 0]} rotation={[0, 0, -0.1]}>
          <meshStandardMaterial color="#8b4513" />
        </Box>

        {/* Women's Cozy Seating Nook */}
        <group position={[3.5, 0, -1.5]}>
          <Cylinder args={[0.6, 0.6, 0.4]} position={[0, 0.2, 0]}>
            <meshStandardMaterial color="#d4af37" />
          </Cylinder>
          <Cylinder args={[0.6, 0.6, 0.3]} position={[0, 0.55, 0]}>
            <meshStandardMaterial color="#daa520" />
          </Cylinder>
          {/* Small coffee table */}
          <Cylinder args={[0.3, 0.3, 0.05]} position={[0, 0.4, -0.8]}>
            <meshStandardMaterial color="#8b4513" />
          </Cylinder>
          <Cylinder args={[0.05, 0.05, 0.4]} position={[0, 0.2, -0.8]}>
            <meshStandardMaterial color="#654321" />
          </Cylinder>
        </group>
      </group>

      {/* Checkout Counter */}
      <group position={[0, 0, 2]}>
        <Box args={[3, 1.2, 0.8]} position={[0, 0.6, 0]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        <Box args={[2.8, 0.1, 0.6]} position={[0, 1.25, 0]}>
          <meshStandardMaterial color="#8b4513" />
        </Box>
      </group>

      {/* Digital Displays */}
      <DigitalDisplay 
        position={[-4.5, 2, -2.4]} 
        rotation={[0, 0, 0]}
        content="mens-collection"
      />
      <DigitalDisplay 
        position={[4.5, 2, -2.4]} 
        rotation={[0, 0, 0]}
        content="womens-collection"
      />

      {/* Recessed Ceiling Lights */}
      <group>
        {/* Men's Section Lights */}
        <Cylinder args={[0.2, 0.2, 0.1]} position={[-2, 6.9, -1]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Cylinder>
        <Cylinder args={[0.2, 0.2, 0.1]} position={[-2, 6.9, 1]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Cylinder>

        {/* Women's Section Lights */}
        <Cylinder args={[0.2, 0.2, 0.1]} position={[2, 6.9, -1]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Cylinder>
        <Cylinder args={[0.2, 0.2, 0.1]} position={[2, 6.9, 1]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Cylinder>

        {/* Central Lights */}
        <Cylinder args={[0.2, 0.2, 0.1]} position={[0, 6.9, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Cylinder>
      </group>
    </group>
  );
}