// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ link, imgSrc, title }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={`${title} Icon`} />
        <div className="card-title">{title}</div>
      </a>
    </div>
  );
};

export default Card;
