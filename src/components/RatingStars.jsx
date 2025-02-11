import React from "react";

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`ri-star${rating >= i ? "-fill" : "-line"} text-yellow-400 text-lg`} />
    );
  }

  return <div className="flex space-x-1">{stars}</div>;
};

export default RatingStars;
