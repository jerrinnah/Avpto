import React from 'react'

function Navbar() {
  return (
    <div>
        <header className="header">
        <i className="fa-solid fa-bars header__menu"></i>
        <div className="header__brand-logo-holder">
          <p className="header__brand-logo">
            Avpto <span>.</span>
          </p>
        </div>
        <div>
          <ul className="header__nav-list">
            <li>
              <a className="header__nav-list-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="header__nav-list-item" href="#">
                Category
              </a>
            </li>
            <li>
              <a className="header__nav-list-item" href="#">
                Shop
              </a>
            </li>
            <li>
              <a className="header__nav-list-item" href="#">
                Exciting Others
              </a>
            </li>
            <li>
              <a className="header__nav-list-item" href="#">
                Track Order
              </a>
            </li>
            <li>
              <a className="header__nav-list-item" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="header__nav-list-item" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="header__icons">
          <i className="fa-solid fa-magnifying-glass header__icon--hidden"></i>
          <i className="fa-regular fa-heart header__icon--hidden"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-regular fa-user"></i>
        </div>
      </header>
    </div>
  )
}

export default Navbar