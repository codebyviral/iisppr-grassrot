import React from 'react';
import CategoryButton from './filters/CategoryButton';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <CategoryButton 
        isSelected={!selectedCategory}
        onClick={() => onSelectCategory(null)}
        text="All"
      />
      {categories.map((category) => (
        <CategoryButton
          key={category}
          isSelected={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
          text={category}
        />
      ))}
    </div>
  );
}

export default CategoryFilter;