"use client";

import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import StoreExterior from './store/StoreExterior';
import StoreInterior from './store/StoreInterior';
import Lighting from './store/Lighting';
import StoreNavigation from './ui/StoreNavigation';

export type ViewMode = 'exterior' | 'interior' | 'mens' | 'womens';

export default function Store3D() {
  const [viewMode, setViewMode] = useState<ViewMode>('exterior');
  const controlsRef = useRef<any>(null);

  const getCameraPosition = (): [number, number, number] => {
    switch (viewMode) {
      case 'exterior':
        return [8, 4, 12];
      case 'interior':
        return [0, 3, 8];
      case 'mens':
        return [-3, 2, 5];
      case 'womens':
        return [3, 2, 5];
      default:
        return [8, 4, 12];
    }
  };

  const getCameraTarget = (): [number, number, number] => {
    switch (viewMode) {
      case 'exterior':
        return [0, 2, 0];
      case 'interior':
        return [0, 0, 0];
      case 'mens':
        return [-3, 0, 0];
      case 'womens':
        return [3, 0, 0];
      default:
        return [0, 2, 0];
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* 3D Canvas */}
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true
        }}
        className="w-full h-full"
      >
        {/* Camera */}
        <PerspectiveCamera
          makeDefault
          position={getCameraPosition()}
          fov={50}
          near={0.1}
          far={100}
        />

        {/* Controls */}
        <OrbitControls
          ref={controlsRef}
          target={getCameraTarget()}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={20}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          dampingFactor={0.05}
          enableDamping
        />

        {/* Lighting */}
        <Lighting />

        {/* Store Components */}
        {(viewMode === 'exterior' || viewMode === 'interior') && (
          <StoreExterior />
        )}
        
        {(viewMode === 'interior' || viewMode === 'mens' || viewMode === 'womens') && (
          <StoreInterior viewMode={viewMode} />
        )}

        {/* Environment */}
        <color attach="background" args={['#f5f5f5']} />
        <fog attach="fog" args={['#f5f5f5', 10, 50]} />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute top-4 right-4 z-10">
        <StoreNavigation 
          currentView={viewMode}
          onViewChange={setViewMode}
        />
      </div>

      {/* Store Info Overlay */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-sm">
        <h3 className="text-lg font-medium text-neutral-900 mb-2">
          {viewMode === 'exterior' && 'Store Exterior'}
          {viewMode === 'interior' && 'Store Interior'}
          {viewMode === 'mens' && "Men's Section"}
          {viewMode === 'womens' && "Women's Section"}
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed">
          {viewMode === 'exterior' && 'Modern minimalist facade with large glass windows showcasing our latest collections.'}
          {viewMode === 'interior' && 'Spacious interior with polished concrete floors and contemporary design elements.'}
          {viewMode === 'mens' && 'Curated menswear collection featuring contemporary styles and classic pieces.'}
          {viewMode === 'womens' && 'Elegant women\'s fashion with seasonal collections and timeless designs.'}
        </p>
      </div>
    </div>
  );
}