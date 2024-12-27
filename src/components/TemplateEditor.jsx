import React, { useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import { FaTimes } from 'react-icons/fa';
import { downloadImage } from '../utils/imageUtils';
import FontSettings from './editor/FontSettings';
import LogoUpload from './editor/LogoUpload';
import Preview from './editor/Preview';

function TemplateEditor({ template, onClose }) {
  const [text, setText] = useState(template.defaultText);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [logo, setLogo] = useState(null);
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Inter');
  const previewRef = useRef(null);

  const fonts = ['Inter', 'Roboto', 'Playfair Display', 'Montserrat', 'Open Sans'];

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogo(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (previewRef.current) {
      downloadImage(previewRef.current);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Customize Your Template
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="text-gray-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full border rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message here..."
              />
            </div>

            <FontSettings 
              fontFamily={fontFamily}
              fontSize={fontSize}
              onFontFamilyChange={setFontFamily}
              onFontSizeChange={setFontSize}
              fonts={fonts}
            />

            <LogoUpload onLogoChange={handleLogoChange} />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background Color
              </label>
              <ChromePicker
                color={bgColor}
                onChange={(color) => setBgColor(color.hex)}
                className="w-full"
              />
            </div>
          </div>

          <Preview 
            previewRef={previewRef}
            bgColor={bgColor}
            fontFamily={fontFamily}
            logo={logo}
            text={text}
            fontSize={fontSize}
            onDownload={handleDownload}
          />
        </div>
      </div>
    </div>
  );
}

export default TemplateEditor;