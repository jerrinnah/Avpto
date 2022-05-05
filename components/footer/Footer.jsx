import React from 'react'

function Footer() {
  return (
    <div>
      {' '}
      <footer className="footer">
        <div className="footer__left">
          <div className="footer__social">
            <p className="footer__brand-logo">
              Avpto <span>.</span>
            </p>
            <p className="footer__social-description">
              The best Fashion shop in your area. Now <br /> you can buy your
              favorite one.
            </p>
            <div className="footer__social-media-holder">
              <a
                className="footer__social-media footer__logo--facebook"
                href="#"
              >
                <img
                  className="footer__logo"
                  src="./assets/images/facebook.png"
                  alt="facebook logo"
                />
              </a>
              <a className="footer__social-media footer__logo--google" href="#">
                <img
                  className="footer__logo"
                  src="./assets/images/google.png"
                  alt="google logo"
                />
              </a>
              <a
                className="footer__social-media footer__logo--instagram"
                href="#"
              >
                <img
                  className="footer__logo"
                  src="./assets/images/1_Instagram_colored_svg_1-512.webp"
                  alt="instagram logo"
                />
              </a>
              <a
                className="footer__social-media footer__logo--twitter"
                href="#"
              >
                <img
                  className="footer__logo"
                  src="./assets/images/twitter.png"
                  alt="twitter logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__mid">
          <div className="footer__accounts">
            <h5 className="footer__accounts-header">Your Account</h5>
            <ul className="footer__account-links">
              <li>
                <a className="footer__account-link" href="#">
                  Personal Info
                </a>
              </li>
              <li>
                <a className="footer__account-link" href="#">
                  Orders
                </a>
              </li>
              <li>
                <a className="footer__account-link" href="#">
                  Credit slips
                </a>
              </li>
              <li>
                <a className="footer__account-link" href="#">
                  Address
                </a>
              </li>
              <li>
                <a className="footer__account-link" href="#">
                  My Wishlist
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__info">
            <h5 className="footer__info-header">Our Company</h5>
            <div className="footer__links_holder">
              <ul className="footer__info-links">
                <li>
                  <a className="footer__info-link" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="footer__info-link" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="footer__info-link" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="footer__info-link" href="#">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a className="footer__info-link" href="#">
                    Secure Payment
                  </a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>

          <div className="footer__info">
            <h5 className="footer__info-header">Our Address</h5>
            <div className="footer__links_holder">
              <ul className="footer__info-links">
                <li>
                  <a className="footer__info-link" href="#">
                   5499 point Bangladesh
                  </a>
                </li>
                <li>
                  <a className="footer__info-link" href="#">
                    +234 703008 784
                  </a>
                </li>
                <li>
                  <a className="footer__info-link" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="footer__info-link" href="#">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a className="footer__info-link" href="#">
                   store@email.com
                  </a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        
        </div>

        <div className="footer__map-holder">
          <img
            className="footer__map"
            src="/assets/images/247-2475996_transparent-world-map-png-transkground-countries-that.jpeg"
            alt="world map"
          />
        </div>
      </footer>
    </div>
  )
}

export default Footer
