"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BrandingElementsProps {
  variant?: 'logo' | 'wordmark' | 'symbol';
  size?: 'small' | 'medium' | 'large';
  color?: 'dark' | 'light' | 'metallic';
  animated?: boolean;
  className?: string;
}

export default function BrandingElements({ 
  variant = 'wordmark', 
  size = 'medium', 
  color = 'dark',
  animated = false,
  className = '' 
}: BrandingElementsProps) {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  const colorClasses = {
    dark: 'text-neutral-900',
    light: 'text-white',
    metallic: 'text-neutral-400'
  };

  const LogoSymbol = () => (
    <div className={`${size === 'small' ? 'w-6 h-6' : size === 'medium' ? 'w-8 h-8' : 'w-12 h-12'} flex items-center justify-center border-2 ${color === 'light' ? 'border-white' : color === 'metallic' ? 'border-neutral-400' : 'border-neutral-900'}`}>
      <div className={`${size === 'small' ? 'w-3 h-3' : size === 'medium' ? 'w-4 h-4' : 'w-6 h-6'} ${color === 'light' ? 'bg-white' : color === 'metallic' ? 'bg-neutral-400' : 'bg-neutral-900'}`} />
    </div>
  );

  const Wordmark = () => (
    <div className="flex items-center space-x-3">
      <h1 className={`${sizeClasses[size]} ${colorClasses[color]} font-light tracking-widest`}>
        DEUR
      </h1>
      <div className={`${size === 'small' ? 'w-8 h-0.5' : size === 'medium' ? 'w-12 h-0.5' : 'w-16 h-0.5'} ${color === 'light' ? 'bg-white' : color === 'metallic' ? 'bg-neutral-400' : 'bg-neutral-900'}`} />
    </div>
  );

  const LogoComplete = () => (
    <div className="flex items-center space-x-4">
      <LogoSymbol />
      <Wordmark />
    </div>
  );

  const renderBranding = () => {
    switch (variant) {
      case 'symbol':
        return <LogoSymbol />;
      case 'logo':
        return <LogoComplete />;
      case 'wordmark':
      default:
        return <Wordmark />;
    }
  };

  if (animated) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        {renderBranding()}
      </motion.div>
    );
  }

  return (
    <div className={className}>
      {renderBranding()}
    </div>
  );
}