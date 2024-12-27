import React from 'react';
import { FaDownload } from 'react-icons/fa';

function Preview({ previewRef, bgColor, fontFamily, logo, text, fontSize, onDownload }) {
  return (
    <div className="sticky top-6">
      <div 
        ref={previewRef}
        className="border rounded-lg p-6 shadow-lg"
        style={{ 
          backgroundColor: bgColor,
          fontFamily,
        }}
      >
        {logo && (
          <img 
            src={logo} 
            alt="Logo" 
            className="h-20 mb-4 mx-auto"
          />
        )}
        <div 
          className="text-center"
          style={{ fontSize: `${fontSize}px` }}
        >
          {text}
        </div>
      </div>

      <button
        onClick={onDownload}
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg 
                 flex items-center justify-center space-x-2 hover:bg-blue-700 
                 transition-colors"
      >
        <FaDownload />
        <span>Download Image</span>
      </button>
    </div>
  );
}

export default Preview;