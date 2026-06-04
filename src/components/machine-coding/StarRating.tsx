import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Star Rating</h1>

        <p className="text-gray-500 mb-8">How was your experience?</p>

        {/* Stars */}
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className={`cursor-pointer text-5xl transition-transform duration-200 hover:scale-125
              
              ${star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"}
              `}
            >
              ★
            </span>
          ))}
        </div>

        {/* Rating Text */}
        <p className="mt-6 text-lg font-medium text-gray-700">
          {rating > 0 ? `You rated ${rating} out of 5` : "Select a rating"}
        </p>
      </div>
    </div>
  );
};

export default StarRating;
