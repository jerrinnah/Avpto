import React from 'react'
import OffersCard from '../../components/offers/offersCard/OffersCard'

function Offers({ img, title, price }) {
  return (
    <div>
      <section className="offers container">
        <div className="offers__header-holder">
          <h5 className="offers__header">Exciting Offers (Winter)</h5>
          <div className="offers__angle-holder">
            <a href="">
              <i className="fa-solid fa-angle-left offers__angle "></i>
            </a>
            <a href="">
              <i className="fa-solid fa-angle-right offers__angle offers__angle--checked"></i>
            </a>
          </div>
        </div>
        <div className="offers__card-holder">
          <OffersCard img="/assets/shoe3.jpg" title="Shoe" />
          <OffersCard img="/assets/glass8.jpeg" title="Dark Shades" />
          <OffersCard img="/assets/shirt1.jpeg" title="Stripped shirt" />
          <OffersCard img="/assets/shoe4.webp" title="Jordans" />
          <OffersCard img="/assets/shoe3.jpg" title="Black office heels" />
          <OffersCard img="/assets/shoe10.webp" title="Poka Dot Heels" />
        </div>
      </section>
    </div>
  )
}

export default Offers
