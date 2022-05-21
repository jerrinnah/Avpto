import React from 'react'

function ArrivalCard({ src, title, review, price }) {
  return (
    <div className="arrivals__card">
      <img className="arrivals__card-image" src={src} alt="card image" />
      <div className="arrivals__card-text-holder">
        <h5 className="arrivals__card-header">{title}</h5>
        <div className="price">
          <p>{review}</p>
          <p>${price}</p> </div>
      </div>
    </div>
  )
}

export default ArrivalCard
