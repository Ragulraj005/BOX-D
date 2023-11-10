import React, { useState, useEffect } from 'react';
import './gameRating.css';

function GameRating({ rating }) {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    let stars = [];
    if (rating < 0 || rating > 5) {
      return [0];
    }
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  };

  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <div className='gameRating'>
      {stars.map((star, index) => (
        <i key={index} className="bi bi-star-fill"></i>
      ))}
    </div>
  );
}

export default GameRating;
