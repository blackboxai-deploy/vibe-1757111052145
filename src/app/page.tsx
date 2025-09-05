"use client";

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Store3D from '@/components/Store3D';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/layout/LoadingScreen';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <motion.section 
          className="relative h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200" />
          
          {/* 3D Store Container */}
          <div className="relative w-full h-full">
            <Suspense fallback={<LoadingScreen />}>
              <Store3D />
            </Suspense>
          </div>
          
          {/* Overlay Content */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-md"
            >
              <h1 className="text-6xl font-light text-neutral-900 mb-4 tracking-tight">
                DEUR
              </h1>
              <p className="text-xl text-neutral-700 font-light mb-8 leading-relaxed">
                Experience modern fashion in our immersive 3D showroom. 
                Discover curated collections for men and women in a sophisticated retail environment.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neutral-900 text-white font-medium tracking-wide hover:bg-neutral-800 transition-colors duration-300"
              >
                EXPLORE STORE
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Store Features Section */}
        <motion.section 
          className="py-20 px-8 max-w-7xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900 mb-4">Modern Architecture</h3>
              <p className="text-neutral-600 leading-relaxed">
                Minimalist design with large glass windows and clean lines, 
                creating an inviting and sophisticated shopping environment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900 mb-4">Curated Collections</h3>
              <p className="text-neutral-600 leading-relaxed">
                Carefully selected men's and women's fashion pieces displayed 
                in dedicated sections with contemporary styling and presentation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 mx-auto mb-6 flex items-center justify-center">
                <div className="w-6 h-6 border border-white bg-transparent" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900 mb-4">Interactive Experience</h3>
              <p className="text-neutral-600 leading-relaxed">
                Explore our 3D showroom with intuitive navigation, 
                detailed product views, and immersive digital displays.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="py-20 bg-neutral-900 text-white text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-4xl font-light mb-6 tracking-tight">
              Visit Our Store
            </h2>
            <p className="text-xl text-neutral-300 mb-8 font-light">
              Discover the future of retail with our immersive 3D shopping experience.
              Browse collections, interact with displays, and find your perfect style.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-neutral-900 transition-all duration-300"
            >
              START SHOPPING
            </motion.button>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}