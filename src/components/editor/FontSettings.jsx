import React from 'react';

function FontSettings({ fontFamily, fontSize, onFontFamilyChange, onFontSizeChange, fonts }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Font Settings
      </label>
      <div className="grid grid-cols-2 gap-4">
        <select
          value={fontFamily}
          onChange={(e) => onFontFamilyChange(e.target.value)}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        >
          {fonts.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => onFontSizeChange(Number(e.target.value))}
          min="12"
          max="72"
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default FontSettings;