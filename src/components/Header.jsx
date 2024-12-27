import React from 'react';
import Logo from './header/Logo';
import HeaderContent from './header/HeaderContent';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-3">
          <Logo />
          <HeaderContent />
        </div>
      </div>
    </header>
  );
}

export default Header;