import React from 'react'

function Footer() {
    return (
        <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 footer-navigation">
            <h3><a href="#">Camilerim</a></h3>
            <p className="links">
              <a href="#">Home</a><strong> · </strong><a href="#">Blog</a
              ><strong> · </strong><a href="#">Pricing</a><strong> · </strong
              ><a href="#">About</a><strong> · </strong><a href="#">Faq</a
              ><strong> · </strong><a href="#">Contact</a>
            </p>
            <p className="company-name">bodmedien © 2021</p>
          </div>
          <div className="col-sm-6 col-md-4 footer-contacts">
            <div>
              <span className="fa fa-map-marker footer-contacts-icon"> </span>
              <p>
                <span className="new-line-span">Sultan Ahmet Square</span
                >Istanbul, Turkey
              </p>
            </div>
            <div>
              <i className="fa fa-phone footer-contacts-icon"></i>
              <p className="footer-center-info email text-left">
                +1 555 123456
              </p>
            </div>
            <div>
              <i className="fa fa-envelope footer-contacts-icon"></i>
              <p><a href="#" target="_blank">support@camilerim.com</a></p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-md-4 footer-about">
            <h4>About the company</h4>
            <p>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
            <div className="social-links social-icons">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer
