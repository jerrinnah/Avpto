import React from 'react'

function OffersCard({img, title, reviews, price, discount}) {
  return (
    <div className="offers__card">
            <img
              className="offers__card-image"
              src={img}
              alt="card image"
            />
            <div className="offers__card-text-holder">
              <h5 className="offers__card-header">{title}</h5>
              <div className="offers__rating-holder">
                <div>
                  <span className="fa fa-star offers__rating offers__rating--checked"></span>
                  <span className="fa fa-star offers__rating offers__rating--checked"></span>
                  <span className="fa fa-star offers__rating offers__rating--checked"></span>
                  <span className="fa fa-star offers__rating offers__rating--checked"></span>
                  <span className="fa fa-star offers__rating"></span>
                </div>
                <p className="offers__card-review">(7 Reviews)</p>
              </div>
              <div className="offers__card-footer">
                <div className="offers__prices">
                  <p className="offers__price">$130.00 </p>
                  <p className="offers__price offers__price--slashed">
                    $175.00
                  </p>
                </div>
                <p className="offers__discount">10% Off</p>
              </div>
            </div>
          </div>
  )
}

export default OffersCard