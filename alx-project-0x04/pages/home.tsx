// pages/home.tsx
import '../app/globals.css'
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className='text-blue-700 text-4xl text-center'>Welcome Home!</h1>
      <p className='text-gray-600 text-2xl text-center'>This is the main content for the Home page.</p>
    </div>
  );
};

export default HomePage;