import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

function StartButton({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="flex justify-center mb-8 md:mb-12"
    >
      <button
        onClick={onStart}
        className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full 
                 text-lg md:text-xl font-semibold flex items-center justify-center 
                 space-x-2 hover:bg-blue-50 transform hover:scale-105 transition-all
                 shadow-lg"
      >
        <span>Get Started</span>
        <FaArrowRight className="ml-2" />
      </button>
    </motion.div>
  );
}

export default StartButton;