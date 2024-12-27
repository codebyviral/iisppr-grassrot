import React from 'react';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 
                  transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
      <Icon className="text-3xl md:text-4xl text-white mb-4 mx-auto" />
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center">
        {title}
      </h3>
      <p className="text-blue-100 text-sm md:text-base text-center">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;