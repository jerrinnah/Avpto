import React from 'react'
// import { categoryData } from '../../../data/data';

function Card({ img, category, items }) {
  return (
    <div className="category__card">
      <img className="category__img" src={img} alt="Guys collection" />
      <div className="category__card-text">
        <h5 className="category__card-header">{category}</h5>
        <p className="category__card-count">{items}</p>
      </div>
    </div>
  )
}

export default Card
