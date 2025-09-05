"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ProductDisplayProps {
  product: {
    id: string;
    name: string;
    category: 'mens' | 'womens';
    price: string;
    description: string;
    colors: string[];
    sizes: string[];
  };
  onClose: () => void;
  visible: boolean;
}

export default function ProductDisplay({ product, onClose, visible }: ProductDisplayProps) {
  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Product Image Placeholder */}
        <div className="w-full h-48 bg-neutral-100 rounded-lg mb-6 flex items-center justify-center">
          <img 
            src={`https://placehold.co/300x200?text=${product.category === 'mens' ? 'Sophisticated+mens+fashion+piece+displayed+on+modern+mannequin+in+upscale+retail+environment' : 'Elegant+womens+fashion+garment+showcased+in+contemporary+boutique+setting+with+soft+lighting'}`}
            alt={`${product.name} - ${product.category === 'mens' ? 'Sophisticated mens fashion piece displayed on modern mannequin' : 'Elegant womens fashion garment showcased in contemporary boutique'}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-light text-neutral-900 tracking-wide">
              {product.name}
            </h3>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              ×
            </button>
          </div>
          
          <p className="text-2xl font-light text-neutral-900 mb-3">
            {product.price}
          </p>
          
          <p className="text-sm text-neutral-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Colors */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-neutral-900 mb-2 tracking-wide">
            COLORS
          </h4>
          <div className="flex space-x-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 border-neutral-200 cursor-pointer hover:border-neutral-400 transition-colors"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-neutral-900 mb-2 tracking-wide">
            SIZES
          </h4>
          <div className="flex space-x-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className="px-3 py-2 border border-neutral-300 text-sm font-medium text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-neutral-900 text-white py-3 px-6 text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors"
          >
            ADD TO CART
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 border border-neutral-300 text-sm font-medium text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            ♡
          </motion.button>
        </div>

        {/* Store Info */}
        <div className="mt-4 pt-4 border-t border-neutral-200 text-xs text-neutral-500">
          Available at DEUR stores and online. Free shipping on orders over $150.
        </div>
      </motion.div>
    </motion.div>
  );
}