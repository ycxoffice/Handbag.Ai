import React from "react";

const HandBagAI = () => {
  return (
    <div className="min-h-screen bg-pink-100 text-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-pink-600 text-center mb-8 animate-bounce">
          HandBag.ai
        </h1>
        <p className="text-lg text-center mb-12">
          Discover the leading brands in fashion, beauty, and lifestyle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-3xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-semibold text-pink-500 mb-4">
                Brand Name {index + 1}
              </h2>
              <p className="text-gray-600">Industry: Fashion, Beauty</p>
              <p className="text-gray-600">Category: Clothing, Jewelry</p>
              <p className="text-gray-600">Target Audience: Luxury Buyers</p>
              <p className="text-gray-600">Positioning: Premium</p>
              <p className="text-gray-600">Founded: 2015</p>
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-pink-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandBagAI;
