import React from 'react'
import ArrivalCard from '../cards/arrivalCard/ArrivalCard'

import { newArrivalData } from '../../data/data'
function Arrivals() {
  return (
    <div>
      <section className="arrivals container">
        <div className="arrivals__header-holder">
          <h5 className="arrivals__header">New Arrival (Winter Collection)</h5>
          <a className="arrivals__link" href="#">
            View all
          </a>
        </div>
        <div className="arrivals__holder">
          <div className="arrivals__image-holder">
            <img
              className="arrivals__image"
              src="/assets/modelCap.jpeg"
              alt="navy blue hat"
            />
            <div className="arrivals__image-text-holder">
              <h4 className="arrivals__image-header">Navy Blue Hat</h4>
              <p className="arrivals__image-description">
                We Essentials is focused on creating affordable, high-quality,
                and long-lasting everyday clothing you can rely on. Our line of
                men's must-haves includes polo shirts, chino pants,
                classNameic-fit shorts, casual button-downs, and crew-neck
                teesto our.
              </p>
              <button className="arrivals__image-cta">Shop Now</button>
            </div>
          </div>

          <div className="arrivals__card-holder">
            {newArrivalData.map((arrival) => (
               <ArrivalCard 
               key={arrival.id}
               src={arrival.image.src}
               title={arrival.title}
               price={arrival.price}

               />
              
            ))}
            
          
          
          </div>
        </div>
      </section>
    </div>
  )
}

export default Arrivals
