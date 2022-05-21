import React from 'react'
import Button from '../button/Button'

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero__content">
        <div className="hero__image-holder">
          <img
            className="hero__image"
            src="/assets/images/kindpng_42128.png"
            alt="hero image"
          />
        </div>
        <div className="hero__text-container">
          <p className="hero__text-header">For the Best</p>
          <h2 className="hero__text-subheader">Discount Sale</h2>
          <p className="hero__text-description">
            The Big Offer Day Extra 10% Off
          </p>
          <div className="hero__time-container">
            <div className="hero__time">
              <h5>01</h5>
              <p>Days</p>
            </div>
            <div className="hero__time">
              <h5>05</h5>
              <p>Hours</p>
            </div>
            <div className="hero__time">
              <h5>21</h5>
              <p>Mins</p>
            </div>
            <div className="hero__time">
              <h5>21</h5>
              <p>Secs</p>
            </div>
          </div>
          <Button color='#f3753b' text='Order Now'/>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
