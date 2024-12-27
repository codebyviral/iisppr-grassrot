import React from 'react';
import { motion } from 'framer-motion';

function WelcomeHeader() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 text-center">
          Welcome to NGO Social Media Templates
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 text-center max-w-2xl mx-auto"
      >
        Create professional and engaging social media content for your organization in minutes
      </motion.p>
    </>
  );
}

export default WelcomeHeader;