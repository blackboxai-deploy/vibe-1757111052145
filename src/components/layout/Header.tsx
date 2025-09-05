"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <h1 className="text-2xl font-light text-neutral-900 tracking-widest">
              DEUR
            </h1>
            <div className="w-12 h-0.5 bg-neutral-900 mt-1"></div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#collections"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors tracking-wide"
              whileHover={{ scale: 1.05 }}
            >
              COLLECTIONS
            </motion.a>
            <motion.a
              href="#about"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors tracking-wide"
              whileHover={{ scale: 1.05 }}
            >
              ABOUT
            </motion.a>
            <motion.a
              href="#store"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors tracking-wide"
              whileHover={{ scale: 1.05 }}
            >
              STORE
            </motion.a>
            <motion.a
              href="#contact"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors tracking-wide"
              whileHover={{ scale: 1.05 }}
            >
              CONTACT
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 text-neutral-700 hover:text-neutral-900">
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}