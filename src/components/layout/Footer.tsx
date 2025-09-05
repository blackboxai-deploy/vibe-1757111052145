"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light tracking-widest mb-4">DEUR</h3>
            <div className="w-16 h-0.5 bg-white mb-6"></div>
            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
              Experience the future of fashion retail with our innovative 3D showroom. 
              Discover curated collections in an immersive digital environment that 
              redefines the shopping experience.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 border border-neutral-600 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 border border-neutral-600 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 border border-neutral-600 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
                <span className="text-xs">i</span>
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-6">COLLECTIONS</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Men's Formal
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Men's Casual
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Women's Dresses
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Women's Casual
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-6">STORE</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  3D Virtual Tour
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Store Locations
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2024 DEUR. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}