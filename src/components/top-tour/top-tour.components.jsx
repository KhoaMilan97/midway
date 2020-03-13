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

const TopTour = () => (
  <React.Fragment>
    <OwlCarousel
      {...setting}
      className="owl-carousel owl-theme list_carousel add_bottom_30"
    >
      <div className="item">
        <div className="tour_container">
          <div className="ribbon_3 popular">
            <span>Popular</span>
          </div>
          <div className="img_container">
            <a href="single_tour.html">
              <img
                src="img/tour_box_1.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="short_info">
                <i className="icon_set_1_icon-44" />
                Historic Buildings
                <span className="price">
                  <sup>$</sup>39
                </span>
              </div>
            </a>
          </div>
          <div className="tour_title">
            <h3>
              <strong>Arc Triomphe</strong> tour
            </h3>
            <div className="rating">
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile" />
              <small>(75)</small>
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
        {/* End box tour */}
      </div>
      {/* /item */}
      <div className="item">
        <div className="tour_container">
          <div className="ribbon_3 popular">
            <span>Popular</span>
          </div>
          <div className="img_container">
            <a href="single_tour.html">
              <img
                src="img/tour_box_2.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="short_info">
                <i className="icon_set_1_icon-43" />
                Churches
                <span className="price">
                  <sup>$</sup>45
                </span>
              </div>
            </a>
          </div>
          <div className="tour_title">
            <h3>
              <strong>Notredame</strong> tour
            </h3>
            <div className="rating">
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile" />
              <small>(75)</small>
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
        {/* End box tour */}
      </div>
      {/* /item */}
      <div className="item">
        <div className="tour_container">
          <div className="ribbon_3 popular">
            <span>Popular</span>
          </div>
          <div className="img_container">
            <a href="single_tour.html">
              <img
                src="img/tour_box_3.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="badge_save">
                Save<strong>30%</strong>
              </div>
              <div className="short_info">
                <i className="icon_set_1_icon-44" />
                Historic Buildings
                <span className="price">
                  <sup>$</sup>48
                </span>
              </div>
            </a>
          </div>
          <div className="tour_title">
            <h3>
              <strong>Versailles</strong> tour
            </h3>
            <div className="rating">
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile" />
              <small>(75)</small>
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
        {/* End box tour */}
      </div>
      {/* /item */}
      <div className="item">
        <div className="tour_container">
          <div className="ribbon_3">
            <span>Top rated</span>
          </div>
          <div className="img_container">
            <a href="single_tour.html">
              <img
                src="img/tour_box_4.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="badge_save">
                Save<strong>20%</strong>
              </div>
              <div className="short_info">
                <i className="icon_set_1_icon-30" />
                Walking tour
                <span className="price">
                  <sup>$</sup>36
                </span>
              </div>
            </a>
          </div>
          <div className="tour_title">
            <h3>
              <strong>Pompidue</strong> tour
            </h3>
            <div className="rating">
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile" />
              <small>(75)</small>
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
        {/* End box tour */}
      </div>
      {/* /item */}
      <div className="item">
        <div className="tour_container">
          <div className="ribbon_3">
            <span>Top rated</span>
          </div>
          <div className="img_container">
            <a href="single_tour.html">
              <img
                src="img/tour_box_14.jpg"
                width={800}
                height={533}
                className="img-fluid"
                alt="tour"
              />
              <div className="short_info">
                <i className="icon_set_1_icon-28" />
                Skyline tours
                <span className="price">
                  <sup>$</sup>42
                </span>
              </div>
            </a>
          </div>
          <div className="tour_title">
            <h3>
              <strong>Tour Eiffel</strong> tour
            </h3>
            <div className="rating">
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile" />
              <small>(75)</small>
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
        {/* End box tour */}
      </div>
      {/* /item */}
    </OwlCarousel>
    {/* /carousel */}
  </React.Fragment>
);

export default TopTour;
