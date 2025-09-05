"use client";

import React, { useState, useRef } from 'react';
import { Box, Plane, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DigitalDisplayProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  content: 'mens-collection' | 'womens-collection';
}

export default function DigitalDisplay({ 
  position, 
  rotation = [0, 0, 0], 
  content 
}: DigitalDisplayProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenRef = useRef<THREE.Mesh>(null);

  // Slideshow animation
  useFrame((state) => {
    if (Math.floor(state.clock.elapsedTime) % 4 === 0 && Math.floor(state.clock.elapsedTime * 10) % 40 === 0) {
      setCurrentSlide(prev => (prev + 1) % 3);
    }
    
    // Screen glow effect
    if (screenRef.current) {
      const intensity = 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      (screenRef.current.material as any).emissiveIntensity = intensity;
    }
  });

  const getDisplayContent = () => {
    const slides = content === 'mens-collection' 
      ? ['NEW ARRIVALS', 'FORMAL WEAR', 'CASUAL STYLE']
      : ['SPRING COLLECTION', 'ELEGANT DRESSES', 'ACCESSORIES'];
    
    return slides[currentSlide];
  };

  const getDisplayColor = () => {
    return content === 'mens-collection' ? '#4a5568' : '#e53e3e';
  };

  return (
    <group position={position} rotation={rotation}>
      {/* Display Frame */}
      <Box args={[1.8, 1.2, 0.1]} position={[0, 0, -0.05]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>

      {/* Screen */}
      <Plane 
        ref={screenRef}
        args={[1.6, 1]} 
        position={[0, 0, 0.01]}
      >
        <meshStandardMaterial 
          color="#000000"
          emissive="#111111"
          emissiveIntensity={0.3}
        />
      </Plane>

      {/* Display Content */}
      <group position={[0, 0, 0.02]}>
        {/* Main Text */}
        <Text
          fontSize={0.15}
          color={getDisplayColor()}
          anchorX="center"
          anchorY="middle"
          position={[0, 0.2, 0]}
        >
          {getDisplayContent()}
        </Text>

        {/* DEUR Brand */}
        <Text
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, -0.3, 0]}
        >
          DEUR
        </Text>

        {/* Decorative Elements */}
        <Box args={[0.8, 0.02, 0.01]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color={getDisplayColor()}
            emissive={getDisplayColor()}
            emissiveIntensity={0.5}
          />
        </Box>

        {/* Progress Dots */}
        <group position={[0, -0.4, 0]}>
          {[0, 1, 2].map((index) => (
            <Box 
              key={index}
              args={[0.03, 0.03, 0.01]} 
              position={[(index - 1) * 0.1, 0, 0]}
            >
              <meshStandardMaterial 
                color={currentSlide === index ? getDisplayColor() : '#666666'}
                emissive={currentSlide === index ? getDisplayColor() : '#000000'}
                emissiveIntensity={currentSlide === index ? 0.5 : 0}
              />
            </Box>
          ))}
        </group>

        {/* Fashion Image Placeholder */}
        <Plane args={[0.6, 0.4]} position={[0, -0.1, 0]}>
          <meshStandardMaterial 
            color="#f5f5f5"
            transparent
            opacity={0.8}
          />
        </Plane>

        {/* Image Content Simulation */}
        <group position={[0, -0.1, 0.001]}>
          {content === 'mens-collection' ? (
            <>
              <Box args={[0.15, 0.25, 0.01]} position={[-0.1, 0, 0]}>
                <meshStandardMaterial color="#1a1a1a" />
              </Box>
              <Box args={[0.12, 0.2, 0.01]} position={[0.1, 0, 0]}>
                <meshStandardMaterial color="#4a5568" />
              </Box>
            </>
          ) : (
            <>
              <Box args={[0.18, 0.3, 0.01]} position={[-0.1, 0, 0]}>
                <meshStandardMaterial color="#e53e3e" />
              </Box>
              <Box args={[0.15, 0.25, 0.01]} position={[0.1, 0, 0]}>
                <meshStandardMaterial color="#3182ce" />
              </Box>
            </>
          )}
        </group>
      </group>

      {/* Ambient Light from Display */}
      <rectAreaLight
        width={1.6}
        height={1}
        color={getDisplayColor()}
        intensity={0.5}
        position={[0, 0, 0.1]}
      />
    </group>
  );
}