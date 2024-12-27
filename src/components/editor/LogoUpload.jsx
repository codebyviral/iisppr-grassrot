import React from 'react';
import { FaImage } from 'react-icons/fa';

function LogoUpload({ onLogoChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Logo
      </label>
      <div className="border-2 border-dashed rounded-lg p-4 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={onLogoChange}
          className="hidden"
          id="logo-upload"
        />
        <label 
          htmlFor="logo-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <FaImage className="text-3xl text-gray-400 mb-2" />
          <span className="text-sm text-gray-500">
            Click to upload your logo
          </span>
        </label>
      </div>
    </div>
  );
}

export default LogoUpload;