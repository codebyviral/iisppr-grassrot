import React from 'react';
import { FaImage, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import PlatformIcon from './PlatformIcon';
import TagBadge from './TagBadge';

function TemplateCard({ template, onSelect }) {
  return (
    <div 
      className="bg-white border rounded-xl overflow-hidden cursor-pointer 
                 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={() => onSelect(template)}
    >
      {template.preview ? (
        <img 
          src={template.preview} 
          alt={template.name} 
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <FaImage className="text-4xl text-gray-400" />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{template.name}</h3>
          <PlatformIcon platform={template.platform} />
        </div>
        <p className="text-gray-600 text-sm mb-3">{template.description}</p>
        <div className="flex flex-wrap gap-2">
          <TagBadge type="platform" text={template.platform} />
          <TagBadge type="category" text={template.category} />
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;