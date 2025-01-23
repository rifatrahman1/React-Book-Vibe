// ErrorPage.js
import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="text-lg mt-2 text-gray-600">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <a 
        href="/" 
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Go Back Home
      </a>
    </div>
  );
};

export default Error;