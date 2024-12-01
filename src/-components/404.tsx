import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-4">Page Not Found</p>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;