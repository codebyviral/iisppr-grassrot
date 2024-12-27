import React from 'react';
import SearchIcon from './search/SearchIcon';
import SearchInput from './search/SearchInput';

function SearchBar({ onSearch }) {
  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <SearchInput onSearch={onSearch} />
      <SearchIcon />
    </div>
  );
}

export default SearchBar;