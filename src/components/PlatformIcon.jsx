import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function PlatformIcon({ platform }) {
  switch (platform.toLowerCase()) {
    case 'twitter': return <FaTwitter className="text-blue-400" />;
    case 'facebook': return <FaFacebook className="text-blue-600" />;
    case 'instagram': return <FaInstagram className="text-pink-600" />;
    default: return null;
  }
}

export default PlatformIcon;