// pages/index.tsx (Based on your second screenshot)
import '../app/globals.css'
import React from 'react';
import Link from 'next/link'; // Import the Link component
import Button from '../components/common/Button'; // Assuming correct path

export default function Home() {
  return (
    // Assuming your overall structure includes Header/Layout here
    <div className="p-8"> 
      <h1 className='text-4xl text-blue-500'>Welcome Home!</h1>
      <p>Navigating to our features below.</p>
      
      {/* Navigation Options */}
      <div className="flex gap-6 mt-6">
        
        {/* Link 1: Generate Text */}
        <Link href="/generate-text-ai" passHref legacyBehavior>
          <Button 
            size="medium" 
            shape="rounded-md"
            // Use the button component's standard styling props
            className="bg-green-500 hover:bg-green-600"
          >
            Generate Text
          </Button>
        </Link>
        
        {/* Link 2: Text to Image */}
        <Link href="/text-to-image" passHref legacyBehavior>
          <Button 
            size="medium" 
            shape="rounded-md"
            className="bg-blue-500 hover:bg-blue-600"
          >
            Text to Image
          </Button>
        </Link>
        
        {/* Link 3: Contact Us */}
        <Link href="/counter-app" passHref legacyBehavior>
          <Button 
            size="medium" 
            shape="rounded-md"
            className="bg-red-500 hover:bg-red-600"
          >
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
}