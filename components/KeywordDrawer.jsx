'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function KeywordDrawer({ drawerItems, onClose }) {
  const [hoveredImages, setHoveredImages] = useState([]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const slideshowInterval = useRef(null);

  // Start autoplay on hover
  const startSlideshow = (images) => {
    setHoveredImages(images);
    setCurrentImgIndex(0);

    // Clear previous interval
    if (slideshowInterval.current) clearInterval(slideshowInterval.current);

    // Start new autoplay
    slideshowInterval.current = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 800); // autoplay every 800ms
  };

  // Stop slideshow on hover end
  const stopSlideshow = () => {
    setHoveredImages([]);
    setCurrentImgIndex(0);
    if (slideshowInterval.current) clearInterval(slideshowInterval.current);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (slideshowInterval.current) clearInterval(slideshowInterval.current);
    };
  }, []);

  return (
    <div className='grid grid-cols-1'>
      <AnimatePresence>
        <motion.div
          key="drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            key="drawer-content"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 bg-white rounded-lg shadow-xl p-8 w-full max-w-5xl mx-auto"
          >

            <div className="grid grid-cols-1 gap-6">
              {/* Image Slideshow */}
              <div className="relative h-[400px] flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  {hoveredImages.length > 0 && (
                    <motion.img
                      key={hoveredImages[currentImgIndex]}
                      src={hoveredImages[currentImgIndex]}
                      alt=""
                      className="absolute w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              {/* Label List */}
              <div className="flex">
                {drawerItems.map((item, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => startSlideshow(item.images)}
                    onMouseLeave={stopSlideshow}
                    className="py-1 px-2 w-fit rounded-md text-gray-400 bg-gray-300 m-5 cursor-pointer hover:text-gray-500 font-medium text-md"
                  >
                    {item.label}
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
