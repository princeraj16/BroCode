import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showTagline = true, className = '' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <Link to="/" className={`flex items-center space-x-2 ${className} hover:scale-105 transition-transform duration-200`}>
      {/* Logo Image */}
      <div className={`${iconSizes[size]} relative flex-shrink-0`}>
        <img 
          src="/brocode-logo.png" 
          alt="BROCODE Logo" 
          className="w-full h-full object-contain opacity-80 rounded-full shadow-lg border-2 border-orange-500/30"
          onError={(e) => {
            // Fallback to the styled logo if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-xl border-2 border-orange-600 relative overflow-hidden">
                  <div class="w-2/3 h-2/3 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center relative">
                    <span class="text-orange-800 font-bold text-sm">BC</span>
                    <div class="absolute -top-1 -right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <div class="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-30 blur-md"></div>
                </div>
              `;
            }
          }}
        />
      </div>

      {/* Brand Text - Moved more to the left */}
      <div className="flex flex-col -ml-1">
        <h1 className={`font-bold ${sizeClasses[size]} leading-tight`}>
          <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
            BROCODE
          </span>
        </h1>
        {showTagline && (
          <p className="text-gray-400 text-xs leading-tight font-medium">
            Daaru Aur Chakna, Ek Click Mein Apna
          </p>
        )}
      </div>
    </Link>
  );
};

export default Logo; 