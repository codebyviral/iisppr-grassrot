import React from 'react';

function CategoryButton({ isSelected, onClick, text }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all
        ${isSelected 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
    >
      {text}
    </button>
  );
}

export default CategoryButton;