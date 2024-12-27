import React from 'react';

function TagBadge({ type, text }) {
  const styles = {
    platform: 'bg-blue-100 text-blue-800',
    category: 'bg-purple-100 text-purple-800'
  };

  return (
    <span className={`text-xs ${styles[type]} px-2 py-1 rounded-full`}>
      {text}
    </span>
  );
}

export default TagBadge;