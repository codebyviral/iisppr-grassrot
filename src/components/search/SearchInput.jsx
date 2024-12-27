import React from 'react';

function SearchInput({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search templates..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full px-4 py-3 pl-12 rounded-full border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}

export default SearchInput;