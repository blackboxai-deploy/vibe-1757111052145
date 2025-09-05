"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-neutral-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* DEUR Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl font-light text-neutral-900 tracking-widest mb-4">
            DEUR
          </h1>
          <div className="w-24 h-0.5 bg-neutral-900 mx-auto"></div>
        </motion.div>

        {/* Loading Animation */}
        <div className="mb-6">
          <motion.div
            className="flex space-x-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-neutral-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-sm text-neutral-600 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          LOADING 3D STORE EXPERIENCE
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-6 w-64 mx-auto">
          <div className="w-full h-0.5 bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-neutral-900 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Additional Loading Info */}
        <motion.div
          className="mt-8 text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Preparing immersive 3D environment with realistic lighting,
          materials and interactive elements for optimal viewing experience.
        </motion.div>
      </div>
    </div>
  );
}