'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function RollingText({ currentText }) {
  const [prevText, setPrevText] = useState(currentText);
  const [width, setWidth] = useState(null);
  const measureRef = useRef(null);

  const hasChanged = currentText !== prevText;

  // Measure text width for container
  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth); // Update width on currentText change
    }
  }, [currentText]);

  // Update previous text after animation
  useEffect(() => {
    if (hasChanged) {
      const timeout = setTimeout(() => {
        setPrevText(currentText);
      }, 400); // matches the transition duration (400ms)
      return () => clearTimeout(timeout);
    }
  }, [currentText]);

  return (
    <div
      className="relative overflow-hidden inline-block max-w-[999999999px] align-middle hover:text-gray-900"
      style={{
        width: width ? `${width}px` : 'auto',
        height: '1.6em',
        transition: 'width 400ms ease', // Sync the width transition with the motion div
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentText} // ← only change when text changes
          initial={hasChanged ? { y: '100%', opacity: 0 } : false}
          animate={{ y: '0%', opacity: 1 }}
          exit={hasChanged ? { y: '-100%', opacity: 0 } : false}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute top-0 left-0 whitespace-nowrap text-gray-900 will-change-transform"
        >
          {hasChanged ? currentText : prevText}
        </motion.div>
      </AnimatePresence>

      {/* Invisible span to measure text width */}
      <span
        ref={measureRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          pointerEvents: 'none',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          zIndex: -9999,
        }}
        aria-hidden="true"
      >
        {currentText}
      </span>
    </div>
  );
}
