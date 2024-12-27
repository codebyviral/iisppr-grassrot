import React from 'react';
import { motion } from 'framer-motion';
import WelcomeHeader from './WelcomeHeader';
import WelcomeFeatures from './WelcomeFeatures';
import StartButton from './StartButton';

function WelcomePage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <WelcomeHeader />
        <StartButton onStart={onStart} />
        <WelcomeFeatures />
      </div>
    </div>
  );
}

export default WelcomePage;