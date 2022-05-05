import React from 'react'
import Card from '../cards/categoryCard/CategoryCard'

function Category({ image, category, item }) {
  return (
    <div>
      <section className="category container">
        <div className="category__header-holder">
          <p className="category__header">Category</p>
        </div>
        <div className='cards__holder'>

        <Card img="/assets/menC.png" category="Men's Category" items="532" />,
        <Card img="/assets/womenc.png" category="Women's Category" items="832" />,
        <Card img="/assets/kidsc.png" category="Kid's Category" items="532" />,
        <Card img="/assets/menC.png" category="High Fashion" items="532" />

        </div>
        {/* <div className="category__holder">
          <div className="category__card">
            <img
              className="category__image"
              src={""}
              alt="Men collection"
            />
            <div className="category__card-text">
              <h5 className="category__card-header">Men</h5>
              <p className="category__card-count">80 item</p>
            </div>
          </div>


          <div className="category__card">
            <img
              className="category__image"
              src="/assets/images/gradient1.jpg"
              alt="Women collection"
            />
            <div className="category__card-text">
              <h5 className="category__card-header">Women</h5>
              <p className="category__card-count">70 item</p>
            </div>
          </div>


          <div className="category__card">
            <img
              className="category__image"
              src="/assets/images/gradient1.jpg"
              alt="Kids collection"
            />
            <div className="category__card-text">
              <h5 className="category__card-header">Kids</h5>
              <p className="category__card-count">100 item</p>
            </div>
          </div>
          <div className="category__card">
            <img
              className="category__image"
              src="/assets/images/gradient1.jpg"
              alt="Fashion collection"
            />
            <div className="category__card-text">
              <h5 className="category__card-header">Fashion</h5>
              <p className="category__card-count">200 item</p>
            </div>
          </div>
        </div>  */}
      </section>
    </div>
  )
}

export default Category
