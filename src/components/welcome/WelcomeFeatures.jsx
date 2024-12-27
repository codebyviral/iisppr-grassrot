import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaBolt, FaTools } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

function WelcomeFeatures() {
  const features = [
    {
      icon: FaPalette,
      title: "Easy to Use",
      description: "Simple and intuitive interface for quick content creation"
    },
    {
      icon: FaBolt,
      title: "Professional Templates",
      description: "Beautifully designed templates for various social media platforms"
    },
    {
      icon: FaTools,
      title: "Customizable",
      description: "Fully customize colors, fonts, and content to match your brand"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-8"
    >
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </motion.div>
  );
}

export default WelcomeFeatures;