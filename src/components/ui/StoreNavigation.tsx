"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ViewMode } from '../Store3D';

interface StoreNavigationProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function StoreNavigation({ currentView, onViewChange }: StoreNavigationProps) {
  const views: { mode: ViewMode; label: string; description: string }[] = [
    { 
      mode: 'exterior', 
      label: 'Exterior', 
      description: 'Modern facade with glass windows' 
    },
    { 
      mode: 'interior', 
      label: 'Interior', 
      description: 'Spacious store layout' 
    },
    { 
      mode: 'mens', 
      label: "Men's", 
      description: 'Contemporary menswear section' 
    },
    { 
      mode: 'womens', 
      label: "Women's", 
      description: 'Elegant women\'s collection' 
    },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg min-w-48">
      <h3 className="text-sm font-medium text-neutral-900 mb-3 tracking-wide">
        STORE VIEWS
      </h3>
      
      <div className="space-y-2">
        {views.map((view) => (
          <motion.button
            key={view.mode}
            onClick={() => onViewChange(view.mode)}
            className={`
              w-full text-left p-3 rounded-md transition-all duration-200
              ${currentView === view.mode 
                ? 'bg-neutral-900 text-white' 
                : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="font-medium text-sm tracking-wide">
              {view.label}
            </div>
            <div className={`
              text-xs mt-1 leading-relaxed
              ${currentView === view.mode 
                ? 'text-neutral-300' 
                : 'text-neutral-500'
              }
            `}>
              {view.description}
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-200">
        <div className="text-xs text-neutral-500 leading-relaxed">
          Use mouse to orbit, zoom and explore the 3D environment
        </div>
      </div>
    </div>
  );
}