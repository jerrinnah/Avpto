import React from 'react'

function Benefits() {
  return (
    <div>
         <section className="benefits container">
        <div className="benefits__card">
          <div className="benefits__icon-holder">
            <i className="fa-solid fa-van-shuttle benefits__icon"></i>
          </div>
          <div className="benefits__text-holder">
            <h4 className="benefits__header">Free Shipping</h4>
            <p className="benefits__description">Free shipping on all order</p>
          </div>
        </div>
        <div className="benefits__card">
          <div className="benefits__icon-holder">
            <i className="fa-solid fa-clock-rotate-left benefits__icon"></i>
          </div>
          <div className="benefits__text-holder">
            <h4 className="benefits__header">Online Support</h4>
            <p className="benefits__description">
              Online suppor 24 hours a day
            </p>
          </div>
        </div>
        <div className="benefits__card">
          <div className="benefits__icon-holder">
            <i className="fa-solid fa-circle-dollar-to-slot benefits__icon"></i>
          </div>
          <div className="benefits__text-holder">
            <h4 className="benefits__header">Money Return</h4>
            <p className="benefits__description">Back Guarantee under 5 days</p>
          </div>
        </div>
        <div className="benefits__card">
          <div className="benefits__icon-holder">
            <i className="fa-solid fa-power-off benefits__icon"></i>
          </div>
          <div className="benefits__text-holder">
            <h4 className="benefits__header">Member Disscount</h4>
            <p className="benefits__description">On every order over & 200</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits