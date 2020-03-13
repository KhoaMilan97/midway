import React from "react";

import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const setting = {
  center: false,
  items: 2,
  loop: false,
  margin: 0,
  dots: false,
  nav: true,
  navText: [
    "<i class='arrow_carrot-left'></i>",
    "<i class='arrow_carrot-right'></i>"
  ],
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1
    },
    768: {
      nav: false,
      dots: true,
      items: 2
    },
    1024: {
      items: 3
    }
  }
};

const TopHotels = () => (
  <React.Fragment>
    <OwlCarousel
      {...setting}
      className="owl-carousel owl-theme list_carousel add_bottom_30"
    >
      <div className="item">
        <div className="hotel_container">
          <div className="ribbon_3 popular">
            <span>Popular</span>
          </div>
          <div className="img_container">
            <a href="single_hotel.html">
              <img
                src="img/hotel_1.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="score">
                <span>7.5</span>Good
              </div>
              <div className="short_info hotel">
                From/Per night
                <span className="price">
                  <sup>$</sup>59
                </span>
              </div>
            </a>
          </div>
          <div className="hotel_title">
            <h3>
              <strong>Park Hyatt</strong> Hotel
            </h3>
            <div className="rating">
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star-empty" />
            </div>
            {/* end rating */}
            <div className="wishlist">
              <a className="tooltip_flip tooltip-effect-1" href="/">
                +
                <span className="tooltip-content-flip">
                  <span className="tooltip-back">Add to wishlist</span>
                </span>
              </a>
            </div>
            {/* End wish list*/}
          </div>
        </div>
        {/* End box */}
      </div>
      {/* /item */}
      <div className="item">
        <div className="hotel_container">
          <div className="ribbon_3 popular">
            <span>Popular</span>
          </div>
          <div className="img_container">
            <a href="single_hotel.html">
              <img
                src="img/hotel_2.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="score">
                <span>9.0</span>Superb
              </div>
              <div className="short_info hotel">
                From/Per night
                <span className="price">
                  <sup>$</sup>45
                </span>
              </div>
            </a>
          </div>
          <div className="hotel_title">
            <h3>
              <strong>Mariott</strong> Hotel
            </h3>
            <div className="rating">
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star-empty" />
            </div>
            {/* end rating */}
            <div className="wishlist">
              <a className="tooltip_flip tooltip-effect-1" href="/">
                +
                <span className="tooltip-content-flip">
                  <span className="tooltip-back">Add to wishlist</span>
                </span>
              </a>
            </div>
            {/* End wish list*/}
          </div>
        </div>
        {/* End box */}
      </div>
      {/* /item */}
      <div className="item">
        <div className="hotel_container">
          <div className="ribbon_3">
            <span>Top rated</span>
          </div>
          <div className="img_container">
            <a href="single_hotel.html">
              <img
                src="img/hotel_3.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="score">
                <span>9.5</span>Superb
              </div>
              <div className="short_info hotel">
                From/Per night
                <span className="price">
                  <sup>$</sup>39
                </span>
              </div>
            </a>
          </div>
          <div className="hotel_title">
            <h3>
              <strong>Lumiere</strong> Hotel
            </h3>
            <div className="rating">
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star-empty" />
            </div>
            {/* end rating */}
            <div className="wishlist">
              <a className="tooltip_flip tooltip-effect-1" href="/">
                +
                <span className="tooltip-content-flip">
                  <span className="tooltip-back">Add to wishlist</span>
                </span>
              </a>
            </div>
            {/* End wish list*/}
          </div>
        </div>
        {/* End box */}
      </div>
      {/* /item */}
      <div className="item">
        <div className="hotel_container">
          <div className="ribbon_3">
            <span>Top rated</span>
          </div>
          <div className="img_container">
            <a href="single_hotel.html">
              <img
                src="img/hotel_4.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="score">
                <span>7.5</span>Good
              </div>
              <div className="short_info hotel">
                From/Per night
                <span className="price">
                  <sup>$</sup>45
                </span>
              </div>
            </a>
          </div>
          <div className="hotel_title">
            <h3>
              <strong>Novelle</strong> Hotel
            </h3>
            <div className="rating">
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star-empty" />
            </div>
            {/* end rating */}
            <div className="wishlist">
              <a className="tooltip_flip tooltip-effect-1" href="/">
                +
                <span className="tooltip-content-flip">
                  <span className="tooltip-back">Add to wishlist</span>
                </span>
              </a>
            </div>
            {/* End wish list*/}
          </div>
        </div>
        {/* End box */}
      </div>
      {/* /item */}
      <div className="item">
        <div className="hotel_container">
          <div className="ribbon_3">
            <span>Top rated</span>
          </div>
          <div className="img_container">
            <a href="single_hotel.html">
              <img
                src="img/hotel_5.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="score">
                <span>8.0</span>Good
              </div>
              <div className="short_info hotel">
                From/Per night
                <span className="price">
                  <sup>$</sup>39
                </span>
              </div>
            </a>
          </div>
          <div className="hotel_title">
            <h3>
              <strong>Louvre</strong> Hotel
            </h3>
            <div className="rating">
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star voted" />
              <i className="icon-star-empty" />
            </div>
            {/* end rating */}
            <div className="wishlist">
              <a className="tooltip_flip tooltip-effect-1" href="/">
                +
                <span className="tooltip-content-flip">
                  <span className="tooltip-back">Add to wishlist</span>
                </span>
              </a>
            </div>
            {/* End wish list*/}
          </div>
        </div>
        {/* End box */}
      </div>
      {/* /item */}
    </OwlCarousel>
    {/* /carousel */}
  </React.Fragment>
);

export default TopHotels;
