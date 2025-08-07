'use client';

import { useEffect, useState } from 'react';
import RollingText from './RollingText';
import { motion, AnimatePresence } from 'framer-motion';
import slides from '@/data/slides';
import KeywordDrawer from './KeywordDrawer';
import { uniqueFirstKeywords, uniqueSecondKeywords } from '@/utils/keywordUtils';



// const slides = [
//   {
//     image: '/images/slide-01.webp',
//     designFocus: 'Signage & Environmental Graphics',
//     targetIndustry: 'Arts & Culture',
//   },
//   {
//     image: '/images/slide-02.webp',
//     designFocus: 'Brand Identity',
//     targetIndustry: 'Arts & Culture',
//   },
//   {
//     image: '/images/slide-03.webp',
//     designFocus: 'Brand Identity',
//     targetIndustry: 'Museums & Events',
//   },
// ];

export default function ImageSlider() {

  const [index, setIndex] = useState(0);
  const [drawerData, setDrawerData] = useState(null);

  const current = slides[index]

  const openDrawer = (type) => {
    const drawerItems =
      type === 'first' ? uniqueFirstKeywords : uniqueSecondKeywords;

    setDrawerData({ type, drawerItems });
  };

  const closeDrawer = () => {
    setDrawerData(null);
  };

  // Auto change every 5 seconds
  useEffect(() => {
    if (!drawerData) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="relative w-full h-[680px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-0 left-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${current.image})` }}
          />
        </AnimatePresence>
      </div>
      {/* Drawer if open */}
      {drawerData && (
        <KeywordDrawer drawerItems={drawerData.drawerItems} onClose={closeDrawer} />
      )}
      {/* Animated Text */}
      <div
        className={`bg-white/80 backdrop-blur-md px-6 py-2 rounded text-center z-20 transition-all duration-500 ${drawerData ? 'mt-70 z-[99999]' : ''}`}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
        }}
      >
        <div className="text-sm md:text-lg font-medium flex flex-wrap justify-center items-center gap-2">
          <span className="text-gray-900">We design</span>

          <button onClick={() => openDrawer('first')}>
            <RollingText
              currentText={drawerData ? 'Everything' : current.keywords.first.label}
            />
          </button>
          <span className={`text-gray-900 ${drawerData && 'rotate-180 transition duration-300'}`}>⇩</span>
          <span className="text-gray-900">for</span>

          <button onClick={() => openDrawer('second')}>
            <RollingText
              currentText={drawerData ? 'Everything' : current.keywords.second.label}
            />
          </button>
          <span className={`text-gray-900 ${drawerData && 'rotate-180 transition duration-300'}`}>⇩</span>
        </div>
      </div>

      {/*Dynamic Text*/}
      <div className='absolute bottom-8 left-4 text-white text-shadow-2xl max-w-250'>
        {
          <>
            <h3 className='text-lg font-medium'>{current.btitle}</h3>
            <p className='text-md font-medium'>{current.btext}</p>
          </>
        }
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 right-5 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/50 hover:bg-white'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
