// components/layouts/Header.tsx (Simplified for clarity)

import React from 'react';
import Link from 'next/link';
import Button from '../common/Button'; // Assuming correct path to the Button component

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/">
          <span className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight cursor-pointer">
            Splash App
          </span>
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          
          {/* Sign In Button */}
          <Button 
            // 💡 Pass text as children
            size="medium"
            shape="rounded-md"
            // Add a class for specific color, if not using a variant prop:
            className="bg-gray-500 hover:bg-gray-600"
            onClick={() => console.log('Sign In clicked')}
          >
            Sign In
          </Button>

          {/* Sign Up Button */}
          <Button 
            // 💡 Pass text as children
            size="medium"
            shape="rounded-md"
            className="bg-indigo-600 hover:bg-indigo-700" // Example primary color
            onClick={() => console.log('Sign Up clicked')}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;