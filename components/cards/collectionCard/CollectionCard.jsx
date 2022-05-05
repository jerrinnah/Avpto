import React from 'react'


function CollectionCard({ src, title, reviews, price }) {
  
  return (
    <div className="collection__card">
      <img className="collection__card-image" src={src} alt="card image" />

      <div className="collection__text-area">
        <h5 className="collection__tittle">{title}</h5>
        <div className="collection__card-footer">
          <div className="collection__rating-holder">
            <span className="fa fa-star collection__rating collection__rating--checked"></span>
            <span className="fa fa-star collection__rating collection__rating--checked"></span>
            <span className="fa fa-star collection__rating "></span>
            <span className="fa fa-star collection__rating "></span>
            <span className="fa fa-star collection__rating "></span>
          </div>
          <p className="collection__review">(5 Reviews)</p>
          <p className="collection__price">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
